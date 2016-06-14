import { expect } from 'chai';
import {
  ADD_FRIEND,
  DELETE_FRIEND,
  STAR_FRIEND,
  addFriend,
  deleteFriend,
  starFriend
} from '../../../src/js/reducers/friendList';

describe('Actions', () => {

  describe('addFriend', () => {

    it('has the correct type', () => {
      const action = addFriend();
      expect(action.type).to.equal(ADD_FRIEND);
    });

    it('has the correct payload', () => {
      const action = addFriend('Eminem');
      expect(action.name).to.equal('Eminem');
    });
  });

  describe('deleteFriend', () => {

    it('has the correct type', () => {
      const action = deleteFriend();
      expect(action.type).to.equal(DELETE_FRIEND);
    });

    it('has the correct payload', () => {
      const action = deleteFriend(0);
      expect(action.id).to.equal(0);
    });
  });

  describe('starFriend', () => {

    it('has the correct type', () => {
      const action = starFriend();
      expect(action.type).to.equal(STAR_FRIEND);
    });

    it('has the correct payload', () => {
      const action = starFriend(1);
      expect(action.id).to.equal(1);
    });
  });
});
