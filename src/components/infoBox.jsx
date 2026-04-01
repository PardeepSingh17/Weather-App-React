import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SunnyIcon from '@mui/icons-material/Sunny';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./infoBox.css"

export default function InfoBox({info}) {
    let hotWeatherImage = "https://plus.unsplash.com/premium_photo-1667076649924-d784d205cbba?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let coldWeatherImage = "https://images.unsplash.com/photo-1641719061676-f7e9104b79d9?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let rainWeatherImage = "https://images.unsplash.com/photo-1558920778-a82b686f0521?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    if(!info){
        return null
    }

    return <div className='cardContainer'>
        <Card sx={{ 
          maxWidth: 345,
          borderRadius: 3,
          boxShadow: 5,
          transition: "0.3s",
          "&:hover": {
            transform: "scale(1.03)"
          }
        }}>
      
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? rainWeatherImage : info.temp > 15 ? hotWeatherImage : coldWeatherImage}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 80 ? <BeachAccessIcon/> : info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography component="div" variant="body2" sx={{ color: 'text.secondary' }} >
          <p><b>Temprature </b>{info.temp}&deg;C</p>
          <p><b>Minimum Temprature </b>{info.tempMin}&deg;C</p>
          <p><b>Maximum Temprature </b>{info.tempMax}&deg;C</p>
          <p><b>Humidity </b>{info.humidity}</p>
          <p>Weather can be <b>{info.weather}</b> and feels like <b>{info.feelslike}</b>&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
}