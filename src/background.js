'use strict';

import {
    salesforceUrlPatterns,
    getAPIHostAndHeaders,
} from './salesforce-utils.js';

const salesforceVersion = 'v62.0';

async function toJson(response) {
    return await response.json()
}


async function queryLanguagesFromSalesforce(apiHost, headers) {
    return await fetch(apiHost + '/services/data/v50.0/sobjects/User/describe', {headers: headers}).then(toJson).then(async data => {
        let availableLanguages = data.fields.find(field => {
            return field.name === 'LanguageLocaleKey';
        });
        return availableLanguages.picklistValues.filter(item => item.active === true);
    });
}

async function setUserLanguage(userId, userLanguage, apiHost, headers) {
    return await fetch(apiHost + '/services/data/' + salesforceVersion + '/sobjects/User/' + userId, {
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify({
            'LanguageLocaleKey': userLanguage
        })
    }).then(async data => {
        console.log(JSON.stringify(data));
    });
}

async function getUserInfo(apiHost, headers) {
    return await fetch(apiHost + '/services/data/' + salesforceVersion + '/chatter/users/me', {headers: headers}).then(toJson).then(async data => {
        return data.id;
    });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (!request.payload || !request.payload.message || !request.payload.message.currentUrl || !salesforceUrlPatterns.some(pattern => request.payload.message.currentUrl.includes(pattern))) {
        sendResponse(null);
        return;
    }
    (async () => {
        let apiHost, headers;
        [apiHost, headers] = await getAPIHostAndHeaders(request.payload.message.currentUrl);
        if (request.type === 'QUERY_LANGUAGES') {
            queryLanguagesFromSalesforce(apiHost, headers).then(res => {
                sendResponse(res);
            });
        } else if (request.type === 'SET_LANGUAGE') {
            getUserInfo(apiHost, headers).then(res => {
                setUserLanguage(res, request.payload.message.selectedLanguage, apiHost, headers).then(res => {
                    sendResponse('Set language to ' + request.payload.message.selectedLanguage + ' successfully');
                });
            });
        }

    })();
    return true;// keep the messaging channel open for sendResponse
});