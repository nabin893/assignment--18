import React from 'react';
import Baner4 from './Baner4';

const Baner3 = ({NCardData,bookMark,removeHandel}) => {
    // console.log(bookMark);
    
   
    
    
    return (
        <div>
           <div>
                 <p className='text-3xl font-bold'>BOOLMARK</p>
                <p className='text-2xl font-bold'>{bookMark}</p>
           </div>

           <div>
            {
                NCardData.map((ncd,index)=> <Baner4 ncd={ncd} key={index} removeHandel={removeHandel} ></Baner4>)
            }
           </div>
            
        </div>
    );
};

export default Baner3;