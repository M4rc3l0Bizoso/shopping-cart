function addToCart(button) {
    let product = button.parentNode;
    let name = product.dataset.name;
    let price = parseFloat(product.dataset.price);

    let cartItem = document.createElement("li");
    cartItem.innerHTML = `${name} - $${price.toFixed(2)}`;
    document.getElementById("cart-items").appendChild(cartItem);

    // Actualizacion el total
    let cartTotal = parseFloat(document.getElementById("cart-total").innerText);
    cartTotal += price;
    document.getElementById("cart-total").innerText = cartTotal.toFixed(2);
}