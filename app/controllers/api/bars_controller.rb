class Api::BarsController < ApplicationController
 
    
    def index
        @bars = Bar.all
        render :index
    end

    def create
        @bar = Bar.new(bar_params)
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
    def bar_params
        params.require(:bar).permit(:name, :style, :location, :img_url,)
    end
end
