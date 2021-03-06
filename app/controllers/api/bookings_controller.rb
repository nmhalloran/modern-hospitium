class Api::BookingsController < ApplicationController
  def create
    @booking = Booking.new(booking_params)

    @booking.host_id = User.where(location_id: params['booking']['location_id']).sample.id
    @booking.location_name = Location.find(params['booking']['location_id']).name
    if @booking.save
      @location = Location.find(@booking.location_id)
      render "api/bookings/show"
    else
      render json ["Invalid booking date"], status: 401
    end
  end

  def index
    @guest = User.find(params[:user_id])
    @bookings = Booking.where(guest_id: @guest.id)
  end


  def show
    @booking = Booking.find(params[:id])
    @location = Location.find(@booking.location_id)

  end

  def update
    @booking = Booking.find(params[:id])

  end

  def booking_params
    params.require(:booking).permit(:location_id, :start_date, :end_date, :guest_id, :location_name)
  end

end
