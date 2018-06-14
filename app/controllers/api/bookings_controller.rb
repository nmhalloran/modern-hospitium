class Api::BookingsController < ApplicationController
  def create
    @booking = Booking.new(booking_params)
    @booking.save
  end


  def show
    @booking = Booking.find(params[:id])

  end

  def update
    @booking = Booking.find(params[:id])

  end

  def booking_params
    params.require(:booking).permit(:name, :location_id, :start_date, :end_date, :host_id, :guest_id)
  end

end
