function initCalc(){
	calculateSkills();
	calculateSavingThrows();
	calculateInitiative();
	calculateAC();
	calculateGrapple();
	calculateTotalWeightCarried();
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


function calculateInitiative(){

	var currentSheet = sheet;

	var dex_mod  = currentSheet.initiative.dex_mod;
	var misc_mod = currentSheet.initiative.misc_mod;
	var total;

	total = dex_mod + misc_mod;

	document.getElementById("TFI").childNodes[1].childNodes[17].childNodes[1].value = total;


}


function calculateAC(){

	var currentSheet = sheet;

	var armor_bonus;
	var shield_bonus;
	var dex_mod;
	var size_mod;
	var natural_armor;
	var defelection;
	var misc_mod;
	var damage_reduction;
	var total;

	armor_bonus   = currentSheet.armor_class.armor_bonus;
	shield_bonus  = currentSheet.armor_class.shield_bonus; 
	dex_mod 	  = currentSheet.armor_class.dex_mod;
	size_mod      = currentSheet.armor_class.size_mod;
	natural_armor = currentSheet.armor_class.natural_armor;
	defelection   = currentSheet.armor_class.defelection;
	misc_mod      = currentSheet.armor_class.misc_mod; 


	total = 10 + armor_bonus + shield_bonus + dex_mod + size_mod + natural_armor + defelection + misc_mod;
	document.getElementById("Health").childNodes[3].childNodes[3].childNodes[1].value = total;

}

function calculateGrapple(){

	var currentSheet = sheet;

	var base_attack_bonus;
	var strength_mod;
	var size_mod;
	var misc_mod;

	var total;

	base_attack_bonus = currentSheet.base_attack_bonus;
	strength_mod  	  = currentSheet.grapple.strength_mod;
	size_mod 		  = currentSheet.grapple.size_mod;
	misc_mod		  = currentSheet.grapple.misc_mod;

	total = base_attack_bonus + strength_mod + size_mod + misc_mod;

	document.getElementById("BSRG").childNodes[1].childNodes[9].childNodes[1].value = total;


}

function calculateTotalWeightCarried(){

	var currentSheet = sheet;

	var totalWeightCarried = 0;
	var wt;

	for(item in currentSheet.gear.possessions.items){
			
		wt = currentSheet.gear.possessions.items[String(item)].wt;

		totalWeightCarried += wt;

	}

	document.getElementById("item_total_weight").value = totalWeightCarried;

}
