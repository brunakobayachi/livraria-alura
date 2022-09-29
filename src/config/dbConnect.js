import mongoose from "mongoose";
import * as dotenv from 'dotenv'

dotenv.config()

mongoose.connect(
    process.env.MONGODB_CONECT
);

let db = mongoose.connection;

export default db;
