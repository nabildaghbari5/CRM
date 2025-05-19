
export const MENU = {
    adminMenu: [
         {
            id: 0,
            label: 'Tableau de bord',
            link: 'users/tableau_bord',   

        }, 

        {
            id: 1,
            label: 'Compte Commerical',
            link: 'users/commercial',   

        },    
        {
            id: 2,
            label: 'Les prospects ',  
            link: 'users/client',  

        },   
        {
            id: 3,
            label: 'Les clients', 
            link: 'users/client-contrat',  

        },   
        {
            id: 4,
            label: 'Rendez-vous',  
            link: 'rendez-vous/rendez-admin',  

        },     
       
    ],

    
    Client: [
        {
            id: 1,
            label: "Rendez-vous",
            link: 'rendez-vous/rendez-client', 

        },

        {
            id: 2,
            label: "Suivi Contrat",
            link: 'contrat-client', 

        },
        {
            id: 3,  
            label: "Réclamations",
            link: 'rendez-vous/reclamation-client', 

        },
   
       
    
       

    ],
    Commercial: [
        {
            id: 1,
            label: "Suivi Rendez-vous",
            link: 'rendez-vous/rendez-commerical',

        },
        
      
        {
            id: 2,
            label: "Contrat",
            link: 'contrat/contrat-commercial',

        },

        {
            id: 3,
            label: "Contrat terminé",
            link: 'contrat-terminé',

        },

         {
            id: 4,
            label: "Suivi  réclamations",
            link: 'rendez-vous/reclamation-commercial',

        },

     
        

    ],

   
};
