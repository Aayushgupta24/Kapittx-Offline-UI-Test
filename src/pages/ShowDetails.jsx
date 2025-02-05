import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => setShow(data));
  }, [id]);

  if (!show) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <img
        src={show.image?.original || "https://via.placeholder.com/400"}
        alt={show.name}
        className="w-full h-96 object-cover rounded-md"
      />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">{show.name}</h1>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{show.genres?.join(", ")}</p>
      <div
        className="mt-4 text-gray-700 dark:text-gray-400"
        dangerouslySetInnerHTML={{ __html: show.summary }}
      />
      <a
        href={show.officialSite}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
      >
        Official Site →
      </a>
    </div>
  );
};

export default ShowDetails;
