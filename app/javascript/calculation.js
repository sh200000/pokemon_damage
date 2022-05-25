function calculation (){
  console.log("あ")
  const attackPokemonName  = document.getElementById("attack_pokemon_name");
  const attackLevel  = document.getElementById("attack_level");
  const attackStatus  = document.getElementById("attack_status");
  const attackIndividual  = document.getElementById("attack_individual");
  const attackEffort  = document.getElementById("attack_effort");
  const attackPersonality  = document.querySelectorAll(".attack_personality");
  const attackRankForm  = document.getElementById("attack_rank_form");
  const attackCharacteristic  = document.getElementById("attack_characteristic");
  const attackTool  = document.getElementById("attack_tool");
  const attackPower  = document.getElementById("attack_power");
  const attackType  = document.getElementById("attack_type");
  const attackBurn  = document.getElementById("attack_burn");

  const defensePokemonName  = document.getElementById("defense_pokemon_name");
  const defenseLevel  = document.getElementById("defense_level");
  const defensePhysicalStatus  = document.getElementById("defense_physical_status");
  const defensePhysicalIndividual  = document.getElementById("defense_physical_individual");
  const defensePhysicalEffort  = document.getElementById("defense_physical_effort");
  const defenseDefenseStatus  = document.getElementById("defense_defense_status");
  const defense_defense_individual  = document.getElementById("defense_defense_individual");
  const defenseDefenseEffort  = document.getElementById("defense_defense_effort");
  const defensePersonality  = document.querySelectorAll(".defense_personality");
  const defenseRankForm  = document.getElementById("defense_rank_form");
  const defenseCharacteristic  = document.getElementById("defense_characteristic");
  const defenseTool  = document.getElementById("defense_tool");
  const defenseReflector  = document.getElementById("defense_reflector");
  const defenseHikari  = document.getElementById("defense_hikari");

  const wetherContent  = document.querySelectorAll(".wether_content");
  const fieldContent  = document.querySelectorAll(".field_content");
  const gravity  = document.getElementById("gravity");



  


  attackPokemonName.addEventListener("click", () => {
    console.log("い")

    

    console.log(attackPokemonName.value)
    console.log(attackLevel.value)
    console.log(attackStatus.value)
    console.log(attackIndividual.value)
    console.log(attackEffort.value)

    attackPersonality.forEach(function(list) {
      if (list.checked){
        checkValue = list.value;
        console.log(checkValue)
      }
    })

    console.log(attackRankForm.value)
    console.log(attackCharacteristic.value)
    console.log(attackTool.value)
    console.log(attackPower.value)
    console.log(attackType.value)
    console.log(attackBurn.value)

    console.log(defensePokemonName.value)
    console.log(defenseLevel.value)
    console.log(defensePhysicalStatus.value)
    console.log(defensePhysicalIndividual.value)
    console.log(defensePhysicalEffort.value)
    console.log(defenseDefenseStatus.value)
    console.log(defense_defense_individual.value)
    console.log(defenseDefenseEffort.value)

    defensePersonality.forEach(function(list) {
      if (list.checked){
        checkValue = list.value;
        console.log(checkValue)
      }
    })
    
    console.log(defenseRankForm.value)
    console.log(defenseCharacteristic.value)
    console.log(defenseTool.value)
    console.log(defenseReflector.value)
    console.log(defenseHikari.value)

    wetherContent.forEach(function(list) {
      if (list.checked){
        checkValue = list.value;
        console.log(checkValue)
      }
    })

    fieldContent.forEach(function(list) {
      if (list.checked){
        checkValue = list.value;
        console.log(checkValue)
      }
    })
    
    console.log(gravity.value)
    
  });
};
window.addEventListener('load', calculation);