import React from 'react';
import Progress from 'react-progressbar';

class CampaignStatusBar extends React.Component {
  constructor(props) {
    super(props);
    this.campaignPercent = this.campaignPercent.bind(this);
  }

  campaignPercent() {

  }

    render () {
      let progress;
      let status = parseInt(this.props.status);
      let goal = parseInt(this.props.goal);
      if (status === 0) {
        status = 1;
      }

      progress = Math.ceil(goal / status);

    return (
      <div>
        <Progress completed={progress} />
      </div>
    );
  }
}

export default CampaignStatusBar;
