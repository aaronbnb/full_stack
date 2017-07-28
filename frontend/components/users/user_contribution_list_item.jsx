import React from 'react';
import { Link, hashHistory } from 'react-router';

class UserContributionListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.displayDate = this.displayDate.bind(this);
  }

  displayDate(date) {

    const months = {
      '01': "January",
      '02': "February",
      '03': "March",
      '04': "April",
      '05': "May",
      '06': "June",
      '07': "July",
      '08': "August",
      '09': "September",
      '10': "October",
      '11': "November",
      '12': "December"
    };
    if (date === undefined) {
      return `June ${Math.trunc(Math.random() * 30)}, 2017`;
    }
    let year = date.slice(0,4);
    let month = months[date.slice(5, 7)];
    let day = (date[8] === '0') ? date[9] : date.slice(8, 10);
    let dateString = month + " " + day + ", " + year;

    return dateString;
  }

  componentWillMount() {

  }

  render() {
    const { contribution, campaign } = this.props;

    let count = ((this.props.count % 2 ) === 0) ? 'even' : 'odd';

    const imgStyle = {
      backgroundImage: 'url(' + `${campaign.main_img_url}` + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '120px',
      width: '120px'
    };



    return (
      <div className={"contribution-list-item-container-" + `${count}`}>

          <div className='contribution-date-container'>
            <p>{this.displayDate(contribution.created_at)}</p>
          </div>

          <div className='contribution-campaign-pic-container'>
            <Link to={`campaigns/${campaign.id}`}
              className='campaign-list-item-title'>
              <div className='contribution-campaign-pic'
                style={imgStyle}
                alt={`Campaign profile pic. Link to ${campaign.title}`}>
              </div>
            </Link>
          </div>

          <div className='contribution-campaign-title-container'>
            <Link to={`campaigns/${campaign.id}`}>
              <p>{campaign.title}</p>
            </Link>
          </div>

          <div className='contribution-amount-container'>
            <p><span id='contribution-money'>$</span>&nbsp;{contribution.amount}</p>
          </div>

      </div>
    );
  }
}

export default UserContributionListItem;
