Rails.application.routes.draw do
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :locations, only: %i[index show]
  resources :areas, only: %i[show]

  resources :users, only: %i[create show]
  get "/signup", to: "users#new"
  get "/login", to: "sessions#new"
  post "/sessions", to: "sessions#create"
  delete "/sessions", to: "sessions#destroy"

  # Defines the root path route ("/")
  root "locations#index"
end
