import styles from "../styles/RecipeCard.module.css";
import Link from "next/link";

import Image from "next/image";

export default function RecipeCard({ recipe }) {
  // destructure the fields we want
  const { title, slug, cookingTime, thumbnail } = recipe.fields;
  const thumb = thumbnail.fields.file.url;
  const width = thumbnail.fields.file.details.image.width;
  const height = thumbnail.fields.file.details.image.height;

  return (
    <div className={styles.card}>
      <div className={styles.featured}>
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          width={500}
          height={500}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h4>{title}</h4>
          <p>Time: {cookingTime} mins</p>
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
