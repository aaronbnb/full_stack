class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      @user.zip = 12345
      @user.description = ""
      @user.profile_img_url = ""
      @user.email = ""
      puts 'it works, passed validations, in users controller'
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
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
    params.require(:user).permit(:username, :password, :email, :profile_img_url, :zip, :description)
  end
end
