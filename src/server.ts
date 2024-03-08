// getting-started.js
import mongoose from 'mongoose';
import app from './app';
import config from './config';

async function main() {
 try {
    await mongoose.connect(config.databaseUrl as string);
    console.log("✔✔ Database connected Succesfully")
    app.listen(config.port, () => {
        console.log(`Auth Service Is Running On Port ${config.port}`)
      })
 } catch (error) {
    console.log(error, "Failed To Connected Database")
 }
}

main()