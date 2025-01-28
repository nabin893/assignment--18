import React from 'react';

const Baner4 = ({ncd}) => {
    // console.log(ncd);
    

    const {unique_id,coverImg,headline,date,author_name,hash_tags,author_img,reading_time}= ncd

    return (
         <div className='w-[300px] mx-auto bg-emerald-300 rounded-2xl my-10'>
                    <img className='h-[100px] w-[300px]  mx-auto ' src={coverImg} alt="" />
                          <div className=' flex gap-3'>
                              <img className='h-[60px] w-[60px]' src={author_img} alt="" />
                              <div className='mt-1'>
                                <p>{author_name}</p>
                                <p>{date}</p>
                                <div className='flex justify-center text-[12px] gap-2 mt-2' >
                        {
                            hash_tags.map((hash,index)=>  <div key={index} >{hash}  </div> )
                        }</div>
                                
                             </div>
                    </div>

                    <div>
                        <p className='text-3xl font-bold'>{headline}</p>   
                    </div>
                    
                    <div >
                    <button className="btn btn-active btn-primary my-3">Remove AS Read</button>
        
                    </div>
        
                </div>
        
    );
};

export default Baner4;