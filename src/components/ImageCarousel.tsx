import { useState } from "react";
import ImageLightbox from "./ImageLightbox";
import styles from "./ImageCarousel.module.css";

import cadeira from "../assets/cadeira.webp";
import cadeira2 from "../assets/cadeira-2.webp";
import luminaria from "../assets/luminaria.webp";
import luminaria2 from "../assets/luminaria-2.webp";
import mesa from "../assets/mesa.jpg";
import mesa2 from "../assets/mesa-2.jpg";
import ferramentas from "../assets/ferramentas.jpg";
import ferramentas2 from "../assets/ferramentas-2.jpg";
import som from "../assets/som.avif";
import som2 from "../assets/som-2.avif";
import freezer from "../assets/freezer.avif";
import freezer2 from "../assets/freezer-2.avif";
import lavadora from "../assets/lavadora.jpg";
import lavadora2 from "../assets/lavadora-2.jpg";
import microondas from "../assets/microondas.webp";
import microondas2 from "../assets/microondas-2.webp";
import tenda from "../assets/tenda.webp";
import tenda2 from "../assets/tenda-2.webp";
import cafeteira from "../assets/cafeteira.jpg";
import cafeteira2 from "../assets/cafeteira-2.jpg";
import ventilador from "../assets/ventilador.webp";
import ventilador2 from "../assets/ventilador-2.webp";
import forno from "../assets/forno.jpg";
import forno2 from "../assets/forno-2.jpg";

const imageMap: { [key: string]: string } = {
  cadeira: cadeira,
  "cadeira-2": cadeira2,
  luminaria: luminaria,
  "luminaria-2": luminaria2,
  mesa: mesa,
  "mesa-2": mesa2,
  ferramentas: ferramentas,
  "ferramentas-2": ferramentas2,
  som: som,
  "som-2": som2,
  freezer: freezer,
  "freezer-2": freezer2,
  lavadora: lavadora,
  "lavadora-2": lavadora2,
  microondas: microondas,
  "microondas-2": microondas2,
  tenda: tenda,
  "tenda-2": tenda2,
  cafeteira: cafeteira,
  "cafeteira-2": cafeteira2,
  ventilador: ventilador,
  "ventilador-2": ventilador2,
  forno: forno,
  "forno-2": forno2,
};

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

const ImageCarousel = ({ images, alt }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className={styles.carousel}>
        <img
          src={imageMap[images[currentIndex]]}
          alt={`${alt} - Imagem ${currentIndex + 1}`}
          className={styles.mainImage}
          onClick={() => setLightboxOpen(true)} // <-- abrir imagem
          style={{ cursor: "zoom-in" }} // opcional
        />

        <div className={styles.navigation}>
          <button
            className={styles.navButton}
            onClick={goToPrevious}
            disabled={images.length <= 1}
            aria-label="Imagem anterior"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            className={styles.navButton}
            onClick={goToNext}
            disabled={images.length <= 1}
            aria-label="Próxima imagem"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div className={styles.indicator}>
          {currentIndex + 1} / {images.length}
        </div>

        {images.length > 1 && (
          <div className={styles.thumbnails}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`${styles.thumbnail} ${
                  index === currentIndex ? styles.active : ""
                }`}
                onClick={() => goToIndex(index)}
              >
                <img
                  src={imageMap[image]}
                  alt={`Miniatura ${index + 1}`}
                  className={styles.thumbnailImage}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {lightboxOpen && (
        <ImageLightbox
          src={imageMap[images[currentIndex]]}
          alt={alt}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
};

export default ImageCarousel;
