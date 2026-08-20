import styles from './productAction.module.scss';
import { useProductActions } from '../../context/ProductActionsContext';

type Props = {
  id: string;
  size?: 'catalog' | 'details';
};

export const ProductActions = ({ id, size = 'catalog' }: Props) => {
  const { cart, liked, toggleCart, toggleLike } = useProductActions();

  const isInCart = cart.includes(id);
  const isLiked = liked.includes(id);

  return (
    <div
      className={`${styles.buttons} ${
        size === 'details' ? styles.details : ''
      }`}
    >
      <button
        className={`${styles.buttons__add} ${
          isInCart ? styles.activeButton : ''
        }`}
        onClick={() => toggleCart(id)}
      >
        {isInCart ? 'Added' : 'Add to cart'}
      </button>
      <button
        className={`${styles.buttons__like} ${
          isLiked ? styles.activeButtonLike : ''
        }`}
        onClick={() => toggleLike(id)}
      >
        <img
          className={styles.lightIcon}
          src={
            isLiked
              ? '/img/icons/FavouritesFilled.svg'
              : '/img/icons/HeartLike.svg'
          }
          alt="icon heart like"
        />

        <img
          className={styles.darkIcon}
          src={
            isLiked
              ? '/img/icons-dark/Favourites-active.svg'
              : '/img/icons-dark/Favourites.svg'
          }
          alt="icon heart like"
        />
      </button>
    </div>
  );
};
