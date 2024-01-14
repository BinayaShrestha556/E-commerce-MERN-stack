import { useContext} from "react";
import {useNavigate } from "react-router-dom";
import { CategoryContext } from "../context/categoryContext";



export default function Cart() {

  // function truncateString(str: string, maxLength: number) {
  //   if (str.length > maxLength) {
  //     return str.substring(0, maxLength) + "...";
  //   } else {
  //     return str;
  //   }
  // }
  const removeCartItems=(title:string)=>{
    setCart((current: any) => {
      const filteredArray = current.filter((e: any) => {
        console.log(e.title, title);
        return e.title !== title;
      });
      // console.log(filteredArray);
      return filteredArray;
    });
   
  }
  const { isLoggedIn,cart,setCart }=useContext(CategoryContext)


    const navigate=useNavigate()
  return (
  !isLoggedIn? (<div className=" h-[50vh] p-4 backdrop-blur-sm bg-[#07484A]/80  flex w-full justify-center items-center flex-col gap-5">
  <p className="text-4xl font-playfair-display text-white ">oops nots logged in</p>
  <button onClick={()=>navigate("/user/login")} className="text-xl bg-[#37a688] rounded text-white py-2 px-4">log in</button>

</div>):(<div className=" mx-auto mt-4 mr-4h-[100vh] flex ">
  <div className="backdrop-blur-sm bg-[#07484A]/80 flex flex-col max-h-[80vh] overflow-y-scroll overflow-x-hidden scroll min-h-[50vh] p-2 rounded-lg lg:w-96 w-full">
    {cart.length==0?<div className="mt-[23vh] self-center text-xl text-white"> no items in cart</div>:
      cart.map((element:any,i:any)=>( <div key={i} className="flex gap-2 items-center w-full  "><div  className=" bg-[#bde8da] p-2 rounded flex-grow mb-2">
        
        <div className="flex gap-2 cursor-default" onClick={()=>navigate(`/product/${element.id}`)}>
          <div>
        <div>{element.title}</div><div className="flex gap-2  font-sans"> <p className="px-2 py-1 bg-red-300 rounded-lg w-fit">{element.price}</p><p className="px-2 py-1 bg-red-300 rounded-lg w-fit">{element.size}</p><p> quantity: {element.quantity}</p></div>
        
        </div>
      </div></div>
        <div className="py-0.5 px-2 h-fit bg-red-500  rounded-full text-white font-sans font-bold  cursor-pointer" onClick={()=>removeCartItems(element.title)}>X</div>
        
      </div>))
    }
    <button className={`text-white py-2 px-8 self-center bg-yellow-500 w-fit rounded ${cart.length==0? "hidden ": ""}`} onClick={()=>alert("sorry... but this site is only for display and you cannot buy any items")}>buy all</button>
  </div>
</div>

)
  )
}
