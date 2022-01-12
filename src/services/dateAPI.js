const DATE_JSON_URL = "https://jsonmock.hackerrank.com/datetime";

export default {
  getAPIResponse() {
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setDate(data);
      })
      .catch((e) => {
        setError(e.message);
      });
  },
};
