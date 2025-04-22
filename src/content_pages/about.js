const about = {
    loadAbout(contentDiv){
        this.appendAbout(contentDiv)
    },
    appendAbout(parentElement){
        // Create About section
        const aboutSection = document.createElement('section');
        aboutSection.className = 'about';
        aboutSection.id = 'about';

        // Create About-container column
        const aboutContainer = document.createElement('div');
        aboutContainer.className = 'about-container';
        aboutContainer.classList.add('container')

        // Create About-content column
        const aboutContent = document.createElement('div');
        aboutContent.className = 'about-content';

        // Create heading
        const heading = document.createElement('h2');
        heading.textContent = this.aboutContentObj.header;

        // Create paragraphs
        const para1 = document.createElement('p');
        para1.textContent = this.aboutContentObj.para1;
        const para2 = document.createElement('p');
        para2.textContent = this.aboutContentObj.para2;

        // Create contact button
        const aboutContactBtn = document.createElement('a');
        aboutContactBtn.className = 'btn';
        aboutContactBtn.textContent = this.aboutContentObj.contactBtnText;

        // About photo section
        const aboutPhoto = document.createElement('div');
        aboutPhoto.className = 'about-image';

        // Create image
        const image = document.createElement('img');
        image.src = this.aboutContentObj.imgSrc;
        image.alt = this.aboutContentObj.imgAlt;

        // Append elements
        aboutContent.appendChild(heading);
        aboutContent.appendChild(para1);
        aboutContent.appendChild(para2);
        aboutContent.appendChild(aboutContactBtn);

        aboutPhoto.appendChild(image)

        aboutContainer.appendChild(aboutContent);
        aboutContainer.appendChild(aboutPhoto);
        aboutSection.appendChild(aboutContainer)
        // Append to parent
        parentElement.appendChild(aboutSection);
    },
    aboutContentObj: {
        header: 'A Divine Culinary Journey',
        para1: 'At Trident’s Feast, we draw inspiration from the ocean’s might and mythology. Our menu pays homage to sea gods and deep-sea legends, blending bold flavors and timeless ingredients to create dishes worthy of Olympus.',
        para2: "Each plate is a tribute to the mystery and majesty of the ocean — from Poseidon’s bounty to siren-inspired flavors. Whether you're dining for the thrill of adventure or the comfort of the sea’s embrace, every bite brings you closer to the gods.",
        contactBtnText: 'Speak to the Sea',
        imgSrc: 'https://placehold.co/600x400',
        imgAlt: 'An artistic depiction of a seafood platter inspired by ocean gods',
    }    
}

export default about