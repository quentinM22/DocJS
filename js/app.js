import { fetchData } from "./fetch.js"

import { headerHtml, sousNavigation } from "./components/header.js";
import { sectionHtml } from "./components/section.js";
import { eventNav } from "./event/navEvent.js";

const data = await fetchData()
let newData = {}
const header = document.querySelector('header')
const sousNav = document.querySelector("#sousNav");
const app = document.querySelector("#app");

header.innerHTML += headerHtml()
sousNav.innerHTML += sousNavigation({data})
app.innerHTML += sectionHtml({data})


eventNav({sousNav, data})
    .then( newData => {
        newData = newData
    })
    .catch( error =>{
        console.error(error)
    })

console.log(newData);

