import client from "../../utils/contentfulClient";

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
  console.log(recipe);
  const { title, slug, cookingTime, thumbnail } = recipe.fields;
  return (
    <div>
      Recipe Details
      <h1>{title}</h1>
      <p>{cookingTime}</p>
    </div>
  );
}
