// Import Axios
import axios from "axios";

// Import UseEffect
import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState({ values: null, isLoading: true });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData({ values: response.data, isLoading: false });
      } catch (error) {
        console.error("Error fetching data:", error);
        setData({ values: null, isLoading: false });
      }
    };

    fetchData();
  }, [url]);

  return data;
}
