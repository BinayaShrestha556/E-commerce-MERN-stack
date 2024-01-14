import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import {
  faStar,
  faSpinner,
 
} from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CategoryContext } from "../context/categoryContext";


interface dataType {
  _id: string;
  photos: string[];
  title: string;
  category: string;
  rating: number;
  noOfReviews: number;
  oldprice: string;
  newprice: string;
  description: string;
}

export default function Product() {
  const [data, setData] = useState<dataType>({
    _id: "",
    photos: [],
    title: "",
    category: "",
    rating: 0,
    noOfReviews: 0,
    oldprice: "",
    newprice: "",
    description: "",
  });
  const navigate=useNavigate()
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { isLoggedIn,cart, setCart } = useContext(CategoryContext);
  const [inCart, setIncart] = useState(false);
  const [sizeSelect, setSizeSelect]=useState("")
  const [selectPhoto,setSelectPhoto]=useState("")
  const isTitleInCart = (titleToCheck:any):boolean => {
    return cart.some((e: any) => e.title === titleToCheck)
  };
  function truncateString(str: string, maxLength: number) {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    } else {
      return str;
    }
  }
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://e-commerce-mern-stack-zeta.vercel.app/data/id/${id}`)
      .then((res) => {
        setData(res.data);
        const str = truncateString(res.data.title, 40);
        setIncart(isTitleInCart(str));
        setSelectPhoto(res.data.photos[0])
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  function check$(str: string) {
    if (!str.includes("$")) return "$" + str;
    else return str;
  }
  const cartClick = () => {
    if(isLoggedIn){
      if(sizeSelect!==""){

        if (!inCart) {
          setCart((current: any) => [
            ...current,
            { price: check$(data.newprice), title: truncateString(data.title, 40),id:data._id,size:sizeSelect,quantity:count },
          ]);
          console.log(cart)
          setIncart(true);
        } else {
          setCart((current: any) =>
            current.filter((e: any) => e.title !== truncateString(data.title, 40))
          );
          setIncart(false);
        }
      }
      else{ alert("select size first")}
    }
    else{alert("login first"); navigate("/user/login")}
    // console.log(cart)
  };

  return (
    <div className="xl:w-9/12 p-9 w-full  m-auto">
      {loading ? (
        <div className="flex items-center justify-center h-[100vh]">
          <div className="animate-spin">
            <FontAwesomeIcon icon={faSpinner} size="2xl" />
          </div>
        </div>
      ) : (
        <div className="lg:flex-row lg:j-center flex gap-6 lg:gap-3 mt-14 lg:mt-20 flex-col ">
          <div className=" flex gap-2  flex-col  items-center flex-grow ">
            <img className="w-96 lg:w-72 xl:w-96 " src={selectPhoto} alt="" />

            <div className="grid flex-grow grid-cols-4 gap-2 w-72 xl:w-96 self-center">
              <img
                className=" border border-gray-400 aspect-square object-right-top  object-cover"
                src={data.photos[0]}
                alt=""
                onClick={()=>setSelectPhoto(data.photos[0])}
              />
              {data.photos[1] ? (
                <img
                  className=" border border-gray-400 aspect-square object-right-top object-cover"
                  src={data.photos[1]}
                  alt=""
                  onClick={()=>setSelectPhoto(data.photos[1])}
                  
                />
              ) : (
                ""
              )}
              {data.photos[2] ? (
                <img
                  className=" border border-gray-400 aspect-square object-right-top  object-cover"
                  src={data.photos[2]}
                  alt=""
                onClick={()=>setSelectPhoto(data.photos[2])}

                />
              ) : (
                ""
              )}
              {data.photos[3] ? (
                <img
                  className=" border border-gray-400 aspect-square object-right-top object-cover"
                  src={data.photos[3]}
                  alt=""
                onClick={()=>setSelectPhoto(data.photos[3])}

                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex-grow gap-0 xl:gap-2 lg:p-2 pt-0 flex flex-col">
            <p className="text-xl pt-0 p-2">{data.title}</p>
            <div className="flex items-center">
              {" "}
              <p className="text-yellow-400 pl-2">
                <FontAwesomeIcon icon={faStar} />
              </p>{" "}
              <p>
                {" "}
                {data.rating} | ({data.noOfReviews} ratings)
              </p>
              <p className="pl-3">category: {data.category}</p>
            </div>
            <div className="h-[1px]  w-full bg-gray-400"></div>
            <div className="p-2">
              {" "}
              <p className="text-3xl text-[#07484A] font-semibold">
                {check$(data.newprice)}
              </p>
              <p className="text-md text-gray-400 line-through">
                {check$(data.oldprice)}
              </p>
            </div>
{/* size select */}
            <div className="flex gap-2">
              <div className={`py-1.5 px-3 border border-[#07484A] rounded-sm hover:bg-[#CAF3E5] ${sizeSelect=="sm"? "bg-[#07484A] text-white":"bg-white"} cursor-pointer`} onClick={()=>setSizeSelect("sm")}>sm</div>
              <div className={`py-1.5 px-3 border border-[#07484A] rounded-sm hover:bg-[#CAF3E5] ${sizeSelect=="md"? "bg-[#07484A] text-white":"bg-white"} cursor-pointer`} onClick={()=>setSizeSelect("md")}>md</div>
              <div className={`py-1.5 px-3 border border-[#07484A] rounded-sm hover:bg-[#CAF3E5] ${sizeSelect=="lg"? "bg-[#07484A] text-white":"bg-white"} cursor-pointer`} onClick={()=>setSizeSelect("lg")}>lg</div>
              <div className={`py-1.5 px-3 border border-[#07484A] rounded-sm hover:bg-[#CAF3E5] ${sizeSelect=="xl"? "bg-[#07484A] text-white":"bg-white"} cursor-pointer`} onClick={()=>setSizeSelect("xl")}>xl</div>
              <div className={`py-1.5 px-2 border border-[#07484A] rounded-sm hover:bg-[#CAF3E5] ${sizeSelect=="2xl"? "bg-[#07484A] text-white":"bg-white"} cursor-pointer`} onClick={()=>setSizeSelect("2xl")}>2xl</div>
                
            </div>
            <div className="flex gap-2 items-center ml-2 mt-10">
              <p className="text-gray-500 ">Quantity</p>
              <button
                onClick={() => {
                  !(count == 1) ? setCount(count - 1) : setCount(count);
                }}
                className=" bg-slate-300 px-4 py-2  "
              >
                {" "}
                &lt;{" "}
              </button>
              <p className="px-4 py-2 bg-[#07484A] text-white">{count}</p>
              <button
                onClick={() => setCount(count + 1)}
                className="  px-4 py-2  bg-slate-300"
              >
                {" "}
                &gt;{" "}
              </button>
            </div>
            <div className="flex gap-4  mt-10">
              {" "}
              <button className="py-2 px-5 bg-green-500 " onClick={()=>alert("sorry... but this site is only for display and you cannot buy any items")}>Buy Now</button>
              <button
                className="py-2 px-5 bg-yellow-500"
                onClick={() => cartClick()}
              >
                {!inCart ? "Add to Cart" : "remove from cart"}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* description */}
      <div className="mt-10">
        <p className="text-xl font-semibold">Description</p>
        <p className="border-b  md border-gray-400">{data.description}</p>
      </div>
      {/* reviews and qna */}
      <div className=" flex flex-col lg:flex-row w-full justify-between">
        {/* reviews */}
        <div className="mt-10 w-full lg:w-[45%] p-2">
          <p className="text-xl font-semibold">Reviews</p>
          <div className="flex items-center justify-between mt-5 border-b border-gray-300 p-3">
            <div>
              <p className="text-xs">date| 2024/01/12</p>
              <p className="text-lg font-semibold -mt-1">username</p>
              <p>- product is good lol(from developer)</p>
            </div>
            <div className="text-yellow-400">
              <FontAwesomeIcon icon={faStar} size="sm" />
              <FontAwesomeIcon icon={faStar} size="sm" />
              <FontAwesomeIcon icon={faStar} size="sm" />
              <FontAwesomeIcon icon={faStar} size="sm" />
              <FontAwesomeIcon icon={faStar} size="sm" /> 5/5
            </div>
          </div>
          <div className="flex items-center justify-between mt-5 border-b border-gray-300 p-3">
            <div>
              <p className="text-xs">date| 2024/01/12</p>
              <p className="text-lg font-semibold -mt-1">username</p>
              <p>- product is good lol(from developer)</p>
            </div>
            <div className="text-yellow-400">
              <FontAwesomeIcon icon={faStar} size="sm" />
              <FontAwesomeIcon icon={faStar} size="sm" />
              <FontAwesomeIcon icon={faStar} size="sm" />
              <FontAwesomeIcon icon={faStar} size="sm" />
              <FontAwesomeIcon icon={faStar} size="sm" /> 5/5
            </div>
          </div>
        </div>
        <div className="w-[1px] bg-gray-300 mt-5"></div>
        {/* qna */}

        <div className="mt-10  w-full lg:w-[45%]  p-2">
          <p className="text-xl font-semibold">Questions and answers</p>
          <div className="flex items-center justify-between mt-5 border-b border-gray-300 p-3">
            <div>
              <p className="text-xs">date| 2024/01/12</p>
              <p className=" font-semibold -mt-1">username</p>
              <p className="font-semibold ">
                : Why did i even make this website?
              </p>
              <p>- To show case this website in my portfollio</p>
            </div>
            {/* <div className="text-yellow-400"><FontAwesomeIcon icon={faStar} size="sm"/><FontAwesomeIcon icon={faStar} size="sm"/><FontAwesomeIcon icon={faStar} size="sm"/><FontAwesomeIcon icon={faStar} size="sm"/><FontAwesomeIcon icon={faStar} size="sm"/> 5/5</div> */}
          </div>
          <div className="flex items-center justify-between mt-5 border-b border-gray-300 p-3">
            <div>
              <p className="text-xs">date| 2024/01/12</p>
              <p className=" font-semibold -mt-1">username</p>
              <p className="font-semibold ">
                : Why did i even make this website?
              </p>
              <p>- To show case this website in my portfollio</p>
            </div>
            {/* <div className="text-yellow-400"><FontAwesomeIcon icon={faStar} size="sm"/><FontAwesomeIcon icon={faStar} size="sm"/><FontAwesomeIcon icon={faStar} size="sm"/><FontAwesomeIcon icon={faStar} size="sm"/><FontAwesomeIcon icon={faStar} size="sm"/> 5/5</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
