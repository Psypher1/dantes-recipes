import client from "../utils/contentfulClient";

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "recipe" });
  const data = await res.items;
  return {
    props: {
      recipes: data,
    },
    revalidate: 1,
  };
}

export default function Recipes({ recipes }) {
  console.log(recipes);
  return <div className="recipe-list">Recipe List</div>;
}
