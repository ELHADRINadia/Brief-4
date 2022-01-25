export default {
  Product: (product) => /*html*/ `
  <div class="product">
      <img src=${"./server/uploads/" + product.image} alt=${
    product.name
  } class="img" />
      <h3 class="product-name">${product.name}</h3>
      <div class="product-quantity">
          <p>${product.quantity}</p>
          <i class="gg-bookmark"></i>
      </div>
      <div class="product-buttons">
          <div class="product-price">
              <p>${product.price}</p>
              <i class="gg-dollar"></i>
          </div>
          <div class="buttons">
              <i class="gg-trash delete-btn" id=${product.id} ></i>
              <i class="gg-pen edit-btn" id=${product.id} ></i>
          </div>
      </div>
  </div>`,
  ProductToEdit: (product) => /*html*/ `
    <i class="gg-arrow-left close-modal-btn"></i>
    <img src=${"./server/uploads/" + product.image} alt=${
    product.name
  } class="img" />
    <form id="edit-product-form">
      <div class="inputs">
        <div class="input">
          <label for="product-to-edit-name">Name</label>
          <input type="text" id="product-to-edit-name"/>
        </div>
        <div class="input">
          <label for="product-to-edit-price">Price</label>
          <input type="text" id="product-to-edit-price"/>
        </div>
        <div class="input">
          <label for="product-to-edit-quantity">Quantity</label>
          <input type="text" id="product-to-edit-quantity"/>
        </div>
        <div class="input">
          <label for="product-to-edit-category">Category</label>
          <select id="product-to-edit-category">
            <option value="phones">Phones</option>
            <option value="laptops">Laptops</option>
            <option value="tablets">Tablets</option>
          </select>
        </div>
        <input type="submit" value="Save" />
      </div>
    </form>`,
  ProductToDelete: (product) => /*html*/ `
    <i class="gg-arrow-left close-modal-btn"></i>
    <img src=${"./server/uploads/" + product.image} alt=${
    product.name
  } class="img" />
    <div class="product-details">
      <h3 class="product-name">${product.name}</h3>
      <div class="product-info">
        <div class="product-quantity">
          <p>${product.quantity}</p>
          <i class="gg-bookmark"></i>
        </div>
        <div class="product-price">
            <p>${product.price}</p>
            <i class="gg-dollar"></i>
        </div>
      </div>
      <div class="button delete-product">
          <p class="title">Delete</p>
          <i class="gg-trash" ></i>
        </div>
    </div>`,
  Empty: (text) => /*html*/ `<h3 class="empty">${text}</h3>`,
};
