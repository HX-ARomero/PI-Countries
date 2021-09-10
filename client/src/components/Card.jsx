import React from 'react';
import styles from './Card.module.css';

export function Card ({flag, name, region, population}) {
  return (
    <li className={styles.countryCard}>
      <img className={styles.image} src={flag} alt="{name}" />
      <h2 className={styles.title}>{name}</h2>
      <h3 className={styles.item}>Continent: {region}</h3>
      <h3 className={styles.item}>Population: {population}</h3>
    </li>
  )
}

/* export function Card ({flag, name, region, population}) {
  const backImg = { backgroundImage: 'url(' + flag + ')'};
  return (
    <li className={styles.countent}>
      <div className={styles.card} style={backImg}>
        <img className={styles.image} src={flag} alt="{name}" />
        <h2 className={styles.title}>{name}</h2>
        <h3 className={styles.item}>Continent: {region}</h3>
        <h3 className={styles.item}>Population: {population}</h3>
      </div>
    </li>
  )
} */