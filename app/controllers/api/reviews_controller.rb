class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.all
    render :index
  end

  def show
    @reviews = Review.find(params[:id])
    render :show
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json: @review, status: :unprocessable_entity
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review && @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy

    render :show
  end

  private
  def review_params
    params.require(:review).permit(:rating, :body, :drink_id, :authour_id)
  end

end
