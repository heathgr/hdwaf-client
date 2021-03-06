import React, { Component, PropTypes } from 'react';

let genderRef;
let ageRangeRef;

class CreateProfile extends Component {
  constructor (props) {
    super(props);

    this.createProfile = this.createProfile.bind(this);
  }

  createProfile () {
    this.props.onCreateProfile(
      parseInt(ageRangeRef.value),
      parseInt(genderRef.value)
    );
  }

  render () {
    return <div id="menuWrapper">
      <div className='menuLine'>
        <div className='createProfileLabel'>How old are you?</div>
        <select className='createProfileSelector' name='age range' id='ageRangeSelector' ref={
          (ref) => {
            ageRangeRef = ref;
          }
        }>
          {
            this.props.menuData.ageRanges.map(
              (ageRange, id) => <option value={id} key={id}>{ageRange}</option>
            )
          }
        </select>
      </div>
      <div className='menuLine'>
        <div className='createProfileLabel'>What do you identify as?</div>
        <select className='createProfileSelector' name='gender' id='genderSelector' ref={
          (ref) => {
            genderRef = ref;
          }
        }>
          {
            this.props.menuData.genders.map(
              (gender, id) => <option value={id} key={id}>{gender}</option>
            )
          }
        </select>
      </div>
      <div className='menuLine'>
        <button
          id='createProfileButton'
          onClick={this.createProfile}
        >
          Ok, let's get started.
        </button>
        <button
          id='signOutButton'
          onClick={this.props.onSignOut}
          style= {{
            backgroundColor: '#a50010',
            color: '#ffeeee',
          }}
        >
          Nevermind, I want to sign out.
        </button>
      </div>
    </div>;
  }
}

CreateProfile.propTypes = {
  user: PropTypes.object.isRequired,
  menuData: PropTypes.object.isRequired,
  onSignOut: PropTypes.func.isRequired,
  onCreateProfile: PropTypes.func.isRequired,
};

export default CreateProfile;
