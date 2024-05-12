import mongoose from "mongoose";
import { DATABASE_NAME } from "../constants.js";

const connectDatabase = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`, {
            dbName: DATABASE_NAME
        });
        // to ensure which host I am getting connected for different instances.
        console.log(`\n MongoDB connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Database Unable to Connect.", error);
        process.exit(1);
    }
}
export default connectDatabase;