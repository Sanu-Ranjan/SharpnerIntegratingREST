//console.log("working");

const baseURL =
  "https://crudcrud.com/api/a8a821303b054b8aab9da43fd6c39307/vegShop";

document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("#dataTable tbody");
  axios.get(baseURL).then(
    (res) => {
      console.log(res.data);
      let arrObj = res.data;

      arrObj.forEach((element) => {
        let row = document.createElement("tr");

        row.innerHTML = `<td>${element.name}</td>
        <td>${element.price}</td>
        <td>${element.quantity}</td>
        <td><input type="number" /></td>
        <td>
          <button >Buy</button>
          <button onclick="deleteRow(this)">Delete</button>
        </td>`;
        table.appendChild(row);
      });
    },
    (error) => {
      console.log("error: could not get data :", error);
    }
  );
});

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
