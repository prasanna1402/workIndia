document.addEventListener('DOMContentLoaded', () => {
    const items = [
        { id: 1, name: 'Item 1', price: 100, shippingMethod: 'Same Day Shipping' },
        { id: 2, name: 'Item 2', price: 10, shippingMethod: 'Same Day Shipping' },
        { id: 3, name: 'Item 3', price: 130, shippingMethod: '' },
        { id: 4, name: 'Item 4', price: 230, shippingMethod: '' },
        { id: 5, name: 'Item 5', price: 230, shippingMethod: '' },
        { id: 6, name: 'Item 6', price: 230, shippingMethod: '' },
        { id: 7, name: 'Item 7', price: 230, shippingMethod: '' },
        { id: 8, name: 'Item 8', price: 230, shippingMethod: '' }
    ];

    const explorePage = document.getElementById('explore-page');
    const addItemPage = document.getElementById('add-item-page');
    const navExplore = document.getElementById('nav-explore');
    const navAddItem = document.getElementById('nav-add-item');
    const searchBar = document.getElementById('search-bar');
    const itemList = document.getElementById('item-list');
    const addItemForm = document.getElementById('add-item-form');
    const itemNameInput = document.getElementById('item-name');
    const itemPriceInput = document.getElementById('item-price');
    const shippingMethodInput = document.getElementById('shipping-method');

    function renderItems(filteredItems) {
        itemList.innerHTML = '';
        filteredItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'item';
            itemElement.innerHTML = `
                <img src="https://placehold.co/50x50.png" alt="${item.name}">
                <div>
                    <h5>${item.name}</h5>
                    <p>MRP: ₹${item.price}</p>
                    ${item.shippingMethod ? `<p class="text-success">${item.shippingMethod}</p>` : ''}
                </div>
            `;
            itemList.appendChild(itemElement);
        });
    }

    function handleSearch(query) {
        const filteredItems = items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
        renderItems(filteredItems);
    }

    function handleAddItem(event) {
        event.preventDefault();
        const newItem = {
            id: items.length + 1,
            name: itemNameInput.value,
            price: itemPriceInput.value,
            shippingMethod: shippingMethodInput.value
        };
        items.push(newItem);
        renderItems(items);
        itemNameInput.value = '';
        itemPriceInput.value = '';
        shippingMethodInput.value = '';
        showExplorePage();
    }

    function showExplorePage() {
        explorePage.classList.remove('d-none');
        addItemPage.classList.add('d-none');
    }

    function showAddItemPage() {
        explorePage.classList.add('d-none');
        addItemPage.classList.remove('d-none');
    }

    navExplore.addEventListener('click', showExplorePage);
    navAddItem.addEventListener('click', showAddItemPage);
    searchBar.addEventListener('input', (e) => handleSearch(e.target.value));
    addItemForm.addEventListener('submit', handleAddItem);

    // Initial render
    renderItems(items);
});
