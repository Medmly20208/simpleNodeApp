// get products data
const getProductData = async () => {
  const data = await fetch("http://127.0.0.1:5000/data");
  const res = await data.json();

  console.log(res);
};

getProductData();
