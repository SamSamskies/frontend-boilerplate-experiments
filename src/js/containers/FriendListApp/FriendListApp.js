import './FriendListApp.scss';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AddFriendInput, FriendList } from '../../components';
import {
  addFriend,
  deleteFriend,
  starFriend
} from '../../reducers/friendList';
import { getFriendList } from '../../reducers';

export class FriendListApp extends Component {

  static propTypes = {
    friendList: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  render () {
    const { friendList: { friendsById }, actions } = this.props;

    return (
      <div className="friendListApp">
        <h1>Da Bro's List</h1>
        <AddFriendInput addFriend={actions.addFriend} />
        <FriendList friends={friendsById} actions={actions} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    friendList: getFriendList(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addFriend, deleteFriend, starFriend }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendListApp);
