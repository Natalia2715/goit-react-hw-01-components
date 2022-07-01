import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Profile.module.css"


function Profile({username, tag, location, avatar, stats}) {
   return (<div className={styles.profile}>
  <div className={styles.description}>
    <img
      src={avatar}
      alt={username}
      className={styles.avatar}
    />
    <p className={styles.name}>{username}</p>
       <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>

  <ul className={styles.stats}>
    <li className={styles.stats_item}>
      <span className={styles.label}>Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li className={styles.stats_item}>
      <span className={styles.label}>Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li className={styles.stats_item}>
      <span className={styles.label}>Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>) 
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired, 

}