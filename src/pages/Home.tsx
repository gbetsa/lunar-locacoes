import { useState, useMemo, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Card from "../components/Card";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { eventItems, categories } from "../data/mockData";
import styles from "./Home.module.css";
import heroEvents from "../assets/hero-events.jpg";

import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const categoriaURL = searchParams.get("categoria");

    if (categoriaURL) {
      setSelectedCategory(categoriaURL);
      setSearchQuery(""); // limpa busca

      // rola para os itens
      const section = document.getElementById("itemsSection");
      if (section) {
        const offset = window.innerHeight * 0.1;
        const top =
          section.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    }
  }, [searchParams]);

  const filteredItems = useMemo(() => {
    return eventItems.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "Todos" || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSearchQuery(""); // <-- limpa o input de busca

    const section = document.getElementById("itemsSection");
    if (section) {
      const offset = window.innerHeight * 0.1; // 10vh
      const top = section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.home}>
      <Header />

      <div className={styles.heroContainer}>
        <section className={styles.hero} id="home">
          <img src={heroEvents} alt="Hero" className={styles.heroImage} />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              EXPERIÊNCIA QUE FAZ DIFERENÇA
            </div>
            <h1 className={styles.heroTitle}>
              Transforme Suas Necessidades Em{" "}
              <span className={styles.heroHighlight}>
                Soluções de Locação Imediata
              </span>
            </h1>
            <p className={styles.heroSubtitle}>
              Equipamentos, mobiliários e itens diversos para locação com
              qualidade, rapidez e praticidade para qualquer tipo de projeto,
              ocasião ou necessidade diária.
            </p>
          </div>
        </section>
        <div className={styles.heroSearchContainer}>
          <SearchBar onSearch={setSearchQuery} />
        </div>
      </div>

      <main className={styles.main}>
        <section className={styles.section} id="itemsSection">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>
                Itens Disponíveis para Locação
              </h2>
              <p className={styles.sectionSubtitle}>
                Locações rápidas, confiáveis e com valores acessíveis.
              </p>
            </div>
            <span className={styles.resultCount}>
              {filteredItems.length}{" "}
              {filteredItems.length === 1
                ? "item encontrado"
                : "itens encontrados"}
            </span>
          </div>

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />

          {filteredItems.length > 0 ? (
            <div className={styles.grid}>
              {filteredItems.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <div className={styles.emptyIcon}>🔍</div>
              <h3 className={styles.emptyTitle}>Nenhum item encontrado</h3>
              <p className={styles.emptyText}>
                Tente ajustar os filtros ou fazer uma nova busca
              </p>
            </div>
          )}
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Pronto para Encontrar o Item Perfeito Para Sua Necessidade?
            </h2>
            <p className={styles.ctaText}>
              Entre em contato e receba um orçamento personalizado para sua
              locação com rapidez e praticidade.
            </p>
            <button
              className={styles.ctaButton}
              onClick={() => {
                const message = encodeURIComponent(
                  "Olá! Gostaria de receber um orçamento para meu evento."
                );
                window.open(
                  "https://wa.me/5511963119191?text=" + message,
                  "_blank"
                );
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Solicitar Orçamento Agora
            </button>
          </div>
        </section>
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default Home;
