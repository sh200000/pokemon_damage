class PokemonsController < ApplicationController

  def search
    @pokemons = Pokemon.like(name: "#{params[:attack_pokemon_name]}%")
    
    render json:{ post: post }
  end

  def attack_pokemon
    
    params_attack = params[:attack_pokemon_name]
    @attack_pokemon = Pokemon.like(name: "#{params_attack}")
    attack_pokemon = @attack_pokemon[0].attributes
    attack_pokemon_type = @attack_pokemon[0].types
    techniques = @attack_pokemon[0].techniques
    attack_pokemon_characteristics = @attack_pokemon[0].characteristics

    technique_type = []
    technique_kind = []
    techniques.each do |technique|
      technique_type << technique.type
      technique_kind << technique.kind
    end

    

    
    params_defense = params[:defense_pokemon_name]
    @defense_pokemon = Pokemon.like(name: "#{params_defense}")
    defense_pokemon = @defense_pokemon[0].attributes
    defense_pokemon_type = @defense_pokemon[0].types
    defense_pokemon_characteristics = @defense_pokemon[0].characteristics
    
    render json:{ attack_pokemon: attack_pokemon, attack_pokemon_type:attack_pokemon_type, techniques:techniques, technique_type:technique_type, technique_kind:technique_kind, attack_pokemon_characteristics:attack_pokemon_characteristics, 
                  defense_pokemon: defense_pokemon, defense_pokemon_type:defense_pokemon_type, defense_pokemon_characteristics:defense_pokemon_characteristics}
    #render json:{ attack_pokemon: attack_pokemon, attack_pokemon_type:attack_pokemon_type, techniques:techniques, technique_type: technique_type, attack_pokemon_characteristics: attack_pokemon_characteristics}
  end


end
