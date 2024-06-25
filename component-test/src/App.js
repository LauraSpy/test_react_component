import React, { useState } from 'react';
import Contact from './components/Contact.jsx';

const App = () => {
  // Liste des utilisateurs avec nom, image et statut de connexion
  const users = [
    {
      nom: 'Madame Quelconque',
      image: 'https://pbs.twimg.com/profile_images/1267052300964638720/JdScoFy__400x400.jpg',
      estConnecte: true
    },
    {
      nom: 'Monsieur Intel',
      image: 'https://images.surferseo.art/95a20785-82ea-4baa-8554-a4210f90fcab.jpeg',
      estConnecte: false
    },
    {
      nom: 'Monsieur Basic',
      image: 'https://styles.redditmedia.com/t5_nzjx1/styles/profileIcon_x5xqdr67tmj11.jpg?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=2a5d54ba0d8c5a951c324340719090750b2ea316',
      estConnecte: false
    }
  ];

  // État pour gérer l'utilisateur actuellement affiché
  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  // Fonction pour passer à l'utilisateur suivant
  const handleNextUser = () => {
    setCurrentUserIndex((prevIndex) => (prevIndex + 1) % users.length);
  };

  // Fonction pour passer à l'utilisateur précédent
  const handlePreviousUser = () => {
    setCurrentUserIndex((prevIndex) => (prevIndex - 1 + users.length) % users.length);
  };

  // Fonction pour changer le statut de connexion de l'utilisateur actuel
  const toggleUserStatus = () => {
    const updatedUsers = [...users];
    updatedUsers[currentUserIndex].estConnecte = !updatedUsers[currentUserIndex].estConnecte;
    // Mettre à jour la liste des utilisateurs si nécessaire
  };

  return (
    <div>
      <Contact
        nom={users[currentUserIndex].nom}
        image={users[currentUserIndex].image}
        estConnecte={users[currentUserIndex].estConnecte}
      />
      <button onClick={handlePreviousUser}>Précédent</button>
      <button onClick={handleNextUser}>Suivant</button>
      <button onClick={toggleUserStatus}>Changer Statut</button>
    </div>
  );
};

export default App;
