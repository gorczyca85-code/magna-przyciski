# Magna Atelier – przyciski w Claude

Rząd przycisków nad polem czatu w Claude dla kierownika produkcji Magna Atelier.
Każdy przycisk wysyła gotowe polecenie do Claude, bez pisania:

- **Plan dzienny** – raport dzienny z aktualnych danych weclapp
- **Lista do pakowania** – lista pakowania na dziś + PDF
- **Zdjęcia: sklejone i spakowane** – odczyt grupy WhatsApp, wpisy Kleben/Verpacken w weclapp, aktualizacja planu
- **Rysunki** – zamówienia czekające na rysunek
- **Plan trasy** – trasa Michaela wg zasad (90 km/h, przerwy, 11 h odpoczynku) + co można dołożyć

## Instalacja (raz)
W Claude wpisz:
```
/plugin install magna-przyciski --marketplace <owner>/<repo>
```
