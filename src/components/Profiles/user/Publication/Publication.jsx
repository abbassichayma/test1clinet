import React from 'react'
import AddPublication from './AddPublication'

function Publication() {
  return (
    <div>
    <div className='public'>
      Chers clients, bienvenue sur cette plateforme.<br/>
Nous vous informons qu'il est aussi possible que vous envoyiez des articles ou encore .
des textes voire des faits divers.<br/> Ces informations seront traitées et publiées sur le site.<br/> <br/> 

Pour envoyer, il suffit juste de choisir un titre accrocheur, une bonne image, et un texte de deux paragraphes (Court, Clair et Concis). 
    </div>
    <div>
    <AddPublication/>
    </div>
    </div>
    
  )
}

export default Publication