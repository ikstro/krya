// Chrome asks for the microphone only on a page it can show: this one. The
// offscreen recorder then has it too, since both are the extension's.

const result = document.getElementById('result')
const T = (key, ...subs) => chrome.i18n.getMessage(key, subs)
document.documentElement.lang = chrome.i18n.getUILanguage()
for (const node of document.querySelectorAll('[data-i18n]')) node.textContent = T(node.dataset.i18n)

document.getElementById('allow').addEventListener('click', async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    for (const track of stream.getTracks()) track.stop()
    result.textContent = T('micDone')
  } catch (error) {
    result.textContent = T('micFailed', error.message)
  }
})
