const express = require('express');
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

app.use('billing', billingRoute);
app.use('contractStatusRoute', contractStatusRoute);
app.use('contractType', contractTypeRoute);
app.use('contract', contractRoute);
app.use('document', documentRoute);
app.use('infrastructure', infrastructureRoute);
app.use('infrastructureType', infrastructureTypeRoute);
app.use('pack', packRoute);
app.use('packValueHistor', packValueHistoryRoute);
app.use('paymentMethod', paymentMethodRoute);
app.use('production', productionRoute);
app.use('uprofile', profileRoute);
app.use('userProfile', userProfileRoute);
app.use('/user', userRoute);
app.use('/var', varRoute);

app.use('/', (req, res)=>{
    res.send("Hello there");
});

app.listen(app.get('port'), ()=>{
    console.log("back aberto no localhost:" + app.get('port'));
});