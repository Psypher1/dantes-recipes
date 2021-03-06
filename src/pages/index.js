import Head from "next/head";
import styles from "../styles/Home.module.css";
import RecipeCard from "../components/RecipeCard";
import client from "../utils/contentfulClient";

// make async call and fetch recipes
export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "recipe" });
  const data = await res.items;
  return {
    props: {
      recipes: data,
    },
  };
}

export default function Recipes({ recipes }) {
  // console.log(recipes);
  // const {title, }
  return (
    <>
      <Head>
        <title>Dante's Recipes</title>
      </Head>

      <div className={styles.recipeList}>
        {/* loop through recipes */}
        {recipes.map((recipe) => (
          // pass recipe as props
          <RecipeCard key={recipe.sys.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
}
