/*	
	THIS IS A SAMPLE CHARACTER SHEET FOR TESTING
*/

var sheet = {
	/*
		############################
			START OF FIRST PAGE
		############################
	*/

	/*
		BASIC CHARACTER INFORMATION
	*/

	character_name: "Keb",
	
	player: "Kevin",
	
	class: "Rogue",

	level: 2,

	career_level: 0,

	race: "halfing",

	alignment: "evil",

	deity: "something",

	size: "small",

	age: 24,

	gender: "Male",

	height: 34,

	weight: 35,

	eyes: "blue",

	hair: "brown",

	skin: "tan",

	/* 
		Ability Names
	*/

	ability_name:{

		str: {
			ability_score: 1,
			ability_mod: 1,
			temp_score: 1,
			temp_mod: 1,
		},

		dex: {
			ability_score: 2,
			ability_mod: 2,
			temp_score: 2,
			temp_mod: 2,
		},

		con: {
			ability_score: 3,
			ability_mod: 3,
			temp_score: 3,
			temp_mod: 3,
		},

		int: {
			ability_score: 4,
			ability_mod: 4,
			temp_score: 4,
			temp_mod: 4,
		},

		wis: {
			ability_score: 5,
			ability_mod: 5,
			temp_score: 5,
			temp_mod: 5,
		},

		cha: {
			ability_score: 6,
			ability_mod: 6,
			temp_score: 6,
			temp_mod: 6,
		},

	},


	/*
		Hit Points
	*/

	hit_points: {

		total: 10,
		current_HP: 8,
		non_lethal_damage: 7,
		wounds: 6,

	},

	/*
		Armor Class
	*/

	armor_class:{

		total: 0,
		base : 10,
		armor_bonus: 3,
		shield_bonus: 2,
		dex_mod: 1,
		size_mod: 0,
		natural_armor: -1,
		defelection: -2,
		misc_mod: -3,

	},


	/* 
		Damage reduction
	*/

	damage_reduction: 15,


	/*
		Speed
	*/
	speed: 0,

	touch: 3,

	flat_footed: 2,

	/*
		Initiative
	*/
	initiative:{
		total: 0,
		dex_mod: 1,
		misc_mod: 2,
	},


	/*
		Saving Throws
	*/
	saving_throws:{
		fortitude: {
			total: 0,
			base_save: 2,
			ability_mod: -4,
			magic_mod: 1,
			misc_mod: -1,
			temp_mod: 2, 
		},
		reflex:{
			total : 0,
			base_save: 1,
			ability_mod: 1,
			magic_mod: 1,
			misc_mod: 1,
			temp_mod: 1, 
		},
		will: {
			total : -2,
			base_save: -4,
			ability_mod: 2,
			magic_mod: 6,
			misc_mod: 4,
			temp_mod: 2, 
		},
	},


	/*
		Conditional Modifiers
	*/
	conditional_modifiers : "+2 to everything",


	/*
		Base attack bonus
	*/

	base_attack_bonus: 3,

	/*
		Spell resistance
	*/

	spell_resistance: 5,


	/*
		Grapple
	*/

	grapple:{
		total: 0,
		base_attack_bonus: 0,
		strength_mod: 2,
		size_mod: 1,
		misc_mod: -2,
	},


	/*
		Attacks
	*/	

	attack: {

		attack_1:{
			attack: "Light Sword",
			attack_bonus: 1,
			damage: "3-8",
			critical: "19/20 x 2",
			range: 0,
			type: "Slashing",
			notes: "Glows in the dark",
			ammunation: 0,

		},

		attack_2:{
			attack: "Crossbow",
			attack_bonus: 4,
			damage: "1-4",
			critical: "x3",
			range: 80,
			type: "piercing",
			notes: "doesn't consume ammo",
			ammunation: 50,

		},

		attack_3:{
			attack: "Dager",
			attack_bonus: 1,
			damage: "",
			critical: "",
			range: 0,
			type: "",
			notes: "",
			ammunation: 8,


		},

		attack_4:{
			attack: "Mace",
			attack_bonus: 3,
			damage: "",
			critical: "",
			range: 0,
			type: "",
			notes: "",
			ammunation: 3,


		},

		attack_5:{
			attack: "Greater two-handed axe",
			attack_bonus: 5,
			damage: "",
			critical: "",
			range: 0,
			type: "",
			notes: "",
			ammunation: 0,


		}

	},

	/*
		Skills
	*/

	skills:{

		appraise:{	
			key_ability: "INT",
			skill_mod: 0,
			ability_mod: 0,
			ranks: -4,
			misc_mod: 2,
			learned: 0
		},
		balance:{
			key_ability: "DEX*",
			skill_mod: 0,
			ability_mod: -2,
			ranks: 1,
			misc_mod: 2,
			learned: 0
		},
		bluff:{
			key_ability: "CHA",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0			
		},
		climb:{
			key_ability: "STR*",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		concentration:{
			key_ability: "CON",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		craft_1:{
			key_ability: "INT",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		craft_2:{
			key_ability: "INT",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		craft_3:{
			key_ability: "INT",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		decipher_script:{
			key_ability: "INT",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		diplomacy:{
			key_ability: "CHA",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		disable_device:{
			key_ability: "INT",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 1
		},
		disguise:{
			key_ability: "CHA",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 1
		},
		escape_artist:{
			key_ability: "DEX*",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 1
		},
		forgery:{
			key_ability: "INT",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		gather_information:{
			key_ability: "CHA",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		handle_animal:{
			key_ability: "CHA",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		heal:{
			key_ability: "WIS",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		hide:{
			key_ability: "DEX*",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		intimidate:{
			key_ability: "CHA",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		jump:{
			key_ability: "STR*",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		knowledge_1:{
			key_ability: "INT",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		knowledge_2:{
			key_ability: "INT",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		knowledge_3:{
			key_ability: "INT",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 1
		},
		knowledge_4:{
			key_ability: "INT",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 1
		},
		knowledge_5:{
			key_ability: "INT",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		listen:{
			key_ability: "WIS",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		move_silently:{
			key_ability: "DEX*",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		open_lock:{
			key_ability: "DEX",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		perform_1:{
			key_ability: "CHA",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 1
		},
		perform_2:{
			key_ability: "CHA",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		perform_3:{
			key_ability: "CHA",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		profession_1:{
			key_ability: "WIS",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 1
		},
		profession_2:{
			key_ability: "WIS",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		ride:{
			key_ability: "DEX",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 1
		},
		search:{
			key_ability: "INT",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		sense_motive:{
			key_ability: "WIS",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		sleight_of_hand:{
			key_ability: "DEX*",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		spellcraft:{
			key_ability: "INT",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		spot:{
			key_ability: "WIS",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		survival:{
			key_ability: "WIS",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		swim:{
			key_ability: "STR*",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		tumble:{
			key_ability: "DEX*",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 1
		},
		use_magic_device:{
			key_ability: "CHA",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 1
		},
		use_rope:{
			key_ability: "DEX",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 1
		},
		blank_1:{
			key_ability: "",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		blank_2:{
			key_ability: "",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		blank_3:{
			key_ability: "",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},

	},


	/*
		############################
			END OF FIRST PAGE
		############################
	*/


	/*
		############################
			START OF SECOND PAGE
		############################
	*/


	/*
		Campaign
	*/
	campaign: "Something about something",

	/*
		Experience
	*/
	experience_points : 3506, 

	/*
		Gear
	*/

	gear:{
		armor_item: {
			name: "Old armor",
			type: "leather chest",
			ac_bonus: 2,
			max_dex: 5,
			check_penalty: -5,
			spell_failure: 5,
			speed: 20,
			weight: 15,
			special_properties: "-20 to all dice rolls",
		},

		shield_item: {
			name: "Dark steel shield",
			ac_bonus : 1,
			weight: 8,
			check_penalty: 6,
			spell_failure: 10,
			special_properties : "Extra enforced buckles",

		},

		protective_item_1: {
			name: "Ring of Jordan",
			ac_bonus: 25,
			weight: 0.05,
			special_properties: "+50 HP",

		},

		protective_item_2: {
			name: "Necklace of Luck",
			ac_bonus: 2,
			weight: 0.10,
			special_properties: "Find 25% extra gold",
		},
		/*
			33 items
		*/
		possessions: {
			light_load: 0,
			medium_load: 0,
			heavy_load: 0,
			lift_over_head: 0,
			lift_off_ground:0,
			push_or_drag:0,
			total_weight: 0,

			items:{
				item_1:{
					name:"Backpack",
					pg: 0,
					wt: 5,
				},
				item_2:{
					name:"Candles",
					pg: 0,
					wt: 3,
				},
				item_3:{
					name:"Deer Meet",
					pg: 3,
					wt: 0,
				},
				item_4:{
					name:"Flint & Steel",
					pg: 0,
					wt: 0.5,
				},
				item_5:{
					name:"Lantern",
					pg: 0,
					wt: 7,
				},
				item_6:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_7:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_8:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_9:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_10:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_11:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_12:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_13:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_14:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_15:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_16:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_17:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_18:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_19:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_20:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_21:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_22:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_23:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_24:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_25:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_26:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_27:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_28:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_29:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_30:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_31:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_32:{
					name:"",
					pg: 0,
					wt: 0,
				},
				item_33:{
					name:"",
					pg: 0,
					wt: 0,
				},
			},

			},
		},

		money:{
			cp:0,
			sp:0,
			gp:0,
			pp:0
		},

		/*
			12 Feats
		*/


		feats:{

			feat_1: "Multi-shot",
			feat_2: "Spike trap",
			feat_3: "Ultra tumble",
			feat_4: "Quick shot",
			feat_5: "",
			feat_6: "",
			feat_7: "",
			feat_8: "",
			feat_9: "",
			feat_10: "",
			feat_11: "",
			feat_12: ""

		},


	 	special_abilites:{


			ability_1: "Double cast",
			ability_2: "Cone of Flames",
			ability_3: "",
			ability_4: "",
			ability_5: "",
			ability_6: "",
			ability_7: "",
			ability_8: "",
			ability_9: "",
			ability_10: "",
			ability_11: "",
			ability_12: "",
			ability_13: "",
			ability_14: "",
			ability_15: "",
			ability_16: "",
			ability_17: "",
			ability_18: "",
			ability_19: "",
			ability_20: "",
			ability_21: "",
			ability_22: "",
			ability_23: "",


	 	},

	 	languages:{
			language_1: "Cow",
			language_2: "Dwarvish",
			language_3: "Elfvish",
			language_4: "",
			language_5: "",
			language_6: "",
	 	},

	 	spells:{
	 		domain_specialty_school:"",
	 		s0: "",
	 		s1: "",
	 		s2: "",
	 		s3: "",
	 		s4: "",
	 		s5: "",
	 		s6: "",
	 		s7: "",
	 		s8: "",
	 		s9: "",
	 		spell_save:0,
	 		arcane_spell_failure: 0,
	 		conditional_mod: 0,
	 	}





};