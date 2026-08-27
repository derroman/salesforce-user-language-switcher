# Privacy

## Single purpose description

```
This extension has one purpose: it changes the language of the Salesforce user who is currently logged in, from the page they are already on.

Salesforce offers this setting natively, but reaching it takes more than six clicks through the personal settings, and because that page does not open in a separate tab, the user usually loses the context they were working in. This extension reduces the same operation to a single click.

It queries which languages are active in the user's Salesforce organisation, shows them for selection, and writes the chosen one to a single field on the user's own record. No other field is written, and no other user is affected. Afterwards the open page is reloaded so the result becomes visible immediately.
```

## Permission justification

### activeTab justification

```
The extension needs the address of the currently active tab for two reasons.

First, to determine which Salesforce organisation the user is working in. The instance host is part of the URL, and without it the extension cannot direct its API calls at the correct organisation, nor tell whether the current page belongs to Salesforce at all.

Second, to reload that tab once the language has been changed. A language change only becomes visible after the page has been rendered again, so the extension reloads the tab the user is looking at.

No other tab is accessed, and the address is not stored or transmitted anywhere.
```

### cookies justification

```
The user is already logged into their Salesforce organisation in the browser. The extension reads the session cookie named "sid" for that Salesforce domain and uses it as the authorisation for its API calls against the very same organisation.

This is what allows the extension to ask which languages the organisation has configured and to write the selected language to the user's own record, acting with the user's own permissions.

Without this permission the user would have to authenticate a second time just to use the extension.

The token is used solely as an authorisation header towards the user's own Salesforce instance. It is not stored, not logged, and never transmitted to us or to any third party.
```

### Host permission justification

```
The extension is meant to work exclusively inside Salesforce and needs to reach the Salesforce REST API of the organisation the user is currently logged into.

The requested hosts are:
- https://*.salesforce.com/* covers the standard instance domains, including sandbox hosts such as *.sandbox.my.salesforce.com
- https://*.force.com/* covers Lightning Experience, which is served from *.lightning.force.com
- https://*.salesforce-setup.com/* covers the newer Setup domain *.my.salesforce-setup.com, which Salesforce introduced as a separate host for Setup pages

All three are required because a single Salesforce organisation serves its pages from different hosts depending on org type and on whether the user is inside Setup. Omitting one of them would leave the extension silently without function in those cases.

No hosts outside Salesforce are requested, and the extension makes no requests to any other domain.
```

## Are you using remote code?

```
No, I am not using remote code
```

## Data usage

```
Authentication information
Personally identifiable information
```

## Privacy policy URL

```
https://www.anthelion-impact.com/en/privacy-policy-salesforce-user-language-switcher.html
```
