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

  if(kind == "ぶつり" && burn == "あり"){
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

const type_background =(typeElement) => {
  if(typeElement.innerHTML == "ノーマル"){typeElement.setAttribute("style", "background-color: azure;")}
  else if(typeElement.innerHTML == "ほのお"){typeElement.setAttribute("style", "background-color: red;")}
  else if(typeElement.innerHTML == "みず"){typeElement.setAttribute("style", "background-color: blue;")}
  else if(typeElement.innerHTML == "でんき"){typeElement.setAttribute("style", "background-color: yellow;")}
  else if(typeElement.innerHTML == "くさ"){typeElement.setAttribute("style", "background-color: lightgreen;")}
  else if(typeElement.innerHTML == "こおり"){typeElement.setAttribute("style", "background-color: cyan;")}
  else if(typeElement.innerHTML == "かくとう"){typeElement.setAttribute("style", "background-color: brown;")}
  else if(typeElement.innerHTML == "どく"){typeElement.setAttribute("style", "background-color: purple;")}
  else if(typeElement.innerHTML == "じめん"){typeElement.setAttribute("style", "background-color: burlywood;")}
  else if(typeElement.innerHTML == "ひこう"){typeElement.setAttribute("style", "background-color: lightskyblue;")}
  else if(typeElement.innerHTML == "エスパー"){typeElement.setAttribute("style", "background-color: fuchsia;")}
  else if(typeElement.innerHTML == "むし"){typeElement.setAttribute("style", "background-color: olivedrab;")}
  else if(typeElement.innerHTML == "いわ"){typeElement.setAttribute("style", "background-color: darkgoldenrod;")}
  else if(typeElement.innerHTML == "ゴースト"){typeElement.setAttribute("style", "background-color: navy;")}
  else if(typeElement.innerHTML == "ドラゴン"){typeElement.setAttribute("style", "background-color: royalblue;")}
  else if(typeElement.innerHTML == "あく"){typeElement.setAttribute("style", "background-color: rgb(27, 29, 29);")}
  else if(typeElement.innerHTML == "はがね"){typeElement.setAttribute("style", "background-color: darkgray;")}
  else if(typeElement.innerHTML == "フェアリー"){typeElement.setAttribute("style", "background-color: pink;")}

}

const attack_status_calculation =(jsresponse,attackPersonality,kind,attackLetter,attackStatus,attackIndividual,attackEffort,attackLevel) => {
  console.log("い")
  const attack_pokemon = jsresponse.attack_pokemon;
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
  console.log(attackIndividual)
  console.log(attackIndividual.value)
  if (kindValue == "ぶつり"){
    attackLetter.innerHTML = "攻撃"
    attackStatus.value = status_calculation(attack_pokemon.A,attackIndividual.value,attackEffort.value,attackLevel.value,attackPersonalityValue)
  }
  else if(kindValue == "とくしゅ"){
    attackLetter.innerHTML = "特攻"
    attackStatus.value = status_calculation(attack_pokemon.C,attackIndividual.value,attackEffort.value,attackLevel.value,attackPersonalityValue)
  }
};

const technique_choice =(jsresponse,attackTechniqueName,attackPower,attackType,attackKindPhysics,attackKindSpecial,kind) => {
  console.log("う")
  attackTechniqueNameValueN = parseInt(attackTechniqueName.value)
  attack_power = jsresponse.techniques[attackTechniqueNameValueN].attributes.power
  attackPower.value = parseInt(attack_power)
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
}


const defense_physical_status_calculation =(jsresponse,defensePhysicalStatus,defensePhysicalIndividual,defensePhysicalEffort,defenseLevel,physicalNumber) => {
  console.log("お")
  const defense_pokemon = jsresponse.defense_pokemon;
  defensePhysicalStatus.value = status_calculation_HP(defense_pokemon.H,defensePhysicalIndividual.value,defensePhysicalEffort.value,defenseLevel.value)
  physicalNumber.innerHTML = `HP${defensePhysicalStatus.value}`
};

const defense_defense_status_calculation =(jsresponse,defensePersonality,kind,defenseLetter,defenseDefenseStatus,defenseDefenseIndividual,defenseDefenseEffort,defenseLevel) => {
  console.log("か")
  const defense_pokemon = jsresponse.defense_pokemon;
  defensePersonality.forEach(function(list) {
    if (list.checked){
      defensePersonalityValue = list.value;
    }
  })
  kind.forEach(function(list) {
    if (list.checked){
      kindValue = list.value;
    }
  })
  if (kindValue == "ぶつり"){
    defenseLetter.innerHTML = "防御"
    defenseDefenseStatus.value = status_calculation(defense_pokemon.B,defenseDefenseIndividual.value,defenseDefenseEffort.value,defenseLevel.value,defensePersonalityValue)
  }else if(kindValue == "とくしゅ"){
    defenseLetter.innerHTML = "特防"
    defenseDefenseStatus.value = status_calculation(defense_pokemon.D,defenseDefenseIndividual.value,defenseDefenseEffort.value,defenseLevel.value,defensePersonalityValue)
  }
};

const damage_calculation_event =(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder) => {
  console.log("き")
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

  if (100 > (damage_ratio_max_percent+damage_ratio_min_percent)/2){
    adjustAbove.setAttribute("style", `margin-left:calc(117% - ${(damage_ratio_max_percent+damage_ratio_min_percent)/2}%);`)
    adjustUnder.setAttribute("style", `margin-left:calc(114% - ${(damage_ratio_max_percent+damage_ratio_min_percent)/2}%);`)
  }else{
    adjustAbove.setAttribute("style", `margin-left:17%;`)
    adjustUnder.setAttribute("style", `margin-left:14%;`)
  }

  adjustAbove.innerHTML = `${damage_number[0]}~${damage_number[1]}`
    adjustUnder.innerHTML = `${(Math.round(damage_ratio_min_percent* 10)) / 10}%~${(Math.round(damage_ratio_max_percent* 10)) / 10}%`

  if(damage_ratio_max_percent < 50 ){
    damageFigureYellow.removeAttribute("style", "display:block;")
    damageFigureRed.removeAttribute("style", "display:block;")
    damageFigureMax.setAttribute("style", `width:${100 - damage_ratio_max_percent}%;`)
    damageFigureMin.setAttribute("style", `width:${damage_ratio_max_percent - damage_ratio_min_percent}%;`)
    
  }else if(50 <= damage_ratio_max_percent && damage_ratio_max_percent < 75 && damage_ratio_min_percent < 50){
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
};

function calculation (){
  const attackStatusNumber  = document.getElementById("attack_status_number");
  const attackPokemonName  = document.getElementById("attack_pokemon_name");
  const attackType1  = document.getElementById("attack_type1");
  const attackType2  = document.getElementById("attack_type2");
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
  const attackPersonalityCheckBlock  = document.querySelectorAll(".attack_personality_check_block");
  

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
  const kindCheckBlock = document.querySelectorAll(".kind_check_block");
  const attackPower  = document.getElementById("attack_power");
  const attackType  = document.getElementById("attack_type");
  const attackBurn  = document.getElementById("attack_burn");
  const burnCheckImage = document.getElementById("burn_check_image");

  const defenseStatusNumber  = document.getElementById("defense_status_number");
  const defensePokemonName  = document.getElementById("defense_pokemon_name");
  const defenseType1  = document.getElementById("defense_type1");
  const defenseType2  = document.getElementById("defense_type2");
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
  const defensePersonalityCheckBlock = document.querySelectorAll(".defense_personality_check_block");
  const defenseRankForm  = document.getElementById("defense_rank_form");
  const defenseRankFormLabel  = document.getElementById("defense_rank_form_label");
  const defenseRankRise  = document.getElementById("defense_rank_rise");
  const defenseRankDown  = document.getElementById("defense_rank_down");
  const defenseCharacteristic  = document.getElementById("defense_characteristic");
  const defenseTool  = document.getElementById("defense_tool");
  const defenseReflector  = document.getElementById("defense_reflector");
  const reflectorCheckImage = document.getElementById("reflector_check_image");
  const defenseHikari  = document.getElementById("defense_hikari");
  const hikariCheckImage = document.getElementById("hikari_check_image");

  const wetherContent  = document.querySelectorAll(".wether_content");
  wetherContent.forEach(function(list) {
    if (list.checked){
      wetherContentValue = list.value;
    }
  })
  const wetherCheckBlock = document.querySelectorAll(".wether_check_block");
  const fieldContent  = document.querySelectorAll(".field_content");
  fieldContent.forEach(function(list) {
    if (list.checked){
      fieldContentValue = list.value;
    }
  })
  const fieldCheckBlock = document.querySelectorAll(".field_check_block");
  const gravity  = document.getElementById("gravity");
  const gravityCheckImage = document.getElementById("gravity_check_image");
  const attackSidePokemon  = document.getElementById("attack_side_pokemon");
  const defenseSidePokemon  = document.getElementById("defense_side_pokemon");
  const damageFigureMax  = document.getElementById("damage_figure_max");
  const damageFigureYellow  = document.getElementById("damage_figure_yellow");
  const damageFigureRed  = document.getElementById("damage_figure_red");
  const damageFigureMin  = document.getElementById("damage_figure_min");
  const physicalNumber  = document.getElementById("physical_number");
  const adjustAbove  = document.getElementById("adjust_above");
  const adjustUnder  = document.getElementById("adjust_under");
  


  


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
  attackPokemonName.addEventListener("change", () => {
    console.log("あ")
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/pokemons/attack_pokemon", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      jsresponse = XHR.response
      attack_pokemon_type = []
      jsresponse.attack_pokemon_type.forEach( function(element){
        attack_pokemon_type.push(element.attributes.name)
      })
      attackStatusNumber.innerHTML = `H${jsresponse.attack_pokemon.H} A${jsresponse.attack_pokemon.A} B${jsresponse.attack_pokemon.B} C${jsresponse.attack_pokemon.C} D${jsresponse.attack_pokemon.D} S${jsresponse.attack_pokemon.S}`
      attackType1.innerHTML= ""
      attackType1.setAttribute("style", "background-color: transparent")
      attackType2.innerHTML= ""
      attackType2.setAttribute("style", "background-color: transparent")
      attackType1.innerHTML = attack_pokemon_type[0]
      type_background(attackType1)
      if (attack_pokemon_type[1]){
        attackType2.innerHTML = attack_pokemon_type[1]
        type_background(attackType2)
      }
      while (attackCharacteristic.firstChild) {
        attackCharacteristic.removeChild(attackCharacteristic.firstChild);
      }
      jsresponse.attack_pokemon_characteristics.forEach( function(element){
        let option1 = document.createElement('option');
        option1.textContent = element.attributes.name;
        attackCharacteristic.appendChild(option1);
      })
      while (attackTechniqueName.firstChild) {
        attackTechniqueName.removeChild(attackTechniqueName.firstChild);
      }
      i = 0
      jsresponse.techniques.forEach( function(element){
        let option2 = document.createElement('option');
        option2.value = i;
        option2.textContent = element.attributes.name;
        attackTechniqueName.appendChild(option2);
        i = i + 1
      });
      attackSidePokemon.innerHTML = jsresponse.attack_pokemon.name
      console.log(jsresponse)
      console.log(attackIndividual)
      technique_choice(jsresponse,attackTechniqueName,attackPower,attackType,attackKindPhysics,attackKindSpecial,kind)
      attack_status_calculation(jsresponse,attackPersonality,kind,attackLetter,attackStatus,attackIndividual,attackEffort,attackLevel)
      console.log(jsresponse.defense_pokemon)
      if (jsresponse.defense_pokemon !== ""){
        defense_defense_status_calculation(jsresponse,defensePersonality,kind,defenseLetter,defenseDefenseStatus,defenseDefenseIndividual,defenseDefenseEffort,defenseLevel)
        damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
      }
    };
  });

  attackLevel.addEventListener("change", () => {
    attack_status_calculation(jsresponse,attackPersonality,kind,attackLetter,attackStatus,attackIndividual,attackEffort,attackLevel)
    damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
  });
  
  attackIndividual.addEventListener("change", () => {
    attack_status_calculation(jsresponse,attackPersonality,kind,attackLetter,attackStatus,attackIndividual,attackEffort,attackLevel)
    damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
  });
  
  attackEffort.addEventListener("change", () => {
    attack_status_calculation(jsresponse,attackPersonality,kind,attackLetter,attackStatus,attackIndividual,attackEffort,attackLevel)
    damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
  });
  
  attackPersonality.forEach(function(list) {
    list.addEventListener("change", () => {
      attack_status_calculation(jsresponse,attackPersonality,kind,attackLetter,attackStatus,attackIndividual,attackEffort,attackLevel)
      damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
      
    });
  })
  attackPersonalityCheckBlock.forEach(function(list) {
    list.addEventListener("click", () => {
      attackPersonalityCheckBlock.forEach(function(item) {
        item.setAttribute("style", "background-color: gainsboro")
      })
      list.setAttribute("style", "background-color: white")
    })
  })
  
  attackStatus.addEventListener("change", () => {
    damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
  });

  attackCharacteristic.addEventListener("change", () => {
    damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
  });

  attackTool.addEventListener("change", () => {
    damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
  });

  attackTechniqueName.addEventListener("change", () => {
    technique_choice(jsresponse,attackTechniqueName,attackPower,attackType,attackKindPhysics,attackKindSpecial,kind)
    attack_status_calculation(jsresponse,attackPersonality,kind,attackLetter,attackStatus,attackIndividual,attackEffort,attackLevel)
    defense_defense_status_calculation(jsresponse,defensePersonality,kind,defenseLetter,defenseDefenseStatus,defenseDefenseIndividual,defenseDefenseEffort,defenseLevel)
    damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
  });

  kind.forEach(function(list) {
    list.addEventListener("change", () => {
      attack_status_calculation(jsresponse,attackPersonality,kind,attackLetter,attackStatus,attackIndividual,attackEffort,attackLevel)
      defense_defense_status_calculation(jsresponse,defensePersonality,kind,defenseLetter,defenseDefenseStatus,defenseDefenseIndividual,defenseDefenseEffort,defenseLevel)
      damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
    });
  })
  kindCheckBlock.forEach(function(list) {
    list.addEventListener("click", () => {
      kindCheckBlock.forEach(function(item) {
        item.setAttribute("style", "background-color: gainsboro")
      })
      list.setAttribute("style", "background-color: white")
    })
  })

  attackPower.addEventListener("change", () => {
    damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
  });

  attackType.addEventListener("change", () => {
    damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
  });

  attackBurn.addEventListener("change", () => {
    damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
  });

  burnCheckImage.addEventListener("click", () => {
    if (burnCheckImage.getAttribute("style") == "opacity: 1.0;") {
      burnCheckImage.removeAttribute("style", "opacity: 1.0;")
    } else {
      burnCheckImage.setAttribute("style", "opacity: 1.0;")
    }
  })

  defensePokemonName.addEventListener("change", () => {
    console.log("え")
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/pokemons/attack_pokemon", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      jsresponse = XHR.response
      defense_pokemon_type = []
      jsresponse.defense_pokemon_type.forEach( function(element){
        defense_pokemon_type.push(element.attributes.name)
      })
      defenseStatusNumber.innerHTML = `H${jsresponse.defense_pokemon.H} A${jsresponse.defense_pokemon.A} B${jsresponse.defense_pokemon.B} C${jsresponse.defense_pokemon.C} D${jsresponse.defense_pokemon.D} S${jsresponse.defense_pokemon.S}`
      defenseType1.innerHTML= ""
      defenseType1.setAttribute("style", "background-color: transparent")
      defenseType2.innerHTML= ""
      defenseType2.setAttribute("style", "background-color: transparent")
      defenseType1.innerHTML = defense_pokemon_type[0]
      type_background(defenseType1)
      if (defense_pokemon_type[1]){
        defenseType2.innerHTML = defense_pokemon_type[1]
        type_background(defenseType2)
      }
      while (defenseCharacteristic.firstChild) {
        defenseCharacteristic.removeChild(defenseCharacteristic.firstChild);
      }
      jsresponse.defense_pokemon_characteristics.forEach( function(element){
        let option1 = document.createElement('option');
        option1.textContent = element.attributes.name;
        defenseCharacteristic.appendChild(option1);
      })
      defenseSidePokemon.innerHTML = jsresponse.defense_pokemon.name
      
      defense_physical_status_calculation(jsresponse,defensePhysicalStatus,defensePhysicalIndividual,defensePhysicalEffort,defenseLevel,physicalNumber)
      
      defense_defense_status_calculation(jsresponse,defensePersonality,kind,defenseLetter,defenseDefenseStatus,defenseDefenseIndividual,defenseDefenseEffort,defenseLevel)
      if (jsresponse.attack_pokemon !== ""){
        damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
      }
    };
  });
  
  defenseLevel.addEventListener("change", () => {
    defense_physical_status_calculation(jsresponse,defensePhysicalStatus,defensePhysicalIndividual,defensePhysicalEffort,defenseLevel,physicalNumber)
    defense_defense_status_calculation(jsresponse,defensePersonality,kind,defenseLetter,defenseDefenseStatus,defenseDefenseIndividual,defenseDefenseEffort,defenseLevel)
    damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
  });
  
  defensePhysicalIndividual.addEventListener("change", () => {
    defense_physical_status_calculation(jsresponse,defensePhysicalStatus,defensePhysicalIndividual,defensePhysicalEffort,defenseLevel,physicalNumber)
    damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
  });
  
  defensePhysicalEffort.addEventListener("change", () => {
    defense_physical_status_calculation(jsresponse,defensePhysicalStatus,defensePhysicalIndividual,defensePhysicalEffort,defenseLevel,physicalNumber)
    damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
  });
  
  defenseDefenseIndividual.addEventListener("change", () => {
    defense_defense_status_calculation(jsresponse,defensePersonality,kind,defenseLetter,defenseDefenseStatus,defenseDefenseIndividual,defenseDefenseEffort,defenseLevel)
    damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
  });
  
  defenseDefenseEffort.addEventListener("change", () => {
    defense_defense_status_calculation(jsresponse,defensePersonality,kind,defenseLetter,defenseDefenseStatus,defenseDefenseIndividual,defenseDefenseEffort,defenseLevel)
    damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
  });

  defensePersonality.forEach(function(list) {
    list.addEventListener("change", () => {
      defense_defense_status_calculation(jsresponse,defensePersonality,kind,defenseLetter,defenseDefenseStatus,defenseDefenseIndividual,defenseDefenseEffort,defenseLevel)
      damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
    });
  })

  defensePersonalityCheckBlock.forEach(function(list) {
    list.addEventListener("click", () => {
      defensePersonalityCheckBlock.forEach(function(item) {
        item.setAttribute("style", "background-color: gainsboro")
      })
      list.setAttribute("style", "background-color: white")
    })
  })

  defensePhysicalStatus.addEventListener("change", () => {
    physicalNumber.innerHTML = `HP${defensePhysicalStatus.value}`
    damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
    
  });

  defenseDefenseStatus.addEventListener("change", () => {
    damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
  });

  defenseCharacteristic.addEventListener("change", () => {
    damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
  });

  defenseTool.addEventListener("change", () => {
    damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
  });

  defenseReflector.addEventListener("change", () => {
    damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
  });

  reflectorCheckImage.addEventListener("click", () => {
    if (reflectorCheckImage.getAttribute("style") == "opacity: 1.0;") {
      reflectorCheckImage.removeAttribute("style", "opacity: 1.0;")
    } else {
      reflectorCheckImage.setAttribute("style", "opacity: 1.0;")
    }
  })

  defenseHikari.addEventListener("change", () => {
    damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
  });

  hikariCheckImage.addEventListener("click", () => {
    if (hikariCheckImage.getAttribute("style") == "opacity: 1.0;") {
      hikariCheckImage.removeAttribute("style", "opacity: 1.0;")
    } else {
      hikariCheckImage.setAttribute("style", "opacity: 1.0;")
    }
  })

  wetherContent.forEach(function(list) {
    list.addEventListener("change", () => {
      damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
    });
  })
  wetherCheckBlock.forEach(function(list) {
    list.addEventListener("click", () => {
      wetherCheckBlock.forEach(function(item) {
        item.setAttribute("style", "background-color: gainsboro")
      })
      list.setAttribute("style", "background-color: white")
    })
  })

  fieldContent.forEach(function(list) {
    list.addEventListener("change", () => {
      damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
    });
  })
  fieldCheckBlock.forEach(function(list) {
    list.addEventListener("click", () => {
      fieldCheckBlock.forEach(function(item) {
        item.setAttribute("style", "background-color: gainsboro")
      })
      list.setAttribute("style", "background-color: white")
    })
  })

  gravity.addEventListener("change", () => {
    damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
  });
  gravityCheckImage.addEventListener("click", () => {
    if (gravityCheckImage.getAttribute("style") == "opacity: 1.0;") {
      gravityCheckImage.removeAttribute("style", "opacity: 1.0;")
    } else {
      gravityCheckImage.setAttribute("style", "opacity: 1.0;")
    }
  })


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
    damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
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
    damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
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
    damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
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
    damage_calculation_event(jsresponse,fieldContent,kind,wetherContent,attackLevel,attackTechniqueName,attackPower,attackStatus,defenseDefenseStatus,attackType,attackRankForm,attack_pokemon_type,attackTool,attackCharacteristic,defenseRankForm,defense_pokemon_type,defenseTool,defenseCharacteristic,attackBurn,defenseReflector,defenseHikari,defensePhysicalStatus,damageFigureYellow,damageFigureRed,damageFigureMax,damageFigureMin,adjustAbove,adjustUnder)
  })
};
/*
  attackBurn.addEventListener("click", () => {
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/pokemons/attack_pokemon", true);
    XHR.responseType = "json";
    XHR.send(formData);

    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };

      /*攻撃側*/ 
/*
      jsresponse = XHR.response
      attack_pokemon_type = []
      jsresponse.attack_pokemon_type.forEach( function(element){
        attack_pokemon_type.push(element.attributes.name)
      })
      
      const attack_pokemon = jsresponse.attack_pokemon;
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
      jsresponse.attack_pokemon_characteristics.forEach( function(element){
        let option1 = document.createElement('option');
        option1.textContent = element.attributes.name;
        attackCharacteristic.appendChild(option1);
      })

      while (attackTechniqueName.firstChild) {
        attackTechniqueName.removeChild(attackTechniqueName.firstChild);
      }
      i = 0
      jsresponse.techniques.forEach( function(element){
        let option2 = document.createElement('option');
        option2.value = i;
        option2.textContent = element.attributes.name;
        attackTechniqueName.appendChild(option2);
        i = i + 1
      });

      /*防御側*/ 
/*
      defense_pokemon_type = []
      jsresponse.defense_pokemon_type.forEach( function(element){
        defense_pokemon_type.push(element.attributes.name)
      })
      const defense_pokemon = jsresponse.defense_pokemon;
      
      defensePhysicalStatus.value = status_calculation_HP(defense_pokemon.H,defensePhysicalIndividual.value,defensePhysicalEffort.value,defenseLevel.value)
      defensePersonality.forEach(function(list) {
        if (list.checked){
          defensePersonalityValue = list.value;
        }
      })
      kind.forEach(function(list) {
        if (list.checked){
          kindValue = list.value;
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
      jsresponse.defense_pokemon_characteristics.forEach( function(element){
        let option1 = document.createElement('option');
        option1.textContent = element.attributes.name;
        defenseCharacteristic.appendChild(option1);
      })
    };
  });
  defenseReflector.addEventListener("click", () => {
    attackTechniqueNameValueN = parseInt(attackTechniqueName.value)
    attack_power = jsresponse.techniques[attackTechniqueNameValueN].attributes.power
    attackPower.value = parseInt(attack_power)
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
  });
  defenseHikari.addEventListener("click", () => {
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
      damageFigureYellow.removeAttribute("style", "display:block;")
      damageFigureRed.removeAttribute("style", "display:block;")
      damageFigureMax.setAttribute("style", `width:${100 - damage_ratio_max_percent}%;`)
      damageFigureMin.setAttribute("style", `width:${damage_ratio_max_percent - damage_ratio_min_percent}%;`)
    }else if(50 <= damage_ratio_max_percent && damage_ratio_max_percent < 75 && damage_ratio_min_percent < 50){
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
};*/
window.addEventListener('load', calculation);

