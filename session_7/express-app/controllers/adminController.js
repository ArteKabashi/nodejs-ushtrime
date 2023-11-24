const Product = require("../models/Product")

module.exports = {
  getAdminView : (req, res) => {
  res.write("<h1>admin route</h1>");
},

addProductView : (req, res) => {
  res.render("add-product", { title: "Add Product" });
},


 createProduct :(req, res) => {
  const productName = req.body.productName;
  const productPrice = req.body.productPrice;
  const productImageUrl = req.body.productImageUrl;
  const productDescripton = req.body.productDescripton;
  const productCategory = req.body.productCategory;


  const newProduct = new Product({
    name : productName,
    price : productPrice,
    imageUrl : productImageUrl,
    description : productDescripton,
    category : productCategory
 });

   newProduct.save().then(result =>{
    console.log(result);
  res.redirect("/admin/add-product");
   }).catch(err => console.log(err))

}

}