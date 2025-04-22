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
        heading.textContent = 'Dining from the Deep';
        
        // Create paragraph
        const paragraph = document.createElement('p');
        paragraph.textContent = 'Inspired by ocean gods, crafted for you.';
        
        // Create button
        const button = document.createElement('a');
        button.className = 'btn';
        button.textContent = 'Cast Your Craving';
        
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
    featuredFood: [
        {
            name: 'Leviathan Bites',
            description: 'Mini crab cakes made with leviathan tail flakes and deepfire aioli',
            price: '$14.25',
            image: 'https://placehold.co/200x300',
            alt: 'Leviathan Bites'
        },
        {
            name: 'Trident’s Treasure Ravioli',
            description: 'Ravioli stuffed with moon lobster, drizzled in storm-sage cream',
            price: '$24.50',
            image: 'https://placehold.co/200x300',
            alt: 'Trident’s Treasure Ravioli'
        },
        {
            name: 'Echo Cake',
            description: 'Layered sponge cake that “sings” with each bite — infused with dreamfruit',
            price: '$12.00',
            image: 'https://placehold.co/200x300',
            alt: 'Echo Cake'
        }
    ],
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
        heading.textContent = 'Legendary Tastes from the Deep';
        
        // Create paragraph
        const paragraph = document.createElement('p');
        paragraph.textContent = "Behold a curated selection of the sea’s most mythical creations. These featured dishes represent the finest flavors from our enchanted ocean menu — each with a tale to tell and a taste that lingers beyond this realm.";
        
        // Create menu grid
        const menuGrid = document.createElement('div');
        menuGrid.className = 'menu-grid';
        
        // Create menu items
        this.featuredFood.forEach(feature => {
            const menuItem = this.createMenuItem(feature);
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
    createMenuItem(item) {
        // Create menu item div
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        
        // Create image div
        const imageDiv = document.createElement('div');
        imageDiv.className = 'menu-item-image';
        
        // Create image
        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.alt;
        
        // Create info div
        const infoDiv = document.createElement('div');
        infoDiv.className = 'menu-item-info';
        
        // Create heading
        const heading = document.createElement('h3');
        heading.textContent = item.name;
        
        // Create description
        const description = document.createElement('p');
        description.textContent = item.description;
        
        // Create price
        const price = document.createElement('div');
        price.className = 'price';
        price.textContent = item.price;
        
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