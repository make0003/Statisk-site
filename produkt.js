const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/1164")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".purchaseBox .dnbb").textContent = product.productdisplayname;
  document.querySelector(".purchaseBox .puma").textContent = product.brandname;
  document.querySelector(".purchaseBox .pris").textContent = product.price + ",-";
  document.querySelector(".billede_produkt").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
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
