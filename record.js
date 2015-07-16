var sheet = {

	/*
		BASIC CHARACTER INFORMATION
	*/

	character_name: 0,
	
	player: 0,
	
	class: 0,

	level: 0,

	career_level: 0,

	race: 0,

	alignment: 0,

	deity: 0,

	size: 0,

	age: 0,

	gender: 0,
	height: 0,

	weight: 0,

	eyes: 0,

	hair: 0,

	skin: 0,


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
		attack: 0,
		attack_bonus: 0,
		damage: 0,
		critical: 0,
		range: 0,
		type: 0,
		notes: 0,
		ammunation: 0,

	},

	attack_2:{
		attack: 0,
		attack_bonus: 0,
		damage: 0,
		critical: 0,
		range: 0,
		type: 0,
		notes: 0,
		ammunation: 0,

	},

	attack_3:{
		attack: 0,
		attack_bonus: 0,
		damage: 0,
		critical: 0,
		range: 0,
		type: 0,
		notes: 0,
		ammunation: 0,

	},

	attack_4:{
		attack: 0,
		attack_bonus: 0,
		damage: 0,
		critical: 0,
		range: 0,
		type: 0,
		notes: 0,
		ammunation: 0,

	},

	attack_5:{
		attack: 0,
		attack_bonus: 0,
		damage: 0,
		critical: 0,
		range: 0,
		type: 0,
		notes: 0,
		ammunation: 0,

	},


	/*
		Skills
	*/

	skills:{

		appraise:{	

		},
		balance:{},
		bluff:{},
		climb:{},
		concentration:{},
		craft_1:{},
		craft_2:{},
		craft_3:{},
		decipher_script:{},
		diplomacy:{},
		disable_device:{},
		disguise:{},
		escape_artist:{},
		forgery:{},
		gather_information:{},
		handle_animal:{},
		heal:{},
		hide:{},
		intimidate:{},
		jump:{},
		knowledge_1:{},
		knowledge_2:{},
		knowledge_3:{},
		knowledge_4:{},
		knowledge_5:{},
		listen:{},
		move_silently:{},
		open_lock:{},
		perform_1:{},
		perform_2:{},
		perform_3:{},
		profession_1:{},
		profession_2:{},
		ride:{},
		search:{},
		sense_motive:{},
		sleight_of_hand:{},
		spellcraft:{},
		spot:{},
		survival:{},
		swim:{},
		tumble:{},
		use_magic_device:{},
		use_rope:{},
		blank_1:{},
		blank_2:{},
		blank_3:{},

	},


	number: 4,


};