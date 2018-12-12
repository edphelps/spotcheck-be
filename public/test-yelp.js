

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM loaded in test.js");
  console.log("before axios call");
  const param = { locaIds: ['MCd01xGZtmfSsH_RUj4pAA', '0A80IDh1Ag7jW4_D9sjQPQ']};
  axios.post('yelp/', param)
    .then((res) => {
      console.log("--- res.data: ", res.data);
      const elem = document.getElementById('test');
      elem.innerText = JSON.stringify(res.data);
    })
    .catch((error) => {
      console.log("--- Error: ", error);
    });
});
