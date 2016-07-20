import React, { Component, PropTypes } from 'react';

class SignIn extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return <div id="menuWrapper">
      <h1>Want to participate?</h1>
      <button onClick={ this.props.onSignIn }>Sign In With Your Google Account</button>
    </div>;
  }
}

SignIn.propTypes = {
  onSignIn: PropTypes.func.isRequired,
};

export default SignIn;
