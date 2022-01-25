# Projet-Equipe-14-Pi-A5-HandicApp


# Handic-App
Handic'App est un projet réalisé pour Microsoft. L'objectif est de créer une application qui centralise les différents services cognitifs Azure existant afin de simplifier leur accessibilité. Ces services sont un réel soutien pour les personnes handicapées.

Pour réaliser cette application, on a décidé d'utiliser le langage React-Native. React-Native est un framework java-script populaire pour réaliser des applications cross-plateformes (application disponible sur IOS et Android).

React-Native est un langage bien adapté pour la programmation orienté objet. En effet chaque élément sur l'application (bouton,image,barre de saisie ...) fait l'objet d'un fichier de code séparé qui peut être réutilisé ensuite dans n'importe quel écran de l'application. Ci-dessous, voici la structure générale d'un fichier de code en React-Native:

# Structure d'un fichier en React-Native
Tout d'abord, il faut importer les bibliothèques/fonctions dont on a besoin
![import](https://user-images.githubusercontent.com/94694942/150673940-ccfabca6-7bc0-4531-ac30-f7b1562ac1d9.PNG)

Ensuite vient le coeur du fichier, ici nous avons une classe mais on peut également décider de créer une fonction.
Une classe en react native est composé de
-constructeurs
-props
-render (obligatoire)
-return (pour afficher quelque chose à l'écran, il faut placer son code du return entre des balises <View>)

![image](https://user-images.githubusercontent.com/94694942/150674039-53b04ae8-988e-40f7-bf2d-54beecd918de.png)

Ensuite, on peut décider de créer un style pour designer les composants de la classe/fonction
![image](https://user-images.githubusercontent.com/94694942/150674505-dcde5b4e-5a29-45e0-aed7-20c1ab9c3de9.png)

Enfin, il faut exporter la classe afin de pouvoir l'utiliser ailleurs dans l'application (Ici on exporte la classe avec (withNavigation car notre classe renvoie vers une autre, mais on peut utiliser simplement "export default" s'il n'ya pas de renvoie vers un autre objet)
  
![image](https://user-images.githubusercontent.com/94694942/150674541-3e8cf8e7-6ce9-4416-a1bb-0c2a1a68f7f6.png)
  
Ci-dessous, des liens vers la documentation officiel de React-Native pour débuter avec le développement mobile:

Learn the basics: https://reactnative.dev/docs/tutorial

Tutoriel complet: https://reactnative.dev/docs/getting-started
  
# Structure de l'application
 
![image](https://user-images.githubusercontent.com/94694942/150674774-c9788e05-8eda-4cfd-a2df-1eb0ad8d461a.png)
  
Les dossiers .expo et .vscode sont générés automatiquement à la création d'une application React-Native et sert au bon fonctionnement de cette dernière
  
Assets contient les images affichés dans l'application
  
![image](https://user-images.githubusercontent.com/94694942/150674858-a52f5913-2433-4031-94ee-72efa0c4b1ee.png)

Components regroupe les différents objets (boutton, barre de recherche ...)
  
![image](https://user-images.githubusercontent.com/94694942/150674923-51efe59a-f8d3-48e7-9cd2-0cf9bc1c1739.png)
  
Ci-dessous, le rendu en front des différents components:

-Affichage:
  
![image](https://user-images.githubusercontent.com/94694942/150784522-c64d1710-de3a-4b4d-9b06-782d61129ae0.png)
  
-Azure:
  
![image](https://user-images.githubusercontent.com/94694942/150784778-9397a635-7055-4ca3-9a35-91bdf0efd841.png)

-Creation:

![image](https://user-images.githubusercontent.com/94694942/150784939-3cfd65f3-47cb-44f1-82ad-9953403619ce.png)

-Dictaphone:
  
![image](https://user-images.githubusercontent.com/94694942/150785090-965128ff-e445-42da-8297-2b6eeae15f56.png)

-Localisation:
  
![image](https://user-images.githubusercontent.com/94694942/150785222-c3497e24-726f-46b7-926c-c2c096bafcbc.png)

-Parametre:
  
![image](https://user-images.githubusercontent.com/94694942/150785462-06f5a48f-0f75-4145-91b6-b30dc12c34f8.png)

-Recherche:
  
![image](https://user-images.githubusercontent.com/94694942/150785596-f895392f-800c-47c5-8502-e31948ff624d.png)

  
-Scanner:
 
![image](https://user-images.githubusercontent.com/94694942/150785942-bdb80a86-96bb-4574-9af0-2f1603fcd53c.png)

-Son:
  
![image](https://user-images.githubusercontent.com/94694942/150786053-3fefd8b6-1af5-4ba6-b971-2fee54264a17.png)

-Visionneuse:
  
![image](https://user-images.githubusercontent.com/94694942/150786171-e3051985-d7d9-4806-93d7-a283a22c67f9.png)



Navigator est le fichier qui permet la navigation entre les différents écrans de l'application
  
![image](https://user-images.githubusercontent.com/94694942/150674954-2ae7f064-2fe0-4ce4-a72c-b7522aa4e48e.png)

node_modules, comme son nom l'indique, contient les différents modules de l'application. C'est un fichier très volumineux.
  
Screen contient les différents écrans de l'application. Ces écrans sont composés d'objets du dossier Components
  
![image](https://user-images.githubusercontent.com/94694942/150675036-92b502a2-beaf-48f9-aa28-38dedc37b683.png)
  
Ci-dessous, les différents écrans de l'application:
  
-Login:
  
![image](https://user-images.githubusercontent.com/94694942/150786527-17822f71-89b0-4e0f-9a7e-3a25d38d3f5a.png)

-Inscription:
  
![image](https://user-images.githubusercontent.com/94694942/150786620-387aada2-49a0-48e4-9ef9-b5aea2f98dcb.png)

-mdp_oublie:
  
![image](https://user-images.githubusercontent.com/94694942/150786785-d970a401-3e93-4fd8-aedc-8dcf537f559e.png)

-Menu:
  
![image](https://user-images.githubusercontent.com/94694942/150786691-743ae01c-61a0-41e1-a8cd-5d5d142f8160.png)


Chacun des cinq boutons principaux du menun renvoie vers une page pour accéder au service cognitif associé. Ces pages ont la forme ci-dessous:
  
![image](https://user-images.githubusercontent.com/94694942/150787601-f359e3d3-6bbb-4767-94ac-cd83a25adde3.png)

App.js est le fichier principal. C'est l'application à proprement parlé

![image](https://user-images.githubusercontent.com/94694942/150675066-6d901038-6a49-49cc-ab11-9cbff3653274.png)

Paradoxalement, il est très simple car tout est compacté avant dans les différents fichiers. (C'est l'avantage de la POO)
![image](https://user-images.githubusercontent.com/94694942/150675086-0acb6ab8-395d-41d9-a373-3c046190e90f.png)

Les derniers dossiers sont aussi des dossiers générés automatiquement à la création de l'application
  
![image](https://user-images.githubusercontent.com/94694942/150675136-dc63d9f8-58ff-482a-85ed-f2d00103fe57.png)

  
# Démarrer l'application
  
Tout d'abord, il faut ouvrir un terminal sur Visual Studio et se placer dans le dossier où se trouve l'application grâce à la commande "cd".
Ensuite il faut entrer la commande "npm install" afin d'installer les différents nodes modules nécessaires au lancement de l'application ainsi que : "npm install --global expo-cli" afin d'installer expo.
Ensuite il faut entrer la commande "npm start" afin de lancer le programme dans un serveur local
  
![image](https://user-images.githubusercontent.com/94694942/150781397-80286ace-513e-4d36-a18d-f302c52e9318.png)

On arrive alors sur la page suivante, d'ici on peut décider de lancer l'application sur un serveur web local en cliquant sur "Run in web browser", sinon peut scanner le QR code avec l'application Expo installé sur votre téléphone afin de pouvoir tester le programme directement sur mobile.
lien de téléchergaent de Expo: 
  
-Android: https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US
  
-IOS: https://apps.apple.com/us/app/expo-go/id982107779
  
![image](https://user-images.githubusercontent.com/94694942/150781664-4f6868bd-e517-4a69-a9c7-acb3577efdde.png)

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
