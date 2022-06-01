const status_calculation = (race,individual,effort,level,personality) => {
  console.log(personality)
  raceN = parseFloat(race)
  individualN = parseFloat(individual)
  effortN = parseFloat(effort)
  levelN = parseFloat(level)
  personalityN = parseFloat(personality)
  console.log(personalityN)
  let status = (((raceN * 2) + individualN + (effortN / 4)) * levelN / 100 + 5) * personalityN;
    return Math.floor(status);
};

const status_calculation_HP = (race,individual,effort,level) => {
  raceN = parseFloat(race)
  individualN = parseFloat(individual)
  effortN = parseFloat(effort)
  levelN = parseFloat(level)
  
  let status = ((raceN * 2) + individualN + (effortN / 4)) * levelN / 100 + levelN + 10;
    return Math.floor(status);
};

const damage_calculation = (attack_level,technique_power,attack_status,defense_status,
  field,technique_type,technique,attack_rank,attack_pokemon_type,attack_pokemon_tool,attack_pokemon_characteristic,kind,
  wether,defense_rank,defense_pokemon_type,defense_pokemon_tool,defense_pokemon_characteristic,burn,reflector,hikari) => {

  console.log(field)
  console.log(technique_type)
  console.log(technique)
  console.log(attack_rank)
  console.log(attack_pokemon_type)
  console.log(attack_pokemon_tool)
  console.log(attack_pokemon_characteristic)
  console.log(kind)
  console.log(wether)
  console.log(defense_rank)
  console.log(defense_pokemon_type)
  console.log(defense_pokemon_tool)
  console.log(defense_pokemon_characteristic)
  console.log(burn)
  console.log(reflector)
  console.log(hikari)
  
  attack_levelN = parseFloat(attack_level)
  technique_powerN = parseFloat(technique_power)
  attack_statusN = parseFloat(attack_status)
  defense_statusN = parseFloat(defense_status)
  attack_rankN = parseFloat(attack_rank)
  defense_rankN = parseFloat(defense_rank)

  
  power_hosei = 1.0
  attack_rank_hosei = 1.0
  harikiri = 1.0
  attack_status_hosei =1.0
  defense_rank_hosei =1.0
  sunahosei = 1.0
  defense_status_hosei =1.0
  wether_hosei = 1.0
  type_match = 1.0
  type_comp = 1.0
  burn_hosei = 1.0
  damage_hosei = 1.0

  if(field == "エレキ" && technique_type == "でんき" || field == "グラス" && technique_type == "くさ" || field == "サイコ" && technique_type == "エスパー" || field == "ミスト" && technique_type == "フェアリー"){
    power_hosei = 5325 / 4096
  }else if((field == "グラス" && (technique == "じしん" || technique == "じならし")) || (field == "ミスト" && technique_type == "ドラゴン")){
    power_hosei = 0.5
  }

  if(attack_rankN >= 0){
    attack_rank_hosei = (attack_rankN + 2) / 2
  }else if(attack_rankN < 0){
    attack_rank_hosei = 2 / (Math.abs(attack_rankN) + 2)
  }

  if(defense_rankN >= 0){
    defense_rank_hosei = (defense_rankN + 2) / 2
  }else if(defense_rankN < 0){
    defense_rank_hosei = 2 / (Math.abs(defense_rankN) + 2)
  }

  if(attack_pokemon_type[0] == technique_type || attack_pokemon_type[1] == technique_type ){
    type_match = 1.5
    if(attack_pokemon_characteristic == "てきおうりょく"){
      type_match = 2.0
    }
  }

  if(defense_pokemon_characteristic == "あついしぼう" && (technique_type == "こおり" || technique_type == "ほのお")){
    attack_status_hosei = attack_status_hosei * 0.5
  }
  if(attack_pokemon_tool == "こだわり系"){
    attack_status_hosei = attack_status_hosei * 1.5
  }

  if(kind == "とくしゅ" && wether == "すな" && (defense_pokemon_type[0] == "いわ" || defense_pokemon_type[1] == "いわ")){
    sunahosei = 1.5
  }

  if(kind == "とくしゅ" && defense_pokemon_tool == "とつげきチョッキ"){
    defense_status_hosei == 1.5
  }

  if((wether == "はれ" && technique_type == "ほのお") || (wether == "あめ" && technique_type == "みず")){
    wether_hosei = 1.5
  }else if((wether == "はれ" && technique_type == "みず") || (wether == "あめ" && technique_type == "ほのお")){
    wether_hosei = 0.5
  }

  if(burn == "あり"){
    burn_hosei = 0.5
  }

  

  defense_pokemon_type.forEach(function(type){
    if(technique_type == "ノーマル"){
      if(type == "いわ" || type == "はがね"){
      type_comp = type_comp * 0.5
      }
      if(type == "ゴースト"){
        type_comp = type_comp * 0
      }
    }else if(technique_type == "ほのお"){
      if(type == "くさ" || type == "こおり" || type == "むし" || type == "はがね"){
        type_comp = type_comp * 2.0
      }
      if(type == "ほのお" || type == "みず" || type == "いわ" || type == "ドラゴン"){
        type_comp = type_comp * 0.5
      }

    }else if(technique_type == "みず"){
      if(type == "ほのお" || type == "じめん" || type == "いわ"){
        type_comp = type_comp * 2.0
      }
      if(type == "みず" || type == "くさ" || type == "ドラゴン"){
        type_comp = type_comp * 0.5
      }
      
    }else if(technique_type == "でんき"){
      if(type == "みず" || type == "ひこう"){
        type_comp = type_comp * 2.0
      }
      if(type == "でんき" || type == "くさ" || type == "ドラゴン"){
        type_comp = type_comp * 0.5
      }
      if(type == "じめん"){
        type_comp = type_comp * 0
      }
    }else if(technique_type == "くさ"){
      if(type == "みず" || type == "じめん" || type == "いわ"){
        type_comp = type_comp * 2.0
      }
      if(type == "ほのお" || type == "くさ" || type == "どく" || type == "ひこう" || type == "むし" || type == "ドラゴン" || type == "はがね"){
        type_comp = type_comp * 0.5
      }
      
    }else if(technique_type == "こおり"){
      if(type == "くさ" || type == "じめん" || type == "ひこう" || type == "ドラゴン"){
        type_comp = type_comp * 2.0
      }
      if(type == "ほのお" || type == "みず" || type == "こおり" || type == "はがね"){
        type_comp = type_comp * 0.5
      }
    }else if(technique_type == "かくとう"){
      if(type == "ノーマル" || type == "こおり" || type == "いわ" || type == "あく" || type == "はがね"){
        type_comp = type_comp * 2.0
      }
      if(type == "どく" || type == "ひこう" || type == "エスパー" || type == "むし" || type == "フェアリー"){
        type_comp = type_comp * 0.5
      }
      if(type == "ゴースト"){
        type_comp = type_comp * 0
      }

      
    }else if(technique_type == "どく"){
      if(type == "くさ" || type == "フェアリー"){
        type_comp = type_comp * 2.0
      }
      if(type == "どく" || type == "じめん" || type == "いわ" || type == "ゴースト"){
        type_comp = type_comp * 0.5
      }
      if(type == "はがね"){
        type_comp = type_comp * 0
      }
      
    }else if(technique_type == "じめん"){
      if(type == "ほのお" || type == "でんき" || type == "どく" || type == "いわ" || type == "はがね"){
        type_comp = type_comp * 2.0
      }
      if(type == "くさ" || type == "むし"){
        type_comp = type_comp * 0.5
      }
      if(type == "ひこう"){
        type_comp = type_comp * 0
      }
      
    }else if(technique_type == "ひこう"){
      if(type == "くさ" || type == "かくとう" || type == "むし"){
        type_comp = type_comp * 2.0
      }
      if(type == "でんき" || type == "いわ" || type == "はがね"){
        type_comp = type_comp * 0.5
      }
    }else if(technique_type == "エスパー"){
      if(type == "かくとう" || type == "どく"){
        type_comp = type_comp * 2.0
      }
      if(type == "エスパー" || type == "はがね"){
        type_comp = type_comp * 0.5
      }
      if(type == "あく"){
        type_comp = type_comp * 0
      }
      
    }else if(technique_type == "むし"){
      if(type == "くさ" || type == "エスパー" || type == "あく"){
        type_comp = type_comp * 2.0
      }
      if(type == "ほのお" || type == "かくとう" || type == "どく" || type == "ひこう" || type == "ゴースト" || type == "はがね" || type == "フェアリー"){
        type_comp = type_comp * 0.5
      }
      
    }else if(technique_type == "いわ"){
      if(type == "ほのお" || type == "こおり" || type == "ひこう" || type == "むし"){
        type_comp = type_comp * 2.0
      }
      if(type == "かくとう" || type == "じめん" || type == "はがね"){
        type_comp = type_comp * 0.5
      }
    }else if(technique_type == "ゴースト"){
      if(type == "エスパー" || type == "ゴースト"){
        type_comp = type_comp * 2.0
      }
      if(type == "あく"){
        type_comp = type_comp * 0.5
      }
      if(type == "ノーマル"){
        type_comp = type_comp * 0
      }
    }else if(technique_type == "ドラゴン"){
      if(type == "ドラゴン"){
        type_comp = type_comp * 2.0
      }
      if(type == "はがね"){
        type_comp = type_comp * 0.5
      }
      if(type == "フェアリー"){
        type_comp = type_comp * 0
      }
    }else if(technique_type == "あく"){
      if(type == "エスパー" || type == "ゴースト"){
        type_comp = type_comp * 2.0
      }
      if(type == "かくとう" || type == "あく" || type == "フェアリー"){
        type_comp = type_comp * 0.5
      }
    }else if(technique_type == "はがね"){
      if(type == "こおり" || type == "いわ" || type == "フェアリー"){
        type_comp = type_comp * 2.0
      }
      if(type == "ほのお" || type == "みず" || type == "でんき" || type == "はがね"){
        type_comp = type_comp * 0.5
      }
    }else if(technique_type == "フェアリー"){
      if(type == "かくとう" || type == "ドラゴン" || type == "あく"){
        type_comp = type_comp * 2.0
      }
      if(type == "ほのお" || type == "どく" || type == "はがね"){
        type_comp = type_comp * 0.5
      }
    }
    if((reflector == "あり" && kind == "ぶつり") || (hikari == "あり" && kind == "とくしゅ")){
      damage_hosei = damage_hosei * 0.5
    }
    if(attack_pokemon_tool == "いのちのたま"){
      damage_hosei = damage_hosei * 5324 / 4096
    }
    if((type_comp == 2 || type_comp == 4) && attack_pokemon_tool == "たつじんのおび"){
      damage_hosei = damage_hosei * 4915 / 4096
    }
    if((type_comp == 2 || type_comp == 4) && defense_pokemon_tool == "半減きのみ"){
      damage_hosei = damage_hosei * 0.5
    }


  })
  

  




  final_power = gosyagotyounyuu(technique_powerN * power_hosei)
  final_attack_status = gosyagotyounyuu(Math.floor(Math.floor(attack_statusN * attack_rank_hosei) * harikiri) * attack_status_hosei)
  final_defense_status = gosyagotyounyuu(Math.floor(Math.floor(defense_statusN * defense_rank_hosei) * sunahosei) * defense_status_hosei)

  damage_num1 = attack_levelN * 2 / 5 + 2
  damage_num2 = Math.floor(damage_num1) * final_power * final_attack_status / final_defense_status
  damage_num3 = Math.floor(damage_num2) / 50 + 2
  damage_num4 = Math.floor(damage_num3) * wether_hosei 
  damage_min1 = gosyagotyounyuu(damage_num4) * 0.85
  damage_max1 = gosyagotyounyuu(damage_num4) * 1.0
  damage_min2 = gosyagotyounyuu(Math.floor(damage_min1) * type_match) * type_comp
  damage_max2 = gosyagotyounyuu(Math.floor(damage_max1) * type_match) * type_comp
  final_damage_min = gosyagotyounyuu(Math.floor(damage_min2) * burn_hosei) * damage_hosei
  final_damage_max = gosyagotyounyuu(Math.floor(damage_max2) * burn_hosei) * damage_hosei
  
  return damage_array = [gosyagotyounyuu(final_damage_min), gosyagotyounyuu(final_damage_max)]

};

const gosyagotyounyuu =(num) => {
  decimal = num - Math.floor(num);
  decimal6 = decimal.toFixed(6);
  if(decimal6 <= 0.5 ){
    return Math.floor(num)
  }else if(decimal6 > 0.5){
    return Math.ceil(num)
  }
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
    attackPersonality.forEach(function(list) {
      if (list.checked){
        attackPersonalityValue = list.value;
      }
    })
    console.log(attackPersonalityValue)
    console.log(attackRankForm.value)

    console.log(attackCharacteristic.value)
    console.log(attackTool.value)
    console.log(attackTechniqueName.value)
    kind.forEach(function(list) {
      if (list.checked){
        kindValue = list.value;
      }
    })
    console.log(kindValue)
    console.log(attackPower.value)
    console.log(attackType.value)
    if(attackBurn.checked){
      attackBurn.value = "あり"
    }else{
      attackBurn.value = "なし"
    }
    console.log(attackBurn.value)

    console.log(defensePokemonName.value)
    console.log(defenseLevel.value)
    console.log(defensePhysicalStatus.value)
    console.log(defensePhysicalIndividual.value)
    console.log(defensePhysicalEffort.value)
    console.log(defenseDefenseStatus.value)
    console.log(defenseDefenseIndividual.value)
    console.log(defenseDefenseEffort.value)
    defensePersonality.forEach(function(list) {
      if (list.checked){
        defensePersonalityValue = list.value;
      }
    })
    console.log(defensePersonalityValue)
    console.log(defenseRankForm.value)
    console.log(defenseCharacteristic.value)
    console.log(defenseTool.value)
    if(defenseReflector.checked){
      defenseReflector.value = "あり"
    }else{
      defenseReflector.value = "なし"
    }
    console.log(defenseReflector.value)
    if(defenseHikari.checked){
      defenseHikari.value = "あり"
    }else{
      defenseHikari.value = "なし"
    }
    console.log(defenseHikari.value)
    wetherContent.forEach(function(list) {
      if (list.checked){
        wetherContentValue = list.value;
      }
    })
    console.log(wetherContentValue)  
    fieldContent.forEach(function(list) {
      if (list.checked){
        fieldContentValue = list.value;
      }
    })
    console.log(fieldContentValue)
    if(gravity.checked){
      gravity.value = "あり"
    }else{
      gravity.value = "なし"
    }
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
        attackRankFormLabel.innerHTML = `-${attackRankForm.value}`
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
        defenseRankFormLabel.innerHTML = `-${defenseRankForm.value}`
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
      attack_pokemon_type = []
      jsresponse.attack_pokemon_type.forEach( function(element){
        attack_pokemon_type.push(element.attributes.name)
      })
      
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

      defense_pokemon_type = []
      jsresponse.defense_pokemon_type.forEach( function(element){
        defense_pokemon_type.push(element.attributes.name)
      })
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
    console.log(gosyagotyounyuu(5.51))
    console.log("た")
    fieldContent.forEach(function(list) {
      if (list.checked){
        fieldContentValue = list.value;
      }
    })
    console.log(fieldContentValue)

    console.log(attackType.value)
    console.log(jsresponse.techniques[parseInt(attackTechniqueName.value)].attributes.name)
    console.log(attackRankForm.value)
    console.log(attack_pokemon_type)
    console.log(attackTool.value)
    console.log(attackCharacteristic.value)
    kind.forEach(function(list) {
      if (list.checked){
        kindValue = list.value;
      }
    })
    console.log(kindValue)
    wetherContent.forEach(function(list) {
      if (list.checked){
        wetherContentValue = list.value;
      }
    })
    console.log(wetherContentValue)  
    console.log(defenseRankForm.value)
    console.log(defense_pokemon_type)
    console.log(defenseTool.value)
    console.log(defenseCharacteristic.value)
    if(attackBurn.checked){ 
      attackBurn.value = "あり" 
    }else{ 
      attackBurn.value = "なし" 
    }
    console.log(attackBurn.value)
    if(defenseReflector.checked){
      defenseReflector.value = "あり"
    }else{
      defenseReflector.value = "なし"
    }
    console.log(defenseReflector.value)
    if(defenseHikari.checked){
      defenseHikari.value = "あり"
    }else{
      defenseHikari.value = "なし"
    }
    console.log(defenseHikari.value)
    
    damage_number = damage_calculation(attackLevel.value,attackPower.value,attackStatus.value,defenseDefenseStatus.value,
      fieldContentValue,attackType.value,jsresponse.techniques[parseInt(attackTechniqueName.value)].attributes.name,attackRankForm.value,attack_pokemon_type,attackTool.value,attackCharacteristic.value,kindValue,
      wetherContentValue,defenseRankForm.value,defense_pokemon_type,defenseTool.value,defenseCharacteristic.value,attackBurn.value,defenseReflector.value,defenseHikari.value)
    console.log(damage_number)
    
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