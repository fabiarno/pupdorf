# CLAUDE.md – Pupdorf

Pupdorf ist eine Fantasiestadt, erfunden und erzählt von Fiete (3 Jahre). Die Welt funktioniert oft gegenteilig zur Realität. Dieses Projekt ist eine digitale Aufbereitung seiner Geschichten – zum gemeinsamen Anschauen und als druckbares Kinderbuch.

## Projektstruktur

```
/Users/fabianarnold/Pupdorf/
├── index.html          # Einzige HTML-Datei, alle Views darin
├── css/
│   ├── style.css       # Haupt-Styling, Design-System, Variablen
│   └── print.css       # Druck-/Buchformat (A5, @media print)
└── js/
    └── main.js         # Navigation, Modal-Logik, ORTE-Daten, SVG-Illustrationen
```

**Kein Build-System.** Einfach `index.html` im Browser öffnen – funktioniert offline.

`notizen.md` ist die Quelldatei: Fietes Rohgeschichten, nach Datum sortiert. Neue Geschichten dort zuerst eintragen, dann in die App übertragen.

## Views / Sections

Die App hat vier Sections, die per `zeigSection(id)` gewechselt werden:

| Section-ID  | Nav-Label     | Inhalt |
|-------------|---------------|--------|
| `karte`     | 🗺️ Karte      | Startseite: illustrierte SVG-Stadtkarte + Ort-Karten-Grid |
| `regeln`    | 📋 Regeln     | Alle Pupdorf-Regeln als Karten |
| `woerter`   | 🗣️ Lulisch    | Lulisch-Wörterbuch |
| `buch`      | 📖 Buch       | Druckbare Buchseiten + Drucken-Button |

## Workflow: neue Geschichten ergänzen

Der Nutzer teilt neue Pupdorf-Geschichten im Chat. Claude übernimmt alle Änderungen.

**Reihenfolge bei neuen Inhalten:**

1. **`notizen.md` aktualisieren** – Rohnotizen unter dem aktuellen Datum eintragen, genau so wie sie erzählt wurden. Nichts interpretieren, nichts korrigieren.
2. **App aktualisieren** – je nach Art des Inhalts:
   - Neues Tier / neuer Ort → Eintrag in `ORTE` (`js/main.js`) + Karte + Grid-Karte + Buchseite
   - Neues Wort → Wörterbuch-Eintrag in `index.html` Section `#woerter`
   - Neue Regel → Regelkarte in `index.html` Section `#regeln`
   - Neue Fakten zu bestehendem Ort → `fakten`-Array im passenden `ORTE`-Eintrag ergänzen
3. **Buchseiten** – bei größeren neuen Inhalten eine neue Buchseite vor der Rückseite einfügen

**Was Claude nicht tun soll:**
- Fietes Geschichten "korrigieren" oder "realistischer" machen
- Inhalte weglassen weil sie seltsam klingen
- Eigene Pupdorf-Logik erfinden – nur aufschreiben was Fiete erzählt hat

## Inhalte erweitern

### Neuen Ort hinzufügen

**1. Eintrag in `ORTE` (js/main.js, ab Zeile ~45):**
```js
meinort: {
  titel: '🎯 Name des Orts',
  svg: meinortSVG(),        // Funktion die SVG-String zurückgibt
  fakten: [
    { emoji: '✨', text: 'Beschreibungstext, <strong>Fettschrift</strong> möglich' },
    // weitere Fakten...
  ]
},
```

**2. SVG-Illustration als Funktion (am Ende von main.js):**
```js
function meinortSVG() {
  return `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" class="modal-illu">
    <!-- SVG-Inhalt hier -->
  </svg>`;
}
```

**3. Karte: Klickbaren Bereich in der Stadtkarte (index.html, SVG `id="stadtplan"`):**
```html
<g class="karte-hotspot" onclick="oeffneOrt('meinort')" title="Name">
  <!-- SVG-Elemente für die Karte -->
  <text x="..." y="..." class="karte-label" text-anchor="middle">🎯 Name</text>
</g>
```

**4. Ort-Karte im Grid (index.html, `div.orte-grid`):**
```html
<a class="ort-card" onclick="oeffneOrt('meinort')">
  <svg class="ort-illu" viewBox="0 0 300 225" ...><!-- Miniatur-Illustration --></svg>
  <div class="ort-body">
    <h2>Name</h2>
    <p>Kurzbeschreibung</p>
  </div>
</a>
```

### Neues Lulisch-Wort

In `index.html`, Section `#woerter`, in `div.woerter-grid`:
```html
<div class="woerter-karte">
  <div class="lulisch">lulisches-wort</div>
  <div class="deutsch">= deutsche Bedeutung</div>
</div>
```
Optional andere Akzentfarbe: `style="border-top-color:#5ab55a"` und `class="lulisch" style="color:#5ab55a"`.

### Neue Pupdorf-Regel

In `index.html`, Section `#regeln`, in `div.orte-grid`:
```html
<div style="background:var(--paper);border-radius:var(--radius);padding:1.2rem;box-shadow:var(--shadow);border-left:5px solid #f5c842">
  <div style="font-size:2rem;margin-bottom:0.5rem">📋</div>
  <h3 style="margin-bottom:0.4rem">Regelname</h3>
  <p style="font-size:0.9rem;color:#666">Beschreibung der Regel.</p>
</div>
```

### Neue Buchseite

In `index.html`, Section `#buch`, im `div#buchseiten`, vor der Rückseite:
```html
<div class="buch-seite" style="background:white;border-radius:12px;overflow:hidden;margin-bottom:1rem;box-shadow:var(--shadow);display:flex;flex-direction:column">
  <svg viewBox="0 0 600 350" ...><!-- Illustration --></svg>
  <div class="b-text" style="padding:1rem 1.4rem 1.2rem;background:#fdf6e3;border-top:4px solid #f5c842">
    <h2 style="font-weight:900;margin-bottom:0.4rem">🎯 Titel</h2>
    <p style="font-size:0.88rem;line-height:1.55;color:#3a2e1e">Text der Buchseite.</p>
  </div>
</div>
```

## GitHub

- **Repo:** https://github.com/fabiarno/pupdorf
- **Nach jeder Änderung pushen** – kein Commit ohne anschließenden `git push origin main`
- Commit-Messages auf Deutsch, kurz und beschreibend
- Immer `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>` anhängen

```bash
git add index.html css/ js/ img/bauernhof.png   # ggf. weitere neue PNGs
git commit -m "Kurzbeschreibung der Änderung

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
git push origin main
```

---

## Karten-Illustrationen (transparente PNGs)

### Konzept

Jeder Ort hat **zwei Darstellungen**:

| Kontext | Format | Hintergrund | Quelle |
|---------|--------|-------------|--------|
| **Modal (Klick-Detail)** | SVG in `main.js` | Eigener Himmel/Boden | `function XXXsvg()` |
| **Karte (Einbettung)** | Transparentes PNG in `img/` | Kein Hintergrund – nur Vordergrund-Elemente | Aus Modal-SVG gerendert |

**Warum transparent?** Die Karte hat ihren eigenen Himmel, Bergen, Wiesenlandschaft. Die Illustrationen werden „eingeschnitten" (ausgeschnitten) darauf platziert – nur Gebäude/Figuren, kein eigener Himmel.

### Bauernhof als Vorbild

Der Bauernhof definiert den Standard für alle weiteren Karten-PNGs:

- **PNG-Größe:** 680×300 px
- **Auf der Karte:** `width="558" height="246"` (Scale 0.82)
- **Position:** unterhalb/an der Straße, im Vordergrund (rendert nach der Straße → liegt oben)
- **Klickfläche:** identische `<rect>` über dem `<image>`, `fill="transparent"`
- **Hover-Label:** mittig auf unterer Bildhälfte, dunkles Pill-Label

**Was im Karten-PNG fehlen muss** (gegenüber Modal-SVG):
- Himmelsgradient / Himmelsfläche
- Wolken
- Boden-Rechteck (Rindenmulch-Fläche)
- Schilder/Labels (werden auf der Karte nicht angezeigt)

**Was im Karten-PNG bleiben soll:**
- Gebäude / Hauptmotiv
- Figuren (Guaios, Personen, Tiere)
- Schatten unter den Elementen
- Dekoelemente die zum Motiv gehören

### Workflow: Neues Karten-PNG erstellen

1. **Modal-SVG als Basis nehmen** (aus `main.js`, Funktion `XXXsvg()`)
2. **Foreground-HTML erstellen** `/tmp/XXX_fg.html`:
   ```html
   <!DOCTYPE html>
   <html><head>
   <meta charset="UTF-8"/>
   <style>* { margin:0; padding:0; } body { background: transparent; width:680px; height:300px; overflow:hidden; }</style>
   <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap" rel="stylesheet"/>
   </head><body>
   <svg viewBox="0 0 680 300" width="680" height="300" xmlns="http://www.w3.org/2000/svg">
     <!-- NUR Vordergrund-Elemente – kein Himmel, kein Boden, keine Schilder -->
   </svg>
   </body></html>
   ```
3. **Mit Playwright rendern** (Node.js, Playwright in `img/node_modules/`):
   ```js
   const { chromium } = require('/Users/fabianarnold/Pupdorf/img/node_modules/playwright');
   (async () => {
     const browser = await chromium.launch();
     const page = await browser.newPage();
     await page.setViewportSize({ width: 680, height: 300 });
     await page.goto('file:///tmp/XXX_fg.html');
     await page.waitForTimeout(1500);
     await page.screenshot({
       path: '/Users/fabianarnold/Pupdorf/img/XXX.png',
       omitBackground: true,
       clip: { x: 0, y: 0, width: 680, height: 300 }
     });
     await browser.close();
   })();
   ```
4. **In Karte einbinden** (`index.html`, SVG `#stadtplan`):
   ```html
   <g class="karte-hotspot" onclick="oeffneOrt('XXX')">
     <image href="img/XXX.png" x="..." y="..." width="558" height="246" preserveAspectRatio="xMidYMid meet"/>
     <rect x="..." y="..." width="558" height="246" fill="transparent"/>
     <g class="hover-label">
       <rect x="..." y="..." width="170" height="26" rx="13" fill="#2c3e50e0"/>
       <text x="..." y="..." font-family="Nunito" font-weight="800" font-size="13" fill="white" text-anchor="middle">Emoji Name</text>
     </g>
   </g>
   ```

### Screenshot-Workflow (zum Prüfen)

```js
// /tmp/screenshot.js
const { chromium } = require('/Users/fabianarnold/Pupdorf/img/node_modules/playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1800, height: 1000 });
  await page.goto('file:///Users/fabianarnold/Pupdorf/index.html');
  await page.waitForTimeout(2000);
  const svg = await page.$('#stadtplan');
  await svg.screenshot({ path: '/tmp/karte.png' });
  await browser.close();
})();
// node /tmp/screenshot.js
```

---

## Design-System (css/style.css)

```css
--sky:         #b8e4f9   /* Himmelblau – Hintergründe */
--grass:       #7ec88a   /* Grün (wenig genutzt, kein Gras in Pupdorf!) */
--bark:        #c8a97e   /* Rindenmulch-Beige – Böden, Gehwege */
--gold:        #f5c842   /* Gold – Büro, Akzente, aktive Nav */
--silver:      #c0d0dc   /* Silber – Bürogebäude */
--orange:      #f28a2e   /* Orange – Sprache, CTAs, Olympia-Flagge */
--choco-green: #5ab55a   /* Grün – Schokolade */
--night:       #2c3e50   /* Dunkelblau – Deckblatt, Logo */
--paper:       #fdf6e3   /* Warmes Weiß – Karten, Buchseiten */
--ink:         #3a2e1e   /* Dunkelbraun – Fließtext */
```

**Font:** Nunito (Google Fonts, 400/600/700/800/900 weights). Kindgerecht, rund, gut lesbar.

**Klassen:**
- `.ort-card` – Klickbare Ort-Karte im Grid
- `.buch-seite` – Buchseite (für Druck und Vorschau)
- `.woerter-karte` – Lulisch-Wörterbuch-Eintrag
- `.karte-hotspot` – Klickbarer Bereich auf der SVG-Stadtkarte
- `.modal` / `.overlay` – Detail-Popup

## Buchformat / Drucken

- **Format:** A5 Hochformat (148 × 210 mm), definiert in `css/print.css`
- **Drucken:** Browser → Drucken → "Als PDF speichern"
- **Externe Druckservices:** Pixum, Blurb, CEWE (A5-Buchformat hochladen)
- **Buchseiten-Reihenfolge:** Deckblatt → Bauernhof → Büro → Eisbahn → Straßen & Wasser → Schokolade & Karneval → Sprache & Olympia → Rückseite
- **Layout:** Illustration (obere ~65%) + Textbereich unten mit farbigem Balken oben

## Bestehende Orte / Inhalte

| Key         | Titel                    | Kerninhalte |
|-------------|--------------------------|-------------|
| `bauernhof` | Der Bauernhof            | Guaio-Tiere (lieb aber beißen in Finger), Rindenmulch |
| `buero`     | Das Büro                 | Gold+Silber, Tiefgarage oben, Schreibtische unten, Lichtlöcher, ein Kollege heißt Thomas |
| `eisbahn`   | Die Eisbahn              | Lulisches Eishockey, springen, Purzelbäume, Löcher, Knieschoner |
| `strassen`  | Die Straßen              | Breit, kein Einbahn, Fahrrad Mitte, Gummistiefel |
| `wasser`    | Das Wasser               | Fließt von unten nach oben |
| `schokolade`| Schokolade & Karneval    | Schoko ist grün, Kuchen werfen, Smiley-Gummibärchen |
| `olympia`   | Olympia                  | Kanadische Flagge in Orange (wie Holland) |
| `sprache`   | Lulisch                  | Hallo = singzua |

**Allgemeine Regeln (Section `#regeln`, kein ORTE-Eintrag):**
- Nur Kinder dürfen nach Pupdorf – keine Babys (gilt für ganz Pupdorf)
- Sonntags darf man laut sein
- Es gibt ganz viele Ausnahmen
- Keine Pflanzen, nur Rindenmulch
- Viele Maschinen
- Kollegen sind sehr groß – Häuser deshalb höher gebaut

## Lulisch-Wörterbuch (Stand: Anfang)

| Lulisch | Deutsch |
|---------|---------|
| singzua | Hallo   |
| Thomas  | ein Kollege (nicht alle heißen so) |
| Guaio   | freundliches Tier, das in Finger beißt |
| lulisch | die Sprache von Pupdorf |

## Kontext

- **Erzähler:** Fiete, 3 Jahre alt
- **Charakter der Welt:** Vieles ist gegenteilig zur Realität (Wasser geht hoch, Garage oben, Schokolade grün). Alles ist möglich. Viele Ausnahmen zu allen Regeln.
- **Ton:** Kindgerecht, warm, spielerisch – kein Erklären, kein Korrigieren, einfach aufschreiben was Fiete erzählt.
- **Wachsendes Projekt:** Neue Geschichten können jederzeit ergänzt werden. Das Wörterbuch und die Orte sollen mit Fietes Geschichten wachsen.
