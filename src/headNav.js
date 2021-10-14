export const headNav = (() => {
    // Cache Dom
    const cacheDom = (() => {
        let contentBody = document.getElementById('content')
        return { contentBody: contentBody };
    })()
    // Function List
    const newElement = (item) => {
        let element = document.createElement(item.tag);
        if (item.classId) { element.classList = item.classId; };
        if (item.id) { element.id = item.id; };
        if (item.htmlString) { element.innerHTML = item.htmlString; };
        return element;
    }
    //Title
    const headerSection = (string) => {
        let head = newElement({ tag: 'header' }),
            title = newElement({ tag: 'h1', htmlString: string });
        head.appendChild(title);
        render.domAppend(head);
    }
    //Array of Button Elements
    const navButtonList = (array) => {
        let elements = [];
        for (let i = 0; i < array.length; i++) {
            let listItem = newElement({ tag: 'li' }),
                item = newElement({
                    tag: 'button',
                    classId: 'tabButton',
                    id: array[i].id,
                    htmlString: array[i].htmlString
                });
            listItem.appendChild(item);
            elements.push(listItem);
        }
        return elements;
    }
    //Navigation Buttons
    const navBarsSection = () => {
        let navigationContainer = newElement({ tag: 'div', id: 'navigationContainer' }),
            navigation = newElement({ tag: 'div', id: 'navigation' }),
            list = newElement({ tag: 'ul' }),
            items = [
                { id: 'home', htmlString: 'Home' },
                { id: 'menu', htmlString: 'Menu' },
                { id: 'contact', htmlString: 'Contact' }
            ],
            itemsList = navButtonList(items);


        for (let i = 0; i < items.length; i++) {
            list.appendChild(itemsList[i]);
        }
        navigation.appendChild(list);
        navigationContainer.appendChild(navigation);
        render.domAppend(navigationContainer);
    }

    //Footer Section
    const footerSection = () => {
        let footer = newElement({ tag: 'footer' }),
            footerString = newElement({
                tag: 'h1',
                htmlString: 'Made By Thiefs Guild'
            })
        footer.appendChild(footerString);
        render.domAppend(footer);
    }
    // Header and Navigation Creation
    const headCreate = () => {
        headerSection('Gambler\s Den');
        navBarsSection();
        // infoContentSection();
        footerSection();
    }
    // Render to DOM
    const render = (() => {
        const domAppend = (item) => {
            cacheDom.contentBody.appendChild(item);
        }
        return { domAppend: domAppend };
    })()
    return { headCreate: headCreate };
})()