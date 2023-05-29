const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.json());

app.use('/test', (req, res)=>{
    res.send("General Kenoby");
});

app.use('/', (req, res)=>{
    res.send("Hello there");
});

app.listen(app.get('port'), ()=>{
    console.log("back aberto no localhost:" + app.get('port'));
});