import React from 'react';
import { Link, hashHistory } from 'react-router';

class UserCampaignListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {campaign, user} = this.props;

    return (
      <div className="campaign-list-item">
        <div className="campaign-list-item-img">
          <img src={`${campaign.main_img_url}`}/>
        </div>
        <div className='campaign-list-item-info'>
        <li className='campaign-list-title-container'>
          <Link to={`campaigns/${campaign.id}`}
            className='campaign-list-item-title'>{campaign.title}</Link>
        </li>
        <li>
          <span className='campaign-list-item-by'>by </span>
          <Link to={`users/${user.id}`}
            className='campaign-list-item-by-user'>{user.username}</Link>
          </li>
          <div className='campaign-list-item-tagline'>{campaign.description}</div>
        </div>
      </div>
    );
  }
}

export default UserCampaignListItem;
