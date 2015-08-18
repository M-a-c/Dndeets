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
}


function populateSkills(){

	var currentSheet = sheet;

	var currentSkill;

	for( skill in currentSheet.skills){

		currentSkill = document.getElementsByClassName(String(skill))[0].childNodes[3];
		checkBox     = document.getElementsByClassName(String(skill))[0].childNodes[1].childNodes[1];

		if(currentSheet.skills[String(skill)].learned === 1){
			checkBox.checked = true;
		}else{
			checkBox.checked = false;
		}

		currentSkill.childNodes[3].childNodes[0].value  = currentSheet.skills[String(skill)].skill_mod;
		currentSkill.childNodes[6].childNodes[0].value  = currentSheet.skills[String(skill)].ability_mod;
		currentSkill.childNodes[9].childNodes[0].value  = currentSheet.skills[String(skill)].ranks;
		currentSkill.childNodes[12].childNodes[0].value = currentSheet.skills[String(skill)].misc_mod;

	}

}


function populateBio(){

	var currentSheet = sheet;

	document.getElementsByName("characterName")[0].value  = currentSheet.character_name;
	document.getElementsByName("playerName")[0].value     = currentSheet.player;
	document.getElementsByName("classAndLevel")[0].value  = currentSheet.class + "," + String(currentSheet.level);
	document.getElementsByName("race")[0].value 		  = currentSheet.race;
	document.getElementsByName("alignment")[0].value 	  = currentSheet.alignment;
	document.getElementsByName("deity")[0].value 		  = currentSheet.deity;
	document.getElementsByName("SIZE")[0].value 		  = currentSheet.size;
	document.getElementsByName("AGE")[0].value			  = currentSheet.age;
	document.getElementsByName("GENDER")[0].value		  = currentSheet.gender;
	document.getElementsByName("HEIGHT")[0].value		  = currentSheet.height;
	document.getElementsByName("WEIGHT")[0].value		  = currentSheet.weight;
	document.getElementsByName("EYES")[0].value		      = currentSheet.eyes;
	document.getElementsByName("HAIR")[0].value 		  = currentSheet.hair;
	document.getElementsByName("SKIN")[0].value 		  = currentSheet.skin;

}

function populateAbilites(){

	var currentSheet = sheet;
	var ability_score;
	var ability_mod;
	var temp_score;
	var temp_mod; 

	for( ability in currentSheet.ability_name){


		ability_score = currentSheet.ability_name[String(ability)].ability_score;
		ability_mod   = currentSheet.ability_name[String(ability)].ability_mod;
		temp_score	  = currentSheet.ability_name[String(ability)].temp_score;
		temp_mod	  = currentSheet.ability_name[String(ability)].temp_mod;

		document.getElementsByName(String(ability))[0].childNodes[3].childNodes[0].value = ability_score;
		document.getElementsByName(String(ability))[0].childNodes[5].childNodes[0].value = ability_mod;
		document.getElementsByName(String(ability))[0].childNodes[7].childNodes[0].value = temp_score;
		document.getElementsByName(String(ability))[0].childNodes[9].childNodes[0].value = temp_mod;

	}
}

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

	armor_bonus   = currentSheet.armor_class.armor_bonus;
	shield_bonus  = currentSheet.armor_class.shield_bonus; 
	dex_mod 	  = currentSheet.armor_class.dex_mod;
	size_mod      = currentSheet.armor_class.size_mod;
	natural_armor = currentSheet.armor_class.natural_armor;
	defelection   = currentSheet.armor_class.defelection;
	misc_mod      = currentSheet.armor_class.misc_mod; 
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

	var touch = currentSheet.touch;
	var flat_footed = currentSheet.flat_footed;
	var dex_mod  = currentSheet.initiative.dex_mod;
	var misc_mod = currentSheet.initiative.misc_mod;

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

    //1,3,5
    //1,3,5,7

    for(currentAttack in currentSheet.attack){

		attack = currentSheet.attack[String(currentAttack)].attack;
		attack_bonus = currentSheet.attack[String(currentAttack)].attack_bonus;
		damage = currentSheet.attack[String(currentAttack)].damage;
		critical = currentSheet.attack[String(currentAttack)].critical;
		range = currentSheet.attack[String(currentAttack)].range;
		type = currentSheet.attack[String(currentAttack)].type;
		notes = currentSheet.attack[String(currentAttack)].notes;
		ammo = currentSheet.attack[String(currentAttack)].ammunation;
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








