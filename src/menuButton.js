// Logic for Menu button function
// listener will be in index.js file
//Home button function should create the elements with a function

export const menuButton = (() =>{
    // Cache Dom
    const cacheDom = (()=>{
        let contentBody = document.getElementById('content'),
        navigation = document.getElementById('content')
        return {contentBody:contentBody,navigation:navigation}
    })()
    
    // Function List
    const newElement = (item)=>{
        let element = document.createElement(item.tag);
        if(item.classId){element.classList = item.cLass;}
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

    const menuDetailElements = (menulist) =>{

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
        // menuContentSection();
        console.log(Object.keys(menuList.food).length);
        
    }

    // Render to DOM
    const render = (()=> {
        const insertAfter = (newNode, existingNode) =>{
            existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
        }
        return{insertAfter:insertAfter}
    })()

    let contentBody = document.getElementById('content'),
    children = contentBody.children


    return {menuCreate:menuCreate}
})()