Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show] do
      resources :bookings, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :locations, only: [:create, :index, :show] do
      resources :events, only: [:create, :index, :show]
    end
    resources :bookings, only: [:create, :show]
  end

  root to: 'static_pages#root'

end
