class Api::BookingsController < ApplicationController
  def create
    @booking = Booking.new(booking_params)


    if @booking.save
      @location = Location.find(@booking.location_id)
      render "api/bookings/show"
    else
      render json ["Invalid booking date"], status: 401
    end
  end


  def show
    @booking = Booking.find(params[:id])
    @location = Location.find(@booking.location_id)

  end

  def update
    @booking = Booking.find(params[:id])

  end

  def booking_params
    params.require(:booking).permit(:location_id, :start_date, :end_date, :host_id, :guest_id)
  end

end
