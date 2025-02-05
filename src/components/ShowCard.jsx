import { Link } from "react-router-dom";

const ShowCard = ({ show }) => {
  if (!show?.show) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
      <img
        src={show.show.image?.medium || "https://via.placeholder.com/210"}
        alt={show.show.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">{show.show.name}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">{show.show.genres?.join(", ") || "No genres"}</p>
        <Link
          to={`/show/${show.show.id}`}
          className="mt-2 inline-block text-blue-600 dark:text-blue-400 hover:underline"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default ShowCard;
