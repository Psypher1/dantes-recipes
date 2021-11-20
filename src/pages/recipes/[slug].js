import client from "../../utils/contentfulClient";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from "../../styles/recipe.module.css";
import Image from "next/image";

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "recipe",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    // if go to path that does not exist, show 404 page
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const slug = params.slug;

  const res = await client.getEntries({
    content_type: "recipe",
    "fields.slug": slug,
  });
  const data = await res.items;

  const recipe = data[0];

  return {
    props: {
      recipe,
    },
  };
}
export default function RecipeDetails({ recipe }) {
  const { featuredImage, title, cookingTime, ingredients, method } =
    recipe.fields;
  const featured = featuredImage.fields.file.url;
  const width = featuredImage.fields.file.details.image.width;
  const height = featuredImage.fields.file.details.image.height;
  // const { title, slug, cookingTime, thumbnail } = recipe.fields;
  return (
    <div>
      <div className={styles.banner}>
        <Image src={`https:${featured}`} width={900} height={400} />
        <h2>{title}</h2>
      </div>
      <div className={styles.info}>
        <p>Takes about {cookingTime} mins</p>
        <h3>Ingredients:</h3>
        {ingredients.map((ing) => (
          <span key={ing}>{ing}</span>
        ))}

        <div className={styles.method}>
          <h3>Method</h3>
          {documentToReactComponents(method)}
        </div>
      </div>
    </div>
  );
}
