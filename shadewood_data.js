const factionData = {
    // --- 1. THE BRAMBLEGUARD ---
    "brambleguard": {
        name: "The Brambleguard",
        species: "Minotaur",
        flavor: "Powerhouse faction defined by high durability and aggressive crowd control.",
        stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 },
        radar: [9, 8, 8, 4, 6], // HP, DEF, Melee, Ranged, Move
        teamRule: {
            name: "Mess with the Bull, Get the Horns",
            desc: "Charge deals d3+1 dmg and knocks back 1 hex. If blocked by terrain, d3+3 dmg. If blocked by unit, blocking unit takes d3."
        },
        roster: [
            {
                id: "ironhorn", name: "Warchief Ironhorn", role: "Leader", tags: ["Leader"],
                ability: { name: "Unstoppable Charge", desc: "Buffs knockback to 2 hexes. Units move as far as possible without overlapping." },
                special: { name: "Command", cost: "0", desc: "Order friendly unit to do 1 free Generic Action (Max move 2 hexes)." },
                stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 },
                weapons: [
                    { name: "Blazing Horn Flamer", atk: 4, acc: "2+", rng: "6", pwr: "3/3", sr: "AOE 2" },
                    { name: "Battle Axe", atk: 4, acc: "3+", rng: "Melee", pwr: "3/5", sr: "-" }
                ]
            },
            {
                id: "stonehoof", name: "Champion Stonehoof", role: "Leader", tags: ["Leader"],
                ability: { name: "Iron Will", desc: "All friendly operatives get +2 DEF against shooting attacks." },
                special: { name: "Command", cost: "0", desc: "Order friendly unit to do 1 free Generic Action (Max move 2 hexes)." },
                stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 },
                weapons: [ { name: "Blazing Horn Flamer", atk: 4, acc: "2+", rng: "6", pwr: "3/3", sr: "AOE 2" }, { name: "Battle Axe", atk: 4, acc: "3+", rng: "Melee", pwr: "3/5", sr: "-" } ]
            },
            {
                id: "berserker", name: "Berserker Blademaster", role: "Operative", tags: ["Blademaster", "Tech Specialist"],
                ability: { name: "Skilled Fighter", desc: "Has +3 DEF against melee attacks.\n\n**Got a Plan:** Perform 1 free mission/objective action." },
                special: null,
                stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 },
                weapons: [ { name: "Dual Axes", atk: 4, acc: "3+", rng: "Melee", pwr: "4/5", sr: "-" } ]
            },
            {
                id: "medic", name: "Battle Medic", role: "Operative", tags: ["Medic"],
                ability: { name: "Revive", desc: "Once per TP, if ally within 3 hexes drops <1 HP (non-melee), set HP to 1." },
                special: { name: "Bandage", cost: "1", desc: "Heal friendly unit within 2 hexes for d3 + 2." },
                stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 },
                weapons: [ { name: "Blazing Horn Flamer", atk: 4, acc: "2+", rng: "6", pwr: "3/3", sr: "AOE 2" }, { name: "Battle Axe", atk: 4, acc: "3+", rng: "Melee", pwr: "3/5", sr: "-" } ]
            },
            {
                id: "grenadier", name: "Bramble Grenadier", role: "Operative", tags: ["Grenadier", "Spotter"],
                ability: { name: "AOE Specialist", desc: "Weapons utilize Blast 2." },
                special: { name: "Spot", cost: "1", desc: "Select visible enemy. Allies within 3 hexes get Lethal 5+ against target." },
                stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 },
                weapons: [
                    { name: "Bramble Bombs", atk: 4, acc: "3+", rng: "6", pwr: "2/4", sr: "Blast 2" },
                    { name: "Breaching Charges", atk: 4, acc: "3+", rng: "6", pwr: "5/6", sr: "-" },
                    { name: "Battle Axe", atk: 4, acc: "3+", rng: "Melee", pwr: "3/5", sr: "-" }
                ]
            },
            {
                id: "warrior", name: "Bull Warrior", role: "Operative", tags: ["Generic Warrior"],
                ability: { name: "Scorching Impact", desc: "Charge Knockback applies -2 DEF to enemy." },
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
        stats: { hp: 10, def: 5, acc: "4+", move: 5, al: 2 },
        radar: [5, 7, 7, 7, 5],
        teamRule: {
            name: "Transfusion",
            desc: "Spend 2 HP to upgrade an attack die by 1. Rolling a natural 6 heals 3 HP. Cannot use if below 3 HP."
        },
        roster: [
            {
                id: "sanguine", name: "Sanguine Lord", role: "Leader", tags: ["Leader"],
                ability: { name: "Sanguine Mastery", desc: "On natural 5's, team heals 1 HP from Transfusion." },
                special: { name: "Command", cost: "0", desc: "Order friendly unit to do 1 free Generic Action (Max move 2 hexes)." },
                stats: { hp: 10, def: 5, acc: "4+", move: 5, al: 2 },
                weapons: [ { name: "Blood Rifle", atk: 4, acc: "4+", rng: "10", pwr: "3/4", sr: "-" }, { name: "Sanguine Blade", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-" } ]
            },
            {
                id: "warden", name: "Crimson Warden", role: "Leader", tags: ["Leader"],
                ability: { name: "Warden's Presence", desc: "+1 DEF vs Shooting. Doubled (+2) if Vampire is below half health." },
                special: { name: "Command", cost: "0", desc: "Order friendly unit to do 1 free Generic Action (Max move 2 hexes)." },
                stats: { hp: 10, def: 5, acc: "4+", move: 5, al: 2 },
                weapons: [ { name: "Blood Rifle", atk: 4, acc: "4+", rng: "10", pwr: "3/4", sr: "-" }, { name: "Sanguine Blade", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-" } ]
            },
            {
                id: "artificer", name: "Crimson Artificer", role: "Operative", tags: ["Tech Specialist"],
                ability: { name: "Got a Plan", desc: "Perform 1 free mission/objective action." },
                special: null,
                stats: { hp: 10, def: 5, acc: "4+", move: 5, al: 2 },
                weapons: [ { name: "Blood Rifle", atk: 4, acc: "4+", rng: "10", pwr: "3/4", sr: "-" }, { name: "Sanguine Blade", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-" } ]
            },
            {
                id: "sniper", name: "Duskwatch Sniper", role: "Operative", tags: ["Sniper"],
                ability: { name: "Roll", desc: "After shooting stationary profile, move 1 hex for free." },
                special: null,
                stats: { hp: 10, def: 5, acc: "4+", move: 5, al: 2 },
                weapons: [ { name: "Blood Hawk (Static)", atk: 4, acc: "2+", rng: "16", pwr: "3/6", sr: "Stationary" }, { name: "Blood Hawk", atk: 4, acc: "3+", rng: "12", pwr: "3/5", sr: "-" } ]
            },
            {
                id: "gunner", name: "Bloodfire Gunner", role: "Operative", tags: ["Gunner"],
                ability: { name: "Heavy Ordnance", desc: "Carries specialized heavy weaponry." },
                special: null,
                stats: { hp: 10, def: 5, acc: "4+", move: 5, al: 2 },
                weapons: [ { name: "Bloodfire Plasma", atk: 4, acc: "4+", rng: "12", pwr: "4/5", sr: "Align 1" }, { name: "Crimson Launcher", atk: 4, acc: "4+", rng: "12", pwr: "2/5", sr: "Blast 2" } ]
            },
            {
                id: "communicator", name: "Nightveil Communicator", role: "Operative", tags: ["Comms Specialist"],
                ability: { name: "Coordinator", desc: "Facilitates team movement." },
                special: { name: "Reposition", cost: "1", desc: "Choose friendly operative within 6 hexes. They perform a free Dash." },
                stats: { hp: 10, def: 5, acc: "4+", move: 5, al: 2 },
                weapons: [ { name: "Blood Rifle", atk: 4, acc: "4+", rng: "10", pwr: "3/4", sr: "-" }, { name: "Sanguine Blade", atk: 4, acc: "4+", rng: "Melee", pwr: "2/4", sr: "-" } ]
            },
            {
                id: "duelist", name: "Crimson Duelist", role: "Operative", tags: ["Blademaster"],
                ability: { name: "Skilled Fighter", desc: "Has +3 DEF against melee attacks." },
                special: null,
                stats: { hp: 10, def: 5, acc: "4+", move: 5, al: 2 },
                weapons: [ { name: "Blood Pistol", atk: 4, acc: "4+", rng: "6", pwr: "3/4", sr: "-" }, { name: "Blood Reaver", atk: 4, acc: "4+", rng: "Melee", pwr: "4/5", sr: "-" } ]
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
        teamRule: { name: "Galloping Shot", desc: "May shoot in the middle of a move/dash. Must stop to shoot, then continue remaining move." },
        roster: [
            { id: "herd", name: "Herd Chieftain", role: "Leader", tags: ["Leader"], ability: { name: "Relentless Pursuit", desc: "Galloping Shot can be used during a charge." }, special: { name: "Command", cost: "0", desc: "Order friendly unit to do 1 free Generic Action (Max move 2 hexes)." }, stats: { hp: 16, def: 6, acc: "3+", move: 7, al: 3 }, weapons: [{name: "Warden Rifle", atk: 4, acc: "3+", rng: 10, pwr: "3/5", sr: "-"}, {name: "Hooves", atk: 4, acc: "3+", rng: "Melee", pwr: "3/4", sr: "-"}] },
            { id: "warden", name: "Warden Commander", role: "Leader", tags: ["Leader"], ability: { name: "Warden's Resolve", desc: "All Warden Rifles get Align 1." }, special: { name: "Command", cost: "0", desc: "Order friendly unit to do 1 free Generic Action (Max move 2 hexes)." }, stats: { hp: 16, def: 6, acc: "3+", move: 7, al: 3 }, weapons: [{name: "Warden Rifle", atk: 4, acc: "3+", rng: 10, pwr: "3/5", sr: "-"}, {name: "Hooves", atk: 4, acc: "3+", rng: "Melee", pwr: "3/4", sr: "-"}] },
            { id: "lancer", name: "Thunder Lancer", role: "Operative", tags: ["Gunner Melta", "Tech Specialist"], ability: { name: "Got a Plan", desc: "Perform one mission/objective action for free." }, special: null, stats: { hp: 16, def: 6, acc: "3+", move: 7, al: 3 }, weapons: [{name: "Thunder Lance", atk: 4, acc: "3+", rng: 6, pwr: "6/7", sr: "-"}, {name: "Warden Rifle", atk: 4, acc: "3+", rng: 10, pwr: "3/5", sr: "-"}] },
            { id: "outrider", name: "Outrider Gunner", role: "Operative", tags: ["Gunner Plasma", "Gunner Rocket"], ability: { name: "Heavy Support", desc: "Mobile heavy weapons platform." }, special: null, stats: { hp: 16, def: 6, acc: "3+", move: 7, al: 3 }, weapons: [{name: "Skybreaker (Rocket)", atk: 4, acc: "3+", rng: 12, pwr: "2/5", sr: "Blast 2"}, {name: "Skybreaker (Plasma)", atk: 4, acc: "3+", rng: 12, pwr: "4/5", sr: "Align 1"}] },
            { id: "shaman", name: "Primal Shaman", role: "Operative", tags: ["Spirit Healer"], ability: { name: "Healer", desc: "Supports the herd with magic." }, special: { name: "Ancestral Mending", cost: "1", desc: "Select friendly unit within 6. For next 2d3+2 activations, heal 1 HP." }, stats: { hp: 16, def: 6, acc: "3+", move: 7, al: 3 }, weapons: [{name: "Warden Rifle", atk: 4, acc: "3+", rng: 10, pwr: "3/5", sr: "-"}, {name: "Hooves", atk: 4, acc: "3+", rng: "Melee", pwr: "3/4", sr: "-"}] },
            { id: "stampede", name: "Stampede Warrior", role: "Operative", tags: ["Generic Warrior"], ability: { name: "Trample", desc: "Warden Rifle gets Critical 5 when using Galloping Shot." }, special: null, stats: { hp: 16, def: 6, acc: "3+", move: 7, al: 3 }, weapons: [{name: "Warden Rifle", atk: 4, acc: "3+", rng: 10, pwr: "3/5", sr: "-"}, {name: "Hooves", atk: 4, acc: "3+", rng: "Melee", pwr: "3/4", sr: "-"}] }
        ]
    },

    // --- 4. SKYDANCERS ---
    "skydancers": {
        name: "Skydancers",
        species: "Fairy",
        flavor: "Agile flyers who use fairy rings to teleport across the battlefield.",
        stats: { hp: 7, def: 4, acc: "4+", move: 7, al: 2 },
        radar: [3, 4, 4, 6, 10],
        teamRule: { name: "Fairy Rings", desc: "Place 3 rings. Fairies in reach of a ring can spend 1 AP to teleport to another ring (Counts as Major Move)." },
        roster: [
            { id: "starwing", name: "Queen Starwing", role: "Leader", tags: ["Leader"], ability: { name: "Wings of Freedom", desc: "Friendly Skydancers teleport for free (0 AP)." }, special: { name: "Command", cost: "0", desc: "Order friendly unit to do 1 free Generic Action (Max move 2 hexes)." }, stats: { hp: 7, def: 4, acc: "4+", move: 7, al: 2 }, weapons: [{name: "Sky Rifle", atk: 4, acc: "4+", rng: 12, pwr: "2/4", sr: "-"}] },
            { id: "moonwhisper", name: "Prince Moonwhisper", role: "Leader", tags: ["Leader"], ability: { name: "Precision Guidance", desc: "Sky Pistols/Rifles get Align 1." }, special: { name: "Command", cost: "0", desc: "Order friendly unit to do 1 free Generic Action (Max move 2 hexes)." }, stats: { hp: 7, def: 4, acc: "4+", move: 7, al: 2 }, weapons: [{name: "Sky Rifle", atk: 4, acc: "4+", rng: 12, pwr: "2/4", sr: "-"}] },
            { id: "gunner", name: "Aerial Gunner", role: "Operative", tags: ["Gunner"], ability: { name: "Aerial Superiority", desc: "Attacks from above." }, special: null, stats: { hp: 7, def: 4, acc: "4+", move: 7, al: 2 }, weapons: [{name: "Starfire Caster", atk: 4, acc: "4+", rng: 12, pwr: "4/5", sr: "Align 1"}, {name: "Windstorm Burner", atk: 4, acc: "2+", rng: 6, pwr: "3/4", sr: "-"}] },
            { id: "sniper", name: "Windrider Sniper", role: "Operative", tags: ["Sniper"], ability: { name: "Roll", desc: "Move 1 hex after stationary shot." }, special: null, stats: { hp: 7, def: 4, acc: "4+", move: 7, al: 2 }, weapons: [{name: "Whisperwind (Static)", atk: 4, acc: "2+", rng: 16, pwr: "3/6", sr: "Stationary"}, {name: "Whisperwind", atk: 4, acc: "3+", rng: 12, pwr: "3/5", sr: "-"}] },
            { id: "scout", name: "Windcaller Scout", role: "Operative", tags: ["Spotter"], ability: { name: "Spotter", desc: "Identifies targets." }, special: { name: "Spot", cost: "1", desc: "Select visible enemy. Allies within 3 hexes get Lethal 5+ against target." }, stats: { hp: 7, def: 4, acc: "4+", move: 7, al: 2 }, weapons: [{name: "Sky Rifle", atk: 4, acc: "4+", rng: 12, pwr: "2/4", sr: "-"}] },
            { id: "guardian", name: "Sky Guardian", role: "Operative", tags: ["Generic Warrior"], ability: { name: "Ring Guard", desc: "Sky Rifle gets +1/+1 Power when within Reach of a Fairy Ring." }, special: null, stats: { hp: 7, def: 4, acc: "4+", move: 7, al: 2 }, weapons: [{name: "Sky Rifle", atk: 4, acc: "4+", rng: 12, pwr: "2/4", sr: "-"}] }
        ]
    },

    // --- 5. THE ROTCALLERS ---
    "rotcallers": {
        name: "The Rotcallers",
        species: "Myconid",
        flavor: "Fungal warriors who create zones of decay that buff allies and weaken enemies.",
        stats: { hp: 10, def: 5, acc: "3+", move: 6, al: 2 },
        radar: [6, 7, 5, 6, 5],
        teamRule: { name: "Death Bloom", desc: "When Myconid dies, drop token. Area = 1 + Turn Number. Allies on Bloom get +1 Crit Dmg. Enemies get -3 DEF, -1 Move." },
        roster: [
            { id: "patriarch", name: "Patriarch Sporeheart", role: "Leader", tags: ["Leader"], ability: { name: "Spreading Rot", desc: "Bloom tokens have +1 Hex Range." }, special: { name: "Command", cost: "0", desc: "Order friendly unit to do 1 free Generic Action (Max move 2 hexes)." }, stats: { hp: 10, def: 5, acc: "3+", move: 6, al: 2 }, weapons: [{name: "Spore Rifle", atk: 4, acc: "3+", rng: 10, pwr: "3/5", sr: "-"}, {name: "Fungal Fists", atk: 4, acc: "3+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "mycelord", name: "Mycelord Blightcap", role: "Leader", tags: ["Leader"], ability: { name: "Fungal Fortitude", desc: "All allies get +2 HP." }, special: { name: "Command", cost: "0", desc: "Order friendly unit to do 1 free Generic Action (Max move 2 hexes)." }, stats: { hp: 10, def: 5, acc: "3+", move: 6, al: 2 }, weapons: [{name: "Spore Rifle", atk: 4, acc: "3+", rng: 10, pwr: "3/5", sr: "-"}] },
            { id: "heavy", name: "Sporebearer Heavy", role: "Operative", tags: ["Heavy Gunner"], ability: { name: "Slow", desc: "-1 Move Stat." }, special: null, stats: { hp: 10, def: 5, acc: "3+", move: 5, al: 2 }, weapons: [{name: "Spore Sprayer", atk: 4, acc: "3+", rng: 10, pwr: "5/6", sr: "-"}] },
            { id: "warden", name: "Bloom Warden", role: "Operative", tags: ["Spotter", "Comms"], ability: { name: "Defense Beacon", desc: "Counts as +1 AL for control." }, special: { name: "Spot", cost: "1", desc: "Select visible enemy. Allies within 3 hexes get Lethal 5+ against target." }, stats: { hp: 10, def: 5, acc: "3+", move: 6, al: 2 }, weapons: [{name: "Spore Rifle", atk: 4, acc: "3+", rng: 10, pwr: "3/5", sr: "-"}] },
            { id: "engineer", name: "Decay Engineer", role: "Operative", tags: ["Tech", "Flamer"], ability: { name: "Got a Plan", desc: "Free mission action." }, special: null, stats: { hp: 10, def: 5, acc: "3+", move: 6, al: 2 }, weapons: [{name: "Blight Burner", atk: 4, acc: "2+", rng: 6, pwr: "3/4", sr: "-"}] },
            { id: "warrior", name: "Rot Warrior", role: "Operative", tags: ["Generic Warrior"], ability: { name: "Bloom Empowerment", desc: "On friendly bloom, Spore Rifle gets Critical 5." }, special: null, stats: { hp: 10, def: 5, acc: "3+", move: 6, al: 2 }, weapons: [{name: "Spore Rifle", atk: 4, acc: "3+", rng: 10, pwr: "3/5", sr: "-"}] }
        ]
    },

    // --- 6. TINKERBRIGHT ---
    "tinkerbright": {
        name: "The Tinkerbright",
        species: "Gnome",
        flavor: "Technological geniuses who use teleportation pads to manipulate the battlefield.",
        stats: { hp: 7, def: 4, acc: "4+", move: 5, al: 2 },
        radar: [3, 4, 6, 8, 9],
        teamRule: { name: "Teleportation Tech", desc: "Special Action: Set Pad. Moving onto pad teleports unit 3 hexes in current direction. Gnomes get +1 Power after teleport. Enemies take damage/debuffs." },
        roster: [
            { id: "engineer", name: "Chief Battle Engineer", role: "Leader", tags: ["Leader"], ability: { name: "Perfected Portals", desc: "After teleporting, weapons get Critical 5+." }, special: { name: "Command", cost: "0", desc: "Order friendly unit to do 1 free Generic Action." }, stats: { hp: 7, def: 4, acc: "4+", move: 5, al: 2 }, weapons: [{name: "Tech Rifle", atk: 4, acc: "4+", rng: 10, pwr: "3/4", sr: "-"}] },
            { id: "tactician", name: "Master Tactician", role: "Leader", tags: ["Leader"], ability: { name: "Precision Targeting", desc: "All weapons get Align 1." }, special: { name: "Command", cost: "0", desc: "Order friendly unit to do 1 free Generic Action." }, stats: { hp: 7, def: 4, acc: "4+", move: 5, al: 2 }, weapons: [{name: "Tech Rifle", atk: 4, acc: "4+", rng: 10, pwr: "3/4", sr: "-"}] },
            { id: "assassin", name: "Teleport Assassin", role: "Operative", tags: ["Blademaster"], ability: { name: "Skilled Fighter", desc: "+3 DEF vs Melee." }, special: null, stats: { hp: 7, def: 4, acc: "4+", move: 5, al: 2 }, weapons: [{name: "Tech Pistol", atk: 4, acc: "4+", rng: 8, pwr: "3/4", sr: "-"}, {name: "Shock Baton", atk: 4, acc: "4+", rng: "Melee", pwr: "4/5", sr: "-"}] },
            { id: "heavy", name: "Heavy Weapons Spec", role: "Operative", tags: ["Heavy Gunner"], ability: { name: "Slow", desc: "-1 Move Stat." }, special: null, stats: { hp: 7, def: 4, acc: "4+", move: 4, al: 2 }, weapons: [{name: "Gnomish Gatling", atk: 4, acc: "4+", rng: 10, pwr: "5/6", sr: "-"}] },
            { id: "artillery", name: "Artillery Specialist", role: "Operative", tags: ["Gunner"], ability: { name: "Versatile", desc: "Choose Rocket, Plasma, or Melta." }, special: null, stats: { hp: 7, def: 4, acc: "4+", move: 5, al: 2 }, weapons: [{name: "Prototype Rockets", atk: 4, acc: "4+", rng: 12, pwr: "2/5", sr: "Blast 2"}] },
            { id: "trooper", name: "Tech Trooper", role: "Operative", tags: ["Generic Warrior"], ability: { name: "Emergency Teleport", desc: "Once per battle, when targeted, teleport 5 hexes via pad to dodge." }, special: null, stats: { hp: 7, def: 4, acc: "4+", move: 5, al: 2 }, weapons: [{name: "Tech Rifle", atk: 4, acc: "4+", rng: 10, pwr: "3/4", sr: "-"}] }
        ]
    },

    // --- 7. WILDKIN PACKS ---
    "wildkin": {
        name: "Wildkin Packs",
        species: "Werewolf",
        flavor: "Savage hunters who frenzy when they smell blood.",
        stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 },
        radar: [9, 8, 9, 3, 7],
        teamRule: { name: "Scent of the Weak", desc: "+1 Critical Power vs enemies not at full health. +1 Charge range vs enemies not at full health." },
        roster: [
            { id: "hunt", name: "Hunt Commander", role: "Leader", tags: ["Leader", "Blademaster"], ability: { name: "Blood Frenzy", desc: "+1 Normal Power in addition to Scent of Weak bonuses." }, special: { name: "Command", cost: "0", desc: "Order friendly unit to do 1 free Generic Action." }, stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 }, weapons: [{name: "Lupine Claws", atk: 4, acc: "3+", rng: "Melee", pwr: "4/5", sr: "-"}] },
            { id: "alpha", name: "Pack Alpha", role: "Leader", tags: ["Leader", "Blademaster"], ability: { name: "Pack Tactics", desc: "Weapons get Align 1 when within 5 hexes of friendly unit." }, special: { name: "Command", cost: "0", desc: "Order friendly unit to do 1 free Generic Action." }, stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 }, weapons: [{name: "Lupine Claws", atk: 4, acc: "3+", rng: "Melee", pwr: "4/5", sr: "-"}] },
            { id: "ravager", name: "Ravager Assault", role: "Operative", tags: ["Blademaster", "Grenadier"], ability: { name: "Skilled Fighter", desc: "+3 DEF vs Melee." }, special: null, stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 }, weapons: [{name: "Pack Grenade", atk: 4, acc: "3+", rng: 6, pwr: "2/5", sr: "Blast 2"}] },
            { id: "suppressor", name: "Moonlit Suppressor", role: "Operative", tags: ["Sniper", "Spotter"], ability: { name: "Skilled Fighter", desc: "+3 DEF vs Melee." }, special: { name: "Spot", cost: "1", desc: "Mark enemy for Lethal 5+." }, stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 }, weapons: [{name: "Moonhowl Rifle", atk: 4, acc: "3+", rng: 12, pwr: "3/5", sr: "-"}] },
            { id: "huntsman", name: "Huntsman", role: "Operative", tags: ["Generic Warrior"], ability: { name: "Relentless Hunter", desc: "If enemy downed, immediately perform 1 free mission action." }, special: null, stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 }, weapons: [{name: "Feral Repeater", atk: 4, acc: "3+", rng: 6, pwr: "2/4", sr: "-"}] }
        ]
    },

    // --- 8. LIVING GROVE ---
    "livinggrove": {
        name: "The Living Grove",
        species: "Treant / Dryad",
        flavor: "A symbiotic team of massive Treants and nimble Dryads.",
        stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 }, // Treant stats as base
        radar: [10, 9, 6, 5, 4],
        teamRule: { name: "Whisper of the Willow", desc: "Dryads can spend 1 AP to make a Treant do a free generic action. Range limits ignored." },
        roster: [
            { id: "elder", name: "Elder Rootwarden", role: "Leader", tags: ["Leader", "Dryad"], ability: { name: "Deep Roots", desc: "Commanded Treants perform 2 actions instead of 1." }, special: { name: "Command", cost: "0", desc: "Order friendly unit to do 1 free Generic Action." }, stats: { hp: 7, def: 4, acc: "3+", move: 5, al: 2 }, weapons: [{name: "Thorn Rifle", atk: 4, acc: "3+", rng: 10, pwr: "2/4", sr: "-"}] },
            { id: "thornweaver", name: "Thornweaver Prime", role: "Leader", tags: ["Leader", "Dryad"], ability: { name: "Ironbark Resilience", desc: "+1 DEF to all allies." }, special: { name: "Command", cost: "0", desc: "Order friendly unit to do 1 free Generic Action." }, stats: { hp: 7, def: 4, acc: "3+", move: 5, al: 2 }, weapons: [{name: "Vine Lash", atk: 4, acc: "3+", rng: "Melee", pwr: "2/4", sr: "-"}] },
            { id: "guardian", name: "Ironbark Guardian", role: "Operative", tags: ["Treant", "Heavy"], ability: { name: "Skilled Fighter", desc: "+3 DEF vs Melee." }, special: null, stats: { hp: 16, def: 6, acc: "3+", move: 5, al: 3 }, weapons: [{name: "Ancient Barrage", atk: 4, acc: "3+", rng: 10, pwr: "5/6", sr: "-"}] },
            { id: "sentinel", name: "Grove Sentinel", role: "Operative", tags: ["Treant", "Gunner"], ability: { name: "Artillery", desc: "Long range support." }, special: null, stats: { hp: 16, def: 6, acc: "3+", move: 6, al: 3 }, weapons: [{name: "Seedpod Launcher", atk: 4, acc: "3+", rng: 12, pwr: "2/5", sr: "Blast 2"}] },
            { id: "scout", name: "Bramble Scout", role: "Operative", tags: ["Dryad", "Spotter"], ability: { name: "Got a Plan", desc: "Free mission action." }, special: { name: "Spot", cost: "1", desc: "Mark enemy for Lethal 5+." }, stats: { hp: 7, def: 4, acc: "3+", move: 5, al: 2 }, weapons: [{name: "Thorn Rifle", atk: 4, acc: "3+", rng: 10, pwr: "2/4", sr: "-"}] }
        ]
    },

    // --- 9. THORNLINGS ---
    "thornlings": {
        name: "The Thornlings",
        species: "Goblin",
        flavor: "Horde tactics focused on collecting loot to buff the team.",
        stats: { hp: 7, def: 4, acc: "4+", move: 6, al: 2 },
        radar: [3, 4, 5, 5, 6],
        teamRule: { name: "Treasure!", desc: "Mission/Treasure actions find token on 4+. Tokens give buffs (Re-rolls, Crits, DEF, Damage)." },
        roster: [
            { id: "goldtooth", name: "Boss Goldtooth", role: "Leader", tags: ["Leader"], ability: { name: "Treasure Hoarder", desc: "Finds treasure on 3+." }, special: { name: "Command", cost: "0", desc: "Order friendly unit to do 1 free Generic Action." }, stats: { hp: 7, def: 4, acc: "4+", move: 6, al: 2 }, weapons: [{name: "Scrap Pistol", atk: 4, acc: "4+", rng: 10, pwr: "2/4", sr: "-"}] },
            { id: "shinygrab", name: "Chieftain Shinygrab", role: "Leader", tags: ["Leader"], ability: { name: "Safety in Numbers", desc: "Buffs nearby goblins." }, special: { name: "Command", cost: "0", desc: "Order friendly unit to do 1 free Generic Action." }, stats: { hp: 7, def: 4, acc: "4+", move: 6, al: 2 }, weapons: [{name: "Scrap Pistol", atk: 4, acc: "4+", rng: 10, pwr: "2/4", sr: "-"}] },
            { id: "guard", name: "Treasure Guard", role: "Operative", tags: ["Blademaster"], ability: { name: "Skilled Fighter", desc: "+3 DEF vs Melee." }, special: null, stats: { hp: 7, def: 4, acc: "4+", move: 6, al: 2 }, weapons: [{name: "Rusty Hatchet", atk: 4, acc: "4+", rng: "Melee", pwr: "4/5", sr: "-"}] },
            { id: "gunner", name: "Scrap Gunner", role: "Operative", tags: ["Gunner"], ability: { name: "Explosives", desc: "Uses Blast weapons." }, special: null, stats: { hp: 7, def: 4, acc: "4+", move: 6, al: 2 }, weapons: [{name: "Boom Sticks", atk: 4, acc: "3+", rng: 6, pwr: "2/4", sr: "Blast 2"}] },
            { id: "sniper", name: "Loot Sniper", role: "Operative", tags: ["Sniper"], ability: { name: "Roll", desc: "Move 1 hex after shooting stationary." }, special: null, stats: { hp: 7, def: 4, acc: "4+", move: 6, al: 2 }, weapons: [{name: "Loot Rifle (Static)", atk: 4, acc: "2+", rng: 16, pwr: "3/6", sr: "Stationary"}] },
            { id: "greedy", name: "Greedy Scrapper", role: "Operative", tags: ["Generic Warrior"], ability: { name: "Lucky Find", desc: "Always succeeds in finding treasure." }, special: null, stats: { hp: 7, def: 4, acc: "4+", move: 6, al: 2 }, weapons: [{name: "Scrap Pistol", atk: 4, acc: "4+", rng: 10, pwr: "2/4", sr: "-"}] }
        ]
    }
};

const ruleDefinitions = {
    "Blast 2": "Attack each enemy within 2 hexes of target.",
    "AOE 2": "Attack each eligible enemy within 2 hexes of target.",
    "Align 1": "Re-roll 1 attack die.",
    "Stationary": "Cannot move before or after shooting (except Roll)."
};