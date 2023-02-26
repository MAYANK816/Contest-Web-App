import React,{useState,useEffect} from 'react'
import CardComponent from "./CardComponent"
const CodeChef = () => {
    const[_ApiData,set_ApiData] = useState([]);

useEffect(() => {
  const _ApiCall_Function = async () => {
    const _ApiData = await fetch('https://kontests.net/api/v1/code_chef');
    const _ApiDataJson = await _ApiData.json();
    set_ApiData(_ApiDataJson);
  }
  _ApiCall_Function();
},[]);
  return (
    <div className='Home_Products'>    
    {
       _ApiData.length>0? _ApiData.map((item,index) => {
        return <CardComponent key={index} item={item} idx={index}/>
        })
        : "Loading..."
    }
    </div>
  )
}

export default CodeChef