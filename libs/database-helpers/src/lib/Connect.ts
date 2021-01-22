import { connect, disconnect, connection } from 'mongoose';
import { dbOptions } from './DatabaseHelpers';
export function connectToDatabase(databaseURI: string): void {
  connect(databaseURI, dbOptions);
  const db = connection;
  db.on('connecting', function () {
    console.log('connecting to MongoDB...');
  });

  db.on('error', function (error) {
    console.error('Error in MongoDb connection: ' + error);
    disconnect();
  });
  db.on('connected', function () {
    console.log('MongoDB connected!');
  });
  db.once('open', function () {
    console.log('MongoDB connection opened!');
  });
  db.on('reconnected', function () {
    console.log('MongoDB reconnected!');
  });
  db.on('disconnected', function () {
    if (dbOptions.auto_reconnect) {
      console.log('MongoDB disconnected!');
      connect(databaseURI, dbOptions);
    }
  });
}

export function disconnectDatabase(): void {
  disconnect();
}
