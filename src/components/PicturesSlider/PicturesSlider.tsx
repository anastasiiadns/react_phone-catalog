import { useEffect, useState } from 'react';
import styles from './picturesSlider.module.scss';

export const PicturesSlider = () => {
  const isMobile = window.innerWidth > 639;

  const images = [
    isMobile ? '/img/banner1.svg' : '/img/mobileBanner.svg',
    '/img/banner-phones.png',
    isMobile ? '/img/banner-accessories.png' : '/img/mobileBanner3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextButton = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  const prevButton = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.slider}>
        <button className={styles.slider__button} onClick={prevButton}>
          <img
            className={`${styles.slider__arrow} ${styles.lightIcon}`}
            src="/img/icons/ArrowLeft.svg"
            alt="icon arrow left"
          />
          <img
            className={`${styles.slider__arrow} ${styles.darkIcon}`}
            src="/img/icons-dark/Arrow–left.svg"
            alt="icon arrow left"
          />
        </button>
        <div className={styles.slider__viewport}>
          <div
            className={styles.slider__track}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                className={styles.slider__image}
                src={image}
                alt={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <button className={styles.slider__button} onClick={nextButton}>
          <img
            className={`${styles.slider__arrow} ${styles.lightIcon}`}
            src="/img/icons/ArrowRight.svg"
            alt="icon arrow right"
          />
          <img
            className={`${styles.slider__arrow} ${styles.darkIcon}`}
            src="/img/icons-dark/Arrow-right.svg"
            alt="icon arrow right"
          />
        </button>
      </div>

      <div className={styles.navigation}>
        <div className={styles.navigation__dots}>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`${styles.navigation__dot} ${
                currentIndex === index ? styles.active : ''
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
