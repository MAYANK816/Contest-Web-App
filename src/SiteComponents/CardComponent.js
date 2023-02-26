import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../Components/Card.css'
import Heart from './Heart';
import swal from 'sweetalert';
import axios from 'axios';
import * as constants from '../Constants/Constants';

const CardComponent = (props) => {
  let item = props.item;
 
  const dateFormat=(api_value)=>{
    
    let date = new Date(api_value);
    let now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
                    date.getUTCDate(), date.getUTCHours(),
                    date.getUTCMinutes(), date.getUTCSeconds());

    console.log(new Date(now_utc));
    return new Date(now_utc).toString();
}

  const _Add_Favourite = () => {
    if( props.operation!==null && props.operation==="delete"){
      let loginData=JSON.parse(localStorage.getItem('loginData'));
      let data={
        contest:item
      }
      axios.post(`${constants.API_URL}deleteFavourites/${loginData}`,data)
      .then((res) => {
        if (res.data.status === 200) {
          swal({
            text: "Removed from Favourites",
            icon: "success",
          })
          .then(() => {
            window.location.reload();
          }
          );
        }
        else {
          swal("Oops!!", "Site Error", "error");
        }
      })
      .catch((err) => {
        swal("Oops!", "Somethin went wrong", "error");
      });
    }
    else{
    let key=props.idx;
    item.id=key.toString()  
    let loginData=JSON.parse(localStorage.getItem('loginData'));
    let data={
      useremail:loginData,
      contest:item
    }
    axios.post(`${constants.API_URL}favourite`,data)
    .then((res) => {
      if (res.data.status === 200) {
        swal({
          text: "Added to Favourites",
          icon: "/Images/hearticon.png",
        });
      }
      else {
        swal("Oops!!", "Site Error", "error");
      }
    })
    .catch((err) => {
      console.log(err);
      swal("Oops!", "Somethin went wrong", "error");
    });
  }
}

  
  return (
    <Card className="Card_div">
    <CardContent className="Card_div_child" >
    <Typography variant="p" color="text.secondary ">
      </Typography>
      <Typography gutterBottom variant="p" component="div">
        Challenge Name: {item.name}
      </Typography>
      
      <Typography gutterBottom variant="p" component="div">
        Start Date: {dateFormat(item.start_time)}
      </Typography>
      <Typography gutterBottom variant="p" component="div">
        End Date: {dateFormat(item.end_time)}
      </Typography>
      <Typography gutterBottom variant="p" component="div">
       <Button size="small" ><a href={`${item.url}`} style={{color:"white", background:"#3e92fc",padding:"3px",borderRadius:"2px", marginLeft:"5px"}}>Participate Now!!</a></Button>
       <Heart  AddtoFav={_Add_Favourite} />
      </Typography>
    </CardContent>
   
  </Card>
  )
}

export default CardComponent