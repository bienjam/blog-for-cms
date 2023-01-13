import Content from '../components/Content'
import BlogList from '../components/BlogList';
import BlogContent from '../components/BlogContent';


const Home = () => {
  
  return (
    <>
      <Content />
      <BlogList />
      <BlogContent />
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