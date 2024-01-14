import { useEffect, useState } from "react";
import Items from "./Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
interface dataType {
  _id: string;
  photos: string[];
  title: string;
  category: string;
  rating: number;
  noOfReviews: number;
  oldprice: string;
  newprice: string;
}

import axios from "axios";

export default function NewProducts() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<dataType[]>([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/data/new-collection")
      .then((response) =>{setData(response.data.data);console.log(data); setLoading(false);})
  }, []);

  return (
    <div className="xl:w-9/12 w-full m-auto">
      <p className="md:text-5xl sm:text-4xl text-3xl underline underline-offset-8 font-bold text-[#07484A] font-playfair-display text-center py-1 mt-20">
        {" "}
        new collections{" "}
      </p>
      {loading ? (
        <div className="w-full flex justify-center h-[50vh] items-center ">
          <span className=" animate-spin">
            <FontAwesomeIcon icon={faSpinner} size="2xl" />
          </span>
        </div>
      ) : (
        <div className="grid w-full 1.5xl:grid-cols-4 md:grid-cols-3 grid-cols-2">
          {data.map((e, i) => (
            <Items
            _id={e._id}
              key={i}
              img={e.photos}
              title={e.title}
              rating={e.rating}
              ratingNumber={e.noOfReviews}
              oldprice={e.oldprice}
              newprice={e.newprice}
            />
          ))}
        </div>
      )}
    </div>
  );
}
