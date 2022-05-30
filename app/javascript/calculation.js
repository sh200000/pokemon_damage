const status_calculation = (race,individual,effort,level,personality) => {
  console.log(personality)
  raceN = parseFloat(race)
  individualN = parseFloat(individual)
  effortN = parseFloat(effort)
  levelN = parseFloat(level)
  personalityN = parseFloat(personality)
  console.log(personalityN)
  let status = (((raceN * 2) + individualN + (effortN / 4)) * levelN / 100 + 5) * personalityN;
    return parseInt(status);
};

const status_calculation_HP = (race,individual,effort,level) => {
  raceN = parseFloat(race)
  individualN = parseFloat(individual)
  effortN = parseFloat(effort)
  levelN = parseFloat(level)
  
  let status = ((raceN * 2) + individualN + (effortN / 4)) * levelN / 100 + levelN + 10;
    return parseInt(status);
};

const damage_calculation = (attack_level,technique_power,attack_status,defense_status) => {
  attack_levelN = parseFloat(attack_level)
  technique_powerN = parseFloat(technique_power)
  attack_statusN = parseFloat(attack_status)
  defense_statusN = parseFloat(defense_status)

  damage_num1 = attack_levelN * 2 / 5 + 2
  damage_num2 = parseInt(damage_num1) * technique_powerN * attack_statusN / defense_statusN
  damage_num3 = parseInt(damage_num2) / 50 + 2
  damage_min = parseInt(damage_num3) * 0.85
  damage_max = parseInt(damage_num3) * 1.0
  return damage_array = [parseInt(damage_min), parseInt(damage_max)]

};





function calculation (){
  console.log("あ")
  const attackPokemonName  = document.getElementById("attack_pokemon_name");
  const attackLevel  = document.getElementById("attack_level");
  const attackLetter  = document.getElementById("attack_letter");
  const attackStatus  = document.getElementById("attack_status");
  const attackIndividual  = document.getElementById("attack_individual");
  const attackEffort  = document.getElementById("attack_effort");
  const attackPersonality  = document.querySelectorAll(".attack_personality");
  attackPersonality.forEach(function(list) {
    if (list.checked){
      attackPersonalityValue = list.value;
    }
  })
  const attackRankForm  = document.getElementById("attack_rank_form");
  const attackRankFormLabel  = document.getElementById("attack_rank_form_label");
  const attackRankRise  = document.getElementById("attack_rank_rise");
  const attackRankDown  = document.getElementById("attack_rank_down");
  const attackCharacteristic  = document.getElementById("attack_characteristic");
  const attackTool  = document.getElementById("attack_tool");
  const attackTechniqueName = document.getElementById('attack_technique_name');
  const attackKindPhysics = document.getElementById("kind_physics");
  const attackKindSpecial = document.getElementById("kind_special");
  const kind  = document.querySelectorAll(".kind");
  kind.forEach(function(list) {
    if (list.checked){
      kindValue = list.value;
    }
  })
  const attackPower  = document.getElementById("attack_power");
  const attackType  = document.getElementById("attack_type");
  const attackBurn  = document.getElementById("attack_burn");

  const defensePokemonName  = document.getElementById("defense_pokemon_name");
  const defenseLevel  = document.getElementById("defense_level");
  const defensePhysicalStatus  = document.getElementById("defense_physical_status");
  const defensePhysicalIndividual  = document.getElementById("defense_physical_individual");
  const defensePhysicalEffort  = document.getElementById("defense_physical_effort");
  const defenseLetter  = document.getElementById("defense_letter");
  const defenseDefenseStatus  = document.getElementById("defense_defense_status");
  const defenseDefenseIndividual  = document.getElementById("defense_defense_individual");
  const defenseDefenseEffort  = document.getElementById("defense_defense_effort");
  const defensePersonality  = document.querySelectorAll(".defense_personality");
  defensePersonality.forEach(function(list) {
    if (list.checked){
      defensePersonalityValue = list.value;
    }
  })
  const defenseRankForm  = document.getElementById("defense_rank_form");
  const defenseRankFormLabel  = document.getElementById("defense_rank_form_label");
  const defenseRankRise  = document.getElementById("defense_rank_rise");
  const defenseRankDown  = document.getElementById("defense_rank_down");
  const defenseCharacteristic  = document.getElementById("defense_characteristic");
  const defenseTool  = document.getElementById("defense_tool");
  const defenseReflector  = document.getElementById("defense_reflector");
  const defenseHikari  = document.getElementById("defense_hikari");

  const wetherContent  = document.querySelectorAll(".wether_content");
  wetherContent.forEach(function(list) {
    if (list.checked){
      wetherContentValue = list.value;
    }
  })
  const fieldContent  = document.querySelectorAll(".field_content");
  fieldContent.forEach(function(list) {
    if (list.checked){
      fieldContentValue = list.value;
    }
  })
  const gravity  = document.getElementById("gravity");
  const damageFigureMax  = document.getElementById("damage_figure_max");
  const damageFigureYellow  = document.getElementById("damage_figure_yellow");
  const damageFigureRed  = document.getElementById("damage_figure_red");
  const damageFigureMin  = document.getElementById("damage_figure_min");


  


  attackPokemonName.addEventListener("click", () => {
    console.log("い")

    console.log(attackPokemonName.value)
    console.log(attackLevel.value)
    console.log(attackStatus.value)
    console.log(attackIndividual.value)
    console.log(attackEffort.value)
    console.log(attackPersonalityValue)
    console.log(attackRankForm.value)

    console.log(attackCharacteristic.value)
    console.log(attackTool.value)
    console.log(attackTechniqueName.value)
    console.log(kindValue)
    console.log(attackPower.value)
    console.log(attackType.value)
    console.log(attackBurn.value)

    console.log(defensePokemonName.value)
    console.log(defenseLevel.value)
    console.log(defensePhysicalStatus.value)
    console.log(defensePhysicalIndividual.value)
    console.log(defensePhysicalEffort.value)
    console.log(defenseDefenseStatus.value)
    console.log(defenseDefenseIndividual.value)
    console.log(defenseDefenseEffort.value)
    console.log(defensePersonalityValue)
    console.log(defenseRankForm.value)
    console.log(defenseCharacteristic.value)
    console.log(defenseTool.value)
    console.log(defenseReflector.value)
    console.log(defenseHikari.value)
    console.log(wetherContentValue)  
    console.log(fieldContentValue)
    console.log(gravity.value)
    
  });

  /*attackPokemonName.addEventListener("keyup", () => {
    console.log("う")
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/pokemons/search", true);
    XHR.responseType = "json";
    console.log(formData)
    XHR.send(formData);

  });*/


  attackRankRise.addEventListener("click", () => {
    if(parseFloat(attackRankForm.value) < 6){
      attackRankForm.value = parseFloat(attackRankForm.value) + 1
      if(attackRankForm.value > 0){
        attackRankFormLabel.innerHTML = `+${attackRankForm.value}`
      }else if(attackRankForm.value == 0){
        attackRankFormLabel.innerHTML = `±${attackRankForm.value}`
      }else if(attackRankForm.value < 0){
        attackRankFormLabel.innerHTML = `±${attackRankForm.value}`
      }
    }
  })
  attackRankDown.addEventListener("click", () => {
    if(parseFloat(attackRankForm.value) > -6){
      attackRankForm.value = parseFloat(attackRankForm.value) - 1
      if(attackRankForm.value > 0){
        attackRankFormLabel.innerHTML = `+${attackRankForm.value}`
      }else if(attackRankForm.value == 0){
        attackRankFormLabel.innerHTML = `±${attackRankForm.value}`
      }else if(attackRankForm.value < 0){
        attackRankFormLabel.innerHTML = `-${attackRankForm.value}`
      }
    }
  })
  defenseRankRise.addEventListener("click", () => {
    if(parseFloat(defenseRankForm.value) < 6){
      defenseRankForm.value = parseFloat(defenseRankForm.value) + 1
      if(defenseRankForm.value > 0){
        defenseRankFormLabel.innerHTML = `+${defenseRankForm.value}`
      }else if(attackRankForm.value == 0){
        defenseRankFormLabel.innerHTML = `±${defenseRankForm.value}`
      }else if(defenseRankForm.value < 0){
        defenseRankFormLabel.innerHTML = `±${defenseRankForm.value}`
      }
    }
  })
  defenseRankDown.addEventListener("click", () => {
    if(parseFloat(defenseRankForm.value) > -6){
      defenseRankForm.value = parseFloat(defenseRankForm.value) - 1
      if(defenseRankForm.value > 0){
        defenseRankFormLabel.innerHTML = `+${defenseRankForm.value}`
      }else if(defenseRankForm.value == 0){
        defenseRankFormLabel.innerHTML = `±${defenseRankForm.value}`
      }else if(defenseRankForm.value < 0){
        defenseRankFormLabel.innerHTML = `-${defenseRankForm.value}`
      }
    }
  })

  attackBurn.addEventListener("click", () => {
    console.log("え")
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/pokemons/attack_pokemon", true);
    XHR.responseType = "json";
    console.log(formData);
    XHR.send(formData);

    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };

      /*攻撃側*/ 

      jsresponse = XHR.response
      console.log(XHR.response);
      console.log(XHR.response.attack_pokemon);
      const attack_pokemon = XHR.response.attack_pokemon;
      console.log(attack_pokemon.H);
      attackPersonality.forEach(function(list) {
        if (list.checked){
          attackPersonalityValue = list.value;
        }
      })
      kind.forEach(function(list) {
        if (list.checked){
          kindValue = list.value;
        }
      })
      if (kindValue == "ぶつり"){
        attackLetter.innerHTML = "攻撃"
        attackStatus.value = status_calculation(attack_pokemon.A,attackIndividual.value,attackEffort.value,attackLevel.value,attackPersonalityValue)
      }
      else if(kindValue == "とくしゅ"){
        attackLetter.innerHTML = "特攻"
        attackStatus.value = status_calculation(attack_pokemon.C,attackIndividual.value,attackEffort.value,attackLevel.value,attackPersonalityValue)
      }
      while (attackCharacteristic.firstChild) {
        attackCharacteristic.removeChild(attackCharacteristic.firstChild);
      }
      XHR.response.attack_pokemon_characteristics.forEach( function(element){
        let option1 = document.createElement('option');
        /*console.log(element.attributes)
        console.log(element.attributes.name)*/
        option1.textContent = element.attributes.name;
        attackCharacteristic.appendChild(option1);
      })

      console.log(XHR.response.techniques)
      console.log(XHR.response.techniques[0])


      while (attackTechniqueName.firstChild) {
        attackTechniqueName.removeChild(attackTechniqueName.firstChild);
        console.log("き")
      }
      i = 0
      XHR.response.techniques.forEach( function(element){
        let option2 = document.createElement('option');
        /*console.log(element.attributes)
        console.log(element.attributes.name)*/
        option2.value = i;
        option2.textContent = element.attributes.name;
        attackTechniqueName.appendChild(option2);
        i = i + 1
        console.log("か")
      });

      


      /*防御側*/ 

     
      const defense_pokemon = XHR.response.defense_pokemon;
      
      defensePhysicalStatus.value = status_calculation_HP(defense_pokemon.H,defensePhysicalIndividual.value,defensePhysicalEffort.value,defenseLevel.value)
      defensePersonality.forEach(function(list) {
        if (list.checked){
          defensePersonalityValue = list.value;
        }
      })
      if (kindValue == "ぶつり"){
        defenseLetter.innerHTML = "防御"
      defenseDefenseStatus.value = status_calculation(defense_pokemon.B,defenseDefenseIndividual.value,defenseDefenseEffort.value,defenseLevel.value,defensePersonalityValue)
      }else if(kindValue == "とくしゅ"){
        defenseLetter.innerHTML = "特防"
        defenseDefenseStatus.value = status_calculation(defense_pokemon.D,defenseDefenseIndividual.value,defenseDefenseEffort.value,defenseLevel.value,defensePersonalityValue)
      }

      while (defenseCharacteristic.firstChild) {
        defenseCharacteristic.removeChild(defenseCharacteristic.firstChild);
      }
      XHR.response.defense_pokemon_characteristics.forEach( function(element){
        let option1 = document.createElement('option');
        /*console.log(element.attributes)
        console.log(element.attributes.name)*/
        option1.textContent = element.attributes.name;
        defenseCharacteristic.appendChild(option1);
      })
    };
  });
  defenseReflector.addEventListener("click", () => {
    console.log("の")
    console.log(attackTechniqueName.value)
      attackTechniqueNameValueN = parseInt(attackTechniqueName.value)
      console.log(jsresponse)
      attack_power = jsresponse.techniques[attackTechniqueNameValueN].attributes.power
      console.log(attack_power)
      attackPower.value = parseInt(attack_power)

      console.log(jsresponse.technique_type[0])
      attack_type = jsresponse.technique_type[attackTechniqueNameValueN].attributes.name
      attackType.value = attack_type

      
      attack_kind = jsresponse.technique_kind[attackTechniqueNameValueN].attributes.name
      if(attack_kind == "ぶつり"){
        attackKindPhysics.checked = true
      }else if(attack_kind == "とくしゅ"){
        attackKindSpecial.checked = true
      }
      kind.forEach(function(list) {
        if (list.checked){
          kindValue = list.value;
        }
      })
      console.log(kindValue)


  });
  defenseHikari.addEventListener("click", () => {
    console.log("た")
    damage_number = damage_calculation(attackLevel.value,attackPower.value,attackStatus.value,defenseDefenseStatus.value)
    console.log(damage_number)
    console.log(damage_calculation(50,100,182,189))
    damage_ratio_max = damage_number[1]/(defensePhysicalStatus.value)
    damage_ratio_min = damage_number[0]/(defensePhysicalStatus.value)
    damage_ratio_max_percent = damage_ratio_max * 100
    damage_ratio_min_percent = damage_ratio_min * 100
    console.log(damage_ratio_max_percent)

    if(damage_ratio_max_percent < 50 ){
      console.log("も")
      damageFigureYellow.removeAttribute("style", "display:block;")
      damageFigureRed.removeAttribute("style", "display:block;")
      damageFigureMax.setAttribute("style", `width:${100 - damage_ratio_max_percent}%;`)
      damageFigureMin.setAttribute("style", `width:${damage_ratio_max_percent - damage_ratio_min_percent}%;`)
    }else if(50 <= damage_ratio_max_percent && damage_ratio_max_percent < 75 && damage_ratio_min_percent < 50){
      console.log("ま")
      damageFigureRed.removeAttribute("style", "display:block;")
      damageFigureMax.setAttribute("style", `width:${100 - damage_ratio_max_percent}%; background-color: orange;`)
      damageFigureYellow.setAttribute("style", `width:${damage_ratio_max_percent - 50}%; display:block;` )
      damageFigureMin.setAttribute("style", `width:${50 - damage_ratio_min_percent}%;`)
    }else if(50 <= damage_ratio_max_percent && damage_ratio_max_percent < 75 && 50 <= damage_ratio_min_percent){
      damageFigureYellow.removeAttribute("style", "display:block;")
      damageFigureRed.removeAttribute("style", "display:block;")
      damageFigureMax.setAttribute("style", `width:${100 - damage_ratio_max_percent}%; background-color: orange;`)
      damageFigureMin.setAttribute("style", `width:${damage_ratio_max_percent - damage_ratio_min_percent}%; background-color: rgba(211, 167, 24, 0.966);`)
    }else if(75 <= damage_ratio_max_percent && damage_ratio_max_percent <= 100 && damage_ratio_min_percent < 75){
      damageFigureYellow.removeAttribute("style", "display:block;")
      damageFigureMax.setAttribute("style", `width:${100 - damage_ratio_max_percent}%; background-color: red;`)
      damageFigureRed.setAttribute("style", `width:${damage_ratio_max_percent - 75}%; display:block;` )
      damageFigureMin.setAttribute("style", `width:${75 - damage_ratio_min_percent}%; background-color: rgba(211, 167, 24, 0.966);`)

    }else if(75 <= damage_ratio_max_percent && damage_ratio_max_percent <= 100 && 75 <= damage_ratio_min_percent){
      damageFigureYellow.removeAttribute("style", "display:block;")
      damageFigureRed.removeAttribute("style", "display:block;")
      damageFigureMax.setAttribute("style", `width:${100 - damage_ratio_max_percent}%; background-color: red;`)
      damageFigureMin.setAttribute("style", `width:${damage_ratio_max_percent - damage_ratio_min_percent}%; background-color: rgba(160, 10, 10, 0.966);`)
    
    }else if(100 <= damage_ratio_max_percent && damage_ratio_min_percent <= 100){
      damageFigureYellow.removeAttribute("style", "display:block;")
      damageFigureRed.removeAttribute("style", "display:block;")
      damageFigureMax.setAttribute("style", "width:0%;")
      damageFigureMin.setAttribute("style", `width:${100 - damage_ratio_min_percent}%; background-color: rgba(160, 10, 10, 0.966);`)
    }else{
      damageFigureYellow.removeAttribute("style", "display:block;")
      damageFigureRed.removeAttribute("style", "display:block;")
      damageFigureMax.setAttribute("style", "width:0%;")
      damageFigureMin.setAttribute("style", "width:0%")
    }



  });
};
window.addEventListener('load', calculation);