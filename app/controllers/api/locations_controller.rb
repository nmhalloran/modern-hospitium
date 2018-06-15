class Api::LocationsController < ApplicationController

  def index
    @locations = Location.limit(3).order("RANDOM()")
  end

  def create
    @location = Location.new(location_params)
    @location.save
  end

  def show
    @location = Location.find(params[:id])

  end

  def update
    @location = Location.find(params[:id])

  end

  def location_params
    params.require(:location).permit(:name, :img_url, :longtitude, :latitude)
  end

end
