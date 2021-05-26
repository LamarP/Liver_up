class Api::CheckInsController < ApplicationController

  before_action :require_logged_in

  def index
    @checkins = CheckIn.all
    render :index
  end

  def show
    @checkin = CheckIn.find(params[:id])
    render :show
  end

  def create
    @checkIn = CheckIn.new(checkin_params)
    if @checkIn.save
      @drink = Drink.find(@check_in.drink_id)
      @user = User.find(@check_in.user_id)
      render :show
    else
      render json: @checkIn, status: :unprocessable_entity
    end
  end

  def update
    @checkIn = CheckIn.find(params[:id])
    if @checkIn && @checkIn.update(checkin_params)
      render :show
    else
      render json: @checkIn.errors.full_messages, status: 422
    end
  end

  def destroy
    @check_in = CheckIn.find(params[:id])
        @drink = Drink.find(@check_in.drink_id)
        @user = User.find(@check_in.user_id)
    if @check_in.destroy
        render :show
    else
        render json: @check_in.errors.full_messages, status: 422
    end    
end

  private
  def checkin_params
    params.require(:checkIn).permit(:rating, :body, :drink_id, :author_id)
  end
end
