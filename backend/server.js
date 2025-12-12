import express from 'express';
import { configDotenv } from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
//local module

const app = express();
configDotenv();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({msg: 'Server is running'});
});

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.info('Connected');

  // listening app
  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`Server is runnig  in http://localhost:${PORT}`)
  });
})
.catch((err) => {
  console.error(err.message);
})