const getData = () => {
    const storData = localStorage.getItem("NCardData")

    if (storData) {
        return JSON.parse(storData)
    }
    return []
}
const setData = (id) => {
    const sData = getData()
    sData.push(id)
    localStorage.setItem("NCardData", JSON.stringify(sData))
    // console.log(id);
}


// 2 Remov
const removeData = (id) => {
    // console.log(id);
    const data = getData();
    const filterData= data.filter(ind=>ind !== id)
    localStorage.setItem("NCardData",JSON.stringify(filterData))

    console.log(filterData);
}

// 3 bookmarkadd
    const bokData=(id)=>{
       const bData =getData()
       bData.push(id)
       localStorage.setItem("NCardData",JSON.stringify(bData))
       console.log(id);
    }




export {
    getData,
    setData,
    removeData,
    bokData
}