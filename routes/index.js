const Router = require('express');
const router = Router();

const rateRourer = require('./rateRoutes');
const subscriptionRoutes = require('./subscriptionRoutes')
const sendEmailsRoutes = require('./sendEmailsRoutes')
router.use('/rate', rateRourer);
router.use('/subscribe', subscriptionRoutes);
router.use('/sendEmails', sendEmailsRoutes);
module.exports = router;