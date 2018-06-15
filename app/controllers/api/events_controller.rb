class Api::EventsController < ApplicationController
  def create
    @event = Event.new(event_params)

    @event.save
    if @event.save
      render "api/eevent/show"
    else
      render json ["Event does not show date"], status: 401
    end
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
