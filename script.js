// get main tag
const productsContainer = document.getElementById("productsContainer");

// return product Card Structure html + css classes
const getProductCardStructure = (productName, productPrice, productImage) => {
  const ProductCardSection = document.createElement("section");
  ProductCardSection.classList.add("productCard");

  ProductCardSection.innerHTML = `
  
            <div class="imageContainer">
               <img src=${productImage} />
            </div>
            <div class="contentContainer">

            
               <div>
                 <h1>${productName}</h1>
              
                 </div>
                <div class="price">
                   <button>Buy Now</button>
                   <h2>$${productPrice}</h2>
                </div>
            </div>
       
      
  
  `;

  return ProductCardSection;
};

// add product cards to dom
const addCardProductTodDom = (productsList) => {
  for (let product of productsList) {
    productsContainer.appendChild(
      getProductCardStructure(
        product.productName,
        product.productPrice,
        product.image
      )
    );
  }
};

// get products data from local server
const getProductsData = async () => {
  const data = await fetch("http://127.0.0.1:5000/data");
  const productsList = await data.json();
  return productsList;
};

getProductsData().then((productsList) => addCardProductTodDom(productsList));
