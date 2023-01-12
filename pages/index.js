import Content from '../components/Content'
import BlogList from '../components/BlogList';

const Home = () => {
  
  return (
    <>
      <Content />
      <BlogList />
    </>
  );
};

export default Home;

// export const getStaticProps = async () => {
//   const blogs = await getAllBlogs();

//   return {
//     props: {
//       blogs,
//     },
//   };
// };