import styles from "./CategoryFilter.module.css";

interface Category {
  name: string;
  icon: React.ElementType;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) => {
  return (
    <div className={styles.filter}>
      {categories.map((category) => (
        <button
          key={category.name}
          className={`${styles.filterButton} ${
            selectedCategory === category.name ? styles.active : ""
          }`}
          onClick={() => onSelectCategory(category.name)}
        >
          <category.icon className={styles.icon} size={20} />
          <span className={styles.text}>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
