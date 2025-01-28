import React from 'react';
import { FaBookmark } from "react-icons/fa6";


const Baner2 = ({cData,hanMark,BHanClick}) => {
    // console.log(BHanClick);
    
 
    // const{unique_id,coverImg,headline,date,author_name,hash_tags,author_img,reading_time}= cData
    
   
    return (
        <div className='w-[600px] mx-auto bg-emerald-300 rounded-2xl my-10'>
            <img className='h-[300px] w-[600px]  mx-auto ' src={cData?. coverImg} alt="" />
            <div className='flex justify-between mx-5 mt-5 '>
                  <div className=' flex gap-3'>
                      <img className='h-[60px] w-[60px]' src={ cData?.author_img} alt="" />
                      <div className='mt-1'>
                        <p>{cData?.author_name}</p>
                        <p>{cData?.date}</p>
                     </div>
                  </div>

                  <div className='flex gap-3 mt-3'>
                  <FaBookmark onClick={()=>BHanClick( cData?.reading_time)} className=' text-2xl' />
                  <p>{cData?.reading_time}</p>
                  </div>
            </div>
            <div>
                <p className='text-3xl font-bold'>{cData?.headline}</p>   
            </div>
            <div className='flex justify-center text-[20px] gap-2 mt-2' >
                {
                  cData?.hash_tags.map((hash,index)=>  <div key={index} >{hash}  </div> )
                }
            </div>
            <div >
            <button onClick={()=>hanMark(cData)} className="btn btn-active btn-primary my-3">ADD CARD</button>

            </div>

        </div>
    );
};

export default Baner2;