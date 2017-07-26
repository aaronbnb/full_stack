import React from 'react';
import { Link, hashHistory } from 'react-router';
import UserContributionListItemContainer from './user_contribution_list_item_container';

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
      const { contributions } = this.props;
      const username = this.props.user.username;
      const count = 0;
      if (contributions.length > 0) {
        return (
          <div>
            <h2 className='user-campaign-list-header'>{`${username}'s Contributions'`}</h2>
            {contributions.map( (contribution, index) => (
              <div key={contribution.id} className='contributions-container'>
                <UserContributionListItemContainer
                  contribution={contribution}
                  count={index}/>
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
