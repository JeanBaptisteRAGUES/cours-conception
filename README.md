**TD 24/03/2026**

Commandes utilisées :
> npm create vite@latest -> cours-m1 -> React -> Javascript
> npm i react-router


Tâches effectuées :
-Création du projet avec Vite
-Explication des différents fichiers créés lors de "npm create vite"
-Suppression fichiers .css, .svg et dossier assets
-Suppression des import qui ne sont plus valides
-Création dossier components
-Création dossier context
-Création dossier routes
-Création dossier Home dans dossier routes
-Création fichier index.jsx dans dossier Home
-Utilisation d'un empty container avec <> </>
-Explication du useState() et useEffect() avec l'exemple d'un compteur
-Utilisation de useMemo() pour stocker des utilisateurs
-Utilisation du map pour itérer sur un array
-Utilisation de l'affichage conditionnel avec &&
 ex: <div> { obj.isActive && <b> (active) </b> } </div>
-Installation de react-router
-Configuration du routeur dans App.jsx
-Création de la page Contact dans routes > Contact > index.jx
-Configuration de la route contact dans App.jsx (<Route path="/contact" />)
-Création d'un component "Layout" dans components > Layout > index.jsx
-On englobe les routes "/" (Home) et "/contact" dans une route racine qui contient l'element Layout
-Changement de <a href="..."> en <Link to="..."> fourni par react-router
-Discussion sur la persistance de la donnée
 Entre les pages : utilisation du "context"
 Entre chaque rechargement de la page : local storage, session storage, cookies, cache, indexedDB etc..

Infos :
-let in -> itérer sur les clés d'un array
-let of -> itérer sur les valeurs d'un array
-Utiliser "key" quand on rend un tableau car sinon React doit re-rendre tout le tableau
 car sans key il ne sait pas cibler précisément les éléments qui ont changés
-Si pas de clé prédéfinie (ex: pas de champ id), utiliser l'indice i de map dans array.map((obj, i, arr) => <li key={i}>...</li>)
-Lors de la configuration du react-routeur, on passe de : 
 return (
    <Home />
 )
 à :
 return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
 );
 -Lors de la configuration du layout, on passe de :
 return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
 );
 à :
 return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    </BrowserRouter>
 );
-Si on utilise <a href="..."> au lieu de <Link to="...">, on recharge toute la page ce qui n'est pas du tout optimisé

