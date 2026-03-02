// ─── Navigation zwischen Sections ───────────────────────────────
function zeigSection(id) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('nav ul a').forEach(a => a.classList.remove('active'));
  const sec = document.getElementById(id);
  if (sec) sec.classList.add('active');
  const link = document.querySelector(`nav ul a[data-section="${id}"]`);
  if (link) link.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── Modal öffnen / schließen ────────────────────────────────────
function oeffneOrt(ortId) {
  const ort = ORTE[ortId];
  if (!ort) return;

  const overlay = document.getElementById('overlay');
  document.getElementById('modal-titel').textContent = ort.titel;
  document.getElementById('modal-illu').innerHTML = ort.svg;
  const faktenEl = document.getElementById('modal-fakten');
  faktenEl.innerHTML = ort.fakten.map(f =>
    `<div class="fakt"><span class="emoji">${f.emoji}</span><p>${f.text}</p></div>`
  ).join('');

  overlay.classList.add('open');
}

function schliesseOverlay() {
  document.getElementById('overlay').classList.remove('open');
}

// Overlay schließen bei Klick außerhalb
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('overlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'overlay') schliesseOverlay();
  });

  // Standard-Section
  zeigSection('karte');

  // ─── Büro-Illustration in Kachel, Buchseite und Karte injizieren ───
  // Die SVG-Instanzen brauchen je eigene Gradienten-IDs damit url(#id)
  // korrekt aufgelöst wird (kein Cross-SVG-Shadow-Tree-Problem).

});

// ─── Daten: Alle Orte und ihre Inhalte ──────────────────────────
const ORTE = {

  bauernhof: {
    titel: '🐾 Der Bauernhof',
    svg: bauernhofSVG(),
    fakten: [
      { emoji: '🐾', text: 'Auf dem Pupdorfer Bauernhof leben die <strong>Guaio</strong> – seltsame, flauschige Tiere, die sehr freundlich sind.' },
      { emoji: '🤏', text: 'Aber Vorsicht: Guaios <strong>beißen in die Finger</strong>! Nicht aus Bosheit – das ist einfach ihr Begrüßungsritual.' },
      { emoji: '🌿', text: 'Rund um den Hof: kein Gras, kein Unkraut – nur weicher <strong>Rindenmulch</strong>. In Pupdorf gibt es keine Erde.' },
    ]
  },

  buero: {
    titel: '🏢 Das Büro',
    svg: bueroSVG(),
    fakten: [
      { emoji: '✨', text: 'Das Bürogebäude glänzt in <strong>Gold und Silber</strong> – man kann es von überall in Pupdorf sehen.' },
      { emoji: '🔄', text: 'In Pupdorf ist alles ein bisschen anders: Die <strong>Tiefgarage ist oben</strong>, und die Schreibtische sind unten.' },
      { emoji: '💡', text: 'Die Garage hat <strong>große Löcher im Boden</strong>, durch die Licht nach unten fällt – auf die Schreibtische!' },
      { emoji: '👥', text: 'Im Büro arbeiten ganz viele Leute zusammen in einem einzigen <strong>riesigen Zimmer</strong>.' },
      { emoji: '📏', text: 'Alle Kollegen in Pupdorf sind sehr groß. Deshalb wurden die Häuser <strong>viel höher gebaut</strong> als anderswo.' },
      { emoji: '🤝', text: 'Fietes Kollege heißt übrigens <strong>Thomas</strong>.' },
    ]
  },

  eisbahn: {
    titel: '⛸️ Die Eisbahn',
    svg: eisbahn_SVG(),
    fakten: [
      { emoji: '🏒', text: 'In Pupdorf spielen sie <strong>Lulisches Eishockey</strong> – das ist ganz anders als normales Eishockey.' },
      { emoji: '🤸', text: 'Beim Spielen muss man ständig <strong>springen und Purzelbäume machen</strong>. Wer stillsteht, verliert Punkte.' },
      { emoji: '🕳️', text: 'Im Eis gibt es <strong>Löcher</strong> – die gehören dazu! Man muss ihnen geschickt ausweichen.' },
      { emoji: '🦵', text: 'Alle tragen <strong>Knieschoner</strong>, damit man keine Spritze ins Knie braucht, wenn man hinfällt.' },
    ]
  },

  strassen: {
    titel: '🚲 Die Straßen',
    svg: strassenSVG(),
    fakten: [
      { emoji: '↔️', text: 'Pupdorfs Straßen sind <strong>breiter als überall sonst</strong> – es gibt einfach viel Platz.' },
      { emoji: '🚫', text: 'Es gibt <strong>keine Einbahnstraßen</strong>. Jeder darf überall in beide Richtungen fahren.' },
      { emoji: '🚲', text: 'Fahrradfahrer dürfen <strong>in der Mitte der Straße fahren</strong> – das ist das Beste an Pupdorf.' },
      { emoji: '🥾', text: 'Die beliebteste Fahrradausrüstung: <strong>Gummistiefel</strong>. Weil man nie weiß, wann Wasser von unten kommt.' },

    ]
  },

  wasser: {
    titel: '💧 Das Wasser',
    svg: wasserSVG(),
    fakten: [
      { emoji: '⬆️', text: 'In Pupdorf fließt Wasser <strong>von unten nach oben</strong>. Aus dem Boden schießt es hoch in den Himmel.' },
      { emoji: '☔', text: 'Deswegen tragen alle beim Fahrradfahren <strong>Gummistiefel</strong> – man weiß nie, wo Wasser hochkommt.' },
    ]
  },

  schokolade: {
    titel: '🍫 Schokolade & Essen',
    svg: schokoladeSVG(),
    fakten: [
      { emoji: '💚', text: 'Schokolade ist in Pupdorf <strong>grün</strong>. Immer. Alle Sorten, alle Marken – grün.' },
      { emoji: '🎪', text: 'Beim <strong>Karneval</strong> wird Kuchen geworfen – in die Luft und zu den Leuten!' },
      { emoji: '🐻', text: 'Außerdem fliegen beim Karneval <strong>Smiley-Gummibärchen</strong> durch die Straßen.' },
    ]
  },

  olympia: {
    titel: '🏅 Sport & Olympia',
    svg: olympiaSVG(),
    fakten: [
      { emoji: '🏳️', text: 'Pupdorf nimmt an den Olympischen Spielen teil – aber mit einer <strong>ganz besonderen Flagge</strong>.' },
      { emoji: '🍁', text: 'Die Flagge sieht aus wie die <strong>kanadische Flagge</strong> – aber in <strong>Orange</strong>, wie die Niederlande.' },
      { emoji: '🤸', text: 'Die beliebteste Pupdorfer Olympiadisziplin ist natürlich Lulisches Eishockey.' },
    ]
  },

  sprache: {
    titel: '🗣️ Lulisch',
    svg: spracheSVG(),
    fakten: [
      { emoji: '🌍', text: 'In Pupdorf spricht man <strong>Lulisch</strong> – eine eigene Sprache.' },
      { emoji: '👋', text: '"Hallo" heißt auf Lulisch: <strong>singzua</strong>' },
      { emoji: '📚', text: 'Das Wörterbuch wächst ständig – Fiete kennt noch viele weitere Wörter.' },
    ]
  },
};

// ─── SVG Illustrationen ──────────────────────────────────────────

function bauernhofSVG() {
  return `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" class="modal-illu">
    <defs>
      <!-- Himmelsgradient -->
      <linearGradient id="bh-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#7ec8f0"/>
        <stop offset="100%" stop-color="#c8e8f8"/>
      </linearGradient>
      <!-- Rindenmulch-Boden -->
      <linearGradient id="bh-mulch" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#c4935a"/>
        <stop offset="100%" stop-color="#9e7040"/>
      </linearGradient>
      <!-- Scheune Wand -->
      <linearGradient id="bh-barn" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#e06030"/>
        <stop offset="100%" stop-color="#c84820"/>
      </linearGradient>
      <!-- Guaio 1 (lila) -->
      <radialGradient id="bh-g1" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#f0d8ff"/>
        <stop offset="100%" stop-color="#c890e0"/>
      </radialGradient>
      <!-- Guaio 2 (gelb) -->
      <radialGradient id="bh-g2" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#fff5c0"/>
        <stop offset="100%" stop-color="#e0c060"/>
      </radialGradient>
    </defs>

    <!-- Himmel -->
    <rect width="680" height="300" fill="url(#bh-sky)"/>

    <!-- Wolken -->
    <g opacity="0.92">
      <ellipse cx="100" cy="55" rx="50" ry="22" fill="white"/>
      <ellipse cx="130" cy="45" rx="38" ry="20" fill="white"/>
      <ellipse cx="72" cy="50" rx="30" ry="16" fill="white"/>
    </g>
    <g opacity="0.88">
      <ellipse cx="560" cy="42" rx="45" ry="19" fill="white"/>
      <ellipse cx="590" cy="34" rx="32" ry="16" fill="white"/>
      <ellipse cx="535" cy="38" rx="28" ry="14" fill="white"/>
    </g>

    <!-- Rindenmulch-Boden -->
    <rect y="215" width="680" height="85" fill="url(#bh-mulch)"/>
    <!-- Mulch-Textur Striche -->
    <line x1="30" y1="228" x2="80" y2="225" stroke="#a06030" stroke-width="2" opacity="0.5"/>
    <line x1="120" y1="235" x2="185" y2="231" stroke="#a06030" stroke-width="2" opacity="0.5"/>
    <line x1="480" y1="230" x2="550" y2="227" stroke="#a06030" stroke-width="2" opacity="0.5"/>
    <line x1="580" y1="240" x2="650" y2="236" stroke="#a06030" stroke-width="2" opacity="0.5"/>
    <line x1="60" y1="248" x2="110" y2="244" stroke="#a06030" stroke-width="2" opacity="0.4"/>
    <line x1="500" y1="250" x2="570" y2="246" stroke="#a06030" stroke-width="2" opacity="0.4"/>

    <!-- Scheune Schatten -->
    <ellipse cx="345" cy="220" rx="115" ry="10" fill="#00000022"/>

    <!-- Scheune Wand -->
    <rect x="235" y="98" width="210" height="130" fill="url(#bh-barn)" rx="4"/>
    <!-- Scheune Dach -->
    <polygon points="220,100 345,32 470,100" fill="#a83010"/>
    <!-- Dach Highlight -->
    <polygon points="220,100 345,32 360,40 235,107" fill="#c84025" opacity="0.5"/>
    <!-- Dachgaube -->
    <rect x="312" y="50" width="66" height="38" fill="#b83820" rx="3"/>
    <polygon points="308,52 345,34 382,52" fill="#962810"/>

    <!-- Scheunentore -->
    <rect x="295" y="168" width="100" height="60" fill="#5a2e10" rx="5"/>
    <line x1="345" y1="168" x2="345" y2="228" stroke="#3a1e08" stroke-width="3"/>
    <!-- Tor-Bogen -->
    <path d="M295 175 Q345 155 395 175" fill="#6b3820" stroke="#3a1e08" stroke-width="2"/>
    <!-- Türknauf -->
    <circle cx="336" cy="200" r="4" fill="#c8a030"/>
    <circle cx="354" cy="200" r="4" fill="#c8a030"/>

    <!-- Scheune Fenster links -->
    <rect x="250" y="118" width="45" height="42" fill="#f0d898" rx="5" stroke="#a06030" stroke-width="2"/>
    <line x1="272" y1="118" x2="272" y2="160" stroke="#a06030" stroke-width="2"/>
    <line x1="250" y1="139" x2="295" y2="139" stroke="#a06030" stroke-width="2"/>

    <!-- Scheune Fenster rechts -->
    <rect x="390" y="118" width="45" height="42" fill="#f0d898" rx="5" stroke="#a06030" stroke-width="2"/>
    <line x1="412" y1="118" x2="412" y2="160" stroke="#a06030" stroke-width="2"/>
    <line x1="390" y1="139" x2="435" y2="139" stroke="#a06030" stroke-width="2"/>

    <!-- Heu im Fenster -->
    <ellipse cx="272" cy="154" rx="18" ry="6" fill="#e8b840" opacity="0.8"/>

    <!-- ── Guaio Tier 1 (lila, links) ── -->
    <!-- Körper (flauschig, rund) -->
    <ellipse cx="138" cy="238" rx="52" ry="36" fill="url(#bh-g1)"/>
    <!-- Flausch-Fell-Zacken am Körper -->
    <ellipse cx="100" cy="230" rx="14" ry="10" fill="#e0c8f8" opacity="0.8"/>
    <ellipse cx="178" cy="228" rx="14" ry="10" fill="#e0c8f8" opacity="0.8"/>
    <ellipse cx="138" cy="208" rx="12" ry="9" fill="#e8d4fc" opacity="0.7"/>
    <!-- Kopf -->
    <circle cx="138" cy="200" r="28" fill="url(#bh-g1)"/>
    <!-- Ohren (spitz-rund) -->
    <ellipse cx="118" cy="178" rx="9" ry="14" fill="#d0a8e8" transform="rotate(-15,118,178)"/>
    <ellipse cx="159" cy="178" rx="9" ry="14" fill="#d0a8e8" transform="rotate(15,159,178)"/>
    <!-- Ohren innen -->
    <ellipse cx="118" cy="180" rx="5" ry="8" fill="#f0c0f0" transform="rotate(-15,118,180)"/>
    <ellipse cx="159" cy="180" rx="5" ry="8" fill="#f0c0f0" transform="rotate(15,159,180)"/>
    <!-- Augen (groß, ausdrucksstark) -->
    <circle cx="127" cy="197" r="8" fill="white"/>
    <circle cx="149" cy="197" r="8" fill="white"/>
    <circle cx="129" cy="198" r="5" fill="#3a1a5a"/>
    <circle cx="151" cy="198" r="5" fill="#3a1a5a"/>
    <!-- Glanzpunkte in den Augen -->
    <circle cx="131" cy="196" r="2" fill="white"/>
    <circle cx="153" cy="196" r="2" fill="white"/>
    <!-- Nase -->
    <ellipse cx="138" cy="208" rx="6" ry="4" fill="#b070c0"/>
    <!-- Mund mit freundlichem Grinsen und Zähnchen -->
    <path d="M126 214 Q138 224 150 214" stroke="#8040a0" stroke-width="2.5" fill="white"/>
    <!-- Zähnchen (3 sichtbar) -->
    <rect x="130" y="214" width="5" height="5" fill="white" rx="1.5" stroke="#d0a0e0" stroke-width="0.5"/>
    <rect x="136" y="215" width="5" height="5" fill="white" rx="1.5" stroke="#d0a0e0" stroke-width="0.5"/>
    <rect x="142" y="214" width="5" height="5" fill="white" rx="1.5" stroke="#d0a0e0" stroke-width="0.5"/>
    <!-- Wangen-Röte -->
    <ellipse cx="119" cy="208" rx="7" ry="4" fill="#e090d0" opacity="0.5"/>
    <ellipse cx="157" cy="208" rx="7" ry="4" fill="#e090d0" opacity="0.5"/>
    <!-- Schwanz -->
    <ellipse cx="188" cy="248" rx="16" ry="12" fill="#d8b0f0" opacity="0.85"/>

    <!-- ── Guaio Tier 2 (gelb, rechts) ── -->
    <!-- Körper -->
    <ellipse cx="530" cy="240" rx="48" ry="33" fill="url(#bh-g2)"/>
    <!-- Flausch -->
    <ellipse cx="494" cy="232" rx="13" ry="9" fill="#fff0c0" opacity="0.8"/>
    <ellipse cx="566" cy="230" rx="13" ry="9" fill="#fff0c0" opacity="0.8"/>
    <ellipse cx="530" cy="212" rx="11" ry="8" fill="#fffad0" opacity="0.7"/>
    <!-- Kopf -->
    <circle cx="530" cy="205" r="26" fill="url(#bh-g2)"/>
    <!-- Ohren -->
    <ellipse cx="511" cy="184" rx="8" ry="13" fill="#d8c060" transform="rotate(-12,511,184)"/>
    <ellipse cx="550" cy="184" rx="8" ry="13" fill="#d8c060" transform="rotate(12,550,184)"/>
    <ellipse cx="511" cy="186" rx="4.5" ry="7" fill="#fff0a0" transform="rotate(-12,511,186)"/>
    <ellipse cx="550" cy="186" rx="4.5" ry="7" fill="#fff0a0" transform="rotate(12,550,186)"/>
    <!-- Augen -->
    <circle cx="520" cy="202" r="7" fill="white"/>
    <circle cx="541" cy="202" r="7" fill="white"/>
    <circle cx="522" cy="203" r="4.5" fill="#3a2a08"/>
    <circle cx="543" cy="203" r="4.5" fill="#3a2a08"/>
    <circle cx="523" cy="201" r="1.8" fill="white"/>
    <circle cx="544" cy="201" r="1.8" fill="white"/>
    <!-- Nase -->
    <ellipse cx="530" cy="212" rx="5" ry="3.5" fill="#c09020"/>
    <!-- Mund + Zähnchen -->
    <path d="M520 218 Q530 228 540 218" stroke="#906010" stroke-width="2.5" fill="white"/>
    <rect x="523" y="218" width="4.5" height="5" fill="white" rx="1.5" stroke="#d0b040" stroke-width="0.5"/>
    <rect x="529" y="219" width="4.5" height="5" fill="white" rx="1.5" stroke="#d0b040" stroke-width="0.5"/>
    <rect x="535" y="218" width="4.5" height="5" fill="white" rx="1.5" stroke="#d0b040" stroke-width="0.5"/>
    <!-- Wangen -->
    <ellipse cx="512" cy="211" rx="6" ry="4" fill="#e8c060" opacity="0.5"/>
    <ellipse cx="548" cy="211" rx="6" ry="4" fill="#e8c060" opacity="0.5"/>
    <!-- Schwanz -->
    <ellipse cx="576" cy="250" rx="15" ry="11" fill="#e8d070" opacity="0.85"/>

    <!-- Schild -->
    <rect x="14" y="120" width="178" height="58" fill="white" rx="10" stroke="#c8a060" stroke-width="3"/>
    <rect x="14" y="120" width="178" height="58" fill="none" rx="10" stroke="#e8c080" stroke-width="1" opacity="0.5"/>
    <text x="103" y="145" font-family="Nunito" font-weight="900" font-size="14" fill="#5a3010" text-anchor="middle">Pupdorfer Bauernhof</text>
    <text x="103" y="165" font-family="Nunito" font-size="11" fill="#a07040" text-anchor="middle">Heimat der Guaios!</text>
  </svg>`;
}

function bueroSVG() {
  /* Gebäude: x=220–480 (260px breit), y=10–355 (345px hoch) → schlankes Hochhaus
     Isometrische Seite: x=480–516
     3 Garage-Öffnungen (50px) mit 27–28px Abstand: cx=272, 350, 428
     3 Fenster-Etagen darunter                                              */
  return `<svg viewBox="0 0 680 460" xmlns="http://www.w3.org/2000/svg" class="modal-illu">
    <defs>
      <linearGradient id="bue-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#4a9fd4"/><stop offset="100%" stop-color="#aad4f0"/>
      </linearGradient>
      <linearGradient id="bue-gold" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#c48808"/><stop offset="30%" stop-color="#ffd848"/><stop offset="70%" stop-color="#f0c020"/><stop offset="100%" stop-color="#a07010"/>
      </linearGradient>
      <linearGradient id="bue-silver" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#6888a8"/><stop offset="45%" stop-color="#cce0f4"/><stop offset="100%" stop-color="#5070a0"/>
      </linearGradient>
      <linearGradient id="bue-garage" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#b8c0cc"/><stop offset="100%" stop-color="#8890a0"/>
      </linearGradient>
      <linearGradient id="bue-floor" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#b8a870"/><stop offset="100%" stop-color="#907040"/>
      </linearGradient>
      <linearGradient id="bue-light" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffe06090"/><stop offset="100%" stop-color="#ffe06000"/>
      </linearGradient>
      <linearGradient id="bue-glass" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#d8f0ff"/><stop offset="50%" stop-color="#98c8f0"/><stop offset="100%" stop-color="#68a8e0"/>
      </linearGradient>
      <linearGradient id="bue-door" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffe060"/><stop offset="100%" stop-color="#c07808"/>
      </linearGradient>
      <linearGradient id="bue-side" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#a08840"/><stop offset="100%" stop-color="#786020"/>
      </linearGradient>
    </defs>

    <!-- Himmel (460px hoch für mehr Luft über Gebäude) -->
    <rect width="680" height="460" fill="url(#bue-sky)"/>
    <g opacity="0.88"><ellipse cx="76" cy="44" rx="54" ry="22" fill="white"/><ellipse cx="110" cy="33" rx="36" ry="16" fill="white"/></g>
    <g opacity="0.80"><ellipse cx="580" cy="38" rx="48" ry="19" fill="white"/><ellipse cx="618" cy="27" rx="30" ry="13" fill="white"/></g>

    <!-- Gebäude 40px nach unten verschoben → mehr Himmel oben -->
    <g transform="translate(0,40)">
    <!-- Isometrische Seitenwand -->
    <polygon points="480,10 516,28 516,358 480,354" fill="url(#bue-side)"/>
    <!-- Gebäude-Schatten -->
    <rect x="226" y="18" width="306" height="348" rx="8" fill="#00000025"/>
    <!-- Silber-Fassade -->
    <rect x="220" y="10" width="260" height="345" rx="5" fill="url(#bue-silver)"/>

    <!-- Kranzgesims oben (passt genau auf Breite Fassade + Seite) -->
    <rect x="215" y="6" width="307" height="11" rx="3" fill="url(#bue-gold)"/>
    <!-- Dachzierleisten -->
    <rect x="250" y="0" width="9" height="9" rx="2" fill="url(#bue-gold)"/>
    <rect x="288" y="0" width="9" height="7" rx="2" fill="url(#bue-gold)"/>
    <rect x="432" y="0" width="9" height="7" rx="2" fill="url(#bue-gold)"/>
    <rect x="470" y="0" width="9" height="9" rx="2" fill="url(#bue-gold)"/>
    <!-- Fähnchen -->
    <line x1="350" y1="0" x2="350" y2="7" stroke="#906010" stroke-width="2"/>
    <polygon points="350,0 365,3 350,6" fill="#c83020"/>

    <!-- Gold-Trennbänder (zwischen Etagen) -->
    <rect x="220" y="100" width="260" height="32" fill="url(#bue-gold)"/>
    <rect x="220" y="202" width="260" height="26" fill="url(#bue-gold)"/>
    <rect x="220" y="290" width="260" height="22" fill="url(#bue-gold)"/>

    <!-- ── TIEFGARAGE (oben, y=10–100) ── -->
    <rect x="220" y="10" width="260" height="92" rx="5" fill="url(#bue-garage)"/>
    <!-- Schild im Gold-Band -->
    <rect x="224" y="102" width="252" height="17" fill="#00000015" rx="3"/>
    <text x="350" y="114" font-family="Nunito" font-weight="900" font-size="10" fill="#4a3000cc" text-anchor="middle">TIEFGARAGE · oben!</text>

    <!-- Garage-Öffnungen (3×50px, 27-28px Rand/Abstand)
         x=247–297 (cx=272), x=325–375 (cx=350), x=403–453 (cx=428) -->
    <rect x="247" y="24" width="50" height="64" fill="#68788892" rx="4"/>
    <path d="M247 46 Q272 28 297 46" fill="#5868789a"/>
    <rect x="325" y="24" width="50" height="64" fill="#68788892" rx="4"/>
    <path d="M325 46 Q350 28 375 46" fill="#5868789a"/>
    <rect x="403" y="24" width="50" height="64" fill="#68788892" rx="4"/>
    <path d="M403 46 Q428 28 453 46" fill="#5868789a"/>

    <!-- ── AUTOS (zentriert in Öffnungen: cx=272, 350, 428) ── -->
    <!-- Auto 1: Rot, cx=272 (x=249–295) -->
    <rect x="249" y="54" width="46" height="20" fill="#c83020" rx="5"/>
    <path d="M258 54 Q262 43 272 42 Q282 43 286 54" fill="#e04030"/>
    <path d="M285 54 Q295 49 295 54" fill="#d0eeff" opacity="0.9"/>
    <path d="M258 54 Q258 49 262 47 L271 43 L271 54" fill="#d0eeff" opacity="0.7"/>
    <rect x="265" y="46" width="18" height="8" fill="#d0eeff" rx="2" opacity="0.85"/>
    <rect x="292" y="57" width="5" height="5" fill="#fffaaa" rx="1"/>
    <rect x="249" y="57" width="4" height="5" fill="#ff3333" rx="1"/>
    <circle cx="261" cy="80" r="7" fill="#1a1a1a"/><circle cx="261" cy="80" r="4.5" fill="#444"/><circle cx="261" cy="80" r="2" fill="#999"/>
    <circle cx="283" cy="80" r="7" fill="#1a1a1a"/><circle cx="283" cy="80" r="4.5" fill="#444"/><circle cx="283" cy="80" r="2" fill="#999"/>
    <rect x="251" y="73" width="44" height="5" fill="#901808" rx="2"/>
    <!-- Auto 2: Blau, cx=350 (x=327–373) -->
    <rect x="327" y="56" width="46" height="20" fill="#1858a8" rx="5"/>
    <path d="M336 56 Q340 45 350 44 Q360 45 364 56" fill="#2070c0"/>
    <path d="M363 56 Q373 51 373 56" fill="#d0eeff" opacity="0.9"/>
    <path d="M336 56 Q336 51 340 49 L349 45 L349 56" fill="#d0eeff" opacity="0.7"/>
    <rect x="343" y="48" width="18" height="8" fill="#d0eeff" rx="2" opacity="0.85"/>
    <rect x="370" y="59" width="5" height="5" fill="#fffaaa" rx="1"/>
    <rect x="327" y="59" width="4" height="5" fill="#ff3333" rx="1"/>
    <circle cx="339" cy="82" r="7" fill="#1a1a1a"/><circle cx="339" cy="82" r="4.5" fill="#444"/><circle cx="339" cy="82" r="2" fill="#999"/>
    <circle cx="361" cy="82" r="7" fill="#1a1a1a"/><circle cx="361" cy="82" r="4.5" fill="#444"/><circle cx="361" cy="82" r="2" fill="#999"/>
    <rect x="329" y="75" width="44" height="5" fill="#0a3878" rx="2"/>
    <!-- Auto 3: Grün, cx=428 (x=405–451) -->
    <rect x="405" y="55" width="46" height="20" fill="#207830" rx="5"/>
    <path d="M414 55 Q418 44 428 43 Q438 44 442 55" fill="#30a040"/>
    <path d="M441 55 Q451 50 451 55" fill="#d0eeff" opacity="0.9"/>
    <path d="M414 55 Q414 50 418 48 L427 44 L427 55" fill="#d0eeff" opacity="0.7"/>
    <rect x="421" y="47" width="18" height="8" fill="#d0eeff" rx="2" opacity="0.85"/>
    <rect x="448" y="58" width="5" height="5" fill="#fffaaa" rx="1"/>
    <rect x="405" y="58" width="4" height="5" fill="#ff3333" rx="1"/>
    <circle cx="417" cy="81" r="7" fill="#1a1a1a"/><circle cx="417" cy="81" r="4.5" fill="#444"/><circle cx="417" cy="81" r="2" fill="#999"/>
    <circle cx="439" cy="81" r="7" fill="#1a1a1a"/><circle cx="439" cy="81" r="4.5" fill="#444"/><circle cx="439" cy="81" r="2" fill="#999"/>
    <rect x="407" y="74" width="44" height="5" fill="#0a4018" rx="2"/>

    <!-- Lichtlöcher am Garagenboden (cx=272, 350, 428, y=100) -->
    <ellipse cx="272" cy="100" rx="20" ry="8" fill="#88b8e0" stroke="#c8a010" stroke-width="2"/>
    <ellipse cx="350" cy="100" rx="20" ry="8" fill="#88b8e0" stroke="#c8a010" stroke-width="2"/>
    <ellipse cx="428" cy="100" rx="20" ry="8" fill="#88b8e0" stroke="#c8a010" stroke-width="2"/>
    <!-- Lichtstrahlen -->
    <polygon points="253,100 261,146 283,146 291,100" fill="url(#bue-light)" opacity="0.75"/>
    <polygon points="331,100 339,146 361,146 369,100" fill="url(#bue-light)" opacity="0.75"/>
    <polygon points="409,100 417,146 439,146 447,100" fill="url(#bue-light)" opacity="0.75"/>

    <!-- ── ETAGE 3 (y=136–198, 62px, 3 Fenster) ── -->
    <rect x="247" y="136" width="50" height="62" rx="4" fill="url(#bue-glass)" stroke="#c8a010" stroke-width="2.5"/>
    <line x1="272" y1="136" x2="272" y2="198" stroke="#c8a010" stroke-width="1.5" opacity="0.5"/>
    <line x1="247" y1="167" x2="297" y2="167" stroke="#c8a010" stroke-width="1.5" opacity="0.5"/>
    <polygon points="247,136 272,152 247,168" fill="white" opacity="0.13"/>
    <circle cx="272" cy="178" r="6" fill="#ffcc88"/>
    <rect x="265" y="185" width="14" height="9" fill="#3050a060" rx="2"/>
    <rect x="325" y="136" width="50" height="62" rx="4" fill="url(#bue-glass)" stroke="#c8a010" stroke-width="2.5"/>
    <line x1="350" y1="136" x2="350" y2="198" stroke="#c8a010" stroke-width="1.5" opacity="0.5"/>
    <line x1="325" y1="167" x2="375" y2="167" stroke="#c8a010" stroke-width="1.5" opacity="0.5"/>
    <polygon points="325,136 350,152 325,168" fill="white" opacity="0.13"/>
    <circle cx="350" cy="175" r="6" fill="#ffaa66"/>
    <rect x="343" y="182" width="14" height="9" fill="#3050a060" rx="2"/>
    <rect x="403" y="136" width="50" height="62" rx="4" fill="url(#bue-glass)" stroke="#c8a010" stroke-width="2.5"/>
    <line x1="428" y1="136" x2="428" y2="198" stroke="#c8a010" stroke-width="1.5" opacity="0.5"/>
    <line x1="403" y1="167" x2="453" y2="167" stroke="#c8a010" stroke-width="1.5" opacity="0.5"/>
    <polygon points="403,136 428,152 403,168" fill="white" opacity="0.13"/>
    <circle cx="428" cy="178" r="6" fill="#ffcc88"/>
    <rect x="421" y="185" width="14" height="9" fill="#3050a060" rx="2"/>

    <!-- ── ETAGE 2 (y=232–286, 54px, 3 Fenster) ── -->
    <rect x="247" y="232" width="50" height="54" rx="4" fill="url(#bue-glass)" stroke="#c8a010" stroke-width="2.5"/>
    <line x1="272" y1="232" x2="272" y2="286" stroke="#c8a010" stroke-width="1.5" opacity="0.5"/>
    <line x1="247" y1="259" x2="297" y2="259" stroke="#c8a010" stroke-width="1.5" opacity="0.5"/>
    <polygon points="247,232 272,246 247,260" fill="white" opacity="0.13"/>
    <circle cx="272" cy="270" r="6" fill="#ffcc88"/>
    <rect x="325" y="232" width="50" height="54" rx="4" fill="url(#bue-glass)" stroke="#c8a010" stroke-width="2.5"/>
    <line x1="350" y1="232" x2="350" y2="286" stroke="#c8a010" stroke-width="1.5" opacity="0.5"/>
    <line x1="325" y1="259" x2="375" y2="259" stroke="#c8a010" stroke-width="1.5" opacity="0.5"/>
    <polygon points="325,232 350,246 325,260" fill="white" opacity="0.13"/>
    <circle cx="350" cy="266" r="6" fill="#ffaa66"/>
    <rect x="403" y="232" width="50" height="54" rx="4" fill="url(#bue-glass)" stroke="#c8a010" stroke-width="2.5"/>
    <line x1="428" y1="232" x2="428" y2="286" stroke="#c8a010" stroke-width="1.5" opacity="0.5"/>
    <line x1="403" y1="259" x2="453" y2="259" stroke="#c8a010" stroke-width="1.5" opacity="0.5"/>
    <polygon points="403,232 428,246 403,260" fill="white" opacity="0.13"/>
    <circle cx="428" cy="268" r="6" fill="#ffcc88"/>

    <!-- ── ERDGESCHOSS: Eingang + Seitenfenster (y=316–355) ── -->
    <!-- Linkes Seitenfenster -->
    <rect x="226" y="318" width="44" height="24" rx="3" fill="url(#bue-glass)" stroke="#c8a010" stroke-width="2"/>
    <line x1="248" y1="318" x2="248" y2="342" stroke="#c8a010" stroke-width="1" opacity="0.4"/>
    <!-- Rechtes Seitenfenster -->
    <rect x="430" y="318" width="44" height="24" rx="3" fill="url(#bue-glass)" stroke="#c8a010" stroke-width="2"/>
    <line x1="452" y1="318" x2="452" y2="342" stroke="#c8a010" stroke-width="1" opacity="0.4"/>
    <!-- Eingangsportal -->
    <rect x="291" y="300" width="118" height="55" fill="url(#bue-door)" rx="4" stroke="#a07008" stroke-width="2.5"/>
    <path d="M291 316 Q350 298 409 316" fill="#e8b820" stroke="#a07008" stroke-width="2"/>
    <rect x="293" y="319" width="54" height="36" fill="#c8900e" rx="2" stroke="#a07008" stroke-width="1.5"/>
    <rect x="353" y="319" width="54" height="36" fill="#c8900e" rx="2" stroke="#a07008" stroke-width="1.5"/>
    <circle cx="344" cy="339" r="4" fill="#fffb80" stroke="#c8a000" stroke-width="1"/>
    <circle cx="356" cy="339" r="4" fill="#fffb80" stroke="#c8a000" stroke-width="1"/>
    <path d="M291 319 Q350 301 409 319" fill="#a0d8f8" stroke="#a07008" stroke-width="1.5"/>
    <!-- Stufen -->
    <rect x="279" y="355" width="142" height="7" fill="#c8a050" rx="2"/>
    <rect x="285" y="362" width="130" height="5" fill="#b89040" rx="2"/>
    <!-- Fassadenrand -->
    <rect x="220" y="10" width="260" height="345" rx="5" fill="none" stroke="#a08010" stroke-width="1.5" opacity="0.28"/>

    <!-- Boden / Gehweg (startet bei y=355 → direkt am Gebäudesockel, kein Schwebeeffekt) -->
    <rect y="355" width="680" height="105" fill="url(#bue-floor)"/>
    <line x1="196" y1="358" x2="196" y2="420" stroke="#907040" stroke-width="1" opacity="0.35"/>
    <line x1="524" y1="358" x2="524" y2="420" stroke="#907040" stroke-width="1" opacity="0.35"/>

    <!-- ── THOMAS ── (cx=112, Füße bei y=392) -->
    <ellipse cx="112" cy="392" rx="16" ry="5" fill="#00000020"/>
    <path d="M106 354 Q102 368 104 389" stroke="#203870" stroke-width="7" stroke-linecap="round" fill="none"/>
    <path d="M120 354 Q124 368 122 389" stroke="#203870" stroke-width="7" stroke-linecap="round" fill="none"/>
    <rect x="102" y="325" width="24" height="31" fill="#2848a0" rx="5"/>
    <path d="M102 333 Q88 326 76 316" stroke="#ffcc88" stroke-width="6" stroke-linecap="round" fill="none"/>
    <path d="M126 333 Q138 326 150 314" stroke="#ffcc88" stroke-width="6" stroke-linecap="round" fill="none"/>
    <circle cx="114" cy="312" r="17" fill="#ffcc88"/>
    <path d="M98 308 Q100 293 114 291 Q128 293 130 308" fill="#803010" stroke="#601808" stroke-width="1.5"/>
    <circle cx="108" cy="309" r="3.5" fill="#4a2800"/>
    <circle cx="120" cy="309" r="3.5" fill="#4a2800"/>
    <path d="M108 319 Q114 324 120 319" stroke="#a06030" stroke-width="2" fill="none" stroke-linecap="round"/>
    <rect x="68" y="283" width="52" height="20" fill="white" rx="5" stroke="#c8a010" stroke-width="1.5"/>
    <text x="94" y="297" font-family="Nunito" font-weight="900" font-size="10" fill="#5a4000" text-anchor="middle">Thomas</text>
    </g><!-- Ende translate(0,40) -->
  </svg>`;
}

function eisbahn_SVG() {
  return `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" class="modal-illu">
    <defs>
      <!-- Hallen-Himmel -->
      <linearGradient id="eis-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#d0eaff"/>
        <stop offset="100%" stop-color="#eef6ff"/>
      </linearGradient>
      <!-- Eis-Fläche -->
      <radialGradient id="eis-ice" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#eaf8ff"/>
        <stop offset="100%" stop-color="#b8d8f0"/>
      </radialGradient>
      <!-- Loch im Eis -->
      <radialGradient id="eis-hole" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#4a80b0"/>
        <stop offset="100%" stop-color="#2a5070"/>
      </radialGradient>
    </defs>

    <!-- Hintergrund: Eishalle -->
    <rect width="680" height="300" fill="url(#eis-bg)"/>

    <!-- Hallendach-Andeutung -->
    <rect x="0" y="0" width="680" height="20" fill="#b0c8e0" opacity="0.4"/>
    <!-- Hallenlampen -->
    <ellipse cx="170" cy="18" rx="22" ry="8" fill="#fff8d0" opacity="0.9"/>
    <ellipse cx="340" cy="18" rx="22" ry="8" fill="#fff8d0" opacity="0.9"/>
    <ellipse cx="510" cy="18" rx="22" ry="8" fill="#fff8d0" opacity="0.9"/>
    <!-- Lichtschein von Lampen -->
    <ellipse cx="170" cy="30" rx="30" ry="10" fill="#ffff8840" opacity="0.5"/>
    <ellipse cx="340" cy="30" rx="30" ry="10" fill="#ffff8840" opacity="0.5"/>
    <ellipse cx="510" cy="30" rx="30" ry="10" fill="#ffff8840" opacity="0.5"/>

    <!-- Bande (äußerer Rand, Schatten) -->
    <ellipse cx="340" cy="210" rx="292" ry="95" fill="#80a0c0" opacity="0.35"/>
    <!-- Bande (roter Rand) -->
    <ellipse cx="340" cy="208" rx="288" ry="92" fill="#d04040" stroke="#a82020" stroke-width="4"/>
    <!-- Bande (weiße Linie oben) -->
    <ellipse cx="340" cy="208" rx="288" ry="92" fill="none" stroke="white" stroke-width="2" opacity="0.5"/>

    <!-- Eisfläche -->
    <ellipse cx="340" cy="208" rx="278" ry="83" fill="url(#eis-ice)"/>
    <!-- Eis-Glanzlinien -->
    <ellipse cx="340" cy="208" rx="180" ry="50" fill="none" stroke="white" stroke-width="1.5" opacity="0.4"/>
    <ellipse cx="340" cy="208" rx="90" ry="26" fill="none" stroke="white" stroke-width="1" opacity="0.3"/>
    <!-- Mittellinie -->
    <line x1="340" y1="127" x2="340" y2="290" stroke="#6090c0" stroke-width="2" opacity="0.4"/>
    <!-- Mittelpunkt-Kreis -->
    <circle cx="340" cy="210" r="28" fill="none" stroke="#6090c0" stroke-width="2" opacity="0.4"/>

    <!-- ── Löcher im Eis ── -->
    <!-- Loch 1 -->
    <ellipse cx="215" cy="218" rx="26" ry="14" fill="url(#eis-hole)"/>
    <ellipse cx="215" cy="216" rx="20" ry="9" fill="#3a6890" opacity="0.6"/>
    <!-- Risslinien ums Loch -->
    <line x1="198" y1="210" x2="190" y2="205" stroke="#90b8d0" stroke-width="1.5" opacity="0.7"/>
    <line x1="235" y1="212" x2="243" y2="207" stroke="#90b8d0" stroke-width="1.5" opacity="0.7"/>
    <line x1="210" y1="230" x2="206" y2="238" stroke="#90b8d0" stroke-width="1.5" opacity="0.7"/>

    <!-- Loch 2 -->
    <ellipse cx="415" cy="192" rx="22" ry="12" fill="url(#eis-hole)"/>
    <ellipse cx="415" cy="190" rx="16" ry="8" fill="#3a6890" opacity="0.6"/>
    <line x1="400" y1="185" x2="393" y2="180" stroke="#90b8d0" stroke-width="1.5" opacity="0.7"/>
    <line x1="432" y1="186" x2="439" y2="181" stroke="#90b8d0" stroke-width="1.5" opacity="0.7"/>

    <!-- Loch 3 -->
    <ellipse cx="478" cy="228" rx="18" ry="10" fill="url(#eis-hole)"/>
    <ellipse cx="478" cy="226" rx="12" ry="6" fill="#3a6890" opacity="0.6"/>

    <!-- ── Kind 1: springt hoch (links) ── -->
    <!-- Sprung-Bewegungslinien -->
    <line x1="268" y1="178" x2="260" y2="155" stroke="#f0c030" stroke-width="2" stroke-dasharray="4,3" opacity="0.7"/>
    <line x1="278" y1="176" x2="272" y2="152" stroke="#f0c030" stroke-width="2" stroke-dasharray="4,3" opacity="0.7"/>
    <!-- Kopf -->
    <circle cx="272" cy="128" r="20" fill="#ffcc88"/>
    <!-- Haare -->
    <path d="M255 122 Q272 108 289 122" fill="#c07820" stroke="#a06010" stroke-width="1"/>
    <!-- Gesicht -->
    <circle cx="265" cy="124" r="3.5" fill="#5a3010"/>
    <circle cx="279" cy="124" r="3.5" fill="#5a3010"/>
    <circle cx="266" cy="123" r="1.2" fill="white"/>
    <circle cx="280" cy="123" r="1.2" fill="white"/>
    <path d="M265 134 Q272 140 279 134" stroke="#a06030" stroke-width="2" fill="none"/>
    <ellipse cx="263" cy="130" rx="4" ry="2.5" fill="#e09070" opacity="0.5"/>
    <ellipse cx="281" cy="130" rx="4" ry="2.5" fill="#e09070" opacity="0.5"/>
    <!-- Körper (roter Pullover) -->
    <rect x="258" y="148" width="28" height="32" fill="#e03030" rx="5"/>
    <!-- Arme hoch ausgestreckt -->
    <path d="M258 155 Q242 145 235 132" stroke="#ffcc88" stroke-width="8" stroke-linecap="round" fill="none"/>
    <path d="M286 155 Q300 142 308 130" stroke="#ffcc88" stroke-width="8" stroke-linecap="round" fill="none"/>
    <!-- Beine in der Luft (gespreizt) -->
    <path d="M265 180 Q255 195 248 210" stroke="#2040a0" stroke-width="7" stroke-linecap="round" fill="none"/>
    <path d="M279 180 Q289 195 296 210" stroke="#2040a0" stroke-width="7" stroke-linecap="round" fill="none"/>
    <!-- Knieschoner -->
    <rect x="241" y="196" width="14" height="11" fill="#f0d030" rx="3"/>
    <rect x="290" y="196" width="14" height="11" fill="#f0d030" rx="3"/>
    <!-- Schlittschuhe -->
    <rect x="242" y="208" width="12" height="7" fill="#e8e8e8" rx="2"/>
    <line x1="238" y1="215" x2="258" y2="215" stroke="#c0c0c0" stroke-width="2"/>
    <rect x="290" y="208" width="12" height="7" fill="#e8e8e8" rx="2"/>
    <line x1="286" y1="215" x2="306" y2="215" stroke="#c0c0c0" stroke-width="2"/>

    <!-- ── Kind 2: dreht Pirouette (Mitte) ── -->
    <!-- Rotations-Schwung-Linien -->
    <path d="M322 212 Q340 222 345 212 Q350 202 368 212" stroke="#6090c8" stroke-width="1.5" fill="none" opacity="0.45" stroke-dasharray="3,2"/>
    <!-- Kopf -->
    <circle cx="345" cy="148" r="16" fill="#ffaa66"/>
    <!-- Haare (Zopf fliegt beim Drehen) -->
    <path d="M331 142 Q345 131 359 142" fill="#803010" stroke="#601800" stroke-width="1"/>
    <path d="M356 134 Q368 120 363 111" stroke="#803010" stroke-width="5" stroke-linecap="round" fill="none"/>
    <!-- Gesicht -->
    <circle cx="339" cy="146" r="3" fill="#5a3010"/>
    <circle cx="351" cy="146" r="3" fill="#5a3010"/>
    <path d="M339 155 Q345 160 351 155" stroke="#a06030" stroke-width="2" fill="none"/>
    <!-- Körper (lila Kleid) -->
    <rect x="338" y="164" width="14" height="30" fill="#8030c0" rx="5"/>
    <!-- Arme weit ausgestreckt (Pirouetten-Pose) -->
    <path d="M339 172 Q318 162 302 155" stroke="#ffaa66" stroke-width="7" stroke-linecap="round" fill="none"/>
    <circle cx="302" cy="154" r="5" fill="#ffaa66"/>
    <path d="M352 172 Q373 162 390 155" stroke="#ffaa66" stroke-width="7" stroke-linecap="round" fill="none"/>
    <circle cx="390" cy="154" r="5" fill="#ffaa66"/>
    <!-- Bein (auf dem Eis, Standbein) -->
    <path d="M341 194 Q339 210 338 228" stroke="#5010a0" stroke-width="7" stroke-linecap="round" fill="none"/>
    <!-- Bein leicht angehoben (Arabesque) -->
    <path d="M349 194 Q356 207 360 220" stroke="#5010a0" stroke-width="7" stroke-linecap="round" fill="none"/>
    <!-- Knieschoner -->
    <rect x="330" y="218" width="13" height="10" fill="#f0d030" rx="3"/>
    <!-- Schlittschuhe -->
    <rect x="331" y="226" width="13" height="7" fill="#e8e8e8" rx="2"/>
    <line x1="326" y1="233" x2="348" y2="233" stroke="#c0c0c0" stroke-width="2"/>
    <rect x="355" y="218" width="11" height="7" fill="#e8e8e8" rx="2"/>
    <line x1="350" y1="225" x2="370" y2="225" stroke="#c0c0c0" stroke-width="2"/>
    <!-- Glitzer-Effekt (Pirouette) -->
    <circle cx="389" cy="143" r="3" fill="#f5e030" opacity="0.85"/>
    <circle cx="305" cy="147" r="2.5" fill="#f5e030" opacity="0.75"/>
    <circle cx="368" cy="128" r="2" fill="#f5e030" opacity="0.65"/>

    <!-- ── Kind 3: mit Schläger (rechts) ── -->
    <!-- Kopf -->
    <circle cx="488" cy="148" r="18" fill="#ffcc88"/>
    <!-- Helm -->
    <path d="M472 148 Q472 128 488 126 Q504 128 504 148" fill="#e03030" stroke="#a02020" stroke-width="1.5"/>
    <!-- Gesicht -->
    <circle cx="482" cy="148" r="3" fill="#5a3010"/>
    <circle cx="494" cy="148" r="3" fill="#5a3010"/>
    <ellipse cx="483" cy="147" rx="1" ry="1" fill="white"/>
    <ellipse cx="495" cy="147" rx="1" ry="1" fill="white"/>
    <path d="M483 157 Q488 162 493 157" stroke="#a06030" stroke-width="2" fill="none"/>
    <ellipse cx="480" cy="153" rx="4" ry="2.5" fill="#e09070" opacity="0.5"/>
    <ellipse cx="496" cy="153" rx="4" ry="2.5" fill="#e09070" opacity="0.5"/>
    <!-- Körper (grüner Pullover) -->
    <rect x="476" y="166" width="26" height="30" fill="#228040" rx="5"/>
    <!-- Arm mit Schläger -->
    <path d="M502 172 Q518 163 530 155" stroke="#ffcc88" stroke-width="7" stroke-linecap="round" fill="none"/>
    <!-- Schläger -->
    <line x1="530" y1="155" x2="558" y2="138" stroke="#6b3a1f" stroke-width="5" stroke-linecap="round"/>
    <rect x="546" y="132" width="22" height="10" fill="#5a3010" rx="3"/>
    <!-- Puck -->
    <ellipse cx="573" cy="148" rx="9" ry="6" fill="#222"/>
    <!-- Anderer Arm -->
    <path d="M476 172 Q462 163 455 155" stroke="#ffcc88" stroke-width="7" stroke-linecap="round" fill="none"/>
    <!-- Beine -->
    <path d="M482 196 Q478 215 472 230" stroke="#0a2060" stroke-width="7" stroke-linecap="round" fill="none"/>
    <path d="M494 196 Q498 215 504 230" stroke="#0a2060" stroke-width="7" stroke-linecap="round" fill="none"/>
    <!-- Knieschoner -->
    <rect x="465" y="212" width="14" height="11" fill="#f0d030" rx="3"/>
    <rect x="498" y="212" width="14" height="11" fill="#f0d030" rx="3"/>
    <!-- Schlittschuhe -->
    <rect x="466" y="228" width="13" height="7" fill="#e8e8e8" rx="2"/>
    <line x1="461" y1="235" x2="481" y2="235" stroke="#c0c0c0" stroke-width="2"/>
    <rect x="499" y="228" width="13" height="7" fill="#e8e8e8" rx="2"/>
    <line x1="494" y1="235" x2="514" y2="235" stroke="#c0c0c0" stroke-width="2"/>

    <!-- Label -->
    <rect x="14" y="14" width="218" height="58" fill="white" rx="10" stroke="#6090c0" stroke-width="2" opacity="0.95"/>
    <text x="123" y="39" font-family="Nunito" font-weight="900" font-size="14" fill="#1a3060" text-anchor="middle">Lulisches Eishockey</text>
    <text x="123" y="58" font-family="Nunito" font-size="11" fill="#5070a0" text-anchor="middle">Springen! Purzelbäume! Löcher!</text>
  </svg>`;
}

function strassenSVG() {
  return `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" class="modal-illu">
    <defs>
      <!-- Mulch-Bürgersteig -->
      <linearGradient id="str-mulch" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#d4aa78"/>
        <stop offset="100%" stop-color="#b08850"/>
      </linearGradient>
      <!-- Asphalt -->
      <linearGradient id="str-road" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#888890"/>
        <stop offset="100%" stop-color="#606068"/>
      </linearGradient>
      <!-- Himmel -->
      <linearGradient id="str-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#80c8f0"/>
        <stop offset="100%" stop-color="#c8e8fa"/>
      </linearGradient>
    </defs>

    <!-- Mulch-Hintergrund (Bürgersteige) -->
    <rect width="680" height="300" fill="url(#str-mulch)"/>
    <!-- Mulch-Textur -->
    <line x1="20" y1="40" x2="80" y2="36" stroke="#a07840" stroke-width="2" opacity="0.4"/>
    <line x1="140" y1="55" x2="220" y2="50" stroke="#a07840" stroke-width="2" opacity="0.4"/>
    <line x1="430" y1="42" x2="520" y2="38" stroke="#a07840" stroke-width="2" opacity="0.4"/>
    <line x1="580" y1="60" x2="660" y2="55" stroke="#a07840" stroke-width="2" opacity="0.4"/>
    <line x1="30" y1="240" x2="100" y2="237" stroke="#a07840" stroke-width="2" opacity="0.4"/>
    <line x1="450" y1="250" x2="540" y2="246" stroke="#a07840" stroke-width="2" opacity="0.4"/>
    <line x1="590" y1="235" x2="660" y2="232" stroke="#a07840" stroke-width="2" opacity="0.4"/>

    <!-- ── Horizontale Straße (sehr breit) ── -->
    <rect y="98" width="680" height="110" fill="url(#str-road)"/>
    <!-- Bordstein oben -->
    <rect y="93" width="680" height="9" fill="#a0a0a8"/>
    <rect y="94" width="680" height="3" fill="#c0c0c8" opacity="0.6"/>
    <!-- Bordstein unten -->
    <rect y="207" width="680" height="9" fill="#a0a0a8"/>
    <rect y="207" width="680" height="3" fill="#c0c0c8" opacity="0.6"/>
    <!-- Mittellinien horizontal (gestrichelt, weiß) -->
    <line x1="0" y1="140" x2="680" y2="140" stroke="white" stroke-width="3.5" stroke-dasharray="28,18" opacity="0.8"/>
    <line x1="0" y1="165" x2="680" y2="165" stroke="white" stroke-width="3.5" stroke-dasharray="28,18" opacity="0.8"/>

    <!-- ── Vertikale Straße (sehr breit) ── -->
    <rect x="268" y="0" width="144" height="300" fill="url(#str-road)"/>
    <!-- Bordstein links -->
    <rect x="261" y="0" width="10" height="300" fill="#a0a0a8"/>
    <rect x="261" y="0" width="3" height="300" fill="#c0c0c8" opacity="0.6"/>
    <!-- Bordstein rechts -->
    <rect x="409" y="0" width="10" height="300" fill="#a0a0a8"/>
    <rect x="409" y="0" width="3" height="300" fill="#c0c0c8" opacity="0.6"/>
    <!-- Mittellinien vertikal -->
    <line x1="322" y1="0" x2="322" y2="300" stroke="white" stroke-width="3.5" stroke-dasharray="28,18" opacity="0.8"/>
    <line x1="358" y1="0" x2="358" y2="300" stroke="white" stroke-width="3.5" stroke-dasharray="28,18" opacity="0.8"/>

    <!-- Kreuzung etwas heller -->
    <rect x="268" y="98" width="144" height="110" fill="#909098"/>

    <!-- ── Fahrradfahrer IN DER MITTE der horizontalen Straße ── -->
    <!-- Schatten -->
    <ellipse cx="486" cy="200" rx="28" ry="6" fill="#00000030"/>
    <!-- Fahrrad: Räder -->
    <circle cx="462" cy="188" r="15" fill="none" stroke="#2c3e50" stroke-width="3.5"/>
    <!-- Speichen Rad links -->
    <line x1="462" y1="174" x2="462" y2="202" stroke="#2c3e50" stroke-width="1.5"/>
    <line x1="448" y1="188" x2="476" y2="188" stroke="#2c3e50" stroke-width="1.5"/>
    <line x1="452" y1="178" x2="472" y2="198" stroke="#2c3e50" stroke-width="1.5"/>
    <line x1="452" y1="198" x2="472" y2="178" stroke="#2c3e50" stroke-width="1.5"/>
    <circle cx="462" cy="188" r="4" fill="#2c3e50"/>

    <circle cx="510" cy="188" r="15" fill="none" stroke="#2c3e50" stroke-width="3.5"/>
    <line x1="510" y1="174" x2="510" y2="202" stroke="#2c3e50" stroke-width="1.5"/>
    <line x1="496" y1="188" x2="524" y2="188" stroke="#2c3e50" stroke-width="1.5"/>
    <line x1="500" y1="178" x2="520" y2="198" stroke="#2c3e50" stroke-width="1.5"/>
    <line x1="500" y1="198" x2="520" y2="178" stroke="#2c3e50" stroke-width="1.5"/>
    <circle cx="510" cy="188" r="4" fill="#2c3e50"/>

    <!-- Rahmen -->
    <line x1="462" y1="188" x2="486" y2="170" stroke="#2c3e50" stroke-width="3"/>
    <line x1="510" y1="188" x2="486" y2="170" stroke="#2c3e50" stroke-width="3"/>
    <line x1="486" y1="170" x2="486" y2="155" stroke="#2c3e50" stroke-width="3"/>
    <!-- Lenker -->
    <line x1="480" y1="155" x2="494" y2="155" stroke="#2c3e50" stroke-width="3" stroke-linecap="round"/>
    <!-- Sattel -->
    <rect x="478" y="163" width="16" height="5" fill="#5a3010" rx="2"/>

    <!-- Fahrradfahrer-Körper -->
    <!-- Gummistiefel (rot, am Pedal) -->
    <rect x="456" y="178" width="13" height="17" fill="#e03030" rx="4"/>
    <rect x="453" y="193" width="18" height="6" fill="#c02020" rx="3"/>
    <rect x="503" y="184" width="13" height="17" fill="#e03030" rx="4"/>
    <rect x="500" y="199" width="18" height="6" fill="#c02020" rx="3"/>
    <!-- Beine -->
    <path d="M480 168 Q470 178 462 183" stroke="#2a5080" stroke-width="7" stroke-linecap="round" fill="none"/>
    <path d="M480 168 Q490 178 503 188" stroke="#2a5080" stroke-width="7" stroke-linecap="round" fill="none"/>
    <!-- Körper -->
    <rect x="472" y="140" width="22" height="28" fill="#e86030" rx="6"/>
    <!-- Arm zum Lenker -->
    <path d="M472 148 Q480 150 487 155" stroke="#ffcc88" stroke-width="6" stroke-linecap="round" fill="none"/>
    <path d="M494 148 Q490 150 487 155" stroke="#ffcc88" stroke-width="6" stroke-linecap="round" fill="none"/>
    <!-- Kopf -->
    <circle cx="483" cy="128" r="18" fill="#ffcc88"/>
    <!-- Haare (Helm-ähnlich, orange) -->
    <path d="M466 126 Q467 110 483 108 Q499 110 500 126" fill="#d06020" stroke="#a04010" stroke-width="1.5"/>
    <!-- Gesicht -->
    <circle cx="477" cy="126" r="3.2" fill="#5a3010"/>
    <circle cx="489" cy="126" r="3.2" fill="#5a3010"/>
    <circle cx="478" cy="125" r="1.2" fill="white"/>
    <circle cx="490" cy="125" r="1.2" fill="white"/>
    <path d="M477 136 Q483 141 489 136" stroke="#a06030" stroke-width="2" fill="none"/>
    <!-- Freudenröte -->
    <ellipse cx="474" cy="131" rx="4" ry="2.5" fill="#e09070" opacity="0.55"/>
    <ellipse cx="492" cy="131" rx="4" ry="2.5" fill="#e09070" opacity="0.55"/>

    <!-- "MITTE"-Schild am Fahrrad -->
    <rect x="525" y="168" width="110" height="34" fill="#f0d000" rx="8" stroke="#c0a000" stroke-width="2"/>
    <text x="580" y="182" font-family="Nunito" font-weight="900" font-size="11" fill="#5a3a00" text-anchor="middle">Fahrrad in</text>
    <text x="580" y="196" font-family="Nunito" font-weight="900" font-size="11" fill="#e03000" text-anchor="middle">DER MITTE!</text>

    <!-- "Kein Einbahn" Schild (links oben) -->
    <circle cx="140" cy="52" r="28" fill="#e03030" stroke="white" stroke-width="3.5"/>
    <rect x="122" y="47" width="36" height="10" fill="white" rx="2"/>
    <!-- Schildständer -->
    <line x1="140" y1="80" x2="140" y2="95" stroke="#5a5a5a" stroke-width="4"/>
    <rect x="125" y="93" width="30" height="5" fill="#5a5a5a" rx="2"/>
    <!-- Beschriftung neben Schild -->
    <rect x="10" y="18" width="118" height="28" fill="white" rx="6" stroke="#e03030" stroke-width="2" opacity="0.92"/>
    <text x="69" y="36" font-family="Nunito" font-weight="900" font-size="11" fill="#e03030" text-anchor="middle">Kein Einbahn!</text>
  </svg>`;
}

function wasserSVG() {
  return `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" class="modal-illu">
    <defs>
      <!-- Hintergrund-Himmel -->
      <linearGradient id="was-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#5ab0e0"/>
        <stop offset="100%" stop-color="#b8e4f8"/>
      </linearGradient>
      <!-- Boden/Pflaster -->
      <linearGradient id="was-ground" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#b8a898"/>
        <stop offset="100%" stop-color="#907860"/>
      </linearGradient>
      <!-- Wasserstrom (von unten nach oben) -->
      <linearGradient id="was-stream" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stop-color="#2080c8"/>
        <stop offset="60%" stop-color="#50b8f0"/>
        <stop offset="100%" stop-color="#a0d8ff80"/>
      </linearGradient>
      <!-- Wassertropfen -->
      <radialGradient id="was-drop" cx="35%" cy="30%" r="65%">
        <stop offset="0%" stop-color="#c0eaff"/>
        <stop offset="100%" stop-color="#3090d0"/>
      </radialGradient>
    </defs>

    <!-- Himmel -->
    <rect width="680" height="300" fill="url(#was-sky)"/>

    <!-- Wolken -->
    <g opacity="0.88">
      <ellipse cx="80" cy="44" rx="44" ry="19" fill="white"/>
      <ellipse cx="108" cy="36" rx="32" ry="16" fill="white"/>
      <ellipse cx="54" cy="40" rx="26" ry="14" fill="white"/>
    </g>
    <g opacity="0.82">
      <ellipse cx="590" cy="38" rx="40" ry="17" fill="white"/>
      <ellipse cx="620" cy="30" rx="28" ry="14" fill="white"/>
    </g>

    <!-- Boden: Pflastersteine -->
    <rect y="244" width="680" height="56" fill="url(#was-ground)"/>
    <!-- Pflasterfugen -->
    <line x1="0" y1="256" x2="680" y2="256" stroke="#807060" stroke-width="1.5" opacity="0.5"/>
    <line x1="0" y1="268" x2="680" y2="268" stroke="#807060" stroke-width="1.5" opacity="0.5"/>
    <line x1="0" y1="280" x2="680" y2="280" stroke="#807060" stroke-width="1.5" opacity="0.5"/>
    <line x1="50" y1="244" x2="50" y2="300" stroke="#807060" stroke-width="1.5" opacity="0.4"/>
    <line x1="130" y1="244" x2="130" y2="300" stroke="#807060" stroke-width="1.5" opacity="0.4"/>
    <line x1="220" y1="244" x2="220" y2="300" stroke="#807060" stroke-width="1.5" opacity="0.4"/>
    <line x1="310" y1="244" x2="310" y2="300" stroke="#807060" stroke-width="1.5" opacity="0.4"/>
    <line x1="400" y1="244" x2="400" y2="300" stroke="#807060" stroke-width="1.5" opacity="0.4"/>
    <line x1="490" y1="244" x2="490" y2="300" stroke="#807060" stroke-width="1.5" opacity="0.4"/>
    <line x1="590" y1="244" x2="590" y2="300" stroke="#807060" stroke-width="1.5" opacity="0.4"/>

    <!-- ── Fontäne 1 (groß, Mitte) ── -->
    <!-- Sockel/Rohr -->
    <rect x="326" y="195" width="28" height="50" fill="#909098" rx="5"/>
    <rect x="322" y="240" width="36" height="8" fill="#808088" rx="3"/>
    <!-- Düse oben -->
    <ellipse cx="340" cy="195" rx="14" ry="6" fill="#707078"/>
    <!-- Wasserstrahl – Hauptstrahl -->
    <path d="M333 195 Q328 150 332 80 Q340 30 340 15" stroke="url(#was-stream)" stroke-width="14" fill="none" stroke-linecap="round" opacity="0.85"/>
    <path d="M340 195 Q340 140 340 15" stroke="url(#was-stream)" stroke-width="10" fill="none" stroke-linecap="round" opacity="0.7"/>
    <path d="M347 195 Q352 150 348 80 Q341 30 340 15" stroke="url(#was-stream)" stroke-width="14" fill="none" stroke-linecap="round" opacity="0.85"/>
    <!-- Seitenspritzer (links) -->
    <path d="M334 180 Q310 140 295 100 Q290 80 288 55" stroke="#50b8f0" stroke-width="7" fill="none" stroke-linecap="round" opacity="0.7"/>
    <!-- Seitenspritzer (rechts) -->
    <path d="M346 180 Q370 140 385 100 Q390 80 392 55" stroke="#50b8f0" stroke-width="7" fill="none" stroke-linecap="round" opacity="0.7"/>
    <!-- Tropfen ganz oben -->
    <ellipse cx="340" cy="12" rx="10" ry="15" fill="url(#was-drop)"/>
    <ellipse cx="340" cy="10" rx="5" ry="6" fill="#c8f0ff" opacity="0.6"/>
    <!-- Seitenspritzer-Tropfen -->
    <ellipse cx="287" cy="50" rx="8" ry="12" fill="url(#was-drop)" opacity="0.85"/>
    <ellipse cx="393" cy="50" rx="8" ry="12" fill="url(#was-drop)" opacity="0.85"/>
    <!-- Sprühwasser-Tröpfchen -->
    <circle cx="305" cy="70" r="3.5" fill="#80ccf0" opacity="0.8"/>
    <circle cx="375" cy="65" r="3" fill="#80ccf0" opacity="0.8"/>
    <circle cx="318" cy="45" r="2.5" fill="#80ccf0" opacity="0.7"/>
    <circle cx="362" cy="42" r="2.5" fill="#80ccf0" opacity="0.7"/>
    <circle cx="295" cy="30" r="3" fill="#80ccf0" opacity="0.6"/>
    <circle cx="385" cy="28" r="3" fill="#80ccf0" opacity="0.6"/>
    <!-- Wasserpfütze am Boden -->
    <ellipse cx="340" cy="244" rx="52" ry="10" fill="#3090d080" opacity="0.7"/>
    <ellipse cx="340" cy="244" rx="35" ry="6" fill="#50b8f060" opacity="0.6"/>

    <!-- ── Fontäne 2 (links) ── -->
    <rect x="122" y="210" width="20" height="35" fill="#909098" rx="4"/>
    <ellipse cx="132" cy="210" rx="10" ry="5" fill="#707078"/>
    <path d="M127 210 Q122 170 124 110 Q130 70 132 50" stroke="url(#was-stream)" stroke-width="9" fill="none" stroke-linecap="round" opacity="0.8"/>
    <path d="M132 210 Q132 160 132 50" stroke="url(#was-stream)" stroke-width="7" fill="none" stroke-linecap="round" opacity="0.65"/>
    <path d="M137 210 Q142 170 140 110 Q134 70 132 50" stroke="url(#was-stream)" stroke-width="9" fill="none" stroke-linecap="round" opacity="0.8"/>
    <ellipse cx="132" cy="46" rx="8" ry="12" fill="url(#was-drop)" opacity="0.9"/>
    <!-- Seitenspritzer links klein -->
    <path d="M127 195 Q108 165 100 130" stroke="#50b8f0" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.6"/>
    <ellipse cx="99" cy="125" rx="6" ry="9" fill="url(#was-drop)" opacity="0.75"/>
    <!-- Pfütze -->
    <ellipse cx="132" cy="244" rx="35" ry="7" fill="#3090d070"/>

    <!-- ── Fontäne 3 (rechts) ── -->
    <rect x="538" y="215" width="20" height="30" fill="#909098" rx="4"/>
    <ellipse cx="548" cy="215" rx="10" ry="5" fill="#707078"/>
    <path d="M543 215 Q538 178 540 118 Q546 80 548 60" stroke="url(#was-stream)" stroke-width="9" fill="none" stroke-linecap="round" opacity="0.8"/>
    <path d="M548 215 Q548 165 548 60" stroke="url(#was-stream)" stroke-width="7" fill="none" stroke-linecap="round" opacity="0.65"/>
    <path d="M553 215 Q558 178 556 118 Q550 80 548 60" stroke="url(#was-stream)" stroke-width="9" fill="none" stroke-linecap="round" opacity="0.8"/>
    <ellipse cx="548" cy="56" rx="8" ry="12" fill="url(#was-drop)" opacity="0.9"/>
    <path d="M553 200 Q572 170 580 138" stroke="#50b8f0" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.6"/>
    <ellipse cx="581" cy="133" rx="6" ry="9" fill="url(#was-drop)" opacity="0.75"/>
    <ellipse cx="548" cy="244" rx="35" ry="7" fill="#3090d070"/>

    <!-- ── Kind mit Gummistiefeln (rechts von Mitte) ── -->
    <!-- Schatten -->
    <ellipse cx="445" cy="248" rx="22" ry="5" fill="#00000030"/>
    <!-- Körper (springend) -->
    <!-- Beine (gespreizt, Gummistiefel) -->
    <path d="M440 222 Q430 234 425 244" stroke="#2a5080" stroke-width="8" stroke-linecap="round" fill="none"/>
    <path d="M450 222 Q460 234 465 244" stroke="#2a5080" stroke-width="8" stroke-linecap="round" fill="none"/>
    <!-- Gummistiefel links (gelb) -->
    <rect x="416" y="238" width="16" height="18" fill="#e0c020" rx="5"/>
    <rect x="413" y="253" width="22" height="7" fill="#c0a010" rx="3"/>
    <!-- Gummistiefel rechts (gelb) -->
    <rect x="458" y="238" width="16" height="18" fill="#e0c020" rx="5"/>
    <rect x="455" y="253" width="22" height="7" fill="#c0a010" rx="3"/>
    <!-- Körper (türkiser Regenmantel) -->
    <rect x="430" y="192" width="30" height="32" fill="#1890a0" rx="6"/>
    <!-- Arme ausgestreckt (Gleichgewicht) -->
    <path d="M430 200 Q415 193 405 185" stroke="#ffcc88" stroke-width="8" stroke-linecap="round" fill="none"/>
    <path d="M460 200 Q475 193 485 185" stroke="#ffcc88" stroke-width="8" stroke-linecap="round" fill="none"/>
    <!-- Kopf -->
    <circle cx="445" cy="177" r="19" fill="#ffcc88"/>
    <!-- Haar -->
    <path d="M428 175 Q430 158 445 156 Q460 158 462 175" fill="#c07020" stroke="#a05010" stroke-width="1.5"/>
    <!-- Gesicht (überrascht/Spaß) -->
    <circle cx="439" cy="174" r="3.5" fill="#5a3010"/>
    <circle cx="451" cy="174" r="3.5" fill="#5a3010"/>
    <circle cx="440" cy="173" r="1.3" fill="white"/>
    <circle cx="452" cy="173" r="1.3" fill="white"/>
    <!-- Offener Mund (Freude) -->
    <path d="M439 184 Q445 190 451 184" stroke="#a06030" stroke-width="2.5" fill="#f08060"/>
    <!-- Wangen -->
    <ellipse cx="436" cy="180" rx="4" ry="2.5" fill="#e09070" opacity="0.55"/>
    <ellipse cx="454" cy="180" rx="4" ry="2.5" fill="#e09070" opacity="0.55"/>

    <!-- Pfeil + Beschriftung rechts -->
    <path d="M618 230 L618 80" stroke="#1060a0" stroke-width="3.5" stroke-linecap="round" fill="none"/>
    <polygon points="608,95 618,68 628,95" fill="#1060a0"/>
    <rect x="598" y="120" width="72" height="70" fill="white" rx="8" opacity="0.9"/>
    <text x="634" y="142" font-family="Nunito" font-weight="900" font-size="12" fill="#1060a0" text-anchor="middle">Wasser</text>
    <text x="634" y="158" font-family="Nunito" font-weight="900" font-size="12" fill="#1060a0" text-anchor="middle">schießt</text>
    <text x="634" y="174" font-family="Nunito" font-weight="900" font-size="12" fill="#e03030" text-anchor="middle">HOCH!</text>
  </svg>`;
}

function schokoladeSVG() {
  return `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" class="modal-illu">
    <defs>
      <!-- Hintergrund warm -->
      <linearGradient id="sch-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#fff8e8"/>
        <stop offset="100%" stop-color="#faeac8"/>
      </linearGradient>
      <!-- Grüne Schokolade -->
      <linearGradient id="sch-choc" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#70cc60"/>
        <stop offset="100%" stop-color="#3a9030"/>
      </linearGradient>
      <!-- Tafel-Glanz -->
      <linearGradient id="sch-gloss" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ffffff50"/>
        <stop offset="100%" stop-color="#ffffff00"/>
      </linearGradient>
      <!-- Kuchen -->
      <linearGradient id="sch-cake" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#f8b8d8"/>
        <stop offset="100%" stop-color="#e07090"/>
      </linearGradient>
      <!-- Gummibärchen gelb -->
      <radialGradient id="sch-bear" cx="38%" cy="32%" r="60%">
        <stop offset="0%" stop-color="#fff080"/>
        <stop offset="100%" stop-color="#e8a800"/>
      </radialGradient>
    </defs>

    <!-- Hintergrund -->
    <rect width="680" height="300" fill="url(#sch-bg)"/>

    <!-- Konfetti-Punkte (Karneval-Stimmung) -->
    <circle cx="30" cy="20" r="5" fill="#e84444" opacity="0.7"/>
    <circle cx="60" cy="35" r="4" fill="#4ab0e8" opacity="0.7"/>
    <circle cx="90" cy="15" r="6" fill="#f5c842" opacity="0.7"/>
    <circle cx="600" cy="25" r="5" fill="#5ab55a" opacity="0.7"/>
    <circle cx="640" cy="12" r="4" fill="#e84444" opacity="0.7"/>
    <circle cx="650" cy="40" r="6" fill="#f0a0c0" opacity="0.7"/>
    <circle cx="20" cy="280" r="5" fill="#4ab0e8" opacity="0.6"/>
    <circle cx="660" cy="270" r="5" fill="#f5c842" opacity="0.6"/>
    <rect x="550" y="18" width="10" height="10" fill="#e84444" rx="2" opacity="0.65" transform="rotate(20,555,23)"/>
    <rect x="110" y="22" width="8" height="8" fill="#4ab0e8" rx="1" opacity="0.65" transform="rotate(-15,114,26)"/>

    <!-- ── Riesige GRÜNE Schokoladentafel (Mitte) ── -->
    <!-- Schatten -->
    <rect x="158" y="62" width="286" height="208" rx="14" fill="#00000020"/>
    <!-- Tafel -->
    <rect x="150" y="55" width="286" height="208" rx="14" fill="url(#sch-choc)" stroke="#2a7020" stroke-width="3.5"/>
    <!-- Glanz -->
    <rect x="150" y="55" width="286" height="208" rx="14" fill="url(#sch-gloss)"/>
    <!-- Tafel-Rillen vertikal -->
    <line x1="222" y1="55" x2="222" y2="263" stroke="#2a7020" stroke-width="2.5" opacity="0.6"/>
    <line x1="294" y1="55" x2="294" y2="263" stroke="#2a7020" stroke-width="2.5" opacity="0.6"/>
    <line x1="366" y1="55" x2="366" y2="263" stroke="#2a7020" stroke-width="2.5" opacity="0.6"/>
    <!-- Tafel-Rillen horizontal -->
    <line x1="150" y1="124" x2="436" y2="124" stroke="#2a7020" stroke-width="2.5" opacity="0.6"/>
    <line x1="150" y1="193" x2="436" y2="193" stroke="#2a7020" stroke-width="2.5" opacity="0.6"/>
    <!-- Tafel-Glanz pro Stück (Mini-Highlights) -->
    <ellipse cx="186" cy="78" rx="18" ry="8" fill="white" opacity="0.18"/>
    <ellipse cx="258" cy="78" rx="18" ry="8" fill="white" opacity="0.18"/>
    <ellipse cx="330" cy="78" rx="18" ry="8" fill="white" opacity="0.18"/>
    <ellipse cx="402" cy="78" rx="18" ry="8" fill="white" opacity="0.18"/>

    <!-- Verpackungs-Etikett -->
    <rect x="138" y="32" width="310" height="38" fill="#c89010" rx="7" stroke="#a07008" stroke-width="2"/>
    <rect x="138" y="32" width="310" height="18" fill="#e8b020" rx="7" opacity="0.6"/>
    <text x="293" y="57" font-family="Nunito" font-weight="900" font-size="17" fill="white" text-anchor="middle" letter-spacing="1">PUPDORF SCHOKO</text>

    <!-- Abgebrochenes Stück (fliegend, schräg) -->
    <g transform="rotate(-12,500,135)">
      <rect x="462" y="105" width="75" height="58" fill="url(#sch-choc)" rx="8" stroke="#2a7020" stroke-width="2.5"/>
      <line x1="498" y1="105" x2="498" y2="163" stroke="#2a7020" stroke-width="2" opacity="0.6"/>
      <line x1="462" y1="134" x2="537" y2="134" stroke="#2a7020" stroke-width="2" opacity="0.6"/>
    </g>
    <!-- Bruchlinie an der Tafel -->
    <path d="M436 115 L462 108" stroke="#2a7020" stroke-width="2.5" stroke-dasharray="4,3" opacity="0.7"/>

    <!-- ── Staunendes Kind (rechts) ── -->
    <!-- Schatten -->
    <ellipse cx="590" cy="283" rx="24" ry="6" fill="#00000025"/>
    <!-- Beine -->
    <path d="M582 250 Q578 268 572 282" stroke="#2040a0" stroke-width="8" stroke-linecap="round" fill="none"/>
    <path d="M598 250 Q602 268 608 282" stroke="#2040a0" stroke-width="8" stroke-linecap="round" fill="none"/>
    <!-- Körper (lila Pullover) -->
    <rect x="572" y="218" width="36" height="34" fill="#9040c0" rx="7"/>
    <!-- Arme seitlich (staunen) -->
    <path d="M572 226 Q558 220 548 212" stroke="#ffcc88" stroke-width="7" stroke-linecap="round" fill="none"/>
    <path d="M608 226 Q622 220 632 212" stroke="#ffcc88" stroke-width="7" stroke-linecap="round" fill="none"/>
    <!-- Kopf -->
    <circle cx="590" cy="202" r="21" fill="#ffcc88"/>
    <!-- Haar -->
    <path d="M571 199 Q573 180 590 178 Q607 180 609 199" fill="#803010" stroke="#601800" stroke-width="1.5"/>
    <!-- Gesicht: staunen (große Augen, O-Mund) -->
    <circle cx="583" cy="199" r="5" fill="white" stroke="#333" stroke-width="1"/>
    <circle cx="597" cy="199" r="5" fill="white" stroke="#333" stroke-width="1"/>
    <circle cx="584" cy="200" r="3" fill="#333"/>
    <circle cx="598" cy="200" r="3" fill="#333"/>
    <circle cx="585" cy="199" r="1.2" fill="white"/>
    <circle cx="599" cy="199" r="1.2" fill="white"/>
    <!-- O-Mund -->
    <ellipse cx="590" cy="213" rx="5.5" ry="6.5" fill="#333"/>
    <ellipse cx="590" cy="211" rx="3" ry="2.5" fill="#60101050"/>

    <!-- ── Fliegender Kuchen (Karneval, links) ── -->
    <g transform="rotate(-8,70,100)">
      <!-- Schatten/Bewegungslinie -->
      <path d="M120 105 Q150 80 140 55" stroke="#e07090" stroke-width="2" fill="none" stroke-dasharray="6,4" opacity="0.6"/>
      <!-- Kuchen-Boden -->
      <rect x="28" y="102" width="78" height="48" fill="url(#sch-cake)" rx="10"/>
      <!-- Kuchen-Creme oben -->
      <path d="M28 102 Q38 88 50 102 Q62 88 78 102 Q90 88 106 102" fill="#fff8f0" stroke="#e090b0" stroke-width="1.5"/>
      <!-- Kuchen-Glasur -->
      <rect x="28" y="118" width="78" height="6" fill="#e07090" opacity="0.4"/>
      <!-- Kerzen -->
      <rect x="44" y="85" width="7" height="19" fill="#f5c842" rx="2.5"/>
      <rect x="59" y="83" width="7" height="21" fill="#e84444" rx="2.5"/>
      <rect x="74" y="85" width="7" height="19" fill="#4ab0e8" rx="2.5"/>
      <rect x="89" y="87" width="7" height="17" fill="#5ab55a" rx="2.5"/>
      <!-- Flammen -->
      <ellipse cx="47" cy="82" rx="4.5" ry="6" fill="#ff9920"/>
      <ellipse cx="47" cy="80" rx="2.5" ry="3" fill="#ffe060" opacity="0.8"/>
      <ellipse cx="62" cy="80" rx="4.5" ry="6" fill="#ff9920"/>
      <ellipse cx="62" cy="78" rx="2.5" ry="3" fill="#ffe060" opacity="0.8"/>
      <ellipse cx="77" cy="82" rx="4.5" ry="6" fill="#ff9920"/>
      <ellipse cx="77" cy="80" rx="2.5" ry="3" fill="#ffe060" opacity="0.8"/>
      <ellipse cx="92" cy="84" rx="4" ry="5.5" fill="#ff9920"/>
      <ellipse cx="92" cy="82" rx="2.5" ry="3" fill="#ffe060" opacity="0.8"/>
    </g>

    <!-- ── Smiley-Gummibärchen (fliegend, oben rechts) ── -->
    <!-- Gummibärchen 1 (groß, gelb) -->
    <g transform="translate(608,52)">
      <!-- Körper -->
      <ellipse cx="0" cy="8" rx="20" ry="26" fill="url(#sch-bear)"/>
      <!-- Arme -->
      <ellipse cx="-18" cy="6" rx="8" ry="12" fill="url(#sch-bear)" transform="rotate(-20,-18,6)"/>
      <ellipse cx="18" cy="6" rx="8" ry="12" fill="url(#sch-bear)" transform="rotate(20,18,6)"/>
      <!-- Beine -->
      <ellipse cx="-8" cy="30" rx="7" ry="10" fill="url(#sch-bear)"/>
      <ellipse cx="8" cy="30" rx="7" ry="10" fill="url(#sch-bear)"/>
      <!-- Kopf -->
      <circle cx="0" cy="-16" r="18" fill="url(#sch-bear)"/>
      <!-- Ohren -->
      <circle cx="-12" cy="-30" r="7" fill="#e8b000"/>
      <circle cx="12" cy="-30" r="7" fill="#e8b000"/>
      <!-- Gesicht: Smiley! -->
      <circle cx="-6" cy="-20" r="3.5" fill="#5a3a00"/>
      <circle cx="6" cy="-20" r="3.5" fill="#5a3a00"/>
      <circle cx="-5" cy="-21" r="1.3" fill="white"/>
      <circle cx="7" cy="-21" r="1.3" fill="white"/>
      <!-- Breites Lächeln -->
      <path d="M-7 -10 Q0 -4 7 -10" stroke="#5a3a00" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- Nase -->
      <ellipse cx="0" cy="-13" rx="3" ry="2" fill="#c08010"/>
      <!-- Wangen -->
      <ellipse cx="-10" cy="-12" rx="5" ry="3" fill="#ff9030" opacity="0.4"/>
      <ellipse cx="10" cy="-12" rx="5" ry="3" fill="#ff9030" opacity="0.4"/>
    </g>

    <!-- Gummibärchen 2 (klein, grün, fliegend) -->
    <g transform="translate(555,20) rotate(15)">
      <ellipse cx="0" cy="5" rx="13" ry="17" fill="#50c050"/>
      <ellipse cx="-11" cy="4" rx="5" ry="8" fill="#50c050" transform="rotate(-20,-11,4)"/>
      <ellipse cx="11" cy="4" rx="5" ry="8" fill="#50c050" transform="rotate(20,11,4)"/>
      <circle cx="0" cy="-11" r="12" fill="#60d060"/>
      <circle cx="-8" cy="-20" r="5" fill="#40a040"/>
      <circle cx="8" cy="-20" r="5" fill="#40a040"/>
      <circle cx="-4" cy="-14" r="2.5" fill="#1a4a1a"/>
      <circle cx="4" cy="-14" r="2.5" fill="#1a4a1a"/>
      <path d="M-4 -7 Q0 -3 4 -7" stroke="#1a4a1a" stroke-width="2" fill="none" stroke-linecap="round"/>
    </g>
  </svg>`;
}

function olympiaSVG() {
  return `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" class="modal-illu">
    <defs>
      <!-- Himmel -->
      <linearGradient id="oly-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#6ab4e8"/>
        <stop offset="100%" stop-color="#c8e8f8"/>
      </linearGradient>
      <!-- Podest Gold -->
      <linearGradient id="oly-gold" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffe060"/>
        <stop offset="100%" stop-color="#c8a010"/>
      </linearGradient>
      <!-- Podest Silber -->
      <linearGradient id="oly-silver" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ddeeff"/>
        <stop offset="100%" stop-color="#90a8c0"/>
      </linearGradient>
      <!-- Podest Bronze -->
      <linearGradient id="oly-bronze" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#e8c090"/>
        <stop offset="100%" stop-color="#a07040"/>
      </linearGradient>
      <!-- Flagge weiß -->
      <linearGradient id="oly-flag-white" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#f8f8f8"/>
        <stop offset="100%" stop-color="#e8e8e8"/>
      </linearGradient>
    </defs>

    <!-- Himmel -->
    <rect width="680" height="300" fill="url(#oly-sky)"/>

    <!-- Wolken -->
    <g opacity="0.88">
      <ellipse cx="560" cy="45" rx="46" ry="20" fill="white"/>
      <ellipse cx="592" cy="37" rx="33" ry="17" fill="white"/>
      <ellipse cx="535" cy="40" rx="26" ry="14" fill="white"/>
    </g>

    <!-- Boden -->
    <rect y="268" width="680" height="32" fill="#c0d8e8"/>
    <rect y="268" width="680" height="4" fill="#a0b8d0"/>

    <!-- ── Fahne auf Mast ── -->
    <!-- Mast -->
    <rect x="36" y="18" width="10" height="258" fill="#8a6030" rx="3"/>
    <ellipse cx="41" cy="18" rx="8" ry="5" fill="#c09050"/>
    <!-- Knauf oben -->
    <ellipse cx="41" cy="14" rx="9" ry="9" fill="#e8b030" stroke="#c09020" stroke-width="1.5"/>
    <!-- Fahne: 3 waagerechte Streifen (Orange / Weiß / Orange) wie Vorlage -->
    <!-- Leichtes Wehen durch Kurven -->
    <path d="M46 28 Q180 22 310 30 Q310 88 310 88 Q180 82 46 88 Z" fill="#f5801e"/>
    <path d="M46 88 Q180 82 310 88 Q310 148 310 148 Q180 154 46 148 Z" fill="url(#oly-flag-white)"/>
    <path d="M46 148 Q180 154 310 148 Q310 208 310 208 Q180 200 46 208 Z" fill="#f5801e"/>
    <!-- Flaggen-Umriss -->
    <path d="M46 28 Q180 22 310 30 L310 208 Q180 200 46 208 Z" fill="none" stroke="#d06010" stroke-width="1.5" opacity="0.5"/>
    <!-- Ahornblatt ORANGE (in der Mitte der Flagge) -->
    <g transform="translate(178,118)">
      <!-- Ahornblatt-Pfad (stilisiert, erkennbar) -->
      <path d="
        M0,-38
        L-5,-18 L-28,-22 L-18,-10 L-38,-2 L-22,2
        L-26,18 L-12,12 L0,30
        L12,12 L26,18 L22,2
        L38,-2 L18,-10 L28,-22 L5,-18 Z"
        fill="#f5801e" stroke="#d06010" stroke-width="1.5"/>
      <!-- Ahornblatt Stamm -->
      <rect x="-3" y="28" width="6" height="12" fill="#f5801e"/>
    </g>
    <!-- Fahnen-Bewegungslinien (Wind) -->
    <path d="M130 48 Q200 44 280 50" stroke="white" stroke-width="1" opacity="0.25" fill="none"/>
    <path d="M120 168 Q200 165 290 170" stroke="#d06010" stroke-width="1" opacity="0.2" fill="none"/>

    <!-- ── Podest ── -->
    <!-- Platz 2 (Silber, links) -->
    <rect x="158" y="228" width="108" height="48" fill="url(#oly-silver)" rx="5" stroke="#88a0b8" stroke-width="2"/>
    <rect x="158" y="228" width="108" height="10" fill="#eef8ff" rx="5" opacity="0.6"/>
    <text x="212" y="264" font-family="Nunito" font-weight="900" font-size="26" fill="#4a6080" text-anchor="middle">2</text>

    <!-- Platz 1 (Gold, Mitte) -->
    <rect x="278" y="205" width="124" height="71" fill="url(#oly-gold)" rx="5" stroke="#c0a010" stroke-width="2.5"/>
    <rect x="278" y="205" width="124" height="12" fill="#fff5a0" rx="5" opacity="0.6"/>
    <text x="340" y="258" font-family="Nunito" font-weight="900" font-size="30" fill="#7a5000" text-anchor="middle">1</text>

    <!-- Platz 3 (Bronze, rechts) -->
    <rect x="414" y="242" width="108" height="34" fill="url(#oly-bronze)" rx="5" stroke="#907840" stroke-width="2"/>
    <rect x="414" y="242" width="108" height="10" fill="#f8e8c8" rx="5" opacity="0.6"/>
    <text x="468" y="268" font-family="Nunito" font-weight="900" font-size="22" fill="#6a4820" text-anchor="middle">3</text>

    <!-- ── Sieger-Figur auf Platz 1 ── -->
    <!-- Schatten -->
    <ellipse cx="340" cy="207" rx="20" ry="5" fill="#00000020"/>
    <!-- Beine -->
    <path d="M333 193 Q329 200 326 207" stroke="#2040a0" stroke-width="7" stroke-linecap="round" fill="none"/>
    <path d="M347 193 Q351 200 354 207" stroke="#2040a0" stroke-width="7" stroke-linecap="round" fill="none"/>
    <!-- Körper (roter Sportdress) -->
    <rect x="326" y="165" width="28" height="30" fill="#d03020" rx="6"/>
    <!-- Arme jubeln (V-Form hoch) -->
    <path d="M326 173 Q312 160 305 145" stroke="#ffcc88" stroke-width="7" stroke-linecap="round" fill="none"/>
    <path d="M354 173 Q368 160 375 145" stroke="#ffcc88" stroke-width="7" stroke-linecap="round" fill="none"/>
    <!-- Kopf -->
    <circle cx="340" cy="152" r="18" fill="#ffcc88"/>
    <!-- Haare -->
    <path d="M323 150 Q325 134 340 132 Q355 134 357 150" fill="#804010" stroke="#602808" stroke-width="1.5"/>
    <!-- Gesicht (jubeln, Mund offen) -->
    <circle cx="334" cy="149" r="3.2" fill="#5a3010"/>
    <circle cx="346" cy="149" r="3.2" fill="#5a3010"/>
    <circle cx="335" cy="148" r="1.2" fill="white"/>
    <circle cx="347" cy="148" r="1.2" fill="white"/>
    <path d="M333 159 Q340 166 347 159" stroke="#a06030" stroke-width="2.5" fill="#f08060"/>
    <ellipse cx="331" cy="155" rx="4" ry="2.5" fill="#e09070" opacity="0.5"/>
    <ellipse cx="349" cy="155" rx="4" ry="2.5" fill="#e09070" opacity="0.5"/>
    <!-- Medaille (Gold) -->
    <line x1="340" y1="165" x2="340" y2="176" stroke="#c8a010" stroke-width="2"/>
    <circle cx="340" cy="180" r="9" fill="#f5c842" stroke="#c8a010" stroke-width="2"/>
    <circle cx="340" cy="180" r="5" fill="#e8b820" opacity="0.7"/>

    <!-- ── Figur auf Platz 2 (kleiner) ── -->
    <circle cx="212" cy="212" r="14" fill="#ffaa66"/>
    <path d="M200 225 Q197 232 195 240" stroke="#2040a0" stroke-width="6" stroke-linecap="round" fill="none"/>
    <path d="M224 225 Q227 232 229 240" stroke="#2040a0" stroke-width="6" stroke-linecap="round" fill="none"/>
    <rect x="200" y="225" width="24" height="26" fill="#3060c0" rx="5"/>
    <path d="M200 230 Q190 222 185 213" stroke="#ffaa66" stroke-width="6" stroke-linecap="round" fill="none"/>
    <path d="M224 230 Q234 222 239 213" stroke="#ffaa66" stroke-width="6" stroke-linecap="round" fill="none"/>
    <!-- Medaille Silber -->
    <line x1="212" y1="225" x2="212" y2="234" stroke="#a0b0c0" stroke-width="1.5"/>
    <circle cx="212" cy="238" r="7" fill="#d0dde8" stroke="#90a0b8" stroke-width="1.5"/>

    <!-- ── Figur auf Platz 3 (kleiner) ── -->
    <circle cx="468" cy="226" r="13" fill="#ffcc88"/>
    <path d="M457 238 Q454 245 452 253" stroke="#2040a0" stroke-width="5" stroke-linecap="round" fill="none"/>
    <path d="M479 238 Q482 245 484 253" stroke="#2040a0" stroke-width="5" stroke-linecap="round" fill="none"/>
    <rect x="458" y="238" width="20" height="22" fill="#40a040" rx="5"/>
    <path d="M458 243 Q449 236 445 228" stroke="#ffcc88" stroke-width="5" stroke-linecap="round" fill="none"/>
    <path d="M478 243 Q487 236 491 228" stroke="#ffcc88" stroke-width="5" stroke-linecap="round" fill="none"/>
    <!-- Medaille Bronze -->
    <line x1="468" y1="238" x2="468" y2="246" stroke="#b09050" stroke-width="1.5"/>
    <circle cx="468" cy="250" r="6" fill="#d4a860" stroke="#a07830" stroke-width="1.5"/>

    <!-- ── Olympische Ringe (oben rechts) ── -->
    <g transform="translate(490,58)">
      <circle cx="0" cy="0" r="22" fill="none" stroke="#4ab0e8" stroke-width="5.5"/>
      <circle cx="42" cy="0" r="22" fill="none" stroke="#333" stroke-width="5.5"/>
      <circle cx="84" cy="0" r="22" fill="none" stroke="#e84444" stroke-width="5.5"/>
      <circle cx="21" cy="20" r="22" fill="none" stroke="#f5c842" stroke-width="5.5"/>
      <circle cx="63" cy="20" r="22" fill="none" stroke="#3a9030" stroke-width="5.5"/>
    </g>

    <!-- Label -->
    <rect x="460" y="148" width="196" height="46" fill="white" rx="10" stroke="#f0a020" stroke-width="2" opacity="0.93"/>
    <text x="558" y="169" font-family="Nunito" font-weight="900" font-size="13" fill="#5a3a00" text-anchor="middle">Pupdorf Olympia</text>
    <text x="558" y="186" font-family="Nunito" font-size="11" fill="#a07030" text-anchor="middle">Ahornblatt in Orange!</text>
  </svg>`;
}

function spracheSVG() {
  return `<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" class="modal-illu">
    <defs>
      <!-- Warmer Hintergrund -->
      <linearGradient id="spr-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#fff8e8"/>
        <stop offset="100%" stop-color="#faecd8"/>
      </linearGradient>
      <!-- Große Sprechblase -->
      <linearGradient id="spr-bubble" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#fff0e0"/>
      </linearGradient>
      <!-- Kleine Sprechblase -->
      <linearGradient id="spr-bubble2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#edfff0"/>
      </linearGradient>
      <!-- Schild-Hintergrund -->
      <linearGradient id="spr-sign" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#f07820"/>
        <stop offset="100%" stop-color="#e05010"/>
      </linearGradient>
    </defs>

    <!-- Hintergrund -->
    <rect width="680" height="300" fill="url(#spr-bg)"/>

    <!-- Dekorative Notenzeichen (oben, Lulisch klingt wie Singen) -->
    <text x="340" y="42" font-size="30" text-anchor="middle" fill="#f28a2e" opacity="0.7">♪</text>
    <text x="378" y="28" font-size="24" text-anchor="middle" fill="#5ab55a" opacity="0.7">♫</text>
    <text x="302" y="26" font-size="22" text-anchor="middle" fill="#4ab0e8" opacity="0.7">♩</text>
    <text x="358" y="58" font-size="18" text-anchor="middle" fill="#f5c842" opacity="0.6">♪</text>
    <text x="322" y="52" font-size="16" text-anchor="middle" fill="#e84444" opacity="0.6">♫</text>

    <!-- ── Große Sprechblase (links, Hauptblase mit "singzua!") ── -->
    <!-- Schatten -->
    <ellipse cx="210" cy="132" rx="175" ry="82" fill="#e0a06030" opacity="0.4"/>
    <!-- Blase -->
    <ellipse cx="206" cy="128" rx="172" ry="80" fill="url(#spr-bubble)" stroke="#f28a2e" stroke-width="3.5"/>
    <!-- Sprechblase Schweif -->
    <path d="M148 202 Q132 240 110 262 Q155 235 175 208" fill="url(#spr-bubble)" stroke="#f28a2e" stroke-width="3.5"/>
    <!-- Haupttext -->
    <text x="206" y="112" font-family="Nunito" font-weight="900" font-size="36" fill="#f28a2e" text-anchor="middle">singzua!</text>
    <!-- Übersetzung -->
    <text x="206" y="146" font-family="Nunito" font-size="17" fill="#c06010" text-anchor="middle" opacity="0.85">= Hallo auf Lulisch</text>
    <!-- Dekorstriche in der Blase -->
    <line x1="100" y1="128" x2="130" y2="128" stroke="#f5c84240" stroke-width="2"/>
    <line x1="282" y1="128" x2="312" y2="128" stroke="#f5c84240" stroke-width="2"/>

    <!-- ── Kind links (spricht, fröhlich) ── -->
    <!-- Schatten -->
    <ellipse cx="78" cy="287" rx="22" ry="5" fill="#00000020"/>
    <!-- Beine -->
    <path d="M72 262 Q68 274 64 285" stroke="#2040a0" stroke-width="7" stroke-linecap="round" fill="none"/>
    <path d="M84 262 Q88 274 92 285" stroke="#2040a0" stroke-width="7" stroke-linecap="round" fill="none"/>
    <!-- Körper (türkis) -->
    <rect x="62" y="234" width="32" height="30" fill="#18a0b0" rx="7"/>
    <!-- Arm (zeigt zur Blase) -->
    <path d="M94 240 Q110 232 126 224" stroke="#ffcc88" stroke-width="7" stroke-linecap="round" fill="none"/>
    <!-- Anderer Arm -->
    <path d="M62 240 Q50 234 42 228" stroke="#ffcc88" stroke-width="7" stroke-linecap="round" fill="none"/>
    <!-- Kopf -->
    <circle cx="78" cy="218" r="21" fill="#ffcc88"/>
    <!-- Haare (braun) -->
    <path d="M59 216 Q61 197 78 195 Q95 197 97 216" fill="#804010" stroke="#602808" stroke-width="1.5"/>
    <!-- Gesicht: fröhlich, Mund offen (singt/spricht) -->
    <circle cx="71" cy="215" r="3.5" fill="#5a3010"/>
    <circle cx="85" cy="215" r="3.5" fill="#5a3010"/>
    <circle cx="72" cy="214" r="1.3" fill="white"/>
    <circle cx="86" cy="214" r="1.3" fill="white"/>
    <!-- Breiter Mund (singt) -->
    <path d="M70 226 Q78 234 86 226" stroke="#a06030" stroke-width="2.5" fill="#f08060"/>
    <!-- Zähnchen sichtbar -->
    <rect x="73" y="226" width="4" height="4" fill="white" rx="1" stroke="#e09070" stroke-width="0.5"/>
    <rect x="79" y="226" width="4" height="4" fill="white" rx="1" stroke="#e09070" stroke-width="0.5"/>
    <!-- Wangen -->
    <ellipse cx="68" cy="222" rx="5" ry="3" fill="#e09070" opacity="0.5"/>
    <ellipse cx="88" cy="222" rx="5" ry="3" fill="#e09070" opacity="0.5"/>

    <!-- ── Kleine Sprechblase (rechts, Antwort) ── -->
    <!-- Schatten -->
    <ellipse cx="502" cy="142" rx="148" ry="72" fill="#50a05030" opacity="0.35"/>
    <!-- Blase -->
    <ellipse cx="498" cy="138" rx="145" ry="70" fill="url(#spr-bubble2)" stroke="#5ab55a" stroke-width="3"/>
    <!-- Schweif rechts unten -->
    <path d="M558 202 Q572 238 592 255 Q548 232 528 210" fill="url(#spr-bubble2)" stroke="#5ab55a" stroke-width="3"/>
    <!-- Text in kleiner Blase -->
    <text x="498" y="126" font-family="Nunito" font-weight="900" font-size="26" fill="#3a9030" text-anchor="middle">singzua!</text>
    <text x="498" y="158" font-family="Nunito" font-size="14" fill="#508a40" text-anchor="middle" opacity="0.85">auf Lulisch antworten</text>

    <!-- ── Kind rechts (antwortet) ── -->
    <!-- Schatten -->
    <ellipse cx="612" cy="287" rx="22" ry="5" fill="#00000020"/>
    <!-- Beine -->
    <path d="M606 262 Q602 275 598 285" stroke="#2040a0" stroke-width="7" stroke-linecap="round" fill="none"/>
    <path d="M618 262 Q622 275 626 285" stroke="#2040a0" stroke-width="7" stroke-linecap="round" fill="none"/>
    <!-- Körper (lila) -->
    <rect x="596" y="234" width="32" height="30" fill="#9040c0" rx="7"/>
    <!-- Arm (zeigt zur Blase) -->
    <path d="M596 240 Q578 232 558 224" stroke="#ffaa66" stroke-width="7" stroke-linecap="round" fill="none"/>
    <!-- Anderer Arm -->
    <path d="M628 240 Q640 234 648 228" stroke="#ffaa66" stroke-width="7" stroke-linecap="round" fill="none"/>
    <!-- Kopf -->
    <circle cx="612" cy="218" r="20" fill="#ffaa66"/>
    <!-- Haare (dunkelbraun, lockig) -->
    <path d="M594 216 Q596 198 612 196 Q628 198 630 216" fill="#5a2808" stroke="#401808" stroke-width="1.5"/>
    <!-- Gesicht -->
    <circle cx="605" cy="215" r="3.2" fill="#5a3010"/>
    <circle cx="619" cy="215" r="3.2" fill="#5a3010"/>
    <circle cx="606" cy="214" r="1.2" fill="white"/>
    <circle cx="620" cy="214" r="1.2" fill="white"/>
    <path d="M605 225 Q612 232 619 225" stroke="#a06030" stroke-width="2.5" fill="#f08060"/>
    <rect x="608" y="225" width="4" height="4" fill="white" rx="1" stroke="#e09070" stroke-width="0.5"/>
    <!-- Wangen -->
    <ellipse cx="602" cy="221" rx="5" ry="3" fill="#e09070" opacity="0.5"/>
    <ellipse cx="622" cy="221" rx="5" ry="3" fill="#e09070" opacity="0.5"/>

    <!-- ── Schild "LULISCH" in der Mitte unten ── -->
    <rect x="260" y="250" width="160" height="42" fill="url(#spr-sign)" rx="11" stroke="#c05010" stroke-width="2"/>
    <rect x="260" y="250" width="160" height="18" fill="white" rx="11" opacity="0.15"/>
    <text x="340" y="272" font-family="Nunito" font-weight="900" font-size="19" fill="white" text-anchor="middle" letter-spacing="2">LULISCH</text>
    <text x="340" y="286" font-family="Nunito" font-size="10" fill="rgba(255,255,255,0.85)" text-anchor="middle">Die Sprache von Pupdorf</text>
    <!-- Schildständer -->
    <line x1="320" y1="292" x2="316" y2="300" stroke="#c05010" stroke-width="2.5"/>
    <line x1="360" y1="292" x2="364" y2="300" stroke="#c05010" stroke-width="2.5"/>
  </svg>`;
}
