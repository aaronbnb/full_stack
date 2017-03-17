import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class CampaignForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const campaign = Object.assign({}, this.state);
  //  this.props.processForm(user);
  //modal code...
    this.props.create(campaign);
 }

 update(field) {
  return (e) => {
    this.setState({[field]: e.target.value});
  };
}

  render() {

    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <div>
          <br/>
          <h2 className="campaign-form-header">Start a campaign</h2>
          <h3 className="campaign-form-tagline">Raise funds for creative, entrepreneurial,
          or other passion projects.</h3>

          <br/>

            <label> Campaign Goal
              <p className="input-descriptor">How much would you like to raise?</p>
              <input type="number"
                value={this.state.goal}
                onChange={this.update('goal')}
                className="goal-input"/>
              <p className="minimum-goal-info">Minimum $500</p>
            </label>

          <br/>

            <label> Campaign Title
              <p className="input-descriptor">What is the title of your campaign?</p>
              <input type="text"
                value={this.state.title}
                onChange={this.update('title')}
                className="title-input" />
            </label>

          <br/>

            <label> Campaign Tagline
              <p className="input-descriptor">Provide a short description that best describes your campaign to your audience.</p>
              <textarea
                value={this.state.description}
                onChange={this.update('description')}
                className="description-input" />
            </label>

          <br></br>

            <label> Campaign Card Image
              <p className="input-descriptor">
                Upload a square image that represents your campaign.
                640 x 640 recommended resolution, 220 x 220 minimum resolution.
              </p>
              <input type="text"
                value={this.state.main_img_url}
                onChange={this.update('main_img_url')}
                className="campaign-img-url-input" />
            </label>

          <br></br>

            <label> Campaign Location
              <p className="input-descriptor">
                Choose the location where you are running the campaign. This location
                will be visible on your campaign page for your audience to see.
              </p>
              <input type="text"
                value={this.state.location}
                onChange={this.update('location')}
                className="location-input" />
            </label>

          <br></br>

            <label> Campaign Overview
              <p className="input-descriptor">
                Lead with a compelling statement that describes your campaign
                and why it’s important to you, highlight key campaign features,
                and remember - keep it short!
              </p>
              <textarea
                value={this.state.location}
                onChange={this.update('location')}
                className="location-input" />
            </label>

          <br></br>

        </div>
        <input className='campaign-submit-btn' type='submit'>SAVE & CONTINUE</input>
      </form>
      </div>
    );
  }
}

export default CampaignForm;
