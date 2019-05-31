Rails.application.routes.draw do
  resources :bikes
  devise_for :users
  root to: 'bikes#index'
end
