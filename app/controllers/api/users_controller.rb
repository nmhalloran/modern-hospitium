class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def show
    @user = User.find(params[:id])
    @bookings = @user.bookings 

  end

  def update
    @user = User.find(params[:id])

  end

  def user_params
    params.require(:user).permit(:username, :password, :image_url, :location_id)
  end

end
