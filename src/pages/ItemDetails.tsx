import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { eventItems } from "../data/mockData";
import styles from "./ItemDetails.module.css";

const ItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = eventItems.find((p) => p.id === id);
  
  useEffect(() => {
    if (item) {
      document.title = `${item.title} | Lunar Locações`;
    } else {
      document.title = "Item não encontrado | Lunar Locações";
    }
  }, [item]);

  const handleWhatsAppClick = () => {
    if (item) {
      const message = encodeURIComponent(
        `Olá! Tenho interesse no item: ${item.title}`
      );
      window.open(`https://wa.me/${item.whatsapp}?text=${message}`, "_blank");
    }
  };

  if (!item) {
    return (
      <div className={styles.details}>
        <Header />
        <main className={styles.main}>
          <div className={styles.notFound}>
            <h1 className={styles.notFoundTitle}>Item não encontrado</h1>
            <p className={styles.notFoundText}>
              O item que você está procurando não existe ou foi removido.
            </p>
            <button className={styles.backButton} onClick={() => navigate("/")}>
              ← Voltar para a página inicial
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.details}>
      <Header />

      <main className={styles.main}>
        <button className={styles.backButton} onClick={() => navigate("/")}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Voltar
        </button>

        <div className={styles.content}>
          <div className={styles.carousel}>
            <ImageCarousel images={item.images} alt={item.title} />
          </div>

          <div className={styles.info}>
            <div className={styles.header}>
              <div className={styles.titleContainer}>
                <span className={styles.badge}>{item.category}</span>
                <h1 className={styles.title}>{item.title}</h1>
                <div className={styles.availability}>
                  <div className={styles.availabilityDot}></div>
                  {item.availability}
                </div>
              </div>

              <div className={styles.rentalBox}>
                <div className={styles.rental}>{item.rentalPeriod}</div>
              </div>
            </div>

            {item.tags && item.tags.length > 0 && (
              <div className={styles.tags}>
                {item.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className={styles.description}>
              <h2 className={styles.descriptionTitle}>Descrição</h2>
              <p className={styles.descriptionText}>{item.description}</p>
            </div>

            {item.specifications && item.specifications.length > 0 && (
              <div className={styles.specifications}>
                <h2 className={styles.specificationsTitle}>
                  Especificações Técnicas
                </h2>
                <div className={styles.specsList}>
                  {item.specifications.map((spec, index) => (
                    <div key={index} className={styles.specItem}>
                      <div className={styles.specLabel}>{spec.label}</div>
                      <div className={styles.specValue}>{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {item.minQuantity > 1 && (
              <div className={styles.minQuantityInfo}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <span>
                  Quantidade mínima para locação:{" "}
                  <strong>{item.minQuantity} unidades</strong>
                </span>
              </div>
            )}

            <button
              className={styles.whatsappButton}
              onClick={handleWhatsAppClick}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Solicitar Orçamento pelo WhatsApp
            </button>
          </div>
        </div>
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default ItemDetails;
