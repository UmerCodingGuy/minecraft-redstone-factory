/*
=========================================================
MINECRAFT REDSTONE FACTORY
LEVEL 9
SCRIPT.JS

Plain JavaScript factory simulation.
=========================================================
*/


// =====================================================
// DOM ELEMENTS
// =====================================================

const mainMenu =
    document.getElementById("mainMenu");

const gameScreen =
    document.getElementById("gameScreen");


// Menu

const playBtn =
    document.getElementById("playBtn");

const continueBtn =
    document.getElementById("continueBtn");

const challengeBtn =
    document.getElementById("challengeBtn");

const statisticsBtn =
    document.getElementById("statisticsBtn");

const settingsBtn =
    document.getElementById("settingsBtn");

const saveIndicator =
    document.getElementById("saveIndicator");

const saveStatusText =
    document.getElementById("saveStatusText");


// HUD

const coinsDisplay =
    document.getElementById("coinsDisplay");

const powerDisplay =
    document.getElementById("powerDisplay");

const ipmDisplay =
    document.getElementById("ipmDisplay");

const storageDisplay =
    document.getElementById("storageDisplay");

const efficiencyDisplay =
    document.getElementById("efficiencyDisplay");

const dayDisplay =
    document.getElementById("dayDisplay");

const weatherDisplay =
    document.getElementById("weatherDisplay");

const muteBtn =
    document.getElementById("muteBtn");

const gameMenuBtn =
    document.getElementById("gameMenuBtn");


// Challenge

const challengeHud =
    document.getElementById("challengeHud");

const challengeTarget =
    document.getElementById("challengeTarget");

const challengeTime =
    document.getElementById("challengeTime");


// Factory

const canvas =
    document.getElementById("factoryCanvas");

const ctx =
    canvas.getContext("2d");

const rotateBtn =
    document.getElementById("rotateBtn");

const selectedDirection =
    document.getElementById("selectedDirection");

const selectedToolText =
    document.getElementById("selectedToolText");

const factoryMessage =
    document.getElementById("factoryMessage");

const toolButtons =
    document.querySelectorAll(".tool-btn");


// Factory controls

const inventoryBtn =
    document.getElementById("inventoryBtn");

const upgradesBtn =
    document.getElementById("upgradesBtn");

const sellBtn =
    document.getElementById("sellBtn");

const statisticsGameBtn =
    document.getElementById("statisticsGameBtn");

const saveBtn =
    document.getElementById("saveBtn");

const helpBtn =
    document.getElementById("helpBtn");


// Settings

const settingsPanel =
    document.getElementById("settingsPanel");

const closeSettingsBtn =
    document.getElementById("closeSettingsBtn");

const soundToggleBtn =
    document.getElementById("soundToggleBtn");

const musicToggleBtn =
    document.getElementById("musicToggleBtn");

const effectsToggleBtn =
    document.getElementById("effectsToggleBtn");


// Statistics

const statisticsPanel =
    document.getElementById("statisticsPanel");

const closeStatisticsBtn =
    document.getElementById("closeStatisticsBtn");

const statItemsProduced =
    document.getElementById("statItemsProduced");

const statMachinesBuilt =
    document.getElementById("statMachinesBuilt");

const statCoinsEarned =
    document.getElementById("statCoinsEarned");

const statPlayTime =
    document.getElementById("statPlayTime");

const statEfficiency =
    document.getElementById("statEfficiency");

const statRating =
    document.getElementById("statRating");


// Inventory

const inventoryPanel =
    document.getElementById("inventoryPanel");

const closeInventoryBtn =
    document.getElementById("closeInventoryBtn");

const inventoryList =
    document.getElementById("inventoryList");


// Upgrades

const upgradesPanel =
    document.getElementById("upgradesPanel");

const closeUpgradesBtn =
    document.getElementById("closeUpgradesBtn");

const upgradeButtons =
    document.querySelectorAll("[data-upgrade]");

const beltSpeedLevel =
    document.getElementById("beltSpeedLevel");

const minerSpeedLevel =
    document.getElementById("minerSpeedLevel");

const storageLevel =
    document.getElementById("storageLevel");

const powerLevel =
    document.getElementById("powerLevel");

const productionLevel =
    document.getElementById("productionLevel");


// Help

const helpPanel =
    document.getElementById("helpPanel");

const closeHelpBtn =
    document.getElementById("closeHelpBtn");


// Challenge result

const challengeResultPanel =
    document.getElementById(
        "challengeResultPanel"
    );

const challengeResultTitle =
    document.getElementById(
        "challengeResultTitle"
    );

const challengeResultBody =
    document.getElementById(
        "challengeResultBody"
    );

const challengeResultBtn =
    document.getElementById(
        "challengeResultBtn"
    );


// =====================================================
// GAME CONSTANTS
// =====================================================

const SAVE_KEY =
    "minecraftRedstoneFactorySave";

const SETTINGS_KEY =
    "minecraftRedstoneFactorySettings";


const GRID_COLUMNS = 14;
const GRID_ROWS = 9;


// Directions:
// 0 = right
// 1 = down
// 2 = left
// 3 = up

const DIRECTIONS = [
    { x: 1, y: 0, symbol: "→" },
    { x: 0, y: 1, symbol: "↓" },
    { x: -1, y: 0, symbol: "←" },
    { x: 0, y: -1, symbol: "↑" }
];


// =====================================================
// BUILD DEFINITIONS
// =====================================================

const BUILD_DEFINITIONS = {

    belt: {
        name: "Conveyor Belt",
        cost: 5
    },

    splitBelt: {
        name: "Splitter Belt",
        cost: 20
    },

    miner: {
        name: "Miner",
        cost: 100
    },

    crusher: {
        name: "Crusher",
        cost: 160
    },

    smelter: {
        name: "Smelter",
        cost: 140
    },

    sorter: {
        name: "Sorter",
        cost: 180
    },

    crafter: {
        name: "Crafter",
        cost: 220
    },

    chest: {
        name: "Storage Chest",
        cost: 80
    },

    wire: {
        name: "Redstone Wire",
        cost: 3
    },

    lever: {
        name: "Lever",
        cost: 20
    },

    button: {
        name: "Button",
        cost: 15
    },

    torch: {
        name: "Redstone Torch",
        cost: 25
    },

    repeater: {
        name: "Repeater",
        cost: 30
    },

    interact: {
        name: "Interact",
        cost: 0
    },

    delete: {
        name: "Delete",
        cost: 0
    }

};


const MACHINE_TYPES = new Set([
    "miner",
    "crusher",
    "smelter",
    "sorter",
    "crafter",
    "chest"
]);


const POWERED_MACHINE_TYPES =
    new Set([
        "miner",
        "crusher",
        "smelter",
        "sorter",
        "crafter"
    ]);


// =====================================================
// RESOURCE DEFINITIONS
// =====================================================

const RESOURCES = {

    coal: {
        name: "Coal",
        icon: "⚫",
        color: "#303030",
        value: 3
    },

    iron_ore: {
        name: "Iron Ore",
        icon: "⬜",
        color: "#b0a79c",
        value: 5
    },

    gold_ore: {
        name: "Gold Ore",
        icon: "🟨",
        color: "#d6b131",
        value: 8
    },

    diamond: {
        name: "Diamond",
        icon: "💎",
        color: "#43d9db",
        value: 35
    },

    emerald: {
        name: "Emerald",
        icon: "🟩",
        color: "#36c76a",
        value: 30
    },

    redstone: {
        name: "Redstone",
        icon: "🔴",
        color: "#d82f2f",
        value: 7
    },

    copper_ore: {
        name: "Copper Ore",
        icon: "🟧",
        color: "#b46d45",
        value: 6
    },

    quartz: {
        name: "Quartz",
        icon: "🔳",
        color: "#ece4dc",
        value: 11
    },

    netherite_scrap: {
        name: "Netherite Scrap",
        icon: "⬛",
        color: "#4b4145",
        value: 50
    },


    crushed_iron: {
        name: "Crushed Iron",
        icon: "🔩",
        color: "#a6a6a6",
        value: 7
    },

    crushed_gold: {
        name: "Crushed Gold",
        icon: "✨",
        color: "#e0c14b",
        value: 11
    },

    crushed_copper: {
        name: "Crushed Copper",
        icon: "🟤",
        color: "#bd7650",
        value: 8
    },


    iron_ingot: {
        name: "Iron Ingot",
        icon: "▰",
        color: "#d0d0d0",
        value: 13
    },

    gold_ingot: {
        name: "Gold Ingot",
        icon: "▰",
        color: "#f3d04c",
        value: 20
    },

    copper_ingot: {
        name: "Copper Ingot",
        icon: "▰",
        color: "#cb8055",
        value: 15
    },


    iron_gear: {
        name: "Iron Gear",
        icon: "⚙",
        color: "#aab2b5",
        value: 45,
        product: true
    },

    powered_component: {
        name: "Powered Component",
        icon: "⚡",
        color: "#ffd74c",
        value: 75,
        product: true
    },

    copper_coil: {
        name: "Copper Coil",
        icon: "➰",
        color: "#dc875a",
        value: 55,
        product: true
    },

    diamond_drill: {
        name: "Diamond Drill",
        icon: "💠",
        color: "#45e6ea",
        value: 180,
        product: true
    },

    trading_module: {
        name: "Trading Module",
        icon: "💚",
        color: "#32df6c",
        value: 150,
        product: true
    },

    redstone_circuit: {
        name: "Redstone Circuit",
        icon: "🔺",
        color: "#ed3b3b",
        value: 65,
        product: true
    },

    comparator_core: {
        name: "Comparator Core",
        icon: "🔷",
        color: "#eeeeee",
        value: 95,
        product: true
    },

    reinforced_part: {
        name: "Reinforced Part",
        icon: "⬢",
        color: "#5a4c53",
        value: 260,
        product: true
    }

};


// =====================================================
// RECIPES
// =====================================================

const CRUSHER_RECIPES = {

    iron_ore:
        "crushed_iron",

    gold_ore:
        "crushed_gold",

    copper_ore:
        "crushed_copper"

};


const SMELTER_RECIPES = {

    iron_ore:
        "iron_ingot",

    crushed_iron:
        "iron_ingot",

    gold_ore:
        "gold_ingot",

    crushed_gold:
        "gold_ingot",

    copper_ore:
        "copper_ingot",

    crushed_copper:
        "copper_ingot"

};


const CRAFTER_RECIPES = {

    iron_ingot:
        "iron_gear",

    gold_ingot:
        "powered_component",

    copper_ingot:
        "copper_coil",

    diamond:
        "diamond_drill",

    emerald:
        "trading_module",

    redstone:
        "redstone_circuit",

    quartz:
        "comparator_core",

    netherite_scrap:
        "reinforced_part"

};


const RARE_RESOURCES =
    new Set([
        "diamond",
        "emerald",
        "quartz",
        "netherite_scrap"
    ]);


// =====================================================
// SETTINGS
// =====================================================

const DEFAULT_SETTINGS = {

    sound: true,

    music: true,

    effects: true,

    muted: false

};


let settings = {
    ...DEFAULT_SETTINGS
};


// =====================================================
// GAME STATE
// =====================================================

let state = null;

let gameRunning = false;

let paused = false;

let selectedTool = "interact";

let direction = 0;

let hoveredCell = null;

let poweredMachines =
    new Set();

let poweredNetwork =
    new Set();

let productionTimes = [];

let particles = [];

let weatherParticles = [];

let lastFrameTime =
    performance.now();

let autoSaveTimer = 0;

let hudTimer = 0;

let powerTimer = 0;

let weatherTimer = 0;

let conveyorSoundTimer = 0;

let audioContext = null;

let musicInterval = null;

let temporaryMessageTimer = null;


// =====================================================
// DEFAULT STATE
// =====================================================

function createNewState(challenge = false) {

    return {

        version: 1,

        coins:
            challenge
                ? 350
                : 1500,

        cells:
            Array(
                GRID_COLUMNS *
                GRID_ROWS
            ).fill(null),

        items: [],

        inventory: {},

        upgrades: {

            beltSpeed: 0,

            minerSpeed: 0,

            storage: 0,

            power: 0,

            production: 0

        },

        statistics: {

            itemsProduced: 0,

            machinesBuilt: 0,

            coinsEarned: 0,

            playTime: 0,

            efficiency: 100,

            bestRating: "-"

        },

        challenge: {

            active: challenge,

            timeLeft: 720,

            target: 10000,

            startCoins:
                challenge
                    ? 350
                    : 1500,

            finished: false

        },

        timeOfDay: 0.28,

        weather: "clear",

        savedAt: Date.now()

    };

}


// =====================================================
// LOCAL STORAGE
// =====================================================

function saveGame(showMessage = false) {

    if (!state) {
        return;
    }

    state.savedAt = Date.now();

    localStorage.setItem(
        SAVE_KEY,
        JSON.stringify(state)
    );

    updateContinueButton();

    if (showMessage) {

        showFactoryMessage(
            "Factory saved successfully."
        );

        playSound("save");
    }

}


function loadGame() {

    const saved =
        localStorage.getItem(
            SAVE_KEY
        );

    if (!saved) {
        return null;
    }

    try {

        const loaded =
            JSON.parse(saved);

        if (
            !Array.isArray(
                loaded.cells
            )
        ) {
            return null;
        }

        return loaded;

    } catch (error) {

        console.error(
            "Save load error:",
            error
        );

        return null;
    }

}


// =====================================================
// SETTINGS STORAGE
// =====================================================

function loadSettings() {

    const saved =
        localStorage.getItem(
            SETTINGS_KEY
        );

    if (!saved) {

        updateSettingsUI();

        return;
    }

    try {

        settings = {

            ...DEFAULT_SETTINGS,

            ...JSON.parse(saved)

        };

    } catch (error) {

        settings = {
            ...DEFAULT_SETTINGS
        };
    }

    updateSettingsUI();
}


function saveSettings() {

    localStorage.setItem(
        SETTINGS_KEY,
        JSON.stringify(settings)
    );

}


function updateSettingsUI() {

    updateToggleButton(
        soundToggleBtn,
        settings.sound
    );

    updateToggleButton(
        musicToggleBtn,
        settings.music
    );

    updateToggleButton(
        effectsToggleBtn,
        settings.effects
    );

    muteBtn.textContent =
        settings.muted
            ? "🔇"
            : "🔊";
}


function updateToggleButton(
    button,
    enabled
) {

    button.textContent =
        enabled
            ? "ON"
            : "OFF";

    button.classList.toggle(
        "active",
        enabled
    );
}


// =====================================================
// MENU
// =====================================================

function updateContinueButton() {

    const hasSave =
        localStorage.getItem(
            SAVE_KEY
        ) !== null;

    continueBtn.disabled =
        !hasSave;

    if (hasSave) {

        saveIndicator.classList.add(
            "active"
        );

        saveStatusText.textContent =
            "Factory save found";

    } else {

        saveIndicator.classList.remove(
            "active"
        );

        saveStatusText.textContent =
            "No factory save found";
    }

}


function startNewFactory(
    challenge = false
) {

    if (
        localStorage.getItem(
            SAVE_KEY
        )
    ) {

        const replace =
            confirm(
                "A factory save already exists.\n\nReplace it with a new factory?"
            );

        if (!replace) {
            return;
        }
    }

    state =
        createNewState(
            challenge
        );

    saveGame();

    openGame();
}


function continueFactory() {

    const loaded =
        loadGame();

    if (!loaded) {

        alert(
            "Your factory save could not be loaded."
        );

        return;
    }

    state = loaded;

    ensureLoadedState();

    openGame();
}


function ensureLoadedState() {

    state.inventory =
        state.inventory || {};

    state.items =
        state.items || [];

    state.upgrades = {

        beltSpeed: 0,
        minerSpeed: 0,
        storage: 0,
        power: 0,
        production: 0,

        ...state.upgrades
    };

    state.statistics = {

        itemsProduced: 0,
        machinesBuilt: 0,
        coinsEarned: 0,
        playTime: 0,
        efficiency: 100,
        bestRating: "-",

        ...state.statistics
    };

    state.challenge = {

        active: false,
        timeLeft: 720,
        target: 10000,
        startCoins: state.coins,
        finished: false,

        ...state.challenge
    };

    state.timeOfDay =
        Number.isFinite(
            state.timeOfDay
        )
            ? state.timeOfDay
            : 0.3;

    state.weather =
        state.weather ||
        "clear";
}


// =====================================================
// OPEN / CLOSE GAME
// =====================================================

function openGame() {

    ensureAudio();

    mainMenu.classList.remove(
        "active-screen"
    );

    gameScreen.classList.add(
        "active-screen"
    );

    gameScreen.setAttribute(
        "aria-hidden",
        "false"
    );

    gameRunning = true;

    paused = false;

    challengeHud.classList.toggle(
        "active",
        state.challenge.active &&
        !state.challenge.finished
    );

    resizeCanvas();

    updateToolUI();

    updateUpgradesUI();

    updateHUD();

    computePowerNetwork();

    startMusic();

    showFactoryMessage(
        state.challenge.active
            ? "Challenge started! Reach 10,000 coins."
            : "Factory online."
    );
}


function returnToMainMenu() {

    if (state) {
        saveGame();
    }

    gameRunning = false;

    paused = false;

    stopMusic();

    closeAllPanels();

    challengeResultPanel.classList.remove(
        "open"
    );

    gameScreen.classList.remove(
        "active-screen"
    );

    mainMenu.classList.add(
        "active-screen"
    );

    updateContinueButton();
}


// =====================================================
// GRID HELPERS
// =====================================================

function getIndex(x, y) {

    return (
        y *
        GRID_COLUMNS +
        x
    );
}


function inBounds(x, y) {

    return (
        x >= 0 &&
        x < GRID_COLUMNS &&
        y >= 0 &&
        y < GRID_ROWS
    );
}


function getCell(x, y) {

    if (!inBounds(x, y)) {
        return null;
    }

    return state.cells[
        getIndex(x, y)
    ];
}


function setCell(x, y, value) {

    if (!inBounds(x, y)) {
        return;
    }

    state.cells[
        getIndex(x, y)
    ] = value;
}


// =====================================================
// BUILDING
// =====================================================

function selectTool(tool) {

    selectedTool = tool;

    updateToolUI();
}


function updateToolUI() {

    toolButtons.forEach(
        button => {

            button.classList.toggle(
                "selected",
                button.dataset.tool ===
                selectedTool
            );
        }
    );

    selectedToolText.textContent =
        BUILD_DEFINITIONS[
            selectedTool
        ]?.name || selectedTool;

    selectedDirection.textContent =
        DIRECTIONS[
            direction
        ].symbol;
}


function rotateDirection() {

    direction =
        (direction + 1) % 4;

    updateToolUI();

    playSound("click");
}


function handleCanvasClick(event) {

    if (
        !state ||
        paused
    ) {
        return;
    }

    const rect =
        canvas.getBoundingClientRect();

    const scaleX =
        GRID_COLUMNS /
        rect.width;

    const scaleY =
        GRID_ROWS /
        rect.height;

    const x =
        Math.floor(
            (
                event.clientX -
                rect.left
            ) * scaleX
        );

    const y =
        Math.floor(
            (
                event.clientY -
                rect.top
            ) * scaleY
        );

    if (!inBounds(x, y)) {
        return;
    }

    if (
        selectedTool ===
        "interact"
    ) {

        interactWithCell(
            x,
            y
        );

        return;
    }

    if (
        selectedTool ===
        "delete"
    ) {

        deleteCell(
            x,
            y
        );

        return;
    }

    placeCell(
        x,
        y,
        selectedTool
    );
}


function placeCell(
    x,
    y,
    type
) {

    if (getCell(x, y)) {

        showFactoryMessage(
            "That factory tile is already occupied."
        );

        return;
    }

    const definition =
        BUILD_DEFINITIONS[type];

    if (!definition) {
        return;
    }

    if (
        state.coins <
        definition.cost
    ) {

        showFactoryMessage(
            "You do not have enough coins."
        );

        playSound("error");

        return;
    }

    state.coins -=
        definition.cost;

    const cell = {

        type,

        dir: direction,

        timer: 0,

        process: 0,

        buffer: [],

        splitToggle: false,

        enabled:
            type === "lever"
                ? true
                : undefined,

        buttonUntil: 0
    };

    setCell(
        x,
        y,
        cell
    );

    if (
        MACHINE_TYPES.has(type)
    ) {

        state.statistics
            .machinesBuilt++;
    }

    computePowerNetwork();

    updateHUD();

    playSound("place");

    showFactoryMessage(
        `${definition.name} built.`
    );
}


function deleteCell(x, y) {

    const cell =
        getCell(x, y);

    if (!cell) {

        showFactoryMessage(
            "Nothing to remove here."
        );

        return;
    }

    const definition =
        BUILD_DEFINITIONS[
            cell.type
        ];

    if (definition) {

        const refund =
            Math.floor(
                definition.cost *
                0.25
            );

        state.coins +=
            refund;
    }

    setCell(
        x,
        y,
        null
    );

    state.items =
        state.items.filter(
            item =>
                !(
                    item.x === x &&
                    item.y === y
                )
        );

    computePowerNetwork();

    updateHUD();

    playSound("delete");

    showFactoryMessage(
        "Factory block removed."
    );
}


// =====================================================
// INTERACTION
// =====================================================

function interactWithCell(
    x,
    y
) {

    const cell =
        getCell(x, y);

    if (!cell) {

        showFactoryMessage(
            "Select a factory block or power switch."
        );

        return;
    }

    if (
        cell.type ===
        "lever"
    ) {

        cell.enabled =
            !cell.enabled;

        computePowerNetwork();

        playSound("switch");

        showFactoryMessage(
            cell.enabled
                ? "Lever switched ON."
                : "Lever switched OFF."
        );

        return;
    }

    if (
        cell.type ===
        "button"
    ) {

        cell.buttonUntil =
            Date.now() +
            5000;

        computePowerNetwork();

        playSound("switch");

        showFactoryMessage(
            "Button powered for 5 seconds."
        );

        return;
    }

    if (
        MACHINE_TYPES.has(
            cell.type
        )
    ) {

        const status =
            POWERED_MACHINE_TYPES.has(
                cell.type
            )
                ? (
                    poweredMachines.has(
                        getIndex(x, y)
                    )
                        ? "POWERED"
                        : "NO POWER"
                )
                : "READY";

        showFactoryMessage(
            `${BUILD_DEFINITIONS[cell.type].name}: ${status}`
        );

        return;
    }

    showFactoryMessage(
        BUILD_DEFINITIONS[
            cell.type
        ]?.name ||
        "Factory block"
    );
}


// =====================================================
// POWER NETWORK
// =====================================================

function isSourceActive(cell) {

    if (!cell) {
        return false;
    }

    if (
        cell.type ===
        "torch"
    ) {
        return true;
    }

    if (
        cell.type ===
        "lever"
    ) {
        return !!cell.enabled;
    }

    if (
        cell.type ===
        "button"
    ) {
        return (
            cell.buttonUntil >
            Date.now()
        );
    }

    return false;
}


function computePowerNetwork() {

    if (!state) {
        return;
    }

    poweredMachines =
        new Set();

    poweredNetwork =
        new Set();

    const queue = [];

    const bestSignal =
        new Map();

    const baseSignal =
        9 +
        state.upgrades.power *
        4;


    for (
        let y = 0;
        y < GRID_ROWS;
        y++
    ) {

        for (
            let x = 0;
            x < GRID_COLUMNS;
            x++
        ) {

            const cell =
                getCell(x, y);

            if (
                isSourceActive(cell)
            ) {

                const index =
                    getIndex(x, y);

                queue.push({
                    x,
                    y,
                    signal:
                        baseSignal
                });

                bestSignal.set(
                    index,
                    baseSignal
                );

                poweredNetwork.add(
                    index
                );
            }
        }
    }


    while (
        queue.length > 0
    ) {

        const node =
            queue.shift();

        for (
            const offset of
            DIRECTIONS
        ) {

            const nx =
                node.x +
                offset.x;

            const ny =
                node.y +
                offset.y;

            if (
                !inBounds(nx, ny)
            ) {
                continue;
            }

            const cell =
                getCell(nx, ny);

            if (!cell) {
                continue;
            }

            const index =
                getIndex(nx, ny);


            if (
                POWERED_MACHINE_TYPES.has(
                    cell.type
                )
            ) {

                poweredMachines.add(
                    index
                );

                continue;
            }


            if (
                cell.type !== "wire" &&
                cell.type !== "repeater" &&
                !isSourceActive(cell)
            ) {
                continue;
            }


            let nextSignal =
                node.signal - 1;


            if (
                cell.type ===
                "repeater"
            ) {

                nextSignal =
                    Math.max(
                        nextSignal,
                        7 +
                        state.upgrades.power *
                        2
                    );
            }


            if (
                nextSignal <= 0
            ) {
                continue;
            }


            const oldSignal =
                bestSignal.get(
                    index
                ) || -1;


            if (
                nextSignal <=
                oldSignal
            ) {
                continue;
            }


            bestSignal.set(
                index,
                nextSignal
            );

            poweredNetwork.add(
                index
            );


            queue.push({
                x: nx,
                y: ny,
                signal:
                    nextSignal
            });
        }
    }
}


// =====================================================
// MACHINE PROCESSING
// =====================================================

function updateMachines(dt) {

    for (
        let y = 0;
        y < GRID_ROWS;
        y++
    ) {

        for (
            let x = 0;
            x < GRID_COLUMNS;
            x++
        ) {

            const cell =
                getCell(x, y);

            if (!cell) {
                continue;
            }


            if (
                cell.type ===
                "miner"
            ) {

                updateMiner(
                    x,
                    y,
                    cell,
                    dt
                );

                continue;
            }


            if (
                cell.type ===
                "crusher" ||
                cell.type ===
                "smelter" ||
                cell.type ===
                "crafter"
            ) {

                updateProcessor(
                    x,
                    y,
                    cell,
                    dt
                );
            }
        }
    }
}


function updateMiner(
    x,
    y,
    cell,
    dt
) {

    if (
        !poweredMachines.has(
            getIndex(x, y)
        )
    ) {
        return;
    }

    const speedMultiplier =
        1 +
        state.upgrades
            .minerSpeed *
        0.25;

    cell.timer +=
        dt *
        speedMultiplier;

    const interval =
        4.2;


    if (
        cell.timer <
        interval
    ) {
        return;
    }

    cell.timer = 0;


    if (
        countItemsAt(
            x,
            y
        ) >= 2
    ) {
        return;
    }


    const resource =
        getRandomMinedResource();

    spawnItem(
        resource,
        x,
        y,
        cell.dir
    );

    playSound("machine");
}


function updateProcessor(
    x,
    y,
    cell,
    dt
) {

    if (
        !poweredMachines.has(
            getIndex(x, y)
        )
    ) {
        return;
    }

    if (
        !cell.buffer ||
        cell.buffer.length === 0
    ) {

        cell.process = 0;

        return;
    }


    const speedMultiplier =
        1 +
        state.upgrades
            .production *
        0.2;


    cell.process +=
        dt *
        speedMultiplier;


    const processTime =
        getMachineProcessTime(
            cell.type
        );


    if (
        cell.process <
        processTime
    ) {
        return;
    }


    cell.process = 0;

    const input =
        cell.buffer.shift();

    const output =
        transformResource(
            cell.type,
            input
        );


    if (!output) {
        return;
    }


    spawnItem(
        output,
        x,
        y,
        cell.dir
    );


    state.statistics
        .itemsProduced++;


    if (
        RESOURCES[
            output
        ]?.product
    ) {

        productionTimes.push(
            performance.now()
        );
    }


    createMachineEffects(
        x,
        y,
        cell.type
    );


    playSound(
        cell.type ===
        "crafter"
            ? "craft"
            : "machine"
    );
}


// =====================================================
// MACHINE RECIPES
// =====================================================

function getMachineProcessTime(type) {

    if (
        type ===
        "crusher"
    ) {
        return 2.8;
    }

    if (
        type ===
        "smelter"
    ) {
        return 3.5;
    }

    if (
        type ===
        "crafter"
    ) {
        return 4;
    }

    return 3;
}


function transformResource(
    machine,
    input
) {

    if (
        machine ===
        "crusher"
    ) {

        return (
            CRUSHER_RECIPES[
                input
            ] || null
        );
    }


    if (
        machine ===
        "smelter"
    ) {

        return (
            SMELTER_RECIPES[
                input
            ] || null
        );
    }


    if (
        machine ===
        "crafter"
    ) {

        return (
            CRAFTER_RECIPES[
                input
            ] || null
        );
    }


    return null;
}


function machineAccepts(
    machine,
    resource
) {

    if (
        machine ===
        "crusher"
    ) {

        return !!CRUSHER_RECIPES[
            resource
        ];
    }


    if (
        machine ===
        "smelter"
    ) {

        return !!SMELTER_RECIPES[
            resource
        ];
    }


    if (
        machine ===
        "crafter"
    ) {

        return !!CRAFTER_RECIPES[
            resource
        ];
    }


    return false;
}


// =====================================================
// MINING
// =====================================================

function getRandomMinedResource() {

    const roll =
        Math.random();

    if (roll < 0.22) {
        return "coal";
    }

    if (roll < 0.45) {
        return "iron_ore";
    }

    if (roll < 0.59) {
        return "copper_ore";
    }

    if (roll < 0.70) {
        return "redstone";
    }

    if (roll < 0.79) {
        return "gold_ore";
    }

    if (roll < 0.86) {
        return "quartz";
    }

    if (roll < 0.92) {
        return "emerald";
    }

    if (roll < 0.975) {
        return "diamond";
    }

    return "netherite_scrap";
}


// =====================================================
// ITEM SYSTEM
// =====================================================

function spawnItem(
    resource,
    x,
    y,
    itemDirection
) {

    state.items.push({

        resource,

        x,

        y,

        dir:
            itemDirection,

        progress: 0,

        remove: false

    });
}


function countItemsAt(
    x,
    y
) {

    return state.items.filter(
        item =>
            !item.remove &&
            item.x === x &&
            item.y === y
    ).length;
}


function updateItems(dt) {

    const beltSpeed =
        1.2 +
        state.upgrades
            .beltSpeed *
        0.32;


    let movingItems = 0;


    for (
        const item of
        state.items
    ) {

        if (item.remove) {
            continue;
        }

        item.progress +=
            dt *
            beltSpeed;

        movingItems++;


        if (
            item.progress >= 1
        ) {

            attemptItemTransfer(
                item
            );
        }
    }


    state.items =
        state.items.filter(
            item =>
                !item.remove
        );


    conveyorSoundTimer -=
        dt;


    if (
        movingItems > 0 &&
        conveyorSoundTimer <= 0
    ) {

        playSound("conveyor");

        conveyorSoundTimer =
            2.2;
    }
}


function attemptItemTransfer(item) {

    const vector =
        DIRECTIONS[
            item.dir
        ];

    const nx =
        item.x +
        vector.x;

    const ny =
        item.y +
        vector.y;


    if (
        !inBounds(nx, ny)
    ) {

        item.progress =
            0.98;

        return;
    }


    const target =
        getCell(nx, ny);


    if (!target) {

        item.progress =
            0.98;

        return;
    }


    if (
        target.type ===
        "belt"
    ) {

        item.x = nx;
        item.y = ny;

        item.dir =
            target.dir;

        item.progress = 0;

        return;
    }


    if (
        target.type ===
        "splitBelt"
    ) {

        item.x = nx;
        item.y = ny;


        item.dir =
            target.splitToggle
                ? target.dir
                : (
                    target.dir + 1
                ) % 4;


        target.splitToggle =
            !target.splitToggle;


        item.progress = 0;

        return;
    }


    if (
        target.type ===
        "sorter"
    ) {

        if (
            !poweredMachines.has(
                getIndex(nx, ny)
            )
        ) {

            item.progress =
                0.98;

            return;
        }


        item.x = nx;
        item.y = ny;


        item.dir =
            RARE_RESOURCES.has(
                item.resource
            )
                ? (
                    target.dir + 1
                ) % 4
                : target.dir;


        item.progress = 0;

        return;
    }


    if (
        target.type ===
        "chest"
    ) {

        if (
            addToStorage(
                item.resource
            )
        ) {

            item.remove =
                true;

            playSound("storage");

        } else {

            item.progress =
                0.98;
        }

        return;
    }


    if (
        target.type ===
        "crusher" ||
        target.type ===
        "smelter" ||
        target.type ===
        "crafter"
    ) {

        if (
            !machineAccepts(
                target.type,
                item.resource
            )
        ) {

            item.progress =
                0.98;

            return;
        }


        if (
            target.buffer.length >=
            5
        ) {

            item.progress =
                0.98;

            return;
        }


        target.buffer.push(
            item.resource
        );

        item.remove =
            true;

        return;
    }


    item.progress =
        0.98;
}


// =====================================================
// STORAGE
// =====================================================

function getStorageCapacity() {

    return (
        100 +
        state.upgrades.storage *
        100
    );
}


function getStorageUsed() {

    return Object.values(
        state.inventory
    ).reduce(
        (
            total,
            count
        ) =>
            total +
            count,
        0
    );
}


function addToStorage(resource) {

    if (
        getStorageUsed() >=
        getStorageCapacity()
    ) {

        showFactoryMessage(
            "Storage is full."
        );

        return false;
    }


    state.inventory[
        resource
    ] =
        (
            state.inventory[
                resource
            ] || 0
        ) + 1;


    return true;
}


// =====================================================
// INVENTORY UI
// =====================================================

function openInventory() {

    renderInventory();

    openPanel(
        inventoryPanel
    );
}


function renderInventory() {

    inventoryList.innerHTML =
        "";


    const entries =
        Object.entries(
            state.inventory
        ).filter(
            ([, count]) =>
                count > 0
        );


    if (
        entries.length === 0
    ) {

        inventoryList.innerHTML = `
            <p style="
                color:#9eaea3;
                grid-column:1/-1;
                text-align:center;
                padding:25px;
            ">
                Your storage is empty.
            </p>
        `;

        return;
    }


    for (
        const [
            resource,
            count
        ] of entries
    ) {

        const info =
            RESOURCES[
                resource
            ];

        if (!info) {
            continue;
        }


        const item =
            document.createElement(
                "div"
            );

        item.className =
            "inventory-item";


        item.innerHTML = `

            <div class="inventory-item-top">

                <span class="inventory-icon">
                    ${info.icon}
                </span>

                <strong class="inventory-count">
                    ${count}
                </strong>

            </div>

            <p class="inventory-name">
                ${info.name}
            </p>

        `;


        inventoryList.appendChild(
            item
        );
    }
}


// =====================================================
// SELLING
// =====================================================

function sellProducts() {

    let earned = 0;

    let sold = 0;


    for (
        const [
            resource,
            count
        ] of
        Object.entries(
            state.inventory
        )
    ) {

        const info =
            RESOURCES[
                resource
            ];

        if (
            !info ||
            !info.product ||
            count <= 0
        ) {
            continue;
        }


        earned +=
            info.value *
            count;

        sold += count;

        state.inventory[
            resource
        ] = 0;
    }


    if (
        earned <= 0
    ) {

        showFactoryMessage(
            "No finished products to sell."
        );

        playSound("error");

        return;
    }


    state.coins +=
        earned;


    state.statistics
        .coinsEarned +=
        earned;


    playSound("sell");


    showFactoryMessage(
        `Sold ${sold} products for ${formatNumber(earned)} coins!`
    );


    updateHUD();

    renderInventory();
}


// =====================================================
// UPGRADES
// =====================================================

const UPGRADE_BASE_COSTS = {

    beltSpeed: 400,

    minerSpeed: 450,

    storage: 350,

    power: 500,

    production: 600

};


function getUpgradeCost(type) {

    const level =
        state.upgrades[
            type
        ];

    return Math.floor(
        UPGRADE_BASE_COSTS[
            type
        ] *
        (
            1 +
            level *
            0.8
        )
    );
}


function buyUpgrade(type) {

    if (
        !Object.hasOwn(
            state.upgrades,
            type
        )
    ) {
        return;
    }


    const level =
        state.upgrades[
            type
        ];


    if (
        level >= 5
    ) {

        showFactoryMessage(
            "That upgrade is already at maximum level."
        );

        return;
    }


    const cost =
        getUpgradeCost(type);


    if (
        state.coins <
        cost
    ) {

        showFactoryMessage(
            "Not enough coins for this upgrade."
        );

        playSound("error");

        return;
    }


    state.coins -=
        cost;


    state.upgrades[
        type
    ]++;


    computePowerNetwork();

    updateUpgradesUI();

    updateHUD();

    playSound("upgrade");


    showFactoryMessage(
        "Factory upgrade purchased!"
    );
}


function updateUpgradesUI() {

    if (!state) {
        return;
    }


    beltSpeedLevel.textContent =
        `Level ${state.upgrades.beltSpeed}`;

    minerSpeedLevel.textContent =
        `Level ${state.upgrades.minerSpeed}`;

    storageLevel.textContent =
        `Level ${state.upgrades.storage}`;

    powerLevel.textContent =
        `Level ${state.upgrades.power}`;

    productionLevel.textContent =
        `Level ${state.upgrades.production}`;


    upgradeButtons.forEach(
        button => {

            const type =
                button.dataset
                    .upgrade;

            const level =
                state.upgrades[
                    type
                ];

            if (
                level >= 5
            ) {

                button.textContent =
                    "MAX LEVEL";

                button.disabled =
                    true;

            } else {

                button.disabled =
                    false;

                button.textContent =
                    `Upgrade • ${formatNumber(
                        getUpgradeCost(
                            type
                        )
                    )} coins`;
            }
        }
    );
}


// =====================================================
// HUD
// =====================================================

function updateHUD() {

    if (!state) {
        return;
    }


    coinsDisplay.textContent =
        formatNumber(
            Math.floor(
                state.coins
            )
        );


    const activeSources =
        countActivePowerSources();


    const powerAvailable =
        activeSources *
        (
            100 +
            state.upgrades.power *
            50
        );


    const powerUsed =
        poweredMachines.size *
        10;


    powerDisplay.textContent =
        `${powerUsed} / ${powerAvailable}`;


    const currentTime =
        performance.now();


    productionTimes =
        productionTimes.filter(
            time =>
                currentTime -
                time <
                60000
        );


    ipmDisplay.textContent =
        productionTimes.length;


    storageDisplay.textContent =
        `${getStorageUsed()} / ${getStorageCapacity()}`;


    const efficiency =
        calculateEfficiency();


    state.statistics
        .efficiency =
        efficiency;


    efficiencyDisplay.textContent =
        `${efficiency}%`;


    updateDayWeatherHUD();

    updateChallengeHUD();
}


function countActivePowerSources() {

    let total = 0;


    for (
        const cell of
        state.cells
    ) {

        if (
            isSourceActive(cell)
        ) {
            total++;
        }
    }


    return total;
}


function calculateEfficiency() {

    let totalMachines = 0;

    let powered = 0;


    for (
        let y = 0;
        y < GRID_ROWS;
        y++
    ) {

        for (
            let x = 0;
            x < GRID_COLUMNS;
            x++
        ) {

            const cell =
                getCell(x, y);

            if (
                !cell ||
                !POWERED_MACHINE_TYPES.has(
                    cell.type
                )
            ) {
                continue;
            }


            totalMachines++;


            if (
                poweredMachines.has(
                    getIndex(x, y)
                )
            ) {
                powered++;
            }
        }
    }


    if (
        totalMachines === 0
    ) {
        return 100;
    }


    const jammed =
        state.items.filter(
            item =>
                item.progress >
                0.95
        ).length;


    const powerScore =
        powered /
        totalMachines;


    const jamPenalty =
        Math.min(
            0.35,
            jammed *
            0.025
        );


    return Math.max(
        0,
        Math.round(
            (
                powerScore -
                jamPenalty
            ) *
            100
        )
    );
}


// =====================================================
// DAY / NIGHT
// =====================================================

function updateDayNight(dt) {

    state.timeOfDay +=
        dt /
        180;


    if (
        state.timeOfDay >= 1
    ) {

        state.timeOfDay -= 1;
    }
}


function isNight() {

    return (
        state.timeOfDay >
        0.68 ||
        state.timeOfDay <
        0.18
    );
}


function updateDayWeatherHUD() {

    if (isNight()) {

        dayDisplay.textContent =
            "🌙 Night";

    } else {

        dayDisplay.textContent =
            "☀ Day";
    }


    const names = {

        clear:
            "Clear",

        rain:
            "Rain",

        snow:
            "Snow",

        thunder:
            "Thunder"

    };


    weatherDisplay.textContent =
        names[
            state.weather
        ] || "Clear";
}


// =====================================================
// WEATHER
// =====================================================

function updateWeather(dt) {

    weatherTimer += dt;


    if (
        weatherTimer >
        45
    ) {

        weatherTimer = 0;


        const choices = [
            "clear",
            "clear",
            "rain",
            "snow",
            "thunder"
        ];


        state.weather =
            choices[
                Math.floor(
                    Math.random() *
                    choices.length
                )
            ];


        showFactoryMessage(
            `Weather changed: ${state.weather}.`
        );
    }


    if (
        !settings.effects
    ) {

        weatherParticles = [];

        return;
    }


    if (
        state.weather ===
        "clear"
    ) {
        return;
    }


    const amount =
        state.weather ===
        "snow"
            ? 2
            : 5;


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        weatherParticles.push({

            x:
                Math.random(),

            y: -0.05,

            speed:
                state.weather ===
                "snow"
                    ? 0.12 +
                      Math.random() *
                      0.12
                    : 0.7 +
                      Math.random() *
                      0.5,

            drift:
                (
                    Math.random() -
                    0.5
                ) *
                0.08,

            type:
                state.weather
        });
    }


    for (
        const particle of
        weatherParticles
    ) {

        particle.y +=
            particle.speed *
            dt;

        particle.x +=
            particle.drift *
            dt;
    }


    weatherParticles =
        weatherParticles.filter(
            particle =>
                particle.y <
                1.1
        );
}


// =====================================================
// EFFECT PARTICLES
// =====================================================

function createMachineEffects(
    x,
    y,
    type
) {

    if (
        !settings.effects
    ) {
        return;
    }


    const count =
        type ===
        "smelter"
            ? 8
            : 5;


    for (
        let i = 0;
        i < count;
        i++
    ) {

        particles.push({

            x:
                x +
                0.5,

            y:
                y +
                0.5,

            vx:
                (
                    Math.random() -
                    0.5
                ) *
                0.5,

            vy:
                -0.3 -
                Math.random() *
                0.45,

            life:
                0.8 +
                Math.random() *
                0.5,

            maxLife: 1.3,

            type:
                type ===
                "smelter"
                    ? "smoke"
                    : "spark"
        });
    }
}


function updateParticles(dt) {

    for (
        const particle of
        particles
    ) {

        particle.x +=
            particle.vx *
            dt;

        particle.y +=
            particle.vy *
            dt;

        particle.life -=
            dt;
    }


    particles =
        particles.filter(
            particle =>
                particle.life >
                0
        );
}


// =====================================================
// CHALLENGE MODE
// =====================================================

function updateChallenge(dt) {

    if (
        !state.challenge.active ||
        state.challenge.finished
    ) {
        return;
    }


    state.challenge.timeLeft -=
        dt;


    if (
        state.coins >=
        state.challenge.target
    ) {

        finishChallenge(
            true
        );

        return;
    }


    if (
        state.challenge.timeLeft <=
        0
    ) {

        state.challenge.timeLeft = 0;

        finishChallenge(
            false
        );
    }
}


function updateChallengeHUD() {

    if (
        !state.challenge.active ||
        state.challenge.finished
    ) {

        challengeHud.classList.remove(
            "active"
        );

        return;
    }


    challengeHud.classList.add(
        "active"
    );


    challengeTarget.textContent =
        formatNumber(
            state.challenge.target
        );


    challengeTime.textContent =
        formatCountdown(
            state.challenge.timeLeft
        );
}


function finishChallenge(
    success
) {

    state.challenge.finished =
        true;

    paused = true;


    const efficiency =
        calculateEfficiency();


    const items =
        state.statistics
            .itemsProduced;


    const coins =
        Math.floor(
            state.coins
        );


    const profit =
        state.statistics
            .coinsEarned;


    let score =
        efficiency *
        0.45 +
        Math.min(
            100,
            items / 2
        ) *
        0.25 +
        Math.min(
            100,
            profit / 100
        ) *
        0.30;


    if (success) {
        score += 15;
    }


    let rating = "C";


    if (score >= 110) {
        rating = "S";
    } else if (score >= 85) {
        rating = "A";
    } else if (score >= 65) {
        rating = "B";
    }


    if (
        rating === "S" ||
        rating === "A"
    ) {

        const current =
            state.statistics
                .bestRating;


        const order = {
            "-": 0,
            C: 1,
            B: 2,
            A: 3,
            S: 4
        };


        if (
            order[rating] >
            order[current]
        ) {

            state.statistics
                .bestRating =
                rating;
        }
    }


    challengeResultTitle.textContent =
        success
            ? "Challenge Complete!"
            : "Time Up!";


    challengeResultBody.innerHTML = `

        <span class="result-rating">
            ${rating}
        </span>

        <p class="result-line">
            Factory Rating: ${rating}
        </p>

        <p class="result-line">
            Efficiency: ${efficiency}%
        </p>

        <p class="result-line">
            Coins: ${formatNumber(coins)}
        </p>

        <p class="result-line">
            Profit Earned: ${formatNumber(profit)}
        </p>

        <p class="result-line">
            Items Produced: ${formatNumber(items)}
        </p>

    `;


    saveGame();


    openPanel(
        challengeResultPanel
    );


    playSound(
        success
            ? "win"
            : "error"
    );
}


// =====================================================
// STATISTICS
// =====================================================

function openStatistics() {

    let stats;


    if (state) {

        stats =
            state.statistics;

    } else {

        const saved =
            loadGame();


        stats =
            saved?.statistics || {

                itemsProduced: 0,

                machinesBuilt: 0,

                coinsEarned: 0,

                playTime: 0,

                efficiency: 100,

                bestRating: "-"
            };
    }


    statItemsProduced.textContent =
        formatNumber(
            stats.itemsProduced || 0
        );


    statMachinesBuilt.textContent =
        formatNumber(
            stats.machinesBuilt || 0
        );


    statCoinsEarned.textContent =
        formatNumber(
            stats.coinsEarned || 0
        );


    statPlayTime.textContent =
        formatPlayTime(
            stats.playTime || 0
        );


    statEfficiency.textContent =
        `${Math.round(
            stats.efficiency ?? 100
        )}%`;


    statRating.textContent =
        stats.bestRating ||
        "-";


    openPanel(
        statisticsPanel
    );
}


// =====================================================
// MODALS
// =====================================================

function openPanel(panel) {

    panel.classList.add(
        "open"
    );

    panel.setAttribute(
        "aria-hidden",
        "false"
    );
}


function closePanel(panel) {

    panel.classList.remove(
        "open"
    );

    panel.setAttribute(
        "aria-hidden",
        "true"
    );
}


function closeAllPanels() {

    [
        settingsPanel,
        statisticsPanel,
        inventoryPanel,
        upgradesPanel,
        helpPanel
    ].forEach(
        panel =>
            closePanel(panel)
    );
}


// =====================================================
// FACTORY MESSAGE
// =====================================================

function showFactoryMessage(
    message
) {

    factoryMessage.textContent =
        message;


    clearTimeout(
        temporaryMessageTimer
    );


    temporaryMessageTimer =
        setTimeout(
            () => {

                if (
                    gameRunning
                ) {

                    factoryMessage.textContent =
                        "Factory running automatically.";
                }

            },
            3500
        );
}


// =====================================================
// CANVAS SIZE
// =====================================================

function resizeCanvas() {

    const rect =
        canvas.getBoundingClientRect();

    const ratio =
        Math.min(
            window.devicePixelRatio ||
            1,
            2
        );


    canvas.width =
        Math.max(
            1,
            Math.floor(
                rect.width *
                ratio
            )
        );


    canvas.height =
        Math.max(
            1,
            Math.floor(
                rect.height *
                ratio
            )
        );


    ctx.setTransform(
        ratio,
        0,
        0,
        ratio,
        0,
        0
    );
}


// =====================================================
// CANVAS RENDERING
// =====================================================

function renderFactory() {

    if (
        !gameRunning ||
        !state
    ) {
        return;
    }


    const width =
        canvas.clientWidth;

    const height =
        canvas.clientHeight;


    const cellWidth =
        width /
        GRID_COLUMNS;

    const cellHeight =
        height /
        GRID_ROWS;


    ctx.clearRect(
        0,
        0,
        width,
        height
    );


    drawFactoryFloor(
        width,
        height,
        cellWidth,
        cellHeight
    );


    drawFactoryCells(
        cellWidth,
        cellHeight
    );


    drawItems(
        cellWidth,
        cellHeight
    );


    drawParticles(
        cellWidth,
        cellHeight
    );


    drawDayNightOverlay(
        width,
        height
    );


    drawFactoryLights(
        cellWidth,
        cellHeight
    );


    drawWeather(
        width,
        height
    );
}


function drawFactoryFloor(
    width,
    height,
    cellWidth,
    cellHeight
) {

    ctx.fillStyle =
        "#1a2b1f";

    ctx.fillRect(
        0,
        0,
        width,
        height
    );


    for (
        let y = 0;
        y < GRID_ROWS;
        y++
    ) {

        for (
            let x = 0;
            x < GRID_COLUMNS;
            x++
        ) {

            ctx.fillStyle =
                (
                    x + y
                ) % 2 === 0
                    ? "#203425"
                    : "#1c3022";


            ctx.fillRect(
                x *
                cellWidth,
                y *
                cellHeight,
                cellWidth,
                cellHeight
            );
        }
    }


    ctx.strokeStyle =
        "rgba(130,160,138,0.25)";

    ctx.lineWidth = 1;


    for (
        let x = 0;
        x <= GRID_COLUMNS;
        x++
    ) {

        ctx.beginPath();

        ctx.moveTo(
            x *
            cellWidth,
            0
        );

        ctx.lineTo(
            x *
            cellWidth,
            height
        );

        ctx.stroke();
    }


    for (
        let y = 0;
        y <= GRID_ROWS;
        y++
    ) {

        ctx.beginPath();

        ctx.moveTo(
            0,
            y *
            cellHeight
        );

        ctx.lineTo(
            width,
            y *
            cellHeight
        );

        ctx.stroke();
    }


    if (hoveredCell) {

        ctx.fillStyle =
            "rgba(255,255,255,0.08)";

        ctx.fillRect(
            hoveredCell.x *
            cellWidth,
            hoveredCell.y *
            cellHeight,
            cellWidth,
            cellHeight
        );
    }
}


function drawFactoryCells(
    cellWidth,
    cellHeight
) {

    const time =
        performance.now() /
        1000;


    for (
        let y = 0;
        y < GRID_ROWS;
        y++
    ) {

        for (
            let x = 0;
            x < GRID_COLUMNS;
            x++
        ) {

            const cell =
                getCell(x, y);

            if (!cell) {
                continue;
            }


            drawCell(
                x,
                y,
                cell,
                cellWidth,
                cellHeight,
                time
            );
        }
    }
}


function drawCell(
    x,
    y,
    cell,
    cellWidth,
    cellHeight,
    time
) {

    const px =
        x *
        cellWidth;

    const py =
        y *
        cellHeight;


    const pad =
        Math.min(
            cellWidth,
            cellHeight
        ) *
        0.09;


    const cx =
        px +
        cellWidth / 2;

    const cy =
        py +
        cellHeight / 2;


    if (
        cell.type ===
        "belt" ||
        cell.type ===
        "splitBelt"
    ) {

        ctx.fillStyle =
            "#353a38";

        ctx.fillRect(
            px + pad,
            py + pad,
            cellWidth -
            pad * 2,
            cellHeight -
            pad * 2
        );


        ctx.strokeStyle =
            "#616965";

        ctx.lineWidth = 2;

        ctx.strokeRect(
            px + pad,
            py + pad,
            cellWidth -
            pad * 2,
            cellHeight -
            pad * 2
        );


        const pulse =
            (
                time *
                (
                    1.5 +
                    state.upgrades
                        .beltSpeed *
                    0.3
                )
            ) % 1;


        ctx.fillStyle =
            "#8c9891";


        drawArrow(
            cx,
            cy,
            cell.dir,
            Math.min(
                cellWidth,
                cellHeight
            ) *
            (
                0.15 +
                pulse *
                0.05
            )
        );


        if (
            cell.type ===
            "splitBelt"
        ) {

            drawArrow(
                cx,
                cy,
                (
                    cell.dir + 1
                ) % 4,
                Math.min(
                    cellWidth,
                    cellHeight
                ) *
                0.12
            );
        }

        return;
    }


    if (
        cell.type ===
        "wire"
    ) {

        const powered =
            poweredNetwork.has(
                getIndex(x, y)
            );


        ctx.strokeStyle =
            powered
                ? "#ff3939"
                : "#6d2020";


        ctx.lineWidth =
            powered
                ? 4
                : 3;


        ctx.beginPath();

        ctx.moveTo(
            px + pad,
            cy
        );

        ctx.lineTo(
            px +
            cellWidth -
            pad,
            cy
        );

        ctx.moveTo(
            cx,
            py + pad
        );

        ctx.lineTo(
            cx,
            py +
            cellHeight -
            pad
        );

        ctx.stroke();


        if (powered) {

            ctx.fillStyle =
                "#ff5c5c";

            ctx.beginPath();

            ctx.arc(
                cx,
                cy,
                3 +
                Math.sin(
                    time *
                    7
                ),
                0,
                Math.PI * 2
            );

            ctx.fill();
        }

        return;
    }


    if (
        cell.type ===
        "lever" ||
        cell.type ===
        "button" ||
        cell.type ===
        "torch" ||
        cell.type ===
        "repeater"
    ) {

        drawPowerBlock(
            x,
            y,
            cell,
            cellWidth,
            cellHeight,
            time
        );

        return;
    }


    const powered =
        !POWERED_MACHINE_TYPES.has(
            cell.type
        ) ||
        poweredMachines.has(
            getIndex(x, y)
        );


    ctx.fillStyle =
        powered
            ? "#365441"
            : "#343a36";


    if (
        cell.type ===
        "smelter"
    ) {

        ctx.fillStyle =
            powered
                ? "#6c4024"
                : "#40362f";
    }


    if (
        cell.type ===
        "crusher"
    ) {

        ctx.fillStyle =
            powered
                ? "#4d5153"
                : "#343637";
    }


    if (
        cell.type ===
        "crafter"
    ) {

        ctx.fillStyle =
            powered
                ? "#6a4a2a"
                : "#41362a";
    }


    if (
        cell.type ===
        "chest"
    ) {

        ctx.fillStyle =
            "#8b5c25";
    }


    if (
        cell.type ===
        "sorter"
    ) {

        ctx.fillStyle =
            powered
                ? "#3d5d6c"
                : "#303b40";
    }


    ctx.fillRect(
        px + pad,
        py + pad,
        cellWidth -
        pad * 2,
        cellHeight -
        pad * 2
    );


    ctx.strokeStyle =
        powered
            ? "#83a98c"
            : "#666";


    ctx.lineWidth = 2;


    ctx.strokeRect(
        px + pad,
        py + pad,
        cellWidth -
        pad * 2,
        cellHeight -
        pad * 2
    );


    drawMachineSymbol(
        cx,
        cy,
        cell,
        powered,
        time,
        cellWidth,
        cellHeight
    );


    if (
        cell.type !==
        "chest"
    ) {

        ctx.fillStyle =
            "#e4eae5";


        drawArrow(
            px +
            cellWidth *
            0.78,
            py +
            cellHeight *
            0.78,
            cell.dir,
            Math.min(
                cellWidth,
                cellHeight
            ) *
            0.08
        );
    }
}


function drawMachineSymbol(
    cx,
    cy,
    cell,
    powered,
    time,
    cellWidth,
    cellHeight
) {

    const size =
        Math.min(
            cellWidth,
            cellHeight
        );


    ctx.textAlign =
        "center";

    ctx.textBaseline =
        "middle";


    let symbol = "?";


    if (
        cell.type ===
        "miner"
    ) {
        symbol = "⛏";
    }

    if (
        cell.type ===
        "crusher"
    ) {
        symbol = "🔨";
    }

    if (
        cell.type ===
        "smelter"
    ) {
        symbol = "🔥";
    }

    if (
        cell.type ===
        "sorter"
    ) {
        symbol = "⇆";
    }

    if (
        cell.type ===
        "crafter"
    ) {
        symbol = "⚙";
    }

    if (
        cell.type ===
        "chest"
    ) {
        symbol = "📦";
    }


    ctx.save();


    ctx.translate(
        cx,
        cy
    );


    if (
        powered &&
        (
            cell.type ===
            "miner" ||
            cell.type ===
            "crafter"
        )
    ) {

        ctx.rotate(
            Math.sin(
                time *
                3
            ) *
            0.08
        );
    }


    ctx.font =
        `${Math.max(
            13,
            size * 0.38
        )}px Arial`;


    ctx.fillText(
        symbol,
        0,
        0
    );


    ctx.restore();


    if (
        POWERED_MACHINE_TYPES.has(
            cell.type
        )
    ) {

        ctx.fillStyle =
            powered
                ? "#65e26e"
                : "#d14a4a";


        ctx.beginPath();

        ctx.arc(
            cx +
            size *
            0.28,
            cy -
            size *
            0.28,
            Math.max(
                2,
                size *
                0.045
            ),
            0,
            Math.PI * 2
        );

        ctx.fill();
    }
}


function drawPowerBlock(
    x,
    y,
    cell,
    cellWidth,
    cellHeight,
    time
) {

    const px =
        x *
        cellWidth;

    const py =
        y *
        cellHeight;

    const cx =
        px +
        cellWidth / 2;

    const cy =
        py +
        cellHeight / 2;

    const size =
        Math.min(
            cellWidth,
            cellHeight
        );


    const active =
        isSourceActive(cell) ||
        poweredNetwork.has(
            getIndex(x, y)
        );


    ctx.fillStyle =
        active
            ? "#5f2929"
            : "#353635";


    ctx.fillRect(
        px +
        cellWidth *
        0.13,
        py +
        cellHeight *
        0.13,
        cellWidth *
        0.74,
        cellHeight *
        0.74
    );


    ctx.strokeStyle =
        active
            ? "#ff5555"
            : "#696969";

    ctx.lineWidth = 2;

    ctx.strokeRect(
        px +
        cellWidth *
        0.13,
        py +
        cellHeight *
        0.13,
        cellWidth *
        0.74,
        cellHeight *
        0.74
    );


    let symbol = "•";


    if (
        cell.type ===
        "lever"
    ) {

        symbol =
            cell.enabled
                ? "ON"
                : "OFF";
    }

    if (
        cell.type ===
        "button"
    ) {

        symbol = "●";
    }

    if (
        cell.type ===
        "torch"
    ) {

        symbol = "♦";
    }

    if (
        cell.type ===
        "repeater"
    ) {

        symbol = "▶▶";
    }


    ctx.fillStyle =
        active
            ? "#ff6565"
            : "#b1b1b1";


    ctx.font =
        `${Math.max(
            8,
            size *
            0.2
        )}px Arial`;


    ctx.textAlign =
        "center";

    ctx.textBaseline =
        "middle";


    ctx.fillText(
        symbol,
        cx,
        cy
    );


    if (
        active &&
        cell.type ===
        "torch"
    ) {

        ctx.strokeStyle =
            `rgba(
                255,
                70,
                70,
                ${
                    0.4 +
                    Math.sin(
                        time *
                        6
                    ) *
                    0.15
                }
            )`;


        ctx.lineWidth = 3;


        ctx.beginPath();

        ctx.arc(
            cx,
            cy,
            size * 0.31,
            0,
            Math.PI * 2
        );

        ctx.stroke();
    }
}


function drawArrow(
    cx,
    cy,
    dir,
    size
) {

    const vector =
        DIRECTIONS[
            dir
        ];


    const side =
        DIRECTIONS[
            (
                dir + 1
            ) % 4
        ];


    ctx.beginPath();


    ctx.moveTo(
        cx +
        vector.x *
        size,
        cy +
        vector.y *
        size
    );


    ctx.lineTo(
        cx -
        vector.x *
        size *
        0.65 +
        side.x *
        size *
        0.55,
        cy -
        vector.y *
        size *
        0.65 +
        side.y *
        size *
        0.55
    );


    ctx.lineTo(
        cx -
        vector.x *
        size *
        0.65 -
        side.x *
        size *
        0.55,
        cy -
        vector.y *
        size *
        0.65 -
        side.y *
        size *
        0.55
    );


    ctx.closePath();

    ctx.fill();
}


// =====================================================
// DRAW ITEMS
// =====================================================

function drawItems(
    cellWidth,
    cellHeight
) {

    for (
        const item of
        state.items
    ) {

        const info =
            RESOURCES[
                item.resource
            ];

        if (!info) {
            continue;
        }


        const vector =
            DIRECTIONS[
                item.dir
            ];


        const cx =
            (
                item.x +
                0.5 +
                vector.x *
                item.progress
            ) *
            cellWidth;


        const cy =
            (
                item.y +
                0.5 +
                vector.y *
                item.progress
            ) *
            cellHeight;


        const size =
            Math.max(
                5,
                Math.min(
                    cellWidth,
                    cellHeight
                ) *
                0.16
            );


        ctx.fillStyle =
            info.color;


        ctx.fillRect(
            cx - size,
            cy - size,
            size * 2,
            size * 2
        );


        ctx.strokeStyle =
            "rgba(255,255,255,0.7)";


        ctx.lineWidth = 1;


        ctx.strokeRect(
            cx - size,
            cy - size,
            size * 2,
            size * 2
        );
    }
}


// =====================================================
// DRAW EFFECTS
// =====================================================

function drawParticles(
    cellWidth,
    cellHeight
) {

    if (
        !settings.effects
    ) {
        return;
    }


    for (
        const particle of
        particles
    ) {

        const alpha =
            Math.max(
                0,
                particle.life /
                particle.maxLife
            );


        if (
            particle.type ===
            "smoke"
        ) {

            ctx.fillStyle =
                `rgba(
                    150,
                    150,
                    150,
                    ${alpha * 0.6}
                )`;

        } else {

            ctx.fillStyle =
                `rgba(
                    255,
                    210,
                    75,
                    ${alpha}
                )`;
        }


        ctx.beginPath();


        ctx.arc(
            particle.x *
            cellWidth,
            particle.y *
            cellHeight,
            particle.type ===
            "smoke"
                ? 5
                : 2.5,
            0,
            Math.PI * 2
        );


        ctx.fill();
    }
}


// =====================================================
// DAY / NIGHT RENDER
// =====================================================

function drawDayNightOverlay(
    width,
    height
) {

    const t =
        state.timeOfDay;


    let darkness = 0;


    if (
        t > 0.68
    ) {

        darkness =
            Math.min(
                0.47,
                (
                    t -
                    0.68
                ) *
                1.6
            );

    } else if (
        t < 0.18
    ) {

        darkness =
            Math.min(
                0.47,
                (
                    0.18 -
                    t
                ) *
                2.5
            );
    }


    if (
        darkness <= 0
    ) {
        return;
    }


    ctx.fillStyle =
        `rgba(
            4,
            8,
            25,
            ${darkness}
        )`;


    ctx.fillRect(
        0,
        0,
        width,
        height
    );
}


function drawFactoryLights(
    cellWidth,
    cellHeight
) {

    if (
        !isNight()
    ) {
        return;
    }


    for (
        let y = 0;
        y < GRID_ROWS;
        y++
    ) {

        for (
            let x = 0;
            x < GRID_COLUMNS;
            x++
        ) {

            const cell =
                getCell(x, y);


            if (
                !cell ||
                !poweredMachines.has(
                    getIndex(x, y)
                )
            ) {
                continue;
            }


            const cx =
                (
                    x + 0.5
                ) *
                cellWidth;


            const cy =
                (
                    y + 0.5
                ) *
                cellHeight;


            const radius =
                Math.min(
                    cellWidth,
                    cellHeight
                ) *
                1.6;


            const gradient =
                ctx.createRadialGradient(
                    cx,
                    cy,
                    2,
                    cx,
                    cy,
                    radius
                );


            gradient.addColorStop(
                0,
                "rgba(255,230,150,0.17)"
            );


            gradient.addColorStop(
                1,
                "rgba(255,230,150,0)"
            );


            ctx.fillStyle =
                gradient;


            ctx.beginPath();


            ctx.arc(
                cx,
                cy,
                radius,
                0,
                Math.PI * 2
            );


            ctx.fill();
        }
    }
}


// =====================================================
// WEATHER RENDER
// =====================================================

function drawWeather(
    width,
    height
) {

    if (
        !settings.effects ||
        state.weather ===
        "clear"
    ) {
        return;
    }


    for (
        const particle of
        weatherParticles
    ) {

        const x =
            particle.x *
            width;

        const y =
            particle.y *
            height;


        if (
            particle.type ===
            "snow"
        ) {

            ctx.fillStyle =
                "rgba(255,255,255,0.8)";


            ctx.beginPath();


            ctx.arc(
                x,
                y,
                2.5,
                0,
                Math.PI * 2
            );


            ctx.fill();

        } else {

            ctx.strokeStyle =
                particle.type ===
                "thunder"
                    ? "rgba(190,210,255,0.8)"
                    : "rgba(150,190,220,0.65)";


            ctx.lineWidth = 1.4;


            ctx.beginPath();


            ctx.moveTo(
                x,
                y
            );


            ctx.lineTo(
                x - 4,
                y + 12
            );


            ctx.stroke();
        }
    }


    if (
        state.weather ===
        "thunder" &&
        Math.random() <
        0.005
    ) {

        ctx.fillStyle =
            "rgba(255,255,255,0.35)";


        ctx.fillRect(
            0,
            0,
            width,
            height
        );


        playSound("thunder");
    }
}


// =====================================================
// POINTER HOVER
// =====================================================

function handlePointerMove(
    event
) {

    const rect =
        canvas.getBoundingClientRect();


    const x =
        Math.floor(
            (
                event.clientX -
                rect.left
            ) /
            rect.width *
            GRID_COLUMNS
        );


    const y =
        Math.floor(
            (
                event.clientY -
                rect.top
            ) /
            rect.height *
            GRID_ROWS
        );


    if (
        inBounds(x, y)
    ) {

        hoveredCell = {
            x,
            y
        };

    } else {

        hoveredCell =
            null;
    }
}


// =====================================================
// SOUND
// =====================================================

function ensureAudio() {

    if (!audioContext) {

        const AudioContextClass =
            window.AudioContext ||
            window.webkitAudioContext;


        if (
            AudioContextClass
        ) {

            audioContext =
                new AudioContextClass();
        }
    }


    if (
        audioContext &&
        audioContext.state ===
        "suspended"
    ) {

        audioContext.resume();
    }
}


function playTone(
    frequency,
    duration,
    volume = 0.04,
    type = "square"
) {

    if (
        !audioContext
    ) {
        return;
    }


    const oscillator =
        audioContext.createOscillator();


    const gain =
        audioContext.createGain();


    oscillator.type =
        type;


    oscillator.frequency.value =
        frequency;


    gain.gain.setValueAtTime(
        volume,
        audioContext.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime +
        duration
    );


    oscillator.connect(
        gain
    );


    gain.connect(
        audioContext.destination
    );


    oscillator.start();


    oscillator.stop(
        audioContext.currentTime +
        duration
    );
}


function playSound(type) {

    if (
        settings.muted ||
        !settings.sound
    ) {
        return;
    }


    ensureAudio();


    if (type === "place") {
        playTone(130, 0.07, 0.025);
    }

    if (type === "delete") {
        playTone(90, 0.09, 0.035);
    }

    if (type === "machine") {
        playTone(100, 0.08, 0.018, "sawtooth");
    }

    if (type === "conveyor") {
        playTone(70, 0.05, 0.008, "square");
    }

    if (type === "craft") {

        playTone(420, 0.07, 0.035);

        setTimeout(
            () =>
                playTone(
                    650,
                    0.10,
                    0.035
                ),
            75
        );
    }

    if (type === "sell") {

        playTone(520, 0.08, 0.04);

        setTimeout(
            () =>
                playTone(
                    760,
                    0.12,
                    0.04
                ),
            90
        );
    }

    if (type === "upgrade") {

        playTone(350, 0.07, 0.035);

        setTimeout(
            () =>
                playTone(
                    520,
                    0.08,
                    0.035
                ),
            80
        );

        setTimeout(
            () =>
                playTone(
                    780,
                    0.12,
                    0.04
                ),
            170
        );
    }

    if (type === "switch") {
        playTone(180, 0.06, 0.03);
    }

    if (type === "storage") {
        playTone(250, 0.04, 0.015);
    }

    if (type === "save") {
        playTone(500, 0.08, 0.025);
    }

    if (type === "click") {
        playTone(200, 0.04, 0.015);
    }

    if (type === "error") {
        playTone(80, 0.16, 0.04);
    }

    if (type === "thunder") {
        playTone(45, 0.35, 0.04, "sawtooth");
    }

    if (type === "win") {

        playTone(400, 0.1, 0.04);

        setTimeout(
            () =>
                playTone(
                    600,
                    0.12,
                    0.04
                ),
            120
        );

        setTimeout(
            () =>
                playTone(
                    850,
                    0.2,
                    0.05
                ),
            260
        );
    }
}


// =====================================================
// MUSIC
// =====================================================

function startMusic() {

    stopMusic();


    musicInterval =
        setInterval(
            () => {

                if (
                    !gameRunning ||
                    settings.muted ||
                    !settings.music
                ) {
                    return;
                }


                ensureAudio();


                const notes = [
                    110,
                    130.81,
                    146.83,
                    164.81
                ];


                const note =
                    notes[
                        Math.floor(
                            Math.random() *
                            notes.length
                        )
                    ];


                playTone(
                    note,
                    1.2,
                    0.008,
                    "sine"
                );

            },
            5500
        );
}


function stopMusic() {

    if (
        musicInterval
    ) {

        clearInterval(
            musicInterval
        );

        musicInterval =
            null;
    }
}


// =====================================================
// GAME LOOP
// =====================================================

function gameLoop(time) {

    const dt =
        Math.min(
            0.05,
            (
                time -
                lastFrameTime
            ) /
            1000
        );


    lastFrameTime =
        time;


    if (
        gameRunning &&
        state
    ) {

        if (!paused) {

            state.statistics
                .playTime +=
                dt;


            powerTimer += dt;

            hudTimer += dt;

            autoSaveTimer += dt;


            if (
                powerTimer >=
                0.25
            ) {

                powerTimer = 0;

                computePowerNetwork();
            }


            updateMachines(dt);

            updateItems(dt);

            updateParticles(dt);

            updateDayNight(dt);

            updateWeather(dt);

            updateChallenge(dt);


            if (
                hudTimer >=
                0.5
            ) {

                hudTimer = 0;

                updateHUD();
            }


            if (
                autoSaveTimer >=
                8
            ) {

                autoSaveTimer = 0;

                saveGame();
            }
        }


        renderFactory();
    }


    requestAnimationFrame(
        gameLoop
    );
}


// =====================================================
// FORMATTERS
// =====================================================

function formatNumber(number) {

    return Number(
        number
    ).toLocaleString();
}


function formatPlayTime(
    seconds
) {

    seconds =
        Math.max(
            0,
            Math.floor(
                seconds
            )
        );


    const hours =
        Math.floor(
            seconds /
            3600
        );


    const minutes =
        Math.floor(
            (
                seconds %
                3600
            ) /
            60
        );


    const remainingSeconds =
        seconds %
        60;


    if (
        hours > 0
    ) {

        return (
            String(hours)
                .padStart(2, "0") +
            ":" +
            String(minutes)
                .padStart(2, "0") +
            ":" +
            String(remainingSeconds)
                .padStart(2, "0")
        );
    }


    return (
        String(minutes)
            .padStart(2, "0") +
        ":" +
        String(remainingSeconds)
            .padStart(2, "0")
    );
}


function formatCountdown(
    seconds
) {

    seconds =
        Math.max(
            0,
            Math.ceil(
                seconds
            )
        );


    const minutes =
        Math.floor(
            seconds /
            60
        );


    const remaining =
        seconds %
        60;


    return (
        String(minutes)
            .padStart(2, "0") +
        ":" +
        String(remaining)
            .padStart(2, "0")
    );
}


// =====================================================
// SETTINGS EVENTS
// =====================================================

function toggleSound() {

    settings.sound =
        !settings.sound;

    saveSettings();

    updateSettingsUI();

    ensureAudio();
}


function toggleMusic() {

    settings.music =
        !settings.music;

    saveSettings();

    updateSettingsUI();

    if (
        settings.music
    ) {
        startMusic();
    }
}


function toggleEffects() {

    settings.effects =
        !settings.effects;

    saveSettings();

    updateSettingsUI();
}


function toggleMute() {

    settings.muted =
        !settings.muted;

    saveSettings();

    updateSettingsUI();

    if (
        !settings.muted
    ) {

        ensureAudio();
        playSound("click");
    }
}


// =====================================================
// EVENT LISTENERS
// =====================================================

// Main menu

playBtn.addEventListener(
    "click",
    () =>
        startNewFactory(false)
);


continueBtn.addEventListener(
    "click",
    continueFactory
);


challengeBtn.addEventListener(
    "click",
    () =>
        startNewFactory(true)
);


statisticsBtn.addEventListener(
    "click",
    openStatistics
);


settingsBtn.addEventListener(
    "click",
    () =>
        openPanel(
            settingsPanel
        )
);


// Build tools

toolButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () =>
                selectTool(
                    button.dataset.tool
                )
        );
    }
);


rotateBtn.addEventListener(
    "click",
    rotateDirection
);


// Canvas

canvas.addEventListener(
    "pointerdown",
    handleCanvasClick
);


canvas.addEventListener(
    "pointermove",
    handlePointerMove
);


canvas.addEventListener(
    "pointerleave",
    () => {
        hoveredCell = null;
    }
);


canvas.addEventListener(
    "contextmenu",
    event =>
        event.preventDefault()
);


// Factory controls

inventoryBtn.addEventListener(
    "click",
    openInventory
);


upgradesBtn.addEventListener(
    "click",
    () => {

        updateUpgradesUI();

        openPanel(
            upgradesPanel
        );
    }
);


sellBtn.addEventListener(
    "click",
    sellProducts
);


statisticsGameBtn.addEventListener(
    "click",
    openStatistics
);


saveBtn.addEventListener(
    "click",
    () =>
        saveGame(true)
);


helpBtn.addEventListener(
    "click",
    () =>
        openPanel(
            helpPanel
        )
);


gameMenuBtn.addEventListener(
    "click",
    () => {

        const leave =
            confirm(
                "Save your factory and return to the main menu?"
            );

        if (leave) {

            saveGame();

            returnToMainMenu();
        }
    }
);


// Mute

muteBtn.addEventListener(
    "click",
    toggleMute
);


// Settings

soundToggleBtn.addEventListener(
    "click",
    toggleSound
);


musicToggleBtn.addEventListener(
    "click",
    toggleMusic
);


effectsToggleBtn.addEventListener(
    "click",
    toggleEffects
);


closeSettingsBtn.addEventListener(
    "click",
    () =>
        closePanel(
            settingsPanel
        )
);


// Statistics

closeStatisticsBtn.addEventListener(
    "click",
    () =>
        closePanel(
            statisticsPanel
        )
);


// Inventory

closeInventoryBtn.addEventListener(
    "click",
    () =>
        closePanel(
            inventoryPanel
        )
);


// Upgrades

closeUpgradesBtn.addEventListener(
    "click",
    () =>
        closePanel(
            upgradesPanel
        )
);


upgradeButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () =>
                buyUpgrade(
                    button.dataset.upgrade
                )
        );
    }
);


// Help

closeHelpBtn.addEventListener(
    "click",
    () =>
        closePanel(
            helpPanel
        )
);


// Challenge result

challengeResultBtn.addEventListener(
    "click",
    () => {

        closePanel(
            challengeResultPanel
        );

        returnToMainMenu();
    }
);


// Close modal by clicking background

[
    settingsPanel,
    statisticsPanel,
    inventoryPanel,
    upgradesPanel,
    helpPanel
].forEach(
    panel => {

        panel.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    panel
                ) {

                    closePanel(
                        panel
                    );
                }
            }
        );
    }
);


// Escape key

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Escape"
        ) {

            closeAllPanels();
        }


        if (
            event.key.toLowerCase() ===
            "r" &&
            gameRunning
        ) {

            rotateDirection();
        }
    }
);


// Resize

window.addEventListener(
    "resize",
    () => {

        if (
            gameRunning
        ) {

            resizeCanvas();
        }
    }
);


// Save before leaving

window.addEventListener(
    "beforeunload",
    () => {

        if (
            state &&
            gameRunning
        ) {

            saveGame();
        }
    }
);


// =====================================================
// INITIALIZE
// =====================================================

function initialize() {

    loadSettings();

    updateContinueButton();

    updateToolUI();

    requestAnimationFrame(
        gameLoop
    );


    console.log(
        "Minecraft Redstone Factory loaded successfully."
    );
}


initialize();