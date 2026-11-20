# Lumière — site statique (GitHub Pages)

Version statique de l'app Base44 : plus de serveur, tout tourne dans le navigateur.
Les données (catalogue, liste, progression) et les comptes restent sur ton app Base44, que le site appelle directement.

## Ce qu'il te faut

| Variable | Où la trouver | Type GitHub |
| --- | --- | --- |
| `VITE_BASE44_APP_ID` | Base44 → ton app → réglages (identifiant de l'app) | Variable |
| `VITE_TMDB_API_READ_ACCESS_TOKEN` | themoviedb.org → Paramètres → API → « API Read Access Token » | Secret |
| `VITE_BASE44_SERVER_URL` (optionnel) | `https://base44.app` par défaut | Variable |

⚠️ Tout ce qui commence par `VITE_` est compilé dans le site : le jeton TMDB sera lisible par les visiteurs.
Pour TMDB (lecture seule, gratuit) c'est acceptable en usage perso ; tu peux le révoquer à tout moment.

## Mettre en ligne

1. Crée un dépôt GitHub et pousse ce dossier :
   ```bash
   git init && git add . && git commit -m "Lumière"
   git branch -M main
   git remote add origin https://github.com/<utilisateur>/<depot>.git
   git push -u origin main
   ```
2. Dépôt → **Settings → Pages → Source : GitHub Actions**.
3. Dépôt → **Settings → Secrets and variables → Actions** : ajoute les variables du tableau ci-dessus.
4. Relance le workflow (onglet **Actions → Déployer sur GitHub Pages → Run workflow**).
5. Le site est sur `https://<utilisateur>.github.io/<depot>/`.

## En local

```bash
cp .env.example .env   # puis remplis-le
npm install
npm run dev
```

## Limites à connaître

- Les règles d'accès des entités (`base44/entities/*.jsonc`) sont la seule protection des données : vérifie-les, car le code tourne chez le visiteur.
- Les e-mails de réinitialisation de mot de passe et la double authentification (MFA) dépendent de pages hébergées par Base44 ; ils peuvent ne pas fonctionner depuis `github.io`.
- Supprimer un titre ne nettoie plus que la progression/liste de l'utilisateur connecté (plus d'accès « service » côté serveur).
