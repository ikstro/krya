// The lines of a talk with the duck as both places draw them: the talk window
// (talk.ts), where they are heard and read aloud, and Library › Talks (app.ts),
// where a talk put away is read again. The duck's line on the left by its
// tile, its sentences as spans to light while read and its words clickable;
// the person's on the right, their mistakes marked in place, the note under it.

import type { TalkTurn } from '../protocol'
import { splitSentences } from '../sentences'
import { tile } from './brand'
import { el } from './dom'
import { lucide } from './lucide'
import { withMarks } from './marks'

/** A line of the duck's; `again`: a button that says it again. */
export function duckTurn(turn: TalkTurn, again?: () => void): HTMLElement {
  const sentences = splitSentences(turn.text)
  const bubble = el('div', { class: 'bubble', 'data-words': '' }, ...(sentences.length ? sentences : [turn.text]).flatMap((s, i) => [i ? ' ' : '', el('span', { class: 's', 'data-i': String(i) }, s)]))
  const button = again ? el('button', { class: 'ib again', title: 'Say it again', 'aria-label': 'Say it again', onclick: again }, lucide('volume-2')) : null
  return el('div', { class: 'turn duck', 'data-id': String(turn.id) }, tile(28), bubble, button)
}

/** A line of the person's, set right where it had a mistake; `hear`: a click reads it, set right. */
export function myTurn(turn: TalkTurn, hear?: () => void): HTMLElement {
  const marked = !!turn.parts?.length
  const line = el('span', { class: 'said marks' }, ...(marked ? withMarks(turn.parts!) : [turn.text]))
  const under = turn.checking
    ? el('small', { class: 'checking' }, lucide('loader', 's turning'), 'checking…')
    : marked
      ? el('small', {}, turn.note || 'set right above')
      : null
  const cls = marked ? 'bubble fixed' : 'bubble'
  const bubble = hear ? el('button', { class: cls, title: marked ? 'Hear it said right' : 'Hear it', onclick: hear }, line, under) : el('div', { class: cls }, line, under)
  return el('div', { class: 'turn me', 'data-id': String(turn.id) }, bubble)
}
