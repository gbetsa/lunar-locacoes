import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./ImageLightbox.module.css";

interface Props {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageLightbox({ src, alt, onClose }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <img
        src={src}
        alt={alt}
        className={styles.image}
        onClick={(e) => e.stopPropagation()} // evita fechar ao clicar na imagem
      />
    </div>,
    document.body // <-- AQUI! Fora do root, ignora todos z-index
  );
}
