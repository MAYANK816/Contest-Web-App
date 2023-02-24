import React,{useEffect,useState} from 'react'
import CardComponent from '../SiteComponents/CardComponent';
import * as constants from '../Constants/Constants';
const Favourites = () => {
    const [data, setdata] = useState([]);
    const [loading,setloading]=useState(true);
    let loginData=JSON.parse(localStorage.getItem('loginData'));
    const fetchData = () => {
        fetch(`${constants.API_URL}getUserFavourite/${loginData}`)
          .then(response => {
            setloading(false);
            return response.json();
          })
          .then((data)=> {
            setdata(data.user);
            
          })
      }
      useEffect(() => {
        fetchData()
      }, []);
  const _perform_Operation=()=>{
    if(loading)
    return "loading...."
    if(data!==undefined) 
      return data.map((item,idx)=>{
          return <CardComponent item={item.contest} idx={idx} key={idx} operation="delete"/>
      })
    else return " No Favourites"
  }  
  return (
    <div>
        {
        _perform_Operation()
        }
    </div>
  )
}

export default Favourites
