import React from 'react';
import { hashHistory, withRouter, Link } from 'react-router';
import CampaignStatusBar from './campaign_status_bar';

class CampaignIndexItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.numberWithCommas = this.numberWithCommas.bind(this);
    this.campaignPercent = this.campaignPercent.bind(this);
  }

  render() {
    // onClick={hashHistory.push(`/api/campaigns/${campaign.id}`)}
    const {campaign} = this.props;
    const categories = {
      1: "tech",
      2: "art",
      3: "health",
      5: "charity",
      4: "community",
      6: "public action"
    };
    return (
      <div className='campaign-card' onClick={() => hashHistory.push(`campaigns/${campaign.id}`)}>
        <li className='campaign-preview-pic'>
          <img src={campaign.main_img_url}/>
        </li>
        <div className='campaign-category-container'><li className='campaign-category-head'>{categories[campaign.category_id]}</li></div>
        <div className='campaign-title-container'><p className='campaign-card-title'>{campaign.title} </p></div>
        <div className='campaign-card-tagline-container'><li className='campaign-card-tagline'>{campaign.description}</li></div>
        <div className='campaign-card-location-container'><li className='campaign-location'><i className="fa fa-map-marker" aria-hidden="true"/>&nbsp;{campaign.location}</li></div>
        <div className='campaign-card-goal-container'><li className='campaign-card-goal'>&nbsp;${this.numberWithCommas(campaign.goal)}<span className="campaign-card-currency">&nbsp;USD</span></li></div>
        <div className='campaign-status-bar'>
          <CampaignStatusBar status={campaign.status} goal={campaign.goal}/></div>
          <p className='campaign-card-footer'>{this.campaignPercent(campaign.status, campaign.goal)}% raised</p>
      </div>
    );
  }

  campaignPercent(status, goal) {
    let progress = (status / goal);
    if (progress < .01) return "Less than 1";
    let pct = (progress*100).toFixed(0);
    return pct;
  }


  numberWithCommas(num) {
    num = num.toString();
    let pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(num))
        num = num.replace(pattern, "$1,$2");
    return num;
  }
}

export default CampaignIndexItemCard;
