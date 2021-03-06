import React from 'react';
import CampaignIndexItemCard from "./campaign_index_item_card";
import { Link, hashHistory, withRouter } from 'react-router';

class CampaignIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCampaigns();
  }

  render() {
    const {campaigns} = this.props;

    return (
      <div className='moac-container'>
        <div className="buffer"/>
          <div className='campaign-index-container'>


            {campaigns.map( campaign => (
            <CampaignIndexItemCard campaign={campaign} key={campaign.id} currentUser={this.props.currentUser}/>
            ))}


          </div>
        <div className="buffer"/>
      </div>
    );
  }
}

export default CampaignIndex;
