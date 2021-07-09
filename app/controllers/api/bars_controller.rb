class Api::BarsController < ApplicationController
  class Api::BreweriesController < ApplicationController
    
    def index
        @bars = Bar.all
    end

    def create
        @bar = Bar.new(Bar_params)
        if @bar.save
            render :show
        else
            render json: @bar.errors.full_messages, status: 422
        end    
    end

    def show
        @bar = Bar.find(params[:id])
    end

    private
    def Bar_params
        params.require(:bar).permit(:name, :style, :location)
    end
end
end
