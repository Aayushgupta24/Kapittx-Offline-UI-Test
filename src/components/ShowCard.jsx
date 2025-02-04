import { Link } from "react-router-dom";

const ShowCard = ({ show }) => {
  // Ensure 'show' and 'show.show' exist
  if (!show?.show) {
    return <div className="text-red-500">Show data not available.</div>;
  }

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg p-4">
      <img
        src={show.show.image?.medium || "https://via.placeholder.com/210"}
        alt={show.show.name || "No Title"}
        className="w-full h-48 object-cover"
      />
      <h2 className="text-lg font-bold mt-2">{show.show.name || "Unknown Show"}</h2>
      <p className="text-sm text-gray-600">
        {show.show.genres?.length ? show.show.genres.join(", ") : "No genres available"}
      </p>
      <Link
        to={`/show/${show.show.id}`}
        className="mt-2 inline-block text-blue-500 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default ShowCard;
