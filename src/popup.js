// Copyright 2021 Google LLC
//
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file or at
// https://developers.google.com/open-source/licenses/bsd

const activeTabQuery = {active: true, currentWindow: true};
let currentUrl;
// queries the currently active tab of the current active window
chrome.tabs.query(activeTabQuery, tabQueryCallback);

function tabQueryCallback(tabs) {

    let currentTab = tabs[0]; // there will be only one in this array
    currentUrl = currentTab.url;
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage(
            {
                type: 'QUERY_LANGUAGES',
                payload: {
                    message: {
                        currentUrl: currentTab.url
                    }
                },
            },
            response => {
                console.log(JSON.stringify(response, null, 1));
                if (!response) {
                    createErrorMessage('This is not a Salesforce Lightning Page');
                    return;
                }
                createRadioButtons(response);
            });
    });
}

function createRadioButtons(values) {
    if (!values) {
        console.log('Not a SF page');
        createErrorMessage('This is not a Salesforce Lightning Page');
        return;
    }
    hideSpinner();
    // document.getElementById('header').innerHTML = 'Please select a language';
    document.getElementById('footer').innerHTML = values.length + ' languages configured';
    values.forEach((value, i) => {

        let outerspan = document.createElement('span');
        outerspan.className = 'slds-radio';
        outerspan.id = 'outerspan-' + value.value;
        let radioInput = document.createElement('input');
        radioInput.id = 'radio-' + value.value;
        radioInput.type = "radio";
        radioInput.name = 'selectedLanguage';
        radioInput.value = value.value;
        radioInput.addEventListener("click", function (event) {
            setLanguage(event.target.value);
        });
        let label = document.createElement('label');
        label.htmlFor = 'radio-' + value.value;
        label.className = 'slds-radio__label';
        label.id = 'label-' + value.value;

        let dividerSpan = document.createElement('span');
        dividerSpan.className = 'slds-radio_faux';

        let labelSpan = document.createElement('span');
        labelSpan.className = 'slds-form-element__label';
        labelSpan.innerHTML = value.label;


        document.getElementById("formDiv").appendChild(outerspan);
        document.getElementById('outerspan-' + value.value).appendChild(radioInput);
        document.getElementById('outerspan-' + value.value).appendChild(label);
        document.getElementById('label-' + value.value).appendChild(dividerSpan);
        document.getElementById('label-' + value.value).appendChild(labelSpan);
    });
}

function setLanguage(selectedLanguage) {
    console.log(JSON.stringify(selectedLanguage, null, 1));
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage(
            {
                type: 'SET_LANGUAGE',
                payload: {
                    message: {
                        selectedLanguage: selectedLanguage,
                        currentUrl: currentUrl
                    }
                },
            },
            response => {
                console.log(JSON.stringify(response, null, 1));
                chrome.tabs.query(activeTabQuery, refreshPage);
            });
    });
}

function refreshPage(tabs) {
    let currentTab = tabs[0]; // there will be only one in this array
    chrome.tabs.reload(currentTab.id);
}

function createErrorMessage(message, submessage) {
    let outDiv = document.createElement('div');
    outDiv.className = 'slds-notify_container slds-is-relative';

    let errorToastDiv = document.createElement('div');
    outDiv.appendChild(errorToastDiv);
    errorToastDiv.className = 'slds-notify slds-notify_toast slds-theme_error';
    errorToastDiv.setAttribute('role', 'status');

    let contentDiv = document.createElement('div');
    errorToastDiv.appendChild(contentDiv);
    contentDiv.className = 'slds-notify__content';

    let headline = document.createElement('h2');
    contentDiv.appendChild(headline);
    headline.className = 'slds-text-heading_small';
    headline.innerHTML = message;

    if (submessage) {
        let subMessageP = document.createElement('p');
        contentDiv.appendChild(subMessageP);
        subMessageP.innerHTML = submessage;
    }
    hideSpinner();
    // document.getElementById('headerBodyDiv').innerHTML = '';
    document.getElementById('formDiv').appendChild(outDiv);


}
function hideSpinner(){
    document.getElementById('loading-spinner').style.display = 'none';
}