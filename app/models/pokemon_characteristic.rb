class PokemonCharacteristic < ActiveHash::Base
  self.data = [
    { id: 0, pokemon_id: 0, characteristic_id: 0 },
    { id: 1, pokemon_id: 1, characteristic_id: 4 },
    { id: 2, pokemon_id: 1, characteristic_id: 5 },
    { id: 3, pokemon_id: 1, characteristic_id: 6 },
    { id: 4, pokemon_id: 2, characteristic_id: 7 },
    { id: 5, pokemon_id: 3, characteristic_id: 7 },
    { id: 6, pokemon_id: 4, characteristic_id: 1 },
    { id: 7, pokemon_id: 4, characteristic_id: 2 },
    { id: 8, pokemon_id: 4, characteristic_id: 3 },
    { id: 9, pokemon_id: 5, characteristic_id: 8 },
    { id: 10, pokemon_id: 6, characteristic_id: 9 },
    { id: 11, pokemon_id: 6, characteristic_id: 10 },
    { id: 12, pokemon_id: 6, characteristic_id: 11 },
    { id: 13, pokemon_id: 7, characteristic_id: 12 },
    { id: 14, pokemon_id: 7, characteristic_id: 13 },
    { id: 15, pokemon_id: 8, characteristic_id: 14 },
    { id: 16, pokemon_id: 8, characteristic_id: 15 },
    { id: 17, pokemon_id: 9, characteristic_id: 16 },
    { id: 18, pokemon_id: 10, characteristic_id: 17 },
    { id: 19, pokemon_id: 10, characteristic_id: 18 },
    { id: 20, pokemon_id: 10, characteristic_id: 19 },
    { id: 21, pokemon_id: 11, characteristic_id: 20 },
    { id: 22, pokemon_id: 11, characteristic_id: 21 },
    { id: 23, pokemon_id: 11, characteristic_id: 22 },
    { id: 24, pokemon_id: 12, characteristic_id: 23 },
    { id: 25, pokemon_id: 12, characteristic_id: 24 }
    
  ]
  
  include ActiveHash::Associations
    belongs_to :pokemon
    belongs_to :characteristic
end