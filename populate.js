function populateSkills(){

	var currentSkill;

	for( skill in sheet.skills){

		currentSkill = document.getElementsByClassName(String(skill))[0].childNodes[3];



		currentSkill.childNodes[3].childNodes[0].value  = sheet.skills[String(skill)].skill_mod;
		currentSkill.childNodes[6].childNodes[0].value  = sheet.skills[String(skill)].ability_mod;
		currentSkill.childNodes[9].childNodes[0].value  = sheet.skills[String(skill)].ranks;
		currentSkill.childNodes[12].childNodes[0].value = sheet.skills[String(skill)].misc_mod;

	}

}