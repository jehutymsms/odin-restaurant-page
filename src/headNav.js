export const headNav = (() =>{
    // Cache Dom
    const cacheDom = (()=>{
        let contentBody = document.getElementById('content')
        return {contentBody:contentBody}
    })() 
    // Function List
    const newElement = (item)=>{
        let element = document.createElement(item.tag);
        if(item.cLass){element.classList = item.cLass;}
        if(item.id){element.id = item.id;}
        if(item.htmlString){element.innerHTML = item.htmlString;}
        return element;
    }
    //Title
    const headerSection = (string) =>{
        let head = newElement({tag:'header'}),
        title = newElement({tag:'h1', htmlString:string});
        head.appendChild(title);
        render.domAppend(head);
    }
    //Array of Button Elements
    const navButtonList = (array) =>{
        let elements = []
        for(let i =0; i<array.length;i++){
            let listItem = newElement({tag:'li'}),
            item = newElement({
                tag: 'button',
                cLass: 'tabButton', 
                id: array[i].id,
                htmlString: array[i].htmlString
            });
            listItem.appendChild(item);
            elements.push(listItem)
        }
        return elements
    }
    //Navigation Buttons
    const navBarsSection = () => {
        let navigation = newElement({tag:'div', id:'navigation'}),
        list = newElement({tag:'ul'}),
        items = [
        {id:'home',htmlString:'Home'},
        {id:'menu',htmlString:'Menu'},
        {id:'contact',htmlString:'Contact'}
        ],
        itemsList = navButtonList(items);

        
        for(let i =0;i<items.length;i++){
            list.appendChild(itemsList[i])
        }
        navigation.appendChild(list)
        render.domAppend(navigation)
    }
    //Info Content Section
    const infoContentSection = ()=>{
        let infoContent = newElement({tag:'div',id:'infoContent'}),
        title = newElement({tag:'div',id:'title'}),
        titleString = newElement({tag:'h1',htmlString:'About'}),
        contentBody = newElement({tag:'div', id:'contentBody'}),
        contentString = newElement({
            tag:'p',
            htmlString:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nisi accusantium excepturi eos error aliquam ad, provident quod eum? Deleniti.'
        })


        title.appendChild(titleString);
        infoContent.appendChild(title);
        contentBody.appendChild(contentString);
        infoContent.appendChild(contentBody);

        render.domAppend(infoContent)

    }
    //Footer Section
    const footerSection = () =>{
        let footer = newElement({tag:'footer'}),
        footerString = newElement({
            tag: 'h1',
            htmlString: 'Made By Thiefs Guild'
        })
        footer.appendChild(footerString);
        render.domAppend(footer);
    }
    // Header and Navigation Creation
    const headCreate = () =>{
        headerSection('Gambler\s Den');
        navBarsSection();
        infoContentSection();
        footerSection();
    }
    // Render to DOM
    const render = (()=> {
        const domAppend = (item) =>{
            cacheDom.contentBody.appendChild(item)
        }
        return{domAppend:domAppend}
    })()
    return {headCreate:headCreate}
})()