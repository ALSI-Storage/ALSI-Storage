// Offline copy of the whole site (alsi.py site() fills VER and FILES): on install every page is downloaded into the cache,
// then pages are served from it, instantly, with or without a connection. A new publish changes VER, so the browser
// installs the new copy in the background (seen from the next opening on) and drops the old one.
const VER = "a325319791ac", FILES = ["apple-touch-icon.png", "czynnik-ludzki-w-technice/2026-10-10_czynnik-ludzki-w-technice-sobota/index.html", "czynnik-ludzki-w-technice/index.html", "fizyka-1/2026-10-11_notatka-1/index.html", "fizyka-1/index.html", "grafika-inzynierska-1/2026-10-17_grafika-inzynierska-17-10-2026/index.html", "grafika-inzynierska-1/2026-10-18_grafika-inzynierska-18-10-2026/index.html", "grafika-inzynierska-1/index.html", "historia-techniki/2026-10-11_spotkanie-1-komunikacja-miedzyludzka-i-poczatki-informatyki/index.html", "historia-techniki/2026-10-17_historia-techniki-17-10-2026/index.html", "historia-techniki/2026-10-18_historia-techniki-18-10-2026-part-1/index.html", "historia-techniki/index.html", "icon-192.png", "icon-512.png", "icon.svg", "index.html", "komunikacja-interpersonalna-negocjacje-i-kompetencje-spolecz/2026-10-11_notatka-1/index.html", "komunikacja-interpersonalna-negocjacje-i-kompetencje-spolecz/index.html", "manifest.webmanifest", "matematyka-1/2026-10-10_notatka-1/index.html", "matematyka-1/2026-10-11_matematyka-niedziela/index.html", "matematyka-1/2026-10-18_matematyka-18-10-2026/index.html", "matematyka-1/2026-10-25_zestaw-1/index.html", "matematyka-1/index.html", "zarzadzanie-srodowiskiem/2026-10-10_notatka-1/index.html", "zarzadzanie-srodowiskiem/2026-10-23_zarzadzanie-srodowiskiem-18-10-2026/index.html", "zarzadzanie-srodowiskiem/index.html"];
self.addEventListener("install", e => e.waitUntil(caches.open(VER)
  .then(c => c.addAll(FILES.map(f => new Request(f, { cache: "reload" }))))  // reload: skip the browser's HTTP cache, take what is on the server now
  .then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(caches.keys()
  .then(ks => Promise.all(ks.filter(k => k !== VER).map(k => caches.delete(k))))
  .then(() => self.clients.claim())));
self.addEventListener("fetch", e => {
  const u = e.request.url.split(/[?#]/)[0];  // folder/ is folder/index.html, as on GitHub Pages
  e.respondWith(caches.match(u.endsWith("/") ? u + "index.html" : u).then(r => r || fetch(e.request)));
});
