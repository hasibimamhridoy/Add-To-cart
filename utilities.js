function productPrice(price, quantity) {
    const PropriceId = document.getElementById(price).innerText
    const ProquantityId = document.getElementById(quantity).innerText
    const finalPrice = PropriceId * ProquantityId
    return finalPrice
}

function setDisplay(id, value) {
    const getID = document.getElementById(id)
    getID.innerText = value
}

let sum =0;
function finalTotalPrice(id1,id2){
  const price = parseInt(document.getElementById(id1).innerText)
  const TotalQuantity = parseInt(document.getElementById(id2).innerText)
  const finalPrice = price*TotalQuantity
  sum=sum+finalPrice
  setDisplay('total-price', sum)
}

let numberFinal = 0
function setNamePriceQuantityWithID(n, p, q, firstPrice, firstQuantity) {
   
    numberFinal = numberFinal + 1
    const name = document.getElementById(n).innerText
    const price = document.getElementById(p).innerText
    const quantity = document.getElementById(q).innerText
    const Totalprice = productPrice(firstPrice, firstQuantity)
    cartDisplay(numberFinal, name, price, quantity, Totalprice)
}

function cartDisplay(number, name, price, quantity, total) {
   
    const getParent = document.getElementById('table-container')
    const createTd = document.createElement('tr')
    createTd.innerHTML = `
    
    <td>${number}</td>
    <td>${name}</td>
    <td>${price}</td>
    <td>${quantity}</td>
    <td>${total}</td>
    `
    getParent.appendChild(createTd)
}
