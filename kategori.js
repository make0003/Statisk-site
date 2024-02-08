fetch("https://kea-alt-del.dk/t7/api/products/")
  .then((response) => response.json())
  .then((data) => showCategories(data));

function showCategories(products) {
  console.log(products);
  products.forEach(showCategory);
}

function showCategory(product) {
  const template = document.querySelector(".categoryTemplate").content;

  const copy = template.cloneNode(true);

  //ændre indhold

  copy.querySelector(".kategorier").textContent = product.category;
  copy.querySelector(".kategorier2").textContent = product.category;

  document.querySelector("main").appendChild(copy);
}
// {
// //   "id": 1164,
// //   "gender": "Men",
// //   "category": "Apparel",
// //   "subcategory": "Topwear",
// //   "articletype": "Tshirts",
// //   "basecolour": "Blue",
// //   "season": "Winter",
// //   "productionyear": 2015,
// //   "usagetype": "Sports",
// //   "productdisplayname": "Blue T20 Indian Cricket Jersey",
// //   "parsed": 1,
// //   "soldout": 1,
// //   "relid": 1164,
// //   "price": 1595,
// //   "discount": 28,
// //   "variantname": "Collared Jersey",
// //   "brandname": "Nike",
// //   "brandbio": "Nike, creating experiences for today’s athlete",
// //   "brandimage": "http://assets.myntassets.com/v1/assets/banners/2015/6/26/1435317851398-23197-3chxv6.jpg",
// //   "agegroup": "Adults-Men",
// //   "colour1": "NA",
// //   "colour2": "NA",
// //   "fashiontype": "Fashion",
// //   "materialcaredesc": null,
// //   "sizefitdesc": null,
// //   "description": "<p><strong>Composition</strong><br />Blue cotton jersey with a ribbed V-neck and spread collar, short sleeves, tri-colour paneling from the sleeve to the hem, orange panel on the back neck and branding on the front<br /><br />Warranty for manufacturing defects: 6 months (not valid on products with more than 20% discount)<br /><strong><br />Fit</strong><br />Comfort</p>",
// //   "styledesc": null
// // }
