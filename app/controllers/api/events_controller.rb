class Api::EventsController < ApplicationController
  def create
    @event = Event.new(event_params)
    @event.save
  end

  def index
    @event = Event.all
  end

  def show
    @event = Event.find(params[:id])

  end

  def update
    @event = Event.find(params[:id])

  end

  def event_params
    params.require(:event).permit(:name, :img_url, :location_id, :date)
  end

end
