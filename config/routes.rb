Rails.application.routes.draw do
  root :to => 'pages#home'
  resources :flights
  resources :airplanes
  resources :reservations
  resources :users
  get "/seats" => 'flights#seats'

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end
