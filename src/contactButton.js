// Logic for Contact button function
// listener will be in index.js file
//Home button function should create the elements with a function
export const contactButton = (() => {
    // Cache Dom
    const cacheDom = (() => {
        let contentBody = document.getElementById('content')
        return { contentBody: contentBody};
    })()

    // Function List
    const newElement = (item) => {
        let element = document.createElement(item.tag);
        if (item.cLass) { element.classList = item.cLass; };
        if (item.id) { element.id = item.id; };
        if (item.htmlString) { element.innerHTML = item.htmlString; };
        return element;
    }

    let contactInfo = {
        contactTitles: ['phone', 'email'],
        item0: {
            phone: {
                info: '123-456-7891',
            }
        },
        item1: {
            email: {
                info: 'backstab@steal.com',
            },
        }
    };
    // List of Contact Elements
    const contactDetailItems = (array) => {
        let list = {};
        for (let i = 0; i < array.contactTitles.length; i++) {
            let details = array[`item${i}`],
                info = newElement({
                    tag: 'p',
                    htmlString: details[`${array.contactTitles[i]}`].info
                })
            list[`item${i}`] = info;
        };
        return list 
    };

    //About Content Section
    const contactContentSection = () => {
        let contactContent = newElement({ tag: 'div', id: 'infoContactContent' }),
            title = newElement({ tag: 'div', id: 'titleContact' }),
            titleString = newElement({ tag: 'h1', htmlString: 'Contact Us' }),
            contentBody = newElement({ tag: 'div', id: 'contentBody' }),
            contentString = contactDetailItems(contactInfo);

            for (let i = 0; i < Object.keys(contentString).length; i++) {
                contentBody.appendChild(contentString[`item${i}`])

            };


        title.appendChild(titleString);
        contactContent.appendChild(title);
        // contentBody.appendChild(contentString);
        contactContent.appendChild(contentBody);

        render.insertAfter(contactContent, cacheDom.contentBody.children[1]);

    }
    const contactCreate = () => {
        contactContentSection();
    }

    // Render to DOM
    const render = (() => {
        const insertAfter = (newNode, existingNode) => {
            existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
        }
        return { insertAfter: insertAfter };
    })()


    return { contactCreate: contactCreate };
})()