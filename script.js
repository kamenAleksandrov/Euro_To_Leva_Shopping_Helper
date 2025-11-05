// Exchange rate: 1 EUR = 1.95583 BGN (Bulgarian Leva)
const EXCHANGE_RATE = 1.95583;

// Language translations
const translations = {
    en: {
        title: "Shopping Helper",
        subtitle: "Euro ⇄ Leva Converter",
        shoppingList: "Shopping List",
        itemName: "Item name",
        price: "Price",
        addItem: "Add Item",
        totalLeva: "Total in Leva:",
        totalEuro: "Total in Euro:",
        payment: "Payment",
        givingLeva: "Giving in Leva:",
        givingEuro: "Giving in Euro:",
        levaTab: "Leva (лв)",
        euroTab: "Euro (€)",
        levaBillsCoins: "Leva Bills & Coins",
        euroBillsCoins: "Euro Bills & Coins",
        bills: "Bills",
        coins: "Coins",
        resetPayment: "Reset Payment",
        changeGiven: "Change Already Given",
        givenLeva: "Given in Leva:",
        givenEuro: "Given in Euro:",
        resetChange: "Reset Change",
        remainingChange: "Remaining Change to Give",
        changeLeva: "Change in Leva:",
        changeEuro: "Change in Euro:",
        needToPayMore: "⚠️ Need to Pay More",
        changeToReturn: "💰 Change to Return",
        transactionComplete: "✅ Transaction Complete",
        amountOwed: "Amount Still Owed:",
        changeOwed: "Change to Give Back:",
        noItems: "No items added yet",
        delete: "Delete",
        alertInvalid: "Please enter a valid item name and price."
    },
    bg: {
        title: "Помощник за Пазаруване",
        subtitle: "Евро ⇄ Лева Конвертор",
        shoppingList: "Списък за Пазаруване",
        itemName: "Име на продукт",
        price: "Цена",
        addItem: "Добави Продукт",
        totalLeva: "Общо в Лева:",
        totalEuro: "Общо в Евро:",
        payment: "Плащане",
        givingLeva: "Давам в Лева:",
        givingEuro: "Давам в Евро:",
        levaTab: "Лева (лв)",
        euroTab: "Евро (€)",
        levaBillsCoins: "Банкноти и Монети в Лева",
        euroBillsCoins: "Банкноти и Монети в Евро",
        bills: "Банкноти",
        coins: "Монети",
        resetPayment: "Нулирай Плащане",
        changeGiven: "Вече Дадено Ресто",
        givenLeva: "Дадено в Лева:",
        givenEuro: "Дадено в Евро:",
        resetChange: "Нулирай Ресто",
        remainingChange: "Оставащо Ресто за Връщане",
        changeLeva: "Ресто в Лева:",
        changeEuro: "Ресто в Евро:",
        needToPayMore: "⚠️ Трябва да Платите Повече",
        changeToReturn: "💰 Ресто за Връщане",
        transactionComplete: "✅ Транзакция Завършена",
        amountOwed: "Все още Дължима Сума:",
        changeOwed: "Ресто за Връщане:",
        noItems: "Все още няма добавени продукти",
        delete: "Изтрий",
        alertInvalid: "Моля въведете валидно име и цена на продукта."
    }
};

// Food items in both languages
const foodItems = {
    en: [
        "Tomatoes", "Potatoes", "Onions", "Carrots", "Peppers", "Cucumbers", "Lettuce", 
        "Cabbage", "Broccoli", "Cauliflower", "Spinach", "Zucchini", "Eggplant", "Garlic", "Mushrooms",
        "Apples", "Bananas", "Oranges", "Grapes", "Strawberries", "Watermelon", "Peaches", 
        "Pears", "Lemons", "Cherries",
        "Chicken Breast", "Chicken Thighs", "Ground Beef", "Beef Steak", "Pork Chops", 
        "Pork Ribs", "Bacon", "Sausages", "Salami", "Ham", "Turkey",
        "Salmon", "Tuna", "Cod", "Shrimp", "Mussels",
        "Milk", "Yogurt", "Cheese", "Butter", "Eggs", "Cream", "Sour Cream", "Feta Cheese", "Mozzarella",
        "Bread", "Baguette", "Croissant", "Rolls", "Pita Bread",
        "Rice", "Pasta", "Flour", "Oats", "Buckwheat",
        "Tomato Sauce", "Canned Tomatoes", "Olives", "Pickles", "Beans",
        "Water", "Juice", "Coffee", "Tea", "Soda", "Wine", "Beer",
        "Chocolate", "Cookies", "Chips", "Nuts", "Candy",
        "Salt", "Pepper", "Sugar", "Oil", "Vinegar", "Ketchup", "Mayonnaise", "Mustard"
    ],
    bg: [
        "Домати", "Картофи", "Лук", "Моркови", "Чушки", "Краstavици", "Маруля", 
        "Зеле", "Броколи", "Карфиол", "Спанак", "Тиквички", "Патладжан", "Чесън", "Гъби",
        "Ябълки", "Банани", "Портокали", "Грозде", "Ягоди", "Диня", "Праскови", 
        "Круши", "Лимони", "Череши",
        "Пилешки гърди", "Пилешки бутчета", "Кайма", "Телешки стек", "Свински котлети", 
        "Свински ребра", "Бекон", "Наденици", "Салам", "Шунка", "Пуешко",
        "Сьомга", "Риба тон", "Треска", "Скариди", "Миди",
        "Мляко", "Кисело мляко", "Сирене", "Масло", "Яйца", "Сметана", "Заквасена сметана", "Фета сирене", "Моцарела",
        "Хляб", "Багета", "Кроасан", "Питки", "Пита хляб",
        "Ориз", "Паста", "Брашно", "Овесени ядки", "Елда",
        "Доматен сос", "Консервирани домати", "Маслини", "Кисели краставички", "Боб",
        "Вода", "Сок", "Кафе", "Чай", "Газирана напитка", "Вино", "Бира",
        "Шоколад", "Бисквити", "Чипс", "Ядки", "Бонбони",
        "Сол", "Пипер", "Захар", "Олио", "Оцет", "Кетчуп", "Майонеза", "Горчица"
    ]
};

let currentLang = 'en';

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
const resetChangeBtn = document.getElementById('resetChangeBtn');
const changeLevaEl = document.getElementById('changeLeva');
const changeEuroEl = document.getElementById('changeEuro');
const langToggle = document.getElementById('langToggle');
const darkModeToggle = document.getElementById('darkModeToggle');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    addItemBtn.addEventListener('click', addItem);
    itemPriceInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addItem();
    });
    
    // Manual edit for payment fields
    paymentLevaInput.addEventListener('input', () => {
        paymentLeva = parseFloat(paymentLevaInput.value) || 0;
        updateChange();
    });
    
    paymentEuroInput.addEventListener('input', () => {
        paymentEuro = parseFloat(paymentEuroInput.value) || 0;
        updateChange();
    });
    
    // Manual edit for change given fields
    document.getElementById('changeGivenLeva').addEventListener('input', (e) => {
        changeGivenLeva = parseFloat(e.target.value) || 0;
        updateChange();
    });
    
    document.getElementById('changeGivenEuro').addEventListener('input', (e) => {
        changeGivenEuro = parseFloat(e.target.value) || 0;
        updateChange();
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
    
    // Reset change button
    resetChangeBtn.addEventListener('click', resetChange);
    
    // Language toggle button
    langToggle.addEventListener('click', toggleLanguage);
    
    // Dark mode toggle button
    darkModeToggle.addEventListener('click', toggleDarkMode);
    
    // Initialize displays
    updateChangeGivenDisplay();
    updateFoodItemsList();
    loadDarkModePreference();
});

// Add item to the list
function addItem() {
    const name = itemNameInput.value.trim();
    const price = parseFloat(itemPriceInput.value);
    const currency = itemCurrencySelect.value;
    
    if (!name || isNaN(price) || price <= 0) {
        alert(translations[currentLang].alertInvalid);
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
        itemsList.innerHTML = `<p style="text-align: center; color: #999; padding: 20px;">${translations[currentLang].noItems}</p>`;
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
            <button class="delete-btn" onclick="deleteItem(${item.id})">${translations[currentLang].delete}</button>
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
    paymentLevaInput.value = paymentLeva.toFixed(2);
    paymentEuroInput.value = paymentEuro.toFixed(2);
}

// Reset payment
function resetPayment() {
    paymentLeva = 0;
    paymentEuro = 0;
    updatePaymentDisplay();
    updateChange();
}

// Reset change
function resetChange() {
    changeGivenLeva = 0;
    changeGivenEuro = 0;
    updateChangeGivenDisplay();
    updateChange();
}

// Update change
function updateChange() {
    const totalInLeva = getTotalInLeva();
    const totalInEuro = getTotalInEuro();
    
    // Calculate total payment converted to both currencies
    const totalPaymentInLeva = paymentLeva + (paymentEuro * EXCHANGE_RATE);
    const totalPaymentInEuro = paymentEuro + (paymentLeva / EXCHANGE_RATE);
    
    // Calculate total change given converted to both currencies
    const totalChangeGivenInLeva = changeGivenLeva + (changeGivenEuro * EXCHANGE_RATE);
    const totalChangeGivenInEuro = changeGivenEuro + (changeGivenLeva / EXCHANGE_RATE);
    
    // Calculate change needed (what customer should receive back)
    const changeNeededLeva = totalPaymentInLeva - totalInLeva;
    const changeNeededEuro = totalPaymentInEuro - totalInEuro;
    
    // Calculate remaining change to give (change needed minus what's already given)
    const remainingChangeLeva = changeNeededLeva - totalChangeGivenInLeva;
    const remainingChangeEuro = changeNeededEuro - totalChangeGivenInEuro;
    
    // Get the change display section heading
    const changeDisplayHeading = document.querySelector('.change-display h3');
    
    // Determine the state and update heading dynamically
    if (remainingChangeLeva < -0.01 || remainingChangeEuro < -0.01) {
        // Underpaid - customer needs to pay more
        changeDisplayHeading.textContent = translations[currentLang].needToPayMore;
        
        changeLevaEl.textContent = `${Math.abs(remainingChangeLeva).toFixed(2)} лв`;
        changeEuroEl.textContent = `${Math.abs(remainingChangeEuro).toFixed(2)} €`;
        changeLevaEl.style.color = '#ff6b6b';
        changeEuroEl.style.color = '#ff6b6b';
    } else if (remainingChangeLeva > 0.01 || remainingChangeEuro > 0.01) {
        // Overpaid - cashier needs to give change back
        changeDisplayHeading.textContent = translations[currentLang].changeToReturn;
        
        changeLevaEl.textContent = `${remainingChangeLeva.toFixed(2)} лв`;
        changeEuroEl.textContent = `${remainingChangeEuro.toFixed(2)} €`;
        changeLevaEl.style.color = '#FF9800'; // Orange for pending change
        changeEuroEl.style.color = '#FF9800';
    } else {
        // Transaction complete - exact payment
        changeDisplayHeading.textContent = translations[currentLang].transactionComplete;
        
        changeLevaEl.textContent = `0.00 лв`;
        changeEuroEl.textContent = `0.00 €`;
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
    document.getElementById('changeGivenLeva').value = changeGivenLeva.toFixed(2);
    document.getElementById('changeGivenEuro').value = changeGivenEuro.toFixed(2);
}

// Toggle language
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'bg' : 'en';
    updateLanguage();
}

// Update all text based on current language
function updateLanguage() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });
    
    // Update food items datalist
    updateFoodItemsList();
    
    // Update language button
    if (currentLang === 'bg') {
        langToggle.innerHTML = '<span class="flag">🇬🇧</span><span class="lang-text">EN</span>';
    } else {
        langToggle.innerHTML = '<span class="flag">🇧🇬</span><span class="lang-text">БГ</span>';
    }
    
    // Re-render items list to update delete button text
    renderItems();
}

// Update food items datalist based on language
function updateFoodItemsList() {
    const datalist = document.getElementById('foodItems');
    datalist.innerHTML = '';
    
    foodItems[currentLang].forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        datalist.appendChild(option);
    });
}

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Load dark mode preference
function loadDarkModePreference() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
}
