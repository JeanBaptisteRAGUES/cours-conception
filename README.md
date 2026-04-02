**TD 30/03/2026**  
Commandes utilisées :
> npm install react-i18next i18next --save 
> npm install i18next-http-backend i18next-browser-languagedetector --save  


Tâches effectuées : 
-Installation de react-i18next pour traduire les pages web

Infos :  
-Architecture traduction : locales/fr/home.json, locales/en/home.json ou locales/home/fr.json, locales/home/en.json
-Pour la traduction, faire attention à prendre comme référence la langue du navigateur  
-Faire aussi attention aux langues qui se lisent de droite à gauche
-Faire attention aux langues verbeuses qui prennent plus de place


**TD 30/03/2026**  
Commandes utilisées :   


Tâches effectuées : 
-Utilisation du context avec createContext()  
-Utilisation du localStorage avec localStorage.counter  
-Requête API avec fetch  
-Récupérer la version appel API en temps réel sur le Github du prof 
-Utiliser un hook custom pour l'appel API (bonne pratique) 

Infos :  
On passe de :    
 ```jsx  
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
 ```
 à :  
 ```jsx
return (
    <BrowserRouter>
        <CounterContextProvider>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </CounterContextProvider>
    </BrowserRouter>
);
 ```
-https://github.com/Elanis/coursm1-fi  


**TD 24/03/2026**
Commandes utilisées :
> npm create vite@latest  
> npm i react-router  


Tâches effectuées :  
-Création du projet avec Vite  
-Lors de la création du template, on choisit React, puis javascript, puis utiliser npm  
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
 ex: `<div> { obj.isActive && <b> (active) </b> } </div>`  
-Installation de react-router  
-Configuration du routeur dans App.jsx  
-Création de la page Contact dans routes > Contact > index.jx  
-Configuration de la route contact dans App.jsx (<Route path="/contact" />)  
-Création d'un component "Layout" dans components > Layout > index.jsx  
-On englobe les routes "/" (Home) et "/contact" dans une route racine qui contient l'element Layout  
-Changement de `<a href="...">` en `<Link to="...">` fourni par react-router  
-Discussion sur la persistance de la donnée  
 Entre les pages : utilisation du "context"  
 Entre chaque rechargement de la page : local storage, session storage, cookies, cache, indexedDB etc..  

Infos :  
-let in -> itérer sur les clés d'un array  
-let of -> itérer sur les valeurs d'un array  
-Utiliser "key" quand on rend un tableau car sinon React doit re-rendre tout le tableau  
 car sans key il ne sait pas cibler précisément les éléments qui ont changés  
-Si pas de clé prédéfinie (ex: pas de champ id), utiliser l'indice i de map dans `array.map((obj, i, arr) => <li key={i}>...</li>)`   
-Lors de la configuration du react-routeur, on passe de :  
```jsx
 return (   
    <Home />   
 )   
 ```  
 à :  
 ```jsx  
 return (    
    <BrowserRouter>    
        <Routes>   
            <Route path="/" element={<Home />} />    
        </Routes>    
    </BrowserRouter>    
 );   
 ```  
 -Lors de la configuration du layout, on passe de :   
 ```jsx
 return (    
    <BrowserRouter>    
        <Routes>    
            <Route path="/" element={<Home />} />    
            <Route path="/contact" element={<Contact />} />    
        </Routes>    
    </BrowserRouter>    
 );    
 ``` 
 à :   
 ```jsx  
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
 ```
-Si on utilise `<a href="...">` au lieu de `<Link to="...">`, on recharge toute la page ce qui n'est pas du tout optimisé    

