const STORAGE_KEY = "ai-tools-match-best-score";

const TOOL_LIBRARY = [
  { id: "chatbot", name: "ChatBot", icon: "🤖", color: "#ffd56e", soft: "#fff2c0" },
  { id: "writer", name: "AI 写作", icon: "📝", color: "#ff9bb0", soft: "#ffe4eb" },
  { id: "paint", name: "AI 绘图", icon: "🎨", color: "#ffbd67", soft: "#fff0d4" },
  { id: "video", name: "AI 视频", icon: "🎬", color: "#8fbaff", soft: "#e6efff" },
  { id: "sheet", name: "AI 表格", icon: "📊", color: "#64d985", soft: "#dcf9e4" },
  { id: "code", name: "AI 代码", icon: "💻", color: "#7bd9d0", soft: "#dcfbf7" },
  { id: "translate", name: "AI 翻译", icon: "🌐", color: "#b89bff", soft: "#eee8ff" },
  { id: "music", name: "AI 音乐", icon: "🎧", color: "#ffd76d", soft: "#fff4cf" },
  { id: "search", name: "AI 搜索", icon: "🔎", color: "#9ce3ff", soft: "#e2f7ff" },
  { id: "voice", name: "AI 语音", icon: "🎤", color: "#ffb07d", soft: "#ffebdd" },
  { id: "meeting", name: "AI 会议", icon: "📹", color: "#8ec8ff", soft: "#e6f2ff" },
  { id: "summary", name: "AI 摘要", icon: "📚", color: "#ffc970", soft: "#fff1d9" },
  { id: "mindmap", name: "AI 脑图", icon: "🧠", color: "#ff9fd2", soft: "#ffe3f3" },
  { id: "mail", name: "AI 邮件", icon: "✉️", color: "#8de1d2", soft: "#e0fcf5" },
  { id: "slides", name: "AI 演示", icon: "📽️", color: "#ffbe90", soft: "#fff0e4" },
  { id: "support", name: "AI 客服", icon: "☎️", color: "#91c2ff", soft: "#e4eeff" },
  { id: "design", name: "AI 设计", icon: "🪄", color: "#e8a1ff", soft: "#f9e6ff" },
  { id: "data", name: "AI 数据", icon: "📈", color: "#8ce0a7", soft: "#e4faea" },
  { id: "flow", name: "AI 流程", icon: "⚙️", color: "#a5d7ff", soft: "#eaf5ff" },
  { id: "test", name: "AI 测试", icon: "🧪", color: "#9fefdc", soft: "#e8fff8" },
  { id: "legal", name: "AI 法务", icon: "⚖️", color: "#ffd28e", soft: "#fff3e3" },
  { id: "medical", name: "AI 医疗", icon: "🩺", color: "#ff9a9a", soft: "#ffe2e2" },
  { id: "recruit", name: "AI 招聘", icon: "🧑", color: "#b0c9ff", soft: "#e7efff" },
  { id: "agent", name: "AI 助手", icon: "🛰️", color: "#90e2ff", soft: "#e3f9ff" },
  { id: "avatar", name: "AI 头像", icon: "🖼️", color: "#ffd58e", soft: "#fff3dd" },
  { id: "finance", name: "AI 财务", icon: "💹", color: "#9ae0a9", soft: "#e8faeb" },
  { id: "crm", name: "AI CRM", icon: "📋", color: "#9ad0ff", soft: "#e8f4ff" },
  { id: "ops", name: "AI 运维", icon: "🛠️", color: "#ffc78f", soft: "#fff0e3" },
  { id: "sales", name: "AI 销售", icon: "🛍️", color: "#ffb5d0", soft: "#ffe8f2" },
  { id: "robot", name: "AI 机器人", icon: "🦾", color: "#9de8f0", soft: "#e4fbfd" },
  { id: "vision", name: "AI 识图", icon: "👁️", color: "#c0b1ff", soft: "#f0ebff" },
  { id: "story", name: "AI 故事", icon: "📖", color: "#ffd380", soft: "#fff4df" },
  { id: "email", name: "AI 外呼", icon: "📨", color: "#8edfc1", soft: "#e2fbf0" },
  { id: "planner", name: "AI 规划", icon: "🗺️", color: "#8fb8ff", soft: "#e5edff" },
  { id: "learning", name: "AI 学习", icon: "🎓", color: "#ffc98a", soft: "#fff0df" },
  { id: "security", name: "AI 安全", icon: "🛡️", color: "#95d4ff", soft: "#e8f6ff" },
  { id: "commerce", name: "AI 电商", icon: "🛒", color: "#ffb493", soft: "#ffebe1" },
  { id: "travel", name: "AI 出行", icon: "🧳", color: "#8ee7d8", soft: "#e2fcf7" },
  { id: "note", name: "AI 笔记", icon: "📒", color: "#f7c47d", soft: "#fff2df" },
  { id: "clip", name: "AI 剪辑", icon: "✂️", color: "#9db8ff", soft: "#e8eeff" },
  { id: "voicecall", name: "AI 通话", icon: "📞", color: "#98dff2", soft: "#e8fbff" },
  { id: "opsbot", name: "AI 自动化", icon: "🔁", color: "#b5dd8f", soft: "#effadd" },
  { id: "prompt", name: "AI 提示词", icon: "💬", color: "#ffb4ef", soft: "#ffe7f9" },
  { id: "contracts", name: "AI 合同", icon: "📜", color: "#e5b0ff", soft: "#f7e8ff" },
];

const SIZE_CONFIGS = {
  4: { size: 4, label: "4 × 4", cells: 16, pairs: 8, hasCore: false, hints: 3 },
  7: { size: 7, label: "7 × 7", cells: 49, pairs: 24, hasCore: true, hints: 4 },
  9: { size: 9, label: "9 × 9", cells: 81, pairs: 40, hasCore: true, hints: 5 },
};

const TIME_CONFIGS = {
  4: {
    easy: { key: "easy", label: "简单", seconds: 90, pairScore: 5 },
    normal: { key: "normal", label: "普通", seconds: 60, pairScore: 10 },
    hard: { key: "hard", label: "困难", seconds: 30, pairScore: 15 },
  },
  7: {
    easy: { key: "easy", label: "简单", seconds: 300, pairScore: 20 },
    normal: { key: "normal", label: "普通", seconds: 180, pairScore: 25 },
    hard: { key: "hard", label: "困难", seconds: 90, pairScore: 30 },
  },
  9: {
    easy: { key: "easy", label: "简单", seconds: 540, pairScore: 35 },
    normal: { key: "normal", label: "普通", seconds: 300, pairScore: 40 },
    hard: { key: "hard", label: "困难", seconds: 150, pairScore: 50 },
  },
};

const state = {
  deck: [],
  bestScore: loadBestScore(),
  selectedSize: null,
  selectedTimeMode: null,
  currentSize: null,
  currentTimeMode: null,
  pairTarget: 0,
  pairScoreValue: 0,
  firstCard: null,
  lockBoard: false,
  score: 0,
  matches: 0,
  attempts: 0,
  hits: 0,
  hints: 0,
  timeLeft: null,
  timerId: null,
  finished: false,
  started: false,
  modalStep: "size",
};

const board = document.querySelector("#board");
const boardPanel = document.querySelector("#boardPanel");
const scoreEl = document.querySelector("#score");
const timerEl = document.querySelector("#timer");
const timeBox = document.querySelector("#timeBox");
const statusText = document.querySelector("#statusText");
const recordText = document.querySelector("#recordText");
const helperText = document.querySelector("#helperText");
const pairsFoundEl = document.querySelector("#pairsFound");
const progressBar = document.querySelector("#progressBar");
const accuracyEl = document.querySelector("#accuracy");
const difficultyLabel = document.querySelector("#difficultyLabel");
const modeLabel = document.querySelector("#modeLabel");
const pairScoreEl = document.querySelector("#pairScore");
const hintsLeftEl = document.querySelector("#hintsLeft");
const hintBtn = document.querySelector("#hintBtn");
const restartBtn = document.querySelector("#restartBtn");

const startModal = document.querySelector("#startModal");
const panelCopy = document.querySelector("#panelCopy");
const bestScoreModal = document.querySelector("#bestScoreModal");
const sizeStepPill = document.querySelector("#sizeStepPill");
const timeStepPill = document.querySelector("#timeStepPill");
const sizeGrid = document.querySelector("#sizeGrid");
const timeGrid = document.querySelector("#timeGrid");
const difficultyHint = document.querySelector("#difficultyHint");
const backStepBtn = document.querySelector("#backStepBtn");
const cancelStartBtn = document.querySelector("#cancelStartBtn");
const startGameBtn = document.querySelector("#startGameBtn");
const sizeButtons = [...document.querySelectorAll("[data-size]")];
const timeButtons = [...document.querySelectorAll("[data-time-mode]")];
const timeEasy = document.querySelector("#timeEasy");
const timeNormal = document.querySelector("#timeNormal");
const timeHard = document.querySelector("#timeHard");
const scoreEasy = document.querySelector("#scoreEasy");
const scoreNormal = document.querySelector("#scoreNormal");
const scoreHard = document.querySelector("#scoreHard");

const resultModal = document.querySelector("#resultModal");
const resultTitle = document.querySelector("#resultTitle");
const resultMessage = document.querySelector("#resultMessage");
const resultIcon = document.querySelector("#resultIcon");
const finalScore = document.querySelector("#finalScore");
const finalTime = document.querySelector("#finalTime");
const finalBestScore = document.querySelector("#finalBestScore");
const modalRestartBtn = document.querySelector("#modalRestartBtn");
const changeDifficultyBtn = document.querySelector("#changeDifficultyBtn");

function loadBestScore() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const value = Number.parseInt(raw ?? "0", 10);
    return Number.isFinite(value) ? value : 0;
  } catch {
    return 0;
  }
}

function saveBestScore(score) {
  try {
    window.localStorage.setItem(STORAGE_KEY, String(score));
  } catch {
    return;
  }
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const nextIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[nextIndex]] = [copy[nextIndex], copy[index]];
  }
  return copy;
}

function formatTime(seconds) {
  if (seconds === null) return "--:--";
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const remainder = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${remainder}`;
}

function getSizeConfig(size) {
  return size ? SIZE_CONFIGS[size] : null;
}

function getTimeConfig(size, mode) {
  if (!size || !mode) return null;
  return TIME_CONFIGS[size]?.[mode] ?? null;
}

function buildDeck(sizeConfig) {
  const selectedTools = shuffle(TOOL_LIBRARY).slice(0, sizeConfig.pairs);
  const pairedCards = shuffle(
    selectedTools.flatMap((tool) => [
      { ...tool, instance: `${tool.id}-a` },
      { ...tool, instance: `${tool.id}-b` },
    ]),
  );

  if (!sizeConfig.hasCore) {
    return pairedCards;
  }

  const cards = [...pairedCards];
  const centerIndex = Math.floor((sizeConfig.size * sizeConfig.size) / 2);
  cards.splice(centerIndex, 0, {
    type: "core",
    id: "ai-core",
    name: "AI 核心",
    icon: "✦",
  });
  return cards;
}

function updateBestScoreText() {
  recordText.textContent = `最高纪录 ${state.bestScore}`;
  bestScoreModal.textContent = state.bestScore;
  finalBestScore.textContent = state.bestScore;
}

function updateHud() {
  const sizeConfig = getSizeConfig(state.currentSize);
  const timeConfig = getTimeConfig(state.currentSize, state.currentTimeMode);
  scoreEl.textContent = state.score;
  timerEl.textContent = formatTime(state.timeLeft);
  pairsFoundEl.textContent = `${state.matches} / ${state.pairTarget}`;
  hintsLeftEl.textContent = state.hints;
  pairScoreEl.textContent = `+${state.pairScoreValue}`;
  pairScoreEl.style.fontSize = state.pairScoreValue >= 35 ? "20px" : "";
  modeLabel.textContent = timeConfig ? `${timeConfig.label}` : "未开始";
  difficultyLabel.textContent = sizeConfig && timeConfig ? `${sizeConfig.label} ${timeConfig.label}` : "未开始";
  progressBar.style.width = state.pairTarget ? `${(state.matches / state.pairTarget) * 100}%` : "0%";
  hintBtn.disabled = !state.started || state.finished || state.hints === 0;

  const accuracy = state.attempts === 0 ? 100 : Math.round((state.hits / state.attempts) * 100);
  accuracyEl.textContent = `${accuracy}%`;
  timeBox.classList.toggle("is-low", state.started && state.timeLeft !== null && state.timeLeft <= 15 && !state.finished);
  updateBestScoreText();
}

function applyBoardSize(size) {
  board.dataset.size = String(size);
  board.className = `board board--${size}`;
  board.style.setProperty("--columns", String(size));
  boardPanel.classList.remove("size-4", "size-7", "size-9");
  boardPanel.classList.add(`size-${size}`);
}

function createCoreTile() {
  const tile = document.createElement("div");
  tile.className = "core-tile";
  tile.setAttribute("aria-label", "AI 核心位");
  tile.innerHTML = `
    <span class="core-mark" aria-hidden="true">✦</span>
    <span class="core-name">AI 核心</span>
  `;
  return tile;
}

function createCard(card, index) {
  if (card.type === "core") {
    return createCoreTile();
  }

  const button = document.createElement("button");
  button.className = "card";
  button.type = "button";
  button.dataset.id = card.id;
  button.dataset.index = index;
  button.style.setProperty("--card-color", card.color);
  button.style.setProperty("--card-soft", card.soft);
  button.setAttribute("aria-label", `翻开卡片 ${index + 1}`);
  button.innerHTML = `
    <span class="card-inner">
      <span class="card-face card-back"><span>AI</span></span>
      <span class="card-face card-front">
        <span class="tool-icon" aria-hidden="true">${card.icon}</span>
        <span class="tool-name">${card.name}</span>
      </span>
    </span>
  `;
  button.addEventListener("click", () => handleCardClick(button));
  return button;
}

function renderBoard() {
  board.innerHTML = "";
  state.deck.forEach((card, index) => {
    board.appendChild(createCard(card, index));
  });
}

function stopTimer() {
  window.clearInterval(state.timerId);
  state.timerId = null;
}

function startTimer() {
  stopTimer();
  state.timerId = window.setInterval(() => {
    if (!state.started || state.finished || state.timeLeft === null) return;
    state.timeLeft -= 1;

    if (state.timeLeft <= 0) {
      state.timeLeft = 0;
      finishGame(false);
      return;
    }

    updateHud();
  }, 1000);
}

function setStatus(text) {
  statusText.textContent = text;
}

function updateBestScoreIfNeeded() {
  if (state.score > state.bestScore) {
    state.bestScore = state.score;
    saveBestScore(state.bestScore);
  }
  updateBestScoreText();
}

function handleCardClick(card) {
  if (state.lockBoard || state.finished || !state.started) return;
  if (card.classList.contains("is-open") || card.classList.contains("is-matched")) return;

  card.classList.add("is-open");

  if (!state.firstCard) {
    state.firstCard = card;
    setStatus("再翻一张，看看是不是同款工具。");
    return;
  }

  state.attempts += 1;
  const secondCard = card;
  const isMatch = state.firstCard.dataset.id === secondCard.dataset.id;

  if (isMatch) {
    handleMatch(state.firstCard, secondCard);
  } else {
    handleMismatch(state.firstCard, secondCard);
  }

  state.firstCard = null;
  updateHud();
}

function handleMatch(firstCard, secondCard) {
  state.hits += 1;
  state.matches += 1;
  state.score += state.pairScoreValue;

  firstCard.classList.add("is-matched");
  secondCard.classList.add("is-matched");
  firstCard.setAttribute("aria-label", "已消除");
  secondCard.setAttribute("aria-label", "已消除");
  setStatus(`配对成功，每对 +${state.pairScoreValue} 分。`);

  window.setTimeout(() => {
    firstCard.style.visibility = "hidden";
    secondCard.style.visibility = "hidden";

    if (state.matches === state.pairTarget) {
      finishGame(true);
      return;
    }

    updateHud();
  }, 430);
}

function handleMismatch(firstCard, secondCard) {
  state.lockBoard = true;
  setStatus("没有配对成功，换个组合。");

  window.setTimeout(() => {
    firstCard.classList.remove("is-open");
    secondCard.classList.remove("is-open");
    state.lockBoard = false;
    updateHud();
  }, 720);
}

function useHint() {
  if (!state.started || state.hints === 0 || state.lockBoard || state.finished) return;

  const cards = [...board.querySelectorAll(".card:not(.is-matched)")];
  const groups = cards.reduce((map, card) => {
    const id = card.dataset.id;
    map[id] = map[id] || [];
    map[id].push(card);
    return map;
  }, {});

  const pair = Object.values(groups).find((group) => group.length >= 2);
  if (!pair) return;

  state.hints -= 1;
  pair[0].classList.add("is-hint");
  pair[1].classList.add("is-hint");
  setStatus("提示已高亮。");
  updateHud();

  window.setTimeout(() => {
    pair[0].classList.remove("is-hint");
    pair[1].classList.remove("is-hint");
  }, 1000);
}

function createNewGame() {
  const sizeConfig = getSizeConfig(state.selectedSize);
  const timeConfig = getTimeConfig(state.selectedSize, state.selectedTimeMode);
  if (!sizeConfig || !timeConfig) return;

  stopTimer();
  Object.assign(state, {
    deck: buildDeck(sizeConfig),
    currentSize: sizeConfig.size,
    currentTimeMode: timeConfig.key,
    pairTarget: sizeConfig.pairs,
    pairScoreValue: timeConfig.pairScore,
    firstCard: null,
    lockBoard: false,
    score: 0,
    matches: 0,
    attempts: 0,
    hits: 0,
    hints: sizeConfig.hints,
    timeLeft: timeConfig.seconds,
    finished: false,
    started: true,
  });

  applyBoardSize(sizeConfig.size);
  renderBoard();
  helperText.textContent = `${sizeConfig.label} ${timeConfig.label}：找出相同的 AI 工具卡`;
  setStatus(sizeConfig.hasCore ? "中心 AI 核心位不参与配对。" : "找出相同的 AI 工具卡。");
  updateHud();
  startTimer();
  startModal.close();
}

function finishGame(won) {
  state.finished = true;
  state.started = false;
  state.lockBoard = true;
  stopTimer();
  updateBestScoreIfNeeded();
  updateHud();

  if (won) {
    resultIcon.textContent = "🎉";
    resultTitle.textContent = "通关成功";
    resultMessage.textContent = "所有 AI 工具都已完成配对。";
  } else {
    resultIcon.textContent = "⏳";
    resultTitle.textContent = "时间结束";
    resultMessage.textContent = "这局没有在倒计时内完成全部配对。";
  }

  finalScore.textContent = state.score;
  finalTime.textContent = `${state.timeLeft ?? 0} 秒`;
  finalBestScore.textContent = state.bestScore;
  resultModal.showModal();
}

function updateTimeChoices() {
  const size = state.selectedSize ?? 4;
  const configs = TIME_CONFIGS[size];
  timeEasy.textContent = `${configs.easy.seconds} 秒`;
  timeNormal.textContent = `${configs.normal.seconds} 秒`;
  timeHard.textContent = `${configs.hard.seconds} 秒`;
  scoreEasy.textContent = `每对 +${configs.easy.pairScore} 分`;
  scoreNormal.textContent = `每对 +${configs.normal.pairScore} 分`;
  scoreHard.textContent = `每对 +${configs.hard.pairScore} 分`;
}

function syncSelectionCards() {
  sizeButtons.forEach((button) => {
    button.classList.toggle("is-selected", Number(button.dataset.size) === state.selectedSize);
  });
  timeButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.timeMode === state.selectedTimeMode);
  });
}

function setModalStep(step) {
  state.modalStep = step;
  const onTimeStep = step === "time";
  sizeGrid.classList.toggle("is-hidden", onTimeStep);
  timeGrid.classList.toggle("is-hidden", !onTimeStep);
  sizeStepPill.classList.toggle("is-active", !onTimeStep);
  timeStepPill.classList.toggle("is-active", onTimeStep);
  backStepBtn.disabled = !onTimeStep;
  backStepBtn.classList.toggle("is-hidden-button", !onTimeStep);
  startGameBtn.disabled = !onTimeStep || !state.selectedTimeMode;

  if (onTimeStep) {
    const sizeConfig = getSizeConfig(state.selectedSize);
    panelCopy.textContent = `第 2 步：为 ${sizeConfig.label} 选择时间难度。`;
    difficultyHint.textContent = "请选择时间难度";
  } else {
    panelCopy.textContent = "第 1 步：先选择棋盘尺寸。";
    difficultyHint.textContent = "请选择棋盘尺寸";
  }
}

function openStartModal() {
  stopTimer();
  state.started = false;
  state.lockBoard = true;
  state.selectedSize = state.currentSize ?? null;
  state.selectedTimeMode = state.currentTimeMode ?? null;
  updateTimeChoices();
  syncSelectionCards();
  setModalStep("size");
  updateHud();
  updateBestScoreText();
  if (!startModal.open) {
    startModal.showModal();
  }
}

function closeStartModal() {
  if (!startModal.open) return;
  startModal.close();
}

function prepareEmptyBoard() {
  board.innerHTML = "";
  applyBoardSize(4);
}

sizeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.selectedSize = Number(button.dataset.size);
    state.selectedTimeMode = null;
    updateTimeChoices();
    syncSelectionCards();
    setModalStep("time");
  });
});

timeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.selectedTimeMode = button.dataset.timeMode;
    syncSelectionCards();
    const timeConfig = getTimeConfig(state.selectedSize, state.selectedTimeMode);
    difficultyHint.textContent = `${timeConfig.label}：${timeConfig.seconds} 秒，每对 +${timeConfig.pairScore} 分`;
    startGameBtn.disabled = false;
  });
});

backStepBtn.addEventListener("click", () => {
  state.selectedTimeMode = null;
  syncSelectionCards();
  setModalStep("size");
});

cancelStartBtn.addEventListener("click", closeStartModal);
startGameBtn.addEventListener("click", createNewGame);
hintBtn.addEventListener("click", useHint);
restartBtn.addEventListener("click", openStartModal);

startModal.addEventListener("cancel", (event) => {
  if (!state.currentSize) {
    event.preventDefault();
  }
});

startModal.addEventListener("close", () => {
  if (state.currentSize && !state.finished && state.timeLeft !== null && !state.started) {
    state.started = true;
    state.lockBoard = false;
    startTimer();
    updateHud();
  }
});

modalRestartBtn.addEventListener("click", () => {
  resultModal.close();
  state.selectedSize = state.currentSize;
  state.selectedTimeMode = state.currentTimeMode;
  createNewGame();
});

changeDifficultyBtn.addEventListener("click", () => {
  resultModal.close();
  openStartModal();
});

prepareEmptyBoard();
updateBestScoreText();
updateHud();
openStartModal();
