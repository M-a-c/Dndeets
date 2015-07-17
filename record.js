var sheet = {

	/*
		BASIC CHARACTER INFORMATION
	*/

	character_name: "",
	
	player: "",
	
	class: "",

	level: 0,

	career_level: 0,

	race: "",

	alignment: "",

	deity: "",

	size: 0,

	age: 0,

	gender: "",

	height: 0,

	weight: 0,

	eyes: "",

	hair: "",

	skin: "",


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
			base_save: 0,
			ability_mod: 0,
			magic_mod: 0,
			misc_mod: 0,
			temp_mod: 0, 
		},
		reflex:{
			total : 0,
			base_save: 0,
			ability_mod: 0,
			magic_mod: 0,
			misc_mod: 0,
			temp_mod: 0, 
		},
		will: {
			total : 0,
			base_save: 0,
			ability_mod: 0,
			magic_mod: 0,
			misc_mod: 0,
			temp_mod: 0, 
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
			ranks: 0,
			misc_mod: 0,
			learned: 0
		},
		balance:{
			key_ability: "DEX*",
			skill_mod: 0,
			ability_mod: 0,
			ranks: 0,
			misc_mod: 0,
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


	

	

};