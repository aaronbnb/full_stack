import React from 'react';
import { Link, hashHistory } from 'react-router';

class UserContributionListItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log(this.props);
  }

  componentDidMount() {
    console.log(this.props);
    this.props.fetchCampaign(this.props.contribution.campaign_id);
  }

  render() {
    const {contribution} = this.props;
    console.log(this.props);
    return (
      <div className="campaign-list-item">
        <div className='campaign-list-item-info'>
        <li className='campaign-list-title-container'>
          <Link to={`campaigns/${contribution.id}`}
            className='campaign-list-item-title'>${contribution.amount}</Link>
        </li>
        </div>
      </div>
    );
  }
}

export default UserContributionListItem;
