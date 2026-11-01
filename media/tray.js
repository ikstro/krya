"use strict";
(() => {
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
  function dwmFlag() {
    document.documentElement.classList.toggle("dwm", new URLSearchParams(location.search).get("frame") === "dwm");
  }

  // src/webview/brand.ts
  function logo() {
    return el(
      "span",
      { class: "logo", "aria-label": "Krya" },
      el("span", {}, "Krya"),
      el("span", { class: "duck", "aria-hidden": "true" }, "(", el("span", { class: "eye" }, "'"), ")>")
    );
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

  // src/webview/tray.ts
  dwmFlag();
  var post = (message) => window.tutorHost.post(message);
  var root = document.getElementById("root");
  function keyText(hotkey) {
    const twice = hotkey.endsWith("*2");
    return el("span", { class: "kt" }, `${hotkeyLabel(hotkey.replace(/\*2$/, ""))}${twice ? " \xD72" : ""}`);
  }
  function command(id, icon, label, run, hotkey = "") {
    return el(
      "button",
      { class: "cmd", "data-nav": true, "data-id": id, onclick: () => post({ type: "tray", command: run }) },
      lucide(icon, "s"),
      el("span", { class: "l" }, label),
      hotkey ? keyText(hotkey) : null
    );
  }
  function toggle(id, icon, label, on) {
    const knob = el("span", { class: on ? "tg on" : "tg" });
    const row = el(
      "button",
      {
        class: "cmd",
        "data-nav": true,
        "data-id": id,
        role: "switch",
        "aria-checked": String(on),
        onclick: () => {
          const next = row.getAttribute("aria-checked") !== "true";
          row.setAttribute("aria-checked", String(next));
          knob.classList.toggle("on", next);
          post({ type: "saveSettings", patch: { [id]: next } });
        }
      },
      lucide(icon, "s"),
      el("span", { class: "l" }, label),
      knob
    );
    return row;
  }
  var keep = { mode: "row" };
  var waiting;
  var keepTimer;
  var KEPT_MS = 1500;
  function keepRow(v) {
    if (keep.mode === "kept")
      return el("div", { class: "cmd kept", "data-id": "keepWord", role: "status" }, lucide("check", "s"), el("span", { class: "l" }, t("tray.kept", { word: keep.word })));
    return el(
      "button",
      { class: "cmd", "data-nav": true, "data-id": "keepWord", title: t("tray.keepWordTitle"), onclick: () => openKeep(v) },
      lucide("lock", "s"),
      el("span", { class: "l" }, t("tray.keepWord"))
    );
  }
  function openKeep(v) {
    const row = root.querySelector('[data-id="keepWord"]');
    if (!row) return;
    keep = { mode: "field" };
    const note = v.keep.word && v.keep.fixed ? el("span", { class: "kt keep-note", title: `${v.keep.word} \u2192 ${v.keep.fixed}` }, `\u2192 ${v.keep.fixed}`) : null;
    const field = el("input", {
      class: "keep-field",
      type: "text",
      value: v.keep.word,
      placeholder: t("tray.keepPlaceholder"),
      "aria-label": t("tray.keepAria"),
      spellcheck: "false",
      autocomplete: "off"
    });
    field.addEventListener("input", () => note?.remove());
    field.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        event.stopPropagation();
        const word = field.value.trim().toLowerCase();
        if (!word) return closeKeep();
        post({ type: "keepWord", word });
        keep = { mode: "kept", word };
        redraw();
        window.clearTimeout(keepTimer);
        keepTimer = window.setTimeout(() => {
          keep = { mode: "row" };
          redraw();
        }, KEPT_MS);
      } else if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        closeKeep(true);
      } else event.stopPropagation();
    });
    field.addEventListener("blur", () => {
      if (keep.mode === "field") closeKeep();
    });
    const edit = el("div", { class: "cmd keep-edit", "data-id": "keepWord" }, lucide("lock", "s"), field, note);
    row.replaceWith(edit);
    field.focus();
    field.select();
  }
  function closeKeep(refocus = false) {
    keep = { mode: "row" };
    if (waiting) return redraw();
    const edit = root.querySelector('[data-id="keepWord"]');
    if (edit && last) edit.replaceWith(keepRow(last));
    if (refocus) focusRow(root.querySelector('[data-id="keepWord"]'));
  }
  function redraw() {
    const v = waiting ?? last;
    waiting = void 0;
    if (v) render(v);
  }
  function pauseButton(paused) {
    return el(
      "button",
      {
        class: paused ? "fb paused" : "fb",
        "data-nav": true,
        "data-id": "paused",
        role: "switch",
        "aria-checked": String(paused),
        title: paused ? t("tray.pausedTitle") : t("tray.pauseTitle"),
        onclick: () => post({ type: "saveSettings", patch: { paused: !paused } })
      },
      lucide(paused ? "play" : "pause", "s"),
      paused ? t("tray.resume") : t("tray.pause")
    );
  }
  function group(label, ...rows) {
    return el("section", { class: "sec" }, el("div", { class: "grp" }, label), ...rows);
  }
  function status(v) {
    if (v.paused) return el("span", { class: "st paused", title: t("tray.pausedTitle") }, el("span", { class: "dot" }), t("tray.paused"));
    switch (v.translator) {
      case "ready":
        return el("span", { class: "st", title: t("tray.readyTitle", { pair: t("lang.pairEnglish", { lang: languageName(v.native) }) }) }, el("span", { class: "dot" }), t("tray.ready"));
      case "downloading":
        return el("span", { class: "st" }, t("tray.downloading"));
      case "absent":
        return el("span", { class: "st" }, t("tray.firstUse"));
      default:
        return null;
    }
  }
  var last;
  function render(v) {
    last = v;
    const focused = document.activeElement instanceof HTMLElement ? document.activeElement.dataset.id : void 0;
    const openApp = () => post({ type: "tray", command: "open" });
    const version = el("span", { class: "ver", title: t("tray.built", { build: v.build }) }, v.dev ? `${v.version} dev` : v.version);
    const brand = el("button", { class: "brand", tabindex: "-1", title: t("tray.openKrya"), onclick: openApp }, logo(), version);
    const open = el("button", { class: "open", "data-nav": true, "data-id": "open", onclick: openApp }, t("tray.open"));
    const panel = el(
      "div",
      { class: "panel" },
      el("header", { class: "head" }, brand, el("div", { class: "side" }, status(v), open)),
      group(
        t("tray.actions"),
        command("listenCopied", "volume-2", t("tray.listenCopied"), "listenCopied", v.keys.listenCopied),
        command("translateCopied", "languages", t("tray.translateCopied"), "translateCopied"),
        command("typeToTranslate", "pencil-line", t("tray.typeToTranslate"), "typeToTranslate", v.keys.typeToTranslate),
        command("checkEnglish", "graduation-cap", t("tray.checkEnglish"), "checkEnglish", v.keys.checkEnglish),
        v.speech.installed ? command("talk", "bird", "Talk to the duck\u2026", "talk", v.keys.talk) : null,
        command("listenScreen", "monitor-speaker", t("tray.listenScreen"), "listenScreen", v.keys.snipListen),
        command("translateScreen", "scan-text", t("tray.translateScreen"), "translateScreen", v.keys.snipTranslate),
        v.speech.installed ? command("note", "notebook-pen", v.speech.recording ? t("tray.saveNote") : t("tray.newNote"), "note", v.speech.noteKey) : null,
        v.speech.installed ? command("transcripts", "file-text", t("tray.transcripts"), "transcripts") : null
      ),
      group(
        t("tray.quick"),
        toggle("autoFix", "spell-check", t("tray.autoFix"), v.autoFix),
        v.keys.switch ? toggle("switchOn", "keyboard", t("tray.switchWith", { key: hotkeyLabel(v.keys.switch) }), v.switchOn) : null,
        toggle("layoutBadge", "text-cursor", t("tray.layoutBadge"), v.layoutBadge),
        toggle("trayLayout", "panel-bottom", t("tray.trayLayout"), v.trayLayout),
        toggle("doubleCopy", "copy", t("tray.doubleCopy"), v.doubleCopy)
      ),
      group(
        t("tray.yourWords"),
        v.keep.on ? keepRow(v) : null,
        v.speech.installed ? command("vocabulary", "mic", t("tray.vocabulary"), "vocabulary") : null,
        command("kept", "list", t("tray.keptList"), "kept")
      ),
      el(
        "footer",
        { class: "foot" },
        pauseButton(v.paused),
        el("button", { class: "fb", "data-nav": true, "data-id": "settings", onclick: () => post({ type: "tray", command: "settings" }) }, lucide("settings", "s"), t("tray.settings")),
        el("button", { class: "fb", "data-nav": true, "data-id": "report", title: t("tray.reportTitle"), onclick: () => post({ type: "tray", command: "report" }) }, lucide("bug", "s"), t("tray.report")),
        el("button", { class: "fb quit", "data-nav": true, "data-id": "quit", title: t("tray.quit"), "aria-label": t("tray.quit"), onclick: () => post({ type: "tray", command: "quit" }) }, lucide("power", "s"), el("span", {}, t("tray.quit")))
      )
    );
    root.replaceChildren(panel);
    if (focused) focusRow(root.querySelector(`[data-id="${focused}"][data-nav]`));
  }
  function focusRow(node) {
    if (!node) return;
    node.focus();
    for (const other of root.querySelectorAll(".cur")) if (other !== node) other.classList.remove("cur");
    node.classList.add("cur");
  }
  var navs = () => [...root.querySelectorAll("[data-nav]")];
  function move(by) {
    const all = navs();
    if (!all.length) return;
    const at = all.indexOf(document.activeElement);
    const next = at < 0 ? by > 0 ? 0 : all.length - 1 : (at + by + all.length) % all.length;
    focusRow(all[next]);
  }
  var byKeys = (on) => document.body.classList.toggle("keys", on);
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      return post({ type: "trayClose" });
    }
    byKeys(true);
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      move(event.key === "ArrowDown" ? 1 : -1);
    }
  });
  window.addEventListener("pointermove", () => byKeys(false));
  window.addEventListener("focusin", (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.nav !== void 0) focusRow(event.target);
  });
  window.addEventListener("message", (event) => {
    if (event.source !== window) return;
    const m = event.data;
    if (m.type === "tray") {
      if (keep.mode === "field") waiting = m.view;
      else render(m.view);
    } else if (m.type === "trayShown") {
      byKeys(false);
      if (keep.mode !== "row") {
        window.clearTimeout(keepTimer);
        keep = { mode: "row" };
        redraw();
      }
      focusRow(root.querySelector(".cmd[data-nav]"));
    }
  });
  new ResizeObserver(() => post({ type: "trayHeight", px: Math.ceil(document.body.getBoundingClientRect().height) + 2 })).observe(document.body);
  post({ type: "trayReady" });
})();
