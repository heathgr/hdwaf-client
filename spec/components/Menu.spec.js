//jscs:disable maximumLineLength

import { expect } from 'chai';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import sinon from 'sinon';
import React from 'react';

import Menu from '../../src/components/Menu';
import SignIn from '../../src/components/Menu/SignIn';
import CreateProfile from '../../src/components/Menu/CreateProfile';
import UpdateStatus from '../../src/components/Menu/UpdateStatus';

describe('<Menu />', () => {
  chai.use(chaiEnzyme);

  it('should display nothing is there is no user data.', () => {
    const onSignIn = () => {};

    const onSignOut = () => {};

    const onCreateProfile = () => {};

    const menuWrapper = mount(<Menu
      user={null}
      onSignIn={onSignIn}
      onSignOut={onSignOut}
      onCreateProfile={onCreateProfile}
    />);

    expect(menuWrapper).to.have.text('');
  });

  it('should display a sign in component if the user isn\'t authenticated', () => {
    const onSignIn = () => {};

    const onSignOut = () => {};

    const onCreateProfile = () => {};

    const menuWrapper = mount(<Menu
      user={{ authData: null, profile: null }}
      onSignIn={onSignIn}
      onSignOut={onSignOut}
      onCreateProfile={onCreateProfile}
    />);

    expect(menuWrapper).to.contain(<SignIn onSignIn={onSignIn}/>);
  });

  it('should display a create profile component if the user is authenticated and has no profile.', () => {
    const onSignIn = () => {};

    const onSignOut = () => {};

    const onCreateProfile = () => {};

    const user = {
      authData: {
        uid: 'google:77773857667',
        google: {
          displayName: 'Doctor Philastus Hurlbut',
        },
      },
      profile: null,
    };
    const menuWrapper = mount(<Menu
      onSignIn={ onSignIn }
      onSignOut={ onSignOut }
      onCreateProfile = { onCreateProfile }
      user={ user }
    />);

    expect(menuWrapper).to.contain(<CreateProfile
      onSignOut={ onSignOut }
      onCreateProfile = { onCreateProfile }
      user={ user }
    />);
  });

  it('should display an update component if the user is authenticated and has a profile.', () => {
    const onSignIn = () => {};

    const onSignOut = () => {};

    const onCreateProfile = () => {};

    const user = {
      authData: {
        uid: 2,
      },
      profile: {
        displayName: 'bob',
        ageRange: 2,
        gender: 1,
        status: 2,
      },
    };
    const menuWrapper = mount(<Menu
      onSignIn={ onSignIn }
      onSignOut={ onSignOut }
      onCreateProfile={ onCreateProfile }
      user={ user }
    />);

    expect(menuWrapper).to.contain(<UpdateStatus />);
  });
});
