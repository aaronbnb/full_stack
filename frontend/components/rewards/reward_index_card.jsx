import React from 'react';
import {numberWithCommas} from '../../util/number_with_commas';
class RewardIndexCard extends React.Component {
  constructor(props) {
    super(props);
    this.numberWithCommas = this.numberWithCommas.bind(this);
  }

  render() {
    const {reward} = this.props;
    return (
      <div className="reward-index-card" >
        <li><p className="reward-card-price">${numberWithCommas(reward.price)}
          <span className='reward-currency'> USD</span>
          <span className='shipping-text'> + Shipping</span>
          </p>
        </li>
        <li><p className="reward-card-title">{reward.title}</p></li>
        <li><p className="reward-card-description">{reward.description}</p></li>
        <br/>
        <li>
          <p className='reward-supply'>{reward.supply} available</p>
          <p className='reward-supply'>Ships worldwide</p>
        </li>
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

export default RewardIndexCard;
