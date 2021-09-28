import './style.css';
import {print} from './homeButton';
// What Needs to be done
// Create a bare-bones homepage for a restaurant. 
// Include an image, headline, and some copy about how wonderful the restaurant is. 
// It’s okay to hard-code these into the HTML for now just to see how they look on the page.

// Logic to Clear Contents Section in this File
//then run function depending on button pressed for element creation

const cacheDom = (()=>{
    let homeButton = document.getElementById('home')
    return {homeButton:homeButton}
})()

cacheDom.homeButton.addEventListener('click', print)