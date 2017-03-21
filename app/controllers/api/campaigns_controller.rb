class Api::CampaignsController < ApplicationController

  def index
    @campaigns = Campaign.all
  end

  def create
    @campaign = Campaign.new(campaign_params)
    if @campaign.save
      render :show
    else
      render json: @campaign.errors.full_messages, status: 422
    end
  end

  def show
    @campaign = Campaign.find(params[:id])
    render :show
  end

  def update
    @campaign = Campaign.find(params[:id])
    if @campaign.update(campaign_params)
      render :show
    else
      render json: @campaign.errors.full_messages, status: 422
    end
  end

  def destroy
    campaign = Campaign.find(params[:id])
    campaign.destroy
    render :index
  end

  private

  def campaign_params
    params.require(:campaign)
      .permit(:title, :description, :location, :overview,
              :goal, :status, :main_img_url, :user_id, :category_id, :duration)
  end
end
