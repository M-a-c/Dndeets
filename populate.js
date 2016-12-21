function initPopulate(){
	populateSkills();
	populateBio();
	populateAbilites();
	populateSavingThrows();
	populateHealth();
	populateAC();
	populateTFI();
	populateBSRG();
	populateAttack();
	populateConditionalModifiers();
	populateCampaignEXP();
	populateGear();
	populateOtherPossessions();
	populateFeats();
	populateSpecialAbilites();
	populateLanguages();
}

/**
  * Populates the skills from given sheet.
  */
function populateSkills(){

	var currentSheet = sheet;
	var currentSkill;

	var skill_mods	 = document.getElementsByName('SkillMod');
	var ability_mods = document.getElementsByName('AbilityMod');
	var ranks		 = document.getElementsByName('Ranks');
	var misc_mods	 = document.getElementsByName('MiscMod');
	var classSkills  = document.getElementsByName('classSkill');

	var i = 0;

	for( skill in currentSheet.skills){

		checkBox = classSkills[i];

		if(currentSheet.skills[String(skill)].learned === 1){
			checkBox.checked = true;
		}else{
			checkBox.checked = false;
		}

		skill_mods[i].value	   = currentSheet.skills[String(skill)].ability_mod;
		ability_mods[i].value  = currentSheet.skills[String(skill)].skill_mod;
		ranks[i].value		   = currentSheet.skills[String(skill)].ranks;
		misc_mods[i].value     = currentSheet.skills[String(skill)].misc_mod;

		i++;
	}

}

/**
  * Populates the bio information from a given sheet
  */
function populateBio(){

	var currentSheet = sheet;

	document.getElementById("character_name").value  = currentSheet.character_name;
	document.getElementById("player").value     = currentSheet.player;
	document.getElementById("classAndLevel").value  = currentSheet.class + "," + String(currentSheet.level);
	document.getElementById("race").value 		  = currentSheet.race;
	document.getElementById("alignment").value 	  = currentSheet.alignment;
	document.getElementById("deity").value 		  = currentSheet.deity;
	document.getElementById("size").value 		  = currentSheet.size;
	document.getElementById("age").value			  = currentSheet.age;
	document.getElementById("gender").value		  = currentSheet.gender;
	document.getElementById("height").value		  = currentSheet.height;
	document.getElementById("weight").value		  = currentSheet.weight;
	document.getElementById("eyes").value		      = currentSheet.eyes;
	document.getElementById("hair").value 		  = currentSheet.hair;
	document.getElementById("skin").value 		  = currentSheet.skin;

}

function populateAbilites(){

// 	var currentSheet = sheet;
// 	var ability_score;
// 	var ability_mod;
// 	var temp_score;
// 	var temp_mod;
//
// 	for( ability in currentSheet.ability_name){
//
// 		ability_score = currentSheet.ability_name[String(ability)].ability_score;
// 		ability_mod   = currentSheet.ability_name[String(ability)].ability_mod;
// 		temp_score	  = currentSheet.ability_name[String(ability)].temp_score;
// 		temp_mod	  = currentSheet.ability_name[String(ability)].temp_mod;
//
// 		document.getElementsByName(String(ability)).value = ability_score;
// 		document.getElementsByName(String(ability)).value = ability_mod;
// 		document.getElementsByName(String(ability)).value = temp_score;
// 		document.getElementsByName(String(ability)).value = temp_mod;
//
// 	}
// }

function populateSavingThrows(){

	var currentSheet = sheet;

	var baseSave;
	var ability_mod;
	var magic_mod;
	var misc_mod;
	var temp_mod;

	for(save in currentSheet.saving_throws){

		baseSave 	= currentSheet.saving_throws[String(save)].base_save;
		ability_mod = currentSheet.saving_throws[String(save)].ability_mod;
		magic_mod   = currentSheet.saving_throws[String(save)].magic_mod;
		misc_mod    = currentSheet.saving_throws[String(save)].misc_mod;
		temp_mod    = currentSheet.saving_throws[String(save)].temp_mod;

		document.getElementsByName(String(save))[0].childNodes[7].childNodes[1].value  = baseSave;
		document.getElementsByName(String(save))[0].childNodes[11].childNodes[1].value = ability_mod;
		document.getElementsByName(String(save))[0].childNodes[15].childNodes[1].value = magic_mod;
		document.getElementsByName(String(save))[0].childNodes[19].childNodes[1].value = misc_mod;
		document.getElementsByName(String(save))[0].childNodes[23].childNodes[1].value = temp_mod;

	}


}


function populateHealth(){

	var currentSheet = sheet;

	var total;
	var current_HP;
	var non_lethal_damage;
	var wounds;
	var speed;

	total  = currentSheet.hit_points.total;
	wounds = currentSheet.hit_points.wounds;
	non_lethal_damage = currentSheet.hit_points.non_lethal_damage;
	current_HP = currentSheet.hit_points.current_HP;
	speed = currentSheet.speed;

	document.getElementById("Health").childNodes[1].childNodes[3].childNodes[3].value = total;
	document.getElementById("Health").childNodes[1].childNodes[5].childNodes[3].value = wounds;
	document.getElementById("Health").childNodes[1].childNodes[7].childNodes[3].value = current_HP;
	document.getElementById("Health").childNodes[1].childNodes[9].childNodes[3].value = non_lethal_damage;

	/*
		Setting the speed
	*/
	document.getElementById("Health").childNodes[1].childNodes[11].childNodes[3].value = speed;


}

function populateAC(){

	var currentSheet = sheet;

	var armor_bonus;
	var shield_bonus;
	var dex_mod;
	var size_mod;
	var natural_armor;
	var defelection;
	var misc_mod;
	var damage_reduction;

	armor_bonus   	 = currentSheet.armor_class.armor_bonus;
	shield_bonus  	 = currentSheet.armor_class.shield_bonus;
	dex_mod 	     = currentSheet.armor_class.dex_mod;
	size_mod         = currentSheet.armor_class.size_mod;
	natural_armor    = currentSheet.armor_class.natural_armor;
	defelection      = currentSheet.armor_class.defelection;
	misc_mod         = currentSheet.armor_class.misc_mod;
	damage_reduction = currentSheet.damage_reduction;

	document.getElementById("Health").childNodes[3].childNodes[11].childNodes[1].value = armor_bonus;
	document.getElementById("Health").childNodes[3].childNodes[15].childNodes[1].value = shield_bonus;
	document.getElementById("Health").childNodes[3].childNodes[19].childNodes[1].value = dex_mod;
	document.getElementById("Health").childNodes[3].childNodes[23].childNodes[1].value = size_mod;
	document.getElementById("Health").childNodes[3].childNodes[27].childNodes[1].value = natural_armor;
	document.getElementById("Health").childNodes[3].childNodes[31].childNodes[1].value = defelection;
	document.getElementById("Health").childNodes[3].childNodes[35].childNodes[1].value = misc_mod;
	document.getElementById("Health").childNodes[3].childNodes[37].childNodes[3].value = damage_reduction;
}


function populateTFI(){


	var currentSheet = sheet;

	var touch  		= currentSheet.touch;
	var flat_footed = currentSheet.flat_footed;
	var dex_mod  	= currentSheet.initiative.dex_mod;
	var misc_mod 	= currentSheet.initiative.misc_mod;

	document.getElementById("TFI").childNodes[1].childNodes[5].childNodes[0].value = touch;
	document.getElementById("TFI").childNodes[1].childNodes[9].childNodes[0].value = flat_footed;
	document.getElementById("TFI").childNodes[1].childNodes[21].childNodes[1].value = dex_mod;
	document.getElementById("TFI").childNodes[1].childNodes[25].childNodes[1].value = misc_mod;

}


function populateBSRG(){

	var currentSheet = sheet;
	var base_attack_bonus;
	var spell_resistance;

	var strength_mod;
	var size_mod;
	var misc_mod;

	base_attack_bonus = currentSheet.base_attack_bonus;
	spell_resistance  = currentSheet.spell_resistance;
	strength_mod  	  = currentSheet.grapple.strength_mod;
	size_mod 		  = currentSheet.grapple.size_mod;
	misc_mod		  = currentSheet.grapple.misc_mod;

	document.getElementById("BSRG").childNodes[1].childNodes[3].childNodes[3].childNodes[0].value = base_attack_bonus;
	document.getElementById("BSRG").childNodes[1].childNodes[3].childNodes[7].childNodes[0].value = spell_resistance;

	document.getElementById("BSRG").childNodes[1].childNodes[13].childNodes[1].value = base_attack_bonus;
	document.getElementById("BSRG").childNodes[1].childNodes[17].childNodes[1].value = strength_mod;
	document.getElementById("BSRG").childNodes[1].childNodes[21].childNodes[1].value = size_mod;
	document.getElementById("BSRG").childNodes[1].childNodes[25].childNodes[1].value = misc_mod;


}

function populateAttack(){


	var currentSheet = sheet;

	var attack;
	var attack_bonus;
	var damage;
	var critical;
	var range;
	var type;
	var notes;
	var ammo;

    for(currentAttack in currentSheet.attack){

		attack  	 = currentSheet.attack[String(currentAttack)].attack;
		attack_bonus = currentSheet.attack[String(currentAttack)].attack_bonus;
		damage 	     = currentSheet.attack[String(currentAttack)].damage;
		critical 	 = currentSheet.attack[String(currentAttack)].critical;
		range 		 = currentSheet.attack[String(currentAttack)].range;
		type 		 = currentSheet.attack[String(currentAttack)].type;
		notes 		 = currentSheet.attack[String(currentAttack)].notes;
		ammo 		 = currentSheet.attack[String(currentAttack)].ammunation;
		/*
			1st row
		*/
    	document.getElementsByClassName(String(currentAttack))[0].childNodes[1].childNodes[1].childNodes[3].childNodes[1].value = attack;
    	document.getElementsByClassName(String(currentAttack))[0].childNodes[1].childNodes[3].childNodes[3].childNodes[1].value = attack_bonus;
    	document.getElementsByClassName(String(currentAttack))[0].childNodes[1].childNodes[5].childNodes[3].childNodes[1].value = damage;
    	document.getElementsByClassName(String(currentAttack))[0].childNodes[1].childNodes[7].childNodes[3].childNodes[1].value = critical;

    	/*
    		2nd row
    	*/
    	document.getElementsByClassName(String(currentAttack))[0].childNodes[3].childNodes[1].childNodes[3].childNodes[1].value = range;
    	document.getElementsByClassName(String(currentAttack))[0].childNodes[3].childNodes[3].childNodes[3].childNodes[1].value = type;
    	document.getElementsByClassName(String(currentAttack))[0].childNodes[3].childNodes[5].childNodes[3].childNodes[1].value = notes;

    	/*
    		3rd row
    	*/
    	document.getElementsByClassName(String(currentAttack))[0].childNodes[5].childNodes[1].childNodes[3].childNodes[1].value = ammo;


	}



}


function populateConditionalModifiers(){

	var currentSheet = sheet;

	var conditional_modifiers;

	conditional_modifiers = currentSheet.conditional_modifiers;

	document.getElementById("conditional_modifiers").value = conditional_modifiers;


}


function populateCampaignEXP(){

	var currentSheet = sheet;

	var campaign;
	var exp;


	campaign = currentSheet.campaign;
	exp 	 = currentSheet.experience_points;

	document.getElementsByName("campaign")[0].value = campaign;
	document.getElementsByName("exp")[0].value	    = exp;

}

function populateGear(){


	var currentSheet = sheet;

	var name;
	var type;
	var ac_bonus;
	var max_dex;
	var check_penalty;
	var spell_failure;
	var speed;
	var weight;
	var special_properties;

	name 			   = currentSheet.gear.armor_item.name;
	type 			   = currentSheet.gear.armor_item.type;
	ac_bonus 		   = currentSheet.gear.armor_item.ac_bonus;
	max_dex 		   = currentSheet.gear.armor_item.max_dex;
	check_penalty 	   = currentSheet.gear.armor_item.check_penalty;
	spell_failure 	   = currentSheet.gear.armor_item.spell_failure;
	speed 			   = currentSheet.gear.armor_item.speed;
	weight 			   = currentSheet.gear.armor_item.weight;
	special_properties = currentSheet.gear.armor_item.special_properties;

	//	armor item	1,3,5,7
	document.getElementsByName("gear")[0].childNodes[1].childNodes[11].childNodes[1].childNodes[1].childNodes[3].childNodes[1].value = name;
	document.getElementsByName("gear")[0].childNodes[1].childNodes[11].childNodes[1].childNodes[3].childNodes[3].childNodes[1].value = type;
	document.getElementsByName("gear")[0].childNodes[1].childNodes[11].childNodes[1].childNodes[5].childNodes[3].childNodes[1].value = ac_bonus;
	document.getElementsByName("gear")[0].childNodes[1].childNodes[11].childNodes[1].childNodes[7].childNodes[3].childNodes[1].value = max_dex;

	document.getElementsByName("gear")[0].childNodes[1].childNodes[11].childNodes[3].childNodes[1].childNodes[3].childNodes[1].value = check_penalty;
	document.getElementsByName("gear")[0].childNodes[1].childNodes[11].childNodes[3].childNodes[3].childNodes[3].childNodes[1].value = spell_failure;
	document.getElementsByName("gear")[0].childNodes[1].childNodes[11].childNodes[3].childNodes[5].childNodes[3].childNodes[1].value = speed;
	document.getElementsByName("gear")[0].childNodes[1].childNodes[11].childNodes[3].childNodes[7].childNodes[3].childNodes[1].value = weight;
	document.getElementsByName("gear")[0].childNodes[1].childNodes[11].childNodes[3].childNodes[9].childNodes[3].childNodes[1].value = special_properties;

	// shield item

	name 			   = currentSheet.gear.shield_item.name;
	ac_bonus 		   = currentSheet.gear.shield_item.ac_bonus;
	weight 			   = currentSheet.gear.shield_item.weight;
	check_penalty 	   = currentSheet.gear.shield_item.check_penalty;
	spell_failure 	   = currentSheet.gear.shield_item.spell_failure;
	special_properties = currentSheet.gear.shield_item.special_properties;


	document.getElementsByName("gear")[0].childNodes[1].childNodes[13].childNodes[1].childNodes[1].childNodes[3].childNodes[1].value = name;
	document.getElementsByName("gear")[0].childNodes[1].childNodes[13].childNodes[1].childNodes[3].childNodes[3].childNodes[1].value = ac_bonus;
	document.getElementsByName("gear")[0].childNodes[1].childNodes[13].childNodes[1].childNodes[5].childNodes[3].childNodes[1].value = weight;
	document.getElementsByName("gear")[0].childNodes[1].childNodes[13].childNodes[1].childNodes[7].childNodes[3].childNodes[1].value = check_penalty;

	document.getElementsByName("gear")[0].childNodes[1].childNodes[13].childNodes[3].childNodes[1].childNodes[3].childNodes[1].value = spell_failure;
	document.getElementsByName("gear")[0].childNodes[1].childNodes[13].childNodes[3].childNodes[3].childNodes[3].childNodes[1].value = special_properties;

	// protective item 1
	name = currentSheet.gear.protective_item_1.name;
	ac_bonus = currentSheet.gear.protective_item_1.ac_bonus;
	weight = currentSheet.gear.protective_item_1.weight;
	special_properties = currentSheet.gear.protective_item_1.special_properties;

	document.getElementsByName("gear")[0].childNodes[1].childNodes[15].childNodes[1].childNodes[1].childNodes[3].childNodes[1].value = name;
	document.getElementsByName("gear")[0].childNodes[1].childNodes[15].childNodes[1].childNodes[3].childNodes[3].childNodes[1].value = ac_bonus;
	document.getElementsByName("gear")[0].childNodes[1].childNodes[15].childNodes[1].childNodes[5].childNodes[3].childNodes[1].value = weight;
	document.getElementsByName("gear")[0].childNodes[1].childNodes[15].childNodes[1].childNodes[7].childNodes[3].childNodes[1].value = special_properties;

	// protective item 2
	name = currentSheet.gear.protective_item_2.name;
	ac_bonus = currentSheet.gear.protective_item_2.ac_bonus;
	weight = currentSheet.gear.protective_item_2.weight;
	special_properties = currentSheet.gear.protective_item_2.special_properties

	document.getElementsByName("gear")[0].childNodes[1].childNodes[17].childNodes[1].childNodes[1].childNodes[3].childNodes[1].value = name;
	document.getElementsByName("gear")[0].childNodes[1].childNodes[17].childNodes[1].childNodes[3].childNodes[3].childNodes[1].value = ac_bonus;
	document.getElementsByName("gear")[0].childNodes[1].childNodes[17].childNodes[1].childNodes[5].childNodes[3].childNodes[1].value = weight;
	document.getElementsByName("gear")[0].childNodes[1].childNodes[17].childNodes[1].childNodes[7].childNodes[3].childNodes[1].value = special_properties;

}


function populateOtherPossessions(){

	var currentSheet = sheet;
	var item_id;
	var item_pg;
	var item_wt;

	var itemNum;

	var name;
	var pg;
	var wt;

	for(item in currentSheet.gear.possessions.items){


		if(String(item).length === 6){
			itemNum = String(item)[5];
		}else{
			itemNum = String(item)[5] + String(item)[6];
		}

		item_id = "item_name_" + itemNum;
		item_pg = "item_pg_"   + itemNum;
		item_wt = "item_wt_"   + itemNum;

		name = currentSheet.gear.possessions.items[String(item)].name;
		pg = currentSheet.gear.possessions.items[String(item)].pg;
		wt = currentSheet.gear.possessions.items[String(item)].wt;

		document.getElementById(item_id).value = name;
		document.getElementById(item_pg).value = pg;
		document.getElementById(item_wt).value = wt;

	}

}


function populateFeats(){

	var currentSheet = sheet;
	var f;

	for(feat in currentSheet.feats){

		f = currentSheet.feats[String(feat)];
		document.getElementById(String(feat)).value = f;
	}
}


function populateSpecialAbilites(){

	var currentSheet = sheet;
	var id;
	var sb;

	for(sAbility in currentSheet.special_abilites){
		id = "special_" + String(sAbility);
		sb = currentSheet.special_abilites[String(sAbility)];
		document.getElementById(id).value = sb;
	}

}

function populateLanguages(){

	var currentSheet = sheet;
	var lang;

	for(language in currentSheet.languages){

		lang = currentSheet.languages[String(language)];

		document.getElementById(String(language)).value = lang;

	}

}
