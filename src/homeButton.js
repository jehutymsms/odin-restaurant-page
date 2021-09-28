// Logic for Home button function
// listener will be in index.js file
//Home button function should create the elements with a function


const home = (() =>{
    const print = ()=>{
        console.log('You have hit the home Button')
    }
    return {print:print}
})()

export const print = ()=>{
    console.log('You have hit the home Button')
}
