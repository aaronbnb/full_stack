import React from 'react';
import { hashHistory, withRouter } from 'react-router';
import merge from 'lodash/merge';

class ContributionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props;
  }

  componentDidMount() {
    window.scroll(0,0);
  }

  update(field) {
    return e => {
    let newContribution = Object.assign({}, this.state.contribution);
    newContribution.amount = e.target.value;
     this.setState({'contribution': newContribution});
    };
  }

  componentWillReceiveProps(newProps) {

  }


  handleSubmit(e) {
    e.preventDefault();
    //  this.props.processForm(user);
    debugger;
    const newContribution = Object.assign({}, this.state.contribution);
    newContribution.amount = parseInt(newContribution.amount);
    const updatedCampaign = Object.assign({}, this.state.campaign);

    this.props.createContribution(newContribution)
    .then(hashHistory.push(`campaigns/${newContribution.campaign_id}`));
    //modal code...
    //this.props.createContribution(contribution);
      //hashHistory.push(campaigns/rewards) or provide link
  }

  render() {
    debugger;
    return (
      <div className="contribution-form-container">
        <form onSubmit={this.handleSubmit}>
          <h2>You're contributing to {this.state.campaign.title}</h2>
          <label>
            <p className="input-descriptor">Your Contribution</p>
            <input type="number"
              value={this.state.contribution.amount}
              onChange={this.update()}
              className="contribution-input"/>
          </label>
          <input className='campaign-submit-btn' type='submit' value="submit payment"></input>
        </form>
      </div>
    );
  }

}

export default ContributionForm;
