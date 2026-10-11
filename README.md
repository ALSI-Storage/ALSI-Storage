# ALSI: biblioteka notatek z wykładów

Statyczna strona (czysty HTML, bez budowania i bez zewnętrznych zależności), gotowa do GitHub Pages.
Ten folder jest **kopią `Output/`**: nie edytuj go ręcznie, bo `alsi.py publish` (albo `python alsi.py site`) nadpisze go przy każdej publikacji. Zostają tylko `README.md`, `.nojekyll` i `.git`.

## Jak wystawić (jednorazowo)

1. Utwórz na GitHubie nowe repozytorium, np. `alsi-notatki` (puste, bez README).
2. W tym folderze (`Site/`):

   ```
   git init -b main
   git add .
   git commit -m "ALSI: biblioteka notatek"
   git remote add origin https://github.com/<TWOJ-LOGIN>/alsi-notatki.git
   git push -u origin main
   ```

3. Na GitHubie: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main`, folder `/ (root)` → Save**.
4. Po minucie strona działa pod `https://<TWOJ-LOGIN>.github.io/alsi-notatki/`.

## Aktualizacja po nowym wykładzie

Po `alsi.py publish` folder `Site/` jest już odświeżony. Wystarczy:

```
git add -A
git commit -m "Nowy wykład"
git push
```

## Uwagi

- **Widoczność:** darmowy GitHub Pages jest publiczny dla każdego, kto zna link. W notatkach są nazwiska prowadzących i treść zajęć, więc zanim wystawisz stronę, upewnij się, że możesz je publikować.
- **Indeksowanie:** każda strona ma `<meta name="robots" content="noindex, nofollow">`, więc wyszukiwarki jej nie pokażą. Żeby to zmienić, usuń tę linię z `template/index.html` i `template/board.html` i opublikuj ponownie.
- Wszystkie linki są względne, więc strona działa pod dowolnym adresem, także w podkatalogu (`/alsi-notatki/`).
