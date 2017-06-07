import React from 'react';
import { Link, hashHistory } from 'react-router';

class UserContributionListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {contribution} = this.props;
    return (
      <div className="campaign-list-item">
        <div className='campaign-list-item-info'>
        <li className='campaign-list-title-container'>
          <Link to={`campaigns/${contribution.id}`}
            className='campaign-list-item-title'>{contribution.amount}</Link>
        </li>
        </div>
      </div>
    );
  }
}

export default UserContributionListItem;
