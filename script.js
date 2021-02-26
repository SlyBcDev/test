$(document).ready(function() {
	
        
        $('#bouton').on('click', function() {
           var nom = $('#nom').val();
           //on lance ta fonction
            var retour = ta_fonction(nom);
            
            $('#retour').html('tu as entré : '+retour.lenom);
            
            
        });
});

const {test}= require('./config')

//donc ça c'est ta fonction dans ton JS, où tu récupères les datas et tu fais ta popotte ;)
function ta_fonction(nom) {
    
    //unobjet = {"lenom":nom}
    return(test());
}