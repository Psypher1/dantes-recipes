import styles from "../styles/RecipeCard.module.css";
import Link from "next/link";

export default function RecipeCard({ recipe }) {
  // destructure the fields we want
  const { title, slug, cookingTime, thumbnail } = recipe.fields;
  return (
    <div className={styles.card}>
      <div className={styles.featured}>{/* image */}</div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h4>{title}</h4>
          <p>Takes aprrox {cookingTime} mins</p>
        </div>
        <div className={styles.actions}>
          <Link href={`/recipes/${slug}`}>
            <a>Make Me!</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
