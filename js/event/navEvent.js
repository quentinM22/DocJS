import { sectionHtml } from "../components/section.js";

export const eventNav = ({sousNav, data}) => {
    const app = document.querySelector("#app ")
    return new Promise((resolve, reject) => {
        const li = sousNav.querySelectorAll("li")
    
        li.forEach(e => {
            e.addEventListener("click", ev => {
                
                app.innerHTML = ''
                let newData = {}
                console.log('click', e.id);
                data.forEach(el => {
                    if (el.hasOwnProperty(e.id)) { 
                        newData = el;
                    }
                })
                app.innerHTML += sectionHtml({data : [newData], key: e.id})
                console.log(newData);
                resolve(newData)
            })
        }) 
    })

}