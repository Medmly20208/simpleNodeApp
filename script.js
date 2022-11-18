// get main tag
const productsContainer = document.getElementById("productsContainer");
const ProductCardSection = document.createElement("section");

ProductCardSection.classList.add("productCard");

// product Card Structure

//
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

// get products data
const getProductData = async () => {
  const data = await fetch("http://127.0.0.1:5000/data");
  const productsList = await data.json();

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

getProductData();
