class Api::ContributionsController < ApplicationController

  def create
    @contribution = Contribution.new(contribute_params)
    if @contribution.save
      debugger
      render :show
    else
      render json: @contribution.errors.full_messages, status: 422
    end
  end

  def index
    @contributions = Contribution.all
    render :show
  end

  def contribute_params
    params.require(:contribution).permit(:amount, :user_id, :campaign_id, :reward_id)
  end

end
