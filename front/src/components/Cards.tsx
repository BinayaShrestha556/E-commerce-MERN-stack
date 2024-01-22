import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Items({
  _id,
  img,
  title,
  rating,
  ratingNumber,
  oldprice,
  newprice,
}: {
  _id: string;
  img: string[];
  title: string;
  rating: number;
  ratingNumber: number;
  oldprice: string;
  newprice: string;
}) {
  function truncateString(str: string, maxLength: number) {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    } else {
      return str;
    }
  }
  function check$(str: string) {
    if (!str.includes("$")) return "$" + str;
    else return str;
  }

  return (
    <Link to={`/product/${_id}`}>
      <div className="flex cursor-pointer gap-2 flex-col w-[90%] m-auto hover:scale-105 transition-all ease-in-out duration-150 bg-slate-50 mt-10 shadow-xl">
        <div className="h-52 md:h-64 w-full overflow-hidden">
          <img className="object-cover" src={img[0]} alt="" />
        </div>
        <p className="pl-1  font-semibold sm:hidden">
          {truncateString(title, 35)}
        </p>
        <p className="pl-1  font-semibold hidden sm:block">
          {truncateString(title, 55)}
        </p>

        <div className="flex gap-1 pl-1 items-center text-sm">
          <span className="text-yellow-300">
            {" "}
            <FontAwesomeIcon icon={faStar} size="sm" />
          </span>
          <p>{rating}/5</p>
          <p>({ratingNumber})</p>
        </div>
        <div className="flex gap-1 pl-1 items-center pb-3">
          <p className="line-through text-gray-500">{check$(oldprice)}</p>
          <p className="text-lg font-bold">{check$(newprice)}</p>
        </div>
        
      </div>
    </Link>
  );
}
