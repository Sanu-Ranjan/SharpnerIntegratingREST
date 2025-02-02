//console.log("working");

const baseURL =
  "https://crudcrud.com/api/a8a821303b054b8aab9da43fd6c39307/vegShop";

document.getElementById("vegDetails").addEventListener("submit", (event) => {
  event.preventDefault();
  let name = event.target.name.value;
  let price = event.target.price.value;
  let quantity = event.target.quantity.value;

  let payload = {
    name: name,
    price: price,
    quantity: quantity,
  };

  axios.post(baseURL, payload).then(
    (res) => {
      console.log("item added");
    },
    (error) => {
      console.log("error :", error);
    }
  );

  //   console.log(name);
  //   console.log(price);
  //   console.log(quantity);
});

function deleteRow(button) {
  button.closest("tr").remove();
}
