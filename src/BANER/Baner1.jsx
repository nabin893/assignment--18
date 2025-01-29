import React, { useEffect, useState } from 'react';
import Baner2 from './Baner2';
import Baner3 from './Baner3';
import { bokData, getData, removeData, setData } from '../localstros/localstros';


const Baner1 = () => {
    const [cardData, setCardData] = useState([])
    //    console.log(cardData);

    const [NCardData, setNCardData] = useState([])
    //   console.log(NCardData);

    const [bookMark, setBookMark] = useState(0)

    useEffect(() => {
        fetch('../../../public/Data.json')
            .then(res => res.json())
            .then(data => setCardData(data)
            )
    }, [])

// 1 data add click
    const hanMark = (id) => {
        const newData = [...NCardData, id]
        setNCardData(newData)
        setData(id.unique_id)
    }
    // useEffect(() => {
    //     const data = getData()
    //     const mt = []
    //     for (const da of data) {
    //         const filData = cardData.find(idx => idx?.unique_id === da)
    //         mt.push(filData)
    //     }
    //     setCardData(mt)
    // }, [cardData])


// 2 bookmark click
    const BHanClick = (id) => {

        const newBMark = id.split(" ")[0]
        const newBMarks = parseInt(newBMark)
        const bokMark = newBMarks + bookMark;
        setBookMark(bokMark)
        bokData(newBMark)    
    }
useEffect(()=>{
    const data =getData()

},[])


  
//  3 Remove  
   const removeHandel =(id)=>{
    const newValu = NCardData.filter(idx=>idx !==id)
    removeData(id)
    setNCardData(newValu)
    // console.log(id);
    

   }

    return (
        <div>
            <p className=' text-2xl font-bold my-10 '>MY PROJECT</p>
            <div className='grid grid-cols-3 gap-5 '>
                <div className=' col-span-2   rounded-lg bg-blue-100'>
                    {
                        cardData.map(cData => <Baner2 key={cData?.unique_id
                        } cData={cData} hanMark={hanMark} BHanClick={BHanClick}></Baner2>)
                    }

                </div>

                <div className='  bg-blue-100 rounded-lg'>
                    <Baner3 NCardData={NCardData} bookMark={bookMark} removeHandel={removeHandel}></Baner3>
                </div>

            </div>

        </div>
    );
};

export default Baner1;