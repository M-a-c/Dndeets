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