Rails.application.routes.draw do
  root to: 'pokemons#index'
  resources :pokemons do
    collection do
      post 'search'
    end
    collection do
      post 'attack_pokemon'
    end
    collection do
      post 'attack_technique'
    end



  end
end
