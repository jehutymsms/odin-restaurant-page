// Logic for Menu button function
// listener will be in index.js file
//Home button function should create the elements with a function

export const menuButton = (() =>{
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

    const menuDetailElements = () =>{
        let elementList = [];

        for(let i =0; i< menuList.menuTitles.length ;i++){
            let test = newElement({tag:'h1', htmlString:menuList.menuTitles[i]})
            elementList.push(test)
        }

        return elementList
    }

    let menuList = {
        menuTitles:['Drink','Food'],
        drink:{
            item1:{
                title: 'Ale',
                descript: 'It\'s Better than water'
            },
            item2:{
                title: 'Wine',
                descript: 'Red'
            },
            item3:{
                title: 'Cider',
                descript: 'Made from apples that have not rotted'
            }
        },
        food:{
            item1:{
                title: 'Stew',
                descript: 'Meat Vegetables and Broth'
            },
            item2:{
                title: 'Roast Goose',
                descript: 'Butchered Fresh to Order'
            },
            item3:{
                title: 'Fancy Feast',
                descript: 'Finest Meat, Cheese, Fruits, and Nuts'
            },
            item4:{
                title: 'Commoner\'s Feast',
                descript: 'Whatever is left of the Fancy Feast'
            }
        }
    }

    const menuCreate = () =>{
        menuContentSection();
        let list = menuList.menuTitles[0].toLowerCase()
        // console.log(list);
        // console.log(Object.keys(menuList[menuList.menuTitles[0].toLowerCase()]));
        // console.log(children[1]);
        for(let i =0; i<menuDetailElements().length; i++){
            render.insertAfter(menuDetailElements()[i], document.getElementById('contentBody'))
        }
        
    }

    // Render to DOM
    const render = (()=> {
        const insertAfter = (newNode, existingNode) =>{
            existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
        }
        return{insertAfter:insertAfter}
    })()

    let contentBody = document.getElementById('content'),
    // use this with insert after function for menu creation
    children = contentBody.children


    return {menuCreate:menuCreate}
})()