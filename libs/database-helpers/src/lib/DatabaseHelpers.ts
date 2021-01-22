export const dbOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  auto_reconnect: false,
  useFindAndModify: false,
};

export function databaseHelpers(): string {
  return 'database-helpers';
}
