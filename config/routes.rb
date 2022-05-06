Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :locations, only: %i[index show]
  resources :areas, only: %i[show]
  resources :pokemons, only: %i[create update delete]

  # Users
  get "/signup", to: "users#new"
  resources :users, only: :create
  get "/pokemons", to: "users#show"
  get "/cart", to: "users#cart"

  # Sessions
  get "/login", to: "sessions#new"
  post "/login", to: "sessions#create"
  get "/logout", to: "sessions#destroy"

  # Defines the root path route ("/")
  root "locations#index"
end
