/* =========================================================
   PAYSAN DANSANT — le contenu du carnet
   =========================================================

   Pour ajouter une page :
   1. Copie le modèle ci-dessous (de "{" jusqu'à "},").
   2. Colle-le juste en dessous de la ligne "const CARNET = [".
   3. Remplis les champs. Ceux dont tu n'as pas besoin, supprime-les.
   4. Enregistre. L'ordre n'a pas d'importance : les pages sont
      classées par numéro, la plus récente en haut.

   MODÈLE À COPIER :

  {
    numero: 4,
    date: "29 oct. 2026",
    ciel: "soleil d'automne",
    titre: "Le titre de ta page",
    image: "images/nom-de-ta-photo.jpg",
    legende: "une petite légende sous l'image",
    audio: "audios/nom-de-ton-son.mp3",
    texte: `Ton premier paragraphe.

Laisse une ligne vide pour commencer un nouveau paragraphe.`,
    pensee: "Une citation ou une réflexion, en italique.",
    note: "une annotation manuscrite dans la marge",
  },

   Règles à retenir :
   - Le texte se met entre deux accents graves ` (AltGr + 7).
   - Les autres champs se mettent entre guillemets " ".
   - Chaque champ finit par une virgule.
   - Les images vont dans le dossier images/, les sons dans audios/.
   ========================================================= */

const CARNET = [

  {
    numero: 3,
    date: "28 oct. 2026",
    ciel: "couvert, frais",
    exemple: true,
    titre: "Fougère, dessinée par une formule",
    image: "images/fougere.png",
    legende: "quatre règles simples, répétées, et une feuille apparaît",
    texte: `Ici tu pourras mettre une photo de terrain, un croquis scanné ou une capture. Ce dessin est une fougère de Barnsley : quatre transformations répétées des milliers de fois suffisent à faire pousser la forme.`,
  },

  {
    numero: 2,
    date: "28 oct. 2026",
    ciel: "vent faible",
    exemple: true,
    titre: "Note vocale, en marchant",
    audio: "audios/vent-et-oiseaux.wav",
    texte: `Ce son est un exemple généré (du vent et quelques oiseaux). À la place, tu déposeras tes propres enregistrements : une pensée dite à voix haute, le bruit d'un ruisseau, un retour de stage.`,
    note: "parfois c'est plus simple de parler que d'écrire",
  },

  {
    numero: 1,
    date: "28 oct. 2026",
    ciel: "nuit claire",
    exemple: true,
    titre: "Pourquoi ce carnet",
    texte: `Il y a quelques années, j'écrivais déjà quelque part. Puis j'ai tout supprimé, et aujourd'hui j'aimerais tellement relire ce que je pensais à l'époque, comment je le disais.

Alors je recommence, autrement. Chaque page est d'abord écrite chez moi, et ce site n'en est qu'une copie. Si un jour il disparaît, le carnet, lui, restera.`,
    pensee: "On ne se baigne jamais deux fois dans le même fleuve, disait Héraclite. On ne se relit sans doute jamais deux fois avec les mêmes yeux non plus.",
    note: "dans cinq ans, relire celle-ci en premier",
  },

];
