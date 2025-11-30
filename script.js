// --- INICIALIZACIÓN DE LOGOS ---
// Logo template logic removed as we use img tags now
window.addEventListener('DOMContentLoaded', () => {
    // No need to populate logos via JS anymore, they are directly in HTML
});

// --- AVATARES SVG ---
const SVG_P1_HAPPY = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="white"/><path d="M13.5 12C12.6716 12 12 11.3284 12 10.5C12 9.67157 12.6716 9 13.5 9C14.3284 9 15 9.67157 15 10.5C15 11.3284 14.3284 12 13.5 12Z" fill="#101012"/><path d="M24.5 12C23.6716 12 23 11.3284 23 10.5C23 9.67157 23.6716 9 24.5 9C25.3284 9 26 9.67157 26 10.5C26 11.3284 25.3284 12 24.5 12Z" fill="#101012"/><path d="M12 15C15.7058 19.2352 22.2942 19.2352 26 15" stroke="#101012" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const SVG_P1_NEUTRAL = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="white"/><path d="M11.5 16C10.6716 16 10 15.3284 10 14.5C10 13.6716 10.6716 13 11.5 13C12.3284 13 13 13.6716 13 14.5C13 15.3284 12.3284 16 11.5 16Z" fill="#101012"/><path d="M22.5 16C21.6716 16 21 15.3284 21 14.5C21 13.6716 21.6716 13 22.5 13C23.3284 13 24 13.6716 24 14.5C24 15.3284 23.3284 16 22.5 16Z" fill="#101012"/><path d="M12 20H22" stroke="#101012" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const SVG_P1_SAD = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="white"/><path d="M13.5 18C12.6716 18 12 17.3284 12 16.5C12 15.6716 12.6716 15 13.5 15C14.3284 15 15 15.6716 15 16.5C15 17.3284 14.3284 18 13.5 18Z" fill="#101012"/><path d="M24.5 18C23.6716 18 23 17.3284 23 16.5C23 15.6716 23.6716 15 24.5 15C25.3284 15 26 15.6716 26 16.5C26 17.3284 25.3284 18 24.5 18Z" fill="#101012"/><path d="M14 22C16.7614 19.2386 21.2386 19.2386 24 22" stroke="#101012" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const SVG_P2_HAPPY = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="white"/><path d="M7.5 12C6.67157 12 6 11.3284 6 10.5C6 9.67157 6.67157 9 7.5 9C8.32843 9 9 9.67157 9 10.5C9 11.3284 8.32843 12 7.5 12Z" fill="#101012"/><path d="M18.5 12C17.6716 12 17 11.3284 17 10.5C17 9.67157 17.6716 9 18.5 9C19.3284 9 20 9.67157 20 10.5C20 11.3284 19.3284 12 18.5 12Z" fill="#101012"/><path d="M6 15C9.70577 19.2352 16.2942 19.2352 20 15" stroke="#101012" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const SVG_P2_NEUTRAL = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="white"/><path d="M9.5 16C8.67157 16 8 15.3284 8 14.5C8 13.6716 8.67157 13 9.5 13C10.3284 13 11 13.6716 11 14.5C11 15.3284 10.3284 16 9.5 16Z" fill="#101012"/><path d="M20.5 16C19.6716 16 19 15.3284 19 14.5C19 13.6716 19.6716 13 20.5 13C21.3284 13 22 13.6716 22 14.5C22 15.3284 21.3284 16 20.5 16Z" fill="#101012"/><path d="M10 20H20" stroke="#101012" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const SVG_P2_SAD = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="white"/><path d="M7.5 18C6.67157 18 6 17.3284 6 16.5C6 15.6716 6.67157 15 7.5 15C8.32843 15 9 15.6716 9 16.5C9 17.3284 8.32843 18 7.5 18Z" fill="#101012"/><path d="M18.5 18C17.6716 18 17 17.3284 17 16.5C17 15.6716 17.6716 15 18.5 15C19.3284 15 20 15.6716 20 16.5C20 17.3284 19.3284 18 18.5 18Z" fill="#101012"/><path d="M8 22C10.7614 19.2386 15.2386 19.2386 18 22" stroke="#101012" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const VOWEL_BAG = "AAAAAAAAAAAAEEEEEEEEEEEEIIIIIIOOOOOOOOUUUUU";
const CONSONANT_BAG = "SSSSSSNNNNNLLLLRRRRRTTTTDDDDDCCCCGGBBMPPHHFVYQJÑXZ";
const COMMON_CONSONANTS = "SRNLTDC";
const ROUND_TIME = 30;

const state = {
    mode: 'SOLO',
    role: 'HOST',
    myName: '',
    oppName: 'Rival',
    myScore: 0,
    oppScore: 0,
    letters: [],
    timeLeft: ROUND_TIME,
    myWord: null,
    oppWord: null,
    gameActive: false,
    timerInterval: null,
    conn: null,
    peer: null
};

// --- Sound Manager ---
// --- Sound Manager (Web Audio API) ---
const soundManager = {
    audioCtx: null,
    buffers: {},
    soundFiles: {
        pop: 'Recursos/pop.mp3',
        slide: 'Recursos/slide.mp3',
        snap: 'Recursos/snap.mp3',
        win: 'Recursos/win.mp3',
        lose: 'Recursos/lose.mp3',
        validate: 'Recursos/validate.mp3',
        wrong: 'Recursos/wrong.mp3',
        draw: 'Recursos/draw.mp3'
    },
    muted: false,
    initialized: false,

    init() {
        if (this.initialized) return;
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.audioCtx = new AudioContext();
        this.loadSounds();
        this.initialized = true;

        // Unlock audio on first interaction (mobile fix)
        const unlock = () => {
            if (this.audioCtx.state === 'suspended') {
                this.audioCtx.resume();
            }
            document.removeEventListener('touchstart', unlock);
            document.removeEventListener('click', unlock);
        };
        document.addEventListener('touchstart', unlock, { once: true });
        document.addEventListener('click', unlock, { once: true });
    },

    async loadSounds() {
        for (const [name, path] of Object.entries(this.soundFiles)) {
            try {
                const response = await fetch(path);
                const arrayBuffer = await response.arrayBuffer();
                const audioBuffer = await this.audioCtx.decodeAudioData(arrayBuffer);
                this.buffers[name] = audioBuffer;
            } catch (e) {
                console.error(`Error loading sound ${name}:`, e);
            }
        }
    },

    play(name) {
        if (this.muted || !this.buffers[name] || !this.audioCtx) return;

        // Create source
        const source = this.audioCtx.createBufferSource();
        source.buffer = this.buffers[name];

        // Create gain node for volume
        const gainNode = this.audioCtx.createGain();
        gainNode.gain.value = 0.5; // Default volume

        source.connect(gainNode);
        gainNode.connect(this.audioCtx.destination);

        source.start(0);
    },

    toggleMute() {
        this.muted = !this.muted;
        return this.muted;
    }
};

// Initialize immediately to attach unlock listeners
soundManager.init();
let peer, conn, timerId;

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

// Navigation Functions (Phase 3)
function goToNameInput() {
    showScreen('screen-name-input');
    setTimeout(() => document.getElementById('username-new').focus(), 100);
}

function goBackToIntro() {
    showScreen('screen-intro');
}

function startTraining() {
    state.mode = 'SOLO';
    state.myName = '';
    document.body.classList.add('training-mode');

    state.oppName = "";
    startGameUI();
    hostGameLogic();
}

function confirmName() {
    const nameInput = document.getElementById('username-new');
    const name = nameInput.value.trim();

    if (!name) {
        showToast("Por favor, introduce tu nombre");
        return;
    }

    state.mode = 'MULTI';
    state.myName = name;
    document.body.classList.remove('training-mode');

    showScreen('screen-connect');
    initPeer();
}

function initMode(mode) {
    // Legacy support
    if (mode === 'SOLO') startTraining();
    else if (mode === 'MULTI') goToNameInput();
}

function startGameUI() {
    document.body.classList.add('no-bg');
    showScreen('screen-game');
    document.getElementById('name-p2').innerText = state.oppName;

    // Handle P2 card visibility
    if (state.mode === 'SOLO') {
        document.getElementById('p2-card').classList.add('hidden');
    } else {
        document.getElementById('p2-card').classList.remove('hidden');
    }

    updateAvatars();
}

function hostGameLogic() {
    let letters = [];
    const numVowels = Math.random() > 0.5 ? 4 : 5;
    for (let i = 0; i < numVowels; i++) letters.push(randChar(VOWEL_BAG));

    const numConsonants = 10 - numVowels;
    // 3 common consonants
    for (let i = 0; i < 3; i++) letters.push(randChar(COMMON_CONSONANTS));
    // The rest random from full bag
    for (let i = 0; i < numConsonants - 3; i++) letters.push(randChar(CONSONANT_BAG));

    letters.sort(() => Math.random() - 0.5);
    startRound(letters);
    if (state.mode === 'MULTI') sendData({ type: 'NEW_GAME', letters: letters });
}

function startRound(letters) {
    state.letters = letters; state.myWord = null; state.oppWord = null; state.timeLeft = ROUND_TIME;

    document.getElementById('score-p1').innerText = state.myScore;
    document.getElementById('score-p2').innerText = state.oppScore;
    document.getElementById('added-p1').classList.add('hidden');
    document.getElementById('added-p2').classList.add('hidden');

    document.getElementById('game-active-area').classList.remove('hidden');
    document.getElementById('result-panel').classList.add('hidden');

    document.getElementById('card-timer').classList.remove('collapsed');
    if (state.mode === 'SOLO') document.getElementById('card-timer').classList.add('hidden'); // Hide timer in SOLO
    else document.getElementById('card-timer').classList.remove('hidden');

    const btnAction = document.getElementById('btn-action');
    btnAction.disabled = false;
    btnAction.innerText = "Validar";
    btnAction.classList.remove('hidden');
    btnAction.style.opacity = "1"; // Explicitly reset opacity

    const btnLeft = document.getElementById('btn-left');
    btnLeft.innerText = "Nueva partida";
    btnLeft.onclick = handleLeftButton;
    btnLeft.classList.remove('hidden');

    renderBoard(letters);
    if (state.mode === 'MULTI') startTimer();
}

function handleLeftButton() {
    if (state.mode === 'SOLO') {
        hostGameLogic();
    } else {
        // MULTI mode
        const resultPanel = document.getElementById('result-panel');
        if (!resultPanel.classList.contains('hidden')) {
            // End of game - Rematch
            triggerRematch();
        } else {
            // Mid-game
            if (state.role === 'HOST') {
                if (confirm("¿Reiniciar partida?")) hostGameLogic();
            } else {
                showToast("Solo el anfitrión puede reiniciar");
            }
        }
    }
}

function triggerRematch() {
    if (state.mode === 'SOLO') {
        hostGameLogic();
    } else {
        if (state.role === 'HOST') {
            hostGameLogic();
        } else {
            showToast("Solicitando revancha...");
            sendData({ type: 'REMATCH' });
        }
    }
}

function renderBoard(letters) {
    const pool = document.getElementById('pool-zone');
    const word = document.getElementById('word-zone');
    pool.innerHTML = '';
    word.innerHTML = '';

    // Reset container width explicitly at start of round
    document.querySelector('.word-zone-container').style.width = '100%';

    letters.forEach((char, i) => {
        const tile = document.createElement('div');
        tile.className = 'tile deal'; // Add deal class
        tile.style.animationDelay = `${i * 0.1}s`; // Stagger delay
        tile.innerHTML = `<span>${char}</span>`;
        tile.id = `t-${i}`;

        // Play deal sound synchronized with animation
        setTimeout(() => {
            soundManager.play('slide');
        }, i * 100);

        tile.addEventListener('animationend', () => {
            tile.classList.remove('deal');
            tile.style.animationDelay = '';
        }, { once: true });

        // Initialize drag and drop
        initDrag(tile);

        tile.onclick = () => {
            if (isDragging) return; // Prevent click if we just dragged
            if (state.myWord) return;
            if (tile.parentElement === word) returnToEmptySlot(tile);
            else word.appendChild(tile);
        };
        const slot = document.createElement('div'); slot.className = 'slot'; slot.appendChild(tile); pool.appendChild(slot);
    });
}

let isDragging = false;
let dragSrcEl = null;
let clone = null;
let startX, startY;
let wordZoneY, poolZoneY, totalZoneDist;
let largeStyles = {}, smallStyles = {};

function initDrag(tile) {
    tile.addEventListener('pointerdown', onPointerDown);
}

function onPointerDown(e) {
    if (!e.isPrimary) return; // Ignore multi-touch
    if (state.myWord) return; // Game ended

    // Aggressive Cleanup
    if (clone) {
        clone.remove();
        clone = null;
    }
    if (dragSrcEl) {
        dragSrcEl.classList.remove('placeholder');
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
        window.removeEventListener('pointercancel', onPointerUp);
        if (dragSrcEl.hasPointerCapture(e.pointerId)) {
            dragSrcEl.releasePointerCapture(e.pointerId);
        }
    }

    dragSrcEl = e.currentTarget; // Use currentTarget to get the tile
    startX = e.clientX;
    startY = e.clientY;
    isDragging = false;

    // 1. Calculate Zone Positions
    const wordZone = document.getElementById('word-zone');
    const wordRect = wordZone.getBoundingClientRect();
    wordZoneY = wordRect.top + (wordRect.height / 2);

    const poolZone = document.getElementById('pool-zone');
    const poolRect = poolZone.getBoundingClientRect();
    poolZoneY = poolRect.top + (poolRect.height / 2);

    totalZoneDist = Math.abs(poolZoneY - wordZoneY);

    // 2. Define Styles
    smallStyles = { width: 32, height: 40, fontSize: 24, borderRadius: 12 };

    if (dragSrcEl.closest('#pool-zone')) {
        const style = window.getComputedStyle(dragSrcEl);
        largeStyles = {
            width: parseFloat(style.width),
            height: parseFloat(style.height),
            fontSize: parseFloat(style.fontSize),
            borderRadius: parseFloat(style.borderRadius)
        };
    } else {
        const poolTile = document.querySelector('#pool-zone .tile');
        if (poolTile) {
            const style = window.getComputedStyle(poolTile);
            largeStyles = {
                width: parseFloat(style.width),
                height: parseFloat(style.height),
                fontSize: parseFloat(style.fontSize),
                borderRadius: parseFloat(style.borderRadius)
            };
        } else {
            const temp = document.createElement('div');
            temp.className = 'tile';
            document.getElementById('pool-zone').appendChild(temp);
            const style = window.getComputedStyle(temp);
            largeStyles = {
                width: parseFloat(style.width),
                height: parseFloat(style.height),
                fontSize: parseFloat(style.fontSize),
                borderRadius: parseFloat(style.borderRadius)
            };
            temp.remove();
        }
    }

    // Capture pointer (still good for some browsers, but window listeners are safer)
    dragSrcEl.setPointerCapture(e.pointerId);

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);

    soundManager.play('pop'); // Play sound immediately on touch/click
}

function onPointerMove(e) {
    if (!dragSrcEl) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    // Threshold to start dragging
    if (!isDragging && Math.sqrt(dx * dx + dy * dy) > 5) {
        isDragging = true;
        createClone(e);
        dragSrcEl.classList.add('placeholder');
    }

    if (isDragging && clone) {
        // Update Clone Position
        const currentY = e.clientY;
        const currentX = e.clientX;

        // --- 1. Visual Interpolation (Clone) ---
        let distFromWord = currentY - wordZoneY;
        let progress = distFromWord / totalZoneDist;
        progress = Math.max(0, Math.min(1, progress));

        const curW = smallStyles.width + ((largeStyles.width - smallStyles.width) * progress);
        const curH = smallStyles.height + ((largeStyles.height - smallStyles.height) * progress);
        const curFS = smallStyles.fontSize + ((largeStyles.fontSize - smallStyles.fontSize) * progress);
        const curBR = smallStyles.borderRadius + ((largeStyles.borderRadius - smallStyles.borderRadius) * progress);

        clone.style.width = `${curW}px`;
        clone.style.height = `${curH}px`;
        clone.style.fontSize = `${curFS}px`;
        clone.style.borderRadius = `${curBR}px`;

        clone.style.left = `${currentX - curW / 2}px`;
        clone.style.top = `${currentY - curH / 2}px`;

        // NO Live DOM Sorting. We wait for drop.
    }
}

function onPointerUp(e) {
    if (!dragSrcEl) return;

    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('pointercancel', onPointerUp);

    if (dragSrcEl.hasPointerCapture(e.pointerId)) {
        dragSrcEl.releasePointerCapture(e.pointerId);
    }

    if (isDragging) {
        const currentX = e.clientX;
        const currentY = e.clientY;

        // Hide clone to see what's underneath
        if (clone) clone.style.display = 'none';

        const target = document.elementFromPoint(currentX, currentY);
        const wordZone = document.getElementById('word-zone');
        const poolZone = document.getElementById('pool-zone');

        let dropped = false;

        if (target) {
            // 1. Drop in Word Zone
            if (wordZone.contains(target) || target.closest('.word-zone-container')) {
                // Simple Append/Prepend Logic based on center of container
                const container = document.querySelector('.word-zone-container');
                const rect = container.getBoundingClientRect();
                const center = rect.left + rect.width / 2;

                if (currentX < center) {
                    wordZone.prepend(dragSrcEl);
                } else {
                    wordZone.appendChild(dragSrcEl);
                }
                dropped = true;
                soundManager.play('snap'); // Sound effect
            }
            // 2. Drop in Pool Zone
            else if (poolZone.contains(target)) {
                const slot = target.closest('.slot');
                if (slot && slot.children.length === 0) {
                    slot.appendChild(dragSrcEl);
                    dropped = true;
                    soundManager.play('slide'); // Sound effect
                } else {
                    // Just put it in the first empty slot if dropped loosely in pool
                    const emptySlot = document.querySelector('.slot:empty');
                    if (emptySlot) {
                        emptySlot.appendChild(dragSrcEl);
                        dropped = true;
                        soundManager.play('slide'); // Sound effect
                    }
                }
            }

            if (!dropped) {
                returnToEmptySlot(dragSrcEl);
            }

            if (clone) clone.remove();
            clone = null;
            dragSrcEl.classList.remove('placeholder');

            setTimeout(() => { isDragging = false; dragSrcEl = null; }, 50);
        } else {
            dragSrcEl = null;
        }
    }
}

function createClone(e) {
    clone = dragSrcEl.cloneNode(true);
    clone.classList.add('dragging');
    clone.classList.remove('placeholder');

    // Initial size will be set by the first pointermove, but let's set a safe default
    // to avoid a 1-frame jump. We can use the current computed style of the source.
    const rect = dragSrcEl.getBoundingClientRect();
    const style = window.getComputedStyle(dragSrcEl);

    clone.style.width = style.width;
    clone.style.height = style.height;
    clone.style.fontSize = style.fontSize;
    clone.style.borderRadius = style.borderRadius;

    // Initial position
    clone.style.left = `${e.clientX - rect.width / 2}px`;
    clone.style.top = `${e.clientY - rect.height / 2}px`;

    // Random rotation
    const angle = (Math.random() - 0.5) * 16; // -8 to +8 degrees
    clone.style.setProperty('--drag-rotate', `${angle}deg`);

    document.body.appendChild(clone);
}

function handleDrop(target) {
    // This function seems unused in the current logic as onPointerUp handles the drop.
    // Keeping it if it's referenced elsewhere, but the main logic is in onPointerUp.
}
function animateReturnToPool(tile) {
    // 1. Get current position (Word Zone)
    const startRect = tile.getBoundingClientRect();

    // 2. Find target slot (First empty in Pool)
    const emptySlot = document.querySelector('.slot:empty');
    if (!emptySlot) return; // Should not happen if logic is correct

    const targetRect = emptySlot.getBoundingClientRect();

    // 3. Create a flying clone
    const flyer = tile.cloneNode(true);
    flyer.classList.add('flying-back');
    flyer.classList.remove('dragging', 'placeholder', 'shake'); // Remove shake!

    // Reset styles to match the "blue" pool look immediately or during transition
    // We want it to look like the tile in the word zone first
    flyer.style.width = `${startRect.width}px`;
    flyer.style.height = `${startRect.height}px`;
    flyer.style.left = `${startRect.left}px`;
    flyer.style.top = `${startRect.top}px`;
    flyer.style.margin = '0';
    flyer.style.transform = 'none';

    // Explicitly reset color to blue (pool style)
    // Assuming pool tiles have a specific class or lack of 'word-zone' class
    // If color is set via CSS variable or background-color, reset it here.
    // Let's try removing inline styles first, then applying pool look.
    // Actually, we want it to transition TO blue.
    // So start with current look, then change.

    document.body.appendChild(flyer);

    // Hide original immediately (it will be moved to slot)
    tile.style.opacity = '0';

    // Clean original tile classes and styles
    tile.classList.remove('shake', 'validating', 'error');
    tile.style.backgroundColor = ''; // Reset inline color if any
    tile.style.color = ''; // Reset inline color if any

    emptySlot.appendChild(tile);

    // Force reflow
    flyer.offsetHeight;

    // 4. Animate to target
    flyer.style.left = `${targetRect.left}px`;
    flyer.style.top = `${targetRect.top}px`;
    flyer.style.width = `${targetRect.width}px`;
    flyer.style.height = `${targetRect.height}px`;

    // Transition color to blue
    flyer.style.backgroundColor = '#00B3E3'; // Pool blue color
    flyer.style.color = '#101012'; // Keep text dark

    // 5. Cleanup
    setTimeout(() => {
        flyer.remove();
        tile.style.opacity = '1';
    }, 500); // Match CSS transition duration
}

function returnToEmptySlot(tile) {
    const slots = document.querySelectorAll('.pool-zone .slot');
    for (let s of slots) { if (s.children.length === 0) { s.appendChild(tile); break; } }
}

function startTimer() { clearInterval(timerId); updateTimerDisplay(); timerId = setInterval(() => { state.timeLeft--; updateTimerDisplay(); if (state.timeLeft <= 0) { clearInterval(timerId); timeUp(); } }, 1000); }
function updateTimerDisplay() {
    const el = document.getElementById('timer-val');
    el.innerText = state.timeLeft;
    if (state.timeLeft <= 10) el.style.color = '#FF5F22';
    else if (state.timeLeft <= 20) el.style.color = '#FFB900';
    else el.style.color = '#FFFFFF';
}
function timeUp() { if (!state.myWord) submitWord(true); }

function animateFailureAndReset(tiles) {
    const wordZone = document.getElementById('word-zone');
    const poolZone = document.getElementById('pool-zone');
    const btn = document.getElementById('btn-action');

    tiles.forEach((t, index) => {
        setTimeout(() => {
            t.classList.remove('validating');
            t.classList.add('fail');
        }, index * 80);
    });

    // Add error class to container
    const container = document.querySelector('.word-zone-container');
    container.classList.add('container-error');

    setTimeout(() => {
        tiles.forEach(t => {
            t.classList.remove('fail');
            t.style.transform = ''; // Reset any transform applied by shake
            t.style.backgroundColor = ''; // Explicitly clear inline background color if any
        });

        // Move tiles back to pool
        // Collect tiles from wordZone first to avoid issues with live NodeList
        const tilesToMove = Array.from(wordZone.children);
        tilesToMove.forEach(tile => {
            // Reset class to base tile class to ensure no residual state classes
            tile.className = 'tile';

            // Find an empty slot in the pool or just append
            const slots = poolZone.querySelectorAll('.slot');
            let moved = false;
            for (let s of slots) {
                if (s.children.length === 0) {
                    s.appendChild(tile);
                    moved = true;
                    break;
                }
            }
            if (!moved) { // Fallback if no empty slot found
                const slot = document.createElement('div');
                slot.className = 'slot';
                slot.appendChild(tile);
                poolZone.appendChild(slot);
            }
            // Re-bind click handler to move to word zone
            tile.onclick = () => { if (state.myWord) return; if (tile.parentElement.parentElement === poolZone) wordZone.appendChild(tile); else returnToEmptySlot(tile); };

            // Force remove any inline styles that might persist
            tile.removeAttribute('style');
        });

        state.myWord = null; // Reset myWord state
        btn.disabled = false;
        btn.innerText = "Validar";
        btn.style.opacity = "1"; // Reset opacity

        // Reset container width to full and remove error class
        const container = document.querySelector('.word-zone-container');
        container.style.width = '100%';
        container.classList.remove('container-error');


    }, 1000); // Duration for the fail animation and reset
}

async function validateWord() {
    const btn = document.getElementById('btn-action'); btn.disabled = true; btn.innerText = "Validando...";
    let wordStr = ""; document.querySelectorAll('#word-zone .tile').forEach(t => wordStr += t.textContent);

    const doShake = () => {
        const myTiles = document.querySelectorAll('#word-zone .tile');
        myTiles.forEach(t => {
            t.classList.remove('shake');
            void t.offsetWidth;
            t.classList.add('shake');
        });
    };

    const myTiles = document.querySelectorAll('#word-zone .tile');

    if (wordStr.length < 2) {
        showToast("⚠️ Mínimo 2 letras");
        doShake();

        // Animate failure
        soundManager.play('wrong');
        state.myWord = null; // Reset state
        btn.disabled = false; btn.innerText = "Validar"; // Reset button

        // Wait for shake to finish before flying back
        setTimeout(() => {
            myTiles.forEach((tile, index) => {
                setTimeout(() => {
                    animateReturnToPool(tile);
                }, index * 50);
            });
        }, 500);
        return;
    }

    try {
        // 1. Try exact match (Lightweight + Extract)
        // We need 'extracts' to check for "== Español =="
        let res = await fetch(`https://es.wiktionary.org/w/api.php?action=query&titles=${wordStr.toLowerCase()}&prop=extracts&explaintext&format=json&origin=*`);
        let data = await res.json();

        let validPage = null;
        let pages = data.query.pages;

        // Helper to check if page is valid Spanish
        const isSpanish = (page) => {
            if (!page || page.missing !== undefined) return false;
            if (!page.extract) return false; // No text? Suspicious.
            return page.extract.includes('== Español ==');
        };

        if (Object.keys(pages)[0] !== "-1") {
            const p = Object.values(pages)[0];
            if (isSpanish(p)) {
                validPage = p;
            }
        }

        if (!validPage) {
            // 2. Fuzzy match: Try adding accents (Lightweight + Extract)
            const vowels = { 'a': 'á', 'e': 'é', 'i': 'í', 'o': 'ó', 'u': 'ú' };
            const candidates = [];
            const lower = wordStr.toLowerCase();

            for (let i = 0; i < lower.length; i++) {
                const char = lower[i];
                if (vowels[char]) {
                    const candidate = lower.substring(0, i) + vowels[char] + lower.substring(i + 1);
                    candidates.push(candidate);
                }
            }

            if (candidates.length > 0) {
                const titles = candidates.join('|');
                res = await fetch(`https://es.wiktionary.org/w/api.php?action=query&titles=${titles}&prop=extracts&explaintext&format=json&origin=*`);
                data = await res.json();
                pages = data.query.pages;

                for (const pageId in pages) {
                    if (pageId !== "-1") {
                        const p = pages[pageId];
                        if (isSpanish(p)) {
                            validPage = p;
                            break;
                        }
                    }
                }
            }
        }

        if (!validPage) {
            showToast(`🚩 ¡No te inventes palabras!`);
            btn.disabled = false; btn.innerText = "Validar";
            myTiles.forEach(t => t.classList.remove('validating'));
            doShake();
            soundManager.play('wrong');
            state.myWord = null;
            setTimeout(() => {
                myTiles.forEach((tile, index) => {
                    setTimeout(() => {
                        animateReturnToPool(tile);
                    }, index * 50);
                });
            }, 500);
            return;
        }

        // Success - Trigger validation animation and shrink container
        shrinkContainer();
        soundManager.play('validate');
        myTiles.forEach((t, index) => { setTimeout(() => { t.classList.add('validating'); }, index * 80); });

        await new Promise(r => setTimeout(r, 800)); // Wait for animation

        if (state.mode === 'SOLO') {
            animateSuccessAndClear(myTiles);
            showGameStatus("👏 ¡Palabra correcta!", 2000);
            btn.innerText = "¡Correcto!";

            state.myScore += wordStr.length;
            document.getElementById('score-p1').innerText = state.myScore;
            updateAddedScore('added-p1', wordStr.length, 'win');
            setTimeout(() => document.getElementById('score-p1').classList.add('pop'), 50);
            setTimeout(() => document.getElementById('score-p1').classList.remove('pop'), 350);

            setTimeout(() => {
                hostGameLogic(); // Start new round directly
            }, 2000);
            return;
        }
        submitWord(false, validPage.title); // Use correct title (with accents)
    } catch (e) {
        // Re-enable button on error
        const btn = document.getElementById('btn-action');
        btn.disabled = false;
        btn.innerText = "Validar";
        return;
    }
}

function animateSuccessAndClear(tiles) {
    document.getElementById('pool-zone').innerHTML = '';
    tiles.forEach((t, index) => { setTimeout(() => { t.classList.add('success'); }, index * 50); });
    soundManager.play('win'); // Play win sound with confetti
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    // The message "👏 ¡Palabra correcta!" is now handled by showGameStatus in validateWord with a duration.
}

function submitWord(forced, wordStr = "") {
    state.myWord = wordStr;
    const btn = document.getElementById('btn-action');
    btn.disabled = true;
    btn.innerText = "Enviado";
    btn.style.opacity = "0.4";

    // Clear pool to avoid stuck hover states
    document.getElementById('pool-zone').innerHTML = '';

    if (state.mode === 'MULTI' && !state.oppWord) {
        showGameStatus(`🥱 Esperando a ${state.oppName}...`); // Waiting message
    }
    if (state.mode === 'MULTI') {
        // Container already shrunk in validateWord
        sendData({ type: 'SUBMIT', word: wordStr });
        checkEndRound();
    }
}

function checkEndRound() {
    if (state.myWord !== null && state.oppWord !== null) {
        clearInterval(timerId);
        hideGameStatus(); // Hide any status message
        finishRound();
    }
}

function finishRound() {
    document.getElementById('card-timer').classList.add('collapsed');
    const myLen = state.myWord ? state.myWord.length : 0;
    const oppLen = state.oppWord ? state.oppWord.length : 0;

    let type = "DRAW";
    let p1AddScore = 0, p2AddScore = 0;
    let p1Class = "", p2Class = "";

    if (myLen > oppLen) {
        type = "WIN"; state.myScore += myLen; p1AddScore = myLen; p1Class = "win";
        soundManager.play('win'); // Play win sound
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    }
    else if (myLen < oppLen) {
        type = "LOSE"; state.oppScore += oppLen; p2AddScore = oppLen; p2Class = "win";
        soundManager.play('lose'); // Play lose sound
    }
    else {
        type = "DRAW"; state.myScore += myLen; state.oppScore += oppLen;
        p1AddScore = myLen; p2AddScore = oppLen;
        p1Class = "draw"; p2Class = "draw";
        soundManager.play('draw'); // Play draw sound
    }

    updateAddedScore('added-p1', p1AddScore, p1Class);
    updateAddedScore('added-p2', p2AddScore, p2Class);

    updateAvatars(type);
    showResultPanel(type);

    setTimeout(() => {
        startScoreAnimation('p1', p1AddScore);
        startScoreAnimation('p2', p2AddScore);
    }, 1500);
}

function startScoreAnimation(player, addedScore) {
    if (addedScore === 0) return;

    const addedEl = document.getElementById(`added-${player}`);
    const scoreEl = document.getElementById(`score-${player}`);
    const isP1 = player === 'p1';

    // Just show added score statically
    addedEl.classList.remove('hidden');
    addedEl.classList.add('visible');

    // Update total score immediately (or after a short delay if preferred, but user asked for static added points)
    // Let's keep the logic where added points stay visible for a bit then disappear?
    // "Pon los puntos que se añaden al lado del total pero estáticos" -> "Put the added points next to total but static"
    // "Que desaparezcan (solo con fade) y se anime el total" -> "Make them disappear (fade only) and animate total"

    setTimeout(() => {
        // Hide added score (fade out)
        addedEl.classList.remove('visible');

        setTimeout(() => {
            addedEl.classList.add('hidden');
            // Update total score and pop
            scoreEl.innerText = isP1 ? state.myScore : state.oppScore;

            // Check if it was a draw to apply yellow color to pop
            const isDraw = addedEl.classList.contains('draw');
            if (isDraw) scoreEl.style.color = 'var(--warning)';

            scoreEl.classList.add('pop');

            setTimeout(() => {
                scoreEl.classList.remove('pop');
                scoreEl.style.color = ''; // Reset color
            }, 300);
        }, 500); // Wait for fade out
    }, 1500); // Keep them visible for 1.5s
}

function updateAddedScore(id, score, cls) {
    const el = document.getElementById(id);
    if (cls && score > 0) {
        el.innerText = `+${score}`;
        el.className = `added ${cls}`; // Reset classes, keep 'added' and type
        // Don't show yet, wait for animation trigger
    } else {
        el.classList.add('hidden');
        el.classList.remove('visible');
    }
}

function shrinkContainer() {
    const container = document.querySelector('.word-zone-container');
    const tiles = document.querySelectorAll('#word-zone .tile');
    const tileWidth = 32;
    const tileGap = 4;
    const containerPadding = 16; // 8px padding on each side (if any, or just visual buffer)
    // Actually .word-zone has gap 4px. Container has no padding defined in CSS but let's keep the logic if it looked good.
    // Wait, .word-zone-container is just a wrapper. .word-zone is the flex container.
    // If we shrink the wrapper, we center the content.
    // Let's calculate exact width needed.
    const contentWidth = (tiles.length * tileWidth) + ((tiles.length - 1) * tileGap) + 16; // +16 for safety/padding
    container.style.width = `${contentWidth}px`;
}

function showResultPanel(type) {
    document.getElementById('game-active-area').classList.add('hidden');
    document.getElementById('result-panel').classList.remove('hidden');

    // Update avatars based on result
    updateAvatars(type);

    const icon = document.getElementById('res-icon');
    const title = document.getElementById('res-title');
    const subtitle = document.getElementById('res-subtitle');

    const myContainer = document.getElementById('res-my-word');
    const oppContainer = document.getElementById('res-opp-word');

    // Reset visibility and opacities
    [icon, title, subtitle].forEach(el => el.style.opacity = '1');
    myContainer.style.display = 'inline-flex';
    oppContainer.style.display = 'inline-flex';

    if (type === 'WIN') {
        icon.innerText = "🎉"; title.innerText = "¡Has ganado!";
        if (state.oppWord) {
            subtitle.innerText = `${state.oppName} ha perdido con:`;
            renderResultTiles('res-opp-word', state.oppWord, 'fail');
            oppContainer.className = 'word-result-row container-lose';
        } else {
            subtitle.innerText = `¡A ${state.oppName} se le ha acabado el tiempo!`;
            oppContainer.style.display = 'none'; // Hide container
        }
        renderResultTiles('res-my-word', state.myWord, 'success');
        myContainer.className = 'word-result-row container-win';
    } else if (type === 'LOSE') {
        if (!state.myWord) {
            icon.innerText = "⏳"; title.innerText = "¡Se acabó el tiempo!";
            subtitle.innerText = `${state.oppName} ha ganado con:`;
            myContainer.style.display = 'none'; // Hide container
        } else {
            icon.innerText = "😭"; title.innerText = "Oh... ¡has perdido!";
            subtitle.innerText = `${state.oppName} ha ganado con:`;
            renderResultTiles('res-my-word', state.myWord, 'fail');
            myContainer.className = 'word-result-row container-lose';
        }
        renderResultTiles('res-opp-word', state.oppWord, 'success');
        oppContainer.className = 'word-result-row container-win';
    } else {
        if (!state.myWord && !state.oppWord) {
            icon.innerText = "⏳"; title.innerText = "¡Se acabó el tiempo!";
            subtitle.innerText = "¡Habéis perdido los dos, vaya disgusto!";
            myContainer.style.display = 'none';
            oppContainer.style.display = 'none';
        } else {
            icon.innerText = "🤝"; title.innerText = "¡Habéis empatado!";
            subtitle.innerText = `${state.oppName} ha puesto:`;
            renderResultTiles('res-my-word', state.myWord, 'draw');
            renderResultTiles('res-opp-word', state.oppWord, 'draw');
            myContainer.className = 'word-result-row container-draw';
            oppContainer.className = 'word-result-row container-draw';
        }
    }
}

function renderResultTiles(containerId, word, statusClass) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    if (!word) word = "";
    word.split('').forEach((char, index) => {
        const tile = document.createElement('div');
        tile.className = `tile`;
        // Remove accents for display, but keep Ñ
        const displayChar = char.toUpperCase()
            .replace('Á', 'A')
            .replace('É', 'E')
            .replace('Í', 'I')
            .replace('Ó', 'O')
            .replace('Ú', 'U')
            .replace('Ü', 'U');

        tile.innerHTML = `<span>${displayChar}</span>`;
        tile.style.animationDelay = `${index * 0.1}s`;
        if (statusClass === 'success') tile.classList.add('success');
        else if (statusClass === 'draw') tile.classList.add('draw');
        else if (statusClass === 'fail') tile.classList.add('fail');
        container.appendChild(tile);
    });
}

function setAvatar(containerId, type) {
    const el = document.getElementById(containerId);
    let svgData;
    if (containerId === 'icon-p1') {
        if (type === 'happy') svgData = SVG_P1_HAPPY;
        else if (type === 'sad') svgData = SVG_P1_SAD;
        else svgData = SVG_P1_NEUTRAL;
    } else if (containerId === 'icon-p2') {
        if (type === 'happy') svgData = SVG_P2_HAPPY;
        else if (type === 'sad') svgData = SVG_P2_SAD;
        else svgData = SVG_P2_NEUTRAL;
    }
    el.innerHTML = svgData;
}

function updateAvatars(roundResult) {
    let p1State = 'neutral';
    let p2State = 'neutral';

    if (roundResult) {
        // End of round logic
        if (roundResult === 'WIN') { p1State = 'happy'; p2State = 'sad'; }
        else if (roundResult === 'LOSE') { p1State = 'sad'; p2State = 'happy'; }
        else { p1State = 'neutral'; p2State = 'neutral'; }
    } else {
        // Start of game / Score based logic
        if (state.myScore > state.oppScore) { p1State = 'happy'; p2State = 'sad'; }
        else if (state.myScore < state.oppScore) { p1State = 'sad'; p2State = 'happy'; }
        else { p1State = 'neutral'; p2State = 'neutral'; }
    }
    setAvatar('icon-p1', p1State);
    setAvatar('icon-p2', p2State);
}


function initPeer() {
    if (peer) return;
    document.getElementById('my-code').innerText = "Cargando ID...";

    // Timeout warning
    const timeoutId = setTimeout(() => {
        if (document.getElementById('my-code').innerText === "Cargando ID...") {
            showToast("Tarda un poco... comprueba tu conexión");
        }
    }, 5000);

    const peerConfig = {
        debug: 1,
        config: {
            iceServers: [
                { urls: 'stun:stun.l.google.com:19302' },
                { urls: 'stun:stun1.l.google.com:19302' },
                { urls: 'stun:stun2.l.google.com:19302' },
                { urls: 'stun:stun3.l.google.com:19302' },
                { urls: 'stun:stun4.l.google.com:19302' },
            ]
        }
    };
    peer = new Peer(null, peerConfig);
    peer.on('open', (id) => {
        clearTimeout(timeoutId);
        document.getElementById('my-code').innerText = id;
    });
    peer.on('connection', (c) => { state.role = 'HOST'; setupConn(c); });
    peer.on('error', (err) => {
        clearTimeout(timeoutId);
        showToast("Error: " + (err.type === 'peer-unavailable' ? 'Rival no encontrado' : err.type));
    });
}
async function joinGame() {
    const code = document.getElementById('friend-code').value.trim();
    if (!code) return showToast("Introduce un código");

    state.role = 'GUEST';
    const btn = document.querySelector('#screen-connect .btn-full'); // Assuming there's a button here, or we use the input action
    // Note: The button calling this is actually "O introduce aquí el suyo" input enter or similar? 
    // Wait, the UI has an input and likely a button or just enter. 
    // Looking at index.html (from memory/context), there isn't a dedicated "Join" button next to the input, 
    // but usually there is one or the input triggers it. 
    // Let's assume the user clicks a button or hits enter.

    // Retry Logic
    let attempts = 0;
    const maxAttempts = 3;
    let connected = false;

    while (attempts < maxAttempts && !connected) {
        attempts++;
        showToast(attempts > 1 ? `Reintentando (${attempts}/${maxAttempts})...` : "Conectando...");

        try {
            await new Promise((resolve, reject) => {
                const conn = peer.connect(code, { reliable: true });

                const timeout = setTimeout(() => {
                    conn.close();
                    reject(new Error("Timeout"));
                }, 4000); // 4s timeout

                conn.on('open', () => {
                    clearTimeout(timeout);
                    setupConn(conn);
                    resolve();
                });

                conn.on('error', (err) => {
                    clearTimeout(timeout);
                    reject(err);
                });

                // Also handle immediate close if it happens
                conn.on('close', () => {
                    // If it closes before opening, it's a fail
                    // But we can't easily distinguish "closed" from "just closed".
                    // We rely on timeout if it doesn't open.
                });
            });
            connected = true;
        } catch (e) {
            console.log(`Connection attempt ${attempts} failed:`, e);
            await new Promise(r => setTimeout(r, 1000)); // Wait 1s before retry
        }
    }

    if (!connected) {
        showToast("❌ No se pudo conectar. Verifica el código.");
    }
}
function setupConn(c) {
    conn = c;
    const sendHello = () => conn.send({ type: 'HELLO', name: state.myName });
    if (conn.open) sendHello();
    else conn.on('open', sendHello);

    conn.on('data', (d) => {
        if (d.type === 'HELLO') {
            state.oppName = d.name;
            startGameUI();
            showGameStatus(`✅ Te has conectado con ${state.oppName}`, 3000); // Connection message with 3s duration
            if (state.role === 'HOST') setTimeout(hostGameLogic, 500);
        }
        if (d.type === 'NEW_GAME') startRound(d.letters);
        if (d.type === 'SUBMIT') {
            state.oppWord = d.word;
            checkEndRound();
            if (state.myWord) {
                // Both finished
            } else {
                showGameStatus(`⌛️ ¡${state.oppName} ya ha acabado!`); // Opponent finished first
            }
        }
        if (d.type === 'REMATCH') hostGameLogic();
    });
    conn.on('error', (err) => showToast("Error conexión: " + err));
    conn.on('close', () => showToast("Conexión cerrada"));
}
function sendData(d) { if (conn && conn.open) conn.send(d); }
function randChar(str) { return str.charAt(Math.floor(Math.random() * str.length)); }
function copyCode() {
    const code = document.getElementById('my-code').innerText;
    if (code.includes("...")) return;
    navigator.clipboard.writeText(code);
    const btn = document.querySelector('.btn-copy');
    const originalText = btn.innerText;
    btn.innerText = "Código copiado";
    setTimeout(() => {
        btn.innerText = "Copiar código";
    }, 5000);
}
function showToast(msg) {
    const t = document.getElementById('toast');
    t.innerText = msg;
    t.style.display = 'block';
    setTimeout(() => t.style.display = 'none', 3000);
}

function showGameStatus(msg, duration = 0) {
    const el = document.getElementById('game-status-message');
    el.innerText = msg;
    el.classList.add('visible');
    if (duration > 0) {
        setTimeout(() => el.classList.remove('visible'), duration);
    }
}

function hideGameStatus() {
    document.getElementById('game-status-message').classList.remove('visible');
}

// --- Rive Integration ---
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('rive-canvas');
    if (canvas) {
        // Resize canvas to fill screen
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Initialize Rive
        // Placeholder animation removed as requested.
        // Uncomment and update 'src' when you have your own .riv file.
        /*
        try {
            const r = new rive.Rive({
                src: 'path/to/your/animation.riv', // <--- PUT YOUR FILE HERE
                canvas: canvas,
                autoplay: true,
                stateMachines: 'State Machine 1',
                onLoad: () => {
                    console.log('Rive animation loaded');
                    r.resizeDrawingSurfaceToCanvas();
                },
            });
        } catch (e) {
            console.log('Rive library not loaded or error initializing', e);
        }
        */
    }

    // Mute Button Logic
    const btnMute = document.getElementById('btn-mute');
    if (btnMute) {
        btnMute.addEventListener('click', () => {
            const isMuted = soundManager.toggleMute();
            btnMute.textContent = isMuted ? '🔇' : '🔊';
        });
    }
});

function showSoloResult(word, definition) {
    document.getElementById('game-active-area').classList.add('hidden');
    document.getElementById('result-panel').classList.remove('hidden');

    // Update avatars
    setAvatar('icon-p1', 'happy');

    const icon = document.getElementById('res-icon');
    const title = document.getElementById('res-title');
    const subtitle = document.getElementById('res-subtitle');
    const myContainer = document.getElementById('res-my-word');
    const oppContainer = document.getElementById('res-opp-word');

    // Reset visibility
    [icon, title, subtitle].forEach(el => el.style.opacity = '1');
    myContainer.style.display = 'inline-flex';
    oppContainer.style.display = 'none'; // Hide opponent container

    icon.innerText = "🤓";
    title.innerText = "¡Palabra curiosa!";

    // Clean definition
    let defText = definition || "Definición no disponible.";

    // Try to extract the first definition (starting with "1")
    // Regex looks for "1 " or "1\n" followed by text
    const match = defText.match(/(?:^|\n)1\s+(?:[^\n]+\n)?([^\n]+)/);
    if (match && match[1]) {
        defText = match[1];
    } else {
        // Fallback: Remove headers (== ... ==) and take first non-empty line that isn't a header
        const lines = defText.split('\n').filter(l => l.trim() && !l.startsWith('='));
        if (lines.length > 0) {
            // Skip etymology if it's the first line (often starts with "Del")
            if (lines[0].startsWith('Del ') && lines.length > 1) defText = lines[1];
            else defText = lines[0];
        }
    }

    if (defText.length > 150) defText = defText.substring(0, 150) + "...";

    subtitle.innerText = defText;
    subtitle.style.fontSize = "18px";
    subtitle.style.lineHeight = "1.4";
    subtitle.style.padding = "0 20px";

    renderResultTiles('res-my-word', word, 'success');
    myContainer.className = 'word-result-row container-win';
}
