# Privacy Policy: Salesforce User Language Switcher

## The short version

Salesforce User Language Switcher talks to your own Salesforce instance and to nothing else. There
are no servers of ours that anything gets sent to, no analytics services, no tracking and no sharing
with third parties. The extension stores nothing, neither in your browser nor anywhere else.

It reads no data about other people. The only thing it changes is a single field on your own user
record: the configured language. That is exactly what it is for.

If you stop reading after this summary, you have the essentials. The rest is the detailed version,
because you are entitled to know exactly what happens.

## Who is responsible for the extension

Anthelion Impact GmbH
Semliner Straße 16
12555 Berlin
Germany

Represented by its managing director, Roman Hentschke
Commercial register: HRB 271678 B, Amtsgericht Berlin-Charlottenburg
Contact for data protection matters: datenschutz@anthelion-impact.com

## What the extension touches

The extension only becomes active when you click its icon in the browser bar. Without that click it
does nothing at all. What happens afterwards is described here in full.

### The session cookie of your Salesforce instance

The extension reads the cookie named `sid` for the Salesforce domain you are currently on. That
cookie is your active authentication token. The extension needs it because otherwise it could
neither ask your Salesforce instance which languages are available nor change your language setting
on your behalf.

The token is used solely to authorise requests to the very Salesforce instance you are working on.
It does not leave your browser in any other direction. It is not stored, not copied, not logged and
not passed on to anyone.

### The address of the active tab

The extension reads the URL of the tab you are currently in. From it, the extension works out which
Salesforce instance is involved and whether the page belongs to Salesforce at all. If it does not,
the extension stops and shows a message saying so.

### The languages available in your organisation

In order to offer you a choice, the extension queries which languages are active in your Salesforce
organisation. This is pure configuration data belonging to the organisation, such as "Deutsch" or
"English". It contains no information about individuals whatsoever.

### Your own user ID

Before the language can be changed, it must be clear which user record the change applies to. For
that, the extension asks Salesforce for your own user ID. It is yours, nobody else's.

### The change to your language setting

When you select a language, the extension changes exactly one field on your own Salesforce user
record: the language setting. No other field is written to, and no other user is touched. The
extension then reloads the open page so that you can see the result.

This is the same operation you could trigger by hand through your personal settings in Salesforce.
The extension saves you the clicks and the loss of your context, nothing more.

## What the extension does not do

- It sends nothing to Anthelion Impact. We learn nothing about your use of it.
- It runs no servers of its own and calls no third-party addresses.
- It contains no analytics tools, no tracking pixels, no advertising identifiers.
- It stores nothing. Neither `chrome.storage` nor `localStorage` nor any in-browser database is
  used. You can verify this in the source code, which is public.
- It sells no data and shares none with third parties, for any reason.
- It reads no data about other people in your organisation.
- It changes nothing other than your own language setting.
- It injects no code of its own into the Salesforce pages you visit and reads nothing
  from their content.

## Who is responsible for what

This distinction matters, so it is stated explicitly.

Anthelion Impact builds the extension and is responsible for what it does. We do not receive any
data in the process. All processing happens inside your browser, prompted by you.

For the personal data held in your Salesforce organisation, the organisation operating that instance
is responsible. In most cases that is your employer or your client. The extension is a tool in your
hands, just as the Salesforce interface itself is. Processing by Salesforce is governed by the terms
between Salesforce and that organisation.

## Legal bases

Reading the session cookie constitutes access to information stored on your terminal equipment.
Under Section 25(2) no. 2 of the German TDDDG, no consent is required for such access where it is
strictly necessary in order to provide a digital service explicitly requested by the user. That is
precisely the case here: you trigger the function yourself with a click, and without the token
neither the language list can be retrieved nor your setting changed.

Where personal data from your Salesforce organisation is processed in the course of this, that
happens within the responsibility of that organisation, on the basis of its own legal ground and
your permissions there. Anthelion Impact does not process this data and does not receive it.

## The permissions requested

Chrome shows you at installation time what an extension is allowed to do. Here is why each
individual permission is needed.

| Permission | What for |
|---|---|
| `cookies` | To read the session token of your Salesforce instance, without which no query is possible |
| `activeTab` | To identify the address of the tab you are currently working in |
| Access to `*.salesforce.com`, `*.force.com`, `*.salesforce-setup.com` | To be allowed to talk to exactly these instances and nowhere else |

The list is deliberately kept as short as possible. What is not needed is not requested.

## How long data exists

For as long as the selection window is open. After that, no longer. There is no storage from which
anything would still have to be deleted, because nothing was ever written into it.

Your changed language setting of course persists. It lives in your Salesforce organisation, though,
not with us, and you can change it there at any time, with or without this extension.

## Your rights

Under the General Data Protection Regulation you have, among others, the following rights against a
controller: access (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction of processing
(Art. 18), data portability (Art. 20) and objection (Art. 21).

The honest answer belongs here: we cannot give you information about your use of this extension,
because we know nothing about it. We hold no data that we could hand over, correct or delete. If you
want to know what data about you is stored in a Salesforce organisation, please address that request
to that organisation.

Questions about the extension itself are welcome. Just write to us.

## Lodging a complaint with a supervisory authority

You have the right to lodge a complaint with a data protection supervisory authority. The authority
responsible for us is:

Berliner Beauftragte für Datenschutz und Informationsfreiheit
Alt-Moabit 59-61, 10555 Berlin, Germany
Phone: +49 30 13889-0
Email: mailbox@datenschutz-berlin.de

You may equally contact the supervisory authority of your habitual residence or your place of work.

## Contact

datenschutz@anthelion-impact.com

Anthelion Impact GmbH
Semliner Straße 16
12555 Berlin
Germany

## Changes to this policy

If what the extension does with data changes, this text changes too, and it does so before the new
version is published. The date below tells you which version you are reading.

---

Last updated: 27 August 2026
