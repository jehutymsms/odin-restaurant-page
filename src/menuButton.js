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
        if(item.cLass){element.classList = item.cLass;}
        if(item.id){element.id = item.id;}
        if(item.htmlString){element.innerHTML = item.htmlString;}
        return element;
    }
    
    //Menu Content Section
    const homeContentSection = ()=>{
        let homeContent = newElement({tag:'div',id:'infoContent'}),
        title = newElement({tag:'div',id:'title'}),
        titleString = newElement({tag:'h1',htmlString:'About'}),
        contentBody = newElement({tag:'div', id:'contentBody'}),
        contentString = newElement({
            tag:'p',
            htmlString:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nisi accusantium excepturi eos error aliquam ad, provident quod eum? Deleniti.'
        })


        title.appendChild(titleString);
        homeContent.appendChild(title);
        contentBody.appendChild(contentString);
        homeContent.appendChild(contentBody);

        render.insertAfter(homeContent,cacheDom.contentBody.children[1])

    }
    const menuCreate = () =>{
        homeContentSection();
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