// Logic for Menu button function
// listener will be in index.js file
//Home button function should create the elements with a function

export const menuButton = (() =>{
    // Menu
    let menuList = {
        menuTitles:['Drink','Food'],
        drink:{
            item0:{
                title: 'Ale',
                descript: 'It\'s Better than water'
            },
            item1:{
                title: 'Wine',
                descript: 'Red'
            },
            item2:{
                title: 'Cider',
                descript: 'Made from apples that have not rotted'
            }
        },
        food:{
            item0:{
                title: 'Stew',
                descript: 'Meat Vegetables and Broth'
            },
            item1:{
                title: 'Roast Goose',
                descript: 'Butchered Fresh to Order'
            },
            item2:{
                title: 'Fancy Feast',
                descript: 'Finest Meat, Cheese, Fruits, and Nuts'
            },
            item3:{
                title: 'Commoner\'s Feast',
                descript: 'Whatever is left of the Fancy Feast'
            }
        }
    }
    // Cache Dom
    const cacheDom = (()=>{
        let contentBody = document.getElementById('content')
        return {contentBody:contentBody}
    })()  
    // Function List
    const newElement = (item)=>{
        let element = document.createElement(item.tag);
        if(item.classId){element.classList = item.classId;}
        if(item.id){element.id = item.id;}
        if(item.htmlString){element.innerHTML = item.htmlString;}
        return element;
    }
    
    //Menu Content Section
    const menuContentSection = ()=>{
        let infoContentMenu = newElement({tag:'div',id:'infoContentMenu'}),
        contentBody = newElement({tag:'div',id:'contentBody',classId:'menu'})

        infoContentMenu.appendChild(contentBody)
        
        render.insertAfter(infoContentMenu,cacheDom.contentBody.children[1])

    }

    // return a list of Elements based on Menu array
    const menuDetailElements = (array) =>{
        let elementList = [];

        for(let i =0; i< array.menuTitles.length ;i++){
            let element = newElement({tag:'h1', htmlString:array.menuTitles[i]}),
            detailItems = menuDetailItems(array[array.menuTitles[i].toLowerCase()])
            elementList.push(element)
            // Modify this to loop over object 
            for(let x = 0;x< detailItems.length;x++){
                elementList.push(detailItems[i])
            }
        }

        return elementList
    }

    //Returns and array of Item Elements
    const menuDetailItems = (array) =>{
        // possible return an object to solve duplication problem
        // console.log(Object.keys(array).length)
        let list = [],
        list2 = {};
        for(let i =0; i < Object.keys(array).length; i++){
            let details = array[`item${i}`],
            container = newElement({
                tag:'div',
                }),
            title = newElement({
                tag:'p',
                classId:'itemTitle',
                htmlString:details.title
            }),
            descript = newElement({
                tag:'p',
                htmlString:details.descript
            })
            // console.log(title.innerHTML)
            container.appendChild(title)
            // console.log(descript.innerHTML)
            container.appendChild(descript)
            list.push(container)
            list2[`item${i}`] = container;
        }
        console.log(list2)
        return list
    }

    const menuCreate = () =>{
        menuContentSection();
        let list = menuList.menuTitles[0].toLowerCase(),
        menuDetails = menuDetailElements(menuList),
        contentBody = document.getElementById('contentBody')
        
        for(let i =0; i<menuDetails.length; i++){
            render.insertInside(menuDetails[i], contentBody)
        }
        // console.log(menuList[list][`item1`].title)

        // console.log(list);
        // console.log(Object.keys(menuList[menuList.menuTitles[0].toLowerCase()]));
        // console.log(children[1]);  
    }

    // Render to DOM
    const render = (()=> {
        const insertAfter = (newNode, existingNode) =>{
            existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
        }
        const insertInside = (element, existingElement) => {
            existingElement.appendChild(element)
        }
        return{insertAfter:insertAfter,insertInside:insertInside}
    })()

    return {menuCreate:menuCreate}
})()