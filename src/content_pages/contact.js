const contact = {
    loadContact(contentDiv){
        this.appendContact(contentDiv)
    },
    content: {
        sectionTitle: {
            heading: 'Visit the Realm of Flavor',
            description: "Embark on a culinary voyage—our oceanic table awaits your presence."
        },
        contactInfoTitle: 'Summon Us',
        contactDetails: {
            address: {
                icon: '📍',
                text: '7 Seas Way, Nautilus Bay, NB 77777'
            },
            phone: {
                icon: '📞',
                text: '(777) 555-POSE'
            },
            email: {
                icon: '✉️',
                text: 'contact@tridentsfeast.com'
            }
        },
        hours: {
            heading: 'Tide Hours',
            schedule: [
                'Monday - Thursday: 12:00 PM - 9:00 PM',
                'Friday - Saturday: 12:00 PM - 10:30 PM',
                'Sunday: 1:00 PM - 8:00 PM'
            ]
        },
        orderButtonText: 'Feast from Afar',
        map: {
            src: 'https://placehold.co/600x400',
            alt: 'Map location of Trident’s Feast, an ocean-inspired restaurant'
        }
    },

    appendContact(parent) {
        const c = this.content;

        const section = document.createElement('section');
        section.className = 'contact';
        section.id = 'contact';

        const container = document.createElement('div');
        container.className = 'container';

        const sectionTitle = document.createElement('div');
        sectionTitle.className = 'section-title';

        const titleH2 = document.createElement('h2');
        titleH2.textContent = c.sectionTitle.heading;

        const titleP = document.createElement('p');
        titleP.textContent = c.sectionTitle.description;

        sectionTitle.append(titleH2, titleP);

        const contactContainer = document.createElement('div');
        contactContainer.className = 'contact-container';

        const contactInfo = document.createElement('div');
        contactInfo.className = 'contact-info';

        const infoH3 = document.createElement('h3');
        infoH3.textContent = c.contactInfoTitle;

        const contactDetails = document.createElement('div');
        contactDetails.className = 'contact-details';

        const address = document.createElement('p');
        const addressIcon = document.createElement('i');
        addressIcon.textContent = c.contactDetails.address.icon;
        address.appendChild(addressIcon);
        address.append(' ' + c.contactDetails.address.text);

        const phone = document.createElement('p');
        const phoneIcon = document.createElement('i');
        phoneIcon.textContent = c.contactDetails.phone.icon;
        phone.appendChild(phoneIcon);
        phone.append(' ' + c.contactDetails.phone.text);

        const email = document.createElement('p');
        const emailIcon = document.createElement('i');
        emailIcon.textContent = c.contactDetails.email.icon;
        email.appendChild(emailIcon);
        email.append(' ' + c.contactDetails.email.text);

        contactDetails.append(address, phone, email);

        const hours = document.createElement('div');
        hours.className = 'hours';

        const hoursH4 = document.createElement('h4');
        hoursH4.textContent = c.hours.heading;

        const scheduleParagraphs = c.hours.schedule.map(time => {
            const p = document.createElement('p');
            p.textContent = time;
            return p;
        });

        hours.append(hoursH4, ...scheduleParagraphs);

        const orderBtn = document.createElement('a');
        orderBtn.href = '#';
        orderBtn.className = 'btn';
        orderBtn.textContent = c.orderButtonText;

        contactInfo.append(infoH3, contactDetails, hours, orderBtn);

        const map = document.createElement('div');
        map.className = 'map';

        const mapImg = document.createElement('img');
        mapImg.src = c.map.src;
        mapImg.alt = c.map.alt;

        map.appendChild(mapImg);

        contactContainer.append(contactInfo, map);
        container.append(sectionTitle, contactContainer);
        section.appendChild(container);
        parent.appendChild(section);
    }
};

export default contact