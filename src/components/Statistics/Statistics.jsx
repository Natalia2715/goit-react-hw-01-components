import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Statistics.module.css"
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function Statistics({ title, stats }) {
   return (<section className={styles.statistics}>
  <h2 className={styles.title}>{title}</h2>

       <ul className={styles.stat_list}>
           {stats.map(stat => (<li key={stat.id}
               style={{ backgroundColor: getRandomHexColor() }}
               className={styles.item} 
       
           >
               <span className={styles.label}>{stat.label}</span>
      <span className={styles.percentage}>{stat.percentage}</span></li>))}
  </ul>
</section>) 
}

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
          
    )
}