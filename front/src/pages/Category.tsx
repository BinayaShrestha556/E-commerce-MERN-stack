// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner} from '@fortawesome/free-solid-svg-icons'
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import Items from "../components/Cards";
import { CategoryContext } from '../context/categoryContext';
interface dataType {
  _id:string;
    photos: string[];
    title: string;
    category: string;
    rating: number;
    noOfReviews: number;
    oldprice: string;
    newprice: string;
  }

export default function Category({Category}:{Category:string}) {
    // const [category,setCategory]=useState(Category)
    // setCategory(Category)
    const [page,setPage]=useState(0)
    const [data,setData]= useState<dataType[]>([])
    const [loading,setLoading]=useState(false)
    const{category, setCategory}=useContext(CategoryContext)
    useEffect(()=>{
      setCategory(Category)
        const load=async()=>{ 
        setLoading(true)
        const res= await axios.get(`http://localhost:3000/data/category/${Category}/${page}`)
        setData(res.data.data)
        setLoading(false)

        }
        load()
    },[page,Category])
  return (
    <div className="xl:w-9/12 w-full m-auto flex flex-col">
      <p className="md:text-5xl sm:text-4xl text-3xl underline underline-offset-8 mb-5 font-bold text-[#07484A] font-playfair-display text-center py-1 mt-32">
        {" "}
        {Category.charAt(0).toUpperCase() + Category.slice(1)}'s section
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
      <div className='flex-grow-0 self-center mt-12 flex gap-4'>
      <button className={`py-2 px-4 bg-[#07484A]  text-white rounded ${page==0? "bg-gray-500":""}`} onClick={()=>{if(page>0)setPage(page-1)}}> previous page</button>
      <button onClick={()=>{if(page<2)setPage(page+1)}} className={`py-2 px-4 bg-[#07484A]  text-white rounded ${page==2? "bg-gray-500":""}`}>next page</button>
    </div></div>
  )
}
