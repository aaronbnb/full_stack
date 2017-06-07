class Api::ContributionsController < ApplicationController

  def create
    @contribution = Contribution.new(contribute_params)
    if @contribution.save
      render :show
    else
      render json: @contribution.errors.full_messages, status: 422
    end
  end

  def index
    debugger
    @contributions = Contribution.all
  end

  def contribute_params
    params.require(:contribution).permit(:amount, :user_id, :campaign_id, :reward_id)
  end

end
