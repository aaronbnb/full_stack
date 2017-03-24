import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'cnulddmh';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dn4jhnh54/image/upload';


class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if (user.uploadedFile != undefined) {
      delete user.uploadedFile;
    }
  //  this.props.processForm(user);
  //modal code...
    this.props.update(user);
    hashHistory.push(`users/${this.props.currentUser.id}`);
 }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
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
          profile_img_url: response.body.secure_url
        });
      }
    });
  }

  componentDidMount() {
  }

  componentWillUpdate(nextProps) {
    if(nextProps.currentUser === null) {
      hashHistory.push("/");
    }
  }

  render() {
    if(this.props.currentUser === null) {
      return (<div>""</div>);
    }
    return (
    <div>
      <br/>
      <br/>
      <h1 className="user-title">{this.props.currentUser.username}</h1>
    <div className="user-profile-update-component">
      <form onSubmit={this.handleSubmit} className="user-update-form">
        <div className="user-basic-info">
          <br/>
          <h2 className="user-form-header">Basic Info</h2>
          <br/>
            <label> &nbsp; Username
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
               />
            </label>
            <br/>
            <label> &nbsp;  Email
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
             />
            </label>
            <br/>
            <label> &nbsp; Post Code
              <input type="text"
                value={this.state.zip}
                onChange={this.update('zip')}
               />
            </label>
            <br/>

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
                {this.state.profile_img_url === '' ? null :
                <div>
                  <img src={this.state.profile_img_url} />
                  {}
                </div>}
              </div>
            </div>
            </div>

        </div>
          <br/>
          <br/>
        <div className="update-user-bio">
          <br/>
          <h2>Your Story</h2>
          <br/>
          <label> &nbsp; Short Description
          <input className="tagline-box"
              value={this.state.tagline}
              onChange={this.update('tagline')}/>
          </label>
          <br/>
          <label> &nbsp; About Me
          <textarea className="about-me-box"
            value={this.state.description}
            onChange={this.update('description')}/>
          </label>
          <br/>
        </div>

        <input className='user-update-btn' type='submit' value="save"></input>
      </form>
    </div>
    </div>
    );
  }
}

export default UserForm;
