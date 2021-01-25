module.exports = {
  development: {
    connString: process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost/zod',
    jwtSecretKey: 'Test',
  },
  production: {
    connString: process.env.MONGODB_CONNECTION_STRING,
    jwtSecretKey: 'Test',
  },
  get_config_profile() {
    return process.env.BZENV || 'development';
  },
  get_config: () => {
    const configProfile = process.env.BZENV || 'development';
    console.log(`CONFIG PROFILE SELECTED IS:  ${configProfile}`);
    return this[configProfile];
  },
};
