# Datenschutzerklärung: Salesforce User Language Switcher

## Die kurze Fassung

Der Salesforce User Language Switcher spricht ausschließlich mit deiner eigenen Salesforce-Instanz.
Es gibt keine Server von uns, an die etwas gesendet wird, keine Analyse-Dienste, kein Tracking und
keine Weitergabe an Dritte. Die Erweiterung speichert nichts, weder in deinem Browser noch anderswo.

Sie liest keine Daten anderer Personen. Das Einzige, was sie verändert, ist ein einziges Feld an
deinem eigenen Benutzer: die eingestellte Sprache. Genau dafür ist sie da.

Wenn du nach dieser Zusammenfassung aufhören willst zu lesen, hast du das Wesentliche.
Der Rest ist die ausführliche Version, weil du ein Recht darauf hast, es genau zu wissen.

## Wer für die Erweiterung verantwortlich ist

Anthelion Impact GmbH
Semliner Straße 16
12555 Berlin
Deutschland

Vertreten durch den Geschäftsführer Roman Hentschke
Handelsregister: HRB 271678 B, Amtsgericht Berlin-Charlottenburg
Kontakt in Datenschutzfragen: datenschutz@anthelion-impact.com

## Was die Erweiterung berührt

Die Erweiterung wird nur aktiv, wenn du auf ihr Symbol in der Browserleiste klickst. Ohne diesen
Klick tut sie nichts. Was danach passiert, steht hier vollständig.

### Das Session-Cookie deiner Salesforce-Instanz

Die Erweiterung liest das Cookie mit dem Namen `sid` für die Salesforce-Domain, auf der du dich
gerade befindest. Dieses Cookie ist dein aktives Anmelde-Token. Sie braucht es, weil sie deine
Salesforce-Instanz sonst weder nach den verfügbaren Sprachen fragen noch deine Spracheinstellung in
deinem Namen ändern könnte.

Das Token wird ausschließlich als Autorisierung für Anfragen an genau die Salesforce-Instanz
verwendet, auf der du gerade arbeitest. Es verlässt deinen Browser in keine andere Richtung. Es wird
nicht gespeichert, nicht kopiert, nicht protokolliert und niemandem übermittelt.

### Die Adresse des aktiven Tabs

Die Erweiterung liest die URL des Tabs, in dem du gerade bist. Daraus erkennt sie, um welche
Salesforce-Instanz es sich handelt und ob die Seite überhaupt zu Salesforce gehört. Ist sie es
nicht, bricht die Erweiterung ab und zeigt eine entsprechende Meldung.

### Die verfügbaren Sprachen deiner Organisation

Um dir eine Auswahl anzeigen zu können, fragt die Erweiterung ab, welche Sprachen in deiner
Salesforce-Organisation aktiv sind. Das sind reine Konfigurationsdaten der Organisation, etwa
„Deutsch" oder „English". Sie enthalten keinerlei Angaben zu Personen.

### Deine eigene Benutzer-ID

Bevor die Sprache geändert werden kann, muss klar sein, an welchem Benutzer die Änderung erfolgen
soll. Dafür fragt die Erweiterung deine eigene Benutzer-ID bei Salesforce ab. Es ist deine, keine
fremde.

### Die Änderung deiner Spracheinstellung

Wenn du eine Sprache auswählst, ändert die Erweiterung genau ein Feld an deinem eigenen
Salesforce-Benutzer: die Spracheinstellung. Kein weiteres Feld wird beschrieben, und kein anderer
Benutzer wird angefasst. Anschließend lädt die Erweiterung die geöffnete Seite neu, damit du das
Ergebnis siehst.

Das ist derselbe Vorgang, den du auch von Hand über deine persönlichen Einstellungen in Salesforce
auslösen könntest. Die Erweiterung spart dir dabei die Klicks und den Verlust deines Kontexts, mehr
nicht.

## Was die Erweiterung nicht tut

- Sie sendet nichts an Anthelion Impact. Wir bekommen von deiner Nutzung nichts mit.
- Sie betreibt keine eigenen Server und ruft keine fremden Adressen auf.
- Sie enthält keine Analyse-Werkzeuge, keine Zählpixel, keine Werbe-IDs.
- Sie speichert nichts. Weder `chrome.storage` noch `localStorage` noch eine Datenbank im Browser
  kommen zum Einsatz. Du kannst das im Quelltext nachsehen, er ist offen.
- Sie verkauft keine Daten und gibt keine an Dritte weiter, aus keinem Anlass.
- Sie liest keine Daten über andere Personen deiner Organisation.
- Sie verändert nichts außer deiner eigenen Spracheinstellung.
- Sie fügt den Salesforce-Seiten, die du besuchst, keinen eigenen Code hinzu und liest
  nichts aus ihrem Inhalt.

## Wer wofür verantwortlich ist

Diese Unterscheidung ist wichtig, deshalb steht sie hier ausdrücklich.

Anthelion Impact stellt die Erweiterung her und ist dafür verantwortlich, was sie tut. Wir empfangen
dabei aber selbst keine Daten. Die gesamte Verarbeitung findet in deinem Browser statt, auf deine
Veranlassung hin.

Für die personenbezogenen Daten, die in deiner Salesforce-Organisation liegen, ist die Organisation
verantwortlich, die diese Instanz betreibt. Das ist in aller Regel dein Arbeitgeber oder dein Kunde.
Die Erweiterung ist dabei ein Werkzeug in deiner Hand, so wie es auch die Salesforce-Oberfläche
selbst ist. Für die Verarbeitung durch Salesforce gelten die Bedingungen zwischen Salesforce und
dieser Organisation.

## Rechtsgrundlagen

Das Auslesen des Session-Cookies ist ein Zugriff auf Informationen, die in deinem Endgerät
gespeichert sind. Nach § 25 Abs. 2 Nr. 2 TDDDG ist dafür keine Einwilligung erforderlich, wenn der
Zugriff unbedingt erforderlich ist, damit ein vom Nutzer ausdrücklich gewünschter digitaler Dienst
bereitgestellt werden kann. Genau das ist hier der Fall: Du löst die Funktion selbst durch einen
Klick aus, und ohne das Token lässt sich weder die Sprachliste abrufen noch deine Einstellung
ändern.

Soweit dabei personenbezogene Daten aus deiner Salesforce-Organisation verarbeitet werden, geschieht
das im Verantwortungsbereich dieser Organisation, auf Grundlage ihrer eigenen Rechtsgrundlage und
deiner dortigen Berechtigungen. Anthelion Impact verarbeitet diese Daten nicht und erhält sie nicht.

## Die angeforderten Berechtigungen

Chrome zeigt dir bei der Installation, was eine Erweiterung darf. Hier steht, warum jede einzelne
Berechtigung nötig ist.

| Berechtigung | Wofür |
|---|---|
| `cookies` | Um das Session-Token deiner Salesforce-Instanz zu lesen, ohne das keine Abfrage möglich ist |
| `activeTab` | Um die Adresse des Tabs zu erkennen, in dem du gerade arbeitest |
| Zugriff auf `*.salesforce.com`, `*.force.com`, `*.salesforce-setup.com` | Um mit genau diesen Instanzen sprechen zu dürfen und nirgendwo sonst |

Die Liste ist bewusst so kurz wie möglich gehalten. Was nicht gebraucht wird, wird auch nicht
angefordert.

## Wie lange Daten vorhanden sind

So lange das Auswahlfenster geöffnet ist. Danach nicht mehr. Es gibt keinen Speicher, aus dem noch
etwas gelöscht werden müsste, weil nie etwas hineingeschrieben wurde.

Deine geänderte Spracheinstellung bleibt selbstverständlich bestehen. Sie liegt aber in deiner
Salesforce-Organisation, nicht bei uns, und du kannst sie dort jederzeit wieder ändern, mit oder
ohne diese Erweiterung.

## Deine Rechte

Nach der Datenschutz-Grundverordnung stehen dir gegenüber einem Verantwortlichen unter anderem diese
Rechte zu: Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der
Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21).

An dieser Stelle gehört die ehrliche Antwort dazu: Wir können dir zu deiner Nutzung dieser
Erweiterung keine Auskunft erteilen, weil wir nichts über sie wissen. Es liegen bei uns keine Daten,
die wir herausgeben, berichtigen oder löschen könnten. Möchtest du wissen, welche Daten über dich in
einer Salesforce-Organisation gespeichert sind, richte die Anfrage bitte an diese Organisation.

Fragen zur Erweiterung selbst beantworten wir gern. Schreib uns einfach.

## Beschwerde bei einer Aufsichtsbehörde

Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Für uns zuständig ist:

Berliner Beauftragte für Datenschutz und Informationsfreiheit
Alt-Moabit 59-61, 10555 Berlin
Telefon: +49 30 13889-0
E-Mail: mailbox@datenschutz-berlin.de

Du kannst dich ebenso an die Aufsichtsbehörde deines gewöhnlichen Aufenthaltsorts oder deines
Arbeitsplatzes wenden.

## Kontakt

datenschutz@anthelion-impact.com

Anthelion Impact GmbH
Semliner Straße 16
12555 Berlin
Deutschland

## Änderungen dieser Erklärung

Ändert sich, was die Erweiterung mit Daten tut, ändert sich auch dieser Text, und zwar bevor die
neue Version veröffentlicht wird. Das Datum unten sagt dir, welchen Stand du gerade liest.

---

Stand: 27. August 2026
