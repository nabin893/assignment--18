const getData=()=>{
    const storData=localStorage.getItem("NCardData")

    if(storData){
        return JSON.parse(storData)
    }
    return []
}

const setData=(id)=>{
    const sData= getData()
    sData.push(id)
    localStorage.setItem("NCardData" ,JSON.stringify(sData))
    // console.log(id);
}
 const bokData=(id)=>{
    const bData =getData()
    console.log(id);
    

 }
export{
    getData,
    setData,
    bokData
}