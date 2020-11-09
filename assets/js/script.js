$(function(){ //
    //$('elementCiblé').css('propriété','valeur'); 
    $("#green").mouseover(function(){ // déclaration de la fonction qui permet d'afficher en vert
        $("#text").css("color", "green");
        })
    $("#red").mouseover(function(){ // déclaration de la fonction qui permet d'afficher en rouge
        $("#text").css("color", "red");
        })
    $("#blue").mouseover(function(){ // déclaration de la fonction qui permet d'afficher en bleu
        $("#text").css("color", "blue");
        })
    $("#green, #blue, #red").mouseout(function(){ // déclaration de la fonction qui permet de remettre le texte en noir lorsqu'on retire la souris
        $("#text").css("color", "black");
        })
});