import React from 'react';

const Navbar1 = () => {

    return (
       <div className=' p-10 rounded-2xl bg-blue-200'>
      
         <div className=' flex justify-between'>
            <div>
                <img className='h-[50px] w-[150px] mt-5' src="../../src/AllIMAGES/logo.png" alt="" />
                
            </div>
            <div>
            <img className='h-[70px] w-[70px]' src="../../src/AllIMAGES/nav1.png" alt="" />

            </div>
        </div>
       </div>
    );
};

export default Navbar1;