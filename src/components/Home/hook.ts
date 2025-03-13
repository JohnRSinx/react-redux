import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const useHome = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const getImage = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://picsum.photos/150");
      setImageUrl(response.request.responseURL);
    } catch (error) {
      console.error("Error fetching image:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getImage();
  }, [getImage]);

  
  return { 
    imageUrl,
    loading,
    getImage
   };
};