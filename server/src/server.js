require('dotenv').config();

const app = require('./app');
const { connectDB } = require('./config/db');

const PORT = process.env.PORT || 5000;

async function bootstrap() {
  try {
    if (process.env.MONGO_URI) {
      await connectDB();
    }

    app.listen(PORT, () => {
      console.log(`Tiffora server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Server bootstrap failed:', error.message);
    process.exit(1);
  }
}

bootstrap();
