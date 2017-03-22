import React from 'react';
import { hashHistory, withRouter, Link } from 'react-router';
import Progress from 'react-progressbar';

class CampaignShow extends React.Component {
  constructor(props) {
    super(props);
    this.campaignProfileStatusBar = this.campaignProfileStatusBar.bind(this);
  }

  componentDidMount() {
    if(this.props.params) {
      this.props.fetchCampaign(this.props.params.campaignId);
    }
  }

  render() {
    const { campaign } = this.props;
    return (
      <div className="campaign-show-page-container">
          <div className="campaign-profile-header-container">
          <div className='campaign-profile-img'><img src={campaign.main_img_url}></img></div>
          <div className='campaign-vital-stats-box'>
            <div className='campaign-profile-title'><li>{campaign.title}</li></div>
            <div className='campaign-profile-description'><li>{campaign.description}</li></div>
            <div className='campaign-profile-goal'><li>{campaign.goal}</li></div>
            <div className='campaign-status-bar-container'>
              <div>{this.campaignProfileStatusBar(campaign.goal, campaign.status)}</div>
              <p className='campaign-profile-status-footer'>&nbsp;75%</p>
            </div>
            <div>
            </div>
          </div>
        </div>
        <div>{this.campaignOverviewSection(campaign.overview)}</div>
        <li></li>
      </div>
    );
  }

  campaignOverviewSection(overview) {

    return (
      <div className='campaign-profile-overview'>
        <h2>Overview</h2>
        <br/>
        <div>
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


}

export default CampaignShow;
