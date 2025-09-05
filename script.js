fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

// to see the fetched data using api : right click in web browser and click on inspect then click on console option on top right side
