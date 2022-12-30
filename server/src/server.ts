import express from 'express'
import * as dotenv from 'dotenv' 
import restaurant from '../routes/restaurant'
import morgan from 'morgan'
import cors from 'cors'

//const db = require('../db');

dotenv.config();
const port = process.env.PORT || 3000;
const app = express();

/** Middleware to show information about request */
app.use(morgan('dev'));
/** Middleware to get access to request body */
app.use(express.json());

app.use(cors());

/** Routes for API */
app.use('/api/v1/restaurants/', restaurant);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});