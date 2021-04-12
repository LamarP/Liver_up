class Api::DrinksController < ApplicationController

  def index
    @drinks = Drinks.all
    render :index
  end

  def show
    @drink = Drink.find(params[:id])
    if @drink
      render :show
    else
      render json: @drink.errors, status: 422
    end
  end

  private

  def drink_params
    params.require(:drink).permit(
      :drink_name, 
      :description, 
      :abv, 
      :base_spirit, 
      :bar_id)
  end

end