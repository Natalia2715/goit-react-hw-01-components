import s from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
  return (
    <ul className={s.friend_list}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
