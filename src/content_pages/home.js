const home = {
    loadHome (contentDiv){
        // Create and append the Hero section
        this.appendHeroSection(contentDiv);
        
        // Create and append the Featured Menu section
        this.appendFeaturedMenuSection(contentDiv);
    },
    appendHeroSection(parentElement) {
        // Create Hero section
        const heroSection = document.createElement('section');
        heroSection.className = 'hero';
        heroSection.id = 'home';
        
        // Create container div
        const containerDiv = document.createElement('div');
        containerDiv.className = 'container hero-content';
        
        // Create heading
        const heading = document.createElement('h1');
        heading.textContent = 'Authentic Italian Pizza';
        
        // Create paragraph
        const paragraph = document.createElement('p');
        paragraph.textContent = 'Handcrafted with love using traditional recipes and the freshest ingredients';
        
        // Create button
        const button = document.createElement('a');
        button.className = 'btn';
        button.textContent = 'Place an Order';
        
        // Create hero image div
        const heroImageDiv = document.createElement('div');
        heroImageDiv.className = 'hero-image';
        
        // Create image
        const image = document.createElement('img');
        image.src = 'https://placehold.co/800x500';
        image.alt = 'Delicious pizza with fresh toppings';
        
        // Append elements
        heroImageDiv.appendChild(image);
        containerDiv.appendChild(heading);
        containerDiv.appendChild(paragraph);
        containerDiv.appendChild(button);
        containerDiv.appendChild(heroImageDiv);
        heroSection.appendChild(containerDiv);
        
        // Append to parent
        parentElement.appendChild(heroSection);
    },
    appendFeaturedMenuSection(parentElement) {
        // Create Featured Menu section
        const menuSection = document.createElement('section');
        menuSection.className = 'featured-menu';
        menuSection.id = 'menu';
        
        // Create container div
        const containerDiv = document.createElement('div');
        containerDiv.className = 'container';
        
        // Create section title div
        const sectionTitleDiv = document.createElement('div');
        sectionTitleDiv.className = 'section-title';
        
        // Create heading
        const heading = document.createElement('h2');
        heading.textContent = 'Our Specialty Pizzas';
        
        // Create paragraph
        const paragraph = document.createElement('p');
        paragraph.textContent = 'Explore our most popular wood-fired pizzas, made with locally sourced ingredients';
        
        // Create menu grid
        const menuGrid = document.createElement('div');
        menuGrid.className = 'menu-grid';
        
        // Add menu items
        const pizzas = [
            {
                name: 'Margherita',
                description: 'Fresh tomatoes, mozzarella, basil, and our signature tomato sauce',
                price: '$14.99',
                image: 'https://placehold.co/200x300',
                alt: 'Margherita Pizza'
            },
            {
                name: 'Pepperoni',
                description: 'Classic pepperoni, mozzarella cheese, and our homemade tomato sauce',
                price: '$16.99',
                image: 'https://placehold.co/200x300',
                alt: 'Pepperoni Pizza'
            },
            {
                name: 'Vegetarian',
                description: 'Bell peppers, mushrooms, onions, olives, and fresh mozzarella',
                price: '$15.99',
                image: 'https://placehold.co/200x300',
                alt: 'Vegetarian Pizza'
            }
        ];
        
        // Create menu items
        pizzas.forEach(pizza => {
            const menuItem = this.createMenuItem(pizza);
            menuGrid.appendChild(menuItem);
        });
        
        // Append elements
        sectionTitleDiv.appendChild(heading);
        sectionTitleDiv.appendChild(paragraph);
        containerDiv.appendChild(sectionTitleDiv);
        containerDiv.appendChild(menuGrid);
        menuSection.appendChild(containerDiv);
        
        // Append to parent
        parentElement.appendChild(menuSection);
    },
    createMenuItem(pizza) {
        // Create menu item div
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        
        // Create image div
        const imageDiv = document.createElement('div');
        imageDiv.className = 'menu-item-image';
        
        // Create image
        const image = document.createElement('img');
        image.src = pizza.image;
        image.alt = pizza.alt;
        
        // Create info div
        const infoDiv = document.createElement('div');
        infoDiv.className = 'menu-item-info';
        
        // Create heading
        const heading = document.createElement('h3');
        heading.textContent = pizza.name;
        
        // Create description
        const description = document.createElement('p');
        description.textContent = pizza.description;
        
        // Create price
        const price = document.createElement('div');
        price.className = 'price';
        price.textContent = pizza.price;
        
        // Append elements
        imageDiv.appendChild(image);
        infoDiv.appendChild(heading);
        infoDiv.appendChild(description);
        infoDiv.appendChild(price);
        menuItem.appendChild(imageDiv);
        menuItem.appendChild(infoDiv);
        
        return menuItem;
    }
}

export default home