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
    this.props.fetchCampaign(this.props.params.campaignId);
    window.scroll(0,0);
  }

  update(field) {

   return (e) => {
     this.setState({[field]: e.target.value});
    };
  }

  componentWillReceiveProps(newProps) {

  }


  handleSubmit(e) {
    e.preventDefault();
    //  this.props.processForm(user);
    const contribution = Object.assign({}, this.state);
    //modal code...
    this.props.createContribution(contribution);
      //hashHistory.push(campaigns/rewards) or provide link
  }

  render() {
    return (
      <div className="contribution-form-container">
        <form onSubmit={this.handleSubmit}>
          <h2>You're contributing to Campaign Name placeholder</h2>
          <label>
            <p className="input-descriptor">Your Contribution</p>
            <input type="number"
              value={this.state.amount}
              onChange={this.update('amount')}
              className="contribution-input"/>
          </label>
          <input className='campaign-submit-btn' type='submit' value="submit payment"></input>
        </form>
      </div>
    );
  }

}

export default ContributionForm;
