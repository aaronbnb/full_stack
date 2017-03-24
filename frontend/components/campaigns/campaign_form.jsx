import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import RewardFormContainer from '../rewards/reward_form_container';
import merge from 'lodash/merge';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'cnulddmh';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dn4jhnh54/image/upload';


class CampaignForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.campaign;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayRewardForm = this.displayRewardForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const campaign = Object.assign({}, this.state);
    delete campaign.showRewardForm;
    delete campaign.uploadedFile;
  //  this.props.processForm(user);
  //modal code...
    this.props.createCampaign(campaign);
    //hashHistory.push(campaigns/rewards) or provide link
 }

 onImageDrop(files) {
   this.setState({
     uploadedFile: files[0]
   });

   this.handleImageUpload(files[0]);
 }

 handleImageUpload(file) {
   let upload = request.post(CLOUDINARY_UPLOAD_URL)
                       .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                       .field('file', file);

   upload.end((err, response) => {
     if (err) {
       console.error(err);
     }

     if (response.body.secure_url !== '') {
       this.setState({
         main_img_url: response.body.secure_url
       });
     }
   });
 }

 displayRewardForm() {
   this.setState({"showRewardForm": !this.state.showRewardForm});
 }

 rewardForm(e){
   return <RewardFormContainer campaign={this.state}/>;
 }


 update(field) {

  return (e) => {
    this.setState({[field]: e.target.value});
  };
}

componentWillReceiveProps(newProps) {
}

  render() {
    return (
      <div>
      <div className="campaign-form-container">
        <br/>
        <h2 className="campaign-form-header">Start a campaign</h2>
        <h3 className="campaign-form-tagline">Raise funds for creative, entrepreneurial,
        or other passion projects.</h3>
      <form onSubmit={this.handleSubmit}>
        <div className="campaign-form">
          <br/>
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
          <br/>
            <label> Campaign Tagline
              <p className="input-descriptor">Provide a short description that best describes your campaign to your audience.</p>
              <textarea
                value={this.state.description}
                onChange={this.update('description')}
                className="description-input" />
            </label>

          <br/>
          <br/>
            <label> Campaign Card Image </label>
              <p className="input-descriptor">
                Upload a square image that represents your campaign.
                640 x 640 recommended resolution, 220 x 220 minimum resolution.
              </p>
              <div className='user-dropzone'>
               <Dropzone
                 multiple={false}
                 accept="image/*"
                 onDrop={this.onImageDrop.bind(this)}>

                 <p className="dropzone-text"><i className="fa fa-camera fa-2x" aria-hidden="true"></i>upload image</p>
               </Dropzone>
               <div>
              <div className="FileUpload">
                ...
              </div>

              <div>
                {this.state.main_img_url === '' ? null :
                <div>
                  <img src={this.state.main_img_url} />
                  {}
                </div>}
              </div>
            </div>
            </div>
              <br/>
              <br/>
              <br/>
            <label> Campaign Location
              <p className="input-descriptor">
                Choose the location where you are running the campaign. This location
                will be visible on your campaign page for your audience to see.
              </p>
              <input type="text"
                value={this.state.location}
                onChange={this.update('location')}
                className="location-input" />

            <br/>
            <br/>
            </label>
            <label> Campaign Overview
              <p className="input-descriptor">
                Lead with a compelling statement that describes your campaign
                and why it’s important to you, highlight key campaign features,
                and remember - keep it short!
              </p>
              <textarea
                value={this.state.overview}
                onChange={this.update('overview')}
                className="location-input" />
            </label>
            <br/>
            <br/>
        </div>
        <input className='campaign-submit-btn' type='submit' value="save & continue"></input>
      </form>
      </div>
      <div>
      </div>
    </div>
    );
  }
}

export default CampaignForm;
