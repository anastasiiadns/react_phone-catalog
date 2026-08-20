import { useNavigate } from 'react-router-dom';
import styles from './backNavigation.module.scss';

export const BackNavigation = () => {
  const navigate = useNavigate();

  return (
    <button type="button" className={styles.back} onClick={() => navigate(-1)}>
      <div className={styles.back__images}>
        <img
          src="/img/icons/ArrowLeft.svg"
          alt="arrow left"
          className={styles.back__img}
        />
        <img
          src="/img/icons-dark/Arrow–left.svg"
          alt="arrow left"
          className={styles.back__imgDark}
        />
      </div>
      <div className={styles.back__title}>Back</div>
    </button>
  );
};
