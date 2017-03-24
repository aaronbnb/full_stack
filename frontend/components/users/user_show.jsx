import React from 'react';
import { Link, hashHistory } from 'react-router';
import UserFormContainer from './user_form_container';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
    this.profileImage = this.profileImage.bind(this);
    this.bodyDescribe = this.bodyDescribe.bind(this);
    this.shortDescribe = this.shortDescribe.bind(this);
    this.location = this.location.bind(this);
  }

  componentDidMount() {
    if(this.props.params) {
      this.props.fetchUser(this.props.params.userId);
    }
  }

  componentWillUpdate(nextProps) {
    if(!nextProps.currentUser || !this.props.currentUser) {
      hashHistory.push("/");
    } else if (nextProps.currentUser.id !== parseInt(nextProps.params.userId)){
      this.props.fetchUser(nextProps.params.userId);
    }
  }

  render() {
    const {username, zip, description, profile_img_url, tagline} = this.props.currentUser;

    return (
      <div className="user-show-page">
          <div className='user-show-stats'>
              <br/>
              <br/>
              <h1 className="user-title">{(this.props.currentUser === null) ? "" : this.props.currentUser.username }</h1>
              <br/>
              <div className="user-location">{this.location(zip)}</div>
              <br/>
              <ul className="user-links">
                <li>Profile</li>
                <li><Link to={`users/${this.props.currentUser.id}/campaigns`}>Campaigns</Link></li>
                <li>Contributions</li>
              </ul>
              <br/>
            <div className="user-profile-img">{this.profileImage(profile_img_url)}</div>
            <br/><br/>
            <div>{this.shortDescribe(tagline)}</div>
            <br/>
            <div>{this.bodyDescribe(description)}</div>
            <br/>
          </div>
      </div>
    );
  }

  profileImage(profileImgUrl) {
    if (profileImgUrl === null || profileImgUrl === "") {
      return (
        <div>"hello"</div>
      );
    } else {
      return (
        <img src={`${profileImgUrl}`}/>
      );
    }

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

  shortDescribe(tagline) {
    if(tagline === null || tagline === '') {
      return (
        <div>
          <p className="no-user-bio">this person's still thinking up their tagline.</p>
        </div>);
    } else {
      return (
        <div>
          <h3 className='about-me-header'>{tagline}</h3>
        </div>);
    }
  }

  bodyDescribe(description) {
    if(description === null || description === "") {
      return (
          <div>
            <p className="no-user-bio">this person hasn't written a bio yet...</p>
          </div>);

    } else {
      return (
        <div>
          <p className='user-body-description'>
            {description}
          </p>
        </div>
      );
    }
  }



}

export default UserShow;
