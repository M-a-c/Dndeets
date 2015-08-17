function initCalc(){
	calculateSkills();
	calculateSavingThrows();
}

function calculateSkills(){
	
	var currentSheet = sheet;

	var ability_mod;
	var ranks;
	var misc_mod;
	var skill_mod;
	var currentSkill;

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


function calculateSavingThrows(){

	var currentSheet = sheet;

	var baseSave;
	var ability_mod;
	var magic_mod;
	var misc_mod;
	var temp_mod;
	var total;

	for(save in currentSheet.saving_throws){

		baseSave 	= currentSheet.saving_throws[String(save)].base_save;
		ability_mod = currentSheet.saving_throws[String(save)].ability_mod;
		magic_mod   = currentSheet.saving_throws[String(save)].magic_mod;
		misc_mod    = currentSheet.saving_throws[String(save)].misc_mod;
		temp_mod    = currentSheet.saving_throws[String(save)].temp_mod;

		total = baseSave + ability_mod + magic_mod + misc_mod + temp_mod;

		document.getElementsByName(String(save))[0].childNodes[3].childNodes[1].value  = total;
		
	}


}