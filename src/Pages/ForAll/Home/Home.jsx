import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="hero h-[600px] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello, </h1>
            <h1 className="text-5xl font-bold">Welcome to Radium community center</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link
              to="/events"
              className="btn bg-pink-600 text-white hover:text-black"
            >
              All Event
            </Link>
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
