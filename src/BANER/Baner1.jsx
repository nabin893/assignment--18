import React, { useEffect, useState } from 'react';
import Baner2 from './Baner2';
import Baner3 from './Baner3';
import { bokData, getData, setData } from '../localstros/localstros';

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


    const hanMark = (id) => {
        const newData = [...NCardData, id]
        setNCardData(newData)
        setData(id.unique_id)
    }


    // useEffect(() => {
    //     const data = getData()
    //     const mt = []
    //     for (const da of data) {
    //         const filData = cardData.find(idz => idx?.unique_id === da)
    //         mt.push(filData)
    //     }
    //     setCardData(mt)
    // }, [cardData])



    const BHanClick = (id) => {

        const newBMark = id.split(" ")[0]
        const newBMarks = parseInt(newBMark)
        const bokMark = newBMarks + bookMark;
        setBookMark(bokMark)
    //    bokData(id.unique_id)
   

        // console.log(newBMark);



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
                    <Baner3 NCardData={NCardData} bookMark={bookMark}></Baner3>
                </div>

            </div>

        </div>
    );
};

export default Baner1;