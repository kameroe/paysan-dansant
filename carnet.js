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
    numero: 2,
    date: "29 oct. 2026",
    ciel: "nuit claire",
    titre: "Que ce passe t-il actuellement ?",
    image: "images/bureau29-10-26.jpeg",
    legende: "révisions et écriture",
    audio: "audios/29-10-26.mp3",
    texte: `

Je suis épuisé et je ne trouve plus grand plaisir à ma vie en général. Je ne trouve plus de sens à ma vie et j’ai peur de ne pas être à la hauteur. Au lycée, je vivais chez mes parents. L’année dernière, j’étais avec ma copine et je découvrais une toute nouvelle vie d'indépendance. Là, j’ai l’impression de n’avoir aucun vrai ami, et mes parents, je ne les vois plus.

Je pensais que j’étais fait pour être seul, pour ne pas être en couple. Je me rends compte que ce n’est pas vrai. La beauté, je peux la ressentir seul, mais elle ne suffit pas à vivre une vie bonne. Il faut aussi l’amour : l’amour, le beau et la sensibilité sont les trois choses qui me manquent le plus aujourd'hui.

Avant, j’avais une vision péjorative du couple. Je pensais que ça ramollissait. Aujourd’hui, je vois la vie de couple comme un équilibre à maintenir : ne pas arrêter d’être dur, mais trouver l’équilibre entre la souplesse et la dureté.

C'est son anniversaire, elle revient. Je crois qu’elle peut m’aider si tant est qu’elle le veut. Je crois qu'elle est vraiment ouverte à ce que je lui parle de mes problèmes. Ça me fait peur de m’ouvrir, mais je trouve ça vraiment bon de sa part. J’ai parfois du mal à être empathique, et je ne comprends pas toujours comment elle peut l’être autant. Mais je veux apprendre à recevoir ce qu’elle me donne et à lui donner moi aussi cet amour, avec de la sensibilité, sans me perdre dans la facilité.`,
    pensee: "Aimer est tout, être aimé aussi.",
  },
  {
    numero: 1,
    date: "28 oct. 2026",
    ciel: "nuit claire",
    titre: "Pourquoi ce carnet",
    texte: `Il y a quelques années, j'écrivais déjà quelque part. Puis j'ai tout supprimé, et aujourd'hui, j'aimerais tellement relire ce que je pensais à l'époque et voir la manière dont je m'exprimais.
Alors je recommence, autrement. Chaque page est d'abord écrite chez moi, et ce site n'en est qu'une copie. Si un jour il disparaît, le carnet, lui, restera.`,
    pensee: "On ne se baigne jamais deux fois dans le même fleuve, disait Héraclite. On ne se relit sans doute jamais deux fois avec les mêmes yeux non plus.",
    note: "dans cinq ans, relire celle-ci en premier",
  },

];
