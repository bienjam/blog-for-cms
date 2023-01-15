import BlogList from '../components/BlogList';
import Navbar from '../components/Navbar';


const Home = () => {
  
  return (
    <>
      <Navbar />
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