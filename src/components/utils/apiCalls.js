import axios from "axios";

// export async function getAll(page_name) {
//   try {
//     const response = await axios.get(`http://localhost:3001/${page_name}`, {
//       headers: {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYxYjRiYzM0ZGU3MDFkZTQ1ZmI0NWIiLCJpYXQiOjE3MTA4NDg5Njh9.7LB90G1SGP6T4-q9lWU9Tz2Md2QHOzxFtNB10kUfNU0",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw new Error(error);
//   }
// }

export async function createNewProduct(page_name, body) {
  try {
    const response = await axios.post(`${process.env.REACT_APP_SERVER}/${page_name}`, body, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYxYjRiYzM0ZGU3MDFkZTQ1ZmI0NWIiLCJpYXQiOjE3MTA4NDg5Njh9.7LB90G1SGP6T4-q9lWU9Tz2Md2QHOzxFtNB10kUfNU0",
      },
    });
    return response.data;
  } catch (error) {
    console.log(page_name)
    throw new Error(error);
  }
}