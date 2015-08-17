function populateSkills(){

	var currentSheet = sheet;

	var currentSkill;

	for( skill in currentSheet.skills){

		currentSkill = document.getElementsByClassName(String(skill))[0].childNodes[3];


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

	total  = currentSheet.hit_points.total;
	wounds = currentSheet.hit_points.wounds;
	non_lethal_damage = currentSheet.hit_points.non_lethal_damage;
	current_HP = currentSheet.hit_points.current_HP;

	document.getElementById("Health").childNodes[1].childNodes[3].childNodes[3].value = total;
	document.getElementById("Health").childNodes[1].childNodes[5].childNodes[3].value = wounds;
	document.getElementById("Health").childNodes[1].childNodes[7].childNodes[3].value = current_HP;
	document.getElementById("Health").childNodes[1].childNodes[9].childNodes[3].value = non_lethal_damage;


}