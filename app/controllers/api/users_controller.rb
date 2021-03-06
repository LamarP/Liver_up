class Api::UsersController < ApplicationController

  before_action :require_logged_in, only: [:show]
  
  def show
    @user = User.find_by(id: params[:id])
    render :show 
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :img_url)
  end
end
