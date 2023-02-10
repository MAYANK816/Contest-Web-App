import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../Components/Card.css'
const CardComponent = (props) => {
 let item = props.item;
  const dateFormat=(api_value)=>{
    let  startDate = new Date(api_value);
    let  year = startDate.getFullYear();
    let  month = startDate.getMonth()+1;
    let  dt = startDate.getDate();
     
     if (dt < 10) {
       dt = '0' + dt;
     }
     if (month < 10) {
       month = '0' + month;
     }
     return year+'-' + month + '-'+dt;
}

  
  return (
    <Card className="Card_div">
    <CardContent style={{backgroundColor: "#121513", color: "white",height:"auto"}}>
    <Typography variant="p" color="text.secondary ">
      </Typography>
      <Typography gutterBottom variant="p" component="div">
        Challenge Name: {item.name}
      </Typography>
      
      <Typography gutterBottom variant="p" component="div">
        Starte Date: {dateFormat(item.start_time)}
      </Typography>
      <Typography gutterBottom variant="p" component="div">
        End Date: {dateFormat(item.end_time)}
      </Typography>
       <Button size="small" ><a href={`${item.url}`} style={{color:"white", background:"#3e92fc",padding:"3px",borderRadius:"2px", marginLeft:"5px"}}>Participate Now!!</a></Button>
      
    </CardContent>
   
  </Card>
  )
}

export default CardComponent