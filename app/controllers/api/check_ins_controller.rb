class Api::CheckInsController < ApplicationController

  # before_action :require_logged_in

  def index
    @checkins = CheckIn.all.order(id: :desc)
    render :index
  end

  def show
    @checkin = CheckIn.find(params[:id])
    
    render :show
  end

  def destroy
    @checkin = CheckIn.find(params[:id])
    if @checkin
      @checkin.destroy
      render :show
    else
      render json: {delete:['CheckIn Does Not Exist']}, status: 404
    end
  end

  def create
    @checkin = CheckIn.new(checkin_params)
    if @checkin.save
      render :show
    else
      render json: @checkin.errors.messages, status: 422
    end
  end   


  private
  def checkin_params
    params.require(:checkin).permit(:rating, :body, :drink_id, :author_id)
  end
end
