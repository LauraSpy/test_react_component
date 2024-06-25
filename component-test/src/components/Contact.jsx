// Dans Contact.jsx
import React from 'react';
import './contact.css';

const Contact = ({ nom, image, estConnecte }) => {
  return (
    <div className="profil">
      <img 
        className="profil-image"
        src={image} 
        alt={`avatar de ${nom}`} />
      <div>
        <span className={`connection-statut ${estConnecte ? 'connected' : 'disconnected'}`}></span>
      </div>
      <h2 className="nom">{nom}</h2>
    </div>
  )
};

export default Contact;
