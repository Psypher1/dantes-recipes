export async function getStaticPaths() {
  return {
    paths,
  };
}
export async function getStaticProps() {
  return {
    props,
  };
}
export default function RecipeDetails() {
  return <div>Recipe Details</div>;
}
