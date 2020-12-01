import mongoose, { ConnectionOptions } from 'mongoose';
import config from './index';

(async () => {
  try {
    const options: ConnectionOptions = await {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      authSource: 'admin',
      user: config.MONGO_USER,
      pass: config.MONGO_PASSWORD,
    };
    await mongoose.connect(
      `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`,
      options
    );
    console.log('DB is connected');
  } catch (e) {
    console.log('Error DB ->', e);
  }
})();
