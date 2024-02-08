const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products?limit=100")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  console.log(products);
  products.forEach(showProduct);
}

function showProduct(product) {
  //console.log(product);
  //fang template

  const template = document.querySelector("#smallProductTemplate").content;

  //lav kopi

  const copy = template.cloneNode(true);

  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector("h4").textContent = product.brandname;
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".pris_liste").textContent = product.price + ",-";

  if (product.soldout) {
    //regne
    copy.querySelector(".udsolgt").textContent = product.soldout + "Sold out";
  } else {
    copy.querySelector(".udsolgt").remove();
  }

  if (product.discount) {
    //regne
    copy.querySelector(".rabat_tekst p").textContent = product.discount + "%";
  } else {
    copy.querySelector(".rabat_tekst").remove();
  }

  //appende

  document.querySelector("main .grid").appendChild(copy);
}
