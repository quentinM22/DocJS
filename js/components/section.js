import { fetchData } from "../fetch.js";

export const sectionHtml = async () => {
    const data = await fetchData();
    const app = document.querySelector("#app");
    let sectionContent = ''; 

    data.forEach((e) => {
        e.BASE.forEach((el) => {
            sectionContent += `
                <section>
                    <h2>${el.titre}</h2>
                    ${el.description ? `<p>${el.description}</p>` : ""}
                    ${el.Alert ? `<p class='alert'>${el.Alert}</p>` : ""}
            `;

            el.bloc.forEach((ele) => {
                sectionContent += `
                    <h3>${ele.desc}</h3>
                    <code>
                        <ul>
                            ${ele.codeJS.map((elem) => `<li>${elem}</li>`).join('')}
                            ${ele.consLog ? 
                            `<ul class='log'>
                             ${ele.consLog.map((elem) => `<li >//${elem}</li>`).join('')} 
                            </ul>`: ""}
                        </ul>
                    </code>
                `
            });

            sectionContent += `</section>`; 
        });
    });

    app.innerHTML = sectionContent; 
};
