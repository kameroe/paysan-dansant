# Paysan dansant — mode d'emploi

## Ce que contient ce dossier

| Fichier ou dossier | Rôle | Tu y touches ? |
|---|---|---|
| `carnet.js` | Tout le contenu : tes pages | Oui, souvent |
| `images/` | Tes photos et dessins | Oui, tu y déposes tes fichiers |
| `audios/` | Tes notes vocales et sons | Oui, tu y déposes tes fichiers |
| `index.html` | La mise en forme (couleurs, polices, disposition) | Rarement |

Pour voir ton blog sur ton ordi, double-clique sur `index.html`.

## Publier une nouvelle page

1. Ouvre `carnet.js` (sur GitHub : clique dessus, puis sur le crayon « Edit »).
2. Copie le modèle écrit en haut du fichier.
3. Colle-le juste sous la ligne `const CARNET = [`.
4. Change le numéro, la date, le titre, le texte. Supprime les lignes inutiles (par exemple `audio:` si tu n'as pas de son).
5. Enregistre (sur GitHub : bouton vert « Commit changes »).

Le site se met à jour tout seul en une à deux minutes.

## Ajouter une image ou un son

1. Dans le dossier `images/` ou `audios/`, dépose ton fichier (sur GitHub : « Add file » puis « Upload files »).
2. Donne-lui un nom simple, sans espace ni accent : `riviere-novembre.jpg`, `pensee-du-soir.mp3`.
3. Dans ta page, écris le chemin : `image: "images/riviere-novembre.jpg",`

Limites : 25 Mo maximum par fichier. Pour les sons, préfère le MP3 (bien plus léger que le WAV). Pense à réduire tes photos (1500 px de large suffit).

## Supprimer les exemples

Quand tu publies ta première vraie page, efface les trois blocs marqués `exemple: true` dans `carnet.js`, et supprime `images/fougere.png` et `audios/vent-et-oiseaux.wav`.

## Garder l'anonymat

- Pas de nom, de photo de toi, ni de lieu précis dans les pages ou les noms de fichiers.
- Les photos de téléphone peuvent contenir ta position GPS : désactive la localisation dans l'appareil photo, ou fais une capture d'écran de la photo avant de l'envoyer.
- Garde le dépôt GitHub en **privé** : le site reste public, mais l'historique de tes modifications non.

## Garder une copie chez toi

Sur GitHub, bouton vert « Code » puis « Download ZIP ». Fais-le de temps en temps et range le zip sur un disque ou une clé. GitHub garde aussi chaque version de chaque page : rien ne se perd si tu te trompes.
