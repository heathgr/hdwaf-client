//jscs:disable maximumLineLength
import { expect } from 'chai';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import sinon from 'sinon';
import React from 'react';

import CreateProfile from '../../../src/components/Menu/CreateProfile';
import menuData from '../../testConstants/menuData';
import ageRanges from '../../../src/constants/common/ageRanges';
import genders from '../../../src/constants/common/genders';

describe('<CreateProfile />', () => {
  chai.use(chaiEnzyme);

  const onCreateProfile = sinon.spy();
  const onSignOut = sinon.spy();
  const user = {
    authData: {
      uid: 'google:77773857667',
      displayName: 'Doctor Philastus Hurlbut',
    },
    profile: null,
  };
  const createProfileWrapper = mount(<CreateProfile
    user={ user }
    onCreateProfile={ onCreateProfile }
    onSignOut={ onSignOut }
    menuData={ menuData }
  />);

  it('should have an age range selector', () => {
    expect(createProfileWrapper.find('#ageRangeSelector')).to.have.exactly(ageRanges.length).descendants('option');
  });

  it('should have a gender selector', () => {
    expect(createProfileWrapper.find('#genderSelector')).to.have.exactly(genders.length).descendants('option');
  });

  it('should have a create profile button that calls the onCreateProfile function', () => {
    createProfileWrapper.find('#createProfileButton').simulate('click');
    expect(onCreateProfile.calledOnce).to.equal(true);
  });

  it('should have a sign off button that calls the onSignOff function', () => {
    createProfileWrapper.find('#signOutButton').simulate('click');
    expect(onSignOut.calledOnce).to.equal(true);
  });
});
