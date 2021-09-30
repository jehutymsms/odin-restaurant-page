// Logic for Home button function
// listener will be in index.js file
//Home button function should create the elements with a function


export const home = (() =>{
    // Cache Dom
    const cacheDom = (()=>{
        let contentBody = document.getElementById('contentBody')
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
    
    

    // Render to DOM
    const render = (()=> {

    })()

    return {print:print}
})()
