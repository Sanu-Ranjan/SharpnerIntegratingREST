//console.log("working");

document.getElementById("vegDetails").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("submit clicked");
});

function deleteRow(button) {
  button.closest("tr").remove();
}
