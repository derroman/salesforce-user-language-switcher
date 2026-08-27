# Test instructions

```
Testing this extension requires a Salesforce organisation, because it works exclusively inside Salesforce and does nothing on any other page.

A free Salesforce Developer Edition org is sufficient and can be created at https://developer.salesforce.com/signup within a few minutes. No special configuration is needed, and any user of the org can use the extension on their own account.

Steps to test:

1. Log into the Salesforce org and open any Lightning page, for example a record or the home page
2. Click the extension icon in the browser toolbar
3. The popup lists the languages that are active in this organisation. A fresh Developer Edition org offers the full set of Salesforce platform languages
4. Click one of them, for example "Deutsch" or "Francais"
5. The page reloads and the Salesforce interface appears in the selected language
6. To switch back, click the extension icon again and choose "English"

The change affects only the language field of the user who is logged in. It can also be reverted manually in Salesforce under Settings > My Personal Information > Language & Time Zone.

If the popup reports that this is not a Salesforce page, the current tab is not on a Salesforce domain. The extension is deliberately limited to Salesforce hosts and stays inactive everywhere else.
```
