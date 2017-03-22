import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import merge from 'lodash/merge';

class RewardForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.reward;
    this.displayRewardFormAgain = this.displayRewardFormAgain.bind(this);
  }

  componentDidMount () {
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(newProps) {
  }

  displayRewardFormAgain() {
    this.setState({"more_rewards": true});
  }
  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

 handleSubmit(e) {
   e.preventDefault();

   const newState = merge({}, this.state);
   delete newState.more_rewards;
   this.props.createReward(newState);
   debugger;
    if (this.state.more_rewards) {
      this.setState({
          campaign_id: newState.campaign_id,
          title: "",
          description: "",
          supply : 0,
          price: 0,
          more_rewards: false
          });
      window.scroll(0, 0);
      hashHistory.push(`campaigns/${newState.campaign_id}/rewards`);
    } else {
      hashHistory.push(`campaigns/${newState.campaign_id}`);
    }
 }
 //  this.props.processForm(user);
 //modal code...
   //hashHistory.push(campaigns/rewards) or provide link

  render() {
    return (
      <div className='reward-form-container'>
        <br/>
            <input className='reward-submit-btn' onClick={() => hashHistory.push("/")} type='submit' value="skip rewards for now"></input>
        <form onSubmit={this.handleSubmit}>
          <div className='reward-form'>
          <br/>
        <h2 className='reward-form-header'>Add a Reward</h2>
        <h3 className='exit-reward-form'><div><Link onClick={() => hashHistory.push("/")}>Or don't worry about rewards for now</Link></div></h3>

          <br/>
          <br/>

        <label> Price
            <p className="reward-input-descriptor">Set an amount that you want to collect from backers who claim this reward.
              This amount should represent how much you want to receive for all the items included in this reward.</p>
            <input type="number"
              value={this.state.price}
              onChange={this.update('price')}
              className="price-input"/>
        </label>

          <br/>
          <br></br>
          <br></br>

          <label className="reward-form-title">Title
            <p className="reward-input-descriptor">The title for your reward is what will appear on your campaign page and throughout Indieclono. Create a title that best describes the contents of what this reward is offering.</p>
            <input type="text"
              value={this.state.title}
              onChange={this.update('title')}
              className="reward-title-input"/>
          </label>


          <br></br>
          <br></br>


          <label> Description
              <p className="reward-input-descriptor">Describe the details of this reward. Be creative, this is your opportunity to educate backers on what they will be receiving after they claim this reward.</p>
              <textarea type="text"
                value={this.state.description}
                onChange={this.update('description')}
                className="reward-description-input"/>
          </label>

          <br></br>
          <br></br>


            <label className="reward-form-title">Number Available
              <p className="reward-input-descriptor">How many of this reward do you want to offer? If you leave this field blank,
                there will be no limit to number of claims that can be made for this reward.</p>
              <input type="number"
                value={this.state.supply}
                onChange={this.update('supply')}
                className="reward-title-input"/>
            </label>
            <div>

          </div>
          <div className='reward-btns'>
            <br></br>
            <input className='reward-submit-btn' type='submit' value="save reward and finish"></input>
            <input className='reward-submit-another-btn' onClick={this.displayRewardFormAgain} type='submit' value="save and add another reward"></input>
          </div>
        </div>
      </form>

        <br></br>
        <br></br>
    </div>
    );
  }
}

export default RewardForm;
