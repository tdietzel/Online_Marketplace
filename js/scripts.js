window.addEventListener("load", () => {
  const form = document.querySelector("#checkout")
  form.addEventListener("submit", calculate)
})

function calculate(e) {
  e.preventDefault()
  let price = 0;
  let discountedPrice;
  const necklace = document.querySelector("#necklace")
  const earrings = document.querySelector("#earrings")
  const bracelet = document.querySelector("#bracelet")
  const payment = document.querySelector("#payment").value
  const firstName = document.querySelector("#first-name").value
  const lastName = document.querySelector("#last-name").value
  const streetAddress = document.querySelector("#street-address").value
  const state = document.querySelector("#state").value
  const city = document.querySelector("#city").value

  document.querySelector("#discount-title").setAttribute("class", "hidden")
  document.querySelector("#receipt").setAttribute("class", "hidden")
  document.querySelector("#discount").innerText = "";

  if (necklace.checked) {
    price = price + 10
    console.log("necklace")
  }

  if (earrings.checked) {
    console.log("earrings")
    price = price + 7
  }

  if (bracelet.checked) {
    price = price + 5
  }

  if (necklace.checked && earrings.checked || necklace.checked && bracelet.checked || bracelet.checked && earrings.checked) {
    discountedPrice = Math.ceil(price * 0.80);
    document.querySelector("#discount").innerText = discountedPrice;
    document.querySelector("#discount-title").setAttribute("class", "")
  }
  document.querySelector("#receipt").setAttribute("class", "")

  document.querySelector("#price").innerText = price;
  document.querySelector("#first-name-receipt").innerText = firstName;
  document.querySelector('#last-name-receipt').innerText = lastName;
  document.querySelector('#address-receipt').innerText = streetAddress;
  document.querySelector('#state-receipt').innerText = state;
  document.querySelector('#town-receipt').innerText = city;
  document.querySelector("#payment-receipt").innerText = payment;
}