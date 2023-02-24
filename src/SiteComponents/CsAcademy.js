import React,{useState,useEffect} from 'react'
import CardComponent from "./CardComponent"
const CsAcademy = () => {
const[_ApiData,set_ApiData] = useState([]);
const [loading,setloading]=useState(false);

useEffect(() => {
  const _ApiCall_Function = async () => {
    setloading(true);
    const _ApiData = await fetch('https://kontests.net/api/v1/cs_academy');
    const _ApiDataJson = await _ApiData.json();
    set_ApiData(_ApiDataJson);
    setloading(false);
  }
  _ApiCall_Function();
},[]);

const _perform_Operation=()=>{
  if(_ApiData!==undefined) 
    return _ApiData.map((item,idx)=>{
        return <CardComponent key={idx} item={item} idx={idx}/>
    })
  else return "No Contests Found"
}
  return (
    <div className='Home_Products'>    
    {
        loading?"loading...." :_perform_Operation()
    }
    </div>
  )
}

export default CsAcademy