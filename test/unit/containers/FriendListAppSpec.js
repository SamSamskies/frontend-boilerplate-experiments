import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { FriendListApp } from '../../../src/js/containers/FriendListApp/FriendListApp';

describe('FriendListApp', () => {

  let component;

  beforeEach(() => {
    const mockProps = {
      friendList: {
        friendsById: []
      },
      actions: {
        addFriend: sinon.stub()
      }
    };
    component = shallow(<FriendListApp {...mockProps} />);
  });

  it('shows an input to add a new friend', () => {
    expect(component.find('.addFriendInput')).to.exist;
  });

  it('shows a friend list', () => {
    expect(component.find('.friendList')).to.exist;
  });
});
