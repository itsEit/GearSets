const axios = require("axios").default;

axios.defaults.timeout = 3000;
axios.defaults.timeoutErrorMessage = "Timeout";
axios.defaults.baseURL = "http://localhost:3080";

export const gearItem = async (itemID) => {
  let res = await axios
    .get("/Gear/id/" + itemID)
    .then((res) => {
      return { status: "ok", data: res.data };
    })
    .catch((err) => {
      return { status: "error", data: err.message };
    });
  return await res;
};

export const login = async (loginData) => {
  let res = await axios.post("/user/login", loginData).then((res) => {
    return res;
  });
  return await res;
};
