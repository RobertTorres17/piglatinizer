$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
    $("#button").click(function() {
     let word =  $(".input").val();
    $(".output").text(translate(word) );

};
function translate(word){
    if(checkVowel(word) ) {
        return( word + "ay")
    }
    

}
    function checkVowel(input){
        // Checks the vowels
    input = input.toLowerCase();
    let vowels = ["a","i","e","o","u"]

    }

