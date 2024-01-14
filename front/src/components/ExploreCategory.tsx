
import {Link} from 'react-router-dom'
export default function ExploreCategory() {
  return (
    <div className="w-[100%] lg:w-9/12 flex flex-col gap-7 items-center m-auto xl:mt-44 md:mt-32 mt-20 ">
      <p className="md:text-5xl sm:text-4xl text-3xl underline underline-offset-8 font-bold font-playfair-display text-[#07484A]">
        explore by category
      </p>
      <div className="flex w-full gap-2 p-2">
       <div className='flex-grow basis-full'><Link to="kids"><div className="flex-grow   transition-all ease-in-out duration-100 font-bold hover:backdrop-blur-sm hover:text-[#07484A]  hover:bg-gray-200/80 hover:bg-blend-lighten  bg-center bg-cover bg-blend-multiply bg-gray-600 flex items-center justify-center text-white font-playfair-display sm:text-4xl text-3xl bg-[url(./src/assets/pexels-photo-1620760.webp)]">
        <p className="py-[50%]">kids</p>
        </div></Link></div> 
        <div className='flex-grow basis-full'><Link to="men"><div className="flex-grow  transition-all ease-in-out duration-100 font-bold hover:text-[#07484A] hover:bg-gray-200/80 hover:bg-blend-lighten bg-center bg-cover bg-blend-multiply bg-gray-600 flex items-center justify-center text-white font-playfair-display sm:text-4xl text-3xl bg-[url(./src/assets/istockphoto-1310533180-1024x1024.jpg)]">
        <p className="py-[50%]">men</p>
        </div></Link> </div>
       <div className='flex-grow basis-full'> <Link to="women"><div className="flex-grow  transition-all ease-in-out duration-100 font-bold hover:text-[#07484A] hover:bg-gray-200/80 hover:bg-blend-lighten bg-center bg-cover bg-blend-multiply bg-gray-600 flex items-center justify-center text-white font-playfair-display sm:text-4xl text-3xl bg-[url(./src/assets/women.jpeg)]">
        <p className="py-[50%]">women</p>
        </div></Link></div>
      </div>
    </div>
  );
}
