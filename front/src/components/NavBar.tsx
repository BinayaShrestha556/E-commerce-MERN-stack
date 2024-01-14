import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSearch,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/store-high-resolution-logo-transparent.png";
import { Link } from "react-router-dom";
import { CategoryContext } from "../context/categoryContext";
import Cart from "../pages/Cart";
// import { createPortal } from "react-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  // const [category, setcategory] = useState("home");
  const [search, setSearch] = useState(false);
  const {category,isLoggedIn,setIsLoggedIn,setCategory,cart}=useContext(CategoryContext)
  const [isCartOpen,setIsCartOpen]=useState(false)

  //Handles the opening and closing of our nav  
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed top-0 left-0 right-0 bg-[#C4C4C4] text-[#07484A] z-50 font-playfair-display">
      <div className="flex justify-between xl:w-[80%]   m-auto">
        <div className="flex h-16 lg:h-20 xl:24  md:w-full w-[90%] items-center px-3 justify-between  ">
          <img src={logo} className="h-16 lg:h-20 " alt="logo" />

          {/* nav category */}

          <div
            className={`middle  items-center xl:gap-10 lg:gap-8 md:gap-[2vw] hidden text-xl ld:mr-[-15%] md:mr-[-7%]  md:flex `}
          >
            <Link to="/">
              <div
                onClick={() => setCategory("home")}
                className={`ease-in-out duration-100 font-semibold hover:font-bold cursor-pointer py-1 ${
                  category == "home" ? " border-b-[4px] font-bold" : ""
                }  border-[#07484A]`}
              >
                Home
              </div>
            </Link>
            <Link to="men">
            <div
              onClick={() => setCategory("men")}
              className={`ease-in-out duration-100 cursor-pointer hover:font-bold py-1 ${
                category == "men" ? " border-b-[4px] font-bold" : ""
              }  border-[#07484A]`}
            >
              Men
            </div></Link>
            <Link to="women">
              <div
                onClick={() => setCategory("women")}
                className={`ease-in-out duration-100 cursor-pointer hover:font-bold py-1 ${
                  category == "women" ? " border-b-[4px] font-bold" : ""
                }  border-[#07484A]`}
              >
                Women
              </div>
            </Link>
            <Link to="kids">
            <div
              onClick={() => setCategory("kids")}
              className={`ease-in-out duration-100 cursor-pointer hover:font-bold  py-1 ${
                category == "kids" ? " border-b-[4px] font-bold" : ""
              }  border-[#07484A]`}
            >
              Kids
            </div></Link>
          </div>

          {/* search */}
          <div className="flex  items-center md:gap-9 mr-3">
            <div
              className={`${
                search ? " block" : " hidden w-0 "
              }  overflow-hidden duration-1000 md:-mr-5 ease-in-out`}
            >
              <input
                type="text"
                placeholder="Type your search"
                className="xl:w-60 w-40  text-sm p-2 rounded-full border"
              />
            </div>

            <span
              onClick={() => setSearch(!search)}
              className="cursor-pointer mx-3 md:mr-0 "
            >
              <FontAwesomeIcon icon={faSearch} size="xl" />
            </span>
            <span className={`cursor-pointer ${search ? "hidden " : "block"} mx-5  md:mx-0`}>
              <FontAwesomeIcon icon={faUser} size="xl" />
            </span>
            {/* <button className="relative h-10 w-24 sm:28 mr-2 overflow-hidden border border-indigo-600 text-indigo-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80"> */}
            {/* <span className="relative z-10">login</span>
    </button> */}
            <span onClick={()=>!isCartOpen?setIsCartOpen(true):setIsCartOpen(false)} className={`flex cursor-pointer ${search ? "hidden lg:block" : "block"}`}>
             <FontAwesomeIcon icon={faCartShopping} size="xl" /><p className="text-sm leading-[9px] bg-red-500 text-white h-fit pt-0.5 pb-1 -ml-2 -mt-2 px-1.5   rounded-full">{cart.length}</p>
            </span>
          </div>
        </div>

        {/* ham button */}
        <div className="left ">
          <button
            onClick={()=>handleClick()}
            className="flex flex-col justify-center items-center fixed top-5 right-3 gap-1.5  md:hidden  z-40"
          >
            <span
              className={` block transition-all duration-300 ease-out 
                    h-1 w-9 rounded-sm ${
                      isOpen
                        ? "rotate-45 translate-y-[0.6rem] bg-white"
                        : "-translate-y-0.5 bg-[#07484A]"
                    }`}
            ></span>
            <span
              className={` block transition-all duration-300 ease-out 
                    h-1 w-9 rounded-sm  bg-[#07484A] ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
            ></span>
            <span
              className={` block transition-all duration-300 ease-out 
                    h-1 w-9 rounded-sm ${
                      isOpen
                        ? "-rotate-45 -translate-y-[0.6rem] bg-white"
                        : "translate-y-0.5 bg-[#07484A]"
                    }`}
            ></span>
          </button>

          {/* sidebar */}
          <div
            className={`fixed z-30 w-[45vw] flex flex-col px-5 gap-3 h-full md:hidden backdrop-blur-sm bg-[#07484A]/80 text-white pt-16  text-lg  top-0 right-[-2px] ease-in-out duration-150 ${
              isOpen ? "-translate-x-0" : "translate-x-full"
            }`}
          >
          
               <Link to="/">  <p className="mt-2 w-20 border-b " onClick={()=>{setCategory("kids");setIsOpen(false)}}>Home</p></Link>
      <Link to="/user">      <p className="border-b pb-2 " onClick={()=>{setIsOpen(false)}}> User Profile</p></Link>
        
           
      <Link to="/cart">      <p className="border-b pb-2 " onClick={()=>setIsOpen(false)}> Cart</p></Link>
         
            <div className=" border-b  pb-3">
              categories
              <div className="pl-4  ">
                <Link to="men"><p className="mt-2 w-20  border-b " onClick={()=>{setCategory("men");setIsOpen(false)}}>- men</p></Link>
               <Link to="women"> <p className="mt-2 w-20 border-b " onClick={()=>{setCategory("women");setIsOpen(false)}}>- women</p></Link>
               <Link to="kids"> <p className="mt-2 w-20 border-b " onClick={()=>{setCategory("kids");setIsOpen(false)}}>- kids</p></Link>
              </div>
            </div>{
     isLoggedIn? <Link to="/">      <p className="border-b pb-2 " onClick={()=>{setIsOpen(false);setIsLoggedIn(false)}}> logout</p></Link>
      :<Link to="/user/login">      <p className="border-b pb-2 " onClick={()=>{setIsOpen(false);setIsLoggedIn(false)}}> log in</p></Link>
            }
           
          </div>
        </div>
      </div>{
      isCartOpen?<div className="fixed right-0 left-0 md:right-4 "><Cart/></div>:""}
    </div>
  );
}
