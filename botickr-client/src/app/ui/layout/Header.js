
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../../styles/layout/Header.module.css';

const Header = () => {
  return (
    <>
      <div className={styles['header-content']}>
      <div className="mr-5">BOTICK-R@</div>
      <button className={`${styles['content-button']} ${styles['content-button-category']}`}>
      <i className="bi bi-list"></i> 
         Categories
      </button>
      <button className={styles['content-button']}> Future functions</button>
      <button className={styles['content-button']}> Collaboration</button>
      <button className={styles['content-button']}> Newsletter</button>
      <button className={`${styles['content-button']} ${styles['content-lang-button']}`}> EN 
      <i className="bi bi-arrow-down"></i>

      </button>
      <button className={styles['content-button']}> User</button>

    </div>
    </>
  );
};

export default Header;