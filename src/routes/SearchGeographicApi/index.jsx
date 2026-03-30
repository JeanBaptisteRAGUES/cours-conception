import { useCallback, useState } from "react";

export default function SearchGeographicApi() {
    const [codePostal, setCodePostal] = useState('');
    const [villeRecherchee, setVilleRecherchee] = useState('');

    const getData = useCallback(async () => {
        console.log(`Recherche par code postal (${codePostal})`)
        const url = `https://geo.api.gouv.fr/communes?codePostal=${codePostal}`;

        try {
            const reponse = await fetch(url);
            if (!reponse.ok) {
                console.log("Error : ", reponse.status)
                throw new Error(`Statut de réponse : ${reponse.status}`);
            }

            const resultat = await reponse.json();
            console.log(resultat);
            //TODO: Attention, il peut y avoir plusieurs villes pour un même code postal
            setVilleRecherchee(resultat[0]?.nom || "Aucune ville trouvée");
        } catch (erreur) {
            console.error(erreur.message);
        }
    }, [codePostal]);

    return (
        <div>
            <h1>Rechercher une ville</h1>
            <input type="text" placeholder='Entrez le code postal' onChange={(e) => setCodePostal(e.target.value)} />
            <button onClick={getData}>Rechercher</button>
            {villeRecherchee && <p>Résultat : {villeRecherchee}</p>}
        </div>
    )
}