Rails.application.routes.draw do
  root :to => 'pages#home'
  resources :flights
  resources :airplanes
  resources :reservations
  resources :users

end
