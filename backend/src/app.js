const express = require('express');
const cors = require('cors');
const app = express();
const varRoute = require('./routes/var.route');
const usersRoute = require('./routes/user.route'); 

app.set('port', process.env.PORT || 3000);

app.use(express.json());    
app.use(cors());

app.use('/test', (req, res)=>{
    res.send("General Kenoby");
});

app.use('/var', varRoute);
app.use('/user', usersRoute);

app.use('/', (req, res)=>{
    res.send("Hello there");
});

app.listen(app.get('port'), ()=>{
    console.log("back aberto no localhost:" + app.get('port'));
});