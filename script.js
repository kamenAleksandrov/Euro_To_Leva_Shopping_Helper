// Exchange rate: 1 EUR = 1.95583 BGN (Bulgarian Leva)
const EXCHANGE_RATE = 1.95583;

// App state
let items = [];
let paymentLeva = 0;
let paymentEuro = 0;
let changeGivenLeva = 0;
let changeGivenEuro = 0;

// DOM elements
const itemNameInput = document.getElementById('itemName');
const itemPriceInput = document.getElementById('itemPrice');
const itemCurrencySelect = document.getElementById('itemCurrency');
const addItemBtn = document.getElementById('addItemBtn');
const itemsList = document.getElementById('itemsList');
const totalLevaEl = document.getElementById('totalLeva');
const totalEuroEl = document.getElementById('totalEuro');
const paymentLevaInput = document.getElementById('paymentLeva');
const paymentEuroInput = document.getElementById('paymentEuro');
const levaTab = document.getElementById('levaTab');
const euroTab = document.getElementById('euroTab');
const levaPanel = document.getElementById('levaPanel');
const euroPanel = document.getElementById('euroPanel');
const resetPaymentBtn = document.getElementById('resetPaymentBtn');
const changeLevaEl = document.getElementById('changeLeva');
const changeEuroEl = document.getElementById('changeEuro');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    addItemBtn.addEventListener('click', addItem);
    itemPriceInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addItem();
    });
    
    // Currency switch tabs for payment
    levaTab.addEventListener('click', () => switchCurrency('leva'));
    euroTab.addEventListener('click', () => switchCurrency('euro'));
    
    // Bill/coin buttons for payment
    document.querySelectorAll('.bill-btn:not(.change-btn)').forEach(btn => {
        btn.addEventListener('click', () => {
            const value = parseFloat(btn.dataset.value);
            const currency = btn.dataset.currency;
            addPayment(value, currency);
        });
    });
    
    // Currency switch tabs for change given
    document.getElementById('changeLevaTab').addEventListener('click', () => switchChangeGivenCurrency('leva'));
    document.getElementById('changeEuroTab').addEventListener('click', () => switchChangeGivenCurrency('euro'));
    
    // Bill/coin buttons for change given
    document.querySelectorAll('.change-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const value = parseFloat(btn.dataset.value);
            const currency = btn.dataset.currency;
            addChangeGiven(value, currency);
        });
    });
    
    // Reset payment button
    resetPaymentBtn.addEventListener('click', resetPayment);
    
    // Initialize displays
    updateChangeGivenDisplay();
});

// Add item to the list
function addItem() {
    const name = itemNameInput.value.trim();
    const price = parseFloat(itemPriceInput.value);
    const currency = itemCurrencySelect.value;
    
    if (!name || isNaN(price) || price <= 0) {
        alert('Please enter a valid item name and price.');
        return;
    }
    
    // Calculate both currencies
    let priceInLeva, priceInEuro;
    if (currency === 'leva') {
        priceInLeva = price;
        priceInEuro = price / EXCHANGE_RATE;
    } else {
        priceInEuro = price;
        priceInLeva = price * EXCHANGE_RATE;
    }
    
    // Add to items array
    const item = {
        id: Date.now(),
        name: name,
        priceInLeva: priceInLeva,
        priceInEuro: priceInEuro,
        originalCurrency: currency
    };
    
    items.push(item);
    
    // Clear inputs
    itemNameInput.value = '';
    itemPriceInput.value = '';
    itemNameInput.focus();
    
    // Update display
    renderItems();
    updateTotals();
    updateChange();
}

// Render items list
function renderItems() {
    if (items.length === 0) {
        itemsList.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">No items added yet</p>';
        return;
    }
    
    itemsList.innerHTML = items.map(item => `
        <div class="item-row">
            <div class="item-info">
                <div class="item-name">${item.name}</div>
                <div class="item-prices">
                    ${item.priceInLeva.toFixed(2)} лв | ${item.priceInEuro.toFixed(2)} €
                </div>
            </div>
            <button class="delete-btn" onclick="deleteItem(${item.id})">Delete</button>
        </div>
    `).join('');
}

// Delete item
function deleteItem(id) {
    items = items.filter(item => item.id !== id);
    renderItems();
    updateTotals();
    updateChange();
}

// Update totals
function updateTotals() {
    const totalInLeva = items.reduce((sum, item) => sum + item.priceInLeva, 0);
    const totalInEuro = items.reduce((sum, item) => sum + item.priceInEuro, 0);
    
    totalLevaEl.textContent = `${totalInLeva.toFixed(2)} лв`;
    totalEuroEl.textContent = `${totalInEuro.toFixed(2)} €`;
}

// Get total in specific currency
function getTotalInLeva() {
    return items.reduce((sum, item) => sum + item.priceInLeva, 0);
}

function getTotalInEuro() {
    return items.reduce((sum, item) => sum + item.priceInEuro, 0);
}

// Switch currency tab
function switchCurrency(currency) {
    if (currency === 'leva') {
        levaTab.classList.add('active');
        euroTab.classList.remove('active');
        levaPanel.classList.add('active');
        euroPanel.classList.remove('active');
    } else {
        euroTab.classList.add('active');
        levaTab.classList.remove('active');
        euroPanel.classList.add('active');
        levaPanel.classList.remove('active');
    }
}

// Switch change given currency tab
function switchChangeGivenCurrency(currency) {
    const changeLevaTab = document.getElementById('changeLevaTab');
    const changeEuroTab = document.getElementById('changeEuroTab');
    const changeLevaPanel = document.getElementById('changeLevaPanel');
    const changeEuroPanel = document.getElementById('changeEuroPanel');
    
    if (currency === 'leva') {
        changeLevaTab.classList.add('active');
        changeEuroTab.classList.remove('active');
        changeLevaPanel.classList.add('active');
        changeEuroPanel.classList.remove('active');
    } else {
        changeEuroTab.classList.add('active');
        changeLevaTab.classList.remove('active');
        changeEuroPanel.classList.add('active');
        changeLevaPanel.classList.remove('active');
    }
}

// Add payment
function addPayment(value, currency) {
    if (currency === 'leva') {
        paymentLeva += value;
    } else {
        paymentEuro += value;
    }
    
    updatePaymentDisplay();
    updateChange();
}

// Update payment display
function updatePaymentDisplay() {
    paymentLevaInput.value = `${paymentLeva.toFixed(2)} лв`;
    paymentEuroInput.value = `${paymentEuro.toFixed(2)} €`;
}

// Reset payment
function resetPayment() {
    paymentLeva = 0;
    paymentEuro = 0;
    changeGivenLeva = 0;
    changeGivenEuro = 0;
    updatePaymentDisplay();
    updateChangeGivenDisplay();
    updateChange();
}

// Update change
function updateChange() {
    const totalInLeva = getTotalInLeva();
    const totalInEuro = getTotalInEuro();
    
    // Calculate change needed (what customer should receive back)
    const changeNeededLeva = paymentLeva - totalInLeva;
    const changeNeededEuro = paymentEuro - totalInEuro;
    
    // Calculate remaining change to give (change needed minus what's already given)
    const remainingChangeLeva = changeNeededLeva - changeGivenLeva;
    const remainingChangeEuro = changeNeededEuro - changeGivenEuro;
    
    changeLevaEl.textContent = `${remainingChangeLeva.toFixed(2)} лв`;
    changeEuroEl.textContent = `${remainingChangeEuro.toFixed(2)} €`;
    
    // Color coding for change
    if (remainingChangeLeva < -0.01 || remainingChangeEuro < -0.01) {
        changeLevaEl.style.color = '#ff6b6b';
        changeEuroEl.style.color = '#ff6b6b';
    } else if (remainingChangeLeva > 0.01 || remainingChangeEuro > 0.01) {
        changeLevaEl.style.color = '#FF9800'; // Orange for pending change
        changeEuroEl.style.color = '#FF9800';
    } else {
        changeLevaEl.style.color = '#4CAF50';
        changeEuroEl.style.color = '#4CAF50';
    }
}

// Add change given
function addChangeGiven(value, currency) {
    if (currency === 'leva') {
        changeGivenLeva += value;
    } else {
        changeGivenEuro += value;
    }
    
    updateChangeGivenDisplay();
    updateChange();
}

// Update change given display
function updateChangeGivenDisplay() {
    document.getElementById('changeGivenLeva').value = `${changeGivenLeva.toFixed(2)} лв`;
    document.getElementById('changeGivenEuro').value = `${changeGivenEuro.toFixed(2)} €`;
}
