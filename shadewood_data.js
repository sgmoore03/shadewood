// --- RULE DEFINITIONS ---
const ruleDefinitions = {
    "Blast 2": "Make a shooting attack with this profile against each enemy within 2 hexes of the main target (as long as there isn't a wall fully intervening).",
    "AOE 2": "Make a shooting attack against each eligible enemy within 2 hexes of the main target.",
    "Align 1": "Re-roll 1 attack die.",
    "Stationary": "Cannot move before or after shooting (except Roll)."
};

const factionData = {
    // --- 1. THE BRAMBLEGUARD ---
    "brambleguard": {
        name: "The Brambleguard",
        species: "Minotaur",
        flavor: "Powerhouse faction defined by high durability and aggressive crowd control. Minotaurs use their bulk and charging mechanics to disrupt enemy lines.",
        stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 },
        radar: [9, 8, 8, 4, 6],
        teamRule: {
            name: "Mess with the Bull, Get the Horns",
            desc: "Whenever a Minotaur charges an enemy unit, deal d3 + 1 damage and knock back that enemy unit 1 hex directly opposite of where the minotaur first entered REACH. The minotaur can choose to follow the enemy (move the 1 hex to stay within reach) or it can stop where its charge ended. \n\nIf you would end in REACH of two or more units, you can only select 1 to knock back. You can still follow that unit.\n\nIf the enemy unit cannot be fully moved due to terrain blocking a hex in the knockback path, that operative takes d3 + 3 damage instead. If another unit is occupying a hex that the knocked back unit would land on, that unit blocking the hex takes d3 damage and the knocked back unit doesn't move."
        },
        comp: {
            leaders: "Choose 1",
            operatives: "Choose 2"
        },
        roster: [
            {
                id: "warchief", name: "Warchief", role: "Leader", tags: ["Leader"],
                ability: { name: "Unstoppable Charge", desc: "When friendly Brambleguard operatives uses \"Mess with the Bull, Get the horns\" rule, the enemy operative can now be knocked back up to 2 spaces. The knocked back unit moves as far as it can on the hex path without landing on top of another unit." },
                special: { name: "Command", cost: "0", desc: "Once per battle, during this operative's activation, for free, you can command a friendly operative from your faction to complete 1 free Generic Action. If that action would make that friendly unit move, it can only move a maximum of 2 hexes." },
                stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 },
                weapons: [
                    { name: "Blazing Horn Flamer", atk: 4, acc: "2+", rng: "6", pwr: "3/3", sr: "AOE 2" },
                    { name: "Battle Axe", atk: 4, acc: "3+", rng: "Melee", pwr: "3/5", sr: "-" }
                ]
            },
            {
                id: "champion", name: "Champion", role: "Leader", tags: ["Leader"],
                ability: { name: "Iron Will", desc: "All friendly Brambleguard operatives get +2 DEF against shooting attacks." },
                special: { name: "Command", cost: "0", desc: "Once per battle, during this operative's activation, for free, you can command a friendly operative from your faction to complete 1 free Generic Action. If that action would make that friendly unit move, it can only move a maximum of 2 hexes." },
                stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 },
                weapons: [ { name: "Blazing Horn Flamer", atk: 4, acc: "2+", rng: "6", pwr: "3/3", sr: "AOE 2" }, { name: "Battle Axe", atk: 4, acc: "3+", rng: "Melee", pwr: "3/5", sr: "-" } ]
            },
            {
                id: "berserker", name: "Berserker Blademaster", role: "Operative", tags: ["Blademaster", "Tech Specialist"],
                ability: { name: "Skilled Fighter", desc: "Has +3 DEF against melee attacks." },
                secondaryAbility: { name: "Got a Plan", desc: "This operative can use this ability to perform one mission or objective action for free, during its activation." },
                special: null,
                stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 },
                weapons: [ { name: "Dual Axes", atk: 4, acc: "3+", rng: "Melee", pwr: "4/5", sr: "-" } ]
            },
            {
                id: "medic", name: "Battle Medic", role: "Operative", tags: ["Medic"],
                ability: { name: "Revive", desc: "Once per Turning Point, whenever a friendly unit within 3 hexes would drop below 1 health from any damage that is not from melee, set that friendly unit's health to 1 after the action is complete." },
                special: { name: "Bandage", cost: "1", desc: "Heal a friendly unit within 2 hexes for d3 + 2. This can't be used on a friendly unit that has been revived this turn." },
                stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 },
                weapons: [ { name: "Blazing Horn Flamer", atk: 4, acc: "2+", rng: "6", pwr: "3/3", sr: "AOE 2" }, { name: "Battle Axe", atk: 4, acc: "3+", rng: "Melee", pwr: "3/5", sr: "-" } ]
            },
            {
                id: "grenadier", name: "Bramble Grenadier", role: "Operative", tags: ["Grenadier", "Spotter"],
                ability: { name: "AOE Specialist", desc: "Weapons utilize Blast 2 to hit multiple targets." },
                special: { name: "Spot", cost: "1", desc: "Selects a visible enemy target to be spotted. When a friendly unit within 3 hexes of this unit is shooting a spotted enemy, its shooting weapons get lethal 5+. An enemy is no longer spotted if it's currently not visible to this unit, or until one of the following happens:\n- This unit is killed\n- This unit uses this action again\n- The next time this operative activates" },
                stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 },
                weapons: [
                    { name: "Bramble Bombs", atk: 4, acc: "3+", rng: "6", pwr: "2/4", sr: "Blast 2" },
                    { name: "Breaching Charges", atk: 4, acc: "3+", rng: "6", pwr: "5/6", sr: "-" },
                    { name: "Battle Axe", atk: 4, acc: "3+", rng: "Melee", pwr: "3/5", sr: "-" }
                ]
            },
            {
                id: "warrior", name: "Bull Warrior", role: "Operative", tags: ["Generic Warrior"],
                ability: { name: "Scorching Impact", desc: "Whenever this operative uses \"Mess with the Bull, Get the Horns\" to knock back an enemy unit, that enemy unit gets -2 DEF until the end of the activation." },
                special: null,
                stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 },
                weapons: [ { name: "Blazing Horn Flamer", atk: 4, acc: "2+", rng: "4", pwr: "3/3", sr: "AOE 2" }, { name: "Battle Axe", atk: 4, acc: "3+", rng: "Melee", pwr: "3/5", sr: "-" } ]
            }
        ]
    },

    // --- 2. BLOODTHORN COURT ---
    "bloodthorn": {
        name: "Bloodthorn Court",
        species: "Vampire",
        flavor: "Aristocratic duelists who manipulate health as a resource for devastating power.",
        stats: { hp: 12, def: 5, acc: "4+", move: 5, al: 2 },
        radar: [5, 7, 7, 7, 5],
        teamRule: {
            name: "Transfusion",
            desc: "Vampires can spend 2 health to upgrade an attack dice by 1 (this has no limit for number of uses per attack roll). For every natural 6 they roll, they regain 3 health. You can spend health and receive health in any order.\n\nYou cannot use this ability (or continue to use this ability) if the unit is below 3 health. e.g. if you're unit is at 4 health, you will only be able to upgrade once, if wanted."
        },
        comp: {
            leaders: "Choose 1",
            operatives: "Choose 4"
        },
        roster: [
            {
                id: "sanguine", name: "Sanguine Lord", role: "Leader", tags: ["Leader"],
                ability: { name: "Sanguine Mastery", desc: "On natural 5's, the team heals for 1 health from their Transfusion ability." },
                special: { name: "Command", cost: "0", desc: "Once per battle, during this operative's activation, for free, you can command a friendly operative from your faction to complete 1 free Generic Action. If that action would make that friendly unit move, it can only move a maximum of 2 hexes." },
                stats: { hp: 12, def: 5, acc: "4+", move: 5, al: 2 },
                weapons: [ { name: "Blood Rifle", atk: 4, acc: "4+", rng: "10", pwr: "3/4", sr: "-" }, { name: "Sanguine Blade", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-" } ]
            },
            {
                id: "warden", name: "Crimson Warden", role: "Leader", tags: ["Leader"],
                ability: { name: "Warden's Presence", desc: "All friendly Bloodthorn Court operatives get +1 DEF against shooting attacks. This bonus is doubled (+2 DEF total against shooting) for any vampire below half health." },
                special: { name: "Command", cost: "0", desc: "Once per battle, during this operative's activation, for free, you can command a friendly operative from your faction to complete 1 free Generic Action. If that action would make that friendly unit move, it can only move a maximum of 2 hexes." },
                stats: { hp: 12, def: 5, acc: "4+", move: 5, al: 2 },
                weapons: [ { name: "Blood Rifle", atk: 4, acc: "4+", rng: "10", pwr: "3/4", sr: "-" }, { name: "Sanguine Blade", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-" } ]
            },
            {
                id: "artificer", name: "Crimson Artificer", role: "Operative", tags: ["Tech Specialist"],
                ability: { name: "Got a Plan", desc: "This operative can use this ability to perform one mission or objective action for free, during its activation." },
                special: null,
                stats: { hp: 12, def: 5, acc: "4+", move: 5, al: 2 },
                weapons: [ { name: "Blood Rifle", atk: 4, acc: "4+", rng: "10", pwr: "3/4", sr: "-" }, { name: "Sanguine Blade", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-" } ]
            },
            {
                id: "sniper", name: "Duskwatch Sniper", role: "Operative", tags: ["Sniper"],
                ability: { name: "Roll", desc: "After shooting with the stationary profile, this unit may move 1 hex for free." },
                special: null,
                stats: { hp: 12, def: 5, acc: "4+", move: 5, al: 2 },
                weapons: [ { name: "Blood Hawk (Stationary)", atk: 4, acc: "2+", rng: "16", pwr: "3/6", sr: "Stationary" }, { name: "Blood Hawk", atk: 4, acc: "3+", rng: "12", pwr: "3/5", sr: "-" }, { name: "Sanguine Blade", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-" } ]
            },
            {
                id: "gunner_plasma", name: "Bloodfire Gunner (Plasma)*", role: "Operative", tags: ["Gunner"],
                ability: { name: "Heavy Ordnance", desc: "Carries specialized heavy weaponry." },
                special: null,
                stats: { hp: 12, def: 5, acc: "4+", move: 5, al: 2 },
                weapons: [ { name: "Bloodfire Plasma", atk: 4, acc: "4+", rng: "12", pwr: "4/5", sr: "Align 1" }, { name: "Sanguine Blade", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-" } ]
            },
            {
                id: "gunner_rocket", name: "Bloodfire Gunner (Launcher)*", role: "Operative", tags: ["Gunner"],
                ability: { name: "Heavy Ordnance", desc: "Carries specialized heavy weaponry." },
                special: null,
                stats: { hp: 12, def: 5, acc: "4+", move: 5, al: 2 },
                weapons: [ { name: "Crimson Launcher", atk: 4, acc: "4+", rng: "12", pwr: "2/5", sr: "Blast 2" }, { name: "Sanguine Blade", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-" } ]
            },
            {
                id: "communicator", name: "Nightveil Communicator", role: "Operative", tags: ["Comms Specialist"],
                ability: { name: "Coordinator", desc: "Facilitates team movement." },
                special: { name: "Reposition", cost: "1", desc: "Choose a friendly operative within 6 hexes. That operative may immediately perform a free Dash action." },
                stats: { hp: 12, def: 5, acc: "4+", move: 5, al: 2 },
                weapons: [ { name: "Blood Rifle", atk: 4, acc: "4+", rng: "10", pwr: "3/4", sr: "-" }, { name: "Sanguine Blade", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-" } ]
            },
            {
                id: "duelist", name: "Crimson Duelist", role: "Operative", tags: ["Blademaster"],
                ability: { name: "Skilled Fighter", desc: "Has +3 DEF against melee attacks." },
                special: null,
                stats: { hp: 12, def: 5, acc: "4+", move: 5, al: 2 },
                weapons: [ { name: "Blood Pistol", atk: 4, acc: "4+", rng: "6", pwr: "3/4", sr: "-" }, { name: "Blood Reaver", atk: 4, acc: "4+", rng: "Melee", pwr: "4/5", sr: "-" } ]
            },
            {
                id: "warrior", name: "Bloodbound Warrior", role: "Operative", tags: ["Generic Warrior"],
                ability: { name: "Bloodthirsty", desc: "When this operative uses Transfusion during an attack action, the first two upgrades are free (do not cost health)." },
                special: null,
                stats: { hp: 12, def: 5, acc: "4+", move: 5, al: 2 },
                weapons: [ { name: "Blood Rifle", atk: 4, acc: "4+", rng: "10", pwr: "3/4", sr: "-" }, { name: "Sanguine Blade", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-" } ]
            }
        ]
    },

    // --- 3. PRIMAL WARDENS ---
    "primal": {
        name: "Primal Wardens",
        species: "Centaur",
        flavor: "Highly mobile skirmishers who can shoot while moving.",
        stats: { hp: 16, def: 6, acc: "3+", move: 7, al: 3 },
        radar: [8, 8, 6, 6, 9],
        teamRule: { name: "Galloping Shot", desc: "Primal Wardens may shoot in the middle of normal move or dash action. They must stop on a hex in their running path for the shoot action to determine LOS, but then can use the remainder of their move after that shoot action. e.g. A unit moves 3 hexes, makes a shooting action, and then has 4 hexes leftover on the move." },
        comp: {
            leaders: "Choose 1",
            operatives: "Choose 2"
        },
        roster: [
            { id: "herd", name: "Herd Chieftain", role: "Leader", tags: ["Leader"], ability: { name: "Relentless Pursuit", desc: "Galloping Shot can be used during a charge." }, special: { name: "Command", cost: "0", desc: "Once per battle, during this operative's activation, for free, you can command a friendly operative from your faction to complete 1 free Generic Action. If that action would make that friendly unit move, it can only move a maximum of 2 hexes." }, stats: { hp: 16, def: 6, acc: "3+", move: 7, al: 3 }, weapons: [{name: "Warden Rifle", atk: 4, acc: "3+", rng: 10, pwr: "3/5", sr: "-"}, {name: "Striking Hooves", atk: 4, acc: "3+", rng: "Melee", pwr: "3/4", sr: "-"}] },
            { id: "warden", name: "Warden Commander", role: "Leader", tags: ["Leader"], ability: { name: "Warden's Resolve", desc: "All Warden Rifles get the Align 1 rule." }, special: { name: "Command", cost: "0", desc: "Once per battle, during this operative's activation, for free, you can command a friendly operative from your faction to complete 1 free Generic Action. If that action would make that friendly unit move, it can only move a maximum of 2 hexes." }, stats: { hp: 16, def: 6, acc: "3+", move: 7, al: 3 }, weapons: [{name: "Warden Rifle", atk: 4, acc: "3+", rng: 10, pwr: "3/5", sr: "-"}, {name: "Striking Hooves", atk: 4, acc: "3+", rng: "Melee", pwr: "3/4", sr: "-"}] },
            { id: "lancer", name: "Thunder Lancer", role: "Operative", tags: ["Gunner Melta", "Tech Specialist"], ability: { name: "Got a Plan", desc: "This operative can use this ability to perform one mission or objective action for free, during its activation." }, special: null, stats: { hp: 16, def: 6, acc: "3+", move: 7, al: 3 }, weapons: [{name: "Thunder Lance", atk: 4, acc: "3+", rng: 6, pwr: "6/7", sr: "-"}, {name: "Warden Rifle", atk: 4, acc: "3+", rng: 10, pwr: "3/5", sr: "-"}, {name: "Striking Hooves", atk: 4, acc: "3+", rng: "Melee", pwr: "3/4", sr: "-"}] },
            { id: "outrider_rocket", name: "Outrider Gunner (Rocket)*", role: "Operative", tags: ["Gunner Rocket"], ability: { name: "Heavy Support", desc: "Mobile heavy weapons platform." }, special: null, stats: { hp: 16, def: 6, acc: "3+", move: 7, al: 3 }, weapons: [{name: "Skybreaker (Rocket)", atk: 4, acc: "3+", rng: 12, pwr: "2/5", sr: "Blast 2"}, {name: "Warden Rifle", atk: 4, acc: "3+", rng: 10, pwr: "3/5", sr: "-"}, {name: "Striking Hooves", atk: 4, acc: "3+", rng: "Melee", pwr: "3/4", sr: "-"}] },
            { id: "outrider_plasma", name: "Outrider Gunner (Plasma)*", role: "Operative", tags: ["Gunner Plasma"], ability: { name: "Heavy Support", desc: "Mobile heavy weapons platform." }, special: null, stats: { hp: 16, def: 6, acc: "3+", move: 7, al: 3 }, weapons: [{name: "Skybreaker (Plasma)", atk: 4, acc: "3+", rng: 12, pwr: "4/5", sr: "Align 1"}, {name: "Warden Rifle", atk: 4, acc: "3+", rng: 10, pwr: "3/5", sr: "-"}, {name: "Striking Hooves", atk: 4, acc: "3+", rng: "Melee", pwr: "3/4", sr: "-"}] },
            { id: "shaman", name: "Primal Shaman", role: "Operative", tags: ["Spirit Healer"], ability: { name: "Healer", desc: "Supports the herd with magic." }, special: { name: "Ancestral Mending", cost: "1", desc: "Select a friendly unit within 6 hexes. For the next (2d3 + 2) activations, heal that friendly unit for 1 health.\n*Note: The friendly unit only needs to be within 6 hexes when this ability is cast.*" }, stats: { hp: 16, def: 6, acc: "3+", move: 7, al: 3 }, weapons: [{name: "Warden Rifle", atk: 4, acc: "3+", rng: 10, pwr: "3/5", sr: "-"}, {name: "Striking Hooves", atk: 4, acc: "3+", rng: "Melee", pwr: "3/4", sr: "-"}] },
            { id: "stampede", name: "Stampede Warrior", role: "Operative", tags: ["Generic Warrior"], ability: { name: "Trample", desc: "This operatives Warden Rifle has the Critical 5 when a shot is being made using the Galloping Shot rule." }, special: null, stats: { hp: 16, def: 6, acc: "3+", move: 7, al: 3 }, weapons: [{name: "Warden Rifle", atk: 4, acc: "3+", rng: 10, pwr: "3/5", sr: "-"}, {name: "Striking Hooves", atk: 4, acc: "3+", rng: "Melee", pwr: "3/4", sr: "-"}] }
        ]
    },

    // --- 4. SKYDANCERS ---
    "skydancers": {
        name: "The Skydancers",
        species: "Fairy",
        flavor: "Agile flyers who use fairy rings to teleport across the battlefield.",
        stats: { hp: 10, def: 4, acc: "4+", move: 7, al: 2 },
        radar: [3, 4, 4, 6, 10],
        teamRule: { name: "Fairy Rings", desc: "Before the battle begins, place 3 fairy ring tokens within your half of the field. If a fairy is within REACH of a fairy ring token, it can spend 1 Action Point to teleport to within REACH of a different friendly fairy ring. This counts as a major movement.\n\n**Flight**\nFairies can fly. They can move over terrain, but cannot land on it. You must still select a hex path for the flight to take place over." },
        comp: {
            leaders: "Choose 1",
            operatives: "Choose 5.\n*Only 2 Gunners total may be selected."
        },
        roster: [
            { id: "starwing", name: "Queen", role: "Leader", tags: ["Leader"], ability: { name: "Wings of Freedom", desc: "Friendly Skydancer operatives can teleport between fairy rings without spending an Action Point (this still counts as a major movement)." }, special: { name: "Command", cost: "0", desc: "Once per battle, during this operative's activation, for free, you can command a friendly operative from your faction to complete 1 free Generic Action. If that action would make that friendly unit move, it can only move a maximum of 2 hexes." }, stats: { hp: 10, def: 4, acc: "4+", move: 7, al: 2 }, weapons: [{name: "Sky Rifle", atk: 4, acc: "4+", rng: 12, pwr: "2/4", sr: "-"}, {name: "Wind Rapier", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "moonwhisper", name: "Prince", role: "Leader", tags: ["Leader"], ability: { name: "Precision Guidance", desc: "All Sky Pistols and Sky Rifles used by friendly Skydancer operatives gain Align 1" }, special: { name: "Command", cost: "0", desc: "Once per battle, during this operative's activation, for free, you can command a friendly operative from your faction to complete 1 free Generic Action. If that action would make that friendly unit move, it can only move a maximum of 2 hexes." }, stats: { hp: 10, def: 4, acc: "4+", move: 7, al: 2 }, weapons: [{name: "Sky Rifle", atk: 4, acc: "4+", rng: 12, pwr: "2/4", sr: "-"}, {name: "Wind Rapier", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "gunner_starfire", name: "Aerial Gunner (Starfire)*", role: "Operative", tags: ["Gunner"], ability: { name: "Aerial Superiority", desc: "Attacks from above." }, special: null, stats: { hp: 10, def: 4, acc: "4+", move: 7, al: 2 }, weapons: [{name: "Starfire Caster", atk: 4, acc: "4+", rng: 12, pwr: "4/5", sr: "Align 1"}, {name: "Sky Pistol", atk: 4, acc: "4+", rng: 8, pwr: "2/4", sr: "-"}, {name: "Wind Rapier", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "gunner_windstorm", name: "Aerial Gunner (Windstorm)*", role: "Operative", tags: ["Gunner"], ability: { name: "Aerial Superiority", desc: "Attacks from above." }, special: null, stats: { hp: 10, def: 4, acc: "4+", move: 7, al: 2 }, weapons: [{name: "Windstorm Burner", atk: 4, acc: "2+", rng: 6, pwr: "3/4", sr: "-"}, {name: "Sky Pistol", atk: 4, acc: "4+", rng: 8, pwr: "2/4", sr: "-"}, {name: "Wind Rapier", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "gunner_skypierce", name: "Aerial Gunner (Skypierce)*", role: "Operative", tags: ["Gunner"], ability: { name: "Aerial Superiority", desc: "Attacks from above." }, special: null, stats: { hp: 10, def: 4, acc: "4+", move: 7, al: 2 }, weapons: [{name: "Skypierce Lance", atk: 4, acc: "4+", rng: 6, pwr: "6/7", sr: "-"}, {name: "Sky Pistol", atk: 4, acc: "4+", rng: 8, pwr: "2/4", sr: "-"}, {name: "Wind Rapier", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "sniper", name: "Windrider Sniper", role: "Operative", tags: ["Sniper"], ability: { name: "Roll", desc: "After shooting with the stationary profile, this unit may move 1 hex for free." }, special: null, stats: { hp: 10, def: 4, acc: "4+", move: 7, al: 2 }, weapons: [{name: "Whisperwind (Stationary)", atk: 4, acc: "2+", rng: 16, pwr: "3/6", sr: "Stationary"}, {name: "Whisperwind", atk: 4, acc: "3+", rng: 12, pwr: "3/5", sr: "-"}, {name: "Sky Pistol", atk: 4, acc: "4+", rng: 8, pwr: "2/4", sr: "-"}, {name: "Wind Rapier", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "scout", name: "Windcaller Scout", role: "Operative", tags: ["Spotter"], ability: { name: "Spotter", desc: "Identifies targets." }, special: { name: "Spot", cost: "1", desc: "Selects a visible enemy target to be spotted. When a friendly unit within 3 hexes of this unit is shooting a spotted enemy, its shooting weapons get lethal 5+. An enemy is no longer spotted if it's currently not visible to this unit, or until one of the following happens:\n- This unit is killed\n- This unit uses this action again\n- The next time this operative activates" }, stats: { hp: 10, def: 4, acc: "4+", move: 7, al: 2 }, weapons: [{name: "Sky Rifle", atk: 4, acc: "4+", rng: 12, pwr: "2/4", sr: "-"}, {name: "Wind Rapier", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "shaman", name: "Wind Shaman", role: "Operative", tags: ["Spirit Healer"], ability: { name: "Healer", desc: "Supports with magic." }, special: { name: "Ancestral Mending", cost: "1", desc: "Select a friendly unit within 6 hexes. For the next (2d3 + 2) activations, heal that friendly unit for 1 health.\n*Note: The friendly unit only needs to be within 6 hexes when this ability is cast.*" }, stats: { hp: 10, def: 4, acc: "4+", move: 7, al: 2 }, weapons: [{name: "Sky Rifle", atk: 4, acc: "4+", rng: 12, pwr: "2/4", sr: "-"}, {name: "Wind Rapier", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "warden", name: "Ring Warden", role: "Operative", tags: ["Comms Specialist"], ability: { name: "Defense Beacon", desc: "This operative counts as 1 additional AL when determining control of a mission or objective marker. This is not a change to this operative's AL stat." }, special: { name: "Relay Orders", cost: "1", desc: "Give a friendly unit within 6 hexes an additional Action Limit until the end of their next activation." }, stats: { hp: 10, def: 4, acc: "4+", move: 7, al: 2 }, weapons: [{name: "Sky Rifle", atk: 4, acc: "4+", rng: 12, pwr: "2/4", sr: "-"}, {name: "Wind Rapier", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "guardian", name: "Sky Guardian", role: "Operative", tags: ["Generic Warrior"], ability: { name: "Ring Guard", desc: "While this operative is within REACH of a friendly fairy ring token, It's Sky Rifle gets +1/+1 power." }, special: null, stats: { hp: 10, def: 4, acc: "4+", move: 7, al: 2 }, weapons: [{name: "Sky Rifle", atk: 4, acc: "4+", rng: 12, pwr: "2/4", sr: "-"}, {name: "Wind Rapier", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-"}] }
        ]
    },

    // --- 5. THE ROTCALLERS ---
    "rotcallers": {
        name: "The Rotcallers",
        species: "Myconid",
        flavor: "Fungal warriors who create zones of decay that buff allies and weaken enemies.",
        stats: { hp: 12, def: 5, acc: "3+", move: 6, al: 2 },
        radar: [6, 7, 5, 6, 5],
        teamRule: { name: "Death Bloom", desc: "Whenever a Myconid perishes, drop a death bloom token. The area of the death bloom is all hexes within 1 (+ the Turn number) of the Death Bloom token. e.g. on Turn 2, all hexes within 3 of the token, Turn 3 within 4). \n\nWhenever a friendly Myconid is on a friendly death bloom, they get +1 damage to all critical power stats. \n\nWhenever an enemy is on a death bloom, they are -3 DEF and -1 move (to a minimum of 4)." },
        comp: {
            leaders: "Choose 1",
            operatives: "Choose 4"
        },
        roster: [
            { id: "patriarch", name: "Patriarch", role: "Leader", tags: ["Leader"], ability: { name: "Spreading Rot", desc: "Death bloom tokens placed by friendly Rotcaller operatives have their range increased by 1 hex (e.g., on turn 2, the range is 4 hexes instead of 3)." }, special: { name: "Command", cost: "0", desc: "Once per battle, during this operative's activation, for free, you can command a friendly operative from your faction to complete 1 free Generic Action. If that action would make that friendly unit move, it can only move a maximum of 2 hexes." }, stats: { hp: 12, def: 5, acc: "3+", move: 6, al: 2 }, weapons: [{name: "Spore Rifle", atk: 4, acc: "3+", rng: 10, pwr: "3/5", sr: "-"}, {name: "Fungal Fists", atk: 4, acc: "3+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "mycelord", name: "Mycelord", role: "Leader", tags: ["Leader"], ability: { name: "Fungal Fortitude", desc: "All friendly Rotcaller operatives get +2 HP." }, special: { name: "Command", cost: "0", desc: "Once per battle, during this operative's activation, for free, you can command a friendly operative from your faction to complete 1 free Generic Action. If that action would make that friendly unit move, it can only move a maximum of 2 hexes." }, stats: { hp: 12, def: 5, acc: "3+", move: 6, al: 2 }, weapons: [{name: "Spore Rifle", atk: 4, acc: "3+", rng: 10, pwr: "3/5", sr: "-"}, {name: "Fungal Fists", atk: 4, acc: "3+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "heavy", name: "Sporebearer Heavy", role: "Operative", tags: ["Heavy Gunner"], ability: { name: "Modifier", desc: "This operative has -1 Move Stat (to a minimum of 5)." }, special: null, stats: { hp: 12, def: 5, acc: "3+", move: 5, al: 2 }, weapons: [{name: "Spore Sprayer", atk: 4, acc: "3+", rng: 10, pwr: "5/6", sr: "-"}, {name: "Spore Rifle", atk: 4, acc: "3+", rng: 10, pwr: "3/5", sr: "-"}, {name: "Fungal Fists", atk: 4, acc: "3+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "warden", name: "Bloom Warden", role: "Operative", tags: ["Spotter", "Comms Specialist"], ability: { name: "Defense Beacon", desc: "This operative counts as 1 additional AL when determining control of a mission or objective marker. This is not a change to this operative's AL stat." }, special: { name: "Spot", cost: "1", desc: "Selects a visible enemy target to be spotted. When a friendly unit within 3 hexes of this unit is shooting a spotted enemy, its shooting weapons get lethal 5+. An enemy is no longer spotted if it's currently not visible to this unit, or until one of the following happens:\n- This unit is killed\n- This unit uses this action again\n- The next time this operative activates" }, stats: { hp: 12, def: 5, acc: "3+", move: 6, al: 2 }, weapons: [{name: "Spore Rifle", atk: 4, acc: "3+", rng: 10, pwr: "3/5", sr: "-"}, {name: "Fungal Fists", atk: 4, acc: "3+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "engineer", name: "Decay Engineer", role: "Operative", tags: ["Tech Specialist", "Gunner (Flamer)"], ability: { name: "Got a Plan", desc: "This operative can use this ability to perform one mission or objective action for free, during its activation." }, special: null, stats: { hp: 12, def: 5, acc: "3+", move: 6, al: 2 }, weapons: [{name: "Blight Burner", atk: 4, acc: "2+", rng: 6, pwr: "3/4", sr: "-"}, {name: "Spore Rifle", atk: 4, acc: "3+", rng: 10, pwr: "3/5", sr: "-"}, {name: "Fungal Fists", atk: 4, acc: "3+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "sniper", name: "Rot Sniper", role: "Operative", tags: ["Sniper"], ability: { name: "Roll", desc: "After shooting with the stationary profile, this unit may move 1 hex for free." }, special: null, stats: { hp: 12, def: 5, acc: "3+", move: 6, al: 2 }, weapons: [{name: "Rot Sniper (Stationary)", atk: 4, acc: "2+", rng: 16, pwr: "3/6", sr: "Stationary"}, {name: "Rot Sniper", atk: 4, acc: "3+", rng: 12, pwr: "3/5", sr: "-"}, {name: "Fungal Fists", atk: 4, acc: "3+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "medic", name: "Fungal Medic", role: "Operative", tags: ["Medic"], ability: { name: "Revive", desc: "Once per Turning Point, whenever a friendly unit within 3 hexes would drop below 1 health from any damage that is not from melee, set that friendly unit's health to 1 after the action is complete." }, special: { name: "Bandage", cost: "1", desc: "Heal a friendly unit within 2 hexes for d3 + 2. This can't be used on a friendly unit that has been revived this turn." }, stats: { hp: 12, def: 5, acc: "3+", move: 6, al: 2 }, weapons: [{name: "Spore Rifle", atk: 4, acc: "3+", rng: 10, pwr: "3/5", sr: "-"}, {name: "Fungal Fists", atk: 4, acc: "3+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "warrior", name: "Rot Warrior", role: "Operative", tags: ["Generic Warrior"], ability: { name: "Bloom Empowerment", desc: "When this operative is on a friendly death bloom, its Spore Rifle gains Critical 5." }, special: null, stats: { hp: 12, def: 5, acc: "3+", move: 6, al: 2 }, weapons: [{name: "Spore Rifle", atk: 4, acc: "3+", rng: 10, pwr: "3/5", sr: "-"}, {name: "Fungal Fists", atk: 4, acc: "3+", rng: "Melee", pwr: "2/4", sr: "-"}] }
        ]
    },

    // --- 6. TINKERBRIGHT ---
    "tinkerbright": {
        name: "The Tinkerbright",
        species: "Gnome",
        flavor: "Technological geniuses who use teleportation pads to manipulate the battlefield.",
        stats: { hp: 10, def: 4, acc: "4+", move: 5, al: 2 },
        radar: [3, 4, 6, 8, 9],
        teamRule: { name: "Teleportation Tech", desc: "Each Gnome gets a special action called \"Set Teleportation Pad\".\n\n**Special Action: Set Teleportation Pad**\nOnce per battle, each Gnome can place down a teleportation pad token. \n\nWhenever any unit moves onto the teleportation pad token, automatically move that unit 3 hexes in the exact direction it was moving when moving onto the teleportation token. This move can go through all terrain, but must clear terrain with the 3 hex range. If it doesn't, teleport the max number of hexes in which it lands on a hex it can be placed. Finish any movement left over from the movement action. A teleporter cannot be placed where a unit is currently standing. You can teleport into REACH using any move action, regardless of other rules.\n\nWhenever a Gnome jumps into a teleporter, all weapons get +1 to all power stats (to a maximum of +1). \n\nWhenever any non-Gnome unit uses a teleporter, they take d3 + 1 damage and suffer -1 to Accuracy on any Melee or Shooting attacks for the rest of the turning point." },
        comp: {
            leaders: "Choose 1",
            operatives: "Choose 5. Only 2 Gunners total may be selected."
        },
        roster: [
            { id: "engineer", name: "Chief Engineer", role: "Leader", tags: ["Leader"], ability: { name: "Perfected Portals", desc: "Whenever a friendly Tinkerbright operative uses a teleportation pad, all their weapons gain Critical 5+ until the end of their activation." }, special: { name: "Command", cost: "0", desc: "Once per battle, during this operative's activation, for free, you can command a friendly operative from your faction to complete 1 free Generic Action. If that action would make that friendly unit move, it can only move a maximum of 2 hexes." }, stats: { hp: 10, def: 4, acc: "4+", move: 5, al: 2 }, weapons: [{name: "Tech Rifle", atk: 4, acc: "4+", rng: 10, pwr: "3/4", sr: "-"}, {name: "Shock Baton", atk: 4, acc: "4+", rng: "Melee", pwr: "3/4", sr: "-"}] },
            { id: "tactician", name: "Master Tactician", role: "Leader", tags: ["Leader"], ability: { name: "Precision Targeting", desc: "All friendly Tinkerbright operatives' weapons gain Align 1." }, special: { name: "Command", cost: "0", desc: "Once per battle, during this operative's activation, for free, you can command a friendly operative from your faction to complete 1 free Generic Action. If that action would make that friendly unit move, it can only move a maximum of 2 hexes." }, stats: { hp: 10, def: 4, acc: "4+", move: 5, al: 2 }, weapons: [{name: "Tech Rifle", atk: 4, acc: "4+", rng: 10, pwr: "3/4", sr: "-"}, {name: "Shock Baton", atk: 4, acc: "4+", rng: "Melee", pwr: "3/4", sr: "-"}] },
            { id: "assassin", name: "Teleport Assassin", role: "Operative", tags: ["Blademaster"], ability: { name: "Skilled Fighter", desc: "Has +3 DEF against melee attacks." }, special: null, stats: { hp: 10, def: 4, acc: "4+", move: 5, al: 2 }, weapons: [{name: "Tech Pistol", atk: 4, acc: "4+", rng: 8, pwr: "3/4", sr: "-"}, {name: "Shock Baton", atk: 4, acc: "4+", rng: "Melee", pwr: "4/5", sr: "-"}] },
            { id: "heavy", name: "Heavy Weapons Specialist", role: "Operative", tags: ["Heavy Gunner"], ability: { name: "Modifier", desc: "This operative has -1 Move Stat (to a minimum of 5)." }, special: null, stats: { hp: 10, def: 4, acc: "4+", move: 4, al: 2 }, weapons: [{name: "Gnomish Gatling", atk: 4, acc: "4+", rng: 10, pwr: "5/6", sr: "-"}, {name: "Tech Rifle", atk: 4, acc: "4+", rng: 10, pwr: "3/4", sr: "-"}, {name: "Shock Baton", atk: 4, acc: "4+", rng: "Melee", pwr: "3/4", sr: "-"}] },
            { id: "artillery_rockets", name: "Artillery Specialist (Rockets)*", role: "Operative", tags: ["Gunner"], ability: { name: "Versatile", desc: "Choose Prototype Rockets." }, special: null, stats: { hp: 10, def: 4, acc: "4+", move: 5, al: 2 }, weapons: [{name: "Prototype Rockets", atk: 4, acc: "4+", rng: 12, pwr: "2/5", sr: "Blast 2"}, {name: "Tech Rifle", atk: 4, acc: "4+", rng: 10, pwr: "3/4", sr: "-"}, {name: "Shock Baton", atk: 4, acc: "4+", rng: "Melee", pwr: "3/4", sr: "-"}] },
            { id: "artillery_plasma", name: "Artillery Specialist (Plasma)*", role: "Operative", tags: ["Gunner"], ability: { name: "Versatile", desc: "Choose Sparkstream Projector." }, special: null, stats: { hp: 10, def: 4, acc: "4+", move: 5, al: 2 }, weapons: [{name: "Sparkstream Projector", atk: 4, acc: "4+", rng: 12, pwr: "4/5", sr: "Align 1"}, {name: "Tech Rifle", atk: 4, acc: "4+", rng: 10, pwr: "3/4", sr: "-"}, {name: "Shock Baton", atk: 4, acc: "4+", rng: "Melee", pwr: "3/4", sr: "-"}] },
            { id: "artillery_melta", name: "Artillery Specialist (Melta)*", role: "Operative", tags: ["Gunner"], ability: { name: "Versatile", desc: "Choose Cogforge Melter." }, special: null, stats: { hp: 10, def: 4, acc: "4+", move: 5, al: 2 }, weapons: [{name: "Cogforge Melter", atk: 4, acc: "4+", rng: 8, pwr: "6/7", sr: "-"}, {name: "Tech Rifle", atk: 4, acc: "4+", rng: 10, pwr: "3/4", sr: "-"}, {name: "Shock Baton", atk: 4, acc: "4+", rng: "Melee", pwr: "3/4", sr: "-"}] },
            { id: "technician", name: "Field Technician", role: "Operative", tags: ["Tech Specialist"], ability: { name: "Got a Plan", desc: "This operative can use this ability to perform one mission or objective action for free, during its activation." }, special: null, stats: { hp: 10, def: 4, acc: "4+", move: 5, al: 2 }, weapons: [{name: "Tech Rifle", atk: 4, acc: "4+", rng: 10, pwr: "3/4", sr: "-"}, {name: "Shock Baton", atk: 4, acc: "4+", rng: "Melee", pwr: "3/4", sr: "-"}] },
            { id: "medic", name: "Engineer Medic", role: "Operative", tags: ["Medic"], ability: { name: "Revive", desc: "Once per Turning Point, whenever a friendly unit within 3 hexes would drop below 1 health from any damage that is not from melee, set that friendly unit's health to 1 after the action is complete." }, special: { name: "Bandage", cost: "1", desc: "Heal a friendly unit within 2 hexes for d3 + 2. This can't be used on a friendly unit that has been revived this turn." }, stats: { hp: 10, def: 4, acc: "4+", move: 5, al: 2 }, weapons: [{name: "Tech Rifle", atk: 4, acc: "4+", rng: 10, pwr: "3/4", sr: "-"}, {name: "Shock Baton", atk: 4, acc: "4+", rng: "Melee", pwr: "3/4", sr: "-"}] },
            { id: "comms", name: "Comms Operator", role: "Operative", tags: ["Comms Specialist"], ability: { name: "Defense Beacon", desc: "This operative counts as 1 additional AL when determining control of a mission or objective marker. This is not a change to this operative's AL stat." }, special: { name: "Relay Orders", cost: "1", desc: "Give a friendly unit within 6 hexes an additional Action Limit until the end of their next activation." }, stats: { hp: 10, def: 4, acc: "4+", move: 5, al: 2 }, weapons: [{name: "Tech Rifle", atk: 4, acc: "4+", rng: 10, pwr: "3/4", sr: "-"}, {name: "Shock Baton", atk: 4, acc: "4+", rng: "Melee", pwr: "3/4", sr: "-"}] },
            { id: "trooper", name: "Tech Trooper", role: "Operative", tags: ["Generic Warrior"], ability: { name: "Emergency Teleport", desc: "Once per battle, after this operative is targeted by a shooting attack (but before dice are rolled), this operative may immediately use a friendly teleportation pad within 6 hexes, moving 5 hexes in any direction through the pad. The attack is then resolved against the operative's new position." }, special: null, stats: { hp: 10, def: 4, acc: "4+", move: 5, al: 2 }, weapons: [{name: "Tech Rifle", atk: 4, acc: "4+", rng: 10, pwr: "3/4", sr: "-"}, {name: "Shock Baton", atk: 4, acc: "4+", rng: "Melee", pwr: "3/4", sr: "-"}] }
        ]
    },

    // --- 7. WILDKIN PACKS ---
    "wildkin": {
        name: "Wildkin Packs",
        species: "Werewolf",
        flavor: "Savage hunters who frenzy when they smell blood.",
        stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 },
        radar: [9, 8, 9, 3, 7],
        teamRule: { name: "Scent of the Weak", desc: "Friendly Wildkin units get +1 to critical power for all attacks against enemy units that are not at full health. Friendly Wildkin units also get +1 hex of charge range when charging an enemy unit not at full health." },
        comp: {
            leaders: "Choose 1",
            operatives: "Choose 2"
        },
        roster: [
            { id: "hunt", name: "Hunt Commander", role: "Leader", tags: ["Leader", "Blademaster"], ability: { name: "Blood Frenzy", desc: "All friendly Wildkin operatives get +1 to normal power in addition to the +1 critical power from \"Scent of the Weak\"" }, special: { name: "Command", cost: "0", desc: "Once per battle, during this operative's activation, for free, you can command a friendly operative from your faction to complete 1 free Generic Action. If that action would make that friendly unit move, it can only move a maximum of 2 hexes." }, stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 }, weapons: [{name: "Feral Repeater", atk: 4, acc: "3+", rng: 6, pwr: "2/4", sr: "-"}, {name: "Lupine Claws", atk: 4, acc: "3+", rng: "Melee", pwr: "4/5", sr: "-"}] },
            { id: "alpha", name: "Pack Alpha", role: "Leader", tags: ["Leader", "Blademaster"], ability: { name: "Pack Tactics", desc: "Friendly Wildkins' weapons get Align 1 when they are within 5 hexes of a friendly unit" }, secondaryAbility: { name: "Skilled Fighter", desc: "Has +3 DEF against melee attacks." }, special: { name: "Command", cost: "0", desc: "Once per battle, during this operative's activation, for free, you can command a friendly operative from your faction to complete 1 free Generic Action. If that action would make that friendly unit move, it can only move a maximum of 2 hexes." }, stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 }, weapons: [{name: "Feral Repeater", atk: 4, acc: "3+", rng: 6, pwr: "2/4", sr: "-"}, {name: "Lupine Claws", atk: 4, acc: "3+", rng: "Melee", pwr: "4/5", sr: "-"}] },
            { id: "ravager", name: "Ravager Assault", role: "Operative", tags: ["Blademaster", "Grenadier"], ability: { name: "Skilled Fighter", desc: "Has +3 DEF against melee attacks." }, special: null, stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 }, weapons: [{name: "Pack Grenade (Frag)", atk: 4, acc: "3+", rng: 6, pwr: "2/5", sr: "Blast 2"}, {name: "Howlcrack Charge (Krak)", atk: 4, acc: "3+", rng: 6, pwr: "5/6", sr: "-"}, {name: "Feral Repeater", atk: 4, acc: "3+", rng: 6, pwr: "2/4", sr: "-"}, {name: "Lupine Claws", atk: 4, acc: "3+", rng: "Melee", pwr: "4/5", sr: "-"}] },
            { id: "suppressor", name: "Moonlit Suppressor", role: "Operative", tags: ["Blademaster", "Sniper", "Spotter"], ability: { name: "Skilled Fighter", desc: "Has +3 DEF against melee attacks." }, special: { name: "Spot", cost: "1", desc: "Selects a visible enemy target to be spotted. When a friendly unit within 3 hexes of this unit is shooting a spotted enemy, its shooting weapons get lethal 5+. An enemy is no longer spotted if it's currently not visible to this unit, or until one of the following happens:\n- This unit is killed\n- This unit uses this action again\n- The next time this operative activates" }, stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 }, weapons: [{name: "Moonhowl Rifle (Stationary)", atk: 4, acc: "2+", rng: 16, pwr: "3/6", sr: "Stationary"}, {name: "Moonhowl Rifle", atk: 4, acc: "3+", rng: 12, pwr: "3/5", sr: "-"}, {name: "Feral Repeater", atk: 4, acc: "3+", rng: 6, pwr: "2/4", sr: "-"}, {name: "Lupine Claws", atk: 4, acc: "3+", rng: "Melee", pwr: "4/5", sr: "-"}] },
            { id: "medic", name: "Feral Medic", role: "Operative", tags: ["Blademaster", "Medic"], ability: { name: "Revive", desc: "Once per Turning Point, whenever a friendly unit within 3 hexes would drop below 1 health from any damage that is not from melee, set that friendly unit's health to 1 after the action is complete." }, secondaryAbility: { name: "Skilled Fighter", desc: "Has +3 DEF against melee attacks." }, special: { name: "Bandage", cost: "1", desc: "Heal a friendly unit within 2 hexes for d3 + 2. This can't be used on a friendly unit that has been revived this turn." }, stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 }, weapons: [{name: "Feral Repeater", atk: 4, acc: "3+", rng: 6, pwr: "2/4", sr: "-"}, {name: "Lupine Claws", atk: 4, acc: "3+", rng: "Melee", pwr: "4/5", sr: "-"}] },
            { id: "huntsman", name: "Huntsman", role: "Operative", tags: ["Blademaster", "Generic Warrior"], ability: { name: "Relentless Hunter", desc: "If this operative downs an enemy unit during it's activation, this operative can immediately perform 1 free mission action within the same activation." }, secondaryAbility: { name: "Skilled Fighter", desc: "Has +3 DEF against melee attacks." }, special: null, stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 }, weapons: [{name: "Feral Repeater", atk: 4, acc: "3+", rng: 6, pwr: "2/4", sr: "-"}, {name: "Lupine Claws", atk: 4, acc: "3+", rng: "Melee", pwr: "4/5", sr: "-"}] }
        ]
    },

    // --- 8. LIVING GROVE ---
    "livinggrove": {
        name: "The Living Grove",
        species: "Treant / Dryad",
        flavor: "A symbiotic team of massive Treants and nimble Dryads.",
        stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 }, // Treant stats as base
        radar: [10, 9, 6, 5, 4],
        teamRule: { name: "Whisper of the Willow", desc: "Dryads can spend 1 Action Point to make a treant do a free generic action.\n\nDryads also don't need to be within required ranges when selecting a friendly Treant for an action." },
        comp: {
            leaders: "Choose 2 Dryads (including 1 Leader)",
            operatives: "Choose 2 Treants"
        },
        roster: [
            { id: "elder", name: "Elder Rootwarden", role: "Leader", tags: ["Leader", "Dryad"], ability: { name: "Deep Roots", desc: "Whenever a Dryad uses Whisper of the Willow to command a Treant, that Treant may perform 2 free generic actions instead of 1." }, special: { name: "Command", cost: "0", desc: "Once per battle, during this operative's activation, for free, you can command a friendly operative from your faction to complete 1 free Generic Action. If that action would make that friendly unit move, it can only move a maximum of 2 hexes." }, stats: { hp: 7, def: 4, acc: "3+", move: 5, al: 2 }, weapons: [{name: "Thorn Rifle", atk: 4, acc: "3+", rng: 10, pwr: "2/4", sr: "-"}, {name: "Vine Lash", atk: 4, acc: "3+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "thornweaver", name: "Thornweaver Prime", role: "Leader", tags: ["Leader", "Dryad"], ability: { name: "Ironbark Resilience", desc: "All friendly Living Grove operatives get +1 DEF." }, special: { name: "Command", cost: "0", desc: "Once per battle, during this operative's activation, for free, you can command a friendly operative from your faction to complete 1 free Generic Action. If that action would make that friendly unit move, it can only move a maximum of 2 hexes." }, stats: { hp: 7, def: 4, acc: "3+", move: 5, al: 2 }, weapons: [{name: "Thorn Rifle", atk: 4, acc: "3+", rng: 10, pwr: "2/4", sr: "-"}, {name: "Vine Lash", atk: 4, acc: "3+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "healer", name: "Willowshade Healer", role: "Operative", tags: ["Spirit Healer", "Dryad"], ability: { name: "Healer", desc: "Supports with magic." }, special: { name: "Ancestral Mending", cost: "1", desc: "Select a friendly unit within 6 hexes. For the next (2d3 + 2) activations, heal that friendly unit for 1 health.\n*Note: The friendly unit only needs to be within 6 hexes when this ability is cast.*" }, stats: { hp: 7, def: 4, acc: "3+", move: 5, al: 2 }, weapons: [{name: "Thorn Rifle", atk: 4, acc: "3+", rng: 10, pwr: "2/4", sr: "-"}, {name: "Vine Lash", atk: 4, acc: "3+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "scout", name: "Bramble Scout", role: "Operative", tags: ["Dryad", "Spotter", "Tech Specialist"], ability: { name: "Got a Plan", desc: "This operative can use this ability to perform one mission or objective action for free, during its activation." }, special: { name: "Spot", cost: "1", desc: "Selects a visible enemy target to be spotted. When a friendly unit within 3 hexes of this unit is shooting a spotted enemy, its shooting weapons get lethal 5+. An enemy is no longer spotted if it's currently not visible to this unit, or until one of the following happens:\n- This unit is killed\n- This unit uses this action again\n- The next time this operative activates" }, stats: { hp: 7, def: 4, acc: "3+", move: 5, al: 2 }, weapons: [{name: "Thorn Rifle", atk: 4, acc: "3+", rng: 10, pwr: "2/4", sr: "-"}, {name: "Vine Lash", atk: 4, acc: "3+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "warden", name: "Grove Warden", role: "Operative", tags: ["Dryad", "Comms Specialist"], ability: { name: "Defense Beacon", desc: "This operative counts as 1 additional AL when determining control of a mission or objective marker. This is not a change to this operative's AL stat." }, special: { name: "Relay Orders", cost: "1", desc: "Give a friendly unit within 6 hexes an additional Action Limit until the end of their next activation." }, stats: { hp: 7, def: 4, acc: "3+", move: 5, al: 2 }, weapons: [{name: "Thorn Rifle", atk: 4, acc: "3+", rng: 10, pwr: "2/4", sr: "-"}, {name: "Vine Lash", atk: 4, acc: "3+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "guardian", name: "Ironbark Guardian", role: "Operative", tags: ["Treant", "Heavy Gunner", "Blademaster"], ability: { name: "Skilled Fighter", desc: "Has +3 DEF against melee attacks." }, secondaryAbility: { name: "Modifier", desc: "This operative has -1 Move Stat (to a minimum of 5)." }, special: null, stats: { hp: 16, def: 6, acc: "3+", move: 5, al: 3 }, weapons: [{name: "Ancient Barrage", atk: 4, acc: "3+", rng: 10, pwr: "5/6", sr: "-"}, {name: "Grove Cannon", atk: 4, acc: "3+", rng: 12, pwr: "4/6", sr: "-"}, {name: "Crushing Branches", atk: 4, acc: "3+", rng: "Melee", pwr: "5/6", sr: "-"}] },
            { id: "sentinel", name: "Grove Sentinel", role: "Operative", tags: ["Treant", "Gunner (Rocket Launcher)"], ability: { name: "Artillery", desc: "Long range support." }, special: null, stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 }, weapons: [{name: "Seedpod Launcher", atk: 4, acc: "3+", rng: 12, pwr: "2/5", sr: "Blast 2"}, {name: "Grove Cannon", atk: 4, acc: "3+", rng: 12, pwr: "4/6", sr: "-"}, {name: "Crushing Branches", atk: 4, acc: "3+", rng: "Melee", pwr: "5/6", sr: "-"}] }
        ]
    },

    // --- 9. THORNLINGS ---
    "thornlings": {
        name: "The Thornlings",
        species: "Goblin",
        flavor: "Horde tactics focused on collecting loot to buff the team.",
        stats: { hp: 10, def: 4, acc: "4+", move: 6, al: 2 },
        radar: [3, 4, 5, 5, 6],
        teamRule: { name: "Treasure!", desc: "Whenever a Goblin performs a mission action or the \"Look for Treasure\" action, roll a d6: on a 4+, you find a treasure token. The amount of treasure tokens you're holding can give buffs:\n\n| Tokens | Buff |\n|---|---|\n| 2+ | +1 DEF (for the Goblin) |\n| 4+ | Your Faction gets ACC 3+ |\n| 6+ | Your Faction gets +1 DEF (for a total of +2) |\n| 8+ | Add +1 Normal Damage |\n| 10+ | Your Faction gets +1 Action Limit (AL) |\n\n### Special Action: Look for Treasure\nUntil you move next, this unit has +1 DEF. This action cannot be performed within your drop zone." },
        comp: {
            leaders: "Choose 1",
            operatives: "Choose 5"
        },
        roster: [
            { id: "goldtooth", name: "Boss", role: "Leader", tags: ["Leader"], ability: { name: "Treasure Hoarder", desc: "You successfully find treasure on a 3+ (instead of a 4+)" }, special: { name: "Command", cost: "0", desc: "Once per battle, during this operative's activation, for free, you can command a friendly operative from your faction to complete 1 free Generic Action. If that action would make that friendly unit move, it can only move a maximum of 2 hexes." }, stats: { hp: 10, def: 4, acc: "4+", move: 6, al: 2 }, weapons: [{name: "Scrap Pistol", atk: 4, acc: "4+", rng: 10, pwr: "2/4", sr: "-"}, {name: "Rusty Blade", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "shinygrab", name: "Chieftain", role: "Leader", tags: ["Leader"], ability: { name: "Safety in Numbers", desc: "All friendly Thornling units get" }, special: { name: "Command", cost: "0", desc: "Once per battle, during this operative's activation, for free, you can command a friendly operative from your faction to complete 1 free Generic Action. If that action would make that friendly unit move, it can only move a maximum of 2 hexes." }, stats: { hp: 10, def: 4, acc: "4+", move: 6, al: 2 }, weapons: [{name: "Scrap Pistol", atk: 4, acc: "4+", rng: 10, pwr: "2/4", sr: "-"}, {name: "Rusty Blade", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "guard", name: "Treasure Guard", role: "Operative", tags: ["Blademaster"], ability: { name: "Skilled Fighter", desc: "Has +3 DEF against melee attacks." }, special: null, stats: { hp: 10, def: 4, acc: "4+", move: 6, al: 2 }, weapons: [{name: "Scrap Pistol", atk: 4, acc: "4+", rng: 10, pwr: "2/4", sr: "-"}, {name: "Rusty Hatchet", atk: 4, acc: "4+", rng: "Melee", pwr: "4/5", sr: "-"}] },
            { id: "gunner", name: "Scrap Gunner", role: "Operative", tags: ["Gunner (Flamer)", "Grenadier (Frag)"], ability: { name: "Explosives", desc: "Uses Blast weapons." }, special: null, stats: { hp: 10, def: 4, acc: "4+", move: 6, al: 2 }, weapons: [{name: "Junk Burner", atk: 4, acc: "2+", rng: 6, pwr: "3/4", sr: "-"}, {name: "Boom Sticks", atk: 4, acc: "3+", rng: 6, pwr: "2/4", sr: "Blast 2"}, {name: "Scrap Pistol", atk: 4, acc: "4+", rng: 10, pwr: "2/4", sr: "-"}, {name: "Rusty Blade", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "sniper", name: "Loot Sniper", role: "Operative", tags: ["Sniper"], ability: { name: "Roll", desc: "After shooting with the stationary profile, this unit may move 1 hex for free." }, special: null, stats: { hp: 10, def: 4, acc: "4+", move: 6, al: 2 }, weapons: [{name: "Loot Rifle (Stationary)", atk: 4, acc: "2+", rng: 16, pwr: "3/6", sr: "Stationary"}, {name: "Loot Rifle", atk: 4, acc: "3+", rng: 12, pwr: "3/5", sr: "-"}, {name: "Scrap Pistol", atk: 4, acc: "4+", rng: 10, pwr: "2/4", sr: "-"}, {name: "Rusty Blade", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "medic", name: "Goblin Medic", role: "Operative", tags: ["Medic"], ability: { name: "Revive", desc: "Once per Turning Point, whenever a friendly unit within 3 hexes would drop below 1 health from any damage that is not from melee, set that friendly unit's health to 1 after the action is complete." }, special: { name: "Bandage", cost: "1", desc: "Heal a friendly unit within 2 hexes for d3 + 2. This can't be used on a friendly unit that has been revived this turn." }, stats: { hp: 10, def: 4, acc: "4+", move: 6, al: 2 }, weapons: [{name: "Scrap Pistol", atk: 4, acc: "4+", rng: 10, pwr: "2/4", sr: "-"}, {name: "Rusty Blade", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "seeker", name: "Fortune Seeker", role: "Operative", tags: ["Tech Specialist", "Spotter"], ability: { name: "Got a Plan", desc: "This operative can use this ability to perform one mission or objective action for free, during its activation." }, special: { name: "Spot", cost: "1", desc: "Selects a visible enemy target to be spotted. When a friendly unit within 3 hexes of this unit is shooting a spotted enemy, its shooting weapons get lethal 5+. An enemy is no longer spotted if it's currently not visible to this unit, or until one of the following happens:\n- This unit is killed\n- This unit uses this action again\n- The next time this operative activates" }, stats: { hp: 10, def: 4, acc: "4+", move: 6, al: 2 }, weapons: [{name: "Scrap Pistol", atk: 4, acc: "4+", rng: 10, pwr: "2/4", sr: "-"}, {name: "Rusty Blade", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "defender", name: "Hoard Defender", role: "Operative", tags: ["Comms Specialist"], ability: { name: "Defense Beacon", desc: "This operative counts as 1 additional AL when determining control of a mission or objective marker. This is not a change to this operative's AL stat." }, special: { name: "Relay Orders", cost: "1", desc: "Give a friendly unit within 6 hexes an additional Action Limit until the end of their next activation." }, stats: { hp: 10, def: 4, acc: "4+", move: 6, al: 2 }, weapons: [{name: "Scrap Pistol", atk: 4, acc: "4+", rng: 10, pwr: "2/4", sr: "-"}, {name: "Rusty Blade", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "greedy", name: "Greedy Scrapper", role: "Operative", tags: ["Generic Warrior"], ability: { name: "Lucky Find", desc: "This operative always succeeds in finding treasure (this is for \"looking for treasure\" or mission objective actions)" }, special: null, stats: { hp: 10, def: 4, acc: "4+", move: 6, al: 2 }, weapons: [{name: "Scrap Pistol", atk: 4, acc: "4+", rng: 10, pwr: "2/4", sr: "-"}, {name: "Rusty Blade", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-"}] }
        ]
    }
};
