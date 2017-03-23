class Api::RewardsController < ApplicationController

  def create
    @reward = Reward.new(reward_params)
    if @reward.save
      render :show
    else
      render json: @reward.errors.full_messages, status: 422
    end
  end

  def index
    @rewards = Reward.all
  end

  def show
    @reward = Reward.find(params[:id])
    render :show
  end

  private

  def reward_params
    params.require(:reward).permit(:price, :campaign_id, :title, :description, :supply)
  end
end
