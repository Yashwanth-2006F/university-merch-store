
const cartContainer = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total-price');
    const actionsDiv = document.getElementById('purchase-actions');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    function saveCart() {
      localStorage.setItem('cart', JSON.stringify(cart));
    }

    function renderCart() {
      cartContainer.innerHTML = '';
      total = 0;

      if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        totalDisplay.textContent = "Total: ₹0";
        actionsDiv.style.display = "none";
        return;
      }

      cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';

        itemDiv.innerHTML = `
          <h3>${item.name}</h3>
          <small>Quantity: ${item.qty}${item.size ? ", Size: " + item.size : ""}</small>
          <small>Price per unit: ₹${item.price}</small>
          <small>Subtotal: ₹${item.price * item.qty}</small>
          <button class="btn btn-remove" onclick="removeItem(${index})">Remove</button>
          <button class="btn" onclick="buySingleItem(${index})">Buy Now</button>
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('taskInput');
  const btn = document.getElementById('addTask');
  const list = document.getElementById('taskList');

  function createTask(text) {
    const li = document.createElement('li');
    li.textContent = text;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.style.marginLeft = '10px';

    delBtn.addEventListener('click', () => {
      list.removeChild(li);
    });

    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    li.appendChild(delBtn);
    list.appendChild(li);
  }

  btn.addEventListener('click', () => {
    const task = input.value.trim();
    if (task) {
      createTask(task);
      input.value = '';

    }

  btn.addEventListener('click', () => {
    const task = input.value.trim();
    if (task) {
      createTask(task);
      input.value = '';
    }

  });

  input.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      btn.click();
    }
  });
});

