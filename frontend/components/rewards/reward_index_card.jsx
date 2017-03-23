import React from 'react';
import {numberWithCommas} from '../../util/number_with_commas';
class RewardIndexCard extends React.Component {
  constructor(props) {
    super(props);
    this.numberWithCommas = numberWithCommas;
  }

  render() {
    const {reward} = this.props;
    return (
      <div className="reward-index-card">
        <li><p className="reward-card-price">${reward.price}<span className='reward-currency'> USD</span></p></li>
        <li><p className="reward-card-title">{reward.title}</p></li>
        <li><p className="reward-card-description">{reward.description}</p></li>
        <li><p className="reward-card-amount">{reward.amount}</p></li>
      </div>
    );
  }
}

export default RewardIndexCard;
