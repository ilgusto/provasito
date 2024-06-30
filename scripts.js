document.addEventListener('DOMContentLoaded', () => {
    // Esempio di aggiunta dinamica del menù
    const menuItems = [
        { name: 'Pasta alla Carbonara', price: '12€' },
        { name: 'Pizza Margherita', price: '10€' },
        { name: 'Tiramisù', price: '6€' }
    ];

    const menuContainer = document.getElementById('menu-items');
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.innerHTML = `<strong>${item.name}</strong>: ${item.price}`;
        menuContainer.appendChild(menuItem);
    });
});
