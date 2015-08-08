function calculateSkills(){
	var ability_mod;
	var ranks;
	var misc_mod;
	var skill_mod;
	var currentSkill;
	for( skill in sheet.skills){

		currentSkill = document.getElementsByClassName(String(skill));
		
		ability_mod = currentSkill.childNodes[1];		
		ranks = currentSkill.childNodes[2];		
		misc_mod = currentSkill.childNodes[3];	
 		skill_mod = ability_mod + ranks + ability_mod;


 		currentSkill.childNodes[0].value = skill_mod;

	}

}