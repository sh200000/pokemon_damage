class PokemonType < ActiveHash::Base
  self.data = [

    { id: 1, pokemon_id: 1, type_id: 1 },
    { id: 2, pokemon_id: 2, type_id: 6 },
    { id: 3, pokemon_id: 3, type_id: 6 },
    { id: 4, pokemon_id: 4, type_id: 15 },
    { id: 5, pokemon_id: 4, type_id: 14 },
    { id: 6, pokemon_id: 5, type_id: 3 },
    { id: 7, pokemon_id: 6, type_id: 3 },
    { id: 8, pokemon_id: 6, type_id: 6 },
    { id: 9, pokemon_id: 7, type_id: 14 },
    { id: 10, pokemon_id: 8, type_id: 3 },
    { id: 11, pokemon_id: 9, type_id: 14 },
    { id: 12, pokemon_id: 9, type_id: 18 },
    { id: 13, pokemon_id: 10, type_id: 1 },
    { id: 14, pokemon_id: 11, type_id: 3 },
    { id: 15, pokemon_id: 11, type_id: 9 },
    { id: 16, pokemon_id: 12, type_id: 5 },
    { id: 17, pokemon_id: 12, type_id: 18 }
    
  ]
  
  include ActiveHash::Associations
    belongs_to :pokemon
    belongs_to :type
end