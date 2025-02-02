//console.log("working");

const baseURL =
  "https://crudcrud.com/api/a8a821303b054b8aab9da43fd6c39307/vegShop";

const table = document.querySelector("#dataTable tbody");

let arrObj = null;
let myMap = new Map();
document.addEventListener("DOMContentLoaded", () => {
  axios.get(baseURL).then(
    (res) => {
      console.log(res.data);
      arrObj = res.data;

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
        myMap.set(element.name, element._id);
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

  let row = document.createElement("tr");

  row.innerHTML = `<td>${payload.name}</td>
        <td>${payload.price}</td>
        <td>${payload.quantity}</td>
        <td><input type="number" /></td>
        <td>
          <button >Buy</button>
          <button onclick="deleteRow(this)">Delete</button>
        </td>`;
  table.appendChild(row);

  axios.post(baseURL, payload).then(
    (res) => {
      console.log("item added: ", res.data);
      myMap.set(payload.name, res.data._id);
    },
    (error) => {
      console.log("error :", error);
    }
  );
});

function deleteRow(button) {
  let item = button.closest("tr").querySelector("td").textContent;
  console.log(item);
  axios.delete(`${baseURL}/${myMap.get(item)}`).then(
    () => {
      console.log("data deleted");
      button.closest("tr").remove();
    },
    (error) => {
      console.log("data delete failed : ", error);
    }
  );
}
