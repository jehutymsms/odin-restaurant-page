// Logic for Menu button function
// listener will be in index.js file
//Home button function should create the elements with a function

export const menuButton = (() => {
    // Menu
    let menuList = {
        menuTitles: ['Drink', 'Food'],
        drink: {
            item0: {
                title: 'Ale',
                descript: 'It\'s Better than water'
            },
            item1: {
                title: 'Wine',
                descript: 'Red'
            },
            item2: {
                title: 'Cider',
                descript: 'Made from apples that have not rotted'
            }
        },
        food: {
            item0: {
                title: 'Stew',
                descript: 'Meat Vegetables and Broth'
            },
            item1: {
                title: 'Roast Goose',
                descript: 'Butchered Fresh to Order'
            },
            item2: {
                title: 'Fancy Feast',
                descript: 'Finest Meat, Cheese, Fruits, and Nuts'
            },
            item3: {
                title: 'Commoner\'s Feast',
                descript: 'Whatever is left of the Fancy Feast'
            }
        }
    };
    // Cache Dom
    const cacheDom = (() => {
        let contentBody = document.getElementById('content')
        return { contentBody: contentBody }
    })();
    // Function List
    const newElement = (item) => {
        let element = document.createElement(item.tag);
        if (item.classId) { element.classList = item.classId; };
        if (item.id) { element.id = item.id; };
        if (item.htmlString) { element.innerHTML = item.htmlString; };
        return element;
    };

    //Menu Content Section
    const menuContentSection = () => {
        let infoContentMenu = newElement({ tag: 'div', id: 'infoContentMenu' }),
            contentBody = newElement({ tag: 'div', id: 'contentBody', classId: 'menu' });

        infoContentMenu.appendChild(contentBody);

        render.insertAfter(infoContentMenu, cacheDom.contentBody.children[1]);

    };

    // return a list of Elements based on Menu array
    const menuDetailElements = (array) => {
        let elementList = [];

        for (let i = 0; i < array.menuTitles.length; i++) {
            let element = newElement({ tag: 'h1', htmlString: array.menuTitles[i] }),
                detailItems = menuDetailItems(array[array.menuTitles[i].toLowerCase()]);

            elementList.push(element);

            for (let x = 0; x < Object.keys(detailItems).length; x++) {
                elementList.push(detailItems[`item${x}`]);
            }
        }
        return elementList;
    }

    //Returns and array of Item Elements
    const menuDetailItems = (array) => {
        let list = {};
        for (let i = 0; i < Object.keys(array).length; i++) {
            let details = array[`item${i}`],
                container = newElement({
                    tag: 'div',
                }),
                title = newElement({
                    tag: 'p',
                    classId: 'itemTitle',
                    htmlString: details.title
                }),
                descript = newElement({
                    tag: 'p',
                    htmlString: details.descript
                });
            container.appendChild(title);
            container.appendChild(descript);
            list[`item${i}`] = container;
        };

        return list;
    };

    const menuCreate = () => {
        menuContentSection();
        let menuDetails = menuDetailElements(menuList),
            contentBody = document.getElementById('contentBody');

        for (let i = 0; i < menuDetails.length; i++) {
            render.insertInside(menuDetails[i], contentBody);
        }
    }

    // Render to DOM
    const render = (() => {
        const insertAfter = (newNode, existingNode) => {
            existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
        }
        const insertInside = (element, existingElement) => {
            existingElement.appendChild(element);
        }
        return { insertAfter: insertAfter, insertInside: insertInside };
    })()

    return { menuCreate: menuCreate };
})()