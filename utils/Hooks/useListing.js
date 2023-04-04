import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import listingAPi from "../Api/listing.api";

const useListing = (city, roomType) => {
  const [listing, setListings] = useState([]);
  const [page, setPageNo] = useState(1);
  const [limit, setLimit] = useState(5);
  const { refetch, isLoading } = useQuery({
    queryFn: () => listingAPi.getAllListing(city, roomType, limit, page),
    queryKey: ["getAllLising", city, roomType],
    onSuccess: (data) => {
      setListings(data.data);
    },
  });
  useEffect(() => {
    refetch();
  }, [refetch]);
  return { listing, refetch, isLoading };
};
export default useListing;
