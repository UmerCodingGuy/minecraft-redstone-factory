/*
=========================================================
MINECRAFT REDSTONE FACTORY
LEVEL 9

PART 3
FULL RESTORED SCRIPT.JS

Version 4.1
=========================================================
*/


// =====================================================
// DOM ELEMENTS
// =====================================================

// Screens

const mainMenu =
    document.getElementById("mainMenu");

const gameScreen =
    document.getElementById("gameScreen");


// Main Menu

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

const soundHudIcon =
    document.getElementById("soundHudIcon");

const gameMenuBtn =
    document.getElementById("gameMenuBtn");


// Challenge HUD

const challengeHud =
    document.getElementById("challengeHud");

const challengeTarget =
    document.getElementById("challengeTarget");

const challengeTime =
    document.getElementById("challengeTime");


// Factory Canvas

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

const factoryModeBadge =
    document.getElementById("factoryModeBadge");

const autosaveStatus =
    document.getElementById("autosaveStatus");

const toolButtons =
    document.querySelectorAll(".tool-btn");


// Factory Control Buttons

const inventoryBtn =
    document.getElementById("inventoryBtn");

const upgradesBtn =
    document.getElementById("upgradesBtn");

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

const inventoryCapacityText =
    document.getElementById(
        "inventoryCapacityText"
    );

const inventorySellAllBtn =
    document.getElementById(
        "inventorySellAllBtn"
    );


// Upgrades

const upgradesPanel =
    document.getElementById("upgradesPanel");

const closeUpgradesBtn =
    document.getElementById("closeUpgradesBtn");

const upgradeButtons =
    document.querySelectorAll(
        "[data-upgrade]"
    );

const beltSpeedLevel =
    document.getElementById("beltSpeedLevel");

const minerSpeedLevel =
    document.getElementById("minerSpeedLevel");

const storageLevel =
    document.getElementById("storageLevel");

const powerLevel =
    document.getElementById("powerLevel");

const productionLevel =
    document.getElementById(
        "productionLevel"
    );


// Help

const helpPanel =
    document.getElementById("helpPanel");

const closeHelpBtn =
    document.getElementById("closeHelpBtn");


// Challenge Result

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


// Confirmation Panel

const confirmPanel =
    document.getElementById("confirmPanel");

const confirmTitle =
    document.getElementById("confirmTitle");

const confirmMessage =
    document.getElementById("confirmMessage");

const confirmCancelBtn =
    document.getElementById(
        "confirmCancelBtn"
    );

const confirmActionBtn =
    document.getElementById(
        "confirmActionBtn"
    );


// =====================================================
// SAVE KEYS
// =====================================================

const SAVE_KEY =
    "minecraftRedstoneFactorySave";

const SETTINGS_KEY =
    "minecraftRedstoneFactorySettings";

const CHALLENGE_RECORD_KEY =
    "minecraftRedstoneFactoryChallengeRecord";


// =====================================================
// FACTORY GRID
// =====================================================

const GRID_COLUMNS =
    14;

const GRID_ROWS =
    9;

const MAX_WORLD_ITEMS =
    250;


// Direction:
// 0 = Right
// 1 = Down
// 2 = Left
// 3 = Up

const DIRECTIONS = [

    {
        x: 1,
        y: 0,
        symbol: "→"
    },

    {
        x: 0,
        y: 1,
        symbol: "↓"
    },

    {
        x: -1,
        y: 0,
        symbol: "←"
    },

    {
        x: 0,
        y: -1,
        symbol: "↑"
    }

];


// =====================================================
// FACTORY BLOCKS
// =====================================================

const BUILD_DEFINITIONS = {

    belt: {
        name: "Conveyor Belt",
        cost: 5
    },

    splitBelt: {
        name: "Splitter",
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


const MACHINE_TYPES =
    new Set([

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
// RESOURCES
// =====================================================

const RESOURCES = {

    coal: {

        name:
            "Coal",

        color:
            "#252927",

        light:
            "#6d7770",

        value:
            3

    },


    iron_ore: {

        name:
            "Iron Ore",

        color:
            "#a69d90",

        light:
            "#d2c9bc",

        value:
            5

    },


    gold_ore: {

        name:
            "Gold Ore",

        color:
            "#c6a22d",

        light:
            "#f4d45c",

        value:
            8

    },


    diamond: {

        name:
            "Diamond",

        color:
            "#3ac7cb",

        light:
            "#8cf6f7",

        value:
            35

    },


    emerald: {

        name:
            "Emerald",

        color:
            "#2dbb62",

        light:
            "#6af08f",

        value:
            30

    },


    redstone: {

        name:
            "Redstone",

        color:
            "#c82929",

        light:
            "#ff5959",

        value:
            7

    },


    copper_ore: {

        name:
            "Copper Ore",

        color:
            "#a96743",

        light:
            "#dc936b",

        value:
            6

    },


    quartz: {

        name:
            "Quartz",

        color:
            "#d9d0c7",

        light:
            "#fff7ee",

        value:
            11

    },


    netherite_scrap: {

        name:
            "Netherite Scrap",

        color:
            "#443a40",

        light:
            "#776a71",

        value:
            50

    },


    crushed_iron: {

        name:
            "Crushed Iron",

        color:
            "#909795",

        light:
            "#c8cecb",

        value:
            7

    },


    crushed_gold: {

        name:
            "Crushed Gold",

        color:
            "#d0b144",

        light:
            "#ffe478",

        value:
            11

    },


    crushed_copper: {

        name:
            "Crushed Copper",

        color:
            "#b56e4c",

        light:
            "#e89970",

        value:
            8

    },


    iron_ingot: {

        name:
            "Iron Ingot",

        color:
            "#bfc7c4",

        light:
            "#f1f5f3",

        value:
            13

    },


    gold_ingot: {

        name:
            "Gold Ingot",

        color:
            "#e0bc3a",

        light:
            "#ffe66c",

        value:
            20

    },


    copper_ingot: {

        name:
            "Copper Ingot",

        color:
            "#bd704a",

        light:
            "#e99a72",

        value:
            15

    },


    iron_gear: {

        name:
            "Iron Gear",

        color:
            "#8f9995",

        light:
            "#d5ddda",

        value:
            45,

        product:
            true

    },


    powered_component: {

        name:
            "Powered Component",

        color:
            "#e7bf32",

        light:
            "#ffe76a",

        value:
            75,

        product:
            true

    },


    copper_coil: {

        name:
            "Copper Coil",

        color:
            "#c9794e",

        light:
            "#f1a277",

        value:
            55,

        product:
            true

    },


    diamond_drill: {

        name:
            "Diamond Drill",

        color:
            "#35cdd0",

        light:
            "#88ffff",

        value:
            180,

        product:
            true

    },


    trading_module: {

        name:
            "Trading Module",

        color:
            "#2fc864",

        light:
            "#78f39a",

        value:
            150,

        product:
            true

    },


    redstone_circuit: {

        name:
            "Redstone Circuit",

        color:
            "#df3030",

        light:
            "#ff6d6d",

        value:
            65,

        product:
            true

    },


    comparator_core: {

        name:
            "Comparator Core",

        color:
            "#d4d8d6",

        light:
            "#ffffff",

        value:
            95,

        product:
            true

    },


    reinforced_part: {

        name:
            "Reinforced Part",

        color:
            "#50444a",

        light:
            "#87767e",

        value:
            260,

        product:
            true

    }

};


// =====================================================
// MACHINE RECIPES
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


// =====================================================
// SORTER FILTERS
// =====================================================

const SORTER_FILTERS = [

    "coal",

    "iron_ore",

    "gold_ore",

    "copper_ore",

    "redstone",

    "diamond",

    "emerald",

    "quartz",

    "netherite_scrap"

];


// =====================================================
// SETTINGS
// =====================================================

const DEFAULT_SETTINGS = {

    sound:
        true,

    music:
        true,

    effects:
        true,

    muted:
        false

};


// =====================================================
// UPGRADE COSTS
// =====================================================

const UPGRADE_BASE_COSTS = {

    beltSpeed:
        400,

    minerSpeed:
        450,

    storage:
        350,

    power:
        500,

    production:
        600

};


// =====================================================
// RUNTIME STATE
// =====================================================

let settings = {
    ...DEFAULT_SETTINGS
};


let state =
    null;


let gameRunning =
    false;


let paused =
    false;


let selectedTool =
    "interact";


let direction =
    0;


let hoveredCell =
    null;


let poweredMachines =
    new Set();


let poweredNetwork =
    new Set();


let activePowerSources =
    0;


let productionTimes =
    [];


let particles =
    [];


let weatherParticles =
    [];


let lastFrameTime =
    performance.now();


let autoSaveTimer =
    0;


let hudTimer =
    0;


let powerTimer =
    0;


let weatherTimer =
    0;


let conveyorSoundTimer =
    0;


let audioContext =
    null;


let musicInterval =
    null;


let temporaryMessageTimer =
    null;


let confirmResolver =
    null;


// =====================================================
// NEW FACTORY STATE
// =====================================================

function createNewState(
    challenge = false
) {

    return {

        version:
            4,


        coins:
            challenge
                ? 350
                : 1500,


        cells:
            Array(
                GRID_COLUMNS *
                GRID_ROWS
            ).fill(null),


        items:
            [],


        inventory:
            {},


        upgrades: {

            beltSpeed:
                0,

            minerSpeed:
                0,

            storage:
                0,

            power:
                0,

            production:
                0

        },


        statistics: {

            itemsProduced:
                0,

            machinesBuilt:
                0,

            coinsEarned:
                0,

            playTime:
                0,

            efficiency:
                100

        },


        challenge: {

            active:
                challenge,

            timeLeft:
                720,

            target:
                10000,

            finished:
                false

        },


        timeOfDay:
            0.28,


        weather:
            "clear",


        savedAt:
            Date.now()

    };

}


// =====================================================
// NORMALIZE OLD SAVES
// =====================================================

function normalizeCell(
    cell
) {

    if (
        !cell ||
        typeof cell !==
        "object" ||
        !BUILD_DEFINITIONS[
            cell.type
        ]
    ) {

        return null;

    }


    return {

        type:
            cell.type,


        dir:
            Number.isInteger(
                cell.dir
            )
                ? (
                    (
                        cell.dir %
                        4
                    ) +
                    4
                ) %
                4
                : 0,


        timer:
            Number.isFinite(
                Number(
                    cell.timer
                )
            )
                ? Number(
                    cell.timer
                )
                : 0,


        process:
            Number.isFinite(
                Number(
                    cell.process
                )
            )
                ? Number(
                    cell.process
                )
                : 0,


        buffer:
            Array.isArray(
                cell.buffer
            )
                ? cell.buffer.filter(
                    resource =>
                        RESOURCES[
                            resource
                        ]
                )
                : [],


        splitToggle:
            !!cell.splitToggle,


        enabled:
            cell.type ===
            "lever"
                ? cell.enabled !==
                  false
                : cell.enabled,


        buttonUntil:
            Number(
                cell.buttonUntil
            ) ||
            0,


        filter:
            SORTER_FILTERS.includes(
                cell.filter
            )
                ? cell.filter
                : "coal"

    };

}


function normalizeLoadedState(
    raw
) {

    const fresh =
        createNewState(
            false
        );


    if (
        !raw ||
        typeof raw !==
        "object"
    ) {

        return fresh;

    }


    if (
        Number.isFinite(
            Number(
                raw.coins
            )
        )
    ) {

        fresh.coins =
            Math.max(
                0,
                Number(
                    raw.coins
                )
            );

    }


    if (
        raw.inventory &&
        typeof raw.inventory ===
        "object"
    ) {

        for (
            const [
                resource,
                count
            ] of Object.entries(
                raw.inventory
            )
        ) {

            if (
                !RESOURCES[
                    resource
                ]
            ) {

                continue;

            }


            fresh.inventory[
                resource
            ] =
                Math.max(

                    0,

                    Math.floor(
                        Number(
                            count
                        ) ||
                        0
                    )

                );

        }

    }


    fresh.upgrades = {

        ...fresh.upgrades,

        ...(
            raw.upgrades ||
            {}
        )

    };


    for (
        const key of
        Object.keys(
            fresh.upgrades
        )
    ) {

        fresh.upgrades[
            key
        ] =
            Math.max(

                0,

                Math.min(

                    5,

                    Math.floor(
                        Number(
                            fresh.upgrades[
                                key
                            ]
                        ) ||
                        0
                    )

                )

            );

    }


    fresh.statistics = {

        ...fresh.statistics,

        ...(
            raw.statistics ||
            {}
        )

    };


    if (
        Array.isArray(
            raw.cells
        )
    ) {

        fresh.cells =
            Array(
                GRID_COLUMNS *
                GRID_ROWS
            ).fill(null);


        for (
            let i = 0;
            i <
            Math.min(
                raw.cells.length,
                fresh.cells.length
            );
            i++
        ) {

            fresh.cells[
                i
            ] =
                normalizeCell(
                    raw.cells[
                        i
                    ]
                );

        }

    }


    if (
        Array.isArray(
            raw.items
        )
    ) {

        fresh.items =
            raw.items

                .filter(
                    item =>
                        item &&
                        RESOURCES[
                            item.resource
                        ]
                )

                .slice(
                    0,
                    MAX_WORLD_ITEMS
                )

                .map(
                    item => ({

                        resource:
                            item.resource,


                        x:
                            Math.max(

                                0,

                                Math.min(

                                    GRID_COLUMNS -
                                    1,

                                    Math.floor(
                                        Number(
                                            item.x
                                        ) ||
                                        0
                                    )

                                )

                            ),


                        y:
                            Math.max(

                                0,

                                Math.min(

                                    GRID_ROWS -
                                    1,

                                    Math.floor(
                                        Number(
                                            item.y
                                        ) ||
                                        0
                                    )

                                )

                            ),


                        dir:
                            Number.isInteger(
                                item.dir
                            )
                                ? (
                                    (
                                        item.dir %
                                        4
                                    ) +
                                    4
                                ) %
                                4
                                : 0,


                        progress:
                            Math.max(

                                0,

                                Math.min(

                                    0.98,

                                    Number(
                                        item.progress
                                    ) ||
                                    0

                                )

                            ),


                        remove:
                            false

                    })
                );

    }


    if (
        Number.isFinite(
            Number(
                raw.timeOfDay
            )
        )
    ) {

        fresh.timeOfDay =
            (
                (
                    Number(
                        raw.timeOfDay
                    ) %
                    1
                ) +
                1
            ) %
            1;

    }


    if (
        [
            "clear",
            "rain",
            "snow",
            "thunder"
        ].includes(
            raw.weather
        )
    ) {

        fresh.weather =
            raw.weather;

    }


    // Continue always opens normal mode.

    fresh.challenge.active =
        false;


    fresh.challenge.finished =
        false;


    return fresh;

}


// =====================================================
// CHALLENGE RECORD
// =====================================================

function loadChallengeRecord() {

    try {

        const raw =
            localStorage.getItem(
                CHALLENGE_RECORD_KEY
            );


        if (
            !raw
        ) {

            return {

                bestRating:
                    "-",

                bestProfit:
                    0,

                bestItems:
                    0

            };

        }


        const saved =
            JSON.parse(
                raw
            );


        return {

            bestRating:
                [
                    "S",
                    "A",
                    "B",
                    "C"
                ].includes(
                    saved.bestRating
                )
                    ? saved.bestRating
                    : "-",


            bestProfit:
                Number(
                    saved.bestProfit
                ) ||
                0,


            bestItems:
                Number(
                    saved.bestItems
                ) ||
                0

        };

    } catch {

        return {

            bestRating:
                "-",

            bestProfit:
                0,

            bestItems:
                0

        };

    }

}


function saveChallengeRecord(
    rating,
    profit,
    items
) {

    const record =
        loadChallengeRecord();


    const ranks = {

        "-":
            0,

        C:
            1,

        B:
            2,

        A:
            3,

        S:
            4

    };


    if (
        (
            ranks[
                rating
            ] ||
            0
        ) >
        (
            ranks[
                record.bestRating
            ] ||
            0
        )
    ) {

        record.bestRating =
            rating;

    }


    record.bestProfit =
        Math.max(
            record.bestProfit,
            profit
        );


    record.bestItems =
        Math.max(
            record.bestItems,
            items
        );


    localStorage.setItem(

        CHALLENGE_RECORD_KEY,

        JSON.stringify(
            record
        )

    );

}


// =====================================================
// SAVE GAME
// =====================================================

function saveGame(
    showMessage = false
) {

    if (
        !state
    ) {

        return;

    }


    // Challenge does not replace normal factory.

    if (
        state.challenge.active
    ) {

        if (
            showMessage
        ) {

            showFactoryMessage(
                "Challenge runs are temporary. Your normal factory is safe."
            );

        }


        return;

    }


    state.savedAt =
        Date.now();


    localStorage.setItem(

        SAVE_KEY,

        JSON.stringify(
            state
        )

    );


    updateContinueButton();


    if (
        showMessage
    ) {

        showFactoryMessage(
            "Factory saved successfully."
        );


        playSound(
            "save"
        );

    }

}


// =====================================================
// LOAD GAME
// =====================================================

function loadGame() {

    const raw =
        localStorage.getItem(
            SAVE_KEY
        );


    if (
        !raw
    ) {

        return null;

    }


    try {

        return normalizeLoadedState(
            JSON.parse(
                raw
            )
        );

    } catch (
        error
    ) {

        console.error(
            "Could not load factory:",
            error
        );


        return null;

    }

}


// =====================================================
// CHECK SAVE
// =====================================================

function hasUsableSave() {

    const raw =
        localStorage.getItem(
            SAVE_KEY
        );


    if (
        !raw
    ) {

        return false;

    }


    try {

        JSON.parse(
            raw
        );


        return true;

    } catch {

        return false;

    }

}


// =====================================================
// SETTINGS SYSTEM
// =====================================================

function loadSettings() {

    try {

        settings = {

            ...DEFAULT_SETTINGS,

            ...JSON.parse(
                localStorage.getItem(
                    SETTINGS_KEY
                ) ||
                "{}"
            )

        };

    } catch {

        settings = {
            ...DEFAULT_SETTINGS
        };

    }


    updateSettingsUI();

}


function saveSettings() {

    localStorage.setItem(

        SETTINGS_KEY,

        JSON.stringify(
            settings
        )

    );

}


function updateToggleButton(
    button,
    enabled
) {

    if (
        !button
    ) {

        return;

    }


    button.textContent =
        enabled
            ? "ON"
            : "OFF";


    button.classList.toggle(
        "active",
        enabled
    );


    button.setAttribute(
        "aria-pressed",
        String(
            enabled
        )
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


    if (
        soundHudIcon
    ) {

        soundHudIcon.style.opacity =
            settings.muted
                ? "0.35"
                : "1";


        soundHudIcon.style.filter =
            settings.muted
                ? "grayscale(1)"
                : "none";

    }


    if (
        muteBtn
    ) {

        muteBtn.title =
            settings.muted
                ? "Unmute"
                : "Mute";

    }

}


// =====================================================
// CUSTOM CONFIRMATION
// =====================================================

function showConfirmation(
    title,
    message,
    confirmText =
        "Confirm"
) {

    if (
        confirmResolver
    ) {

        const oldResolver =
            confirmResolver;


        confirmResolver =
            null;


        oldResolver(
            false
        );

    }


    confirmTitle.textContent =
        title;


    confirmMessage.textContent =
        message;


    confirmActionBtn.textContent =
        confirmText;


    openPanel(
        confirmPanel
    );


    return new Promise(
        resolve => {

            confirmResolver =
                resolve;

        }
    );

}


function closeConfirmation(
    result
) {

    closePanel(
        confirmPanel
    );


    if (
        confirmResolver
    ) {

        const resolver =
            confirmResolver;


        confirmResolver =
            null;


        resolver(
            result
        );

    }

}


// =====================================================
// MAIN MENU
// =====================================================

function updateContinueButton() {

    const hasSave =
        hasUsableSave();


    continueBtn.disabled =
        !hasSave;


    saveIndicator.classList.toggle(
        "active",
        hasSave
    );


    saveStatusText.textContent =
        hasSave
            ? "Factory save found"
            : "No factory save found";

}


// =====================================================
// NEW FACTORY
// =====================================================

async function startNewFactory() {

    if (
        hasUsableSave()
    ) {

        const replace =
            await showConfirmation(

                "Start New Factory?",

                "A saved factory already exists. Starting a new factory will replace it.",

                "Start New Factory"

            );


        if (
            !replace
        ) {

            return;

        }

    }


    state =
        createNewState(
            false
        );


    saveGame();


    openGame();

}


// =====================================================
// CONTINUE FACTORY
// =====================================================

async function continueFactory() {

    const loaded =
        loadGame();


    if (
        !loaded
    ) {

        await showConfirmation(

            "Save Error",

            "Your factory save could not be loaded.",

            "OK"

        );


        return;

    }


    state =
        loaded;


    openGame();

}


// =====================================================
// START CHALLENGE
// =====================================================

function startChallenge() {

    state =
        createNewState(
            true
        );


    openGame();

}


// =====================================================
// OPEN GAME
// =====================================================

function openGame() {

    ensureAudio();


    mainMenu.classList.remove(
        "active-screen"
    );


    mainMenu.setAttribute(
        "aria-hidden",
        "true"
    );


    gameScreen.classList.add(
        "active-screen"
    );


    gameScreen.setAttribute(
        "aria-hidden",
        "false"
    );


    gameRunning =
        true;


    paused =
        false;


    hoveredCell =
        null;


    productionTimes =
        [];


    particles =
        [];


    weatherParticles =
        [];


    autoSaveTimer =
        0;


    hudTimer =
        0;


    powerTimer =
        0;


    weatherTimer =
        0;


    conveyorSoundTimer =
        0;


    challengeHud.classList.toggle(

        "active",

        state.challenge.active &&
        !state.challenge.finished

    );


    factoryModeBadge.textContent =
        state.challenge.active

            ? "CHALLENGE MODE"

            : "AUTOMATION ONLINE";


    autosaveStatus.textContent =
        state.challenge.active

            ? "TEMPORARY RUN"

            : "AUTOSAVE ON";


    requestAnimationFrame(
        () => {

            resizeCanvas();

            computePowerNetwork();

            updateToolUI();

            updateUpgradesUI();

            updateHUD();

        }
    );


    startMusic();


    showFactoryMessage(

        state.challenge.active

            ? "Challenge started. Earn 10,000 coins before time runs out."

            : "Factory ready. Build your production line."

    );

}


// =====================================================
// RETURN TO MENU
// =====================================================

function returnToMainMenu() {

    if (
        state &&
        !state.challenge.active
    ) {

        saveGame();

    }


    gameRunning =
        false;


    paused =
        false;


    hoveredCell =
        null;


    stopMusic();


    closeAllPanels();


    closePanel(
        confirmPanel
    );


    gameScreen.classList.remove(
        "active-screen"
    );


    gameScreen.setAttribute(
        "aria-hidden",
        "true"
    );


    mainMenu.classList.add(
        "active-screen"
    );


    mainMenu.setAttribute(
        "aria-hidden",
        "false"
    );


    state =
        null;


    updateContinueButton();

}


// =====================================================
// GRID HELPERS
// =====================================================

function getIndex(
    x,
    y
) {

    return (
        y *
        GRID_COLUMNS +
        x
    );

}


function inBounds(
    x,
    y
) {

    return (

        x >=
        0 &&

        x <
        GRID_COLUMNS &&

        y >=
        0 &&

        y <
        GRID_ROWS

    );

}


function getCell(
    x,
    y
) {

    if (
        !state ||
        !inBounds(
            x,
            y
        )
    ) {

        return null;

    }


    return state.cells[
        getIndex(
            x,
            y
        )
    ];

}


function setCell(
    x,
    y,
    value
) {

    if (
        !state ||
        !inBounds(
            x,
            y
        )
    ) {

        return;

    }


    state.cells[
        getIndex(
            x,
            y
        )
    ] =
        value;

}


function getCellFromPointer(
    event
) {

    const rect =
        canvas.getBoundingClientRect();


    if (
        !rect.width ||
        !rect.height
    ) {

        return null;

    }


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
        !inBounds(
            x,
            y
        )
    ) {

        return null;

    }


    return {
        x,
        y
    };

}


// =====================================================
// TOOL SYSTEM
// =====================================================

function selectTool(
    tool
) {

    if (
        !BUILD_DEFINITIONS[
            tool
        ]
    ) {

        return;

    }


    selectedTool =
        tool;


    updateToolUI();


    playSound(
        "click"
    );

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
        ]?.name ||
        selectedTool;


    selectedDirection.textContent =
        DIRECTIONS[
            direction
        ].symbol;

}


function rotateDirection() {

    direction =
        (
            direction +
            1
        ) %
        4;


    updateToolUI();


    playSound(
        "click"
    );

}


// =====================================================
// FACTORY CLICK
// =====================================================

function handleCanvasClick(
    event
) {

    if (
        !state ||
        paused
    ) {

        return;

    }


    const point =
        getCellFromPointer(
            event
        );


    if (
        !point
    ) {

        return;

    }


    if (
        selectedTool ===
        "interact"
    ) {

        interactWithCell(
            point.x,
            point.y
        );


        return;

    }


    if (
        selectedTool ===
        "delete"
    ) {

        deleteCell(
            point.x,
            point.y
        );


        return;

    }


    placeCell(

        point.x,

        point.y,

        selectedTool

    );

}


// =====================================================
// PLACE BLOCK
// =====================================================

function placeCell(
    x,
    y,
    type
) {

    if (
        getCell(
            x,
            y
        )
    ) {

        showFactoryMessage(
            "That factory tile is occupied."
        );


        playSound(
            "error"
        );


        return;

    }


    const definition =
        BUILD_DEFINITIONS[
            type
        ];


    if (
        !definition
    ) {

        return;

    }


    if (
        state.coins <
        definition.cost
    ) {

        showFactoryMessage(
            "Not enough coins."
        );


        playSound(
            "error"
        );


        return;

    }


    state.coins -=
        definition.cost;


    setCell(

        x,

        y,

        {

            type,

            dir:
                direction,

            timer:
                0,

            process:
                0,

            buffer:
                [],

            splitToggle:
                false,

            enabled:
                type ===
                "lever"
                    ? true
                    : undefined,

            buttonUntil:
                0,

            filter:
                type ===
                "sorter"
                    ? "coal"
                    : undefined

        }

    );


    if (
        MACHINE_TYPES.has(
            type
        )
    ) {

        state.statistics
            .machinesBuilt++;

    }


    computePowerNetwork();


    updateHUD();


    playSound(
        "place"
    );


    if (
        type ===
        "sorter"
    ) {

        showFactoryMessage(
            "Sorter built. Coal filter selected."
        );

    } else {

        showFactoryMessage(
            `${definition.name} built.`
        );

    }

}


// =====================================================
// DELETE BLOCK
// =====================================================

function deleteCell(
    x,
    y
) {

    const cell =
        getCell(
            x,
            y
        );


    if (
        !cell
    ) {

        showFactoryMessage(
            "Nothing to remove."
        );


        return;

    }


    const cost =
        BUILD_DEFINITIONS[
            cell.type
        ]?.cost ||
        0;


    const refund =
        Math.floor(
            cost *
            0.25
        );


    state.coins +=
        refund;


    state.items =
        state.items.filter(

            item =>

                !(
                    item.x ===
                    x &&

                    item.y ===
                    y
                )

        );


    setCell(
        x,
        y,
        null
    );


    computePowerNetwork();


    updateHUD();


    playSound(
        "delete"
    );


    showFactoryMessage(
        `Block removed. ${refund} coins refunded.`
    );

}


// =====================================================
// INTERACT
// =====================================================

function interactWithCell(
    x,
    y
) {

    const cell =
        getCell(
            x,
            y
        );


    if (
        !cell
    ) {

        showFactoryMessage(
            "Nothing to interact with."
        );


        return;

    }


    // Lever

    if (
        cell.type ===
        "lever"
    ) {

        cell.enabled =
            !cell.enabled;


        computePowerNetwork();


        updateHUD();


        playSound(
            "switch"
        );


        showFactoryMessage(

            cell.enabled
                ? "Lever switched ON."
                : "Lever switched OFF."

        );


        return;

    }


    // Button

    if (
        cell.type ===
        "button"
    ) {

        cell.buttonUntil =
            Date.now() +
            5000;


        computePowerNetwork();


        updateHUD();


        playSound(
            "switch"
        );


        showFactoryMessage(
            "Button powered for 5 seconds."
        );


        return;

    }


    // Sorter

    if (
        cell.type ===
        "sorter"
    ) {

        let filterIndex =
            SORTER_FILTERS.indexOf(
                cell.filter
            );


        if (
            filterIndex <
            0
        ) {

            filterIndex =
                0;

        }


        filterIndex =
            (
                filterIndex +
                1
            ) %
            SORTER_FILTERS.length;


        cell.filter =
            SORTER_FILTERS[
                filterIndex
            ];


        playSound(
            "switch"
        );


        showFactoryMessage(

            `Sorter filter: ${RESOURCES[cell.filter].name}. Matching items turn right.`

        );


        return;

    }


    if (
        MACHINE_TYPES.has(
            cell.type
        )
    ) {

        const powered =

            !POWERED_MACHINE_TYPES.has(
                cell.type
            ) ||

            poweredMachines.has(
                getIndex(
                    x,
                    y
                )
            );


        const bufferCount =
            Array.isArray(
                cell.buffer
            )
                ? cell.buffer.length
                : 0;


        showFactoryMessage(

            `${BUILD_DEFINITIONS[cell.type].name} • ${powered ? "READY" : "NO POWER"} • Buffer ${bufferCount}/5`

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
// POWER SOURCES
// =====================================================

function isSourceActive(
    cell
) {

    if (
        !cell
    ) {

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


// =====================================================
// POWER NETWORK
// =====================================================

function computePowerNetwork() {

    if (
        !state
    ) {

        return;

    }


    poweredNetwork =
        new Set();


    poweredMachines =
        new Set();


    activePowerSources =
        0;


    const queue =
        [];


    const bestSignal =
        new Map();


    const candidateMachines =
        new Set();


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
                getCell(
                    x,
                    y
                );


            if (
                !isSourceActive(
                    cell
                )
            ) {

                continue;

            }


            activePowerSources++;


            const index =
                getIndex(
                    x,
                    y
                );


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


    while (
        queue.length
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
                !inBounds(
                    nx,
                    ny
                )
            ) {

                continue;

            }


            const cell =
                getCell(
                    nx,
                    ny
                );


            if (
                !cell
            ) {

                continue;

            }


            const index =
                getIndex(
                    nx,
                    ny
                );


            // Powered machine beside network.

            if (
                POWERED_MACHINE_TYPES.has(
                    cell.type
                )
            ) {

                candidateMachines.add(
                    index
                );


                continue;

            }


            if (

                cell.type !==
                "wire" &&

                cell.type !==
                "repeater" &&

                !isSourceActive(
                    cell
                )

            ) {

                continue;

            }


            let nextSignal =
                node.signal -
                1;


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
                nextSignal <=
                0
            ) {

                continue;

            }


            const previousSignal =

                bestSignal.get(
                    index
                ) ??
                -1;


            if (
                nextSignal <=
                previousSignal
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

                x:
                    nx,

                y:
                    ny,

                signal:
                    nextSignal

            });

        }

    }


    const maxMachines =

        activePowerSources *

        (
            10 +

            state.upgrades.power *
            5
        );


    const machines =
        [
            ...candidateMachines
        ];


    for (
        let i = 0;
        i <
        Math.min(
            machines.length,
            maxMachines
        );
        i++
    ) {

        poweredMachines.add(
            machines[
                i
            ]
        );

    }

}


// =====================================================
// MACHINE UPDATE
// =====================================================

function updateMachines(
    dt
) {

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
                getCell(
                    x,
                    y
                );


            if (
                !cell
            ) {

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
                [
                    "crusher",
                    "smelter",
                    "crafter"
                ].includes(
                    cell.type
                )
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


// =====================================================
// MINER
// =====================================================

function updateMiner(
    x,
    y,
    cell,
    dt
) {

    if (
        !poweredMachines.has(
            getIndex(
                x,
                y
            )
        )
    ) {

        return;

    }


    // Prevent pile-up inside miner.

    if (
        countItemsAt(
            x,
            y
        ) >=
        1
    ) {

        return;

    }


    const speed =

        1 +

        state.upgrades
            .minerSpeed *
        0.25;


    cell.timer +=
        dt *
        speed;


    if (
        cell.timer <
        4.2
    ) {

        return;

    }


    cell.timer =
        0;


    spawnItem(

        getRandomMinedResource(),

        x,

        y,

        cell.dir

    );


    createMachineEffects(
        x,
        y,
        "miner"
    );


    playSound(
        "machine"
    );

}


// =====================================================
// PROCESSING MACHINES
// =====================================================

function updateProcessor(
    x,
    y,
    cell,
    dt
) {

    if (
        !poweredMachines.has(
            getIndex(
                x,
                y
            )
        )
    ) {

        return;

    }


    if (
        !Array.isArray(
            cell.buffer
        )
    ) {

        cell.buffer =
            [];

    }


    if (
        !cell.buffer.length
    ) {

        cell.process =
            0;


        return;

    }


    if (
        countItemsAt(
            x,
            y
        ) >=
        1
    ) {

        return;

    }


    const speed =

        1 +

        state.upgrades
            .production *
        0.20;


    cell.process +=
        dt *
        speed;


    if (
        cell.process <
        getMachineProcessTime(
            cell.type
        )
    ) {

        return;

    }


    cell.process =
        0;


    const input =
        cell.buffer.shift();


    const output =

        transformResource(
            cell.type,
            input
        ) ||
        input;


    spawnItem(

        output,

        x,

        y,

        cell.dir

    );


    if (
        output !==
        input
    ) {

        state.statistics
            .itemsProduced++;


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

}


function getMachineProcessTime(
    type
) {

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
    resource
) {

    if (
        machine ===
        "crusher"
    ) {

        return (
            CRUSHER_RECIPES[
                resource
            ] ||
            null
        );

    }


    if (
        machine ===
        "smelter"
    ) {

        return (
            SMELTER_RECIPES[
                resource
            ] ||
            null
        );

    }


    if (
        machine ===
        "crafter"
    ) {

        return (
            CRAFTER_RECIPES[
                resource
            ] ||
            null
        );

    }


    return null;

}


// =====================================================
// RANDOM MINING
// =====================================================

function getRandomMinedResource() {

    const roll =
        Math.random();


    if (
        roll <
        0.20
    ) {

        return "coal";

    }


    if (
        roll <
        0.44
    ) {

        return "iron_ore";

    }


    if (
        roll <
        0.60
    ) {

        return "copper_ore";

    }


    if (
        roll <
        0.71
    ) {

        return "redstone";

    }


    if (
        roll <
        0.81
    ) {

        return "gold_ore";

    }


    if (
        roll <
        0.88
    ) {

        return "quartz";

    }


    if (
        roll <
        0.93
    ) {

        return "emerald";

    }


    if (
        roll <
        0.98
    ) {

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

    if (
        !RESOURCES[
            resource
        ]
    ) {

        return false;

    }


    if (
        state.items.length >=
        MAX_WORLD_ITEMS
    ) {

        return false;

    }


    state.items.push({

        resource,

        x,

        y,

        dir:
            itemDirection,

        progress:
            0,

        remove:
            false

    });


    return true;

}


function countItemsAt(
    x,
    y
) {

    return state.items.filter(

        item =>

            !item.remove &&

            item.x ===
            x &&

            item.y ===
            y

    ).length;

}


// =====================================================
// ITEM MOVEMENT
// =====================================================

function updateItems(
    dt
) {

    const beltSpeed =

        1.2 +

        state.upgrades
            .beltSpeed *
        0.32;


    let movingItems =
        0;


    for (
        const item of
        state.items
    ) {

        if (
            item.remove
        ) {

            continue;

        }


        item.progress +=
            dt *
            beltSpeed;


        movingItems++;


        if (
            item.progress >=
            1
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
        movingItems >
        0 &&
        conveyorSoundTimer <=
        0
    ) {

        playSound(
            "conveyor"
        );


        conveyorSoundTimer =
            2.2;

    }

}


// =====================================================
// ITEM RECEIVERS
// =====================================================

function canReceiveItem(
    cell
) {

    if (
        !cell
    ) {

        return false;

    }


    return [

        "belt",
        "splitBelt",
        "sorter",
        "chest",
        "crusher",
        "smelter",
        "crafter"

    ].includes(
        cell.type
    );

}


// =====================================================
// SPLITTER
// =====================================================

function chooseSplitterDirection(
    x,
    y,
    cell
) {

    const firstDirection =

        cell.splitToggle

            ? cell.dir

            : (
                cell.dir +
                1
            ) %
            4;


    const secondDirection =

        cell.splitToggle

            ? (
                cell.dir +
                1
            ) %
            4

            : cell.dir;


    const candidates = [

        firstDirection,

        secondDirection

    ];


    for (
        const candidate of
        candidates
    ) {

        const vector =
            DIRECTIONS[
                candidate
            ];


        const nextCell =
            getCell(

                x +
                vector.x,

                y +
                vector.y

            );


        if (
            canReceiveItem(
                nextCell
            )
        ) {

            cell.splitToggle =
                !cell.splitToggle;


            return candidate;

        }

    }


    cell.splitToggle =
        !cell.splitToggle;


    return firstDirection;

}


// =====================================================
// ITEM TRANSFER
// =====================================================

function attemptItemTransfer(
    item
) {

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
        !inBounds(
            nx,
            ny
        )
    ) {

        item.progress =
            0.98;


        return;

    }


    const target =
        getCell(
            nx,
            ny
        );


    if (
        !target
    ) {

        item.progress =
            0.98;


        return;

    }


    // Conveyor

    if (
        target.type ===
        "belt"
    ) {

        item.x =
            nx;


        item.y =
            ny;


        item.dir =
            target.dir;


        item.progress =
            0;


        return;

    }


    // Splitter

    if (
        target.type ===
        "splitBelt"
    ) {

        item.x =
            nx;


        item.y =
            ny;


        item.dir =
            chooseSplitterDirection(

                nx,

                ny,

                target

            );


        item.progress =
            0;


        return;

    }


    // Sorter

    if (
        target.type ===
        "sorter"
    ) {

        if (
            !poweredMachines.has(
                getIndex(
                    nx,
                    ny
                )
            )
        ) {

            item.progress =
                0.98;


            return;

        }


        item.x =
            nx;


        item.y =
            ny;


        // Matching item turns right.

        item.dir =
            item.resource ===
            target.filter

                ? (
                    target.dir +
                    1
                ) %
                4

                : target.dir;


        item.progress =
            0;


        return;

    }


    // Chest

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


            playSound(
                "storage"
            );

        } else {

            item.progress =
                0.98;

        }


        return;

    }


    // Processor

    if (
        [
            "crusher",
            "smelter",
            "crafter"
        ].includes(
            target.type
        )
    ) {

        if (
            !Array.isArray(
                target.buffer
            )
        ) {

            target.buffer =
                [];

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

function getChestCount() {

    return state.cells.filter(
        cell =>
            cell?.type ===
            "chest"
    ).length;

}


function getStorageCapacity() {

    const chests =
        getChestCount();


    return (

        chests *

        (
            100 +

            state.upgrades.storage *
            100
        )

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

            Math.max(
                0,
                Number(
                    count
                ) ||
                0
            ),

        0

    );

}


function addToStorage(
    resource
) {

    if (
        !RESOURCES[
            resource
        ]
    ) {

        return false;

    }


    const capacity =
        getStorageCapacity();


    if (
        capacity <=
        0
    ) {

        return false;

    }


    if (
        getStorageUsed() >=
        capacity
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
            ] ||
            0
        ) +
        1;


    productionTimes.push(
        performance.now()
    );


    return true;

}


// =====================================================
// INVENTORY
// =====================================================

function openInventory() {

    renderInventory();


    openPanel(
        inventoryPanel
    );

}


function renderInventory() {

    if (
        !state ||
        !inventoryList
    ) {

        return;

    }


    inventoryList.innerHTML =
        "";


    const used =
        getStorageUsed();


    const capacity =
        getStorageCapacity();


    const chestCount =
        getChestCount();


    inventoryCapacityText.textContent =

        `${used} / ${capacity} USED • ${chestCount} CHEST${chestCount === 1 ? "" : "S"}`;


    const entries =
        Object.entries(
            state.inventory
        )

            .filter(
                (
                    [
                        resource,
                        count
                    ]
                ) =>

                    RESOURCES[
                        resource
                    ] &&

                    Number(
                        count
                    ) >
                    0
            )

            .sort(
                (
                    a,
                    b
                ) =>

                    RESOURCES[
                        a[0]
                    ].name.localeCompare(

                        RESOURCES[
                            b[0]
                        ].name

                    )
            );


    inventorySellAllBtn.disabled =
        entries.length ===
        0;


    if (
        !entries.length
    ) {

        inventoryList.innerHTML = `

            <div class="inventory-empty">

                <h3>
                    Storage Empty
                </h3>

                <p>
                    Resources will appear here after
                    conveyor belts deliver them into
                    a Storage Chest.
                </p>

            </div>

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


        const card =
            document.createElement(
                "article"
            );


        card.className =
            "resource-inventory-card";


        card.innerHTML = `

            <div class="resource-card-top">


                <div
                    class="resource-cube"
                    style="
                        --resource-color:${info.color};
                        --resource-light:${info.light};
                    "
                >

                    <span></span>

                </div>


                <div class="resource-card-count">

                    <small>
                        STORED
                    </small>

                    <strong>
                        ${formatNumber(count)}
                    </strong>

                </div>


            </div>


            <div class="resource-card-info">

                <h3>
                    ${info.name}
                </h3>


                <span class="${
                    info.product
                        ? "inventory-product-badge"
                        : "inventory-resource-badge"
                }">

                    ${
                        info.product
                            ? "PRODUCT"
                            : "RESOURCE"
                    }

                </span>

            </div>


            <div class="resource-card-footer">

                <span>
                    Value Each
                </span>

                <strong>
                    ${formatNumber(info.value)} coins
                </strong>

            </div>


            <div class="inventory-card-actions">


                <button
                    class="inventory-sell-btn"
                    data-inventory-sell="${resource}"
                    type="button"
                >

                    Sell ${formatNumber(count)}

                </button>


                <button
                    class="inventory-trash-btn"
                    data-inventory-trash="${resource}"
                    type="button"
                >

                    Trash

                </button>


            </div>

        `;


        inventoryList.appendChild(
            card
        );

    }


    inventoryList
        .querySelectorAll(
            "[data-inventory-sell]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        sellInventoryResource(
                            button.dataset
                                .inventorySell
                        );

                    }
                );

            }
        );


    inventoryList
        .querySelectorAll(
            "[data-inventory-trash]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        trashInventoryResource(
                            button.dataset
                                .inventoryTrash
                        );

                    }
                );

            }
        );

}


// =====================================================
// SELL ONE RESOURCE
// =====================================================

function sellInventoryResource(
    resource
) {

    const info =
        RESOURCES[
            resource
        ];


    const count =
        Math.max(

            0,

            Math.floor(
                Number(
                    state.inventory[
                        resource
                    ]
                ) ||
                0
            )

        );


    if (
        !info ||
        count <=
        0
    ) {

        return;

    }


    const earned =
        count *
        info.value;


    state.inventory[
        resource
    ] =
        0;


    state.coins +=
        earned;


    state.statistics
        .coinsEarned +=
        earned;


    playSound(
        "sell"
    );


    showFactoryMessage(

        `Sold ${count} ${info.name} for ${formatNumber(earned)} coins.`

    );


    updateHUD();


    renderInventory();


    saveGame();

}


// =====================================================
// TRASH RESOURCE
// =====================================================

async function trashInventoryResource(
    resource
) {

    const info =
        RESOURCES[
            resource
        ];


    const count =
        Math.max(

            0,

            Math.floor(
                Number(
                    state.inventory[
                        resource
                    ]
                ) ||
                0
            )

        );


    if (
        !info ||
        count <=
        0
    ) {

        return;

    }


    const remove =
        await showConfirmation(

            `Trash ${info.name}?`,

            `This will permanently remove all ${count} stored ${info.name}. You will receive no coins.`,

            "Move To Trash"

        );


    if (
        !remove
    ) {

        return;

    }


    state.inventory[
        resource
    ] =
        0;


    playSound(
        "delete"
    );


    showFactoryMessage(

        `${count} ${info.name} moved to trash.`

    );


    updateHUD();


    renderInventory();


    saveGame();

}


// =====================================================
// SELL ALL INVENTORY
// =====================================================

function sellAllInventoryProducts() {

    let totalItems =
        0;


    let totalCoins =
        0;


    for (
        const [
            resource,
            countValue
        ] of Object.entries(
            state.inventory
        )
    ) {

        const info =
            RESOURCES[
                resource
            ];


        const count =
            Math.max(

                0,

                Math.floor(
                    Number(
                        countValue
                    ) ||
                    0
                )

            );


        if (
            !info ||
            count <=
            0
        ) {

            continue;

        }


        totalItems +=
            count;


        totalCoins +=
            count *
            info.value;


        state.inventory[
            resource
        ] =
            0;

    }


    if (
        totalItems <=
        0
    ) {

        showFactoryMessage(
            "Storage is empty."
        );


        return;

    }


    state.coins +=
        totalCoins;


    state.statistics
        .coinsEarned +=
        totalCoins;


    playSound(
        "sell"
    );


    showFactoryMessage(

        `Sold all ${totalItems} stored items for ${formatNumber(totalCoins)} coins.`

    );


    updateHUD();


    renderInventory();


    saveGame();

}


// =====================================================
// UPGRADES
// =====================================================

function getUpgradeCost(
    type
) {

    const level =
        state.upgrades[
            type
        ] ||
        0;


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


function buyUpgrade(
    type
) {

    if (
        !Object.prototype
            .hasOwnProperty
            .call(
                state.upgrades,
                type
            )
    ) {

        return;

    }


    if (
        state.upgrades[
            type
        ] >=
        5
    ) {

        showFactoryMessage(
            "That upgrade is already MAX."
        );


        return;

    }


    const cost =
        getUpgradeCost(
            type
        );


    if (
        state.coins <
        cost
    ) {

        showFactoryMessage(
            "Not enough coins for this upgrade."
        );


        playSound(
            "error"
        );


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


    playSound(
        "upgrade"
    );


    showFactoryMessage(
        "Factory upgraded."
    );


    saveGame();

}


function updateUpgradesUI() {

    if (
        !state
    ) {

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
                level >=
                5
            ) {

                button.disabled =
                    true;


                button.textContent =
                    "MAX LEVEL";


                return;

            }


            button.disabled =
                false;


            button.textContent =

                `Upgrade • ${formatNumber(
                    getUpgradeCost(
                        type
                    )
                )} coins`;

        }
    );

}


// =====================================================
// HUD
// =====================================================

function updateHUD() {

    if (
        !state
    ) {

        return;

    }


    coinsDisplay.textContent =
        formatNumber(
            state.coins
        );


    const availablePower =

        activePowerSources *

        (
            100 +

            state.upgrades.power *
            50
        );


    const usedPower =

        poweredMachines.size *
        10;


    powerDisplay.textContent =

        `${usedPower} / ${availablePower}`;


    const now =
        performance.now();


    productionTimes =
        productionTimes.filter(

            time =>

                now -
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


// =====================================================
// FACTORY EFFICIENCY
// =====================================================

function calculateEfficiency() {

    let totalMachines =
        0;


    let powered =
        0;


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
                getCell(
                    x,
                    y
                );


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
                    getIndex(
                        x,
                        y
                    )
                )
            ) {

                powered++;

            }

        }

    }


    if (
        totalMachines ===
        0
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

        Math.min(

            100,

            Math.round(

                (
                    powerScore -
                    jamPenalty
                ) *
                100

            )

        )

    );

}


// =====================================================
// DAY / NIGHT
// =====================================================

function updateDayNight(
    dt
) {

    state.timeOfDay +=
        dt /
        180;


    if (
        state.timeOfDay >=
        1
    ) {

        state.timeOfDay -=
            1;

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

    dayDisplay.textContent =
        isNight()
            ? "Night"
            : "Day";


    const weatherNames = {

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
        weatherNames[
            state.weather
        ] ||
        "Clear";

}


// =====================================================
// WEATHER
// =====================================================

function updateWeather(
    dt
) {

    weatherTimer +=
        dt;


    if (
        weatherTimer >=
        45
    ) {

        weatherTimer =
            0;


        const options = [

            "clear",
            "clear",
            "clear",
            "rain",
            "snow",
            "thunder"

        ];


        state.weather =
            options[
                Math.floor(
                    Math.random() *
                    options.length
                )
            ];


        showFactoryMessage(
            `Weather changed to ${state.weather}.`
        );

    }


    if (
        !settings.effects
    ) {

        weatherParticles =
            [];


        return;

    }


    if (
        state.weather !==
        "clear"
    ) {

        const amount =
            state.weather ===
            "snow"
                ? 1
                : 2;


        for (
            let i = 0;
            i < amount;
            i++
        ) {

            weatherParticles.push({

                x:
                    Math.random(),

                y:
                    -0.05,

                speed:
                    state.weather ===
                    "snow"

                        ? 0.10 +
                          Math.random() *
                          0.10

                        : 0.55 +
                          Math.random() *
                          0.35,

                drift:
                    (
                        Math.random() -
                        0.5
                    ) *
                    0.05,

                type:
                    state.weather

            });

        }

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
                1.1 &&

                particle.x >
                -0.2 &&

                particle.x <
                1.2

        );

}


// =====================================================
// MACHINE PARTICLES
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


    const amount =
        type ===
        "smelter"
            ? 7
            : 4;


    for (
        let i = 0;
        i < amount;
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
                0.45,

            vy:
                -0.25 -
                Math.random() *
                0.42,

            life:
                0.7 +
                Math.random() *
                0.5,

            maxLife:
                1.2,

            type:
                type ===
                "smelter"
                    ? "smoke"
                    : "spark"

        });

    }

}


function updateParticles(
    dt
) {

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

function updateChallenge(
    dt
) {

    if (
        !state.challenge.active ||
        state.challenge.finished
    ) {

        return;

    }


    state.challenge.timeLeft -=
        dt;


    if (
        state.statistics
            .coinsEarned >=
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

        state.challenge.timeLeft =
            0;


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


    paused =
        true;


    const efficiency =
        calculateEfficiency();


    const items =
        state.statistics
            .itemsProduced;


    const profit =
        state.statistics
            .coinsEarned;


    let score =

        efficiency *
        0.45 +

        Math.min(
            100,
            items /
            2
        ) *
        0.25 +

        Math.min(
            100,
            profit /
            100
        ) *
        0.30;


    if (
        success
    ) {

        score +=
            15;

    }


    let rating =
        "C";


    if (
        score >=
        110
    ) {

        rating =
            "S";

    } else if (
        score >=
        85
    ) {

        rating =
            "A";

    } else if (
        score >=
        65
    ) {

        rating =
            "B";

    }


    saveChallengeRecord(

        rating,

        profit,

        items

    );


    challengeResultTitle.textContent =
        success

            ? "Challenge Complete!"

            : "Time Up!";


    challengeResultBody.innerHTML = `

        <span class="result-rating">

            ${rating}

        </span>

        <p class="result-line">

            Factory Rating:
            ${rating}

        </p>

        <p class="result-line">

            Efficiency:
            ${efficiency}%

        </p>

        <p class="result-line">

            Coins Earned:
            ${formatNumber(profit)}

        </p>

        <p class="result-line">

            Items Produced:
            ${formatNumber(items)}

        </p>

    `;


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

    const factory =
        state ||
        loadGame();


    const record =
        loadChallengeRecord();


    const stats =
        factory?.statistics ||
        {

            itemsProduced:
                0,

            machinesBuilt:
                0,

            coinsEarned:
                0,

            playTime:
                0,

            efficiency:
                100

        };


    statItemsProduced.textContent =
        formatNumber(
            stats.itemsProduced
        );


    statMachinesBuilt.textContent =
        formatNumber(
            stats.machinesBuilt
        );


    statCoinsEarned.textContent =
        formatNumber(
            stats.coinsEarned
        );


    statPlayTime.textContent =
        formatPlayTime(
            stats.playTime
        );


    statEfficiency.textContent =
        `${Math.round(
            stats.efficiency ??
            100
        )}%`;


    statRating.textContent =
        record.bestRating;


    openPanel(
        statisticsPanel
    );

}


// =====================================================
// MODALS
// =====================================================

function openPanel(
    panel
) {

    if (
        !panel
    ) {

        return;

    }


    panel.classList.add(
        "open"
    );


    panel.setAttribute(
        "aria-hidden",
        "false"
    );

}


function closePanel(
    panel
) {

    if (
        !panel
    ) {

        return;

    }


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
        helpPanel,
        challengeResultPanel

    ].forEach(
        closePanel
    );

}


// =====================================================
// FACTORY MESSAGE
// =====================================================

function showFactoryMessage(
    message
) {

    if (
        !factoryMessage
    ) {

        return;

    }


    factoryMessage.textContent =
        message;


    clearTimeout(
        temporaryMessageTimer
    );


    temporaryMessageTimer =
        setTimeout(
            () => {

                if (
                    gameRunning &&
                    factoryMessage
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


    if (
        !rect.width ||
        !rect.height
    ) {

        return;

    }


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
// CANVAS HELPERS
// =====================================================

function fillRect(
    x,
    y,
    width,
    height,
    color
) {

    ctx.fillStyle =
        color;


    ctx.fillRect(
        x,
        y,
        width,
        height
    );

}


function strokeRect(
    x,
    y,
    width,
    height,
    color,
    lineWidth =
        1
) {

    ctx.strokeStyle =
        color;


    ctx.lineWidth =
        lineWidth;


    ctx.strokeRect(
        x,
        y,
        width,
        height
    );

}


function rotateCanvasAround(
    cx,
    cy,
    angle,
    drawFunction
) {

    ctx.save();


    ctx.translate(
        cx,
        cy
    );


    ctx.rotate(
        angle
    );


    ctx.translate(
        -cx,
        -cy
    );


    drawFunction();


    ctx.restore();

}


// =====================================================
// MACHINE FRAME
// =====================================================

function drawMachineFrame(
    px,
    py,
    cellWidth,
    cellHeight,
    powered,
    bodyColor =
        "#3e4942"
) {

    const size =
        Math.min(
            cellWidth,
            cellHeight
        );


    const pad =
        size *
        0.10;


    const x =
        px +
        pad;


    const y =
        py +
        pad;


    const width =
        cellWidth -
        pad *
        2;


    const height =
        cellHeight -
        pad *
        2;


    fillRect(

        x,
        y,
        width,
        height,

        powered
            ? bodyColor
            : "#343a36"

    );


    // Top metal highlight

    fillRect(

        x +
        3,

        y +
        3,

        Math.max(
            0,
            width -
            6
        ),

        Math.max(
            2,
            height *
            0.11
        ),

        powered
            ? "rgba(255,255,255,0.11)"
            : "rgba(255,255,255,0.04)"

    );


    // Bottom shadow

    fillRect(

        x +
        3,

        y +
        height -
        Math.max(
            4,
            height *
            0.15
        ),

        Math.max(
            0,
            width -
            6
        ),

        Math.max(
            2,
            height *
            0.10
        ),

        "rgba(0,0,0,0.28)"

    );


    strokeRect(

        x,
        y,
        width,
        height,

        powered
            ? "#7f9988"
            : "#59615c",

        2

    );


    // Corner bolts

    const bolt =
        Math.max(
            2,
            size *
            0.035
        );


    const boltColor =
        "#aab2ad";


    fillRect(
        x + 4,
        y + 4,
        bolt,
        bolt,
        boltColor
    );


    fillRect(
        x +
        width -
        bolt -
        4,
        y + 4,
        bolt,
        bolt,
        boltColor
    );


    fillRect(
        x + 4,
        y +
        height -
        bolt -
        4,
        bolt,
        bolt,
        boltColor
    );


    fillRect(
        x +
        width -
        bolt -
        4,
        y +
        height -
        bolt -
        4,
        bolt,
        bolt,
        boltColor
    );


    return {

        x,
        y,
        width,
        height,
        size

    };

}


// =====================================================
// MACHINE STATUS LIGHT
// =====================================================

function drawStatusLight(
    x,
    y,
    radius,
    powered
) {

    ctx.save();


    ctx.fillStyle =
        powered
            ? "#5eea6d"
            : "#c84040";


    ctx.shadowColor =
        powered
            ? "#60ef70"
            : "#e44747";


    ctx.shadowBlur =
        powered
            ? radius *
              1.8
            : radius *
              0.6;


    ctx.beginPath();


    ctx.arc(
        x,
        y,
        radius,
        0,
        Math.PI *
        2
    );


    ctx.fill();


    ctx.restore();

}


// =====================================================
// DIRECTION ARROW
// =====================================================

function drawDirectionArrow(
    cx,
    cy,
    dir,
    size,
    color =
        "#e3e9e5"
) {

    const vector =
        DIRECTIONS[
            dir
        ];


    const side =
        DIRECTIONS[
            (
                dir +
                1
            ) %
            4
        ];


    ctx.fillStyle =
        color;


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
// MAIN FACTORY RENDER
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


    if (
        !width ||
        !height
    ) {

        return;

    }


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


    drawPlacementPreview(

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


// =====================================================
// FACTORY FLOOR
// =====================================================

function drawFactoryFloor(
    width,
    height,
    cellWidth,
    cellHeight
) {

    fillRect(

        0,
        0,
        width,
        height,
        "#14291b"

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

            const px =
                x *
                cellWidth;


            const py =
                y *
                cellHeight;


            const floorColor =
                (
                    x +
                    y
                ) %
                2 ===
                0

                    ? "#193120"

                    : "#162d1d";


            fillRect(

                px,
                py,
                cellWidth,
                cellHeight,
                floorColor

            );


            strokeRect(

                px +
                2,

                py +
                2,

                Math.max(
                    0,
                    cellWidth -
                    4
                ),

                Math.max(
                    0,
                    cellHeight -
                    4
                ),

                "rgba(94,137,104,0.10)",

                1

            );


            // Floor rivet

            const rivet =
                Math.max(
                    1,
                    Math.min(
                        cellWidth,
                        cellHeight
                    ) *
                    0.024
                );


            ctx.fillStyle =
                "rgba(146,165,151,0.17)";


            ctx.beginPath();


            ctx.arc(

                px +
                cellWidth *
                0.14,

                py +
                cellHeight *
                0.14,

                rivet,

                0,

                Math.PI *
                2

            );


            ctx.fill();

        }

    }


    // Grid lines

    ctx.strokeStyle =
        "rgba(91,139,103,0.26)";


    ctx.lineWidth =
        1;


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

}


// =====================================================
// DRAW ALL FACTORY CELLS
// =====================================================

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
                getCell(
                    x,
                    y
                );


            if (
                !cell
            ) {

                continue;

            }


            const px =
                x *
                cellWidth;


            const py =
                y *
                cellHeight;


            // Conveyor

            if (
                cell.type ===
                "belt" ||
                cell.type ===
                "splitBelt"
            ) {

                drawConveyor(

                    px,
                    py,
                    cellWidth,
                    cellHeight,
                    cell,
                    time

                );


                continue;

            }


            // Redstone Wire

            if (
                cell.type ===
                "wire"
            ) {

                drawRedstoneWire(

                    x,
                    y,
                    px,
                    py,
                    cellWidth,
                    cellHeight,
                    time

                );


                continue;

            }


            // Power components

            if (
                [
                    "lever",
                    "button",
                    "torch",
                    "repeater"
                ].includes(
                    cell.type
                )
            ) {

                drawPowerComponent(

                    x,
                    y,
                    px,
                    py,
                    cellWidth,
                    cellHeight,
                    cell,
                    time

                );


                continue;

            }


            // Machines

            drawMachine(

                x,
                y,
                px,
                py,
                cellWidth,
                cellHeight,
                cell,
                time

            );

        }

    }

}


// =====================================================
// CONVEYOR GRAPHICS
// =====================================================

function drawConveyor(
    px,
    py,
    cellWidth,
    cellHeight,
    cell,
    time
) {

    const size =
        Math.min(
            cellWidth,
            cellHeight
        );


    const pad =
        size *
        0.09;


    const x =
        px +
        pad;


    const y =
        py +
        pad;


    const width =
        cellWidth -
        pad *
        2;


    const height =
        cellHeight -
        pad *
        2;


    // Metal outside

    fillRect(

        x,
        y,
        width,
        height,
        "#252e29"

    );


    strokeRect(

        x,
        y,
        width,
        height,
        "#69746e",
        2

    );


    // Conveyor surface

    fillRect(

        x +
        width *
        0.10,

        y +
        height *
        0.16,

        width *
        0.80,

        height *
        0.68,

        "#353e39"

    );


    // Side rails

    fillRect(

        x +
        width *
        0.04,

        y +
        height *
        0.10,

        width *
        0.07,

        height *
        0.80,

        "#78817c"

    );


    fillRect(

        x +
        width *
        0.89,

        y +
        height *
        0.10,

        width *
        0.07,

        height *
        0.80,

        "#78817c"

    );


    const animationSpeed =

        1.5 +

        state.upgrades
            .beltSpeed *
        0.35;


    const phase =
        (
            time *
            animationSpeed
        ) %
        1;


    const vector =
        DIRECTIONS[
            cell.dir
        ];


    const side =
        DIRECTIONS[
            (
                cell.dir +
                1
            ) %
            4
        ];


    const centerX =
        x +
        width /
        2;


    const centerY =
        y +
        height /
        2;


    ctx.save();


    ctx.beginPath();


    ctx.rect(
        x + 2,
        y + 2,
        width - 4,
        height - 4
    );


    ctx.clip();


    ctx.strokeStyle =
        "rgba(195,205,199,0.45)";


    ctx.lineWidth =
        Math.max(
            1,
            size *
            0.025
        );


    for (
        let i = -3;
        i <= 3;
        i++
    ) {

        const along =
            (
                i +
                phase
            ) *
            size *
            0.22;


        const startX =

            centerX +

            vector.x *
            along -

            side.x *
            size *
            0.18;


        const startY =

            centerY +

            vector.y *
            along -

            side.y *
            size *
            0.18;


        const endX =

            centerX +

            vector.x *
            along +

            side.x *
            size *
            0.18;


        const endY =

            centerY +

            vector.y *
            along +

            side.y *
            size *
            0.18;


        ctx.beginPath();


        ctx.moveTo(
            startX,
            startY
        );


        ctx.lineTo(
            endX,
            endY
        );


        ctx.stroke();

    }


    ctx.restore();


    drawDirectionArrow(

        centerX,
        centerY,
        cell.dir,
        size *
        0.12,
        "#e4e9e6"

    );


    if (
        cell.type ===
        "splitBelt"
    ) {

        drawDirectionArrow(

            centerX,
            centerY,

            (
                cell.dir +
                1
            ) %
            4,

            size *
            0.075,

            "#65dd72"

        );

    }

}


// =====================================================
// REDSTONE WIRE GRAPHICS
// =====================================================

function drawRedstoneWire(
    x,
    y,
    px,
    py,
    cellWidth,
    cellHeight,
    time
) {

    const powered =
        poweredNetwork.has(
            getIndex(
                x,
                y
            )
        );


    const cx =
        px +
        cellWidth /
        2;


    const cy =
        py +
        cellHeight /
        2;


    const size =
        Math.min(
            cellWidth,
            cellHeight
        );


    ctx.save();


    if (
        powered
    ) {

        ctx.shadowColor =
            "#ff4141";


        ctx.shadowBlur =
            8 +
            Math.sin(
                time *
                6
            ) *
            2;

    }


    ctx.strokeStyle =
        powered
            ? "#ff4242"
            : "#7b2020";


    ctx.lineWidth =
        Math.max(
            3,
            size *
            0.055
        );


    ctx.lineCap =
        "square";


    ctx.beginPath();


    ctx.moveTo(
        px +
        size *
        0.10,
        cy
    );


    ctx.lineTo(
        px +
        cellWidth -
        size *
        0.10,
        cy
    );


    ctx.moveTo(
        cx,
        py +
        size *
        0.10
    );


    ctx.lineTo(
        cx,
        py +
        cellHeight -
        size *
        0.10
    );


    ctx.stroke();


    ctx.fillStyle =
        powered
            ? "#ff6c6c"
            : "#922929";


    ctx.fillRect(

        cx -
        size *
        0.055,

        cy -
        size *
        0.055,

        size *
        0.11,

        size *
        0.11

    );


    ctx.restore();

}


// =====================================================
// POWER COMPONENT GRAPHICS
// =====================================================

function drawPowerComponent(
    x,
    y,
    px,
    py,
    cellWidth,
    cellHeight,
    cell,
    time
) {

    const active =

        isSourceActive(
            cell
        ) ||

        poweredNetwork.has(
            getIndex(
                x,
                y
            )
        );


    const frame =
        drawMachineFrame(

            px,
            py,
            cellWidth,
            cellHeight,
            active,

            active
                ? "#592b2b"
                : "#363c38"

        );


    const cx =
        frame.x +
        frame.width /
        2;


    const cy =
        frame.y +
        frame.height /
        2;


    const size =
        frame.size;


    // Lever

    if (
        cell.type ===
        "lever"
    ) {

        fillRect(

            cx -
            size *
            0.20,

            cy +
            size *
            0.08,

            size *
            0.40,

            size *
            0.15,

            "#7c776a"

        );


        strokeRect(

            cx -
            size *
            0.20,

            cy +
            size *
            0.08,

            size *
            0.40,

            size *
            0.15,

            "#34332e",

            1

        );


        const leverAngle =
            cell.enabled
                ? -0.55
                : 0.55;


        rotateCanvasAround(

            cx,

            cy +
            size *
            0.10,

            leverAngle,

            () => {

                fillRect(

                    cx -
                    size *
                    0.035,

                    cy -
                    size *
                    0.20,

                    size *
                    0.07,

                    size *
                    0.32,

                    "#c8bea3"

                );

            }

        );

    }


    // Button

    if (
        cell.type ===
        "button"
    ) {

        ctx.fillStyle =
            active
                ? "#e1e4df"
                : "#959d97";


        ctx.beginPath();


        ctx.arc(

            cx,
            cy,

            size *
            0.17,

            0,

            Math.PI *
            2

        );


        ctx.fill();


        ctx.strokeStyle =
            "#414741";


        ctx.lineWidth =
            2;


        ctx.stroke();

    }


    // Torch

    if (
        cell.type ===
        "torch"
    ) {

        fillRect(

            cx -
            size *
            0.035,

            cy -
            size *
            0.02,

            size *
            0.07,

            size *
            0.26,

            "#76512d"

        );


        ctx.save();


        ctx.shadowColor =
            "#ff4141";


        ctx.shadowBlur =
            10 +
            Math.sin(
                time *
                7
            ) *
            2;


        ctx.fillStyle =
            "#ff4848";


        ctx.beginPath();


        ctx.arc(

            cx,

            cy -
            size *
            0.13,

            size *
            0.11,

            0,

            Math.PI *
            2

        );


        ctx.fill();


        ctx.restore();

    }


    // Repeater

    if (
        cell.type ===
        "repeater"
    ) {

        fillRect(

            cx -
            size *
            0.24,

            cy -
            size *
            0.17,

            size *
            0.48,

            size *
            0.34,

            "#bbb9ae"

        );


        strokeRect(

            cx -
            size *
            0.24,

            cy -
            size *
            0.17,

            size *
            0.48,

            size *
            0.34,

            "#626560",

            1

        );


        const side =
            DIRECTIONS[
                (
                    cell.dir +
                    1
                ) %
                4
            ];


        for (
            const offset of
            [
                -0.10,
                0.10
            ]
        ) {

            const dotX =
                cx +
                side.x *
                size *
                offset;


            const dotY =
                cy +
                side.y *
                size *
                offset;


            ctx.save();


            ctx.shadowColor =
                active
                    ? "#ff4343"
                    : "transparent";


            ctx.shadowBlur =
                active
                    ? 6
                    : 0;


            ctx.fillStyle =
                active
                    ? "#e83a3a"
                    : "#773131";


            ctx.beginPath();


            ctx.arc(

                dotX,
                dotY,

                size *
                0.045,

                0,

                Math.PI *
                2

            );


            ctx.fill();


            ctx.restore();

        }


        drawDirectionArrow(

            cx,
            cy,
            cell.dir,
            size *
            0.08,
            "#555b57"

        );

    }

}


// =====================================================
// MACHINE GRAPHICS
// =====================================================

function drawMachine(
    x,
    y,
    px,
    py,
    cellWidth,
    cellHeight,
    cell,
    time
) {

    const powered =

        !POWERED_MACHINE_TYPES.has(
            cell.type
        ) ||

        poweredMachines.has(
            getIndex(
                x,
                y
            )
        );


    let bodyColor =
        "#445149";


    if (
        cell.type ===
        "crusher"
    ) {

        bodyColor =
            "#48504c";

    }


    if (
        cell.type ===
        "smelter"
    ) {

        bodyColor =
            "#62452f";

    }


    if (
        cell.type ===
        "sorter"
    ) {

        bodyColor =
            "#34596b";

    }


    if (
        cell.type ===
        "crafter"
    ) {

        bodyColor =
            "#5f4931";

    }


    if (
        cell.type ===
        "chest"
    ) {

        bodyColor =
            "#8e6029";

    }


    const frame =
        drawMachineFrame(

            px,
            py,
            cellWidth,
            cellHeight,
            powered,
            bodyColor

        );


    const cx =
        frame.x +
        frame.width /
        2;


    const cy =
        frame.y +
        frame.height /
        2;


    const size =
        frame.size;


    if (
        cell.type ===
        "miner"
    ) {

        drawMinerGraphic(

            cx,
            cy,
            size,
            powered,
            time

        );

    }


    if (
        cell.type ===
        "crusher"
    ) {

        drawCrusherGraphic(

            cx,
            cy,
            size,
            powered,
            time

        );

    }


    if (
        cell.type ===
        "smelter"
    ) {

        drawSmelterGraphic(

            cx,
            cy,
            size,
            powered,
            time

        );

    }


    if (
        cell.type ===
        "sorter"
    ) {

        drawSorterGraphic(

            cx,
            cy,
            size,
            cell,
            powered

        );

    }


    if (
        cell.type ===
        "crafter"
    ) {

        drawCrafterGraphic(

            cx,
            cy,
            size,
            powered,
            time

        );

    }


    if (
        cell.type ===
        "chest"
    ) {

        drawChestGraphic(

            cx,
            cy,
            size

        );

    }


    if (
        POWERED_MACHINE_TYPES.has(
            cell.type
        )
    ) {

        drawStatusLight(

            frame.x +
            frame.width -
            size *
            0.12,

            frame.y +
            size *
            0.12,

            Math.max(
                2,
                size *
                0.045
            ),

            powered

        );

    }


    if (
        cell.type !==
        "chest"
    ) {

        drawDirectionArrow(

            frame.x +
            frame.width *
            0.78,

            frame.y +
            frame.height *
            0.78,

            cell.dir,

            size *
            0.065,

            "#e1e6e2"

        );

    }

}


// =====================================================
// MINER GRAPHIC
// =====================================================

function drawMinerGraphic(
    cx,
    cy,
    size,
    powered,
    time
) {

    fillRect(

        cx -
        size *
        0.17,

        cy -
        size *
        0.17,

        size *
        0.34,

        size *
        0.34,

        powered
            ? "#27362d"
            : "#282c29"

    );


    strokeRect(

        cx -
        size *
        0.17,

        cy -
        size *
        0.17,

        size *
        0.34,

        size *
        0.34,

        "#78837c",

        1

    );


    const angle =
        powered
            ? time *
              2.8
            : 0;


    rotateCanvasAround(

        cx,
        cy,
        angle,

        () => {

            ctx.strokeStyle =
                powered
                    ? "#d2d9d5"
                    : "#777f79";


            ctx.lineWidth =
                Math.max(
                    2,
                    size *
                    0.06
                );


            ctx.beginPath();


            ctx.moveTo(

                cx -
                size *
                0.20,

                cy

            );


            ctx.lineTo(

                cx +
                size *
                0.20,

                cy

            );


            ctx.moveTo(

                cx,

                cy -
                size *
                0.20

            );


            ctx.lineTo(

                cx,

                cy +
                size *
                0.20

            );


            ctx.stroke();

        }

    );


    // Drill tip

    ctx.fillStyle =
        powered
            ? "#c1cbc5"
            : "#747b76";


    ctx.beginPath();


    ctx.moveTo(

        cx +
        size *
        0.27,

        cy

    );


    ctx.lineTo(

        cx +
        size *
        0.12,

        cy -
        size *
        0.10

    );


    ctx.lineTo(

        cx +
        size *
        0.12,

        cy +
        size *
        0.10

    );


    ctx.closePath();


    ctx.fill();

}


// =====================================================
// CRUSHER GRAPHIC
// =====================================================

function drawCrusherGraphic(
    cx,
    cy,
    size,
    powered,
    time
) {

    const rollerRadius =
        size *
        0.105;


    const offset =
        size *
        0.12;


    const rotation =
        powered
            ? time *
              3.5
            : 0;


    for (
        const side of
        [
            -1,
            1
        ]
    ) {

        const rollerX =
            cx +
            side *
            offset;


        ctx.fillStyle =
            "#1c211e";


        ctx.beginPath();


        ctx.arc(

            rollerX,
            cy,

            rollerRadius *
            1.2,

            0,

            Math.PI *
            2

        );


        ctx.fill();


        rotateCanvasAround(

            rollerX,
            cy,

            rotation *
            side,

            () => {

                ctx.strokeStyle =
                    powered
                        ? "#a7b0aa"
                        : "#656b67";


                ctx.lineWidth =
                    Math.max(
                        2,
                        size *
                        0.035
                    );


                ctx.beginPath();


                ctx.moveTo(

                    rollerX -
                    rollerRadius,

                    cy

                );


                ctx.lineTo(

                    rollerX +
                    rollerRadius,

                    cy

                );


                ctx.moveTo(

                    rollerX,

                    cy -
                    rollerRadius

                );


                ctx.lineTo(

                    rollerX,

                    cy +
                    rollerRadius

                );


                ctx.stroke();

            }

        );

    }

}


// =====================================================
// SMELTER GRAPHIC
// =====================================================

function drawSmelterGraphic(
    cx,
    cy,
    size,
    powered,
    time
) {

    const windowSize =
        size *
        0.30;


    fillRect(

        cx -
        windowSize /
        2,

        cy -
        windowSize /
        2,

        windowSize,

        windowSize,

        "#281611"

    );


    strokeRect(

        cx -
        windowSize /
        2,

        cy -
        windowSize /
        2,

        windowSize,

        windowSize,

        "#7c5b45",

        2

    );


    if (
        !powered
    ) {

        return;

    }


    const pulse =
        0.70 +
        Math.sin(
            time *
            7
        ) *
        0.15;


    ctx.save();


    ctx.globalAlpha =
        pulse;


    ctx.shadowColor =
        "#ff6d1e";


    ctx.shadowBlur =
        size *
        0.18;


    ctx.fillStyle =
        "#ff7b23";


    ctx.beginPath();


    ctx.moveTo(

        cx,

        cy -
        size *
        0.12

    );


    ctx.lineTo(

        cx -
        size *
        0.11,

        cy +
        size *
        0.10

    );


    ctx.lineTo(

        cx,

        cy +
        size *
        0.05

    );


    ctx.lineTo(

        cx +
        size *
        0.10,

        cy +
        size *
        0.11

    );


    ctx.closePath();


    ctx.fill();


    ctx.restore();

}


// =====================================================
// SORTER GRAPHIC
// =====================================================

function drawSorterGraphic(
    cx,
    cy,
    size,
    cell,
    powered
) {

    fillRect(

        cx -
        size *
        0.18,

        cy -
        size *
        0.06,

        size *
        0.36,

        size *
        0.12,

        powered
            ? "#6ca2b6"
            : "#566269"

    );


    fillRect(

        cx -
        size *
        0.05,

        cy -
        size *
        0.18,

        size *
        0.10,

        size *
        0.36,

        powered
            ? "#5f8795"
            : "#4f595e"

    );


    const filterInfo =
        RESOURCES[
            cell.filter
        ] ||
        RESOURCES.coal;


    fillRect(

        cx -
        size *
        0.075,

        cy -
        size *
        0.075,

        size *
        0.15,

        size *
        0.15,

        filterInfo.color

    );


    strokeRect(

        cx -
        size *
        0.075,

        cy -
        size *
        0.075,

        size *
        0.15,

        size *
        0.15,

        filterInfo.light,

        1

    );

}


// =====================================================
// CRAFTER GRAPHIC
// =====================================================

function drawCrafterGraphic(
    cx,
    cy,
    size,
    powered,
    time
) {

    const radius =
        size *
        0.17;


    const angle =
        powered
            ? time *
              2.2
            : 0;


    rotateCanvasAround(

        cx,
        cy,
        angle,

        () => {

            ctx.strokeStyle =
                powered
                    ? "#bcc6c0"
                    : "#6d756f";


            ctx.lineWidth =
                Math.max(
                    3,
                    size *
                    0.055
                );


            ctx.setLineDash([

                size *
                0.07,

                size *
                0.05

            ]);


            ctx.beginPath();


            ctx.arc(

                cx,
                cy,
                radius,

                0,

                Math.PI *
                2

            );


            ctx.stroke();


            ctx.setLineDash(
                []
            );

        }

    );


    ctx.fillStyle =
        "#202722";


    ctx.beginPath();


    ctx.arc(

        cx,
        cy,

        size *
        0.06,

        0,

        Math.PI *
        2

    );


    ctx.fill();

}


// =====================================================
// CHEST GRAPHIC
// =====================================================

function drawChestGraphic(
    cx,
    cy,
    size
) {

    const width =
        size *
        0.42;


    const height =
        size *
        0.30;


    fillRect(

        cx -
        width /
        2,

        cy -
        height /
        2,

        width,

        height,

        "#9b6528"

    );


    fillRect(

        cx -
        width /
        2,

        cy -
        height *
        0.08,

        width,

        height *
        0.12,

        "#5a3513"

    );


    strokeRect(

        cx -
        width /
        2,

        cy -
        height /
        2,

        width,

        height,

        "#c68a3d",

        2

    );


    fillRect(

        cx -
        size *
        0.035,

        cy -
        size *
        0.025,

        size *
        0.07,

        size *
        0.09,

        "#cfba77"

    );

}


// =====================================================
// ITEM GRAPHICS
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


        if (
            !info
        ) {

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

                4,

                Math.min(
                    cellWidth,
                    cellHeight
                ) *
                0.12

            );


        // Shadow

        fillRect(

            cx -
            size +
            2,

            cy -
            size +
            3,

            size *
            2,

            size *
            2,

            "rgba(0,0,0,0.28)"

        );


        // Main resource cube

        fillRect(

            cx -
            size,

            cy -
            size,

            size *
            2,

            size *
            2,

            info.color

        );


        // Highlight

        fillRect(

            cx -
            size +
            2,

            cy -
            size +
            2,

            size *
            0.75,

            size *
            0.35,

            info.light

        );


        strokeRect(

            cx -
            size,

            cy -
            size,

            size *
            2,

            size *
            2,

            "rgba(255,255,255,0.50)",

            1

        );

    }

}


// =====================================================
// PARTICLE GRAPHICS
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
                `rgba(130,138,133,${alpha * 0.45})`;

        } else {

            ctx.fillStyle =
                `rgba(255,205,76,${alpha})`;

        }


        ctx.beginPath();


        ctx.arc(

            particle.x *
            cellWidth,

            particle.y *
            cellHeight,

            particle.type ===
            "smoke"
                ? 4.5
                : 2,

            0,

            Math.PI *
            2

        );


        ctx.fill();

    }

}


// =====================================================
// PLACEMENT PREVIEW
// =====================================================

function drawPlacementPreview(
    cellWidth,
    cellHeight
) {

    if (
        !hoveredCell
    ) {

        return;

    }


    const {
        x,
        y
    } =
        hoveredCell;


    const px =
        x *
        cellWidth;


    const py =
        y *
        cellHeight;


    const occupied =
        !!getCell(
            x,
            y
        );


    let fill =
        "rgba(106,220,117,0.18)";


    let border =
        "rgba(106,220,117,0.78)";


    if (
        selectedTool ===
        "delete"
    ) {

        fill =
            occupied
                ? "rgba(235,74,74,0.18)"
                : "rgba(150,70,70,0.10)";


        border =
            occupied
                ? "rgba(255,91,91,0.85)"
                : "rgba(180,100,100,0.45)";

    } else if (
        selectedTool !==
        "interact" &&
        occupied
    ) {

        fill =
            "rgba(235,74,74,0.15)";


        border =
            "rgba(255,91,91,0.75)";

    }


    fillRect(

        px + 2,
        py + 2,
        cellWidth - 4,
        cellHeight - 4,
        fill

    );


    strokeRect(

        px + 2,
        py + 2,
        cellWidth - 4,
        cellHeight - 4,
        border,
        2

    );

}


// =====================================================
// NIGHT OVERLAY
// =====================================================

function drawDayNightOverlay(
    width,
    height
) {

    const time =
        state.timeOfDay;


    let darkness =
        0;


    if (
        time >
        0.68
    ) {

        darkness =
            Math.min(

                0.42,

                (
                    time -
                    0.68
                ) *
                1.45

            );

    } else if (
        time <
        0.18
    ) {

        darkness =
            Math.min(

                0.42,

                (
                    0.18 -
                    time
                ) *
                2.25

            );

    }


    if (
        darkness <=
        0
    ) {

        return;

    }


    fillRect(

        0,
        0,
        width,
        height,

        `rgba(3,8,24,${darkness})`

    );

}


// =====================================================
// NIGHT MACHINE LIGHTS
// =====================================================

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
                getCell(
                    x,
                    y
                );


            if (
                !cell ||
                !poweredMachines.has(
                    getIndex(
                        x,
                        y
                    )
                )
            ) {

                continue;

            }


            const cx =
                (
                    x +
                    0.5
                ) *
                cellWidth;


            const cy =
                (
                    y +
                    0.5
                ) *
                cellHeight;


            const radius =
                Math.min(
                    cellWidth,
                    cellHeight
                ) *
                1.45;


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

                "rgba(255,226,151,0.12)"

            );


            gradient.addColorStop(

                1,

                "rgba(255,226,151,0)"

            );


            ctx.fillStyle =
                gradient;


            ctx.beginPath();


            ctx.arc(

                cx,
                cy,
                radius,

                0,

                Math.PI *
                2

            );


            ctx.fill();

        }

    }

}


// =====================================================
// WEATHER GRAPHICS
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
                "rgba(240,248,243,0.72)";


            ctx.beginPath();


            ctx.arc(
                x,
                y,
                2,
                0,
                Math.PI *
                2
            );


            ctx.fill();


            continue;

        }


        ctx.strokeStyle =
            particle.type ===
            "thunder"

                ? "rgba(185,214,234,0.60)"

                : "rgba(132,177,202,0.48)";


        ctx.lineWidth =
            1;


        ctx.beginPath();


        ctx.moveTo(
            x,
            y
        );


        ctx.lineTo(
            x - 3,
            y + 10
        );


        ctx.stroke();

    }


    if (
        state.weather ===
        "thunder" &&
        Math.random() <
        0.0025
    ) {

        fillRect(

            0,
            0,
            width,
            height,

            "rgba(230,240,255,0.23)"

        );


        playSound(
            "thunder"
        );

    }

}


// =====================================================
// POINTER HOVER
// =====================================================

function handlePointerMove(
    event
) {

    hoveredCell =
        getCellFromPointer(
            event
        );

}


// =====================================================
// AUDIO
// =====================================================

function ensureAudio() {

    if (
        !audioContext
    ) {

        const AudioClass =

            window.AudioContext ||

            window.webkitAudioContext;


        if (
            AudioClass
        ) {

            audioContext =
                new AudioClass();

        }

    }


    if (
        audioContext?.state ===
        "suspended"
    ) {

        audioContext
            .resume()
            .catch(
                () => {}
            );

    }

}


function playTone(
    frequency,
    duration,
    volume =
        0.04,
    type =
        "square"
) {

    if (
        !audioContext
    ) {

        return;

    }


    const oscillator =
        audioContext
            .createOscillator();


    const gain =
        audioContext
            .createGain();


    oscillator.type =
        type;


    oscillator.frequency.value =
        frequency;


    gain.gain.setValueAtTime(

        volume,

        audioContext.currentTime

    );


    gain.gain
        .exponentialRampToValueAtTime(

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


function playSound(
    type
) {

    if (
        settings.muted ||
        !settings.sound
    ) {

        return;

    }


    ensureAudio();


    const sounds = {

        place:
            [
                130,
                0.07,
                0.025,
                "square"
            ],

        delete:
            [
                90,
                0.09,
                0.035,
                "square"
            ],

        machine:
            [
                100,
                0.08,
                0.018,
                "sawtooth"
            ],

        conveyor:
            [
                70,
                0.05,
                0.007,
                "square"
            ],

        switch:
            [
                180,
                0.06,
                0.03,
                "square"
            ],

        storage:
            [
                250,
                0.04,
                0.014,
                "square"
            ],

        save:
            [
                500,
                0.08,
                0.025,
                "square"
            ],

        click:
            [
                200,
                0.04,
                0.014,
                "square"
            ],

        error:
            [
                80,
                0.16,
                0.04,
                "square"
            ],

        thunder:
            [
                45,
                0.30,
                0.025,
                "sawtooth"
            ]

    };


    if (
        sounds[
            type
        ]
    ) {

        playTone(
            ...sounds[
                type
            ]
        );


        return;

    }


    if (
        type ===
        "craft"
    ) {

        playTone(
            420,
            0.07,
            0.032
        );


        setTimeout(
            () =>
                playTone(
                    650,
                    0.10,
                    0.032
                ),
            75
        );

    }


    if (
        type ===
        "sell"
    ) {

        playTone(
            520,
            0.08,
            0.04
        );


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


    if (
        type ===
        "upgrade"
    ) {

        playTone(
            350,
            0.07,
            0.035
        );


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


    if (
        type ===
        "win"
    ) {

        playTone(
            400,
            0.10,
            0.04
        );


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
                    0.20,
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


    if (
        !settings.music
    ) {

        return;

    }


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

                    0.007,

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

function gameLoop(
    time
) {

    const dt =
        Math.min(

            0.05,

            Math.max(

                0,

                (
                    time -
                    lastFrameTime
                ) /
                1000

            )

        );


    lastFrameTime =
        time;


    if (
        gameRunning &&
        state
    ) {

        if (
            !paused
        ) {

            state.statistics
                .playTime +=
                dt;


            powerTimer +=
                dt;


            hudTimer +=
                dt;


            autoSaveTimer +=
                dt;


            if (
                powerTimer >=
                0.25
            ) {

                powerTimer =
                    0;


                computePowerNetwork();

            }


            updateMachines(
                dt
            );


            updateItems(
                dt
            );


            updateParticles(
                dt
            );


            updateDayNight(
                dt
            );


            updateWeather(
                dt
            );


            updateChallenge(
                dt
            );


            if (
                hudTimer >=
                0.5
            ) {

                hudTimer =
                    0;


                updateHUD();

            }


            if (
                autoSaveTimer >=
                8
            ) {

                autoSaveTimer =
                    0;


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

function formatNumber(
    number
) {

    return Math.floor(
        Number(
            number
        ) ||
        0
    ).toLocaleString();

}


function formatPlayTime(
    seconds
) {

    seconds =
        Math.max(

            0,

            Math.floor(
                Number(
                    seconds
                ) ||
                0
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
        hours >
        0
    ) {

        return (

            String(
                hours
            ).padStart(
                2,
                "0"
            ) +

            ":" +

            String(
                minutes
            ).padStart(
                2,
                "0"
            ) +

            ":" +

            String(
                remainingSeconds
            ).padStart(
                2,
                "0"
            )

        );

    }


    return (

        String(
            minutes
        ).padStart(
            2,
            "0"
        ) +

        ":" +

        String(
            remainingSeconds
        ).padStart(
            2,
            "0"
        )

    );

}


function formatCountdown(
    seconds
) {

    seconds =
        Math.max(

            0,

            Math.ceil(
                Number(
                    seconds
                ) ||
                0
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

        String(
            minutes
        ).padStart(
            2,
            "0"
        ) +

        ":" +

        String(
            remaining
        ).padStart(
            2,
            "0"
        )

    );

}


// =====================================================
// SETTINGS CONTROLS
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

    } else {

        stopMusic();

    }

}


function toggleEffects() {

    settings.effects =
        !settings.effects;


    saveSettings();


    updateSettingsUI();


    if (
        !settings.effects
    ) {

        particles =
            [];


        weatherParticles =
            [];

    }

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


        playSound(
            "click"
        );

    }

}


// =====================================================
// EVENT LISTENERS
// =====================================================

// Main Menu

playBtn.addEventListener(
    "click",
    startNewFactory
);


continueBtn.addEventListener(
    "click",
    continueFactory
);


challengeBtn.addEventListener(
    "click",
    startChallenge
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


// Factory Tools

toolButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                selectTool(
                    button.dataset.tool
                );

            }
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

        hoveredCell =
            null;

    }
);


canvas.addEventListener(
    "contextmenu",
    event =>
        event.preventDefault()
);


// Inventory

inventoryBtn.addEventListener(
    "click",
    openInventory
);


inventorySellAllBtn.addEventListener(
    "click",
    sellAllInventoryProducts
);


closeInventoryBtn.addEventListener(
    "click",
    () =>
        closePanel(
            inventoryPanel
        )
);


// Upgrades

upgradesBtn.addEventListener(
    "click",
    () => {

        updateUpgradesUI();


        openPanel(
            upgradesPanel
        );

    }
);


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
            () => {

                buyUpgrade(
                    button.dataset
                        .upgrade
                );

            }
        );

    }
);


// Statistics

statisticsGameBtn.addEventListener(
    "click",
    openStatistics
);


closeStatisticsBtn.addEventListener(
    "click",
    () =>
        closePanel(
            statisticsPanel
        )
);


// Save

saveBtn.addEventListener(
    "click",
    () =>
        saveGame(
            true
        )
);


// Help

helpBtn.addEventListener(
    "click",
    () =>
        openPanel(
            helpPanel
        )
);


closeHelpBtn.addEventListener(
    "click",
    () =>
        closePanel(
            helpPanel
        )
);


// Settings

closeSettingsBtn.addEventListener(
    "click",
    () =>
        closePanel(
            settingsPanel
        )
);


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


muteBtn.addEventListener(
    "click",
    toggleMute
);


// Confirmation

confirmCancelBtn.addEventListener(
    "click",
    () =>
        closeConfirmation(
            false
        )
);


confirmActionBtn.addEventListener(
    "click",
    () =>
        closeConfirmation(
            true
        )
);


confirmPanel.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            confirmPanel
        ) {

            closeConfirmation(
                false
            );

        }

    }
);


// Challenge Result

challengeResultBtn.addEventListener(
    "click",
    returnToMainMenu
);


// Main Menu Button While Playing

gameMenuBtn.addEventListener(
    "click",
    async () => {

        if (
            !state
        ) {

            return;

        }


        const challenge =
            state.challenge.active;


        const leave =
            await showConfirmation(

                challenge
                    ? "Leave Challenge?"
                    : "Return To Main Menu?",

                challenge

                    ? "Your challenge run will end. Your normal saved factory will remain safe."

                    : "Your factory will be saved before returning to the main menu.",

                challenge
                    ? "Leave Challenge"
                    : "Save & Exit"

            );


        if (
            leave
        ) {

            returnToMainMenu();

        }

    }
);


// Click Outside Standard Panels

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


// Keyboard Controls

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Escape"
        ) {

            if (
                confirmPanel.classList.contains(
                    "open"
                )
            ) {

                closeConfirmation(
                    false
                );


                return;

            }


            closeAllPanels();

        }


        if (
            event.key
                .toLowerCase() ===
                "r" &&

            gameRunning &&

            !paused &&

            !event.repeat
        ) {

            rotateDirection();

        }

    }
);


// Window Resize

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


// Save Before Browser Closes

window.addEventListener(
    "beforeunload",
    () => {

        if (
            state &&
            gameRunning &&
            !state.challenge.active
        ) {

            saveGame();

        }

    }
);


// Save When Tab Is Hidden

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.hidden &&
            state &&
            gameRunning &&
            !state.challenge.active
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
        "Minecraft Redstone Factory V4.1 loaded successfully."
    );

}


initialize();