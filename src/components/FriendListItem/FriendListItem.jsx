import PropTypes from "prop-types";
import s from "./FriendListItem.module.css"

function FriendListItem({
    avatar, name, isOnline
}) {
    return (
        <><div className={s.status} style={{
            backgroundColor: isOnline ? "green" : "red",
        }}>   </div>
  <img className={s.avatar} src={avatar} alt={name} width="48" />
  <p className={s.name}>{name}</p></>
        
    )
}

export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,

}