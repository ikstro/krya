// The landing's Ukrainian and Russian pages, made from the English one (site/index.html): every text of the page
// replaced by its translation (scripts/site/<lang>.mjs, the longest first, so a short one never cuts into a longer
// one), the head and the language links pointed at the page's own address, and window.KRYA set for the shared
// script (site/krya.js): its words and the examples in the version's language.
// node scripts/build-site.mjs → site/uk/index.html, site/ru/index.html. The Pages workflow runs it before upload.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SITE = join(ROOT, 'site')
const BASE = 'https://ikstro.com/krya/'
const VERSIONS = [
  { code: 'en', label: 'EN', name: 'English', dir: '' },
  { code: 'uk', label: 'UA', name: 'Українська', dir: 'uk/' },
  { code: 'ru', label: 'RU', name: 'Русский', dir: 'ru/' },
]
const CI = !!process.env.GITHUB_ACTIONS

// The language links as seen from one version: relative, so the page works from a file and under /krya/ alike.
function langLinks(from, label) {
  const up = from.dir ? '../' : ''
  const links = VERSIONS.map(v => {
    const href = v.code === from.code ? './' : up + v.dir || './'
    return `<a href="${href}" hreflang="${v.code}" lang="${v.code}" title="${v.name}"${v.code === from.code ? ' aria-current="page"' : ''}>${v.label}</a>`
  })
  return `<nav class="langs" aria-label="${label}">${links.join('')}</nav>`
}

const english = readFileSync(join(SITE, 'index.html'), 'utf8')
if (!/<nav class="langs"[\s\S]*?<\/nav>/.test(english)) throw new Error('site/index.html has no language links')
for (const version of VERSIONS.filter(v => v.dir)) {
  const { html, text, demo, locale, langLabel } = (await import(`./site/${version.code}.mjs`)).default
  let page = english
  const missing = []
  for (const [from, to] of [...html].sort((a, b) => b[0].length - a[0].length)) {
    if (!page.includes(from)) missing.push(from)
    else page = page.split(from).join(to)
  }
  const head = [
    ['<html lang="en">', `<html lang="${version.code}">`],
    [`<link rel="canonical" href="${BASE}">`, `<link rel="canonical" href="${BASE}${version.dir}">`],
    [`<meta property="og:url" content="${BASE}">`, `<meta property="og:url" content="${BASE}${version.dir}">`],
    ['<meta property="og:locale" content="en_US">', `<meta property="og:locale" content="${locale}">`],
    ['<link rel="stylesheet" href="krya.css">', '<link rel="stylesheet" href="../krya.css">'],
    ['<script src="krya.js"></script>', `<script>window.KRYA = ${JSON.stringify({ lang: version.code, text, demo }).replace(/</g, '\\u003c')};</script>\n<script src="../krya.js"></script>`],
  ]
  for (const [from, to] of head) {
    if (!page.includes(from)) throw new Error(`${version.code}: the English page has no ${from}`)
    page = page.replace(from, to)
  }
  page = page.replace(/<nav class="langs"[\s\S]*?<\/nav>/, langLinks(version, langLabel))
  mkdirSync(join(SITE, version.dir), { recursive: true })
  writeFileSync(join(SITE, version.dir, 'index.html'), page)
  // A text of the English page no translation names stays English on this page: said, never fatal, so the page still goes up.
  for (const m of missing) console.warn(`${CI ? '::warning::' : ''}${version.code}: not on the English page any more: ${m.slice(0, 90)}`)
  console.log(`site/${version.dir}index.html: ${html.length - missing.length} of ${html.length} texts`)
  // --check: the texts still in English, to read through (Krya's own windows stay English on purpose).
  if (process.argv.includes('--check')) {
    const body = page.slice(page.indexOf('<body>'), page.indexOf('<script'))
    const left = new Set()
    body.replace(/<svg[\s\S]*?<\/svg>/g, '').replace(/>([^<]+)</g, (m, s) => { if (/[A-Za-z]{3,}/.test(s) && !/[А-Яа-яІіЇїЄєҐґ]/.test(s)) left.add(s.trim()); return m })
    console.log([...left].map(s => `  ${s}`).join('\n'))
  }
}
