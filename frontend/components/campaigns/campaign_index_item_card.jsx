import React from 'react';
import { hashHistory, withRouter, Link } from 'react-router';

class CampaignIndexItemCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {campaign} = this.props;
    return (
      <div className='campaign-card'>
        <li className='campaign-preview-pic'>Id {campaign.main_img_url} </li>
        <li className='campaign-card-title'>Title {campaign.title} </li>
        <li className='campaign-card-tagline'>Tagline {campaign.description}</li>
        <li className='campaign-location'>Location {campaign.location}</li>
        <li className="status-bar"><p>status bar</p></li>
        <li className='campaign-goal'>Goal$ {campaign.goal}</li>
      </div>
    );
  }


}

export default CampaignIndexItemCard;
