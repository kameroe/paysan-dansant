/* =========================================================
   PAYSAN DANSANT — construction du carnet
   Lit chaque fichier de pages/ et fabrique carnet.js,
   que le site affiche. Cloudflare le lance tout seul
   à chaque envoi sur GitHub. Sur ton ordi : node build.js
   Pas besoin d'y toucher.
   ========================================================= */

const fs = require("fs");
const path = require("path");

const DOSSIER = path.join(__dirname, "pages");
const SORTIE = path.join(__dirname, "carnet.js");
const MOIS = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];

function echapper(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function cheminPropre(p) {
  return String(p || "").trim().replace(/^\.?\//, "");
}

function lienSur(url) {
  const u = String(url).trim();
  if (/^(https?:|mailto:)/i.test(u)) return u;
  if (/^[a-z][a-z0-9+.-]*:/i.test(u)) return "#";
  return cheminPropre(u);
}

function dateLisible(d) {
  const m = String(d || "").match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return String(d || "");
  return `${Number(m[3])} ${MOIS[Number(m[2]) - 1]} ${m[1]}`;
}

function lireEnTete(texte) {
  const m = texte.replace(/^﻿/, "").match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n|$)([\s\S]*)$/);
  if (!m) return { meta: {}, corps: texte };
  const meta = {};
  m[1].split(/\r?\n/).forEach((ligne) => {
    const i = ligne.indexOf(":");
    if (i < 1 || /^\s/.test(ligne)) return;
    const cle = ligne.slice(0, i).trim();
    let val = ligne.slice(i + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) val = val.slice(1, -1);
    if (val === "true") val = true;
    else if (val === "false") val = false;
    meta[cle] = val;
  });
  return { meta, corps: m[2] };
}

function enLigne(s) {
  let h = echapper(s);
  h = h.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (_, alt, src) => `<img src="${echapper(cheminPropre(src))}" alt="${alt}" loading="lazy">`);
  h = h.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) => `<a href="${echapper(lienSur(u))}">${t}</a>`);
  h = h.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  h = h.replace(/(^|[^*])\*([^*\s][^*]*)\*/g, "$1<em>$2</em>");
  h = h.replace(/(^|[\s(])_([^_\s][^_]*)_(?=[\s.,;:!?)]|$)/g, "$1<em>$2</em>");
  return h.replace(/\n/g, "<br>");
}

function markdownEnHtml(corps) {
  const blocs = corps.replace(/\r\n/g, "\n").trim().split(/\n\s*\n/).filter((b) => b.trim());
  let premier = true;
  return blocs.map((bloc) => {
    const b = bloc.trim();
    const image = b.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/);
    if (image) {
      const leg = image[1] ? `<figcaption>${echapper(image[1])}</figcaption>` : "";
      return `<figure><img src="${echapper(cheminPropre(image[2]))}" alt="${echapper(image[1])}" loading="lazy">${leg}</figure>`;
    }
    if (/^(\*\s*\*\s*\*|-\s*-\s*-)[\s*-]*$/.test(b)) return '<p class="sep" aria-hidden="true">❦</p>';
    const titre = b.match(/^#{1,6}\s+(.+)$/);
    if (titre && !b.includes("\n")) return `<h3>${enLigne(titre[1])}</h3>`;
    if (b.split("\n").every((l) => /^>\s?/.test(l))) {
      return `<blockquote>${enLigne(b.split("\n").map((l) => l.replace(/^>\s?/, "")).join("\n"))}</blockquote>`;
    }
    if (b.split("\n").every((l) => /^\s*[-*]\s+/.test(l))) {
      return `<ul>${b.split("\n").map((l) => `<li>${enLigne(l.replace(/^\s*[-*]\s+/, ""))}</li>`).join("")}</ul>`;
    }
    const classe = premier ? ' class="lead"' : "";
    premier = false;
    return `<p${classe}>${enLigne(b)}</p>`;
  }).join("\n");
}

const fichiers = fs.existsSync(DOSSIER)
  ? fs.readdirSync(DOSSIER).filter((f) => f.toLowerCase().endsWith(".md") && !f.startsWith("_")).sort()
  : [];

const pages = [];
fichiers.forEach((f) => {
  const { meta, corps } = lireEnTete(fs.readFileSync(path.join(DOSSIER, f), "utf8"));
  if (meta.brouillon === true || meta.draft === true) return;
  pages.push({ f, meta, corps });
});

pages.sort((a, b) => String(a.meta.date || "").slice(0, 10).localeCompare(String(b.meta.date || "").slice(0, 10)) || a.f.localeCompare(b.f));

const carnet = pages.map(({ f, meta, corps }, i) => {
  const p = { numero: i + 1, fichier: f, date: dateLisible(meta.date), html: markdownEnHtml(corps) };
  const titre = meta.title || meta.titre;
  if (titre) p.titre = titre;
  ["ciel", "legende", "pensee", "note"].forEach((k) => { if (meta[k]) p[k] = String(meta[k]); });
  ["image", "audio"].forEach((k) => { if (meta[k]) p[k] = cheminPropre(meta[k]); });
  if (meta.exemple === true) p.exemple = true;
  return p;
});

const entete = "/* Fichier fabriqué automatiquement par build.js à partir du dossier pages/.\n   Ne le modifie pas : écris tes pages dans pages/. */\n";
fs.writeFileSync(SORTIE, entete + "const CARNET = " + JSON.stringify(carnet, null, 2) + ";\n", "utf8");
console.log(`Carnet construit : ${carnet.length} page(s).`);
