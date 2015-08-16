function calculateSkills(){
	
	var currentSheet = sheet;

	var ability_mod;
	var ranks;
	var misc_mod;
	var skill_mod;
	var currentSkill;

	var i = 0;
	for( skill in currentSheet.skills){
		currentSkill = document.getElementsByClassName(String(skill))[0].childNodes[3];

		ability_mod = currentSheet.skills[String(skill)].ability_mod;
		ranks       = currentSheet.skills[String(skill)].ranks;
		misc_mod    = currentSheet.skills[String(skill)].misc_mod;

 		skill_mod = ability_mod + ranks + misc_mod;

 		/*
 			Set skill modifier in HTML page
 		*/
		currentSkill.childNodes[3].childNodes[0].value = skill_mod;

	}

}
