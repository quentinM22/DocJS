export const headerHtml = () => {
    const headerContent = `
    <h1 class="grid-item-3">Doc.</h1>
    `
    return headerContent
}

export const sousNavigation = ({data}) => {
    const onglet = []

data.forEach(e => {
    Object.keys(e).forEach(key => {
       onglet.push(key) 
    })
    
});
   const sousNavHtml = `
   <ul class='grid'>
   ${onglet.map(e => 
    `<li id="${e}" class='grid-item-2'>${e.replace("_", ' ')}</li>`
   ).join("")}
   </ul>
   ` 
   return sousNavHtml
}