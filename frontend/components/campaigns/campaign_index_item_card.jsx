import React from 'react';
import { hashHistory, withRouter, Link } from 'react-router';
import CampaignStatusBar from './campaign_status_bar';

class CampaignIndexItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.numberWithCommas = this.numberWithCommas.bind(this);
  }

  render() {
    // onClick={hashHistory.push(`/api/campaigns/${campaign.id}`)}
    const {campaign} = this.props;
    return (
      <div className='campaign-card' onClick={() => hashHistory.push(`campaigns/${campaign.id}`)}>
        <li className='campaign-preview-pic'>
          <img src={campaign.main_img_url}/>
        </li>
        <div className='campaign-category-container'><li className='campaign-category-head'>To be seeded</li></div>
        <div className='campaign-title-container'><li className='campaign-card-title'>{campaign.title} </li></div>
        <div className='campaign-card-tagline-container'><li className='campaign-card-tagline'>{campaign.description}</li></div>
        <div className='campaign-card-location-container'><li className='campaign-location'><i className="fa fa-map-marker" aria-hidden="true"/>&nbsp;{campaign.location}</li></div>
        <div className='campaign-card-goal-container'><li className='campaign-card-goal'>&nbsp;{this.numberWithCommas(campaign.goal)}<p className="campaign-card-currency">&nbsp; USD</p></li></div>
        <div className='campaign-status-bar'>
          <CampaignStatusBar status={campaign.status} goal={campaign.goal}/></div>
          <p className='campaign-card-footer'>&nbsp;75%</p>
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

export default CampaignIndexItemCard;
