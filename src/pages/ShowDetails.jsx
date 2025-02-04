import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchShowDetails } from "../api/tvmazeApi";

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadShow = async () => {
      const data = await fetchShowDetails(id);
      setShow(data);
      setLoading(false);
    };
    loadShow();
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold">{show.name}</h1>
      <img src={show.image?.original || "https://via.placeholder.com/400"} alt={show.name} className="w-full max-w-lg mx-auto my-4" />
      <p className="text-lg"><strong>Genres:</strong> {show.genres.join(", ")}</p>
      <p className="text-lg"><strong>Runtime:</strong> {show.runtime} mins</p>
      <p className="text-lg"><strong>Summary:</strong></p>
      <div dangerouslySetInnerHTML={{ __html: show.summary }} className="text-md"></div>
    </div>
  );
};

export default ShowDetails;
