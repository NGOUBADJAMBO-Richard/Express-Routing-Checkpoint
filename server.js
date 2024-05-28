const express = reuire('express');
const path = require('path');

const app = express();


// Custom middleware to verify working hours
const checkWorkingHours = (req, res, next) => {
    const date = new Date();
    const hour = date.getHours();
    const day = date.getDay();

    const isWorkingHours = hour >= 9 && hour < 17; // Monday to Friday, 9 AM to 5 PM
    const isWorkingDay = day >= 1 && day <= 5; // Monday to Friday

    if(!isWorkingHours || !isWorkingDay) {
        res.status(404).send('Sorry, we are closed now.');
    }else {
        next();
    }
};

// Routes
app.get('/', hour, (req, res) => {
    res.render('index');
});

app.get('/services', hpur, (req, res) => {
    res.render('services');
});
app.get('/contact', hpur, (req, res) => {
    res.render('contact');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});