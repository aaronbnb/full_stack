import React from 'react';
import { hashHistory, withRouter, Link } from 'react-router';
import CampaignStatusBar from './campaign_status_bar';

class CampaignShow extends React.Component {
  constructor(props) {
    super(props);
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
            <div className="campaign-profile-status-bar">
              <CampaignStatusBar status={campaign.status} goal={campaign.goal}/>
              <p className='campaign-card-footer'>&nbsp;75%</p>
            </div>
          </div>
        </div>
        <div className='campaign-profile-overview'>{campaign.overview}</div>
        <li></li>
      </div>
    );
  }


}

export default CampaignShow;
