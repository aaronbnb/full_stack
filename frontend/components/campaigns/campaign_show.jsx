import React from 'react';
import { hashHistory, withRouter, Link } from 'react-router';
import Progress from 'react-progressbar';
import RewardIndexCard from '../rewards/reward_index_card';
import CampaignStatusBar from '../campaigns/campaign_status_bar';

class CampaignShow extends React.Component {
  constructor(props) {
    super(props);
    window.scroll(0,0);
    this.numberWithCommas = this.numberWithCommas.bind(this);
    this.userBox = this.userBox.bind(this);
    this.campaignPercent = this.campaignPercent.bind(this);
    this.state = {amount: ""};
  }

  componentDidMount() {
    if(this.props.params) {
      this.props.fetchCampaign(this.props.params.campaignId);
    }
  }

  render() {
    // const { campaign } = this.props;
    const campaign = (this.props.campaign) ? this.props.campaign : {};
    const { rewards } = this.props;

    return (
      <div className="campaign-show-page-container">
          <div className="campaign-profile-header-container">
          <div className='campaign-profile-img'><img src={campaign.main_img_url}></img></div>
          <div className='campaign-vital-stats-box'>
            <div className='campaign-profile-title'>
              <li>{campaign.title}</li>
            </div>
            <div className='campaign-profile-description'>
              <li>{campaign.description}</li>
            </div>
            {this.userBox()}
            {this.contributeBox()}

            <div className='campaign-status-sec'>
              <div className='campaign-profile-goal'>
                <li>${this.numberWithCommas(campaign.goal)}
                  <span className="goal-text">&nbsp; goal</span>
                </li>
              </div>

              <CampaignStatusBar status={campaign.status} goal={campaign.goal}/>
              <p className='campaign-profile-status-footer'>
                &nbsp;{this.campaignPercent(campaign.status, campaign.goal)}% raised
              </p>
            </div>

          </div>
        </div>
        <div className="campaign-show-overview">{this.campaignOverviewSection(campaign.overview)}</div>
        <div className="rewards-sidebar">
          <h2 className="rewards-sidebar-header">&nbsp; rewards</h2>
          { (rewards.length > 0) ? rewards.map( reward =>
            <div key={reward.id}>
                 <RewardIndexCard reward={reward}/>
            </div>
          ) :
          <div className="sidebar-no-rewards">This campaign doesn't have any rewards yet</div>
          }
          </div>
      </div>
    );
  }


  userBox() {
    const user = (this.props.campaign) ? this.props.campaign.user : {};
    return (
      <div className='campaign-user-box'>
        <div className='campaign-user-stats'>
          <li><p className="user-box-username">{user.username}</p></li>
          <li><p className="user-box-location">{user.zip ? user.zip : "Philadelphia, PA"}</p></li>
          <li><Link to={`users/${user.id}`} className="user-about-link">About</Link></li>
        </div>
        <div className="user-box-picture">
          <img src={`${user.profile_img_url}`}></img>
        </div>
      </div>
    );
  }

  contributeBox() {
    const {campaign} = this.props;
    return (
      <div className='campaign-contribute-box'>
          <input type="number" min="0"
            className='campaign-contribution-input'
            value={this.state.amount}
            onChange={this.update('amount')}>
          </input>
          <button className="contribute-button"
            onClick={() => hashHistory.push(`campaigns/${campaign.id}/contribute/amt=${this.state.amount}`)}
          >
            back it
          </button>
      </div>
    );
  }

  update(field) {

   return (e) => {
     this.setState({[field]: e.target.value});
    };
  }


  campaignOverviewSection(overview) {

    return (
      <div className='campaign-profile-overview'>
        <h2 className='campaign-overview-header'> &nbsp; Overview</h2>
        <div className="overview-text">
          {overview}
        </div>
      </div>
    );
  }

  campaignPercent(status, goal) {
    let progress = (status / goal);
    if (progress < .01) return "Less than 1";
    let pct = (progress*100).toFixed(0);
    return pct;
  }

  numberWithCommas(num) {
    num = num ? num : "";
    num = num.toString();
    let pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(num))
        num = num.replace(pattern, "$1,$2");
    return num;
  }

}

export default CampaignShow;
