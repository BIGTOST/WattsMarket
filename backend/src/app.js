const express = require('express');
const middleware = require('./middleware');
const cors = require('cors');
const app = express();

const billingRoute = require('./routes/billing.route');
const contractStatusRoute = require('./routes/contract.status.route');
const contractTypeRoute = require('./routes/contract.type.route');
const contractRoute = require('./routes/contracts.route');
const documentRoute = require('./routes/document.route');
const infrastructureRoute = require('./routes/infrastructure.route');
const infrastructureTypeRoute = require('./routes/infrastructure.type.route');
const packRoute = require('./routes/pack.route');
const packValueHistoryRoute = require('./routes/pack.value.history.route');
const paymentMethodRoute = require('./routes/payment.method.route');
const productionRoute = require('./routes/production.route');
const profileRoute = require('./routes/profile.route');
const userProfileRoute = require('./routes/user.profile.route');
const userRoute = require('./routes/user.route');
const varRoute = require('./routes/var.route');

app.set('port', process.env.PORT || 3000);

app.use(express.json());    
app.use(cors());

app.use('/test', (req, res)=>{
    res.send("General Kenoby");
});

app.use('/billing',middleware.checkToken, billingRoute);
app.use('/contractStatusRoute',middleware.checkToken, contractStatusRoute);
app.use('/contractType',middleware.checkToken, contractTypeRoute);
app.use('/contract',middleware.checkToken, contractRoute);
app.use('/document',middleware.checkToken, documentRoute);
app.use('/infrastructure',middleware.checkToken, infrastructureRoute);
app.use('/infrastructureType',middleware.checkToken, infrastructureTypeRoute);
app.use('/pack',middleware.checkToken, packRoute);
app.use('/packValueHistory',middleware.checkToken, packValueHistoryRoute);
app.use('/paymentMethod',middleware.checkToken, paymentMethodRoute);
app.use('/production',middleware.checkToken, productionRoute);
app.use('/userprofile',middleware.checkToken, profileRoute);
app.use('/userProfile',middleware.checkToken, userProfileRoute);
app.use('/user', userRoute);
app.use('/var',middleware.checkToken, varRoute);

app.use('/', (req, res)=>{
    res.send("Hello there");
});

app.listen(app.get('port'), ()=>{
    console.log("back aberto no localhost:" + app.get('port'));
});