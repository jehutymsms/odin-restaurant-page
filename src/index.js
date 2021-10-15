import './style.css';
import {headNav} from './headNav';
import {homeButton} from './homeButton';
import {menuButton} from './menuButton';
import {contactButton} from './contactButton';
// What Needs to be done
// Create a bare-bones homepage for a restaurant. 
// Include an image, headline, and some copy about how wonderful the restaurant is. 
// It’s okay to hard-code these into the HTML for now just to see how they look on the page.

// Logic to Clear Contents Section in this File
//then run function depending on button pressed for element creation


const main = (() =>{
    headNav.headCreate()
    const cacheDom = (() => {
        let navigationContainer = document.getElementById('navigationContainer'),
        home = document.getElementById('home'),
        menu = document.getElementById('menu'),
        contact = document.getElementById('contact')

        return { navigationContainer: navigationContainer,home:home,menu:menu,contact:contact };
    })()
    
    const bindEvents = () => {
        cacheDom.home.addEventListener('click', homeButton.homeCreate())
        cacheDom.menu.addEventListener('click', menuButton.menuCreate())
        cacheDom.contact.addEventListener('click', contactButton.contactCreate())
    }

    const render = (() =>{
        const test = () => {
            console.log(document.getElementById('content').childNodes)
            console.log(document.getElementById('navigationContainer').nextSibling)
        }
        return {test:test}
    })()

    render.test()

})()







// homeButton.homeCreate()
// menuButton.menuCreate()
contactButton.contactCreate()

// let contentBody = document.getElementById('content'),
// home = document.getElementById('home'),
// children = contentBody.children

// console.log(children)
// console.log(children[2])

// home.addEventListener('click', function(){
//     children[2].remove()
// })



// add an element after the nav bar
// Delete the element after the nav bar
// if either of the below id's exist remove them
// infoContent
// infoContentMenu