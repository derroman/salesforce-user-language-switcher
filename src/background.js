'use strict';

// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages

const salesforceUrlPattern = '.lightning.force.com';


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
    return await fetch(apiHost + '/services/data/v52.0/sobjects/User/' + userId, {
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
    return await fetch(apiHost + '/services/data/v50.0/chatter/users/me', {headers: headers}).then(toJson).then(async data => {
        return data.id;
    });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (!request.payload || !request.payload.message || !request.payload.message.currentUrl || !request.payload.message.currentUrl.includes(salesforceUrlPattern)) {
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

async function getAPIHostAndHeaders(currentUrl) {
    const url = new URL(currentUrl);
    let protocol = url.protocol;
    let host = url.host;
    let customDomain = host.substring(0, host.indexOf(".lightning.force.com"));
    return new Promise((resolve, reject) => {
        chrome.cookies.getAll({"domain": "salesforce.com", "name": "sid"}, function (cookies) {
            resolve(cookies);
        });
    }).then(cookies => {
        let apiHost;
        let headers;
        for (let cookie of cookies) {
            if (cookie.domain.startsWith(customDomain + ".")) {
                let token = cookie.value;
                let domain = cookie.domain;
                apiHost = protocol + '//' + domain;
                headers = {"Authorization": `Bearer ${token}`, "Content-Type": "application/json"};
                break;
            }
        }
        return [apiHost, headers];
    })
}
