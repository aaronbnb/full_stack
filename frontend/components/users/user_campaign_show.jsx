import React from 'react';
import { Link, hashHistory } from 'react-router';
import UserCampaignListItem from './user_campaign_list_item';

class UserCampaignShow extends React.Component {
  constructor(props) {
    super(props);
    this.location = this.location.bind(this);
    this.campaignList = this.campaignList.bind(this);
  }

  componentDidMount() {
    if(this.props.params) {
      this.props.fetchUser(this.props.params.userId);
    }
  }

  render() {
    const {campaigns, user, currentUser } = this.props;
    return (
      <div className='user-show-stats'>
          <br/>
          <br/>
          <h1 className="user-title">{user.username }</h1>
          <br/>
          <div className="user-location">{this.location(user.zip)}</div>
          <br/>
          <ul className="user-links">
            <li><Link to={`users/${user.id}`}>Profile</Link></li>
            <li><Link to={`users/${user.id}/campaigns`}>Campaigns</Link></li>
            <li>Contributions</li>
          </ul>
          <br/>
          {this.campaignList(campaigns)}
      </div>
    );
  }

  location(zip) {
    //GOOGLE API KEY key=AIzaSyAHhycfifm2AlcOCRH_zClV40jAnuuczIg
    zip = (zip === null) ? "94610" : zip;
      return(
        <div>
          <p><i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>&nbsp;{zip}</p>
        </div>
      );
    }

    campaignList(campaigns) {
      if (campaigns.length > 0) {
        return (
          <div>
            <h2 className='user-campaign-list-header'>Campaigns I'm On</h2>
            {campaigns.map( campaign => (
              <UserCampaignListItem campaign={campaign} user={this.props.user} key={campaign.id} currentUser={this.props.currentUser}/>
            ))
            }
          </div>
        );
      } else {
        return (
          <div className='no-user-campaigns'>This user hasn't made any campaigns yet...pobrecito</div>
        );
      }

    }

}

export default UserCampaignShow;
