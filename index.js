require('dotenv').config();
const express=require('express');
const bodyparser=require('body-parser');
const app=express();
const path=require('path');
const port=3000;
const https=require('https');

app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'./public')));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));

app.get('/',(req,res)=>{
    res.render('index');
})
app.post('/',(req,res)=>{
    let city=req.body.cityname;
    let api_key=process.env.API_KEY;
    let url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+api_key+"&units=metric";
    https.get(url,(response)=>{
        response.on("data",(data)=>{
            let weatherdata=JSON.parse(data)
            let temp=weatherdata.main.temp;
            let desc=weatherdata.weather[0].description;
            let icon=weatherdata.weather[0].icon;
            let img_src="http://openweathermap.org/img/wn/"+icon+"@2x.png";
            const weather_info={
                cityname : city,
                temperature : temp,
                description : desc,
                img_src : img_src
            }
            res.render('weather',weather_info);
        })
    })
})
app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
})