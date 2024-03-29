require('dotenv').config
const express = require('express')
const connectDB = require('./config/db')
const app = express()
const PORT = process.env.PORT || 3000
const userRoutes = require('./routers/userRouter.js')
const resourceRoutes = require('./routers/resourceRouter')

app.get('/', (req, res) => {
    res.send("Homepage");
})

app.use(express.json());

app.use('/api/users', userRoutes)
app.use('/api/resources',resourceRoutes)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();