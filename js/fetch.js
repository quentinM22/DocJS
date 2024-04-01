export const fetchData = async () => {
const url = 'https://quentinm22.github.io/DocJS/data/data.json'
    try {
        const res = await fetch(url);
        console.log(res);
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