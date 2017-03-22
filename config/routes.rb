Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :destroy, :show, :update]
    resource :session, only: [:create, :destroy, :show, :new]
    resources :campaigns, only: [:index, :create, :destroy, :update, :show, :edit] do
      resources :rewards, only: [:index, :create, :show]
    end
    resources :contributions, only: [:index, :create, :show]
  end
end
