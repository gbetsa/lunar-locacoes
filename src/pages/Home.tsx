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

const normalize = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/-/g, "")
    .replace(/\s+/g, "");

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    document.title = "Lunar Locações - Itens para Locação";
  }, []);

  useEffect(() => {
    const categoriaURL = searchParams.get("categoria");

    if (categoriaURL) {
      setSelectedCategory(categoriaURL);
      setSearchQuery("");

      const section = document.getElementById("itemsSection");
      if (section) {
        const offset = window.innerHeight * 0.1;
        const top =
          section.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  }, [searchParams]);

  const filteredItems = useMemo(() => {
    const query = normalize(searchQuery);

    return eventItems.filter((item) => {
      const matchesSearch =
        normalize(item.title).includes(query) ||
        normalize(item.category).includes(query) ||
        item.tags.some((tag) => normalize(tag).includes(query));

      const matchesCategory =
        selectedCategory === "Todos" || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSearchQuery("");

    const section = document.getElementById("itemsSection");
    if (section) {
      const offset = window.innerHeight * 0.1;
      const top = section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: "smooth" });
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
              qualidade, rapidez e praticidade.
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
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default Home;
