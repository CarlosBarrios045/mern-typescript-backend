import mongoose, { ConnectionOptions } from 'mongoose';
import { config } from 'dotenv';

config();

(async () => {
  try {
    const options: ConnectionOptions = await {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    };
    await mongoose.connect(process.env.MONGO_URI || '', options);
    console.log('DB is connected');
  } catch (e) {
    console.log('Error DB ->', e);
  }
})();
