// update extra amount
function updatePrices(product, extraAmount) {
    const productField = document.getElementById(product + '-extra-cost');
    productField.innerText = extraAmount;
    updateTotal();
};

// get extra input
function getPrices(product) {
    const extraPricesField = document.getElementById(product + '-extra-cost');
    const extraPricesText = extraPricesField.innerText;
    const extraPrice = parseInt(extraPricesText);
    return extraPrice;
}
// calculate total
function updateTotal() {
    const bestPriceField = document.getElementById('best-price');
    const bestPrice = parseInt(bestPriceField.innerText);

    const extraMemoryCost = getPrices('memory');
    const extraStorageCost = getPrices('storage');
    const extraDeliveryCost = getPrices('delivery');
    // total price
    const totalPrice = document.getElementById('total-price')
    totalPrice.innerText = bestPrice + extraMemoryCost + extraStorageCost + extraDeliveryCost;
    // promo total
    const promoTotal = document.getElementById('promo-total-price');
    promoTotal.innerText = bestPrice + extraMemoryCost + extraStorageCost + extraDeliveryCost;

};

// add event handler on products button
document.getElementById('default-memory').addEventListener('click', function () {
    updatePrices('memory', 0);
});
document.getElementById('best-memory').addEventListener('click', function () {
    updatePrices('memory', 180);
});
// storage
document.getElementById('default-ssd').addEventListener('click', function () {
    updatePrices('storage', 0);
});
document.getElementById('medium-ssd').addEventListener('click', function () {
    updatePrices('storage', 100);
});
document.getElementById('best-ssd').addEventListener('click', function () {
    updatePrices('storage', 180);
});
// delivery charge
document.getElementById('free-ship-btn').addEventListener('click', function () {
    updatePrices('delivery', 0);
});
document.getElementById('charged-ship-btn').addEventListener('click', function () {
    updatePrices('delivery', 20);
});

// add event handler on promo code button
document.getElementById('promo-code-btn').addEventListener('click', function () {
    const promoTotal = document.getElementById('promo-total-price');
    const total = parseInt(promoTotal.innerText);

    // input promo and get discount
    const promoInput = document.getElementById('promo-code-input')
    const promoCode = promoInput.value;
    promoInput.value = '';
    if (promoCode == 'stevekaku') {
        promoTotal.innerText = total * (100 - 20) / 100;
    }
    else {
        alert('Please give a valid discount')
    }
});


