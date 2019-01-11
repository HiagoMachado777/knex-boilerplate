import dotenv from 'dotenv';
import configExpress from "./config/express";

const startApplication = () => {
    const app = configExpress();
    dotenv.config();
    const { API_PORT } = process.env;
    const RUN_PORT = process.env.PORT || API_PORT || 4002;
    app.listen(RUN_PORT, () => {
        console.log(`API is running on port ${RUN_PORT}`);
      });
};

export default startApplication;