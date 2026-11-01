"use strict";
(() => {
  // src/languages.ts
  var LANGUAGES = [
    { name: "English", native: "English", ru: "\u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439", code: "en" },
    { name: "Spanish", native: "Espa\xF1ol", ru: "\u0438\u0441\u043F\u0430\u043D\u0441\u043A\u0438\u0439", code: "es" },
    { name: "German", native: "Deutsch", ru: "\u043D\u0435\u043C\u0435\u0446\u043A\u0438\u0439", code: "de" },
    { name: "French", native: "Fran\xE7ais", ru: "\u0444\u0440\u0430\u043D\u0446\u0443\u0437\u0441\u043A\u0438\u0439", code: "fr" },
    { name: "Italian", native: "Italiano", ru: "\u0438\u0442\u0430\u043B\u044C\u044F\u043D\u0441\u043A\u0438\u0439", code: "it" },
    { name: "Portuguese", native: "Portugu\xEAs", ru: "\u043F\u043E\u0440\u0442\u0443\u0433\u0430\u043B\u044C\u0441\u043A\u0438\u0439", code: "pt" },
    { name: "Russian", native: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439", ru: "\u0440\u0443\u0441\u0441\u043A\u0438\u0439", code: "ru" },
    { name: "Ukrainian", native: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430", ru: "\u0443\u043A\u0440\u0430\u0438\u043D\u0441\u043A\u0438\u0439", code: "uk" },
    { name: "Polish", native: "Polski", ru: "\u043F\u043E\u043B\u044C\u0441\u043A\u0438\u0439", code: "pl" },
    { name: "Czech", native: "\u010Ce\u0161tina", ru: "\u0447\u0435\u0448\u0441\u043A\u0438\u0439", code: "cs" },
    { name: "Dutch", native: "Nederlands", ru: "\u043D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u0441\u043A\u0438\u0439", code: "nl" },
    { name: "Swedish", native: "Svenska", ru: "\u0448\u0432\u0435\u0434\u0441\u043A\u0438\u0439", code: "sv" },
    { name: "Norwegian", native: "Norsk", ru: "\u043D\u043E\u0440\u0432\u0435\u0436\u0441\u043A\u0438\u0439", code: "nb" },
    { name: "Danish", native: "Dansk", ru: "\u0434\u0430\u0442\u0441\u043A\u0438\u0439", code: "da" },
    { name: "Finnish", native: "Suomi", ru: "\u0444\u0438\u043D\u0441\u043A\u0438\u0439", code: "fi" },
    { name: "Greek", native: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC", ru: "\u0433\u0440\u0435\u0447\u0435\u0441\u043A\u0438\u0439", code: "el" },
    { name: "Turkish", native: "T\xFCrk\xE7e", ru: "\u0442\u0443\u0440\u0435\u0446\u043A\u0438\u0439", code: "tr" },
    { name: "Romanian", native: "Rom\xE2n\u0103", ru: "\u0440\u0443\u043C\u044B\u043D\u0441\u043A\u0438\u0439", code: "ro" },
    { name: "Hungarian", native: "Magyar", ru: "\u0432\u0435\u043D\u0433\u0435\u0440\u0441\u043A\u0438\u0439", code: "hu" },
    { name: "Bulgarian", native: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438", ru: "\u0431\u043E\u043B\u0433\u0430\u0440\u0441\u043A\u0438\u0439", code: "bg" },
    { name: "Serbian", native: "\u0421\u0440\u043F\u0441\u043A\u0438", ru: "\u0441\u0435\u0440\u0431\u0441\u043A\u0438\u0439", code: "sr" },
    { name: "Croatian", native: "Hrvatski", ru: "\u0445\u043E\u0440\u0432\u0430\u0442\u0441\u043A\u0438\u0439", code: "hr" },
    { name: "Georgian", native: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8", ru: "\u0433\u0440\u0443\u0437\u0438\u043D\u0441\u043A\u0438\u0439", code: "ka" },
    { name: "Armenian", native: "\u0540\u0561\u0575\u0565\u0580\u0565\u0576", ru: "\u0430\u0440\u043C\u044F\u043D\u0441\u043A\u0438\u0439", code: "hy" },
    { name: "Kazakh", native: "\u049A\u0430\u0437\u0430\u049B \u0442\u0456\u043B\u0456", ru: "\u043A\u0430\u0437\u0430\u0445\u0441\u043A\u0438\u0439", code: "kk" },
    { name: "Arabic", native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", ru: "\u0430\u0440\u0430\u0431\u0441\u043A\u0438\u0439", code: "ar" },
    { name: "Hebrew", native: "\u05E2\u05D1\u05E8\u05D9\u05EA", ru: "\u0438\u0432\u0440\u0438\u0442", code: "he" },
    { name: "Persian", native: "\u0641\u0627\u0631\u0633\u06CC", ru: "\u043F\u0435\u0440\u0441\u0438\u0434\u0441\u043A\u0438\u0439", code: "fa" },
    { name: "Hindi", native: "\u0939\u093F\u0928\u094D\u0926\u0940", ru: "\u0445\u0438\u043D\u0434\u0438", code: "hi" },
    { name: "Chinese", native: "\u4E2D\u6587", ru: "\u043A\u0438\u0442\u0430\u0439\u0441\u043A\u0438\u0439", code: "zh" },
    { name: "Japanese", native: "\u65E5\u672C\u8A9E", ru: "\u044F\u043F\u043E\u043D\u0441\u043A\u0438\u0439", code: "ja" },
    { name: "Korean", native: "\uD55C\uAD6D\uC5B4", ru: "\u043A\u043E\u0440\u0435\u0439\u0441\u043A\u0438\u0439", code: "ko" },
    { name: "Vietnamese", native: "Ti\u1EBFng Vi\u1EC7t", ru: "\u0432\u044C\u0435\u0442\u043D\u0430\u043C\u0441\u043A\u0438\u0439", code: "vi" },
    { name: "Thai", native: "\u0E44\u0E17\u0E22", ru: "\u0442\u0430\u0439\u0441\u043A\u0438\u0439", code: "th" },
    { name: "Indonesian", native: "Bahasa Indonesia", ru: "\u0438\u043D\u0434\u043E\u043D\u0435\u0437\u0438\u0439\u0441\u043A\u0438\u0439", code: "id" }
  ];
  function findLanguage(name) {
    if (!name) return void 0;
    const key = name.trim().toLowerCase();
    return LANGUAGES.find((l) => l.name.toLowerCase() === key || l.native.toLowerCase() === key || l.code === key);
  }
  function voiceMatches(voiceLang, code) {
    return voiceLang.toLowerCase().replace("_", "-").split("-")[0] === code.toLowerCase();
  }

  // src/i18n/en.ts
  var en = {
    // ------------------------------------------------------------ shared
    "common.close": "Close",
    "common.restore": "Restore",
    "common.maximize": "Maximize",
    "common.copy": "Copy",
    "common.copied": "Copied",
    "common.notNow": "Not now",
    "common.retry": "Retry",
    "common.tryAgain": "Try again",
    "common.openSettings": "Open settings",
    "common.listen": "Listen",
    "common.stop": "Stop",
    "common.paste": "Paste",
    "common.listening": "Listening\u2026",
    "common.checking": "Checking\u2026",
    "common.or": "or",
    "common.and": "and",
    "common.cancel": "Cancel",
    "main.saveWords": "Save the words for Anki",
    "main.ankiText": "Text for Anki",
    "main.saveBackup": "Save a backup",
    "main.backupFile": "Krya backup",
    "main.openBackup": "Open a backup",
    "main.backupUnread": "This backup could not be read",
    "main.importAsk": "Import this backup?",
    "main.importDetail": "It holds {what}. Your settings become the backup's; its words, mistakes and history are added to yours, nothing of yours is removed.",
    "main.import": "Import",
    "main.resetAsk": "Reset all settings?",
    "main.resetDetail": "Keys, switches and lists go back to how they came. Your language, words, transcripts and what Krya learned from your typing stay.",
    "main.reset": "Reset",
    "main.resetKeysAsk": "Reset all keys?",
    "main.resetKeysDetail": "Every shortcut goes back to how it came: Ctrl+Alt+S, Ctrl+Alt+T, Ctrl+Alt+D, Ctrl+Alt+N and Ctrl+C twice; the others are cleared. Nothing else changes.",
    "main.resetKeys": "Reset keys",
    "main.saveTranscript": "Save the transcript",
    "main.notTranslated": "Could not translate: {why}",
    "main.noClipText": "The clipboard holds no text. Select a text and copy it first.",
    "main.nothingCopied": "Nothing was copied. Select a text, then press the shortcut.",
    "main.keysTaken": { one: "{keys} is taken by another program. Choose another in the settings.", other: "{keys} are taken by another program. Choose others in the settings." },
    "main.copyTwiceOff": "Ctrl+C twice will not work: {why}. Use the tray menu.",
    "backup.settings": "settings",
    "backup.words": { one: "{n} word", other: "{n} words" },
    "backup.mistakes": { one: "{n} mistake", other: "{n} mistakes" },
    "backup.learned": { one: "{n} learned word", other: "{n} learned words" },
    "backup.translations": { one: "{n} translation", other: "{n} translations" },
    "backup.phrases": { one: "{n} dictated phrase", other: "{n} dictated phrases" },
    "backup.talks": { one: "{n} talk", other: "{n} talks" },
    "size.mb": "{n} MB",
    "size.gb": "{n} GB",
    "level.fast": "Fast",
    "level.accurate": "Accurate",
    "level.most": "Most accurate",
    "busy.card": "graphics card",
    "busy.processor": "processor",
    "lang.pairEnglish": "{lang} \u21C4 English",
    "lang.yours": "your language",
    // ------------------------------------------------------------ the tray's panel
    "tray.open": "Open",
    "tray.openKrya": "Open Krya",
    "tray.built": "Built {build}",
    "tray.actions": "Actions",
    "tray.listenCopied": "Listen to the copied text",
    "tray.translateCopied": "Translate the copied text",
    "tray.typeToTranslate": "Type to translate\u2026",
    "tray.checkEnglish": "Check my English\u2026",
    "tray.listenScreen": "Listen to a screen snip",
    "tray.translateScreen": "Translate a screen snip",
    "tray.saveNote": "Save the note",
    "tray.newNote": "New note",
    "tray.transcripts": "Transcripts",
    "tray.quick": "Quick settings",
    "tray.autoFix": "Fix the layout as I type",
    "tray.switchWith": "Switch layouts with {key}",
    "tray.layoutBadge": "Show the layout by the cursor",
    "tray.trayLayout": "Show the layout in the tray",
    "tray.doubleCopy": "Ctrl+C twice listens",
    "tray.yourWords": "Your words",
    "tray.keepWord": "Keep a word as typed\u2026",
    "tray.keepWordTitle": "Never fix this word by itself (Kept as typed)",
    "tray.keepPlaceholder": "a word, as you type it",
    "tray.keepAria": "Keep a word as typed",
    "tray.kept": "Kept: {word}",
    "tray.vocabulary": "Add a word to spell\u2026",
    "tray.keptList": "Words kept as typed",
    "tray.pausedTitle": "Keys and Ctrl+C twice are off",
    "tray.pauseTitle": "Every key and reaction off until resumed",
    "tray.resume": "Resume",
    "tray.pause": "Pause",
    "tray.settings": "Settings",
    "tray.report": "Report",
    "tray.reportTitle": "Report a problem, with Krya\u2019s logs",
    "tray.quit": "Quit",
    "tray.paused": "paused",
    "tray.ready": "ready",
    "tray.readyTitle": "{pair}, offline",
    "tray.downloading": "downloading\u2026",
    "tray.firstUse": "translator on first use",
    "tray.tipRecording": "Recording",
    "tray.tipPaused": "Krya \xB7 paused",
    "tray.tipListen": "{keys} to listen",
    "tray.tipTranslate": "{key} to translate",
    "tray.tipTwice": "Ctrl+C twice",
    // ------------------------------------------------------------ the card
    "kind.listen": "Listen",
    "kind.translate": "Translate",
    "kind.check": "Check",
    "kind.screen": "screen",
    "card.openedBy": "Opened by {keys}",
    "card.openedByTwice": "Opened by {keys} twice",
    "card.prev": "Previous sentence",
    "card.next": "Next sentence",
    "card.oneByOne": "One by one",
    "card.spaceListen": "listen",
    "card.spaceStop": "stop",
    "card.text": "The text",
    "card.from": "From",
    "card.fromTitle": "The language of the text",
    "card.into": "Into",
    "card.intoTitle": "The language to translate into",
    "card.swap": "Swap",
    "card.swapTitle": "Swap the languages: the translation becomes the text",
    "card.voiceOffer": "A natural voice sounds like a real person and reads offline.",
    "card.voiceDownload": "Download \xB7 {size} MB",
    "card.voiceFailed": "The natural voice did not download.",
    "card.voiceDownloading": "Downloading the natural voice\u2026 {pct}%",
    "card.voiceReady": "The natural voice is ready. Press Listen to hear it.",
    "card.busyCard": "The graphics card is busy, so Fast translated this. {level} takes over again once it is free.",
    "card.busyProcessor": "The processor is busy, so Fast translated this. {level} takes over again once it is free.",
    "card.useAnyway": "Use {level} anyway",
    "card.hideTranslation": "Hide the {lang} translation",
    "card.showTranslation": "Show the {lang} translation",
    "card.unpin": "Unpin: close when another window is clicked",
    "card.pin": "Pin: keep open",
    "card.oneOn": "Listen reads one sentence and waits; \u2190 \u2192 step",
    "card.oneOff": "Read one sentence at a time",
    "card.translatingFast": "Translating with Fast\u2026",
    "card.translating": "Translating\u2026",
    "card.translatingLevel": "Translating \xB7 {level}\u2026",
    "card.ofGb": "{a} of {b} GB",
    "card.ofMb": "{a} of {b} MB",
    "card.firstUse": "first use \xB7 once",
    "card.modelOf": "{name} model",
    "card.translatorPair": "Translator, {pair}",
    "card.fromMozilla": "Downloads once from Mozilla, then translates on this computer.",
    "card.fromHfTranslates": "Downloads once from Hugging Face, then translates on this computer.",
    "card.fromHfChecks": "Downloads once from Hugging Face, then checks on this computer.",
    "card.readMeanwhile": "The English is read meanwhile.",
    "card.notChecked": "Not checked",
    "card.notTranslated": "Not translated",
    "card.readingScreen": "Reading the text on the screen\u2026",
    "card.noText": "No text here",
    "card.noTextNote": "The piece of the screen holds no text Krya can read. Snip a piece with words in it.",
    "card.noOcr": "Windows cannot read text yet",
    "card.noOcrNote": "Add text recognition for {lang} or English: Settings \u2192 Time & language \u2192 Language & region \u2192 the language \u2192 Language options \u2192 Optical character recognition.",
    "card.openLanguageSettings": "Open language settings",
    "card.yourEnglish": "Your English",
    "card.typeEnglish": "Type or paste your English",
    "card.checkedBy": "Checked \xB7 {model}",
    "card.improving": "Improving \xB7 {level}\u2026",
    "card.translatedBy": "Translated \xB7 {level}",
    "card.newLine": "{by} \xB7 Shift+Enter, a new line",
    "card.yours": "Yours",
    "card.allLanguages": "All languages",
    "card.pasteOver": "Paste over the selection (Enter)",
    "card.pasteLater": "Pastes once the accurate translation is in (Enter)",
    "card.pasteChecked": "Paste the text set right over the selection (Enter)",
    "card.looksRight": "Looks right",
    "card.listenSpace": "Listen (Space)",
    "card.listenParagraph": "Listen to this paragraph",
    "card.naturalStopped": "The natural voice stopped ({message}). A system voice reads on.",
    "card.noVoice": "No English voice on this computer.",
    "card.openSpeechSettings": "Open speech settings",
    "voice.stepsWin": "To add one: Windows Settings \u2192 Time & language \u2192 Speech \u2192 Add voices \u2192 {lang}, then restart Krya.",
    "voice.stepsMac": "To add one: System Settings \u2192 Accessibility \u2192 Spoken Content \u2192 System voice \u2192 Manage Voices \u2192 {lang}, then restart Krya.",
    "voice.none": "Reading aloud uses the voices of Windows or macOS; this system has none the panel can use.",
    // ------------------------------------------------------------ the word card
    "word.from": "from {word}",
    "word.say": "Say it",
    "word.save": "Save to Words",
    "word.remove": "Remove from Words",
    "word.notFound": "Not in the dictionary.",
    "word.pair": "English \u2192 {lang}",
    "word.notEnglish": "Word meanings are for English only, for now; the {lang} translation is below.",
    "word.noDictionary": "No {pair} dictionary yet; the translation is below.",
    "word.downloading": "Downloading the {pair} dictionary, once\u2026",
    "word.failed": "Couldn\u2019t download the {pair} dictionary. Check the internet connection; it tries again in a minute.",
    "word.off": "The {pair} dictionary isn\u2019t downloaded.",
    // ------------------------------------------------------------ the talk window
    "talk.yourTalks": "Your talks",
    "talk.hideTalks": "Hide your talks",
    "talk.settings": "Talk settings",
    "talk.toEnd": "To the last line",
    "talk.typePlaceholder": "Or type a line and press Enter",
    "talk.typeOnly": "Type a line and press Enter",
    "talk.typeAria": "Type a line to the duck",
    "talk.newTitle": "Put this talk away in your talks and start a new one",
    "talk.new": "New talk",
    "talk.closeList": "Close the list",
    "talk.today": "Today",
    "talk.yesterday": "Yesterday",
    "talk.earlier": "Earlier",
    "talk.lines": { one: "{n} line", other: "{n} lines" },
    "talk.withMistake": "{n} with a mistake",
    "talk.goingOnMeta": "going on",
    "talk.goingOnTitle": "The talk going on",
    "talk.goOn": "Go on with this talk",
    "talk.firstLine": "The duck\u2019s first line",
    "talk.delete": "Delete this talk",
    "talk.goingOn": "Going on",
    "talk.historyEmpty": "New talk puts a talk here, to go on with it later. Kept 30 days on this computer, 50 at most.",
    "talk.sureOne": "Sure? Delete it",
    "talk.sureAll": "Sure? Delete all {n}",
    "talk.clearAll": "Clear all",
    "talk.needsCard": "Talk needs a graphics card with 4 GB of its own memory or more",
    "talk.needsCardNote": "On this computer the duck would answer in 15 seconds or more, too slow for a talk. Check my English still works.",
    "talk.downloading": "downloading, {pct}%; the talk starts once it is here",
    "talk.downloadFailed": "the download failed",
    "talk.downloadIt": "download it in the settings; Check my English and Translate can use it too",
    "talk.needsModel": "The duck needs its model: {name}, {size}",
    "talk.noEngine": "Type to the duck, or add speech to talk",
    "talk.noEngineNote": "Talk hears you through the speech engine Dictate uses; download it in the settings.",
    "talk.engineStarting": "The speech engine is starting\u2026",
    "talk.slow": "{name} is slow on this computer: the duck may take a while to answer. {accurate} answers in about 3 seconds.",
    "talk.busyCard": "Another program is using the graphics card: the duck may answer slowly.",
    "talk.busyProcessor": "Another program is using the processor: the duck may answer slowly.",
    "talk.intro": "Speak English. The duck answers aloud, and your mistakes are marked in your own lines.",
    "talk.orTypeHello": "Or type hello below.",
    "talk.orSayHello": "Or just press the button and say hello.",
    "talk.unpin": "Stop keeping it on top",
    "talk.pin": "Keep it on top of other windows",
    "talk.modelTitle": "The duck runs on {model}, the same model as Check my English, on this computer. Click to change it.",
    "talk.failed": "The duck could not answer: {message}. Say it again, or type it.",
    "talk.noAnswer": "no answer",
    "talk.startingMic": "Starting the microphone\u2026",
    "talk.send": "Send",
    "talk.talk": "Talk",
    "talk.notPossible": "Talk is not possible yet: see above.",
    "talk.speaking": "The duck is speaking",
    "talk.thinking": "The duck is thinking\u2026",
    "talk.typingOnly": "Typing only, until speech is here",
    "talk.pressAgain": "Press again to try.",
    "talk.listeningPress": "Listening \xB7 press {keys} to send",
    "talk.speakingPress": "The duck is speaking \xB7 press {keys} to answer",
    "talk.thinkingPress": "The duck is thinking \xB7 press {keys} to talk over it",
    "talk.press": "Press {keys} to talk",
    "talk.finishing": "Finishing the line\u2026",
    "talk.nothingHeard": "Nothing was heard.",
    "turn.again": "Say it again",
    "turn.checking": "checking\u2026",
    "turn.setRight": "set right above",
    "turn.hearRight": "Hear it said right",
    "turn.hear": "Hear it",
    "topic.free": "Free talk",
    "topic.day": "My day",
    "topic.trip": "A trip",
    "topic.cafe": "At a caf\xE9",
    "topic.interview": "Job interview",
    "topic.work": "My work",
    // ------------------------------------------------------------ the microphone and the dictation badge
    "mic.denied": "No access to the microphone: allow it in Windows Settings \u2192 Privacy \u2192 Microphone",
    "mic.none": "No microphone found",
    "mic.busy": "Another program holds the microphone",
    "dict.type": "Dictate",
    "dict.english": "Dictate in English",
    "dict.note": "A note",
    "dict.check": "Practice English",
    "dict.gettingModel": "Getting the speech model {pct}%",
    "dict.savingNote": "Saving the note\u2026",
    "dict.catchingUp": "Catching up\u2026",
    "dict.typing": "Typing\u2026",
    "dict.saved": "Saved",
    "dict.typed": "Typed",
    "dict.noteFailed": "The note was not saved",
    "dict.nothingTyped": "Nothing typed",
    "dict.fastCard": "Typed with Fast: the graphics card is busy",
    "dict.fastProcessor": "Typed with Fast: the processor is busy",
    "badge.fastCard": "Fast \xB7 graphics card busy",
    "badge.fastProcessor": "Fast \xB7 processor busy",
    "settings.uiLanguage": "Interface language",
    "settings.uiLanguageNote": "Krya\u2019s menus and pages; what it teaches stays English"
  };

  // src/i18n/ru.ts
  var ru = {
    // ------------------------------------------------------------ shared
    "common.close": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    "common.restore": "\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C",
    "common.maximize": "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C",
    "common.copy": "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
    "common.copied": "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E",
    "common.notNow": "\u041D\u0435 \u0441\u0435\u0439\u0447\u0430\u0441",
    "common.retry": "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C",
    "common.tryAgain": "\u041F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0435\u0449\u0451 \u0440\u0430\u0437",
    "common.openSettings": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
    "common.listen": "\u0421\u043B\u0443\u0448\u0430\u0442\u044C",
    "common.stop": "\u0421\u0442\u043E\u043F",
    "common.paste": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C",
    "common.listening": "\u0421\u043B\u0443\u0448\u0430\u044E\u2026",
    "common.checking": "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430\u2026",
    "common.or": "\u0438\u043B\u0438",
    "common.and": "\u0438",
    "common.cancel": "\u041E\u0442\u043C\u0435\u043D\u0430",
    "main.saveWords": "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u043B\u043E\u0432\u0430 \u0434\u043B\u044F Anki",
    "main.ankiText": "\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F Anki",
    "main.saveBackup": "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u0443\u044E \u043A\u043E\u043F\u0438\u044E",
    "main.backupFile": "\u0420\u0435\u0437\u0435\u0440\u0432\u043D\u0430\u044F \u043A\u043E\u043F\u0438\u044F Krya",
    "main.openBackup": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u0443\u044E \u043A\u043E\u043F\u0438\u044E",
    "main.backupUnread": "\u042D\u0442\u0443 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u0443\u044E \u043A\u043E\u043F\u0438\u044E \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C",
    "main.importAsk": "\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u0443 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u0443\u044E \u043A\u043E\u043F\u0438\u044E?",
    "main.importDetail": "\u0412 \u043D\u0435\u0439: {what}. \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u0442\u0430\u043D\u0443\u0442 \u0442\u0430\u043A\u0438\u043C\u0438, \u043A\u0430\u043A \u0432 \u043A\u043E\u043F\u0438\u0438; \u0435\u0451 \u0441\u043B\u043E\u0432\u0430, \u043E\u0448\u0438\u0431\u043A\u0438 \u0438 \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u0434\u043E\u0431\u0430\u0432\u044F\u0442\u0441\u044F \u043A \u0432\u0430\u0448\u0438\u043C, \u043D\u0438\u0447\u0435\u0433\u043E \u0432\u0430\u0448\u0435\u0433\u043E \u043D\u0435 \u0443\u0434\u0430\u043B\u044F\u0435\u0442\u0441\u044F.",
    "main.import": "\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
    "main.resetAsk": "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0432\u0441\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438?",
    "main.resetDetail": "\u041A\u043B\u0430\u0432\u0438\u0448\u0438, \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u0435\u043B\u0438 \u0438 \u0441\u043F\u0438\u0441\u043A\u0438 \u0432\u0435\u0440\u043D\u0443\u0442\u0441\u044F \u043A \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u043C. \u0412\u0430\u0448 \u044F\u0437\u044B\u043A, \u0441\u043B\u043E\u0432\u0430, \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0438 \u0438 \u0442\u043E, \u0447\u0435\u043C\u0443 Krya \u043D\u0430\u0443\u0447\u0438\u043B\u0430\u0441\u044C \u043F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u043D\u0430\u0431\u043E\u0440\u0443, \u043E\u0441\u0442\u0430\u043D\u0443\u0442\u0441\u044F.",
    "main.reset": "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",
    "main.resetKeysAsk": "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0432\u0441\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438?",
    "main.resetKeysDetail": "\u041A\u0430\u0436\u0434\u043E\u0435 \u0441\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u0435 \u043A\u043B\u0430\u0432\u0438\u0448 \u0432\u0435\u0440\u043D\u0451\u0442\u0441\u044F \u043A \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u043C\u0443: Ctrl+Alt+S, Ctrl+Alt+T, Ctrl+Alt+D, Ctrl+Alt+N \u0438 Ctrl+C \u0434\u0432\u0430\u0436\u0434\u044B; \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u0431\u0443\u0434\u0443\u0442 \u043E\u0447\u0438\u0449\u0435\u043D\u044B. \u0411\u043E\u043B\u044C\u0448\u0435 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u0441\u044F.",
    "main.resetKeys": "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043A\u043B\u0430\u0432\u0438\u0448\u0438",
    "main.saveTranscript": "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0443",
    "main.notTranslated": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438: {why}",
    "main.noClipText": "\u0412 \u0431\u0443\u0444\u0435\u0440\u0435 \u043E\u0431\u043C\u0435\u043D\u0430 \u043D\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\u0430. \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u044B\u0434\u0435\u043B\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0438 \u0441\u043A\u043E\u043F\u0438\u0440\u0443\u0439\u0442\u0435 \u0435\u0433\u043E.",
    "main.nothingCopied": "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E. \u0412\u044B\u0434\u0435\u043B\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442, \u0437\u0430\u0442\u0435\u043C \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0441\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u0435 \u043A\u043B\u0430\u0432\u0438\u0448.",
    "main.keysTaken": { one: "\u0421\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u0435 {keys} \u0437\u0430\u043D\u044F\u0442\u043E \u0434\u0440\u0443\u0433\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043E\u0439. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u043E\u0435 \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445.", few: "\u0421\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u044F {keys} \u0437\u0430\u043D\u044F\u0442\u044B \u0434\u0440\u0443\u0433\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043E\u0439. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u0438\u0435 \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445.", many: "\u0421\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u044F {keys} \u0437\u0430\u043D\u044F\u0442\u044B \u0434\u0440\u0443\u0433\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043E\u0439. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u0438\u0435 \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445.", other: "\u0421\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u044F {keys} \u0437\u0430\u043D\u044F\u0442\u044B \u0434\u0440\u0443\u0433\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043E\u0439. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u0438\u0435 \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445." },
    "main.copyTwiceOff": "Ctrl+C \u0434\u0432\u0430\u0436\u0434\u044B \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C: {why}. \u041F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435\u0441\u044C \u043C\u0435\u043D\u044E \u0432 \u0442\u0440\u0435\u0435.",
    "backup.settings": "\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
    "backup.words": { one: "{n} \u0441\u043B\u043E\u0432\u043E", few: "{n} \u0441\u043B\u043E\u0432\u0430", many: "{n} \u0441\u043B\u043E\u0432", other: "{n} \u0441\u043B\u043E\u0432\u0430" },
    "backup.mistakes": { one: "{n} \u043E\u0448\u0438\u0431\u043A\u0430", few: "{n} \u043E\u0448\u0438\u0431\u043A\u0438", many: "{n} \u043E\u0448\u0438\u0431\u043E\u043A", other: "{n} \u043E\u0448\u0438\u0431\u043A\u0438" },
    "backup.learned": { one: "{n} \u0432\u044B\u0443\u0447\u0435\u043D\u043D\u043E\u0435 \u0441\u043B\u043E\u0432\u043E", few: "{n} \u0432\u044B\u0443\u0447\u0435\u043D\u043D\u044B\u0445 \u0441\u043B\u043E\u0432\u0430", many: "{n} \u0432\u044B\u0443\u0447\u0435\u043D\u043D\u044B\u0445 \u0441\u043B\u043E\u0432", other: "{n} \u0432\u044B\u0443\u0447\u0435\u043D\u043D\u043E\u0433\u043E \u0441\u043B\u043E\u0432\u0430" },
    "backup.translations": { one: "{n} \u043F\u0435\u0440\u0435\u0432\u043E\u0434", few: "{n} \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430", many: "{n} \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u043E\u0432", other: "{n} \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430" },
    "backup.phrases": { one: "{n} \u043D\u0430\u0434\u0438\u043A\u0442\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0444\u0440\u0430\u0437\u0430", few: "{n} \u043D\u0430\u0434\u0438\u043A\u0442\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0444\u0440\u0430\u0437\u044B", many: "{n} \u043D\u0430\u0434\u0438\u043A\u0442\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0444\u0440\u0430\u0437", other: "{n} \u043D\u0430\u0434\u0438\u043A\u0442\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u0444\u0440\u0430\u0437\u044B" },
    "backup.talks": { one: "{n} \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440", few: "{n} \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u0430", many: "{n} \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u043E\u0432", other: "{n} \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u0430" },
    "size.mb": "{n} \u041C\u0411",
    "size.gb": "{n} \u0413\u0411",
    "level.fast": "\u0411\u044B\u0441\u0442\u0440\u044B\u0439",
    "level.accurate": "\u0422\u043E\u0447\u043D\u044B\u0439",
    "level.most": "\u0421\u0430\u043C\u044B\u0439 \u0442\u043E\u0447\u043D\u044B\u0439",
    "busy.card": "\u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430",
    "busy.processor": "\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440",
    "lang.pairEnglish": "{lang} \u21C4 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439",
    "lang.yours": "\u0432\u0430\u0448 \u044F\u0437\u044B\u043A",
    // ------------------------------------------------------------ the tray's panel
    "tray.open": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C",
    "tray.openKrya": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C Krya",
    "tray.built": "\u0421\u043E\u0431\u0440\u0430\u043D\u043E {build}",
    "tray.actions": "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F",
    "tray.listenCopied": "\u041F\u0440\u043E\u0441\u043B\u0443\u0448\u0430\u0442\u044C \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435",
    "tray.translateCopied": "\u041F\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435",
    "tray.typeToTranslate": "\u0412\u0432\u0435\u0441\u0442\u0438 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430\u2026",
    "tray.checkEnglish": "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439\u2026",
    "tray.listenScreen": "\u041F\u0440\u043E\u0441\u043B\u0443\u0448\u0430\u0442\u044C \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442 \u044D\u043A\u0440\u0430\u043D\u0430",
    "tray.translateScreen": "\u041F\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442 \u044D\u043A\u0440\u0430\u043D\u0430",
    "tray.saveNote": "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0437\u0430\u043C\u0435\u0442\u043A\u0443",
    "tray.newNote": "\u041D\u043E\u0432\u0430\u044F \u0437\u0430\u043C\u0435\u0442\u043A\u0430",
    "tray.transcripts": "\u0420\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0438",
    "tray.quick": "\u0411\u044B\u0441\u0442\u0440\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
    "tray.autoFix": "\u0418\u0441\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0440\u0430\u0441\u043A\u043B\u0430\u0434\u043A\u0443 \u043F\u0440\u0438 \u043D\u0430\u0431\u043E\u0440\u0435",
    "tray.switchWith": "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0440\u0430\u0441\u043A\u043B\u0430\u0434\u043A\u0443: {key}",
    "tray.layoutBadge": "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0440\u0430\u0441\u043A\u043B\u0430\u0434\u043A\u0443 \u0443 \u043A\u0443\u0440\u0441\u043E\u0440\u0430",
    "tray.trayLayout": "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0440\u0430\u0441\u043A\u043B\u0430\u0434\u043A\u0443 \u0432 \u0442\u0440\u0435\u0435",
    "tray.doubleCopy": "Ctrl+C \u0434\u0432\u0430\u0436\u0434\u044B \u2014 \u043F\u0440\u043E\u0441\u043B\u0443\u0448\u0430\u0442\u044C",
    "tray.yourWords": "\u0412\u0430\u0448\u0438 \u0441\u043B\u043E\u0432\u0430",
    "tray.keepWord": "\u041D\u0435 \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0441\u043B\u043E\u0432\u043E\u2026",
    "tray.keepWordTitle": "\u041D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u044D\u0442\u043E \u0441\u043B\u043E\u0432\u043E \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E (\u041D\u0435 \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C)",
    "tray.keepPlaceholder": "\u0441\u043B\u043E\u0432\u043E, \u043A\u0430\u043A \u0432\u044B \u0435\u0433\u043E \u043D\u0430\u0431\u0438\u0440\u0430\u0435\u0442\u0435",
    "tray.keepAria": "\u041D\u0435 \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0441\u043B\u043E\u0432\u043E",
    "tray.kept": "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E: {word}",
    "tray.vocabulary": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043B\u043E\u0432\u043E \u0434\u043B\u044F \u0434\u0438\u043A\u0442\u043E\u0432\u043A\u0438\u2026",
    "tray.keptList": "\u0421\u043B\u043E\u0432\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435 \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C",
    "tray.pausedTitle": "\u041A\u043B\u0430\u0432\u0438\u0448\u0438 \u0438 Ctrl+C \u0434\u0432\u0430\u0436\u0434\u044B \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u044B",
    "tray.pauseTitle": "\u0412\u0441\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u0438 \u0440\u0435\u0430\u043A\u0446\u0438\u0438 \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u044B, \u043F\u043E\u043A\u0430 \u043D\u0435 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435",
    "tray.resume": "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",
    "tray.pause": "\u041F\u0430\u0443\u0437\u0430",
    "tray.settings": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
    "tray.report": "\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0430",
    "tray.reportTitle": "\u0421\u043E\u043E\u0431\u0449\u0438\u0442\u044C \u043E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0435, \u0441 \u0436\u0443\u0440\u043D\u0430\u043B\u0430\u043C\u0438 Krya",
    "tray.quit": "\u0412\u044B\u0439\u0442\u0438",
    "tray.paused": "\u043F\u0430\u0443\u0437\u0430",
    "tray.ready": "\u0433\u043E\u0442\u043E\u0432\u043E",
    "tray.readyTitle": "{pair}, \u0431\u0435\u0437 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430",
    "tray.downloading": "\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026",
    "tray.firstUse": "\u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0447\u0438\u043A \u2014 \u043F\u0440\u0438 \u043F\u0435\u0440\u0432\u043E\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438",
    "tray.tipRecording": "\u0417\u0430\u043F\u0438\u0441\u044C",
    "tray.tipPaused": "Krya \xB7 \u043F\u0430\u0443\u0437\u0430",
    "tray.tipListen": "{keys} \u2014 \u043F\u0440\u043E\u0441\u043B\u0443\u0448\u0430\u0442\u044C",
    "tray.tipTranslate": "{key} \u2014 \u043F\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438",
    "tray.tipTwice": "Ctrl+C \u0434\u0432\u0430\u0436\u0434\u044B",
    // ------------------------------------------------------------ the card
    "kind.listen": "\u0421\u043B\u0443\u0448\u0430\u0442\u044C",
    "kind.translate": "\u041F\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438",
    "kind.check": "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C",
    "kind.screen": "\u044D\u043A\u0440\u0430\u043D",
    "card.openedBy": "\u041E\u0442\u043A\u0440\u044B\u0442\u043E \u043A\u043B\u0430\u0432\u0438\u0448\u0430\u043C\u0438 {keys}",
    "card.openedByTwice": "\u041E\u0442\u043A\u0440\u044B\u0442\u043E: {keys} \u0434\u0432\u0430\u0436\u0434\u044B",
    "card.prev": "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435",
    "card.next": "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435",
    "card.oneByOne": "\u041F\u043E \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044E",
    "card.spaceListen": "\u0441\u043B\u0443\u0448\u0430\u0442\u044C",
    "card.spaceStop": "\u0441\u0442\u043E\u043F",
    "card.text": "\u0422\u0435\u043A\u0441\u0442",
    "card.from": "\u0421 \u044F\u0437\u044B\u043A\u0430",
    "card.fromTitle": "\u042F\u0437\u044B\u043A \u0442\u0435\u043A\u0441\u0442\u0430",
    "card.into": "\u041D\u0430 \u044F\u0437\u044B\u043A",
    "card.intoTitle": "\u042F\u0437\u044B\u043A, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438",
    "card.swap": "\u041F\u043E\u043C\u0435\u043D\u044F\u0442\u044C",
    "card.swapTitle": "\u041F\u043E\u043C\u0435\u043D\u044F\u0442\u044C \u044F\u0437\u044B\u043A\u0438 \u043C\u0435\u0441\u0442\u0430\u043C\u0438: \u043F\u0435\u0440\u0435\u0432\u043E\u0434 \u0441\u0442\u0430\u043D\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\u043E\u043C",
    "card.voiceOffer": "\u0415\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0433\u043E\u043B\u043E\u0441 \u0437\u0432\u0443\u0447\u0438\u0442 \u043A\u0430\u043A \u0436\u0438\u0432\u043E\u0439 \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u0438 \u0447\u0438\u0442\u0430\u0435\u0442 \u0431\u0435\u0437 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430.",
    "card.voiceDownload": "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \xB7 {size} \u041C\u0411",
    "card.voiceFailed": "\u0415\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0433\u043E\u043B\u043E\u0441 \u043D\u0435 \u0441\u043A\u0430\u0447\u0430\u043B\u0441\u044F.",
    "card.voiceDownloading": "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0433\u043E\u043B\u043E\u0441\u0430\u2026 {pct}%",
    "card.voiceReady": "\u0415\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0433\u043E\u043B\u043E\u0441 \u0433\u043E\u0442\u043E\u0432. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \xAB\u0421\u043B\u0443\u0448\u0430\u0442\u044C\xBB, \u0447\u0442\u043E\u0431\u044B \u0443\u0441\u043B\u044B\u0448\u0430\u0442\u044C \u0435\u0433\u043E.",
    "card.busyCard": "\u0412\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430 \u0437\u0430\u043D\u044F\u0442\u0430, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u044D\u0442\u043E \u043F\u0435\u0440\u0435\u0432\u0451\u043B \xAB\u0411\u044B\u0441\u0442\u0440\u044B\u0439\xBB. \xAB{level}\xBB \u0432\u0435\u0440\u043D\u0451\u0442\u0441\u044F, \u043A\u0430\u043A \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u043D\u0430 \u043E\u0441\u0432\u043E\u0431\u043E\u0434\u0438\u0442\u0441\u044F.",
    "card.busyProcessor": "\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440 \u0437\u0430\u043D\u044F\u0442, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u044D\u0442\u043E \u043F\u0435\u0440\u0435\u0432\u0451\u043B \xAB\u0411\u044B\u0441\u0442\u0440\u044B\u0439\xBB. \xAB{level}\xBB \u0432\u0435\u0440\u043D\u0451\u0442\u0441\u044F, \u043A\u0430\u043A \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u043D \u043E\u0441\u0432\u043E\u0431\u043E\u0434\u0438\u0442\u0441\u044F.",
    "card.useAnyway": "\u0412\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \xAB{level}\xBB",
    "card.hideTranslation": "\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u0435\u0440\u0435\u0432\u043E\u0434 ({lang})",
    "card.showTranslation": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0435\u0440\u0435\u0432\u043E\u0434 ({lang})",
    "card.unpin": "\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C: \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u043F\u0440\u0438 \u0449\u0435\u043B\u0447\u043A\u0435 \u043F\u043E \u0434\u0440\u0443\u0433\u043E\u043C\u0443 \u043E\u043A\u043D\u0443",
    "card.pin": "\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C: \u043D\u0435 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0442\u044C",
    "card.oneOn": "\u0427\u0438\u0442\u0430\u0435\u0442 \u043E\u0434\u043D\u043E \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0438 \u0436\u0434\u0451\u0442; \u2190 \u2192 \u2014 \u0448\u0430\u0433",
    "card.oneOff": "\u0427\u0438\u0442\u0430\u0442\u044C \u043F\u043E \u043E\u0434\u043D\u043E\u043C\u0443 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044E",
    "card.translatingFast": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434\u0438\u0442 \xAB\u0411\u044B\u0441\u0442\u0440\u044B\u0439\xBB\u2026",
    "card.translating": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434\u2026",
    "card.translatingLevel": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434 \xB7 {level}\u2026",
    "card.ofGb": "{a} \u0438\u0437 {b} \u0413\u0411",
    "card.ofMb": "{a} \u0438\u0437 {b} \u041C\u0411",
    "card.firstUse": "\u043F\u0435\u0440\u0432\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \xB7 \u043E\u0434\u0438\u043D \u0440\u0430\u0437",
    "card.modelOf": "\u041C\u043E\u0434\u0435\u043B\u044C \xAB{name}\xBB",
    "card.translatorPair": "\u041F\u0435\u0440\u0435\u0432\u043E\u0434\u0447\u0438\u043A, {pair}",
    "card.fromMozilla": "\u0421\u043A\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043E\u0434\u0438\u043D \u0440\u0430\u0437 \u0438\u0437 Mozilla, \u0434\u0430\u043B\u044C\u0448\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0438\u0442 \u043D\u0430 \u044D\u0442\u043E\u043C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435.",
    "card.fromHfTranslates": "\u0421\u043A\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043E\u0434\u0438\u043D \u0440\u0430\u0437 \u0438\u0437 Hugging Face, \u0434\u0430\u043B\u044C\u0448\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0438\u0442 \u043D\u0430 \u044D\u0442\u043E\u043C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435.",
    "card.fromHfChecks": "\u0421\u043A\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043E\u0434\u0438\u043D \u0440\u0430\u0437 \u0438\u0437 Hugging Face, \u0434\u0430\u043B\u044C\u0448\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u0442 \u043D\u0430 \u044D\u0442\u043E\u043C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435.",
    "card.readMeanwhile": "\u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439 \u0442\u0435\u043A\u0441\u0442 \u043F\u043E\u043A\u0430 \u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F.",
    "card.notChecked": "\u041D\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043E",
    "card.notTranslated": "\u041D\u0435 \u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043D\u043E",
    "card.readingScreen": "\u0427\u0438\u0442\u0430\u044E \u0442\u0435\u043A\u0441\u0442 \u043D\u0430 \u044D\u043A\u0440\u0430\u043D\u0435\u2026",
    "card.noText": "\u0417\u0434\u0435\u0441\u044C \u043D\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\u0430",
    "card.noTextNote": "\u041D\u0430 \u044D\u0442\u043E\u043C \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442\u0435 \u044D\u043A\u0440\u0430\u043D\u0430 \u043D\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 Krya \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C. \u0412\u044B\u0434\u0435\u043B\u0438\u0442\u0435 \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442 \u0441\u043E \u0441\u043B\u043E\u0432\u0430\u043C\u0438.",
    "card.noOcr": "Windows \u043F\u043E\u043A\u0430 \u043D\u0435 \u0443\u043C\u0435\u0435\u0442 \u0447\u0438\u0442\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442",
    "card.noOcrNote": "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0430 \u0434\u043B\u044F \u044F\u0437\u044B\u043A\u0430 \xAB{lang}\xBB \u0438\u043B\u0438 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u0433\u043E: \u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u2192 \u0412\u0440\u0435\u043C\u044F \u0438 \u044F\u0437\u044B\u043A \u2192 \u042F\u0437\u044B\u043A \u0438 \u0440\u0435\u0433\u0438\u043E\u043D \u2192 \u044F\u0437\u044B\u043A \u2192 \u042F\u0437\u044B\u043A\u043E\u0432\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u2192 \u041E\u043F\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0438\u0435 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432.",
    "card.openLanguageSettings": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u044F\u0437\u044B\u043A\u043E\u0432\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B",
    "card.yourEnglish": "\u0412\u0430\u0448 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439",
    "card.typeEnglish": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043B\u0438 \u0432\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u043D\u0430 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u043C",
    "card.checkedBy": "\u041F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043E \xB7 {model}",
    "card.improving": "\u0423\u0442\u043E\u0447\u043D\u044F\u0435\u0442\u0441\u044F \xB7 {level}\u2026",
    "card.translatedBy": "\u041F\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043D\u043E \xB7 {level}",
    "card.newLine": "{by} \xB7 Shift+Enter \u2014 \u043D\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430",
    "card.yours": "\u0412\u0430\u0448\u0438",
    "card.allLanguages": "\u0412\u0441\u0435 \u044F\u0437\u044B\u043A\u0438",
    "card.pasteOver": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432\u043C\u0435\u0441\u0442\u043E \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0433\u043E (Enter)",
    "card.pasteLater": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044F, \u043A\u0430\u043A \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0438\u0434\u0451\u0442 \u0442\u043E\u0447\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0432\u043E\u0434 (Enter)",
    "card.pasteChecked": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u0432\u043C\u0435\u0441\u0442\u043E \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0433\u043E (Enter)",
    "card.looksRight": "\u041F\u043E\u0445\u043E\u0436\u0435, \u0432\u0441\u0451 \u0432\u0435\u0440\u043D\u043E",
    "card.listenSpace": "\u0421\u043B\u0443\u0448\u0430\u0442\u044C (Space)",
    "card.listenParagraph": "\u041F\u0440\u043E\u0441\u043B\u0443\u0448\u0430\u0442\u044C \u044D\u0442\u043E\u0442 \u0430\u0431\u0437\u0430\u0446",
    "card.naturalStopped": "\u0415\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0433\u043E\u043B\u043E\u0441 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0441\u044F ({message}). \u0414\u0430\u043B\u044C\u0448\u0435 \u0447\u0438\u0442\u0430\u0435\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0439 \u0433\u043E\u043B\u043E\u0441.",
    "card.noVoice": "\u041D\u0430 \u044D\u0442\u043E\u043C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435 \u043D\u0435\u0442 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u0433\u043E \u0433\u043E\u043B\u043E\u0441\u0430.",
    "card.openSpeechSettings": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0440\u0435\u0447\u0438",
    "voice.stepsWin": "\u0427\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C: \u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B Windows \u2192 \u0412\u0440\u0435\u043C\u044F \u0438 \u044F\u0437\u044B\u043A \u2192 \u0420\u0435\u0447\u044C \u2192 \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0433\u043E\u043B\u043E\u0441\u0430 \u2192 {lang}, \u0437\u0430\u0442\u0435\u043C \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 Krya.",
    "voice.stepsMac": "\u0427\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C: \u0421\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u2192 \u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u2192 \u0423\u0441\u0442\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u2192 \u0421\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0439 \u0433\u043E\u043B\u043E\u0441 \u2192 \u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0433\u043E\u043B\u043E\u0441\u0430\u043C\u0438 \u2192 {lang}, \u0437\u0430\u0442\u0435\u043C \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 Krya.",
    "voice.none": "\u0414\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F \u0432\u0441\u043B\u0443\u0445 \u043D\u0443\u0436\u043D\u044B \u0433\u043E\u043B\u043E\u0441\u0430 Windows \u0438\u043B\u0438 macOS; \u0432 \u044D\u0442\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u043D\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0435\u0433\u043E.",
    // ------------------------------------------------------------ the word card
    "word.from": "\u0444\u043E\u0440\u043C\u0430: {word}",
    "word.say": "\u041F\u0440\u043E\u0438\u0437\u043D\u0435\u0441\u0442\u0438",
    "word.save": "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432 \xAB\u0421\u043B\u043E\u0432\u0430\xBB",
    "word.remove": "\u0423\u0431\u0440\u0430\u0442\u044C \u0438\u0437 \xAB\u0421\u043B\u043E\u0432\xBB",
    "word.notFound": "\u041D\u0435\u0442 \u0432 \u0441\u043B\u043E\u0432\u0430\u0440\u0435.",
    "word.pair": "\u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439 \u2192 {lang}",
    "word.notEnglish": "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0441\u043B\u043E\u0432 \u043F\u043E\u043A\u0430 \u0435\u0441\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u0433\u043E; \u043F\u0435\u0440\u0435\u0432\u043E\u0434 ({lang}) \u2014 \u043D\u0438\u0436\u0435.",
    "word.noDictionary": "\u0421\u043B\u043E\u0432\u0430\u0440\u044F {pair} \u043F\u043E\u043A\u0430 \u043D\u0435\u0442; \u043F\u0435\u0440\u0435\u0432\u043E\u0434 \u2014 \u043D\u0438\u0436\u0435.",
    "word.downloading": "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043B\u043E\u0432\u0430\u0440\u044F {pair}, \u043E\u0434\u0438\u043D \u0440\u0430\u0437\u2026",
    "word.failed": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u0430\u0447\u0430\u0442\u044C \u0441\u043B\u043E\u0432\u0430\u0440\u044C {pair}. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043A \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0443; \u043D\u043E\u0432\u0430\u044F \u043F\u043E\u043F\u044B\u0442\u043A\u0430 \u0447\u0435\u0440\u0435\u0437 \u043C\u0438\u043D\u0443\u0442\u0443.",
    "word.off": "\u0421\u043B\u043E\u0432\u0430\u0440\u044C {pair} \u043D\u0435 \u0441\u043A\u0430\u0447\u0430\u043D.",
    // ------------------------------------------------------------ the talk window
    "talk.yourTalks": "\u0412\u0430\u0448\u0438 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u044B",
    "talk.hideTalks": "\u0421\u043A\u0440\u044B\u0442\u044C \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u044B",
    "talk.settings": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u0430",
    "talk.toEnd": "\u041A \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0439 \u0440\u0435\u043F\u043B\u0438\u043A\u0435",
    "talk.typePlaceholder": "\u0418\u043B\u0438 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0440\u0435\u043F\u043B\u0438\u043A\u0443",
    "talk.typeOnly": "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Enter",
    "talk.typeAria": "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0440\u0435\u043F\u043B\u0438\u043A\u0443 \u0443\u0442\u043A\u0435",
    "talk.newTitle": "\u0423\u0431\u0440\u0430\u0442\u044C \u044D\u0442\u043E\u0442 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440 \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0438 \u043D\u0430\u0447\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439",
    "talk.new": "\u041D\u043E\u0432\u044B\u0439 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440",
    "talk.closeList": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A",
    "talk.today": "\u0421\u0435\u0433\u043E\u0434\u043D\u044F",
    "talk.yesterday": "\u0412\u0447\u0435\u0440\u0430",
    "talk.earlier": "\u0420\u0430\u043D\u0435\u0435",
    "talk.lines": { one: "{n} \u0440\u0435\u043F\u043B\u0438\u043A\u0430", few: "{n} \u0440\u0435\u043F\u043B\u0438\u043A\u0438", many: "{n} \u0440\u0435\u043F\u043B\u0438\u043A", other: "{n} \u0440\u0435\u043F\u043B\u0438\u043A\u0438" },
    "talk.withMistake": "\u0441 \u043E\u0448\u0438\u0431\u043A\u043E\u0439: {n}",
    "talk.goingOnMeta": "\u0438\u0434\u0451\u0442",
    "talk.goingOnTitle": "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440",
    "talk.goOn": "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440",
    "talk.firstLine": "\u041F\u0435\u0440\u0432\u0430\u044F \u0440\u0435\u043F\u043B\u0438\u043A\u0430 \u0443\u0442\u043A\u0438",
    "talk.delete": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440",
    "talk.goingOn": "\u0418\u0434\u0451\u0442 \u0441\u0435\u0439\u0447\u0430\u0441",
    "talk.historyEmpty": "\xAB\u041D\u043E\u0432\u044B\u0439 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\xBB \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u0442 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440 \u0441\u044E\u0434\u0430, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0435\u0433\u043E \u043F\u043E\u0437\u0436\u0435. \u0425\u0440\u0430\u043D\u0438\u0442\u0441\u044F 30 \u0434\u043D\u0435\u0439 \u043D\u0430 \u044D\u0442\u043E\u043C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435, \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 50.",
    "talk.sureOne": "\u0422\u043E\u0447\u043D\u043E? \u0423\u0434\u0430\u043B\u0438\u0442\u044C",
    "talk.sureAll": "\u0422\u043E\u0447\u043D\u043E? \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u0435 ({n})",
    "talk.clearAll": "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0432\u0441\u0451",
    "talk.needsCard": "\u0414\u043B\u044F \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u0430 \u043D\u0443\u0436\u043D\u0430 \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430 \u0441 4 \u0413\u0411 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u043F\u0430\u043C\u044F\u0442\u0438 \u0438\u043B\u0438 \u0431\u043E\u043B\u044C\u0448\u0435",
    "talk.needsCardNote": "\u041D\u0430 \u044D\u0442\u043E\u043C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435 \u0443\u0442\u043A\u0430 \u043E\u0442\u0432\u0435\u0447\u0430\u043B\u0430 \u0431\u044B 15 \u0441\u0435\u043A\u0443\u043D\u0434 \u0438 \u0434\u043E\u043B\u044C\u0448\u0435 \u2014 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E \u0434\u043B\u044F \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u0430. \xAB\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u0433\u043E\xBB \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043A\u0430\u043A \u043F\u0440\u0435\u0436\u0434\u0435.",
    "talk.downloading": "\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430, {pct}%; \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440 \u043D\u0430\u0447\u043D\u0451\u0442\u0441\u044F, \u043A\u0430\u043A \u0442\u043E\u043B\u044C\u043A\u043E \u043C\u043E\u0434\u0435\u043B\u044C \u0431\u0443\u0434\u0435\u0442 \u0437\u0434\u0435\u0441\u044C",
    "talk.downloadFailed": "\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043D\u0435 \u0443\u0434\u0430\u043B\u0430\u0441\u044C",
    "talk.downloadIt": "\u0441\u043A\u0430\u0447\u0430\u0439\u0442\u0435 \u0435\u0451 \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445; \u0435\u0451 \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0433\u0443\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \xAB\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u0433\u043E\xBB \u0438 \xAB\u041F\u0435\u0440\u0435\u0432\u043E\u0434\xBB",
    "talk.needsModel": "\u0423\u0442\u043A\u0435 \u043D\u0443\u0436\u043D\u0430 \u0435\u0451 \u043C\u043E\u0434\u0435\u043B\u044C: {name}, {size}",
    "talk.noEngine": "\u041F\u0438\u0448\u0438\u0442\u0435 \u0443\u0442\u043A\u0435 \u0438\u043B\u0438 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0438\u0435 \u0440\u0435\u0447\u0438, \u0447\u0442\u043E\u0431\u044B \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C",
    "talk.noEngineNote": "\u0420\u0430\u0437\u0433\u043E\u0432\u043E\u0440 \u0441\u043B\u044B\u0448\u0438\u0442 \u0432\u0430\u0441 \u0447\u0435\u0440\u0435\u0437 \u0434\u0432\u0438\u0436\u043E\u043A \u0440\u0435\u0447\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \xAB\u0414\u0438\u043A\u0442\u043E\u0432\u043A\u0430\xBB; \u0441\u043A\u0430\u0447\u0430\u0439\u0442\u0435 \u0435\u0433\u043E \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445.",
    "talk.engineStarting": "\u0414\u0432\u0438\u0436\u043E\u043A \u0440\u0435\u0447\u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F\u2026",
    "talk.slow": "\xAB{name}\xBB \u043D\u0430 \u044D\u0442\u043E\u043C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E: \u0443\u0442\u043A\u0430 \u043C\u043E\u0436\u0435\u0442 \u043E\u0442\u0432\u0435\u0447\u0430\u0442\u044C \u0434\u043E\u043B\u0433\u043E. \xAB{accurate}\xBB \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E \u0437\u0430 3 \u0441\u0435\u043A\u0443\u043D\u0434\u044B.",
    "talk.busyCard": "\u0412\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0443 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0434\u0440\u0443\u0433\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430: \u0443\u0442\u043A\u0430 \u043C\u043E\u0436\u0435\u0442 \u043E\u0442\u0432\u0435\u0447\u0430\u0442\u044C \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E.",
    "talk.busyProcessor": "\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0434\u0440\u0443\u0433\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430: \u0443\u0442\u043A\u0430 \u043C\u043E\u0436\u0435\u0442 \u043E\u0442\u0432\u0435\u0447\u0430\u0442\u044C \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E.",
    "talk.intro": "\u0413\u043E\u0432\u043E\u0440\u0438\u0442\u0435 \u043F\u043E-\u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438. \u0423\u0442\u043A\u0430 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0432\u0441\u043B\u0443\u0445, \u0430 \u0432\u0430\u0448\u0438 \u043E\u0448\u0438\u0431\u043A\u0438 \u043E\u0442\u043C\u0435\u0447\u0430\u044E\u0442\u0441\u044F \u0432 \u0432\u0430\u0448\u0438\u0445 \u0440\u0435\u043F\u043B\u0438\u043A\u0430\u0445.",
    "talk.orTypeHello": "\u0418\u043B\u0438 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 hello \u043D\u0438\u0436\u0435.",
    "talk.orSayHello": "\u0418\u043B\u0438 \u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 \u0438 \u0441\u043A\u0430\u0436\u0438\u0442\u0435 hello.",
    "talk.unpin": "\u041D\u0435 \u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043F\u043E\u0432\u0435\u0440\u0445 \u0434\u0440\u0443\u0433\u0438\u0445 \u043E\u043A\u043E\u043D",
    "talk.pin": "\u0414\u0435\u0440\u0436\u0430\u0442\u044C \u043F\u043E\u0432\u0435\u0440\u0445 \u0434\u0440\u0443\u0433\u0438\u0445 \u043E\u043A\u043E\u043D",
    "talk.modelTitle": "\u0423\u0442\u043A\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043D\u0430 {model} \u2014 \u0442\u043E\u0439 \u0436\u0435 \u043C\u043E\u0434\u0435\u043B\u0438, \u0447\u0442\u043E \u0438 \xAB\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u0433\u043E\xBB, \u043D\u0430 \u044D\u0442\u043E\u043C \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435. \u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C.",
    "talk.failed": "\u0423\u0442\u043A\u0430 \u043D\u0435 \u0441\u043C\u043E\u0433\u043B\u0430 \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C: {message}. \u0421\u043A\u0430\u0436\u0438\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437 \u0438\u043B\u0438 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435.",
    "talk.noAnswer": "\u043D\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0430",
    "talk.startingMic": "\u0412\u043A\u043B\u044E\u0447\u0430\u044E \u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D\u2026",
    "talk.send": "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
    "talk.talk": "\u0413\u043E\u0432\u043E\u0440\u0438\u0442\u044C",
    "talk.notPossible": "\u0420\u0430\u0437\u0433\u043E\u0432\u043E\u0440 \u043F\u043E\u043A\u0430 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u0435\u043D: \u0441\u043C. \u0432\u044B\u0448\u0435.",
    "talk.speaking": "\u0423\u0442\u043A\u0430 \u0433\u043E\u0432\u043E\u0440\u0438\u0442",
    "talk.thinking": "\u0423\u0442\u043A\u0430 \u0434\u0443\u043C\u0430\u0435\u0442\u2026",
    "talk.typingOnly": "\u0422\u043E\u043B\u044C\u043A\u043E \u0442\u0435\u043A\u0441\u0442\u043E\u043C, \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0438\u044F \u0440\u0435\u0447\u0438",
    "talk.pressAgain": "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C.",
    "talk.listeningPress": "\u0421\u043B\u0443\u0448\u0430\u044E \xB7 {keys} \u2014 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
    "talk.speakingPress": "\u0423\u0442\u043A\u0430 \u0433\u043E\u0432\u043E\u0440\u0438\u0442 \xB7 {keys} \u2014 \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C",
    "talk.thinkingPress": "\u0423\u0442\u043A\u0430 \u0434\u0443\u043C\u0430\u0435\u0442 \xB7 {keys} \u2014 \u043F\u0435\u0440\u0435\u0431\u0438\u0442\u044C",
    "talk.press": "{keys} \u2014 \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C",
    "talk.finishing": "\u0417\u0430\u0432\u0435\u0440\u0448\u0430\u044E \u0440\u0435\u043F\u043B\u0438\u043A\u0443\u2026",
    "talk.nothingHeard": "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0443\u0441\u043B\u044B\u0448\u0430\u043D\u043E.",
    "turn.again": "\u0421\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0451 \u0440\u0430\u0437",
    "turn.checking": "\u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430\u2026",
    "turn.setRight": "\u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u0432\u044B\u0448\u0435",
    "turn.hearRight": "\u0423\u0441\u043B\u044B\u0448\u0430\u0442\u044C, \u043A\u0430\u043A \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E",
    "turn.hear": "\u0423\u0441\u043B\u044B\u0448\u0430\u0442\u044C",
    "topic.free": "\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440",
    "topic.day": "\u041C\u043E\u0439 \u0434\u0435\u043D\u044C",
    "topic.trip": "\u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435",
    "topic.cafe": "\u0412 \u043A\u0430\u0444\u0435",
    "topic.interview": "\u0421\u043E\u0431\u0435\u0441\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435",
    "topic.work": "\u041C\u043E\u044F \u0440\u0430\u0431\u043E\u0442\u0430",
    // ------------------------------------------------------------ the microphone and the dictation badge
    "mic.denied": "\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D\u0443: \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u0435\u0433\u043E \u0432 \u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430\u0445 Windows \u2192 \u041A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u2192 \u041C\u0438\u043A\u0440\u043E\u0444\u043E\u043D",
    "mic.none": "\u041C\u0438\u043A\u0440\u043E\u0444\u043E\u043D \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D",
    "mic.busy": "\u041C\u0438\u043A\u0440\u043E\u0444\u043E\u043D \u0437\u0430\u043D\u044F\u0442 \u0434\u0440\u0443\u0433\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043E\u0439",
    "dict.type": "\u0414\u0438\u043A\u0442\u043E\u0432\u043A\u0430",
    "dict.english": "\u0414\u0438\u043A\u0442\u043E\u0432\u043A\u0430 \u043D\u0430 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u043C",
    "dict.note": "\u0417\u0430\u043C\u0435\u0442\u043A\u0430",
    "dict.check": "\u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0430 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u0433\u043E",
    "dict.gettingModel": "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043C\u043E\u0434\u0435\u043B\u0438 \u0440\u0435\u0447\u0438 {pct}%",
    "dict.savingNote": "\u0421\u043E\u0445\u0440\u0430\u043D\u044F\u044E \u0437\u0430\u043C\u0435\u0442\u043A\u0443\u2026",
    "dict.catchingUp": "\u0414\u043E\u0433\u043E\u043D\u044F\u044E\u2026",
    "dict.typing": "\u041F\u0435\u0447\u0430\u0442\u0430\u044E\u2026",
    "dict.saved": "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E",
    "dict.typed": "\u041D\u0430\u043F\u0435\u0447\u0430\u0442\u0430\u043D\u043E",
    "dict.noteFailed": "\u0417\u0430\u043C\u0435\u0442\u043A\u0430 \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430",
    "dict.nothingTyped": "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u043F\u0435\u0447\u0430\u0442\u0430\u043D\u043E",
    "dict.fastCard": "\u041D\u0430\u043F\u0435\u0447\u0430\u0442\u0430\u043D\u043E \xAB\u0411\u044B\u0441\u0442\u0440\u044B\u043C\xBB: \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430 \u0437\u0430\u043D\u044F\u0442\u0430",
    "dict.fastProcessor": "\u041D\u0430\u043F\u0435\u0447\u0430\u0442\u0430\u043D\u043E \xAB\u0411\u044B\u0441\u0442\u0440\u044B\u043C\xBB: \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440 \u0437\u0430\u043D\u044F\u0442",
    "badge.fastCard": "\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \xB7 \u0432\u0438\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430 \u0437\u0430\u043D\u044F\u0442\u0430",
    "badge.fastProcessor": "\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \xB7 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440 \u0437\u0430\u043D\u044F\u0442",
    "settings.uiLanguage": "\u042F\u0437\u044B\u043A \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430",
    "settings.uiLanguageNote": "\u043C\u0435\u043D\u044E \u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B Krya; \u0442\u043E, \u0447\u0435\u043C\u0443 \u043E\u043D\u0430 \u0443\u0447\u0438\u0442, \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u043D\u0430 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u043C"
  };

  // src/i18n/uk.ts
  var uk = {
    // ------------------------------------------------------------ shared
    "common.close": "\u0417\u0430\u043A\u0440\u0438\u0442\u0438",
    "common.restore": "\u0412\u0456\u0434\u043D\u043E\u0432\u0438\u0442\u0438",
    "common.maximize": "\u0420\u043E\u0437\u0433\u043E\u0440\u043D\u0443\u0442\u0438",
    "common.copy": "\u041A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438",
    "common.copied": "\u0421\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u043E",
    "common.notNow": "\u041D\u0435 \u0437\u0430\u0440\u0430\u0437",
    "common.retry": "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0438",
    "common.tryAgain": "\u0421\u043F\u0440\u043E\u0431\u0443\u0432\u0430\u0442\u0438 \u0449\u0435 \u0440\u0430\u0437",
    "common.openSettings": "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
    "common.listen": "\u0421\u043B\u0443\u0445\u0430\u0442\u0438",
    "common.stop": "\u0421\u0442\u043E\u043F",
    "common.paste": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438",
    "common.listening": "\u0421\u043B\u0443\u0445\u0430\u044E\u2026",
    "common.checking": "\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430\u2026",
    "common.or": "\u0430\u0431\u043E",
    "common.and": "\u0456",
    "common.cancel": "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
    "main.saveWords": "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0441\u043B\u043E\u0432\u0430 \u0434\u043B\u044F Anki",
    "main.ankiText": "\u0422\u0435\u043A\u0441\u0442 \u0434\u043B\u044F Anki",
    "main.saveBackup": "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u0443 \u043A\u043E\u043F\u0456\u044E",
    "main.backupFile": "\u0420\u0435\u0437\u0435\u0440\u0432\u043D\u0430 \u043A\u043E\u043F\u0456\u044F Krya",
    "main.openBackup": "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u0443 \u043A\u043E\u043F\u0456\u044E",
    "main.backupUnread": "\u0426\u044E \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u0443 \u043A\u043E\u043F\u0456\u044E \u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u0438",
    "main.importAsk": "\u0406\u043C\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0446\u044E \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u0443 \u043A\u043E\u043F\u0456\u044E?",
    "main.importDetail": "\u0423 \u043D\u0456\u0439: {what}. \u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0442\u0430\u043D\u0443\u0442\u044C \u0442\u0430\u043A\u0438\u043C\u0438, \u044F\u043A \u0443 \u043A\u043E\u043F\u0456\u0457; \u0457\u0457 \u0441\u043B\u043E\u0432\u0430, \u043F\u043E\u043C\u0438\u043B\u043A\u0438 \u0442\u0430 \u0456\u0441\u0442\u043E\u0440\u0456\u044E \u0431\u0443\u0434\u0435 \u0434\u043E\u0434\u0430\u043D\u043E \u0434\u043E \u0432\u0430\u0448\u0438\u0445, \u043D\u0456\u0447\u043E\u0433\u043E \u0432\u0430\u0448\u043E\u0433\u043E \u043D\u0435 \u0432\u0438\u0434\u0430\u043B\u044F\u0454\u0442\u044C\u0441\u044F.",
    "main.import": "\u0406\u043C\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438",
    "main.resetAsk": "\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u0432\u0441\u0456 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F?",
    "main.resetDetail": "\u041A\u043B\u0430\u0432\u0456\u0448\u0456, \u043F\u0435\u0440\u0435\u043C\u0438\u043A\u0430\u0447\u0456 \u0442\u0430 \u0441\u043F\u0438\u0441\u043A\u0438 \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0434\u043E \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0438\u0445. \u0412\u0430\u0448\u0430 \u043C\u043E\u0432\u0430, \u0441\u043B\u043E\u0432\u0430, \u0440\u043E\u0437\u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0438 \u0456 \u0442\u0435, \u0447\u043E\u0433\u043E Krya \u043D\u0430\u0432\u0447\u0438\u043B\u0430\u0441\u044F \u0437 \u0432\u0430\u0448\u043E\u0433\u043E \u043D\u0430\u0431\u043E\u0440\u0443, \u0437\u0430\u043B\u0438\u0448\u0430\u0442\u044C\u0441\u044F.",
    "main.reset": "\u0421\u043A\u0438\u043D\u0443\u0442\u0438",
    "main.resetKeysAsk": "\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u0432\u0441\u0456 \u043A\u043B\u0430\u0432\u0456\u0448\u0456?",
    "main.resetKeysDetail": "\u041A\u043E\u0436\u043D\u0435 \u0441\u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044F \u043A\u043B\u0430\u0432\u0456\u0448 \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u0442\u044C\u0441\u044F \u0434\u043E \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u043E\u0433\u043E: Ctrl+Alt+S, Ctrl+Alt+T, Ctrl+Alt+D, Ctrl+Alt+N \u0456 Ctrl+C \u0434\u0432\u0456\u0447\u0456; \u0440\u0435\u0448\u0442\u0443 \u0431\u0443\u0434\u0435 \u043E\u0447\u0438\u0449\u0435\u043D\u043E. \u0411\u0456\u043B\u044C\u0448\u0435 \u043D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0437\u043C\u0456\u043D\u0438\u0442\u044C\u0441\u044F.",
    "main.resetKeys": "\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u043A\u043B\u0430\u0432\u0456\u0448\u0456",
    "main.saveTranscript": "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0440\u043E\u0437\u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0443",
    "main.notTranslated": "\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0441\u0442\u0438: {why}",
    "main.noClipText": "\u0423 \u0431\u0443\u0444\u0435\u0440\u0456 \u043E\u0431\u043C\u0456\u043D\u0443 \u043D\u0435\u043C\u0430\u0454 \u0442\u0435\u043A\u0441\u0442\u0443. \u0421\u043F\u0435\u0440\u0448\u0443 \u0432\u0438\u0434\u0456\u043B\u0456\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u0456 \u0441\u043A\u043E\u043F\u0456\u044E\u0439\u0442\u0435 \u0439\u043E\u0433\u043E.",
    "main.nothingCopied": "\u041D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0441\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u043E. \u0412\u0438\u0434\u0456\u043B\u0456\u0442\u044C \u0442\u0435\u043A\u0441\u0442, \u043F\u043E\u0442\u0456\u043C \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u0441\u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044F \u043A\u043B\u0430\u0432\u0456\u0448.",
    "main.keysTaken": { one: "\u0421\u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044F {keys} \u0437\u0430\u0439\u043D\u044F\u0442\u0435 \u0456\u043D\u0448\u043E\u044E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043E\u044E. \u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u0456\u043D\u0448\u0435 \u0432 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F\u0445.", few: "\u0421\u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044F {keys} \u0437\u0430\u0439\u043D\u044F\u0442\u0456 \u0456\u043D\u0448\u043E\u044E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043E\u044E. \u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u0456\u043D\u0448\u0456 \u0432 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F\u0445.", many: "\u0421\u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044F {keys} \u0437\u0430\u0439\u043D\u044F\u0442\u0456 \u0456\u043D\u0448\u043E\u044E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043E\u044E. \u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u0456\u043D\u0448\u0456 \u0432 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F\u0445.", other: "\u0421\u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044F {keys} \u0437\u0430\u0439\u043D\u044F\u0442\u0456 \u0456\u043D\u0448\u043E\u044E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043E\u044E. \u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u0456\u043D\u0448\u0456 \u0432 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F\u0445." },
    "main.copyTwiceOff": "Ctrl+C \u0434\u0432\u0456\u0447\u0456 \u043D\u0435 \u043F\u0440\u0430\u0446\u044E\u0432\u0430\u0442\u0438\u043C\u0435: {why}. \u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0439\u0442\u0435\u0441\u044F \u043C\u0435\u043D\u044E \u0432 \u0442\u0440\u0435\u0457.",
    "backup.settings": "\u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
    "backup.words": { one: "{n} \u0441\u043B\u043E\u0432\u043E", few: "{n} \u0441\u043B\u043E\u0432\u0430", many: "{n} \u0441\u043B\u0456\u0432", other: "{n} \u0441\u043B\u043E\u0432\u0430" },
    "backup.mistakes": { one: "{n} \u043F\u043E\u043C\u0438\u043B\u043A\u0430", few: "{n} \u043F\u043E\u043C\u0438\u043B\u043A\u0438", many: "{n} \u043F\u043E\u043C\u0438\u043B\u043E\u043A", other: "{n} \u043F\u043E\u043C\u0438\u043B\u043A\u0438" },
    "backup.learned": { one: "{n} \u0432\u0438\u0432\u0447\u0435\u043D\u0435 \u0441\u043B\u043E\u0432\u043E", few: "{n} \u0432\u0438\u0432\u0447\u0435\u043D\u0456 \u0441\u043B\u043E\u0432\u0430", many: "{n} \u0432\u0438\u0432\u0447\u0435\u043D\u0438\u0445 \u0441\u043B\u0456\u0432", other: "{n} \u0432\u0438\u0432\u0447\u0435\u043D\u043E\u0433\u043E \u0441\u043B\u043E\u0432\u0430" },
    "backup.translations": { one: "{n} \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434", few: "{n} \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0438", many: "{n} \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0456\u0432", other: "{n} \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0443" },
    "backup.phrases": { one: "{n} \u043D\u0430\u0434\u0438\u043A\u0442\u043E\u0432\u0430\u043D\u0430 \u0444\u0440\u0430\u0437\u0430", few: "{n} \u043D\u0430\u0434\u0438\u043A\u0442\u043E\u0432\u0430\u043D\u0456 \u0444\u0440\u0430\u0437\u0438", many: "{n} \u043D\u0430\u0434\u0438\u043A\u0442\u043E\u0432\u0430\u043D\u0438\u0445 \u0444\u0440\u0430\u0437", other: "{n} \u043D\u0430\u0434\u0438\u043A\u0442\u043E\u0432\u0430\u043D\u043E\u0457 \u0444\u0440\u0430\u0437\u0438" },
    "backup.talks": { one: "{n} \u0440\u043E\u0437\u043C\u043E\u0432\u0430", few: "{n} \u0440\u043E\u0437\u043C\u043E\u0432\u0438", many: "{n} \u0440\u043E\u0437\u043C\u043E\u0432", other: "{n} \u0440\u043E\u0437\u043C\u043E\u0432\u0438" },
    "size.mb": "{n} \u041C\u0411",
    "size.gb": "{n} \u0413\u0411",
    "level.fast": "\u0428\u0432\u0438\u0434\u043A\u0438\u0439",
    "level.accurate": "\u0422\u043E\u0447\u043D\u0438\u0439",
    "level.most": "\u041D\u0430\u0439\u0442\u043E\u0447\u043D\u0456\u0448\u0438\u0439",
    "busy.card": "\u0432\u0456\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430",
    "busy.processor": "\u043F\u0440\u043E\u0446\u0435\u0441\u043E\u0440",
    "lang.pairEnglish": "{lang} \u21C4 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430",
    "lang.yours": "\u0432\u0430\u0448\u0430 \u043C\u043E\u0432\u0430",
    // ------------------------------------------------------------ the tray's panel
    "tray.open": "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438",
    "tray.openKrya": "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 Krya",
    "tray.built": "\u0417\u0456\u0431\u0440\u0430\u043D\u043E {build}",
    "tray.actions": "\u0414\u0456\u0457",
    "tray.listenCopied": "\u041F\u0440\u043E\u0441\u043B\u0443\u0445\u0430\u0442\u0438 \u0441\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u0438\u0439 \u0442\u0435\u043A\u0441\u0442",
    "tray.translateCopied": "\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0441\u0442\u0438 \u0441\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u0438\u0439 \u0442\u0435\u043A\u0441\u0442",
    "tray.typeToTranslate": "\u0412\u0432\u0435\u0441\u0442\u0438 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0443\u2026",
    "tray.checkEnglish": "\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0443\u2026",
    "tray.listenScreen": "\u041F\u0440\u043E\u0441\u043B\u0443\u0445\u0430\u0442\u0438 \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442 \u0435\u043A\u0440\u0430\u043D\u0430",
    "tray.translateScreen": "\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0441\u0442\u0438 \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442 \u0435\u043A\u0440\u0430\u043D\u0430",
    "tray.saveNote": "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u043D\u043E\u0442\u0430\u0442\u043A\u0443",
    "tray.newNote": "\u041D\u043E\u0432\u0430 \u043D\u043E\u0442\u0430\u0442\u043A\u0430",
    "tray.transcripts": "\u0420\u043E\u0437\u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0438",
    "tray.quick": "\u0428\u0432\u0438\u0434\u043A\u0456 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
    "tray.autoFix": "\u0412\u0438\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u0438 \u0440\u043E\u0437\u043A\u043B\u0430\u0434\u043A\u0443 \u043F\u0456\u0434 \u0447\u0430\u0441 \u043D\u0430\u0431\u043E\u0440\u0443",
    "tray.switchWith": "\u041F\u0435\u0440\u0435\u043C\u0438\u043A\u0430\u0442\u0438 \u0440\u043E\u0437\u043A\u043B\u0430\u0434\u043A\u0443: {key}",
    "tray.layoutBadge": "\u041F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u0440\u043E\u0437\u043A\u043B\u0430\u0434\u043A\u0443 \u0431\u0456\u043B\u044F \u043A\u0443\u0440\u0441\u043E\u0440\u0430",
    "tray.trayLayout": "\u041F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u0440\u043E\u0437\u043A\u043B\u0430\u0434\u043A\u0443 \u0432 \u0442\u0440\u0435\u0457",
    "tray.doubleCopy": "Ctrl+C \u0434\u0432\u0456\u0447\u0456 \u2014 \u043F\u0440\u043E\u0441\u043B\u0443\u0445\u0430\u0442\u0438",
    "tray.yourWords": "\u0412\u0430\u0448\u0456 \u0441\u043B\u043E\u0432\u0430",
    "tray.keepWord": "\u041D\u0435 \u0432\u0438\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u0438 \u0441\u043B\u043E\u0432\u043E\u2026",
    "tray.keepWordTitle": "\u041D\u0456\u043A\u043E\u043B\u0438 \u043D\u0435 \u0432\u0438\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u0438 \u0446\u0435 \u0441\u043B\u043E\u0432\u043E \u0441\u0430\u043C\u043E\u0441\u0442\u0456\u0439\u043D\u043E (\u041D\u0435 \u0432\u0438\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u0438)",
    "tray.keepPlaceholder": "\u0441\u043B\u043E\u0432\u043E, \u044F\u043A \u0432\u0438 \u0439\u043E\u0433\u043E \u043D\u0430\u0431\u0438\u0440\u0430\u0454\u0442\u0435",
    "tray.keepAria": "\u041D\u0435 \u0432\u0438\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u0438 \u0441\u043B\u043E\u0432\u043E",
    "tray.kept": "\u0414\u043E\u0434\u0430\u043D\u043E: {word}",
    "tray.vocabulary": "\u0414\u043E\u0434\u0430\u0442\u0438 \u0441\u043B\u043E\u0432\u043E \u0434\u043B\u044F \u0434\u0438\u043A\u0442\u0443\u0432\u0430\u043D\u043D\u044F\u2026",
    "tray.keptList": "\u0421\u043B\u043E\u0432\u0430, \u044F\u043A\u0456 \u043D\u0435 \u0432\u0438\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u0438",
    "tray.pausedTitle": "\u041A\u043B\u0430\u0432\u0456\u0448\u0456 \u0439 Ctrl+C \u0434\u0432\u0456\u0447\u0456 \u0432\u0438\u043C\u043A\u043D\u0435\u043D\u043E",
    "tray.pauseTitle": "\u0423\u0441\u0456 \u043A\u043B\u0430\u0432\u0456\u0448\u0456 \u0439 \u0440\u0435\u0430\u043A\u0446\u0456\u0457 \u0432\u0438\u043C\u043A\u043D\u0435\u043D\u043E, \u0434\u043E\u043A\u0438 \u043D\u0435 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0435",
    "tray.resume": "\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438",
    "tray.pause": "\u041F\u0430\u0443\u0437\u0430",
    "tray.settings": "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438",
    "tray.report": "\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0430",
    "tray.reportTitle": "\u041F\u043E\u0432\u0456\u0434\u043E\u043C\u0438\u0442\u0438 \u043F\u0440\u043E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443, \u0437 \u0436\u0443\u0440\u043D\u0430\u043B\u0430\u043C\u0438 Krya",
    "tray.quit": "\u0412\u0438\u0439\u0442\u0438",
    "tray.paused": "\u043F\u0430\u0443\u0437\u0430",
    "tray.ready": "\u0433\u043E\u0442\u043E\u0432\u043E",
    "tray.readyTitle": "{pair}, \u0431\u0435\u0437 \u0456\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0443",
    "tray.downloading": "\u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F\u2026",
    "tray.firstUse": "\u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0430\u0447 \u2014 \u043F\u0456\u0434 \u0447\u0430\u0441 \u043F\u0435\u0440\u0448\u043E\u0433\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F",
    "tray.tipRecording": "\u0417\u0430\u043F\u0438\u0441",
    "tray.tipPaused": "Krya \xB7 \u043F\u0430\u0443\u0437\u0430",
    "tray.tipListen": "{keys} \u2014 \u043F\u0440\u043E\u0441\u043B\u0443\u0445\u0430\u0442\u0438",
    "tray.tipTranslate": "{key} \u2014 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0441\u0442\u0438",
    "tray.tipTwice": "Ctrl+C \u0434\u0432\u0456\u0447\u0456",
    // ------------------------------------------------------------ the card
    "kind.listen": "\u0421\u043B\u0443\u0445\u0430\u0442\u0438",
    "kind.translate": "\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0441\u0442\u0438",
    "kind.check": "\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438",
    "kind.screen": "\u0435\u043A\u0440\u0430\u043D",
    "card.openedBy": "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u043E \u043A\u043B\u0430\u0432\u0456\u0448\u0430\u043C\u0438 {keys}",
    "card.openedByTwice": "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u043E: {keys} \u0434\u0432\u0456\u0447\u0456",
    "card.prev": "\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0454 \u0440\u0435\u0447\u0435\u043D\u043D\u044F",
    "card.next": "\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0435 \u0440\u0435\u0447\u0435\u043D\u043D\u044F",
    "card.oneByOne": "\u041F\u043E \u0440\u0435\u0447\u0435\u043D\u043D\u044E",
    "card.spaceListen": "\u0441\u043B\u0443\u0445\u0430\u0442\u0438",
    "card.spaceStop": "\u0441\u0442\u043E\u043F",
    "card.text": "\u0422\u0435\u043A\u0441\u0442",
    "card.from": "\u0417 \u043C\u043E\u0432\u0438",
    "card.fromTitle": "\u041C\u043E\u0432\u0430 \u0442\u0435\u043A\u0441\u0442\u0443",
    "card.into": "\u041D\u0430 \u043C\u043E\u0432\u0443",
    "card.intoTitle": "\u041C\u043E\u0432\u0430, \u043D\u0430 \u044F\u043A\u0443 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0441\u0442\u0438",
    "card.swap": "\u041F\u043E\u043C\u0456\u043D\u044F\u0442\u0438",
    "card.swapTitle": "\u041F\u043E\u043C\u0456\u043D\u044F\u0442\u0438 \u043C\u043E\u0432\u0438 \u043C\u0456\u0441\u0446\u044F\u043C\u0438: \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u0441\u0442\u0430\u043D\u0435 \u0442\u0435\u043A\u0441\u0442\u043E\u043C",
    "card.voiceOffer": "\u041F\u0440\u0438\u0440\u043E\u0434\u043D\u0438\u0439 \u0433\u043E\u043B\u043E\u0441 \u0437\u0432\u0443\u0447\u0438\u0442\u044C \u044F\u043A \u0436\u0438\u0432\u0430 \u043B\u044E\u0434\u0438\u043D\u0430 \u0439 \u0447\u0438\u0442\u0430\u0454 \u0431\u0435\u0437 \u0456\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0443.",
    "card.voiceDownload": "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \xB7 {size} \u041C\u0411",
    "card.voiceFailed": "\u041F\u0440\u0438\u0440\u043E\u0434\u043D\u0438\u0439 \u0433\u043E\u043B\u043E\u0441 \u043D\u0435 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0432\u0441\u044F.",
    "card.voiceDownloading": "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u043F\u0440\u0438\u0440\u043E\u0434\u043D\u043E\u0433\u043E \u0433\u043E\u043B\u043E\u0441\u0443\u2026 {pct}%",
    "card.voiceReady": "\u041F\u0440\u0438\u0440\u043E\u0434\u043D\u0438\u0439 \u0433\u043E\u043B\u043E\u0441 \u0433\u043E\u0442\u043E\u0432\u0438\u0439. \u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \xAB\u0421\u043B\u0443\u0445\u0430\u0442\u0438\xBB, \u0449\u043E\u0431 \u043F\u043E\u0447\u0443\u0442\u0438 \u0439\u043E\u0433\u043E.",
    "card.busyCard": "\u0412\u0456\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430 \u0437\u0430\u0439\u043D\u044F\u0442\u0430, \u0442\u043E\u043C\u0443 \u0446\u0435 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0432 \xAB\u0428\u0432\u0438\u0434\u043A\u0438\u0439\xBB. \xAB{level}\xBB \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u0442\u044C\u0441\u044F, \u0449\u043E\u0439\u043D\u043E \u0432\u043E\u043D\u0430 \u0437\u0432\u0456\u043B\u044C\u043D\u0438\u0442\u044C\u0441\u044F.",
    "card.busyProcessor": "\u041F\u0440\u043E\u0446\u0435\u0441\u043E\u0440 \u0437\u0430\u0439\u043D\u044F\u0442\u0438\u0439, \u0442\u043E\u043C\u0443 \u0446\u0435 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0432 \xAB\u0428\u0432\u0438\u0434\u043A\u0438\u0439\xBB. \xAB{level}\xBB \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u0442\u044C\u0441\u044F, \u0449\u043E\u0439\u043D\u043E \u0432\u0456\u043D \u0437\u0432\u0456\u043B\u044C\u043D\u0438\u0442\u044C\u0441\u044F.",
    "card.useAnyway": "\u0423\u0441\u0435 \u043E\u0434\u043D\u043E \xAB{level}\xBB",
    "card.hideTranslation": "\u0421\u0445\u043E\u0432\u0430\u0442\u0438 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 ({lang})",
    "card.showTranslation": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 ({lang})",
    "card.unpin": "\u0412\u0456\u0434\u043A\u0440\u0456\u043F\u0438\u0442\u0438: \u0437\u0430\u043A\u0440\u0438\u0432\u0430\u0442\u0438, \u043A\u043E\u043B\u0438 \u043A\u043B\u0430\u0446\u043D\u0443\u0442\u043E \u0456\u043D\u0448\u0435 \u0432\u0456\u043A\u043D\u043E",
    "card.pin": "\u0417\u0430\u043A\u0440\u0456\u043F\u0438\u0442\u0438: \u043D\u0435 \u0437\u0430\u043A\u0440\u0438\u0432\u0430\u0442\u0438",
    "card.oneOn": "\u0427\u0438\u0442\u0430\u0454 \u043E\u0434\u043D\u0435 \u0440\u0435\u0447\u0435\u043D\u043D\u044F \u0439 \u0447\u0435\u043A\u0430\u0454; \u2190 \u2192 \u2014 \u043A\u0440\u043E\u043A",
    "card.oneOff": "\u0427\u0438\u0442\u0430\u0442\u0438 \u043F\u043E \u043E\u0434\u043D\u043E\u043C\u0443 \u0440\u0435\u0447\u0435\u043D\u043D\u044E",
    "card.translatingFast": "\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0430\u0454 \xAB\u0428\u0432\u0438\u0434\u043A\u0438\u0439\xBB\u2026",
    "card.translating": "\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u2026",
    "card.translatingLevel": "\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \xB7 {level}\u2026",
    "card.ofGb": "{a} \u0437 {b} \u0413\u0411",
    "card.ofMb": "{a} \u0437 {b} \u041C\u0411",
    "card.firstUse": "\u043F\u0435\u0440\u0448\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \xB7 \u043E\u0434\u0438\u043D \u0440\u0430\u0437",
    "card.modelOf": "\u041C\u043E\u0434\u0435\u043B\u044C \xAB{name}\xBB",
    "card.translatorPair": "\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0430\u0447, {pair}",
    "card.fromMozilla": "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u0434\u0438\u043D \u0440\u0430\u0437 \u0456\u0437 Mozilla, \u0434\u0430\u043B\u0456 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0430\u0454 \u043D\u0430 \u0446\u044C\u043E\u043C\u0443 \u043A\u043E\u043C\u043F\u2019\u044E\u0442\u0435\u0440\u0456.",
    "card.fromHfTranslates": "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u0434\u0438\u043D \u0440\u0430\u0437 \u0456\u0437 Hugging Face, \u0434\u0430\u043B\u0456 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0430\u0454 \u043D\u0430 \u0446\u044C\u043E\u043C\u0443 \u043A\u043E\u043C\u043F\u2019\u044E\u0442\u0435\u0440\u0456.",
    "card.fromHfChecks": "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u0434\u0438\u043D \u0440\u0430\u0437 \u0456\u0437 Hugging Face, \u0434\u0430\u043B\u0456 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u044F\u0454 \u043D\u0430 \u0446\u044C\u043E\u043C\u0443 \u043A\u043E\u043C\u043F\u2019\u044E\u0442\u0435\u0440\u0456.",
    "card.readMeanwhile": "\u0410\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0438\u0439 \u0442\u0435\u043A\u0441\u0442 \u0442\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u0447\u0438\u0442\u0430\u0454\u0442\u044C\u0441\u044F.",
    "card.notChecked": "\u041D\u0435 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0435\u043D\u043E",
    "card.notTranslated": "\u041D\u0435 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0435\u043D\u043E",
    "card.readingScreen": "\u0427\u0438\u0442\u0430\u044E \u0442\u0435\u043A\u0441\u0442 \u043D\u0430 \u0435\u043A\u0440\u0430\u043D\u0456\u2026",
    "card.noText": "\u0422\u0443\u0442 \u043D\u0435\u043C\u0430\u0454 \u0442\u0435\u043A\u0441\u0442\u0443",
    "card.noTextNote": "\u041D\u0430 \u0446\u044C\u043E\u043C\u0443 \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442\u0456 \u0435\u043A\u0440\u0430\u043D\u0430 \u043D\u0435\u043C\u0430\u0454 \u0442\u0435\u043A\u0441\u0442\u0443, \u044F\u043A\u0438\u0439 Krya \u043C\u043E\u0436\u0435 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u0438. \u0412\u0438\u0434\u0456\u043B\u0456\u0442\u044C \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442 \u0437\u0456 \u0441\u043B\u043E\u0432\u0430\u043C\u0438.",
    "card.noOcr": "Windows \u043F\u043E\u043A\u0438 \u043D\u0435 \u0432\u043C\u0456\u0454 \u0447\u0438\u0442\u0430\u0442\u0438 \u0442\u0435\u043A\u0441\u0442",
    "card.noOcrNote": "\u0414\u043E\u0434\u0430\u0439\u0442\u0435 \u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u0432\u0430\u043D\u043D\u044F \u0442\u0435\u043A\u0441\u0442\u0443 \u0434\u043B\u044F \u043C\u043E\u0432\u0438 \xAB{lang}\xBB \u0430\u0431\u043E \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u043E\u0457: \u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438 \u2192 \u0427\u0430\u0441 \u0456 \u043C\u043E\u0432\u0430 \u2192 \u041C\u043E\u0432\u0430 \u0442\u0430 \u0440\u0435\u0433\u0456\u043E\u043D \u2192 \u043C\u043E\u0432\u0430 \u2192 \u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438 \u043C\u043E\u0432\u0438 \u2192 \u041E\u043F\u0442\u0438\u0447\u043D\u0435 \u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u0432\u0430\u043D\u043D\u044F \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432.",
    "card.openLanguageSettings": "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438 \u043C\u043E\u0432\u0438",
    "card.yourEnglish": "\u0412\u0430\u0448\u0430 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430",
    "card.typeEnglish": "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0430\u0431\u043E \u0432\u0441\u0442\u0430\u0432\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u043E\u044E",
    "card.checkedBy": "\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0435\u043D\u043E \xB7 {model}",
    "card.improving": "\u0423\u0442\u043E\u0447\u043D\u044E\u0454\u0442\u044C\u0441\u044F \xB7 {level}\u2026",
    "card.translatedBy": "\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0435\u043D\u043E \xB7 {level}",
    "card.newLine": "{by} \xB7 Shift+Enter \u2014 \u043D\u043E\u0432\u0438\u0439 \u0440\u044F\u0434\u043E\u043A",
    "card.yours": "\u0412\u0430\u0448\u0456",
    "card.allLanguages": "\u0423\u0441\u0456 \u043C\u043E\u0432\u0438",
    "card.pasteOver": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0437\u0430\u043C\u0456\u0441\u0442\u044C \u0432\u0438\u0434\u0456\u043B\u0435\u043D\u043E\u0433\u043E (Enter)",
    "card.pasteLater": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C\u0441\u044F, \u0449\u043E\u0439\u043D\u043E \u043D\u0430\u0434\u0456\u0439\u0434\u0435 \u0442\u043E\u0447\u043D\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 (Enter)",
    "card.pasteChecked": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0432\u0438\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u0442\u0435\u043A\u0441\u0442 \u0437\u0430\u043C\u0456\u0441\u0442\u044C \u0432\u0438\u0434\u0456\u043B\u0435\u043D\u043E\u0433\u043E (Enter)",
    "card.looksRight": "\u0421\u0445\u043E\u0436\u0435, \u0443\u0441\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E",
    "card.listenSpace": "\u0421\u043B\u0443\u0445\u0430\u0442\u0438 (Space)",
    "card.listenParagraph": "\u041F\u0440\u043E\u0441\u043B\u0443\u0445\u0430\u0442\u0438 \u0446\u0435\u0439 \u0430\u0431\u0437\u0430\u0446",
    "card.naturalStopped": "\u041F\u0440\u0438\u0440\u043E\u0434\u043D\u0438\u0439 \u0433\u043E\u043B\u043E\u0441 \u0437\u0443\u043F\u0438\u043D\u0438\u0432\u0441\u044F ({message}). \u0414\u0430\u043B\u0456 \u0447\u0438\u0442\u0430\u0454 \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u0438\u0439 \u0433\u043E\u043B\u043E\u0441.",
    "card.noVoice": "\u041D\u0430 \u0446\u044C\u043E\u043C\u0443 \u043A\u043E\u043C\u043F\u2019\u044E\u0442\u0435\u0440\u0456 \u043D\u0435\u043C\u0430\u0454 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u043E\u0433\u043E \u0433\u043E\u043B\u043E\u0441\u0443.",
    "card.openSpeechSettings": "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438 \u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F",
    "voice.stepsWin": "\u0429\u043E\u0431 \u0434\u043E\u0434\u0430\u0442\u0438: \u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438 Windows \u2192 \u0427\u0430\u0441 \u0456 \u043C\u043E\u0432\u0430 \u2192 \u041C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u2192 \u0414\u043E\u0434\u0430\u0442\u0438 \u0433\u043E\u043B\u043E\u0441\u0438 \u2192 {lang}, \u043F\u043E\u0442\u0456\u043C \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u0442\u0456\u0442\u044C Krya.",
    "voice.stepsMac": "\u0429\u043E\u0431 \u0434\u043E\u0434\u0430\u0442\u0438: \u0421\u0438\u0441\u0442\u0435\u043C\u043D\u0456 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438 \u2192 \u0414\u043E\u0441\u0442\u0443\u043F\u043D\u0456\u0441\u0442\u044C \u2192 \u041E\u0437\u0432\u0443\u0447\u0435\u043D\u0438\u0439 \u0432\u043C\u0456\u0441\u0442 \u2192 \u0421\u0438\u0441\u0442\u0435\u043C\u043D\u0438\u0439 \u0433\u043E\u043B\u043E\u0441 \u2192 \u041A\u0435\u0440\u0443\u0432\u0430\u0442\u0438 \u0433\u043E\u043B\u043E\u0441\u0430\u043C\u0438 \u2192 {lang}, \u043F\u043E\u0442\u0456\u043C \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u0442\u0456\u0442\u044C Krya.",
    "voice.none": "\u0414\u043B\u044F \u0447\u0438\u0442\u0430\u043D\u043D\u044F \u0432\u0433\u043E\u043B\u043E\u0441 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0456 \u0433\u043E\u043B\u043E\u0441\u0438 Windows \u0430\u0431\u043E macOS; \u0443 \u0446\u0456\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0456 \u043D\u0435\u043C\u0430\u0454 \u0436\u043E\u0434\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u0434\u0430\u0442\u043D\u043E\u0433\u043E.",
    // ------------------------------------------------------------ the word card
    "word.from": "\u0444\u043E\u0440\u043C\u0430: {word}",
    "word.say": "\u0412\u0438\u043C\u043E\u0432\u0438\u0442\u0438",
    "word.save": "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0432 \xAB\u0421\u043B\u043E\u0432\u0430\xBB",
    "word.remove": "\u041F\u0440\u0438\u0431\u0440\u0430\u0442\u0438 \u0437\u0456 \xAB\u0421\u043B\u0456\u0432\xBB",
    "word.notFound": "\u041D\u0435\u043C\u0430\u0454 \u0432 \u0441\u043B\u043E\u0432\u043D\u0438\u043A\u0443.",
    "word.pair": "\u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430 \u2192 {lang}",
    "word.notEnglish": "\u0417\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0441\u043B\u0456\u0432 \u043F\u043E\u043A\u0438 \u0454 \u043B\u0438\u0448\u0435 \u0434\u043B\u044F \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u043E\u0457; \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 ({lang}) \u2014 \u043D\u0438\u0436\u0447\u0435.",
    "word.noDictionary": "\u0421\u043B\u043E\u0432\u043D\u0438\u043A\u0430 {pair} \u043F\u043E\u043A\u0438 \u043D\u0435\u043C\u0430\u0454; \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434 \u2014 \u043D\u0438\u0436\u0447\u0435.",
    "word.downloading": "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0441\u043B\u043E\u0432\u043D\u0438\u043A\u0430 {pair}, \u043E\u0434\u0438\u043D \u0440\u0430\u0437\u2026",
    "word.failed": "\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0441\u043B\u043E\u0432\u043D\u0438\u043A {pair}. \u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u0437\u2019\u0454\u0434\u043D\u0430\u043D\u043D\u044F \u0437 \u0456\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u043E\u043C; \u043D\u043E\u0432\u0430 \u0441\u043F\u0440\u043E\u0431\u0430 \u0437\u0430 \u0445\u0432\u0438\u043B\u0438\u043D\u0443.",
    "word.off": "\u0421\u043B\u043E\u0432\u043D\u0438\u043A {pair} \u043D\u0435 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043E.",
    // ------------------------------------------------------------ the talk window
    "talk.yourTalks": "\u0412\u0430\u0448\u0456 \u0440\u043E\u0437\u043C\u043E\u0432\u0438",
    "talk.hideTalks": "\u0421\u0445\u043E\u0432\u0430\u0442\u0438 \u0440\u043E\u0437\u043C\u043E\u0432\u0438",
    "talk.settings": "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0440\u043E\u0437\u043C\u043E\u0432\u0438",
    "talk.toEnd": "\u0414\u043E \u043E\u0441\u0442\u0430\u043D\u043D\u044C\u043E\u0457 \u0440\u0435\u043F\u043B\u0456\u043A\u0438",
    "talk.typePlaceholder": "\u0410\u0431\u043E \u043D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u0440\u0435\u043F\u043B\u0456\u043A\u0443",
    "talk.typeOnly": "\u041D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u0456 \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C Enter",
    "talk.typeAria": "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u0438 \u0440\u0435\u043F\u043B\u0456\u043A\u0443 \u043A\u0430\u0447\u0446\u0456",
    "talk.newTitle": "\u041F\u0440\u0438\u0431\u0440\u0430\u0442\u0438 \u0446\u044E \u0440\u043E\u0437\u043C\u043E\u0432\u0443 \u0434\u043E \u0456\u0441\u0442\u043E\u0440\u0456\u0457 \u0439 \u043F\u043E\u0447\u0430\u0442\u0438 \u043D\u043E\u0432\u0443",
    "talk.new": "\u041D\u043E\u0432\u0430 \u0440\u043E\u0437\u043C\u043E\u0432\u0430",
    "talk.closeList": "\u0417\u0430\u043A\u0440\u0438\u0442\u0438 \u0441\u043F\u0438\u0441\u043E\u043A",
    "talk.today": "\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456",
    "talk.yesterday": "\u0423\u0447\u043E\u0440\u0430",
    "talk.earlier": "\u0420\u0430\u043D\u0456\u0448\u0435",
    "talk.lines": { one: "{n} \u0440\u0435\u043F\u043B\u0456\u043A\u0430", few: "{n} \u0440\u0435\u043F\u043B\u0456\u043A\u0438", many: "{n} \u0440\u0435\u043F\u043B\u0456\u043A", other: "{n} \u0440\u0435\u043F\u043B\u0456\u043A\u0438" },
    "talk.withMistake": "\u0437 \u043F\u043E\u043C\u0438\u043B\u043A\u043E\u044E: {n}",
    "talk.goingOnMeta": "\u0442\u0440\u0438\u0432\u0430\u0454",
    "talk.goingOnTitle": "\u041F\u043E\u0442\u043E\u0447\u043D\u0430 \u0440\u043E\u0437\u043C\u043E\u0432\u0430",
    "talk.goOn": "\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u0446\u044E \u0440\u043E\u0437\u043C\u043E\u0432\u0443",
    "talk.firstLine": "\u041F\u0435\u0440\u0448\u0430 \u0440\u0435\u043F\u043B\u0456\u043A\u0430 \u043A\u0430\u0447\u043A\u0438",
    "talk.delete": "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u044E \u0440\u043E\u0437\u043C\u043E\u0432\u0443",
    "talk.goingOn": "\u0422\u0440\u0438\u0432\u0430\u0454",
    "talk.historyEmpty": "\xAB\u041D\u043E\u0432\u0430 \u0440\u043E\u0437\u043C\u043E\u0432\u0430\xBB \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u0442\u044C \u0440\u043E\u0437\u043C\u043E\u0432\u0443 \u0441\u044E\u0434\u0438, \u0449\u043E\u0431 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u0457\u0457 \u043F\u0456\u0437\u043D\u0456\u0448\u0435. \u0417\u0431\u0435\u0440\u0456\u0433\u0430\u0454\u0442\u044C\u0441\u044F 30 \u0434\u043D\u0456\u0432 \u043D\u0430 \u0446\u044C\u043E\u043C\u0443 \u043A\u043E\u043C\u043F\u2019\u044E\u0442\u0435\u0440\u0456, \u043D\u0435 \u0431\u0456\u043B\u044C\u0448\u0435 50.",
    "talk.sureOne": "\u0422\u043E\u0447\u043D\u043E? \u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",
    "talk.sureAll": "\u0422\u043E\u0447\u043D\u043E? \u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0432\u0441\u0456 ({n})",
    "talk.clearAll": "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u0432\u0441\u0435",
    "talk.needsCard": "\u0414\u043B\u044F \u0440\u043E\u0437\u043C\u043E\u0432\u0438 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0430 \u0432\u0456\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430 \u0437 4 \u0413\u0411 \u0432\u043B\u0430\u0441\u043D\u043E\u0457 \u043F\u0430\u043C\u2019\u044F\u0442\u0456 \u0430\u0431\u043E \u0431\u0456\u043B\u044C\u0448\u0435",
    "talk.needsCardNote": "\u041D\u0430 \u0446\u044C\u043E\u043C\u0443 \u043A\u043E\u043C\u043F\u2019\u044E\u0442\u0435\u0440\u0456 \u043A\u0430\u0447\u043A\u0430 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u0430 \u0431 15 \u0441\u0435\u043A\u0443\u043D\u0434 \u0456 \u0434\u043E\u0432\u0448\u0435 \u2014 \u043D\u0430\u0434\u0442\u043E \u043F\u043E\u0432\u0456\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0440\u043E\u0437\u043C\u043E\u0432\u0438. \xAB\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u043E\u0457\xBB \u043F\u0440\u0430\u0446\u044E\u0454 \u044F\u043A \u0456 \u0440\u0430\u043D\u0456\u0448\u0435.",
    "talk.downloading": "\u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F, {pct}%; \u0440\u043E\u0437\u043C\u043E\u0432\u0430 \u043F\u043E\u0447\u043D\u0435\u0442\u044C\u0441\u044F, \u0449\u043E\u0439\u043D\u043E \u043C\u043E\u0434\u0435\u043B\u044C \u0431\u0443\u0434\u0435 \u0442\u0443\u0442",
    "talk.downloadFailed": "\u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F",
    "talk.downloadIt": "\u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0442\u0435 \u0457\u0457 \u0432 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F\u0445; \u0457\u0457 \u0442\u0430\u043A\u043E\u0436 \u043C\u043E\u0436\u0443\u0442\u044C \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \xAB\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u043E\u0457\xBB \u0439 \xAB\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\xBB",
    "talk.needsModel": "\u041A\u0430\u0447\u0446\u0456 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0430 \u0457\u0457 \u043C\u043E\u0434\u0435\u043B\u044C: {name}, {size}",
    "talk.noEngine": "\u041F\u0438\u0448\u0456\u0442\u044C \u043A\u0430\u0447\u0446\u0456 \u0430\u0431\u043E \u0434\u043E\u0434\u0430\u0439\u0442\u0435 \u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u0432\u0430\u043D\u043D\u044F \u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F, \u0449\u043E\u0431 \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u0438",
    "talk.noEngineNote": "\u0420\u043E\u0437\u043C\u043E\u0432\u0430 \u0447\u0443\u0454 \u0432\u0430\u0441 \u0447\u0435\u0440\u0435\u0437 \u0440\u0443\u0448\u0456\u0439 \u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F, \u044F\u043A\u0438\u0439 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454 \xAB\u0414\u0438\u043A\u0442\u0443\u0432\u0430\u043D\u043D\u044F\xBB; \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0442\u0435 \u0439\u043E\u0433\u043E \u0432 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F\u0445.",
    "talk.engineStarting": "\u0420\u0443\u0448\u0456\u0439 \u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0454\u0442\u044C\u0441\u044F\u2026",
    "talk.slow": "\xAB{name}\xBB \u043D\u0430 \u0446\u044C\u043E\u043C\u0443 \u043A\u043E\u043C\u043F\u2019\u044E\u0442\u0435\u0440\u0456 \u043F\u0440\u0430\u0446\u044E\u0454 \u043F\u043E\u0432\u0456\u043B\u044C\u043D\u043E: \u043A\u0430\u0447\u043A\u0430 \u043C\u043E\u0436\u0435 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 \u0434\u043E\u0432\u0433\u043E. \xAB{accurate}\xBB \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0454 \u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 3 \u0441\u0435\u043A\u0443\u043D\u0434\u0438.",
    "talk.busyCard": "\u0412\u0456\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0443 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454 \u0456\u043D\u0448\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0430: \u043A\u0430\u0447\u043A\u0430 \u043C\u043E\u0436\u0435 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 \u043F\u043E\u0432\u0456\u043B\u044C\u043D\u043E.",
    "talk.busyProcessor": "\u041F\u0440\u043E\u0446\u0435\u0441\u043E\u0440 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454 \u0456\u043D\u0448\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0430: \u043A\u0430\u0447\u043A\u0430 \u043C\u043E\u0436\u0435 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 \u043F\u043E\u0432\u0456\u043B\u044C\u043D\u043E.",
    "talk.intro": "\u0413\u043E\u0432\u043E\u0440\u0456\u0442\u044C \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u043E\u044E. \u041A\u0430\u0447\u043A\u0430 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0454 \u0432\u0433\u043E\u043B\u043E\u0441, \u0430 \u0432\u0430\u0448\u0456 \u043F\u043E\u043C\u0438\u043B\u043A\u0438 \u043F\u043E\u0437\u043D\u0430\u0447\u0430\u044E\u0442\u044C\u0441\u044F \u0443 \u0432\u0430\u0448\u0438\u0445 \u0440\u0435\u043F\u043B\u0456\u043A\u0430\u0445.",
    "talk.orTypeHello": "\u0410\u0431\u043E \u043D\u0430\u043F\u0438\u0448\u0456\u0442\u044C hello \u043D\u0438\u0436\u0447\u0435.",
    "talk.orSayHello": "\u0410\u0431\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0443 \u0439 \u0441\u043A\u0430\u0436\u0456\u0442\u044C hello.",
    "talk.unpin": "\u041D\u0435 \u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043F\u043E\u0432\u0435\u0440\u0445 \u0456\u043D\u0448\u0438\u0445 \u0432\u0456\u043A\u043E\u043D",
    "talk.pin": "\u0422\u0440\u0438\u043C\u0430\u0442\u0438 \u043F\u043E\u0432\u0435\u0440\u0445 \u0456\u043D\u0448\u0438\u0445 \u0432\u0456\u043A\u043E\u043D",
    "talk.modelTitle": "\u041A\u0430\u0447\u043A\u0430 \u043F\u0440\u0430\u0446\u044E\u0454 \u043D\u0430 {model} \u2014 \u0442\u0456\u0439 \u0441\u0430\u043C\u0456\u0439 \u043C\u043E\u0434\u0435\u043B\u0456, \u0449\u043E \u0439 \xAB\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u043E\u0457\xBB, \u043D\u0430 \u0446\u044C\u043E\u043C\u0443 \u043A\u043E\u043C\u043F\u2019\u044E\u0442\u0435\u0440\u0456. \u041A\u043B\u0430\u0446\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0437\u043C\u0456\u043D\u0438\u0442\u0438.",
    "talk.failed": "\u041A\u0430\u0447\u043A\u0430 \u043D\u0435 \u0437\u043C\u043E\u0433\u043B\u0430 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0441\u0442\u0438: {message}. \u0421\u043A\u0430\u0436\u0456\u0442\u044C \u0449\u0435 \u0440\u0430\u0437 \u0430\u0431\u043E \u043D\u0430\u043F\u0438\u0448\u0456\u0442\u044C.",
    "talk.noAnswer": "\u043D\u0435\u043C\u0430\u0454 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0456",
    "talk.startingMic": "\u0412\u043C\u0438\u043A\u0430\u044E \u043C\u0456\u043A\u0440\u043E\u0444\u043E\u043D\u2026",
    "talk.send": "\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438",
    "talk.talk": "\u0413\u043E\u0432\u043E\u0440\u0438\u0442\u0438",
    "talk.notPossible": "\u0420\u043E\u0437\u043C\u043E\u0432\u0430 \u043F\u043E\u043A\u0438 \u043D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u0430: \u0434\u0438\u0432. \u0432\u0438\u0449\u0435.",
    "talk.speaking": "\u041A\u0430\u0447\u043A\u0430 \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C",
    "talk.thinking": "\u041A\u0430\u0447\u043A\u0430 \u0434\u0443\u043C\u0430\u0454\u2026",
    "talk.typingOnly": "\u041B\u0438\u0448\u0435 \u0442\u0435\u043A\u0441\u0442\u043E\u043C, \u0434\u043E\u043A\u0438 \u043D\u0435\u043C\u0430\u0454 \u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u0432\u0430\u043D\u043D\u044F \u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F",
    "talk.pressAgain": "\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u0449\u0435 \u0440\u0430\u0437, \u0449\u043E\u0431 \u0441\u043F\u0440\u043E\u0431\u0443\u0432\u0430\u0442\u0438.",
    "talk.listeningPress": "\u0421\u043B\u0443\u0445\u0430\u044E \xB7 {keys} \u2014 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438",
    "talk.speakingPress": "\u041A\u0430\u0447\u043A\u0430 \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C \xB7 {keys} \u2014 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0441\u0442\u0438",
    "talk.thinkingPress": "\u041A\u0430\u0447\u043A\u0430 \u0434\u0443\u043C\u0430\u0454 \xB7 {keys} \u2014 \u043F\u0435\u0440\u0435\u0431\u0438\u0442\u0438",
    "talk.press": "{keys} \u2014 \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u0438",
    "talk.finishing": "\u0417\u0430\u0432\u0435\u0440\u0448\u0443\u044E \u0440\u0435\u043F\u043B\u0456\u043A\u0443\u2026",
    "talk.nothingHeard": "\u041D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u043F\u043E\u0447\u0443\u0442\u043E.",
    "turn.again": "\u0421\u043A\u0430\u0437\u0430\u0442\u0438 \u0449\u0435 \u0440\u0430\u0437",
    "turn.checking": "\u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430\u2026",
    "turn.setRight": "\u0432\u0438\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u0432\u0438\u0449\u0435",
    "turn.hearRight": "\u041F\u043E\u0447\u0443\u0442\u0438, \u044F\u043A \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E",
    "turn.hear": "\u041F\u043E\u0447\u0443\u0442\u0438",
    "topic.free": "\u0412\u0456\u043B\u044C\u043D\u0430 \u0440\u043E\u0437\u043C\u043E\u0432\u0430",
    "topic.day": "\u041C\u0456\u0439 \u0434\u0435\u043D\u044C",
    "topic.trip": "\u041F\u043E\u0434\u043E\u0440\u043E\u0436",
    "topic.cafe": "\u0423 \u043A\u0430\u0444\u0435",
    "topic.interview": "\u0421\u043F\u0456\u0432\u0431\u0435\u0441\u0456\u0434\u0430",
    "topic.work": "\u041C\u043E\u044F \u0440\u043E\u0431\u043E\u0442\u0430",
    // ------------------------------------------------------------ the microphone and the dictation badge
    "mic.denied": "\u041D\u0435\u043C\u0430\u0454 \u0434\u043E\u0441\u0442\u0443\u043F\u0443 \u0434\u043E \u043C\u0456\u043A\u0440\u043E\u0444\u043E\u043D\u0430: \u0434\u043E\u0437\u0432\u043E\u043B\u044C\u0442\u0435 \u0439\u043E\u0433\u043E \u0432 \u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430\u0445 Windows \u2192 \u041A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u0456\u0441\u0442\u044C \u2192 \u041C\u0456\u043A\u0440\u043E\u0444\u043E\u043D",
    "mic.none": "\u041C\u0456\u043A\u0440\u043E\u0444\u043E\u043D \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E",
    "mic.busy": "\u041C\u0456\u043A\u0440\u043E\u0444\u043E\u043D \u0437\u0430\u0439\u043D\u044F\u0442\u0438\u0439 \u0456\u043D\u0448\u043E\u044E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043E\u044E",
    "dict.type": "\u0414\u0438\u043A\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
    "dict.english": "\u0414\u0438\u043A\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u043E\u044E",
    "dict.note": "\u041D\u043E\u0442\u0430\u0442\u043A\u0430",
    "dict.check": "\u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0430 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u043E\u0457",
    "dict.gettingModel": "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u043C\u043E\u0434\u0435\u043B\u0456 \u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F {pct}%",
    "dict.savingNote": "\u0417\u0431\u0435\u0440\u0456\u0433\u0430\u044E \u043D\u043E\u0442\u0430\u0442\u043A\u0443\u2026",
    "dict.catchingUp": "\u041D\u0430\u0437\u0434\u043E\u0433\u0430\u043D\u044F\u044E\u2026",
    "dict.typing": "\u0414\u0440\u0443\u043A\u0443\u044E\u2026",
    "dict.saved": "\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E",
    "dict.typed": "\u041D\u0430\u0434\u0440\u0443\u043A\u043E\u0432\u0430\u043D\u043E",
    "dict.noteFailed": "\u041D\u043E\u0442\u0430\u0442\u043A\u0443 \u043D\u0435 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E",
    "dict.nothingTyped": "\u041D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u043D\u0430\u0434\u0440\u0443\u043A\u043E\u0432\u0430\u043D\u043E",
    "dict.fastCard": "\u041D\u0430\u0434\u0440\u0443\u043A\u043E\u0432\u0430\u043D\u043E \xAB\u0428\u0432\u0438\u0434\u043A\u0438\u043C\xBB: \u0432\u0456\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430 \u0437\u0430\u0439\u043D\u044F\u0442\u0430",
    "dict.fastProcessor": "\u041D\u0430\u0434\u0440\u0443\u043A\u043E\u0432\u0430\u043D\u043E \xAB\u0428\u0432\u0438\u0434\u043A\u0438\u043C\xBB: \u043F\u0440\u043E\u0446\u0435\u0441\u043E\u0440 \u0437\u0430\u0439\u043D\u044F\u0442\u0438\u0439",
    "badge.fastCard": "\u0428\u0432\u0438\u0434\u043A\u0438\u0439 \xB7 \u0432\u0456\u0434\u0435\u043E\u043A\u0430\u0440\u0442\u0430 \u0437\u0430\u0439\u043D\u044F\u0442\u0430",
    "badge.fastProcessor": "\u0428\u0432\u0438\u0434\u043A\u0438\u0439 \xB7 \u043F\u0440\u043E\u0446\u0435\u0441\u043E\u0440 \u0437\u0430\u0439\u043D\u044F\u0442\u0438\u0439",
    "settings.uiLanguage": "\u041C\u043E\u0432\u0430 \u0456\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0443",
    "settings.uiLanguageNote": "\u043C\u0435\u043D\u044E \u0439 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 Krya; \u0442\u0435, \u0447\u043E\u0433\u043E \u0432\u043E\u043D\u0430 \u043D\u0430\u0432\u0447\u0430\u0454, \u043B\u0438\u0448\u0430\u0454\u0442\u044C\u0441\u044F \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u043E\u044E"
  };

  // src/i18n/index.ts
  var PHRASES = { en, uk, ru };
  var isUiLanguage = (v) => v === "en" || v === "uk" || v === "ru";
  var current = "en";
  if (typeof location !== "undefined") {
    const asked = new URLSearchParams(location.search).get("lang");
    if (isUiLanguage(asked)) current = asked;
    if (typeof document !== "undefined") document.documentElement.lang = current;
  }
  var rules = /* @__PURE__ */ new Map();
  function pluralOf(n) {
    let r = rules.get(current);
    if (!r) rules.set(current, r = new Intl.PluralRules(current));
    return r.select(n);
  }
  var isPlural = (p) => typeof p === "object";
  function t(key, vars) {
    const p = PHRASES[current][key] ?? en[key];
    if (p === void 0) return key;
    let s;
    if (isPlural(p)) {
      const n = Number(vars?.n ?? 0);
      s = p[pluralOf(n)] ?? p.other;
    } else s = p;
    if (!vars) return s;
    return s.replace(/\{(\w+)\}/g, (whole, name) => name in vars ? String(vars[name]) : whole);
  }
  var displayNames = /* @__PURE__ */ new Map();
  function languageName(nameOrCode) {
    const language = findLanguage(nameOrCode);
    if (!language) return nameOrCode;
    if (current === "en") return language.name;
    let names = displayNames.get(current);
    if (names === void 0) {
      try {
        names = new Intl.DisplayNames([current], { type: "language" });
      } catch {
        names = null;
      }
      displayNames.set(current, names);
    }
    const name = names?.of(language.code);
    return name && name !== language.code ? name : language.name;
  }
  var levelName = (level) => t(`level.${level}`);
  function sizeText(mb) {
    return mb >= 1e3 ? t("size.gb", { n: (Math.round(mb / 100) / 10).toFixed(1) }) : t("size.mb", { n: Math.max(1, Math.round(mb)) });
  }
  function formatDate(d, options) {
    return d.toLocaleString(current === "en" ? "en-GB" : current, options);
  }

  // src/natural.ts
  var NATURAL_PREFIX = "natural:";
  var NATURAL_VOICES = [
    { id: "af_heart", name: "Heart", accent: "US", gender: "female" },
    { id: "af_bella", name: "Bella", accent: "US", gender: "female" },
    { id: "bf_emma", name: "Emma", accent: "UK", gender: "female" },
    { id: "am_michael", name: "Michael", accent: "US", gender: "male" },
    { id: "bm_george", name: "George", accent: "UK", gender: "male" }
  ];
  var DEFAULT_NATURAL = "af_heart";
  function chosenNatural(setting) {
    if (!setting) return NATURAL_VOICES.find((v) => v.id === DEFAULT_NATURAL);
    if (!setting.startsWith(NATURAL_PREFIX)) return void 0;
    const id = setting.slice(NATURAL_PREFIX.length);
    return NATURAL_VOICES.find((v) => v.id === id) ?? NATURAL_VOICES.find((v) => v.id === DEFAULT_NATURAL);
  }

  // src/topics.ts
  var TOPICS = [
    {
      id: "free",
      title: "Free talk",
      role: "This is a free talk about anything.",
      plan: "Follow the learner: their questions come first. Answer them fully, with what you really know, then add a thought of your own or ask about theirs.",
      openers: ["Hi! What would you like to talk about today?", "Hey there! How is your day going so far?"]
    },
    {
      id: "day",
      title: "My day",
      role: "This talk is about the learner's day.",
      plan: "Ask what they did, what is next and how they feel about it, one thing at a time. React to what they tell you, and now and then share a small, funny thing from your own day as a duck.",
      openers: ["So, how was your day? Tell me one thing that happened.", "What have you been up to today?"]
    },
    {
      id: "trip",
      title: "A trip",
      role: "This talk is about a trip the learner took or wants to take.",
      plan: "Ask about the places, the plans, the food and the people. Share what you know about the places they name: what to see, what to eat, what it is like there.",
      openers: ["Tell me about a trip you remember. Where did you go?", "If you could go anywhere next month, where would you go?"]
    },
    {
      id: "cafe",
      title: "At a caf\xE9",
      role: "A role play: you are a friendly barista in a small caf\xE9, and the learner is a customer. Stay in the role to the end.",
      leads: true,
      plan: "Take the order step by step: what they would like, the size or other details, here or to go, anything to eat, then the price and how they pay, and wish them a nice day. If they talk about something else, answer as a barista would and come back to the order.",
      openers: ["Hi, welcome in! What can I get for you today?", "Good morning! Are you having it here or to go?"]
    },
    {
      id: "interview",
      title: "Job interview",
      role: "A role play: you interview the learner for a job they want. Stay in the role to the end: kind, professional, and interested in their answers.",
      leads: true,
      plan: "Ask one question at a time and never ask one twice. Find out which job it is first, if they have not said. Then go through their experience, a strength, a problem they solved, why they want this job, and whether they have questions for you. After about six questions, tell them in two or three sentences how the interview went: what came across well and what to say more about next time. Speak about what they said, never about their grammar.",
      openers: ["Thanks for coming in today. Could you tell me a little about yourself?", "Nice to meet you. What made you apply for this job?"]
    },
    {
      id: "work",
      title: "My work",
      role: "This talk is about the learner's work or studies.",
      plan: "Ask what they do, what they are working on and what is hard about it, one thing at a time. Share what you know about their field, and ask about the details.",
      openers: ["What do you do for work, or what are you studying?", "What are you working on these days?"]
    }
  ];

  // src/webview/dom.ts
  function el(tag, attrs = {}, ...children) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
      if (value === void 0 || value === false) continue;
      if (typeof value === "function") {
        node.addEventListener(key.slice(2).toLowerCase(), value);
      } else if (key === "class") {
        node.className = String(value);
      } else {
        node.setAttribute(key, value === true ? "" : String(value));
      }
    }
    for (const child of children) {
      if (child === null || child === void 0 || child === false) continue;
      node.append(typeof child === "string" ? document.createTextNode(child) : child);
    }
    return node;
  }
  function icon(name, extra = "") {
    return el("i", { class: `codicon codicon-${name}${extra ? " " + extra : ""}`, "aria-hidden": "true" });
  }
  function dwmFlag() {
    document.documentElement.classList.toggle("dwm", new URLSearchParams(location.search).get("frame") === "dwm");
  }
  function html(markup) {
    const template = document.createElement("template");
    template.innerHTML = markup;
    return template.content;
  }

  // src/webview/brand.ts
  function tile(px) {
    const svg = html(
      `<svg class="tile" width="${px}" height="${px}" viewBox="0 0 256 256" aria-hidden="true"><rect x="16" y="16" width="224" height="224" rx="52" fill="#141414"/><g transform="translate(-4 -2)" fill="none" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"><path stroke="#FFFFFF" d="M118 58C92 58 84 68 84 88V96C84 108 78 114 62 114C78 114 84 120 84 132V174C84 194 92 202 118 202"/><path stroke="#FFD60A" d="M166 86L202 114L166 142"/></g><circle cx="132" cy="96" r="13" fill="#FFFFFF"/></svg>`
    ).firstElementChild;
    return svg;
  }

  // src/webview/glyphs.ts
  var GLYPHS = {
    play: '<path class="f" d="M5 3.2v9.6c0 .5.5.8.9.5l7-4.8a.6.6 0 0 0 0-1L5.9 2.7c-.4-.3-.9 0-.9.5z"/>',
    stop: '<rect class="f" x="3.5" y="3.5" width="9" height="9" rx="1.8"/>',
    prev: '<path d="M3.5 3.5v9"/><path class="f" d="M12.5 3.6v8.8c0 .4-.5.7-.8.4L6 8.4a.5.5 0 0 1 0-.8l5.7-4.4c.3-.3.8 0 .8.4z"/>',
    next: '<path d="M12.5 3.5v9"/><path class="f" d="M3.5 3.6v8.8c0 .4.5.7.8.4L10 8.4a.5.5 0 0 0 0-.8L4.3 3.2c-.3-.3-.8 0-.8.4z"/>',
    pin: '<path d="M6 2.5h4M7 2.5v3.8L4.5 9h7L9 6.3V2.5M8 9v4.5"/>',
    close: '<path d="M4 4l8 8M12 4l-8 8"/>',
    minimize: '<path d="M4 8h8"/>',
    maximize: '<rect x="3.5" y="3.5" width="9" height="9" rx="1.5"/>',
    restore: '<rect x="3.5" y="5.5" width="7" height="7" rx="1.5"/><path d="M6 3.5h5a1.5 1.5 0 0 1 1.5 1.5v5"/>'
  };
  function glyph(name) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "glyph");
    svg.setAttribute("viewBox", "0 0 16 16");
    svg.setAttribute("aria-hidden", "true");
    svg.dataset.shape = name;
    svg.innerHTML = GLYPHS[name];
    return svg;
  }

  // src/webview/hover.ts
  var HIGHLIGHT = "tutor-hover";
  var HIDE_DELAY_MS = 180;
  var WORD = /[A-Za-z'’]/;
  var PASSING = /* @__PURE__ */ new Set(["downloading", "download-failed"]);
  function highlights() {
    return globalThis.CSS?.highlights;
  }
  function caretAt(x, y) {
    const doc = document;
    const p = doc.caretPositionFromPoint?.(x, y);
    if (p) return { node: p.offsetNode, offset: p.offset };
    const r = doc.caretRangeFromPoint?.(x, y);
    return r ? { node: r.startContainer, offset: r.startOffset } : void 0;
  }
  function wordAtPoint(x, y) {
    const caret = caretAt(x, y);
    if (!caret || caret.node.nodeType !== Node.TEXT_NODE) return void 0;
    const parent = caret.node.parentElement;
    if (!parent?.closest("[data-words]") || parent.closest("pre, code, button, .word-card")) return void 0;
    const text = caret.node.data;
    let start = caret.offset;
    if (!WORD.test(text[start] ?? "") && WORD.test(text[start - 1] ?? "")) start -= 1;
    if (!WORD.test(text[start] ?? "")) return void 0;
    let end = start;
    while (start > 0 && WORD.test(text[start - 1] ?? "")) start--;
    while (end < text.length && WORD.test(text[end] ?? "")) end++;
    while (start < end && /['’]/.test(text[start] ?? "")) start++;
    while (end > start && /['’]/.test(text[end - 1] ?? "")) end--;
    if (end - start < 2) return void 0;
    const range = document.createRange();
    range.setStart(caret.node, start);
    range.setEnd(caret.node, end);
    const rect = range.getBoundingClientRect();
    const slack = 2;
    if (x < rect.left - slack || x > rect.right + slack || y < rect.top - slack || y > rect.bottom + slack) return void 0;
    return { word: text.slice(start, end), range, rect };
  }
  var WordHover = class {
    constructor(options) {
      this.options = options;
      this.card = el("div", { class: "word-card", role: "tooltip", hidden: true });
      options.host.append(this.card);
      options.area.addEventListener("pointermove", (event) => this.onMove(event), { passive: true });
      options.area.addEventListener("pointerleave", () => {
        if (!this.clicked) this.scheduleHide();
      });
      window.addEventListener("scroll", () => this.hide(), { passive: true });
      window.addEventListener("blur", () => this.hide());
      window.addEventListener("keydown", (event) => {
        if (event.key !== "Shift" || event.repeat || !this.lastPoint) return;
        this.lastPoint = { ...this.lastPoint, shift: true };
        this.probe(this.lastPoint);
      });
      window.addEventListener("keyup", (event) => {
        if (event.key !== "Shift") return;
        if (this.lastPoint) this.lastPoint = { ...this.lastPoint, shift: false };
        if (this.options.mode() === "shift" && !this.clicked) this.hide();
      });
    }
    card;
    current;
    answers = /* @__PURE__ */ new Map();
    hideTimer;
    frame = 0;
    lastPoint;
    /** The card was opened by a click: it stays until a click elsewhere, a scroll or another word, and takes clicks itself. */
    clicked = false;
    /** Whether a word is in the notebook, and how it is said, by the word in lower case. */
    saved = /* @__PURE__ */ new Map();
    ipa = /* @__PURE__ */ new Map();
    /** A click at a point: the card for the word there, or none; true when there is a word. */
    showAt(x, y) {
      const hit = this.options.mode() === "off" ? void 0 : wordAtPoint(x, y);
      if (!hit) {
        this.hide();
        return false;
      }
      this.clicked = true;
      this.show(hit);
      return true;
    }
    /** An answer from the dictionary; shown when it is for the word under the pointer. */
    onGloss(answer) {
      const key = answer.word.toLowerCase();
      this.answers.set(key, answer);
      if (answer.saved !== void 0) this.saved.set(key, answer.saved);
      if (this.current && this.current.word.toLowerCase() === key) this.render();
      if (answer.missing && PASSING.has(answer.missing)) this.answers.delete(key);
    }
    /** How the word is said, from the natural voice's phonemizer. */
    onIpa(word, ipa) {
      const key = word.toLowerCase();
      this.ipa.set(key, ipa);
      if (this.current?.word.toLowerCase() === key) this.render();
    }
    /** The word went into the notebook, or left it. */
    onSaved(word, saved) {
      const key = word.toLowerCase();
      this.saved.set(key, saved);
      if (this.current?.word.toLowerCase() === key) this.render();
    }
    /** The language pair changed, or a dictionary arrived: earlier answers no longer hold. */
    forget() {
      this.answers.clear();
      const word = this.current?.word;
      if (!word) return;
      this.answers.set(word.toLowerCase(), "pending");
      this.options.post({ type: "lookup", word });
      this.render();
    }
    /** The sentence a word was met in: the sentence span around it (`span.s`, `span.t`), or the field's sentence. */
    sentenceOf(hit) {
      const span = hit.range.startContainer.parentElement?.closest("span.s, span.t")?.textContent;
      return (span ?? this.options.sentenceAt?.(hit.range) ?? "").trim();
    }
    /** Drops the card when the text it points at was redrawn. */
    refresh() {
      if (this.current && !this.current.range.startContainer.isConnected) this.hide();
    }
    hide() {
      this.cancelHide();
      this.clicked = false;
      this.current = void 0;
      this.card.hidden = true;
      highlights()?.delete(HIGHLIGHT);
    }
    onMove(event) {
      if (event.pointerType === "touch") return;
      this.lastPoint = { x: event.clientX, y: event.clientY, shift: event.shiftKey };
      if (this.frame) return;
      this.frame = requestAnimationFrame(() => {
        this.frame = 0;
        if (this.lastPoint) this.probe(this.lastPoint);
      });
    }
    probe(point) {
      const mode = this.options.mode();
      if (mode === "off" || mode === "shift" && !point.shift) {
        if (!this.clicked) this.hide();
        return;
      }
      const hit = wordAtPoint(point.x, point.y);
      if (!hit) {
        if (!this.clicked) this.scheduleHide();
        return;
      }
      this.clicked = false;
      this.show(hit);
    }
    show(hit) {
      this.cancelHide();
      const same = this.current && this.current.range.startContainer === hit.range.startContainer && this.current.range.startOffset === hit.range.startOffset;
      if (same) return this.render();
      this.current = hit;
      const registry3 = highlights();
      const HighlightCtor = globalThis.Highlight;
      if (registry3 && HighlightCtor) registry3.set(HIGHLIGHT, new HighlightCtor(hit.range));
      const key = hit.word.toLowerCase();
      if (!this.answers.has(key)) {
        this.answers.set(key, "pending");
        this.options.post({ type: "lookup", word: hit.word });
      }
      this.render();
    }
    render() {
      const hit = this.current;
      if (!hit) return;
      const answer = this.answers.get(hit.word.toLowerCase());
      const gloss = answer && answer !== "pending" ? answer.gloss : void 0;
      const lower = hit.word.toLowerCase();
      const leadsWithBase = gloss && gloss.base !== lower;
      const ipa = this.ipa.get(lower);
      const saved = this.saved.get(lower) === true;
      const head = el(
        "div",
        { class: "wc-head" },
        el("span", { class: "wc-word" }, leadsWithBase ? gloss.base : hit.word),
        leadsWithBase ? el("span", { class: "wc-form" }, t("word.from", { word: hit.word })) : null,
        ipa ? el("span", { class: "wc-ipa" }, `/${ipa}/`) : null,
        this.clicked ? el("span", { class: "grow" }) : null,
        this.clicked ? el("button", { class: "icon-btn", title: t("word.say"), "aria-label": t("word.say"), onclick: () => this.options.speak(hit.word) }, icon("unmute")) : null,
        this.clicked ? el(
          "button",
          {
            class: "icon-btn",
            "aria-pressed": String(saved),
            title: saved ? t("word.remove") : t("word.save"),
            "aria-label": saved ? t("word.remove") : t("word.save"),
            onclick: () => this.toggleSaved(hit, saved)
          },
          icon(saved ? "star-full" : "star-empty")
        ) : null
      );
      const sense = ([pos, translations]) => el("div", { class: "wc-sense" }, el("span", { class: "wc-pos" }, pos), ` ${translations}`);
      let body;
      if (!answer || answer === "pending") body = [el("div", { class: "wc-note" }, "\u2026")];
      else if (answer.missing && answer.missing !== "not-found") body = [el("div", { class: "wc-note" }, this.note(answer.missing))];
      else if (!gloss) body = [el("div", { class: "wc-note" }, t("word.notFound"))];
      else
        body = gloss.entries.flatMap(
          (entry, i) => i === 0 ? entry.senses.map(sense) : [el("div", { class: "wc-also" }, entry.form), ...entry.senses.map(sense)]
        );
      this.card.replaceChildren(head, ...body);
      this.card.classList.toggle("clicked", this.clicked);
      this.card.hidden = false;
      this.place(hit.rect);
    }
    toggleSaved(hit, saved) {
      if (saved) this.options.post({ type: "unsaveWord", word: hit.word });
      else this.options.post({ type: "saveWord", word: hit.word, sentence: this.sentenceOf(hit) });
    }
    note(missing) {
      const pair = t("word.pair", { lang: this.options.nativeName() });
      switch (missing) {
        case "not-english":
          return t("word.notEnglish", { lang: this.options.nativeName() });
        case "no-dictionary":
          return t("word.noDictionary", { pair });
        case "downloading":
          return t("word.downloading", { pair });
        case "download-failed":
          return t("word.failed", { pair });
        case "download-off":
          return t("word.off", { pair });
        default:
          return "";
      }
    }
    /**
     * Above the word, over lines already read, so the next words stay free to
     * hover; below it only when there is no room above (under the header).
     */
    place(rect) {
      const card = this.card;
      const width = Math.min(300, window.innerWidth - 16);
      card.style.width = `${width}px`;
      const left = Math.max(8, Math.min(rect.left - 8, window.innerWidth - width - 8));
      card.style.left = `${left}px`;
      const height = card.offsetHeight;
      const headerBottom = this.options.ceiling?.() ?? document.querySelector(".bar")?.getBoundingClientRect().bottom ?? 0;
      const above = rect.top - height - 6;
      card.style.top = `${above >= headerBottom + 4 ? above : rect.bottom + 6}px`;
    }
    scheduleHide() {
      if (this.hideTimer !== void 0 || !this.current) return;
      this.hideTimer = window.setTimeout(() => {
        this.hideTimer = void 0;
        this.hide();
      }, HIDE_DELAY_MS);
    }
    cancelHide() {
      if (this.hideTimer !== void 0) window.clearTimeout(this.hideTimer);
      this.hideTimer = void 0;
    }
  };

  // src/hotkey.ts
  function hotkeyLabel(hotkey) {
    const name = (mod) => mod === "Control" ? "Ctrl" : mod === "Super" ? "Win" : mod;
    return hotkey.split("+").map((part) => {
      const [key, times] = part.split("*");
      const side = /^(Left|Right)(Control|Shift|Alt|Super)$/.exec(key ?? "");
      if (side) return `${side[1]} ${name(side[2])}${times === "2" ? " twice" : ""}`;
      if (part === "CapsLock") return "Caps Lock";
      if (part === "ScrollLock") return "Scroll Lock";
      if (part === "MouseBack") return "Mouse Back";
      if (part === "MouseForward") return "Mouse Forward";
      if (part === "CommandOrControl" || part === "CmdOrCtrl") return "Ctrl";
      return name(part);
    }).join("+");
  }

  // src/webview/keycaps.ts
  function caps(hotkey, chain) {
    const attrs = chain ? { class: "kg", "data-chain": chain } : { class: "kg" };
    if (!hotkey) return el("span", attrs, el("span", { class: "key none" }, "not set"));
    const twice = hotkey.endsWith("*2");
    const parts = hotkey.replace(/\*2$/, "").split("+");
    return el("span", attrs, ...parts.map((part) => el("span", { class: "key" }, hotkeyLabel(part))), twice ? el("span", { class: "x2" }, "\xD72") : null);
  }

  // src/webview/lucide.ts
  var LUCIDE = {
    "volume-2": '<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" /> <path d="M16 9a5 5 0 0 1 0 6" /> <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />',
    "languages": '<path d="m5 8 6 6" /> <path d="m4 14 6-6 2-3" /> <path d="M2 5h12" /> <path d="M7 2h1" /> <path d="m22 22-5-10-5 10" /> <path d="M14 18h6" />',
    "graduation-cap": '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /> <path d="M22 10v6" /> <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />',
    "scan": '<path d="M3 7V5a2 2 0 0 1 2-2h2" /> <path d="M17 3h2a2 2 0 0 1 2 2v2" /> <path d="M21 17v2a2 2 0 0 1-2 2h-2" /> <path d="M7 21H5a2 2 0 0 1-2-2v-2" />',
    "mic": '<path d="M12 19v3" /> <path d="M19 10v2a7 7 0 0 1-14 0v-2" /> <rect x="9" y="2" width="6" height="13" rx="3" />',
    "audio-lines": '<path d="M2 10v3" /> <path d="M6 6v11" /> <path d="M10 3v18" /> <path d="M14 8v7" /> <path d="M18 5v13" /> <path d="M22 10v3" />',
    "keyboard": '<path d="M10 8h.01" /> <path d="M12 12h.01" /> <path d="M14 8h.01" /> <path d="M16 12h.01" /> <path d="M18 8h.01" /> <path d="M6 8h.01" /> <path d="M7 16h10" /> <path d="M8 12h.01" /> <rect width="20" height="16" x="2" y="4" rx="2" />',
    "file-text": '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M10 9H8" /> <path d="M16 13H8" /> <path d="M16 17H8" />',
    "notebook-pen": '<path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" /> <path d="M2 6h4" /> <path d="M2 10h4" /> <path d="M2 14h4" /> <path d="M2 18h4" /> <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />',
    "book-open": '<path d="M12 5v16" /> <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" />',
    "list-checks": '<path d="M13 5h8" /> <path d="M13 12h8" /> <path d="M13 19h8" /> <path d="m3 17 2 2 4-4" /> <path d="m3 7 2 2 4-4" />',
    "house": '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /> <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />',
    "info": '<circle cx="12" cy="12" r="10" /> <path d="M12 16v-4" /> <path d="M12 8h.01" />',
    "settings": '<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" /> <circle cx="12" cy="12" r="3" />',
    "bird": '<path d="M16 7h.01" /> <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" /> <path d="m20 7 2 .5-2 .5" /> <path d="M10 18v3" /> <path d="M14 17.75V21" /> <path d="M7 18a6 6 0 0 0 3.84-10.61" />',
    "send-horizontal": '<path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" /> <path d="M6 12h16" />',
    "mic-off": '<path d="M12 19v3" /> <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" /> <path d="M16.95 16.95A7 7 0 0 1 5 12v-2" /> <path d="M18.89 13.23A7 7 0 0 0 19 12v-2" /> <path d="m2 2 20 20" /> <path d="M9 9v3a3 3 0 0 0 5.12 2.12" />',
    "pin": '<path d="M12 17v5" /> <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />',
    "square-pen": '<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /> <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />',
    "history": '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /> <path d="M3 3v5h5" /> <path d="M12 7v5l4 2" />',
    "list-ordered": '<path d="M11 5h10" /> <path d="M11 12h10" /> <path d="M11 19h10" /> <path d="M4 4h1v5" /> <path d="M4 9h2" /> <path d="M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02" />',
    "message-square-text": '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /> <path d="M7 11h10" /> <path d="M7 15h6" /> <path d="M7 7h8" />',
    "arrow-left": '<path d="m12 19-7-7 7-7" /> <path d="M19 12H5" />',
    "bug": '<path d="M12 20v-9" /> <path d="M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z" /> <path d="M14.12 3.88 16 2" /> <path d="M21 21a4 4 0 0 0-3.81-4" /> <path d="M21 5a4 4 0 0 1-3.55 3.97" /> <path d="M22 13h-4" /> <path d="M3 21a4 4 0 0 1 3.81-4" /> <path d="M3 5a4 4 0 0 0 3.55 3.97" /> <path d="M6 13H2" /> <path d="m8 2 1.88 1.88" /> <path d="M9 7.13V6a3 3 0 1 1 6 0v1.13" />',
    "file-audio": '<path d="M4 6.835V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-.343" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <path d="M2 19a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 0 1-4 0v-1a2 2 0 0 1 4 0" />',
    "users": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /> <path d="M16 3.128a4 4 0 0 1 0 7.744" /> <path d="M22 21v-2a4 4 0 0 0-3-3.87" /> <circle cx="9" cy="7" r="4" />',
    "spell-check": '<path d="m20 15-5.5 5.5L12 18" /> <path d="m4 16 6-12 5.115 10.23" /> <path d="M6 12h8" />',
    "video": '<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" /> <rect x="2" y="6" width="14" height="12" rx="2" />',
    "cpu": '<path d="M12 20v2" /> <path d="M12 2v2" /> <path d="M17 20v2" /> <path d="M17 2v2" /> <path d="M2 12h2" /> <path d="M2 17h2" /> <path d="M2 7h2" /> <path d="M20 12h2" /> <path d="M20 17h2" /> <path d="M20 7h2" /> <path d="M7 20v2" /> <path d="M7 2v2" /> <rect x="4" y="4" width="16" height="16" rx="2" /> <rect x="8" y="8" width="8" height="8" rx="1" />',
    "folder": '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />',
    "copy": '<rect width="14" height="14" x="8" y="8" rx="2" ry="2" /> <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />',
    "external-link": '<path d="M15 3h6v6" /> <path d="M10 14 21 3" /> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />',
    "rotate-cw": '<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" /> <path d="M21 3v5h-5" />',
    "rotate-ccw": '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /> <path d="M3 3v5h5" />',
    "database": '<ellipse cx="12" cy="5" rx="9" ry="3" /> <path d="M3 5V19A9 3 0 0 0 21 19V5" /> <path d="M3 12A9 3 0 0 0 21 12" />',
    "play": '<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />',
    "pause": '<rect x="14" y="3" width="5" height="18" rx="1" /> <rect x="5" y="3" width="5" height="18" rx="1" />',
    "power": '<path d="M12 2v10" /> <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />',
    "list": '<path d="M3 5h.01" /> <path d="M3 12h.01" /> <path d="M3 19h.01" /> <path d="M8 5h13" /> <path d="M8 12h13" /> <path d="M8 19h13" />',
    "monitor": '<rect width="20" height="14" x="2" y="3" rx="2" /> <line x1="8" x2="16" y1="21" y2="21" /> <line x1="12" x2="12" y1="17" y2="21" />',
    "clock": '<circle cx="12" cy="12" r="10" /> <path d="M12 6v6l4 2" />',
    "lock": '<rect width="18" height="11" x="3" y="11" rx="2" ry="2" /> <path d="M7 11V7a5 5 0 0 1 10 0v4" />',
    "download": '<path d="M12 15V3" /> <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /> <path d="m7 10 5 5 5-5" />',
    "globe": '<circle cx="12" cy="12" r="10" /> <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /> <path d="M2 12h20" />',
    "type": '<path d="M12 4v16" /> <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" /> <path d="M9 20h6" />',
    "message-square": '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />',
    "star": '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />',
    "search": '<path d="m21 21-4.34-4.34" /> <circle cx="11" cy="11" r="8" />',
    "trash-2": '<path d="M10 11v6" /> <path d="M14 11v6" /> <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /> <path d="M3 6h18" /> <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />',
    "circle-alert": '<circle cx="12" cy="12" r="10" /> <line x1="12" x2="12" y1="8" y2="12" /> <line x1="12" x2="12.01" y1="16" y2="16" />',
    "circle-check": '<circle cx="12" cy="12" r="10" /> <path d="m16 9-5.5 5.5L8 12" />',
    "check": '<path d="M20 6 9 17l-5-5" />',
    "link": '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /> <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />',
    "memory-stick": '<path d="M12 12v-2" /> <path d="M12 18v-2" /> <path d="M16 12v-2" /> <path d="M16 18v-2" /> <path d="M2 11h1.5" /> <path d="M20 18v-2" /> <path d="M20.5 11H22" /> <path d="M4 18v-2" /> <path d="M8 12v-2" /> <path d="M8 18v-2" /> <rect x="2" y="6" width="20" height="10" rx="2" />',
    "hard-drive": '<path d="M10 16h.01" /> <path d="M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /> <path d="M21.946 12.013H2.054" /> <path d="M6 16h.01" />',
    "boxes": '<path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" /> <path d="m7 16.5-4.74-2.85" /> <path d="m7 16.5 5-3" /> <path d="M7 16.5v5.17" /> <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" /> <path d="m17 16.5-5-3" /> <path d="m17 16.5 4.74-2.85" /> <path d="M17 16.5v5.17" /> <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" /> <path d="M12 8 7.26 5.15" /> <path d="m12 8 4.74-2.85" /> <path d="M12 13.5V8" />',
    "laptop": '<path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z" /> <path d="M20.054 15.987H3.946" />',
    "sparkles": '<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" /> <path d="M20 2v4" /> <path d="M22 4h-4" /> <circle cx="4" cy="20" r="2" />',
    "wand-sparkles": '<path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" /> <path d="m14 7 3 3" /> <path d="M5 6v4" /> <path d="M19 14v4" /> <path d="M10 2v2" /> <path d="M7 8H3" /> <path d="M21 16h-4" /> <path d="M11 3H9" />',
    "thumbs-up": '<path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" /> <path d="M7 10v12" />',
    "loader": '<path d="M12 2v4" /> <path d="m16.2 7.8 2.9-2.9" /> <path d="M18 12h4" /> <path d="m16.2 16.2 2.9 2.9" /> <path d="M12 18v4" /> <path d="m4.9 19.1 2.9-2.9" /> <path d="M2 12h4" /> <path d="m4.9 4.9 2.9 2.9" />',
    "mail": '<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /> <rect x="2" y="4" width="20" height="16" rx="2" />',
    "shield-check": '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /> <path d="m9 12 2 2 4-4" />',
    "pencil-line": '<path d="M13 21h8" /> <path d="m15 5 4 4" /> <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />',
    "monitor-speaker": '<path d="M5.5 20H8" /> <path d="M17 9h.01" /> <rect width="10" height="16" x="12" y="4" rx="2" /> <path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" /> <circle cx="17" cy="15" r="1" />',
    "scan-text": '<path d="M3 7V5a2 2 0 0 1 2-2h2" /> <path d="M17 3h2a2 2 0 0 1 2 2v2" /> <path d="M21 17v2a2 2 0 0 1-2 2h-2" /> <path d="M7 21H5a2 2 0 0 1-2-2v-2" /> <path d="M7 8h8" /> <path d="M7 12h10" /> <path d="M7 16h6" />',
    "text-cursor": '<path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" /> <path d="M7 22h1a4 4 0 0 0 4-4" /> <path d="M7 2h1a4 4 0 0 1 4 4" />',
    "panel-bottom": '<rect width="18" height="18" x="3" y="3" rx="2" /> <path d="M3 15h18" />',
    "plus": '<path d="M5 12h14" /> <path d="M12 5v14" />',
    "x": '<path d="M18 6 6 18" /> <path d="m6 6 12 12" />',
    "minus": '<path d="M5 12h14" />',
    "square": '<rect width="18" height="18" x="3" y="3" rx="2" />',
    "chevron-right": '<path d="m9 18 6-6-6-6" />',
    "chevron-left": '<path d="m15 18-6-6 6-6" />',
    "chevron-down": '<path d="m6 9 6 6 6-6" />',
    "arrow-up": '<path d="m5 12 7-7 7 7" /> <path d="M12 19V5" />',
    "arrow-down": '<path d="M12 5v14" /> <path d="m19 12-7 7-7-7" />'
  };
  function lucide(name, cls = "") {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", cls ? `lu ${cls}` : "lu");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.innerHTML = LUCIDE[name];
    return svg;
  }

  // src/kokoro.ts
  var SAMPLE_RATE = 24e3;
  var PUNCTUATION = new Set(';:,.!?\xA1\xBF\u2014\u2026"\xAB\xBB\u201C\u201D(){}[]');

  // src/textmap.ts
  function wordAt(text, index, length = 0) {
    if (index < 0 || index >= text.length) return void 0;
    let start = index;
    while (start > 0 && isWordChar(text[start - 1] ?? "")) start--;
    let end = length > 0 ? index + length : index;
    while (end < text.length && isWordChar(text[end] ?? "")) end++;
    if (end <= start) return void 0;
    return { start, end };
  }
  function isWordChar(c) {
    return /[\p{L}\p{N}'’_-]/u.test(c);
  }
  function locate(lengths, start, end) {
    const spans = [];
    let offset = 0;
    lengths.forEach((len, node) => {
      const nodeStart = offset;
      const nodeEnd = offset + len;
      offset = nodeEnd;
      const s = Math.max(start, nodeStart);
      const e = Math.min(end, nodeEnd);
      if (e > s) spans.push({ node, start: s - nodeStart, end: e - nodeStart });
    });
    return spans;
  }
  function itemAt(itemLengths, separator, pos) {
    let start = 0;
    for (let i = 0; i < itemLengths.length; i++) {
      const len = itemLengths[i] ?? 0;
      if (pos >= start && pos < start + len) return { item: i, offset: pos - start };
      start += len + separator;
    }
    return void 0;
  }

  // src/webview/player.ts
  var SEPARATOR = "\n\n";
  var WORD_HIGHLIGHT = "tutor-word";
  var FOLLOW_MS = 40;
  function textItem(el2) {
    const nodes = [];
    const walker = document.createTreeWalker(el2, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => node.parentElement?.closest(".tr, button, .codicon") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    });
    for (let n = walker.nextNode(); n; n = walker.nextNode()) nodes.push(n);
    const lengths = nodes.map((n) => n.data.length);
    return { el: el2, text: nodes.map((n) => n.data).join(""), nodes, lengths };
  }
  function registry() {
    const css = globalThis.CSS;
    return css?.highlights;
  }
  function clearWord() {
    registry()?.delete(WORD_HIGHLIGHT);
  }
  var Player = class {
    constructor(post2, env, onChange) {
      this.post = post2;
      this.env = env;
      this.onChange = onChange;
    }
    key = null;
    items = [];
    index = -1;
    follow = false;
    route = null;
    hostId = 0;
    utterance;
    // The natural voice: sentences that arrived and wait their turn, those queued in the audio output.
    audio;
    arrived = /* @__PURE__ */ new Map();
    scheduled = [];
    nextIndex = 0;
    endAt = 0;
    follower;
    lastWord = "";
    ahead = [];
    /**
     * Starts reading `els`; returns false when there is nothing to read or no
     * voice to read it with. `system` skips the natural voice; `ahead` are
     * made by the natural voice after `els` and kept, for a step forward.
     */
    play(key, els, options = {}) {
      this.stop();
      const items = els.map(textItem).filter((item) => item.text.trim().length > 0);
      if (items.length === 0) return false;
      this.ahead = (options.ahead ?? []).map((el2) => textItem(el2).text).filter((text) => text.trim().length > 0);
      const natural = options.system ? void 0 : this.env.natural();
      const audio = natural ? this.env.audio() : void 0;
      const voice = this.env.voice();
      if (natural && audio) this.route = "natural";
      else if (voice) this.route = "web";
      else if (this.env.hostCanSpeak()) this.route = "host";
      else return false;
      this.key = key;
      this.items = items;
      this.follow = options.follow ?? false;
      if (this.route === "natural" && natural && audio) this.speakNatural(natural, audio);
      else if (this.route === "web" && voice) this.speakWeb(0, voice);
      else this.speakHost();
      this.onChange();
      return true;
    }
    stop() {
      if (!this.key) return;
      const route = this.route;
      this.reset();
      if (route === "web") {
        this.utterance = void 0;
        window.speechSynthesis.cancel();
      }
      if (route === "host" || route === "natural") this.post({ type: "stop" });
      this.onChange();
    }
    onNaturalAudio(id, index, samples, words) {
      if (this.route !== "natural" || id !== this.hostId) return;
      this.arrived.set(index, { samples, words });
      this.queueArrived();
    }
    /** The natural voice failed: a system voice reads on from the sentence it had reached. */
    onNaturalFailed(id, message) {
      if (this.route !== "natural" || id !== this.hostId) return;
      const from = Math.max(0, this.index);
      const key = this.key;
      const els = this.items.slice(from).map((item) => item.el);
      const follow2 = this.follow;
      this.reset();
      this.env.naturalFailed(message);
      if (!key || !this.play(key, els, { follow: follow2, system: true })) this.onChange();
    }
    /** The reader scrolled by hand: stop keeping the spoken sentence in view. */
    userScrolled() {
      this.follow = false;
    }
    /** Whether `container` holds an element being read (its DOM is about to be replaced). */
    reads(container) {
      return this.items.some((item) => container.contains(item.el));
    }
    onHostProgress(id, pos, len) {
      if (this.route !== "host" || id !== this.hostId) return;
      const at = itemAt(
        this.items.map((item2) => item2.text.length),
        SEPARATOR.length,
        pos
      );
      if (!at) return;
      if (at.item !== this.index) this.enter(at.item);
      const item = this.items[at.item];
      if (item) this.highlight(item, at.offset, len);
    }
    onHostDone(id) {
      if (this.route === "host" && id === this.hostId) this.finish();
    }
    reset() {
      const current2 = this.items[this.index];
      current2?.el.classList.remove("speaking");
      clearWord();
      this.key = null;
      this.items = [];
      this.index = -1;
      this.route = null;
      for (const s of this.scheduled) {
        try {
          s.source.stop();
        } catch {
        }
      }
      this.scheduled = [];
      this.arrived.clear();
      window.clearInterval(this.follower);
      this.follower = void 0;
    }
    finish() {
      this.reset();
      this.utterance = void 0;
      this.env.finished?.();
      this.onChange();
    }
    enter(index) {
      this.items[this.index]?.el.classList.remove("speaking");
      clearWord();
      this.index = index;
      const item = this.items[index];
      if (!item) return;
      item.el.classList.add("speaking");
      this.env.entered?.(index);
      if (this.follow) {
        const rect = item.el.getBoundingClientRect();
        if (rect.top < 48 || rect.bottom > window.innerHeight - 24) item.el.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    }
    speakWeb(index, voice) {
      const item = this.items[index];
      if (!item) {
        this.finish();
        return;
      }
      this.enter(index);
      const u = new SpeechSynthesisUtterance(item.text);
      u.voice = voice;
      u.lang = voice.lang;
      u.rate = this.env.rate();
      u.onboundary = (event) => {
        if (this.utterance !== u) return;
        if (event.name && event.name !== "word") return;
        this.highlight(item, event.charIndex, event.charLength ?? 0);
      };
      u.onend = () => {
        if (this.utterance === u) this.speakWeb(index + 1, voice);
      };
      u.onerror = () => {
        if (this.utterance === u) this.finish();
      };
      this.utterance = u;
      window.speechSynthesis.speak(u);
    }
    speakNatural(voice, audio) {
      this.hostId += 1;
      this.audio = audio;
      this.nextIndex = 0;
      this.endAt = 0;
      this.lastWord = "";
      if (audio.state === "suspended") void audio.resume();
      this.enter(0);
      this.post({ type: "speakNatural", id: this.hostId, items: this.items.map((item) => item.text), voice, rate: this.env.rate(), ahead: this.ahead });
      this.follower = window.setInterval(() => this.followAudio(), FOLLOW_MS);
    }
    /** Queues the sentences that arrived, in order, each starting where the one before ends. */
    queueArrived() {
      const audio = this.audio;
      if (!audio) return;
      for (let next = this.arrived.get(this.nextIndex); next; next = this.arrived.get(this.nextIndex)) {
        this.arrived.delete(this.nextIndex);
        const buffer = audio.createBuffer(1, Math.max(1, next.samples.length), SAMPLE_RATE);
        buffer.copyToChannel(next.samples, 0);
        const source = audio.createBufferSource();
        source.buffer = buffer;
        source.connect(audio.destination);
        const at = Math.max(audio.currentTime + 0.05, this.endAt);
        source.start(at);
        this.scheduled.push({ index: this.nextIndex, at, end: at + buffer.duration, words: next.words, source });
        this.endAt = at + buffer.duration;
        this.nextIndex += 1;
      }
    }
    /** Moves the highlight with the audio, tells the host which sentence plays, and ends after the last one. */
    followAudio() {
      const audio = this.audio;
      if (this.route !== "natural" || !audio) return;
      const t2 = audio.currentTime;
      const current2 = this.scheduled.find((s) => t2 >= s.at && t2 < s.end);
      if (current2) {
        if (current2.index !== this.index) {
          this.enter(current2.index);
          this.post({ type: "naturalAt", id: this.hostId, index: current2.index });
        }
        const item = this.items[current2.index];
        const word = current2.words.find((w) => t2 - current2.at >= w.at && t2 - current2.at < w.until);
        const mark = word ? `${current2.index}:${word.start}` : "";
        if (word && item && mark !== this.lastWord) {
          this.lastWord = mark;
          this.highlight(item, word.start, word.length);
        }
      } else if (this.nextIndex >= this.items.length && t2 >= this.endAt) {
        this.finish();
      }
    }
    speakHost() {
      this.hostId += 1;
      this.enter(0);
      this.post({
        type: "speak",
        id: this.hostId,
        items: this.items.map((item) => item.text),
        lang: this.env.lang(),
        separator: SEPARATOR
      });
    }
    highlight(item, index, length) {
      const reg = registry();
      const HighlightCtor = globalThis.Highlight;
      if (!reg || !HighlightCtor) return;
      const word = wordAt(item.text, index, length);
      if (!word) return;
      const pieces = locate(item.lengths, word.start, word.end);
      const first = pieces[0];
      const last = pieces[pieces.length - 1];
      if (!first || !last) return;
      const startNode = item.nodes[first.node];
      const endNode = item.nodes[last.node];
      if (!startNode || !endNode || !startNode.isConnected) return;
      const range = document.createRange();
      range.setStart(startNode, first.start);
      range.setEnd(endNode, last.end);
      reg.set(WORD_HIGHLIGHT, new HighlightCtor(range));
    }
  };

  // src/lemma.ts
  var IRREGULAR = {
    am: "be",
    is: "be",
    are: "be",
    was: "be",
    were: "be",
    been: "be",
    being: "be",
    has: "have",
    had: "have",
    having: "have",
    does: "do",
    did: "do",
    done: "do",
    went: "go",
    gone: "go",
    goes: "go",
    made: "make",
    said: "say",
    got: "get",
    gotten: "get",
    took: "take",
    taken: "take",
    came: "come",
    saw: "see",
    seen: "see",
    knew: "know",
    known: "know",
    thought: "think",
    told: "tell",
    found: "find",
    gave: "give",
    given: "give",
    left: "leave",
    felt: "feel",
    brought: "bring",
    began: "begin",
    begun: "begin",
    kept: "keep",
    held: "hold",
    wrote: "write",
    written: "write",
    stood: "stand",
    heard: "hear",
    meant: "mean",
    met: "meet",
    paid: "pay",
    sat: "sit",
    spoke: "speak",
    spoken: "speak",
    led: "lead",
    grew: "grow",
    grown: "grow",
    lost: "lose",
    fell: "fall",
    fallen: "fall",
    sent: "send",
    built: "build",
    understood: "understand",
    drew: "draw",
    drawn: "draw",
    broke: "break",
    broken: "break",
    spent: "spend",
    rose: "rise",
    risen: "rise",
    drove: "drive",
    driven: "drive",
    bought: "buy",
    wore: "wear",
    worn: "wear",
    chose: "choose",
    chosen: "choose",
    sought: "seek",
    threw: "throw",
    thrown: "throw",
    caught: "catch",
    dealt: "deal",
    won: "win",
    forgot: "forget",
    forgotten: "forget",
    sold: "sell",
    fought: "fight",
    taught: "teach",
    ate: "eat",
    eaten: "eat",
    slept: "sleep",
    hid: "hide",
    hidden: "hide",
    ran: "run",
    shown: "show",
    flew: "fly",
    flown: "fly",
    drank: "drink",
    drunk: "drink",
    sang: "sing",
    sung: "sing",
    swam: "swim",
    swum: "swim",
    rode: "ride",
    ridden: "ride",
    woke: "wake",
    woken: "wake",
    froze: "freeze",
    frozen: "freeze",
    stole: "steal",
    stolen: "steal",
    shook: "shake",
    shaken: "shake",
    bit: "bite",
    bitten: "bite",
    fed: "feed",
    fled: "flee",
    lent: "lend",
    lit: "light",
    bent: "bend",
    bound: "bind",
    bred: "breed",
    clung: "cling",
    crept: "creep",
    dug: "dig",
    hung: "hang",
    laid: "lay",
    lain: "lie",
    meant_: "mean",
    sped: "speed",
    spun: "spin",
    stuck: "stick",
    struck: "strike",
    swept: "sweep",
    swung: "swing",
    wept: "weep",
    wound: "wind",
    better: "good",
    best: "good",
    worse: "bad",
    worst: "bad",
    more: "much",
    most: "much",
    less: "little",
    least: "little",
    further: "far",
    farther: "far",
    children: "child",
    men: "man",
    women: "woman",
    people: "person",
    mice: "mouse",
    feet: "foot",
    teeth: "tooth",
    geese: "goose",
    indices: "index",
    matrices: "matrix",
    analyses: "analysis",
    criteria: "criterion",
    phenomena: "phenomenon",
    lives: "life",
    knives: "knife",
    wives: "wife",
    leaves: "leaf",
    halves: "half",
    selves: "self",
    shelves: "shelf",
    wolves: "wolf",
    thieves: "thief",
    its: "it",
    i: "I"
  };
  var VOWEL = /[aeiou]/;
  function undouble(stem) {
    const n = stem.length;
    if (n >= 3 && stem[n - 1] === stem[n - 2] && !VOWEL.test(stem[n - 1] ?? "") && !/[ls]/.test(stem[n - 1] ?? "")) {
      return stem.slice(0, -1);
    }
    return void 0;
  }
  function baseForms(raw) {
    const word = raw.toLowerCase().replace(/['’]s$/, "").replace(/['’]$/, "");
    const out = [word];
    const add = (w) => {
      if (w && w.length >= 2 && !out.includes(w)) out.push(w);
    };
    add(IRREGULAR[word]);
    if (word.endsWith("ies") && word.length > 4) add(word.slice(0, -3) + "y");
    if (word.endsWith("ied") && word.length > 4) add(word.slice(0, -3) + "y");
    if (word.endsWith("ying")) add(word.slice(0, -4) + "ie");
    if (word.endsWith("ier")) add(word.slice(0, -3) + "y");
    if (word.endsWith("iest")) add(word.slice(0, -4) + "y");
    for (const suffix of ["ing", "ed", "er", "est"]) {
      if (!word.endsWith(suffix) || word.length - suffix.length < 2) continue;
      const stem = word.slice(0, -suffix.length);
      add(undouble(stem));
      add(stem);
      add(stem + "e");
    }
    if (word.endsWith("es") && word.length > 3) {
      add(word.slice(0, -2));
      add(word.slice(0, -1));
    } else if (word.endsWith("s") && !word.endsWith("ss") && word.length > 3) {
      add(word.slice(0, -1));
    }
    if (word.endsWith("ly") && word.length > 4) {
      add(word.slice(0, -2));
      if (word.endsWith("ily")) add(word.slice(0, -3) + "y");
    }
    return out;
  }

  // src/webview/rare.ts
  var HIGHLIGHT2 = "rare-word";
  var WORD2 = /[A-Za-z][A-Za-z'’]*[A-Za-z]/g;
  function registry2() {
    return globalThis.CSS?.highlights;
  }
  function isRare(word, atStart, common2) {
    if (word.length < 3) return false;
    if (!atStart && /^[A-Z]/.test(word)) return false;
    if (/[A-Z]/.test(word.slice(1))) return false;
    return !baseForms(word).some((form) => common2.has(form));
  }
  var SENTENCE_END = /(?:[.!?…]["'”’»)\]]*\s+|\n\s*)$/;
  function rareSpans(text, common2, field2 = false) {
    const spans = [];
    for (const m of text.matchAll(WORD2)) {
      const atStart = /^\s*$/.test(text.slice(0, m.index)) || field2 && SENTENCE_END.test(text.slice(Math.max(0, m.index - 12), m.index));
      if (isRare(m[0], atStart, common2)) spans.push([m.index, m.index + m[0].length]);
    }
    return spans;
  }
  function markRare(containers, common2, on) {
    const reg = registry2();
    const HighlightCtor = globalThis.Highlight;
    if (!reg || !HighlightCtor) return;
    reg.delete(HIGHLIGHT2);
    if (!on || common2.size === 0) return;
    const ranges = [];
    for (const container of containers) {
      const sentences = [...container.querySelectorAll("span.s, span.t")];
      const field2 = sentences.length === 0;
      for (const part of field2 ? [container] : sentences) {
        const walker = document.createTreeWalker(part, NodeFilter.SHOW_TEXT);
        for (let node = walker.nextNode(); node; node = walker.nextNode()) {
          if (node.parentElement?.closest("del")) continue;
          const text = node.data;
          for (const [start, end] of rareSpans(text, common2, field2)) {
            const range = document.createRange();
            range.setStart(node, start);
            range.setEnd(node, end);
            ranges.push(range);
          }
        }
      }
    }
    if (ranges.length > 0) reg.set(HIGHLIGHT2, new HighlightCtor(...ranges));
  }

  // src/webview/recorder.ts
  async function microphone(close) {
    return navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: close, noiseSuppression: close, autoGainControl: true, channelCount: 1 } });
  }
  var RETRIES = 3;
  var STREAM_CHUNK = 4e3;
  var LEVEL_SPAN = 800;
  var LEVELS_KEPT = 60;
  var StreamRecorder = class {
    constructor(call, session, expected, onStatus) {
      this.call = call;
      this.session = session;
      this.expected = expected;
      this.onStatus = onStatus;
    }
    startedAt = 0;
    stream;
    context;
    kept = [];
    waiting = new Int16Array(STREAM_CHUNK);
    filled = 0;
    seq = 0;
    uploads = Promise.resolve();
    broken = false;
    loudness = 0;
    /** The sound's levels, one per 50 ms, not yet taken by the page. */
    heard = [];
    spanSum = 0;
    spanCount = 0;
    speech(method, route, body) {
      return this.call({ call: "speech", method, route, body });
    }
    async start() {
      this.stream = await microphone(true);
      this.startedAt = Date.now();
      this.context = new AudioContext({ sampleRate: 16e3 });
      await this.context.audioWorklet.addModule("pcm-worklet.js");
      const source = this.context.createMediaStreamSource(this.stream);
      const tap = new AudioWorkletNode(this.context, "pcm-tap");
      tap.port.onmessage = (event) => this.take(event.data);
      const mute = this.context.createGain();
      mute.gain.value = 0;
      source.connect(tap).connect(mute).connect(this.context.destination);
    }
    take(samples) {
      for (let i = 0; i < samples.length; i++) {
        const v = samples[i];
        this.spanSum += v * v;
        if (++this.spanCount === LEVEL_SPAN) {
          this.loudness = Math.min(1, Math.sqrt(this.spanSum / LEVEL_SPAN) * 4);
          this.heard.push(this.loudness);
          if (this.heard.length > LEVELS_KEPT) this.heard.shift();
          this.spanSum = 0;
          this.spanCount = 0;
        }
        this.waiting[this.filled++] = Math.max(-32768, Math.min(32767, Math.round(v * 32767)));
        if (this.filled === STREAM_CHUNK) {
          this.send(this.waiting);
          this.waiting = new Int16Array(STREAM_CHUNK);
          this.filled = 0;
        }
      }
    }
    send(chunk) {
      this.kept.push(chunk);
      const seq = this.seq++;
      this.uploads = this.uploads.then(async () => {
        if (this.broken) return;
        const bytes = new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength);
        for (let attempt = 0; attempt < RETRIES; attempt++) {
          const r = await this.speech("PUT", `/dictate/sessions/${this.session}/${seq}`, bytes);
          if (r.ok) return this.onStatus(r.data);
          if (r.status === 404) break;
          await new Promise((resolve) => setTimeout(resolve, 300 * (attempt + 1)));
        }
        this.broken = true;
      });
    }
    /** How loud the latest 50 ms were, 0…1. */
    level() {
      return this.loudness;
    }
    /** Every level since the last call, oldest first, one per 50 ms of sound: the wave misses none. */
    levels() {
      const taken = this.heard;
      this.heard = [];
      return taken;
    }
    get seconds() {
      return this.startedAt ? (Date.now() - this.startedAt) / 1e3 : 0;
    }
    /** Stops, sends the tail, and waits for the whole text. */
    async finish() {
      this.release();
      const tail = this.waiting.slice(0, this.filled);
      this.kept.push(tail);
      await this.uploads;
      if (!this.broken) {
        const r2 = await this.speech("POST", `/dictate/sessions/${this.session}/finish`, new Uint8Array(tail.buffer));
        if (r2.ok) return r2.data;
      }
      const all = new Int16Array(this.kept.reduce((n, c) => n + c.length, 0));
      let at = 0;
      for (const c of this.kept) all.set(c, at), at += c.length;
      const expected = this.expected.map(encodeURIComponent).join(",");
      const r = await this.speech("POST", `/dictate?language=auto&expected=${expected}&strict=1&format=pcm16`, new Uint8Array(all.buffer));
      if (!r.ok) throw new Error(r.error);
      return r.data;
    }
    async cancel() {
      this.release();
      this.broken = true;
      await this.speech("DELETE", `/dictate/sessions/${this.session}`);
    }
    release() {
      for (const track of this.stream?.getTracks() ?? []) track.stop();
      void this.context?.close();
      this.stream = void 0;
      this.context = void 0;
    }
  };
  function micTrouble(error) {
    const name = error instanceof DOMException ? error.name : "";
    if (name === "NotAllowedError") return t("mic.denied");
    if (name === "NotFoundError") return t("mic.none");
    if (name === "NotReadableError") return t("mic.busy");
    return error instanceof Error ? error.message : String(error);
  }

  // src/sentences.ts
  var SENTENCE_BREAK = /(?<=[.!?…])\s+(?=[\p{Lu}\p{Lo}\p{N}"'«„“(\[*_`])|(?<=[。！？])\s*(?=\S)|(?<=(?<![\p{L}\p{N}.])\p{L}{2,}[.!?])\s+(?=\p{Ll})/u;
  var ABBREVIATIONS = /(?<![\p{L}\p{N}])(e\.g|i\.e|etc|vs|cf|approx|incl|fig|vol|Mr|Mrs|Ms|Dr|No|St|т\.е|т\.д|т\.п|др|см|напр|прим|стр|рис|тыс|млн|млрд|руб|ул|г)\./gu;
  var DOT = "";
  function splitSentences(body) {
    const protectedBody = body.replace(ABBREVIATIONS, (m) => m.replace(/\./g, DOT));
    return protectedBody.split(SENTENCE_BREAK).map((s) => s.replace(new RegExp(DOT, "g"), ".").trim()).filter(Boolean);
  }

  // src/webview/marks.ts
  function withMarks(parts) {
    return parts.flatMap(
      (p, i) => p.kind === "same" ? [document.createTextNode(p.text)] : [el(p.kind, {}, p.text), ...p.kind === "del" && parts[i + 1]?.kind === "ins" ? [document.createTextNode(" ")] : []]
    );
  }

  // src/webview/turns.ts
  function duckTurn(turn, again) {
    const sentences = splitSentences(turn.text);
    const bubble = el("div", { class: "bubble", "data-words": "" }, ...(sentences.length ? sentences : [turn.text]).flatMap((s, i) => [i ? " " : "", el("span", { class: "s", "data-i": String(i) }, s)]));
    const button = again ? el("button", { class: "ib again", title: t("turn.again"), "aria-label": t("turn.again"), onclick: again }, lucide("volume-2")) : null;
    return el("div", { class: "turn duck", "data-id": String(turn.id) }, tile(28), bubble, button);
  }
  function myTurn(turn, hear) {
    const marked = !!turn.parts?.length;
    const line = el("span", { class: "said marks" }, ...marked ? withMarks(turn.parts) : [turn.text]);
    const under = turn.checking ? el("small", { class: "checking" }, lucide("loader", "s turning"), t("turn.checking")) : marked ? el("small", {}, turn.note || t("turn.setRight")) : null;
    const cls = marked ? "bubble fixed" : "bubble";
    const bubble = hear ? el("button", { class: cls, title: marked ? t("turn.hearRight") : t("turn.hear"), onclick: hear }, line, under) : el("div", { class: cls }, line, under);
    return el("div", { class: "turn me", "data-id": String(turn.id) }, bubble);
  }

  // src/webview/ui.ts
  var post = (message) => window.tutorHost.post(message);

  // src/webview/wave.ts
  var WAVE = 60;
  var STEP = 3;
  var BAR = 2;
  var Wave = class {
    canvas = el("canvas", { class: "wave" });
    levels = new Array(WAVE).fill(0);
    frame;
    /** New levels came in since the wave was last drawn. */
    fresh = true;
    /** How loud the next 50 ms were, 0…1. */
    hear(level) {
      this.levels.push(level);
      if (this.levels.length > WAVE) this.levels.shift();
      this.fresh = true;
    }
    /** Drawn at each frame from now on, flat to begin with: nothing of the last phrase's sound. */
    start() {
      this.stop();
      this.levels.fill(0);
      this.fresh = true;
      this.frame = requestAnimationFrame(() => this.draw());
    }
    stop() {
      if (this.frame !== void 0) cancelAnimationFrame(this.frame);
      this.frame = void 0;
    }
    draw() {
      this.frame = requestAnimationFrame(() => this.draw());
      const wave2 = this.canvas;
      const ratio = devicePixelRatio || 1;
      const w = wave2.clientWidth;
      const h = wave2.clientHeight;
      const sized = wave2.width === Math.round(w * ratio) && wave2.height === Math.round(h * ratio);
      if (!this.fresh && sized) return;
      this.fresh = false;
      if (!sized) {
        wave2.width = Math.round(w * ratio);
        wave2.height = Math.round(h * ratio);
      }
      const c = wave2.getContext("2d");
      if (!c) return;
      c.setTransform(ratio, 0, 0, ratio, 0, 0);
      c.clearRect(0, 0, w, h);
      c.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--mark").trim();
      c.globalAlpha = 0.7;
      const shown = Math.min(WAVE, Math.floor(w / STEP));
      for (let i = 0; i < shown; i++) {
        const bar = Math.max(2, Math.round(this.levels[WAVE - shown + i] * h));
        c.fillRect(w - (shown - i) * STEP, (h - bar) / 2, BAR, bar);
      }
    }
  };

  // src/webview/talk.ts
  dwmFlag();
  var view;
  var phase = "idle";
  var recorder;
  var heard = "";
  var sent = false;
  var trouble = "";
  var lastRead = 0;
  var lastSeen = 0;
  var clock;
  var continuing = "";
  var hostVoices = [];
  var hostCanSpeak = false;
  var webVoices = [];
  var common = /* @__PURE__ */ new Set();
  function webVoice() {
    const name = view?.voice ?? "";
    const named = name ? webVoices.find((v) => v.name === name) : void 0;
    if (named) return named;
    if (name && hostVoices.some((v) => v.name === name)) return void 0;
    const english = webVoices.filter((v) => voiceMatches(v.lang, "en"));
    return english.find((v) => v.localService) ?? english[0];
  }
  var audioOut;
  function openAudio() {
    if (!audioOut) {
      try {
        audioOut = new AudioContext({ sampleRate: 24e3 });
      } catch {
        return void 0;
      }
    }
    if (audioOut.state === "suspended") void audioOut.resume();
    return audioOut;
  }
  var player = new Player(
    post,
    {
      lang: () => "en",
      voice: webVoice,
      rate: () => view?.rate ?? 1,
      hostCanSpeak: () => hostCanSpeak,
      natural: () => view?.natural === "ready" ? chosenNatural(view.voice)?.id : void 0,
      audio: () => openAudio(),
      naturalFailed: () => void 0,
      finished: () => drawComposer()
    },
    () => drawComposer()
  );
  var root = document.getElementById("root");
  root.className = "talk";
  var keyCaps = el("span", { class: "head-key" });
  var historyButton = el("button", { class: "ib", title: t("talk.yourTalks"), "aria-label": t("talk.yourTalks"), "aria-pressed": "false", onclick: () => showHistory(!historyShown()) }, lucide("history"));
  var modelChip = el("button", { class: "model-chip", onclick: () => post({ type: "talkWindow", action: "model" }) });
  var pinButton = el("button", { class: "ib", onclick: () => post({ type: "talkPin", on: !view?.onTop }) });
  var maxButton = el("button", { class: "ib", onclick: () => post({ type: "talkWindow", action: "maximize" }) });
  var header = el(
    "header",
    { class: "bar" },
    historyButton,
    tile(18),
    el("span", { class: "head-name" }, "Talk to the duck"),
    keyCaps,
    modelChip,
    el("span", { class: "grow" }),
    pinButton,
    el("button", { class: "ib", title: t("talk.settings"), "aria-label": t("talk.settings"), onclick: () => post({ type: "talkWindow", action: "settings" }) }, lucide("settings")),
    maxButton,
    el("button", { class: "ib", title: t("common.close"), "aria-label": t("common.close"), onclick: () => post({ type: "talkWindow", action: "close" }) }, lucide("x"))
  );
  var notice = el("div", { class: "talk-notice" });
  var empty = el("div", { class: "talk-empty" });
  var list = el("div", { class: "turns" });
  var live = el("div", { class: "turn me live", hidden: true });
  var typing = el("div", { class: "turn duck typing", hidden: true }, tile(28), el("div", { class: "bubble" }, el("span", { class: "dots" }, el("i"), el("i"), el("i"))));
  var failed = el("p", { class: "warn talk-failed", hidden: true });
  var feedIn = el("div", { class: "feed-in" }, empty, list, live, typing, failed);
  var feed = el("div", { class: "feed" }, feedIn);
  var toEnd = el("button", { class: "to-end", hidden: true, title: t("talk.toEnd"), "aria-label": t("talk.toEnd"), onclick: () => follow(true) }, lucide("arrow-down", "s"));
  var micButton = el("button", { class: "mic", onclick: () => toggle() });
  var status = el("div", { class: "cstatus", "aria-live": "polite" });
  var field = el("input", { type: "text", class: "field", placeholder: t("talk.typePlaceholder"), autocomplete: "off", spellcheck: "false", "aria-label": t("talk.typeAria") });
  field.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && field.value.trim()) {
      event.preventDefault();
      say(field.value);
      field.value = "";
    } else if (event.key === "Escape" && field.value) {
      event.preventDefault();
      event.stopPropagation();
      field.value = "";
    }
  });
  var newButton = el("button", { class: "btn new", title: t("talk.newTitle"), onclick: () => newTalk() }, lucide("square-pen"), t("talk.new"));
  var composer = el("div", { class: "composer" }, el("div", { class: "composer-in" }, micButton, el("div", { class: "cmain" }, status, el("div", { class: "crow" }, field, newButton))));
  var wave = new Wave();
  var time = el("span", { class: "time" }, "0:00");
  var historyList = el("div", { class: "hlist" });
  var historyFoot = el("div", { class: "hfoot" });
  var history = el(
    "aside",
    { class: "history", "aria-label": t("talk.yourTalks") },
    el("div", { class: "hhead" }, el("span", { class: "htitle" }, t("talk.yourTalks")), el("button", { class: "ib hclose", title: t("common.close"), "aria-label": t("talk.closeList"), onclick: () => showHistory(false) }, lucide("x"))),
    el("button", { class: "btn hnew", onclick: () => newTalk() }, lucide("square-pen"), t("talk.new")),
    historyList,
    historyFoot
  );
  var scrim = el("div", { class: "scrim", hidden: true, onclick: () => showHistory(false) });
  root.append(header, el("div", { class: "talk-body" }, history, el("div", { class: "talk-main" }, notice, el("div", { class: "feed-wrap" }, feed, toEnd), composer), scrim));
  var hover = new WordHover({
    host: document.body,
    area: feed,
    post,
    nativeName: () => view?.native ? languageName(view.native) : t("lang.yours"),
    mode: () => view?.wordHint ?? "shift",
    speak: (word) => void player.play("word", [el("span", {}, word)]),
    ceiling: () => header.getBoundingClientRect().bottom
  });
  feed.addEventListener("click", (event) => {
    const target = event.target;
    if (target.closest("button, input, .word-card")) return;
    if (target.closest("[data-words]")) hover.showAt(event.clientX, event.clientY);
    else hover.hide();
  });
  var atEnd = true;
  var nearEnd = () => feed.scrollHeight - feed.scrollTop - feed.clientHeight < 32;
  feed.addEventListener(
    "scroll",
    () => {
      hover.hide();
      atEnd = nearEnd();
      if (atEnd) toEnd.hidden = true;
    },
    { passive: true }
  );
  function follow(now = false) {
    if (now) atEnd = true;
    if (!atEnd) return;
    feed.scrollTop = feed.scrollHeight;
    toEnd.hidden = true;
  }
  new ResizeObserver(() => follow()).observe(feedIn);
  new ResizeObserver(() => follow()).observe(feed);
  var wide = matchMedia("(min-width: 720px)");
  var DOCKED_KEY = "krya.talk.history";
  var docked = (() => {
    try {
      return localStorage.getItem(DOCKED_KEY) !== "closed";
    } catch {
      return true;
    }
  })();
  var over = false;
  var clearing;
  var historyFrom = "";
  var historyShown = () => wide.matches ? docked : over;
  function showHistory(on) {
    if (wide.matches) {
      docked = on;
      try {
        localStorage.setItem(DOCKED_KEY, on ? "open" : "closed");
      } catch {
      }
    } else over = on;
    placeHistory();
  }
  function placeHistory() {
    const on = historyShown();
    root.classList.toggle("wide", wide.matches);
    root.classList.toggle("history-open", on);
    scrim.hidden = !on || wide.matches;
    historyButton.setAttribute("aria-pressed", String(on));
    historyButton.title = on ? t("talk.hideTalks") : t("talk.yourTalks");
    if (!on) stopClearing();
  }
  wide.addEventListener("change", () => {
    over = false;
    placeHistory();
  });
  var DAY_MS = 24 * 60 * 60 * 1e3;
  var topicName = (id) => TOPICS.some((topic) => topic.id === id) ? t(`topic.${id}`) : id;
  var DAY_NAMES = { today: "talk.today", yesterday: "talk.yesterday", earlier: "talk.earlier" };
  function groupOf(iso, now) {
    const today = new Date(now).setHours(0, 0, 0, 0);
    const at = Date.parse(iso);
    return at >= today ? "today" : at >= today - DAY_MS ? "yesterday" : "earlier";
  }
  var whenOf = (iso, group) => group === "earlier" ? formatDate(new Date(iso), { day: "numeric", month: "short" }) : formatDate(new Date(iso), { hour: "2-digit", minute: "2-digit" });
  function talkItem(talk, group, going) {
    const meta = [t("talk.lines", { n: talk.lines }), talk.marked ? t("talk.withMistake", { n: talk.marked }) : "", going ? t("talk.goingOnMeta") : whenOf(talk.ended, group)].filter(Boolean).join(" \xB7 ");
    return el(
      "div",
      { class: going ? "hitem on" : "hitem" },
      el(
        "button",
        { class: "hopen", "aria-current": going ? "true" : void 0, title: going ? t("talk.goingOnTitle") : t("talk.goOn"), onclick: () => going ? !wide.matches && showHistory(false) : goOn(talk.id) },
        el("span", { class: "hname" }, topicName(talk.topic)),
        el("span", { class: "hfirst" }, talk.first ? `\u201C${talk.first}\u201D` : t("talk.firstLine")),
        el("small", {}, meta)
      ),
      going ? null : el("button", { class: "ib hdel", title: t("talk.delete"), "aria-label": t("talk.delete"), onclick: () => post({ type: "talkDelete", id: talk.id }) }, lucide("x"))
    );
  }
  function drawHistory(v) {
    const now = Date.now();
    const from = JSON.stringify(v.talks) + new Date(now).toDateString();
    if (from === historyFrom) return;
    historyFrom = from;
    const { current: current2, past } = v.talks;
    const nodes = [];
    if (current2) nodes.push(el("h3", {}, t("talk.goingOn")), talkItem(current2, "today", true));
    let group = "";
    for (const talk of past) {
      const g = groupOf(talk.ended, now);
      if (g !== group) nodes.push(el("h3", {}, t(DAY_NAMES[group = g])));
      nodes.push(talkItem(talk, g, false));
    }
    if (!past.length) nodes.push(el("p", { class: "hempty" }, t("talk.historyEmpty")));
    historyList.replaceChildren(...nodes);
    drawFoot();
  }
  function drawFoot() {
    const n = view?.talks.past.length ?? 0;
    historyFoot.replaceChildren(...n ? [el("button", { class: clearing ? "hclear sure" : "hclear", onclick: () => clearAll() }, clearing ? n === 1 ? t("talk.sureOne") : t("talk.sureAll", { n }) : t("talk.clearAll"))] : []);
  }
  function clearAll() {
    if (clearing === void 0) {
      clearing = window.setTimeout(stopClearing, 4e3);
      return drawFoot();
    }
    stopClearing();
    post({ type: "talksClear" });
  }
  function stopClearing() {
    if (clearing === void 0) return;
    window.clearTimeout(clearing);
    clearing = void 0;
    drawFoot();
  }
  function goOn(id) {
    if (phase !== "idle") cancel();
    player.stop();
    hover.hide();
    heard = "";
    continuing = id;
    post({ type: "talkContinue", id });
    if (!wide.matches) showHistory(false);
  }
  var settingsLink = () => el("button", { class: "btn", onclick: () => post({ type: "talkWindow", action: "settings" }) }, t("common.openSettings"));
  var noticeRow = (name, text, note, control) => el("div", { class: "notice" }, lucide(name, "s"), el("div", { class: "l" }, text, el("small", {}, note)), control ?? null);
  function blockOf(v) {
    if (v.needsCard)
      return { stop: true, deaf: true, node: noticeRow("cpu", t("talk.needsCard"), t("talk.needsCardNote")) };
    if (v.model.status !== "ready") {
      const fetching = v.model.status === "downloading";
      const note = fetching ? t("talk.downloading", { pct: Math.round(v.model.progress * 100) }) : v.model.status === "failed" ? t("talk.downloadFailed") : t("talk.downloadIt");
      return { stop: true, deaf: true, node: noticeRow("download", t("talk.needsModel", { name: v.model.name, size: sizeText(v.model.size) }), note, fetching ? null : settingsLink()) };
    }
    if (v.engine === "absent") return { stop: false, deaf: true, node: noticeRow("mic-off", t("talk.noEngine"), t("talk.noEngineNote"), settingsLink()) };
    if (v.engine === "starting") return { stop: false, deaf: true, node: el("p", { class: "aside" }, lucide("loader", "s turning"), el("span", {}, t("talk.engineStarting"))) };
    if (v.slow) return { stop: false, deaf: false, node: el("p", { class: "aside amber" }, lucide("circle-alert", "s"), el("span", {}, t("talk.slow", { name: v.model.name, accurate: levelName("accurate") }))) };
    if (v.busy) return { stop: false, deaf: false, node: el("p", { class: "aside amber" }, lucide("circle-alert", "s"), el("span", {}, t(v.busy === "card" ? "talk.busyCard" : "talk.busyProcessor"))) };
    return void 0;
  }
  var block;
  var drawn = /* @__PURE__ */ new Map();
  function turnNode(turn) {
    if (turn.who === "me") return myTurn(turn, () => void player.play(`me${turn.id}`, [el("span", {}, turn.corrected ?? turn.text)]));
    const node = duckTurn(turn, () => readDuck(node));
    return node;
  }
  function drawEmpty() {
    const stop = !!block?.stop;
    empty.replaceChildren(
      tile(48),
      el("h2", {}, "Talk to the duck"),
      el("p", {}, t("talk.intro")),
      el("div", { class: "topics" }, ...TOPICS.map((topic) => el("button", { class: "chip topic", disabled: stop, onclick: () => post({ type: "talkStart", topic: topic.id }) }, topicName(topic.id)))),
      el("small", {}, block?.deaf ? t("talk.orTypeHello") : t("talk.orSayHello"))
    );
  }
  function draw(v) {
    const first = !view;
    view = v;
    const talk = v.talk;
    const resumed = !!continuing && v.talks.current?.id === continuing;
    if (first || resumed) lastRead = Math.max(0, ...talk.turns.filter((turn) => turn.who === "duck").map((turn) => turn.id));
    if (resumed) continuing = "";
    block = blockOf(v);
    notice.replaceChildren(...block ? [block.node] : []);
    root.classList.toggle("stopped", !!block?.stop);
    keyCaps.replaceChildren(...v.talkKey ? [caps(v.talkKey)] : []);
    pinButton.replaceChildren(lucide("pin"));
    pinButton.setAttribute("aria-pressed", String(v.onTop));
    pinButton.title = v.onTop ? t("talk.unpin") : t("talk.pin");
    pinButton.setAttribute("aria-label", pinButton.title);
    maxButton.replaceChildren(glyph(v.maximized ? "restore" : "maximize"));
    maxButton.title = v.maximized ? t("common.restore") : t("common.maximize");
    maxButton.setAttribute("aria-label", maxButton.title);
    root.classList.toggle("maxed", v.maximized);
    modelChip.textContent = v.model.name;
    modelChip.title = t("talk.modelTitle", { model: v.model.full });
    drawHistory(v);
    empty.hidden = talk.turns.length > 0;
    if (!empty.hidden) drawEmpty();
    const seen = /* @__PURE__ */ new Set();
    let before = null;
    for (const turn of talk.turns) {
      seen.add(turn.id);
      const from = JSON.stringify(turn);
      let known = drawn.get(turn.id);
      if (!known || known.from !== from && !player.reads(known.node)) {
        const node = turnNode(turn);
        known?.node.replaceWith(node);
        known = { node, from };
        drawn.set(turn.id, known);
      }
      if (known.node.parentElement !== list || known.node.previousElementSibling !== before) {
        if (before) before.after(known.node);
        else list.prepend(known.node);
      }
      before = known.node;
    }
    for (const [id, known] of drawn)
      if (!seen.has(id)) {
        if (player.reads(known.node)) player.stop();
        known.node.remove();
        drawn.delete(id);
      }
    if (sent) heard = "", sent = false;
    drawLive();
    typing.hidden = talk.status !== "thinking";
    failed.hidden = talk.status !== "failed";
    failed.replaceChildren(lucide("circle-alert", "s"), el("span", {}, t("talk.failed", { message: talk.message ?? t("talk.noAnswer") })));
    markRare([...list.querySelectorAll(".turn.duck .bubble")], common, v.rareWords);
    readNew(v);
    drawComposer();
    const last = talk.turns.at(-1)?.id ?? 0;
    if (first || resumed || !talk.turns.length) follow(true);
    else if (last > lastSeen && !atEnd) toEnd.hidden = false;
    lastSeen = last;
  }
  function drawLive() {
    const showing = phase === "listening" || phase === "starting" || phase === "sending" || !!heard;
    live.hidden = !showing;
    if (!showing) return;
    live.replaceChildren(el("div", { class: "bubble" }, heard ? el("div", { class: "said" }, heard) : el("div", { class: "said waiting" }, phase === "starting" ? t("talk.startingMic") : t("common.listening"))));
  }
  function readNew(v) {
    const newest = [...v.talk.turns].reverse().find((turn) => turn.who === "duck");
    if (!newest || newest.id <= lastRead) return;
    lastRead = newest.id;
    if (!v.talkAloud || phase !== "idle") return;
    const node = drawn.get(newest.id)?.node;
    if (node) readDuck(node);
  }
  function readDuck(node) {
    player.play(`duck${node.dataset.id}`, [...node.querySelectorAll("span.s")]);
  }
  function drawComposer() {
    const v = view;
    if (!v) return;
    const stopped = !!block?.stop;
    const deaf = !!block?.deaf;
    const speaking = !!player.key?.startsWith("duck");
    const thinking = v.talk.status === "thinking";
    micButton.disabled = deaf || phase === "starting" || phase === "sending";
    field.disabled = stopped;
    field.placeholder = deaf ? t("talk.typeOnly") : t("talk.typePlaceholder");
    micButton.className = `mic ${phase === "listening" ? "listening" : phase === "idle" ? "idle" : "busy"}`;
    micButton.replaceChildren(phase === "listening" ? lucide("send-horizontal") : phase === "idle" ? lucide("mic") : lucide("loader", "turning"));
    const label = phase === "listening" ? t("talk.send") : t("talk.talk");
    micButton.title = label;
    micButton.setAttribute("aria-label", label);
    const press = v.talkKey ? [caps(v.talkKey), el("span", {}, t("common.or")), caps("Space")] : [caps("Space")];
    if (stopped) status.replaceChildren(el("span", {}, t("talk.notPossible")));
    else if (deaf) status.replaceChildren(...speaking ? [lucide("volume-2", "s"), el("span", {}, t("talk.speaking"))] : thinking ? [el("span", {}, t("talk.thinking"))] : [el("span", {}, t("talk.typingOnly"))]);
    else if (trouble) status.replaceChildren(el("span", { class: "bad" }, trouble), el("span", {}, t("talk.pressAgain")));
    else if (phase === "listening") status.replaceChildren(el("span", { class: "rec" }), ...withKeys("talk.listeningPress", press), time, wave.canvas);
    else if (phase === "starting") status.replaceChildren(el("span", {}, t("talk.startingMic")));
    else if (phase === "sending") status.replaceChildren(el("span", {}, t("talk.finishing")));
    else if (speaking) status.replaceChildren(lucide("volume-2", "s"), ...withKeys("talk.speakingPress", press));
    else if (thinking) status.replaceChildren(...withKeys("talk.thinkingPress", press));
    else status.replaceChildren(...withKeys("talk.press", press));
    newButton.disabled = v.talk.turns.length === 0 && phase === "idle";
  }
  function withKeys(key, keys) {
    const [before = "", after = ""] = t(key, { keys: "\0" }).split("\0").map((part) => part.trim());
    return [...before ? [el("span", {}, before)] : [], ...keys, ...after ? [el("span", {}, after)] : []];
  }
  function toggle() {
    if (!view || block?.deaf) return;
    if (phase === "listening") return void send();
    if (phase === "idle") void listen();
  }
  async function openSession() {
    const r = await window.tutorHost.call({ call: "speech", method: "POST", route: "/dictate/sessions", body: { expected: ["en"], strict: true } });
    if (!r.ok) throw new Error(r.error);
    return r.data.id;
  }
  async function listen() {
    player.stop();
    if (view?.talk.status === "thinking") post({ type: "talkInterrupt" });
    trouble = "";
    heard = "";
    phase = "starting";
    hover.hide();
    post({ type: "talkListen" });
    post({ type: "micRecording", on: true });
    drawLive();
    drawComposer();
    follow(true);
    try {
      const id = await openSession();
      const r = new StreamRecorder(window.tutorHost.call, id, ["en"], (s) => {
        const text = s.heard.trim();
        if (!text || text === heard || recorder !== r) return;
        heard = text;
        drawLive();
      });
      recorder = r;
      await r.start();
      if (recorder !== r) return;
      phase = "listening";
      wave.start();
      time.textContent = "0:00";
      clock = window.setInterval(() => {
        for (const level of r.levels()) wave.hear(level);
        const s = Math.floor(r.seconds);
        time.textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
      }, 50);
    } catch (error) {
      trouble = micTrouble(error);
      void recorder?.cancel();
      recorder = void 0;
      phase = "idle";
      post({ type: "micRecording", on: false });
    }
    drawLive();
    drawComposer();
  }
  function quiet() {
    window.clearInterval(clock);
    clock = void 0;
    wave.stop();
    const r = recorder;
    recorder = void 0;
    post({ type: "micRecording", on: false });
    return r;
  }
  async function send() {
    const r = quiet();
    if (!r) return;
    phase = "sending";
    drawComposer();
    try {
      const out = await r.finish();
      phase = "idle";
      const text = out.text.trim();
      if (text) {
        heard = text;
        say(text);
      } else {
        heard = "";
        trouble = t("talk.nothingHeard");
      }
    } catch (error) {
      phase = "idle";
      heard = "";
      trouble = error instanceof Error ? error.message : String(error);
    }
    drawLive();
    drawComposer();
  }
  function cancel() {
    const r = quiet();
    phase = "idle";
    heard = "";
    void r?.cancel();
    drawLive();
    drawComposer();
  }
  function say(text) {
    player.stop();
    trouble = "";
    sent = true;
    follow(true);
    post({ type: "talkSay", text });
  }
  function newTalk() {
    if (phase !== "idle") cancel();
    player.stop();
    hover.hide();
    heard = "";
    post({ type: "talkClear" });
    if (!wide.matches) showHistory(false);
  }
  function hidden() {
    if (phase !== "idle") cancel();
    player.stop();
    hover.hide();
  }
  window.addEventListener("keydown", (event) => {
    if (event.defaultPrevented || event.ctrlKey || event.altKey || event.metaKey) return;
    const target = event.target instanceof Element ? event.target : document.body;
    const typingHere = target.closest("input, textarea, select, [contenteditable]");
    if (event.key === " " && !typingHere && !target.closest("button")) {
      event.preventDefault();
      if (!event.repeat) toggle();
    } else if (event.key === "Escape") {
      if (phase === "listening" || phase === "starting") event.preventDefault(), cancel();
      else if (over && !wide.matches) event.preventDefault(), showHistory(false);
      else if (player.key) event.preventDefault(), player.stop();
      else hover.hide();
    }
  });
  window.addEventListener("message", (event) => {
    if (event.source !== window) return;
    const m = event.data;
    switch (m.type) {
      case "talkView":
        return draw(m.view);
      case "gloss":
        return hover.onGloss(m);
      case "ipa":
        return hover.onIpa(m.word, m.ipa);
      case "saved":
        return hover.onSaved(m.word, m.saved);
      case "dictReady":
        return hover.forget();
      case "common":
        common = new Set(m.words);
        if (view) markRare([...list.querySelectorAll(".turn.duck .bubble")], common, view.rareWords);
        return;
      case "hostVoices":
        hostVoices = m.voices;
        hostCanSpeak = m.canSpeak;
        return;
      case "progress":
        return player.onHostProgress(m.id, m.pos, m.len);
      case "speakDone":
        return player.onHostDone(m.id);
      case "stop":
        return player.stop();
      case "naturalAudio":
        return player.onNaturalAudio(m.id, m.index, m.samples, m.words);
      case "naturalFailed":
        return player.onNaturalFailed(m.id, m.message);
      case "talk":
        return m.command === "hidden" ? hidden() : toggle();
    }
  });
  if ("speechSynthesis" in window) {
    const refresh = () => webVoices = window.speechSynthesis.getVoices();
    refresh();
    window.speechSynthesis.addEventListener("voiceschanged", refresh);
  }
  placeHistory();
  post({ type: "talkReady" });
})();
