Rails.application.routes.draw do
  resources :blogs do
    resources :comments
  end
end
