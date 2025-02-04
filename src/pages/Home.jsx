import { useEffect, useState } from "react";
import { fetchTVSchedule } from "../api/tvmazeApi";
import ShowCard from "../components/ShowCard";

const Home = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadShows = async () => {
      const data = await fetchTVSchedule();
      setShows(data);
      setLoading(false);
    };
    loadShows();
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-6">TV Schedule</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shows.map((show) => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
