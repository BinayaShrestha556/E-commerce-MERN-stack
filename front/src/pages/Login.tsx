import axios from "axios";
import  { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryContext } from "../context/categoryContext";

export default function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [uNameError, setUNameError] = useState("");
  const [password, setPassword] = useState("");
  const [pWordError, setpWordError] = useState("");
const { isLoggedIn,setIsLoggedIn,userId,setUserId}=useContext(CategoryContext)
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = async () => {
    const res = await axios.post("https://e-commerce-mern-stack-zeta.vercel.app/user/login",{userName,password});
    console.log(res);
    if (res.data.message === "user not exist") {setUNameError(res.data.message)}else{setUNameError("")};
    if (res.data.message === "password incorrect")
     { setpWordError(res.data.message)}else{setpWordError("")}
    setIsLoggedIn(res.data.login);
    if (res.data.login) navigate("/");
    setUserId(res.data.id);
  };
  return (
    <div className=" flex flex-col w-2/3 lg:w-1/2 xl:w-1/3 m-auto gap-4 justify-center h-[90vh]">
      <input
        className="border border-[#07484A] rounded-md  text-xl py-3 px-5"
        placeholder="Enter username"
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      {uNameError ? <p className="text-red-500 -mt-3">!!! {uNameError}</p> : ""}
      <input
        className="border border-[#07484A] rounded-md  text-xl py-3 px-5"
        placeholder="Enter password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {pWordError ? <p className="text-red-500 -mt-3">!!! {pWordError}</p> : ""}

      <button
        className=" w-1/2 self-center py-2 bg-[#07484A] text-white rounded-lg hover:bg-[#266264]"
        onClick={() => handleLogin()}
      >
        login
      </button>
      <button className="text-xl underline text-[#07484A]" onClick={()=>navigate('/user/signup')}>sign up</button>
    </div>
  );
}
