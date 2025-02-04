import axios from "axios";

const API_BASE_URL = "https://api.tvmaze.com";

export const fetchTVSchedule = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/schedule?country=US`);
    return response.data;
  } catch (error) {
    console.error("Error fetching TV schedule:", error);
    return [];
  }
};

export const fetchShowDetails = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/shows/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching show details:", error);
    return null;
  }
};
