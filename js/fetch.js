export const fetchData = async () => {
    console.log(window.location.href);
    try {
        const res = await fetch(`./data/data.json` );
        if (!res.ok) {
            throw new Error('La réponse du réseau n\'est pas valide');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        throw error; 
    }
};