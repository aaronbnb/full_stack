import React from 'react';
import Progress from 'react-progressbar';

class CampaignStatusBar extends React.Component {
  constructor(props) {
    super(props);
    }

  render () {
    const progress = (this.props.status / this.props.goal)*100;
    return (
      <div>
        <Progress completed={progress} />
      </div>
    );
  }
}

export default CampaignStatusBar;
