# AI Kompas

**Interactieve AI-leerlijn voor scholen in het Caribisch gebied.**

AI Kompas helpt leerlingen om kunstmatige intelligentie te begrijpen, verantwoord te gebruiken en kritisch te beoordelen. Ontwikkeld voor de onderwijscontext op Curaçao, met uitrol naar de andere Caribische eilanden en Nederlandstalige scholen in Nederland.

---

## Concept

> "AI is handig, maar je moet wel leren hoe je ermee omgaat."

Niet hype, maar wijsheid. AI Kompas geeft leerlingen een kompas: richting vinden in een wereld met AI. De leerlijn is visueel, taaltoegankelijk en gebouwd voor leerlingen met uiteenlopende taalniveaus in Nederlands, Engels en Papiamentu.

---

## Leerlijn

| Niveau | Leeftijd | Thema | Status |
|--------|----------|-------|--------|
| 1 | 8–10 jaar | AI begrijpen | Binnenkort |
| 2 | 10–13 jaar | AI verantwoord gebruiken | ✅ Module 1 in ontwikkeling |
| 3 | 13–16 jaar | AI maken en beoordelen | Binnenkort |

**Startpunt: Niveau 2 — Module 1**
*Slim werken met AI, zonder vals te spelen*

Vier blokken van 5 minuten:
1. Wat kan AI wel en niet?
2. Hoe stel je een goede vraag?
3. Hoe weet je of AI gelijk heeft?
4. Wanneer helpt AI en wanneer is het valsspelen?

---

## Talen

| Code | Taal | Status |
|------|------|--------|
| `nl` | Nederlands | Volledig |
| `en` | Engels | Volledig |
| `pap` | Papiamentu | Skeleton klaar — vertaling volgt via native speaker |

Routes: `/nl/`, `/en/`, `/pap/`

---

## Technische stack

- **Framework:** [Astro](https://astro.build) — statische output, snel, geen server vereist
- **Styling:** Tailwind CSS v4
- **i18n:** JSON-bestanden per taal in `src/i18n/`
- **Hosting:** Netlify of Vercel (statisch)

---

## Lokaal draaien

```bash
npm install
npm run dev        # dev server op localhost:4321
npm run build      # productie build naar /dist
npm run preview    # preview van de build
```

---

## Projectstructuur

```
src/
├── components/
│   ├── AudioButton.astro      # Papiamentu audio per stap
│   ├── LanguageSwitch.astro   # NL / EN / PAP schakelaar
│   ├── ProgressBar.astro      # Voortgang per blok
│   └── QuizBlock.astro        # Interactieve quizvraag
├── i18n/
│   ├── nl.json                # Nederlandse teksten
│   ├── en.json                # Engelse teksten
│   └── pap.json               # Papiamentu (skeleton)
├── layouts/
│   └── ModuleLayout.astro     # Basis layout met header/footer
└── pages/
    ├── index.astro            # Redirect → /nl/
    └── [lang]/
        ├── index.astro        # Moduleoverzicht
        └── module-1/
            ├── index.astro    # Modulintro
            ├── blok-1.astro
            ├── blok-2.astro
            ├── blok-3.astro
            ├── blok-4.astro
            └── certificaat.astro
```

---

## Pilotstatus

In ontwikkeling voor een pilot met 2–3 klassen via bestaand schoolnetwerk op Curaçao. De pilot richt zich op niveau 2 (10–13 jaar), startend met module 1.

**Nog te doen voor pilot:**
- [ ] Papiamentu vertaling voltooien (native speaker)
- [ ] Audio-opnames voor PAP-versie
- [ ] Leerkrachtgids pagina
- [ ] Voor- en nameting per module
- [ ] Uitgebreide quiz met reflectievragen
- [ ] SVG-certificaat template

---

## Licentie

Alle rechten voorbehouden. Neem contact op voor gebruik of samenwerking.
