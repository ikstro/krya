"use strict";
(() => {
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

  // src/webview/recorder.ts
  async function microphone(close) {
    return navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: close, noiseSuppression: close, autoGainControl: true, channelCount: 1 } });
  }
  var Meter = class {
    context;
    analyser;
    samples;
    constructor(stream) {
      this.context = new AudioContext();
      this.analyser = this.context.createAnalyser();
      this.analyser.fftSize = 1024;
      this.samples = new Float32Array(this.analyser.fftSize);
      this.context.createMediaStreamSource(stream).connect(this.analyser);
    }
    /** How loud it is now, 0…1. */
    level() {
      this.analyser.getFloatTimeDomainData(this.samples);
      let sum = 0;
      for (const v of this.samples) sum += v * v;
      return Math.min(1, Math.sqrt(sum / this.samples.length) * 4);
    }
    close() {
      void this.context.close();
    }
  };
  function stopped(recorder2) {
    if (!recorder2 || recorder2.state === "inactive") return Promise.resolve();
    return new Promise((resolve) => {
      recorder2.onstop = () => resolve();
      recorder2.stop();
    });
  }
  var PhraseRecorder = class {
    startedAt = 0;
    stream;
    recorder;
    meter;
    chunks = [];
    async start() {
      this.stream = await microphone(true);
      this.startedAt = Date.now();
      this.meter = new Meter(this.stream);
      this.recorder = new MediaRecorder(this.stream, { mimeType: "audio/webm;codecs=opus", audioBitsPerSecond: 48e3 });
      this.recorder.ondataavailable = (event) => event.data.size > 0 && this.chunks.push(event.data);
      this.recorder.start(250);
    }
    level() {
      return this.meter?.level() ?? 0;
    }
    get seconds() {
      return this.startedAt ? (Date.now() - this.startedAt) / 1e3 : 0;
    }
    /** The recording, as webm. */
    async finish() {
      await stopped(this.recorder);
      this.release();
      return new Uint8Array(await new Blob(this.chunks, { type: "audio/webm" }).arrayBuffer());
    }
    async cancel() {
      await stopped(this.recorder);
      this.release();
    }
    release() {
      for (const track of this.stream?.getTracks() ?? []) track.stop();
      this.meter?.close();
      this.stream = void 0;
      this.meter = void 0;
    }
  };
  var RETRIES = 3;
  var ChunkRecorder = class {
    constructor(call, o) {
      this.call = call;
      this.o = o;
    }
    id;
    startedAt = 0;
    /** Set when a chunk could not be delivered: the recording will be missing a piece. */
    lost = false;
    recorder;
    stream;
    meter;
    seq = 0;
    uploads = Promise.resolve();
    speech(method, route, body) {
      return this.call({ call: "speech", method, route, body });
    }
    /** Asks for the microphone, opens the recording in the engine, starts sending. */
    async start() {
      this.stream = await microphone(this.o.source === "note");
      this.startedAt = Date.now();
      const opened = await this.speech("POST", "/recordings", {
        source: this.o.source,
        title: this.o.title,
        language: this.o.language,
        speakers: this.o.speakers,
        tracks: { main: { startedAt: this.startedAt } }
      });
      if (!opened.ok) {
        this.release();
        throw new Error(opened.error);
      }
      this.id = opened.data.id;
      this.meter = new Meter(this.stream);
      this.recorder = new MediaRecorder(this.stream, { mimeType: "audio/webm;codecs=opus", audioBitsPerSecond: 48e3 });
      this.recorder.ondataavailable = (event) => {
        if (event.data.size > 0) this.upload(event.data);
      };
      this.recorder.start(this.o.slice);
    }
    upload(blob) {
      const seq = this.seq++;
      this.uploads = this.uploads.then(async () => {
        const bytes = new Uint8Array(await blob.arrayBuffer());
        for (let attempt = 0; attempt < RETRIES; attempt++) {
          if ((await this.speech("PUT", `/recordings/${this.id}/main/${seq}`, bytes)).ok) return;
          await new Promise((resolve) => setTimeout(resolve, 600 * (attempt + 1)));
        }
        this.lost = true;
      });
    }
    level() {
      return this.meter?.level() ?? 0;
    }
    get seconds() {
      return this.startedAt ? (Date.now() - this.startedAt) / 1e3 : 0;
    }
    /** Stops, sends what is left, and hands the recording to the engine. Its id. */
    async finish() {
      await stopped(this.recorder);
      await this.uploads;
      this.release();
      const r = await this.speech("POST", `/recordings/${this.id}/finish`, { language: this.o.language, speakers: this.o.speakers });
      if (!r.ok) throw new Error(r.error);
      return this.id;
    }
    async cancel() {
      await stopped(this.recorder);
      this.release();
      if (this.id) await this.speech("DELETE", `/recordings/${this.id}`);
    }
    release() {
      for (const track of this.stream?.getTracks() ?? []) track.stop();
      this.meter?.close();
      this.stream = void 0;
      this.meter = void 0;
    }
  };
  var STREAM_CHUNK = 4e3;
  var LEVEL_SPAN = 800;
  var LEVELS_KEPT = 60;
  var StreamRecorder = class {
    constructor(call, session, expected, onStatus2) {
      this.call = call;
      this.session = session;
      this.expected = expected;
      this.onStatus = onStatus2;
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

  // src/webview/dictation.ts
  var host = window.tutorHost;
  var root = document.getElementById("badge");
  var TITLES = { type: "dict.type", english: "dict.english", note: "dict.note", check: "dict.check" };
  var recorder;
  var mode = "type";
  var starting = Promise.resolve();
  var timer;
  var dropped = false;
  var BEHIND = 4;
  var words;
  var dot;
  var time;
  var said = "";
  var fetching = false;
  function clock(seconds) {
    const s = Math.floor(seconds);
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  }
  function show(kind, text, ...line) {
    root.className = `badge ${kind}`;
    root.replaceChildren(...text ? [text] : [], el("div", { class: "line" }, ...line));
    if (text) toEnd(text);
  }
  function toEnd(text) {
    text.scrollTop = text.scrollHeight;
    text.classList.toggle("more", text.scrollHeight > text.clientHeight + 1);
  }
  function wordsOf(text, waiting = "") {
    return el("div", { class: text ? "words" : "words waiting" }, text || waiting);
  }
  function onStatus(status) {
    if (!words || !dot || !time) return;
    const model = status.model;
    fetching = model?.state === "downloading";
    if (fetching) time.textContent = t("dict.gettingModel", { pct: Math.round((model?.progress ?? 0) * 100) });
    time.classList.toggle("fetch", fetching);
    const text = status.heard.trim();
    if (text && text !== said) {
      said = text;
      words.textContent = text;
      words.classList.remove("waiting");
      toEnd(words);
    }
    dot.classList.toggle("behind", status.pending > BEHIND);
    dot.title = status.pending > BEHIND ? "catching up" : "";
  }
  var wave;
  function quiet() {
    clearInterval(timer);
    timer = void 0;
    wave?.stop();
    wave = void 0;
  }
  function recording() {
    quiet();
    time = el("span", { class: "time" }, "0:00");
    const heard = new Wave();
    wave = heard;
    dot = el("span", { class: "dot" });
    words = wordsOf("", t("common.listening"));
    said = "";
    fetching = false;
    show("rec", words, dot, el("span", { class: "what" }, t(TITLES[mode])), time, heard.canvas);
    postHeight(true);
    timer = window.setInterval(() => {
      if (!recorder || !time) return;
      if (!fetching) time.textContent = clock(recorder.seconds);
      if (recorder instanceof StreamRecorder) for (const level of recorder.levels()) heard.hear(level);
      else heard.hear(recorder.level());
    }, 50);
    heard.start();
  }
  async function start(next, session, expected = []) {
    mode = next;
    dropped = false;
    recorder = mode === "note" ? new ChunkRecorder(host.call, { source: "note", slice: 2e3 }) : session ? new StreamRecorder(host.call, session, expected, onStatus) : new PhraseRecorder();
    recording();
    try {
      starting = recorder.start();
      await starting;
    } catch (error) {
      recorder = void 0;
      quiet();
      host.post({ type: "dictationFailed", message: micTrouble(error) });
    }
  }
  async function stop() {
    await starting.catch(() => void 0);
    quiet();
    const r = recorder;
    recorder = void 0;
    if (!r) return;
    const behind = dot?.classList.contains("behind");
    show("busy", said ? wordsOf(said) : null, el("span", { class: "spin" }), el("span", { class: "what" }, mode === "note" ? t("dict.savingNote") : behind ? t("dict.catchingUp") : mode === "check" ? t("common.checking") : t("dict.typing")));
    busy = r;
    try {
      if (r instanceof ChunkRecorder) host.post({ type: "dictationNote", id: await r.finish() });
      else if (r instanceof StreamRecorder) {
        const result = await r.finish();
        if (!dropped) host.post({ type: "dictationText", mode, text: result.text, language: result.language, sure: result.sure });
      } else host.post({ type: "dictationAudio", mode, audio: await r.finish() });
    } catch (error) {
      if (!dropped) host.post({ type: "dictationFailed", message: error instanceof Error ? error.message : String(error) });
    } finally {
      if (busy === r) busy = void 0;
    }
  }
  var busy;
  async function cancel() {
    await starting.catch(() => void 0);
    quiet();
    const r = recorder ?? busy;
    recorder = void 0;
    busy = void 0;
    dropped = true;
    await r?.cancel();
    host.post({ type: "dictationCancelled" });
  }
  window.addEventListener("message", (event) => {
    const message = event.data;
    if (event.source !== window || !message || typeof message.type !== "string") return;
    if (message.type === "dictation") {
      if (message.command === "start") void start(message.mode, message.session, message.expected);
      else if (message.command === "stop") void stop();
      else void cancel();
    } else if (message.type === "dictationDone") {
      show("done", wordsOf(message.text), el("span", { class: "check" }, "\u2713"), el("span", { class: "what" }, message.note ?? (mode === "note" ? t("dict.saved") : t("dict.typed"))));
    } else if (message.type === "dictationError") {
      show("error", wordsOf(message.message), el("span", { class: "what" }, mode === "note" ? t("dict.noteFailed") : t("dict.nothingTyped")));
    }
  });
  var posted = 0;
  function postHeight(again = false) {
    const px = Math.ceil(root.getBoundingClientRect().height);
    if (px === posted && !again) return;
    posted = px;
    host.post({ type: "dictationHeight", px });
  }
  new ResizeObserver(() => postHeight()).observe(root);
  host.post({ type: "dictationReady" });
})();
