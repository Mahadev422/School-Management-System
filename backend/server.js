import express from 'express';
import { configDotenv } from 'dotenv';
import mongoose from 'mongoose';
//local module

const app = express();
configDotenv();

app.get('/', (req, res) => {
  res.send('Server is running');
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