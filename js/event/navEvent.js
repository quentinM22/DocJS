export const eventNav = ({sousNav, data}) => {
    console.log('eventNav');
    return new Promise((resolve, reject) => {
        const li = sousNav.querySelectorAll("li")
    
        li.forEach(e => {
            e.addEventListener("click", ev => {
                let newData = {}
                console.log('click', e.id);
                data.forEach(el => {
                    if (el.hasOwnProperty(e.id)) { 
                        newData = el;
                    }
                })
                console.log(newData);
                resolve(newData)
            })
        }) 
    })

}