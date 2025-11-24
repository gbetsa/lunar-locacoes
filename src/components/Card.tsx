import { Link } from "react-router-dom";
import { EventItem } from "../data/mockData";
import styles from "./Card.module.css";
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
  "cadeira": cadeira,
  "cadeira-2": cadeira2,
  "luminaria": luminaria,
  "luminaria-2": luminaria2,
  "mesa": mesa,
  "mesa-2": mesa2,
  "ferramentas": ferramentas,
  "ferramentas-2": ferramentas2,
  "som": som,
  "som-2": som2,
  "freezer": freezer,
  "freezer-2": freezer2,
  "lavadora": lavadora,
  "lavadora-2": lavadora2,
  "microondas": microondas,
  "microondas-2": microondas2,
  "tenda": tenda,
  "tenda-2": tenda2,
  "cafeteira": cafeteira,
  "cafeteira-2": cafeteira2,
  "ventilador": ventilador,
  "ventilador-2": ventilador2,
  "forno": forno,
  "forno-2": forno2,
};

interface CardProps {
  item: EventItem;
}

const Card = ({ item }: CardProps) => {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Olá! Tenho interesse no item: ${item.title}`
    );
    window.open(`https://wa.me/${item.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={imageMap[item.images[0]]}
          alt={item.title}
          className={styles.image}
        />
        <span className={styles.badge}>{item.category}</span>
        {item.tags && item.tags[0] && (
          <span className={styles.tagPremium}>{item.tags[0]}</span>
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{item.title}</h3>

        <div className={styles.availability}>
          <div className={styles.availabilityDot}></div>
          {item.availability}
        </div>

        <div className={styles.priceContainer}>
          <div className={styles.price}>
            {item.price}
            <span className={styles.priceType}>{item.priceType}</span>
          </div>
          {item.minQuantity > 1 && (
            <div className={styles.minQuantity}>
              Mín: {item.minQuantity} un.
            </div>
          )}
        </div>

        <div className={styles.buttons}>
          <Link
            to={`/item/${item.id}`}
            className={`${styles.button} ${styles.buttonPrimary}`}
          >
            Ver Detalhes
          </Link>
          <button
            onClick={handleWhatsAppClick}
            className={`${styles.button} ${styles.buttonWhatsApp}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
