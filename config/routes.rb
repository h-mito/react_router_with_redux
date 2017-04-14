Rails.application.routes.draw do
  get 'myapp/index'
  get 'myapp/*path', to: 'myapp#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
