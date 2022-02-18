const express = require('express');
const app = express()
const port = process.env.PORT || 3000
const path = require('path');
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath)); //default load public folder
//# PAGES
// import AboutPage from './pages/AboutPage';
// import ServicesPage from './pages/ServicesPage';
// import GalleryPage from './pages/GalleryPage';
// import ContactPage from './pages/ContactPage';
// import ResumePage from './pages/ResumePage';
// import HomePage from './pages/HomePage';



//# ROUTES
// app.get('/', (req, res) => {
//     res.sendFile(path.join(publicPath, 'index.html'))
// })
app.get('/services', (req, res) => {
    res.send('This is the Portfolio ServicesPage')
})
// app.get('/gallery', (req, res) => {
//     res.send('This is the Portfolio GalleryPage')
// })
// app.get('/about', (req, res) => {
//     res.send('This is the Portfolio ServicesPage')
// })
// app.get('/contact', (req, res) => {
//     res.send('This is the Portfolio ContactPage')
// })
// app.get('/resume', (req, res) => {
//     res.send('This is the Portfolio ResumePage')
// })

// Loads this for any link not listed
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})
// app.get('/services', (req, res) => {
//     res.send('This is the Portfolio ServicesPage')
// })




app.listen(port, () => {
    console.log(`Backend Express Server listening on  http://localhost:${port}`)
})