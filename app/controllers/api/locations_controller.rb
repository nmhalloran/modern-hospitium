class Api::LocationsController < ApplicationController
  def create
    @location = Location.new(location_params)
    @location.save
  end

  def show
    # if (!params[:id]) {
    #   params[:id] = 1
    # }
    @location = Location.find(params[:id])

  end

  def update
    @location = Location.find(params[:id])

  end

  def location_params
    params.require(:location).permit(:name, :img_url, :longtitude, :latitude)
  end

end
