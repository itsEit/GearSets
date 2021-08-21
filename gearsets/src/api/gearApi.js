const axios = require("axios").default;

axios.defaults.timeout = 3000;
axios.defaults.timeoutErrorMessage = "Timeout";

export const gearItem = async (itemID) => {
  let res = await axios
    .get("http://localhost:3000/Gear/id/" + itemID)
    .then((res) => {
      return { status: "ok", data: res.data };
    })
    .catch((err) => {
      return { status: "error", data: err.message };
    });
  return await res;
};
