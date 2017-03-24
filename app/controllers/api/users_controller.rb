class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      @user.zip = 12347
      @user.description ||= "I'm a new programmer, trying to break into entrepreneurship."
      @user.profile_img_url = "http://blog.ramboll.com/fehmarnbelt/wp-content/themes/ramboll2/images/profile-img.jpg"
      @user.email ||= ""
      @user.tagline ||= ""
      @user.save
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :profile_img_url, :zip, :description, :tagline)
  end
end
