
import app from './App.js';
import ConnectDB from './config/congfig.js';


const PORT = process.env.PORT;

ConnectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is listening at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database connection failed:", err);
  });
