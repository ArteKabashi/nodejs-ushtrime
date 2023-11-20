const productsArray = []; 


module.exports = {
    products :productsArray,

    getAdminView : (req, res) => {
  res.write("<h1>admin route</h1>");
},

addProductView : (req, res) => {
  res.render("add-product", { title: "Add Product" });
},



 createProduct :(req, res) => {
  productsArray.push(req.body);
  res.redirect("/admin/add-product");
}



}