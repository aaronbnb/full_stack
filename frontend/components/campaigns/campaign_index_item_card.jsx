import React from 'react';
import { hashHistory, withRouter, Link } from 'react-router';

class CampaignIndexItemCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {campaign} = this.props;
    return (
      <div>
        <li>Id {campaign.id} </li>
        <li>Title {campaign.title} </li>
        <li>Tagline {campaign.description}</li>
        <li>Location {campaign.location}</li>
        <li>Goal$ {campaign.goal}</li>
      </div>
    );
  }


}

export default CampaignIndexItemCard;
