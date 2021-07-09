Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'static/pages'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :reviews, only: [:create, :show, :index, :destroy, :update]
    resources :drinks, only: [:show, :index]
    resources :check_ins, only: [:index, :create, :show, :update, :destroy]
    resources :bars, only: [:index, :create, :show]
  end

  root "static_pages#root"
end
