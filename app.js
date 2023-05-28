let menuItems = [
    {
        id: 1,
        img: "./images/item-1.jpeg",
        name: "Buttermilk Pancakes",
        price: 15.99,
        description: "I'm baby woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.",
        category: "Breakfast"
    },
    {
        id: 2,
        img: "./images/item-2.jpeg",
        name: "Dinner Double",
        price: 13.99,
        description: "I'm baby woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.",
        category: "Lunch"
    },
    {
        id: 3,
        img: "./images/item-3.jpeg",
        name: "Godzilla Milkshake",
        price: 6.99,
        description: "I'm baby woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.",
        category: "Shakes"
    },
    {
        id: 4,
        img: "./images/item-4.jpeg",
        name: "Country Delight",
        price: 20.99,
        description: "I'm baby woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.",
        category: "Breakfast"
    },
    {
        id: 5,
        img: "./images/item-5.jpeg",
        name: "Egg Attack",
        price: 22.99,
        description: "I'm baby woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.",
        category: "Breakfast"
    },
    {
        id: 6,
        img: "./images/item-6.jpeg",
        name: "Oreo Dream",
        price: 15.99,
        description: "I'm baby woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.",
        category: "Shakes"
    },
    {
        id: 7,
        img: "./images/item-7.jpeg",
        name: "Bacon Overflow",
        price: 5.99,
        description: "I'm baby woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.",
        category: "Breakfast"
    },
    {
        id: 8,
        img: "./images/item-8.jpeg",
        name: "American Classic",
        price: 15.99,
        description: "I'm baby woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.",
        category: "Lunch"
    },
    {
        id: 9,
        img: "./images/item-9.jpeg",
        name: "Quarantine Shake",
        price: 15.99,
        description: "I'm baby woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.",
        category: "Shakes"
    },
    {
        id: 10,
        img: "./images/item-10.jpeg",
        name: "Continental",
        price: 15.99,
        description: "I'm baby woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.",
        category: "Lunch"
    },
];

const menuButtons = document.querySelectorAll('button');
const itemsContainer = document.querySelector('.dishes-container');

window.addEventListener('DOMContentLoaded', () => {
    displayItems(menuItems);
})



function displayItems(menu) {

    for (let i=0; i < menu.length; i++) {
        let elements = [];
        let element = `
            <div class="dish" id=${menu[i].category}>
                <img class="dish-img" src=${menu[i].img} alt=""/>
                <div class="dish-info">
                    <div class="dish-header">
                        <p class="dish-name">${menu[i].name}</p>
                        <p class="dish-price">$ ${menu[i].price}</p>
                    </div>
                    <div class="dish-name-underline"></div>
                    <p class="dish-description">${menu[i].description}</p>                            
                </div>
            </div>`;
    
        const dishElements = document.querySelectorAll('.dish');
    
        elements.push(element);
    
        itemsContainer.innerHTML += elements;
    }
}



menuButtons.forEach((button) => {
    button.addEventListener('click',(e) => {
        itemsContainer.innerHTML = '';
        let category = e.currentTarget.dataset.id;
        let filteredElements = menuItems.filter( (menuItem) => {
            if (menuItem.category == category) {
                return menuItem;
            }
        });

        if (category == 'All') {
            displayItems(menuItems);
        } else {
            displayItems(filteredElements);
        }

        menuButtons.forEach(menuButton => {
            if (menuButton.classList.contains('active-button')) {
                menuButton.classList.remove('active-button');
            }
        })

        e.currentTarget.setAttribute('class','active-button');
        
    })
})





