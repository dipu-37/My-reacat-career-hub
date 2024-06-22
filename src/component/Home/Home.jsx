import CategoryList from "../CategoryList/CategoryList";
import Banner from "../ErrorPage/Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
            <h2>This is home</h2>
        </div>
    );
};

export default Home;