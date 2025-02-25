import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Book Recommender</h1>
      <Link to="/recommendations">View Recommendations</Link>
    </div>
  );
};

export default Home;
