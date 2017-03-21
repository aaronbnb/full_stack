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

    return (
      <div>
        <Progress completed={75} />
      </div>
    );
  }
}

export default CampaignStatusBar;
