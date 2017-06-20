import React from 'react';
import { Link, hashHistory } from 'react-router';
import UserContributionListItem from './user_contribution_list_item';

class UserContributionShow extends React.Component {
  constructor(props) {
    super(props);
    this.location = this.location.bind(this);
    this.contributionList = this.contributionList.bind(this);
  }

  componentDidMount() {
    if(this.props.params) {
      this.props.fetchUser(this.props.params.userId);
    }
  }

  render() {
    console.log(this.props);
    const {contributions, user, currentUser } = this.props;
    return (
      <div className='user-show-stats'>
          <br/>
          <br/>
          <h1 className="user-title">{user.username}</h1>
          <br/>
          <div className="user-location">{this.location(user.zip)}</div>
          <br/>
          <ul className="user-links">
            <li><Link to={`users/${user.id}`}>Profile</Link></li>
            <li><Link to={`users/${user.id}/campaigns`}>Campaigns</Link></li>
            <li><Link to={`users/${user.id}/contributions`}>Contributions</Link></li>
          </ul>
          <br/>
          {this.contributionList()}
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

    contributionList() {
      const { contributions } = this.props.user;
      const username = this.props.user.username;
      console.log(contributions);
      if (contributions.length > 0) {
        return (
          <div>
            <h2 className='user-campaign-list-header'>{`${username}'s Contributions'`}</h2>
            {contributions.map( contribution => (
              <div>
                <p>{contribution.amount}</p>
                <UserContributionListItem contribution={contribution}/>
              </div>
            ))
            }
          </div>
        );
      } else {
        return (
          <div className='no-user-campaigns'>This user hasn't made any contributions yet...pobrecito</div>
        );
      }

    }

}

export default UserContributionShow;
