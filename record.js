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
			ability_score: 0,
			ability_mod: 0,
			temp_score: 0,
			temp_mod: 0,
		},

		dex: {
			ability_score: 0,
			ability_mod: 0,
			temp_score: 0,
			temp_mod: 0,
		},

		con: {
			ability_score: 0,
			ability_mod: 0,
			temp_score: 0,
			temp_mod: 0,
		},

		int: {
			ability_score: 0,
			ability_mod: 0,
			temp_score: 0,
			temp_mod: 0,
		},

		wis: {
			ability_score: 0,
			ability_mod: 0,
			temp_score: 0,
			temp_mod: 0,
		},

		cha: {
			ability_score: 0,
			ability_mod: 0,
			temp_score: 0,
			temp_mod: 0,
		},

	},


	/*
		Hit Points
	*/

	hit_points: {

		total: 0,
		current_HP: 0,
		non_lethal_damage: 0,

	},

	/*
		Armor Class
	*/

	armor_class:{

		total: 0,
		base : 10,
		armor_bonus: 0,
		shield_bonus: 0,
		dex_mod: 0,
		size_mod: 0,
		natural_armor: 0,
		defelection: 0,
		misc_mod: 0,

	},


	/* 
		Damage reduction
	*/

	damage_reduction: 0,


	/*
		Speed
	*/
	speed: 0,

	touch: 0,

	flat_footed: 0,

	/*
		Initiative
	*/
	initiative:{
		total: 0,
		dex_mod: 0,
		misc_mod: 0,
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
		Conditional modifiers not included for saving throws
	*/


	/*
		Base attack bonus
	*/

	base_attack_bonus: 0,

	/*
		Spell resistance
	*/

	spell_resistance: 0,


	/*
		Grapple
	*/

	grapple:{
		total: 0,
		base_attack_bonus: 0,
		strength_mod: 0,
		size_mod: 0,
		misc_mod: 0,
	},


	/*
		Attacks
	*/	

	attack_1:{
		attack: "",
		attack_bonus: 0,
		damage: "",
		critical: "",
		range: "",
		type: "",
		notes: "",
		ammunation: 0,

	},

	attack_2:{
		attack: "",
		attack_bonus: 0,
		damage: "",
		critical: "",
		range: "",
		type: "",
		notes: "",
		ammunation: 0,

	},

	attack_3:{
		attack: "",
		attack_bonus: 0,
		damage: "",
		critical: "",
		range: "",
		type: "",
		notes: "",
		ammunation: 0,


	},

	attack_4:{
		attack: "",
		attack_bonus: 0,
		damage: "",
		critical: "",
		range: "",
		type: "",
		notes: "",
		ammunation: 0,


	},

	attack_5:{
		attack: "",
		attack_bonus: 0,
		damage: "",
		critical: "",
		range: "",
		type: "",
		notes: "",
		ammunation: 0,


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
			learned: 0
		},
		disguise:{
			key_ability: "CHA",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		escape_artist:{
			key_ability: "DEX*",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
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
			learned: 0
		},
		knowledge_4:{
			key_ability: "INT",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
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
			learned: 0
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
			learned: 0
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
			learned: 0
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
			learned: 0
		},
		use_magic_device:{
			key_ability: "CHA",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		use_rope:{
			key_ability: "DEX",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
			learned: 0
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
	campaign: " ",

	/*
		Experience
	*/
	experience_points : 0, 

	/*
		Gear
	*/

	gear:{
		armor_item: {
			name: "",
			type: "",
			ac_bonus: 0,
			max_dex: 0,
			check_penalty: 0,
			spell_failure: 0,
			speed: 0,
			weight: 0,
			special_properties: "",
		},

		shield_item: {
			name: "",
			ac_bonus : 0,
			weight: 0,
			check_penalty: 0,
			spell_failure: 0,
			special_properties : "",

		},

		protective_item_1: {
			name: "",
			ac_bonus: 0,
			weight: 0,
			special_properties: "",

		},

		protective_item_2: {
			name: "",
			ac_bonus: 0,
			weight: 0,
			special_properties: "",
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

			item_1:{
				name:"",
				pg: 0,
				wt: 0,
			},
			item_2:{
				name:"",
				pg: 0,
				wt: 0,
			},
			item_3:{
				name:"",
				pg: 0,
				wt: 0,
			},
			item_4:{
				name:"",
				pg: 0,
				wt: 0,
			},
			item_5:{
				name:"",
				pg: 0,
				wt: 0,
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

			feat_1: "",
			feat_2: "",
			feat_3: "",
			feat_4: "",
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


			ability_1: "",
			ability_2: "",
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
			lang_1: "",
			lang_2: "",
			lang_3: "",
			lang_4: "",
			lang_5: "",
			lang_6: "",
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





	}










};