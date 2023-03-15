export const headers = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: `token ${process.env.REACT_APP_API_TOKEN}`,
  },
};