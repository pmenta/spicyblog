import styles from './index.module.scss'

export const Header = () => {
 return (
  <header className={styles.header}>
   <span className={styles.logo}>
    spicy<strong>blog</strong>
   </span>
  </header>
 )
}