import home from "./home.js";
import utilities from "../utilities.js";
import mythicSeaMenu from "./menuLists.js";

const menu = {
    loadMenu(contentDiv){
        for (let i = 0; i < Object.keys(mythicSeaMenu).length; i++) {
            let key = Object.keys(mythicSeaMenu)[i];
            let type = i % 2 === 0 ? 'type1' : 'type2'; // Alternates between 'type1' and 'type2'
            
            this.createMenuSection(contentDiv, key, mythicSeaMenu[key].description, type, mythicSeaMenu[key].items);
        }
    },
    createMenuSection(parentElement, sectionName, paragraphText, sectionType, targetMenuArray){
        const menuSection = document.createElement('section');
        menuSection.className = sectionName;
        menuSection.classList.add(`${sectionType}`)
        menuSection.classList.add('menu-section') 
        menuSection.id = utilities.toCamelCase(sectionName);

        // Create container div
        const containerDiv = document.createElement('div');
        containerDiv.className = 'container';
        
        // Create section title div
        const sectionTitleDiv = document.createElement('div');
        sectionTitleDiv.className = 'section-title';
        
        // Create heading
        const heading = document.createElement('h2');
        heading.textContent = utilities.camelToTitle(sectionName);
        // Create paragraph
        const paragraph = document.createElement('p');
        paragraph.textContent = paragraphText;
        
        // Create menu grid
        const menuGrid = document.createElement('div');
        menuGrid.className = 'menu-grid';

        targetMenuArray.forEach(feature => {
            const menuItem = home.createMenuItem(feature);
            menuGrid.appendChild(menuItem);
        });

        sectionTitleDiv.appendChild(heading);
        sectionTitleDiv.appendChild(paragraph);
        containerDiv.appendChild(sectionTitleDiv);
        containerDiv.appendChild(menuGrid);
        menuSection.appendChild(containerDiv);
        
        // Append to parent
        parentElement.appendChild(menuSection);
    },
    appetizers: [
        {
            name: 'BBQ Chicken',
            description: 'Grilled chicken, smoky BBQ sauce, red onions, and mozzarella',
            price: '$17.49',
            image: 'https://placehold.co/200x300',
            alt: 'BBQ Chicken Pizza'
        },
        {
            name: 'Hawaiian',
            description: 'Ham, pineapple, mozzarella cheese, and tangy tomato sauce',
            price: '$16.49',
            image: 'https://placehold.co/200x300',
            alt: 'Hawaiian Pizza'
        },
        {
            name: 'Spicy Italian',
            description: 'Spicy sausage, pepperoni, chili flakes, and mozzarella',
            price: '$17.99',
            image: 'https://placehold.co/200x300',
            alt: 'Spicy Italian Pizza'
        },
        {
            name: 'Four Cheese',
            description: 'Mozzarella, parmesan, gorgonzola, and provolone with white sauce',
            price: '$15.99',
            image: 'https://placehold.co/200x300',
            alt: 'Four Cheese Pizza'
        },
        {
            name: 'Truffle Mushroom',
            description: 'Wild mushrooms, truffle oil, mozzarella, and garlic cream sauce',
            price: '$18.99',
            image: 'https://placehold.co/200x300',
            alt: 'Truffle Mushroom Pizza'
        },
        {
            name: 'Mediterranean',
            description: 'Feta cheese, kalamata olives, sun-dried tomatoes, and oregano',
            price: '$16.75',
            image: 'https://placehold.co/200x300',
            alt: 'Mediterranean Pizza'
        }
    ],
}

export default menu