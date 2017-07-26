import React from 'react';
import { Link, hashHistory } from 'react-router';

class UserContributionListItem extends React.Component {
  constructor(props) {
    super(props);
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
    console.log("Fsd");
    let year = date.slice(0,4);
    let month = months[date.slice(5, 7)];
    let day = (date[8] === '0') ? date[9] : date.slice(8, 10);
    let dateString = month + " " + day + ", " + year;

    return dateString;
  }

  render() {
    const { contribution, campaign } = this.props;
    console.log(this.props);

    const imgStyle = {
      backgroundImage: 'url(' + `${campaign.main_img_url}` + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '200px',
      width: '200px'
    };

    return (
      <div className="contribution-list-item-container">

          <div className='contribution-date-container'>
            <p>{this.displayDate(contribution.created_at)}</p>
          </div>

          <div className='contribution-campaign-pic-container'>
            <Link to={`campaigns/${campaign.id}`}
              className='campaign-list-item-title'>
              <div className='contribution-campaign-pic'
                style={imgStyle}>
              </div>
            </Link>
          </div>

          <div className='contribution-amount-container'>
            <p>{contribution.amount}</p>
          </div>

      </div>
    );
  }
}

export default UserContributionListItem;
