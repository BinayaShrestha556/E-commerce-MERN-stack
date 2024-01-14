import { useContext, useRef } from "react";
import pic from "../assets/pretty-brunette-girl-stylish-hat-posing-yellow-wall.jpg";
import ExploreCategory from "../components/ExploreCategory";
import NewProducts from "../components/NewProducts";
import {useNavigate} from 'react-router-dom'
import { CategoryContext } from "../context/categoryContext";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const navigate=useNavigate()

  const scrollToRef = () => {
    if (scrollRef.current) {
      window.scrollTo({
        top: scrollRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const {isLoggedIn} = useContext(CategoryContext)

  return (
    <div>
      <div
        className={`md:bg-[#C4C4C4] lg:bg-none bg-blend-lighten bg-cover bg-[#C4C4C4]/[0.9] bg-center bg-[url(/pretty-brunette-girl-stylish-hat-posing-yellow-wall.jpg)] w-full h-[100vh] `}
      >
        <div className="xl:w-[80%] w-full p-4 h-full m-auto flex items-center">
          <div className="lg:w-1/2 w-full flex flex-col gap-6">
            <p className="lg:text-6xl md:text-6xl text-4xl text-[#07484A] font-bold leading-tight font-playfair-display">
              NEW Trends and <br /> exclusive deals
            </p>
            <p className="text-xl text-[#07484A] md:my-3 my-0 ">
              {" "}
              sign up and get discounts and exclusive offers{" "}
            </p>
            <div className="flex gap-3">
              <button
                onClick={()=>scrollToRef()}
                className="relative h-14 rounded w-52 overflow-hidden border border-[#07484A] text-[#07484A] shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#07484A] before:duration-300 before:ease-out hover:text-white hover:shadow-[#07484A] hover:before:h-40 hover:before:w-52 hover:before:opacity-80"
              >
                <span className="relative z-10 text-xl font-bold">
                  Shop Now
                </span>
              </button>{!isLoggedIn?
              <button onClick={()=>navigate('/user/login')} className="underline text-2xl font-bold text-[#07484A] transition-all ease-out duration-150 hover:text-[#a17840]">
                Sign In
              </button>:""}
            </div>
          </div>
          <div className="w-1/2 h-[50vw] xl:h-[40vw] overflow-hidden rounded-xl mt-10 rounded-bl-[20%] hidden lg:block ">
            <img src={pic} alt="women" className="object-cover h-full" />
          </div>
        </div>
      </div>
      <ExploreCategory />
      <div ref={scrollRef}>
        <NewProducts />
      </div>
    </div>
  );
}
