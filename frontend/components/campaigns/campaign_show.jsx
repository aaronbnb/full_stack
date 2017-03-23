import React from 'react';
import { hashHistory, withRouter, Link } from 'react-router';
import Progress from 'react-progressbar';
import RewardIndexCard from '../rewards/reward_index_card';

class CampaignShow extends React.Component {
  constructor(props) {
    super(props);
    this.campaignProfileStatusBar = this.campaignProfileStatusBar.bind(this);
    this.numberWithCommas = this.numberWithCommas.bind(this);
  }

  componentDidMount() {
    if(this.props.params) {
      this.props.fetchCampaign(this.props.params.campaignId);
    }
  }

  render() {
    const { campaign } = this.props;
    const { rewards } = this.props;
    return (
      <div className="campaign-show-page-container">
          <div className="campaign-profile-header-container">
          <div className='campaign-profile-img'><img src={campaign.main_img_url}></img></div>
          <div className='campaign-vital-stats-box'>
            <div className='campaign-profile-title'><li>{campaign.title}</li></div>
            <div className='campaign-profile-description'><li>{campaign.description}</li></div>
            <div className='campaign-profile-goal'><li>{this.numberWithCommas(campaign.goal)}</li></div>
            <div className='campaign-status-bar-container'>
              <div>{this.campaignProfileStatusBar(campaign.goal, campaign.status)}</div>
              <p className='campaign-profile-status-footer'>&nbsp;75%</p>
            </div>
            <div>
            </div>
          </div>
        </div>
        <div className="campaign-show-overview">{this.campaignOverviewSection(campaign.overview)}</div>
        <div className="rewards-sidebar">
          <h2 className="rewards-sidebar-header">&nbsp; rewards</h2>
          {rewards.map( reward =>
            <div>
              <RewardIndexCard reward={reward} />
            </div>
          )}
          </div>
      </div>
    );
  }

  campaignOverviewSection(overview) {

    return (
      <div className='campaign-profile-overview'>
        <h2 className='campaign-overview-header'> &nbsp; Overview</h2>
        <div className="overview-text">
          {overview}
        </div>
      </div>
    );
  }

  campaignProfileStatusBar(goal, status) {
    return (
      <div >
        <Progress completed={75} className="campaign-profile-status-bar"/>
      </div>
    );
  }

  numberWithCommas(num) {
    num = num.toString();
    let pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(num))
        num = num.replace(pattern, "$1,$2");
    return num;
  }

}

export default CampaignShow;
