# Paysan dansant — mode d'emploi

## Ce que contient ce dossier

| Fichier ou dossier | Rôle | Tu y touches ? |
|---|---|---|
| `pages/` | Tes pages, une par fichier `.md` | Oui, c'est là que tu écris |
| `images/` | Tes photos et dessins | Oui, tu y déposes tes fichiers |
| `audios/` | Tes notes vocales et sons | Oui, tu y déposes tes fichiers |
| `modeles/page.md` | Le modèle d'une page, avec tous les champs possibles | Tu le copies |
| `index.html` | La mise en forme (couleurs, polices, disposition) | Rarement |
| `carnet.js` | Fabriqué automatiquement à partir de `pages/`, absent du dépôt | Jamais |
| `build.js`, `wrangler.jsonc`, `frontmatter.json`, `.vscode/` | Réglages techniques | Jamais |

## Écrire une nouvelle page

1. Copie `modeles/page.md` dans le dossier `pages/`.
2. Renomme-le avec la date devant : `2026-11-01-balade-du-dimanche.md` (sans espace ni accent).
3. Remplis l'en-tête entre les deux lignes `---`, et supprime les lignes inutiles (par exemple `audio:` si tu n'as pas de son).
4. Écris ton texte sous l'en-tête.
5. Publie :

```
git add -A
git commit -m "Nouvelle page : balade du dimanche"
git push
```

Le site se met à jour tout seul en une à deux minutes. Les pages sont numérotées et classées par date automatiquement.

Avec l'extension **Front Matter CMS**, tu peux aussi cliquer sur son icône à gauche dans VS Code, puis « Create content » : il crée le fichier et te propose les champs.

## Mettre en forme le texte

| Tu écris | Ça donne |
|---|---|
| Une ligne vide entre deux blocs | Un nouveau paragraphe |
| Un simple retour à la ligne | Un retour à la ligne dans le paragraphe |
| `**mot**` | **gras** |
| `*mot*` | *italique* |
| `[texte](https://...)` | Un lien |
| `![légende](images/photo.jpg)` seul sur sa ligne | Une image dans le texte, avec sa légende |
| `> phrase` | Une citation en retrait |
| `- élément` | Une liste à puces |
| `## Titre` | Un intertitre |
| `***` seul sur sa ligne | Un fleuron ❦ de séparation |

## Garder une page en brouillon

Ajoute `brouillon: true` dans l'en-tête : la page reste dans ton dépôt mais n'apparaît pas sur le site. Un fichier dont le nom commence par `_` est aussi ignoré.

## Voir le site sur ton ordi avant de publier

`carnet.js` n'est pas dans le dépôt : il est fabriqué à la demande. Pour un aperçu sur ton ordi, installe Node.js (nodejs.org, version LTS), puis tape `node build.js` et double-clique sur `index.html`. Relance `node build.js` après chaque modification. Sans Node.js, publie simplement : le site en ligne est reconstruit à chaque `git push`.

## Écrire confortablement dans VS Code

À l'ouverture du dossier, VS Code propose d'installer les extensions recommandées : accepte.

- **Code Spell Checker** + dictionnaire français : souligne les fautes d'orthographe.
- **LTeX+** : grammaire et conjugaison en français.
- **Markdown All in One** : Ctrl + B pour le gras, Ctrl + I pour l'italique.
- **Front Matter CMS** : tableau de bord de tes pages.

Raccourcis utiles : **Ctrl + K puis Z** pour le mode zen (Échap deux fois pour sortir), **Ctrl + Maj + V** pour l'aperçu.

## Ajouter une image ou un son

1. Dépose le fichier dans `images/` ou `audios/`, avec un nom simple, sans espace ni accent.
2. Dans l'en-tête de ta page : `image: images/riviere.jpg` ou `audio: audios/pensee-du-soir.mp3`.

Limites : 25 Mo maximum par fichier. Pour les sons, préfère le MP3. Pour les photos, 1500 px de large suffit.

## Avant chaque séance d'écriture

```
git pull
```

Cela récupère les modifications faites ailleurs (sur le site GitHub, ou par Claude). Sans ça, ton prochain `git push` sera refusé.

## Garder l'anonymat

- Pas de nom, de photo de toi, ni de lieu précis dans les pages ou les noms de fichiers.
- Les photos de téléphone peuvent contenir ta position GPS : désactive la localisation dans l'appareil photo, ou fais une capture d'écran de la photo.
- Garde le dépôt GitHub en **privé**, et un pseudo comme nom de profil GitHub.

## Garder une copie chez toi

Ton dossier sur l'ordi est déjà une copie complète. Copie-le de temps en temps sur une clé ou un disque.
