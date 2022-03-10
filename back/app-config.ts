/** @format */

export const PORT = 3000;
export const environment = {
  development: {
    serverURL: `http://localhost:${PORT}`,
    dbString: "mongodb://localhost:27017/accache",
  },
};
