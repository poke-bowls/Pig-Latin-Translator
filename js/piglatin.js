//Strings: split => slice
//split = split input into an array of substrings (each word), return new array
//slice = extract part to append 'ay' to, push to array
//Array:

 var eggs = 'I like steak and eggs for breakfast';

 function translator( string ) {
     var vowels = [ 'a', 'e', 'i', 'o', 'u' ];
     var pigLatin = [];
     //split string into an array of substrings (each word is a string)
     var words = string.split( ' ' );

     console.log(words);

     for ( var i = 0; i < words.length; i++ ) {
      var firstLetter = words[i].charAt( 0 ).toLowerCase();
        for(var j = 0; j < vowels.length; j++) {

           //if the first letter of the word at index i of array words is a vowel

           if( firstLetter === vowels[j]) {

             pigLatin.push(words[i] += '-ay');

           //if the string at index i of array words is longer than 1

           } else if ( words[i].length > 1 ) {

           //walk through the vowels and the string to find the first vowel

           //walk through the string (the word at index i of array words)
           for ( var k = 0; k < words[i].length; k++) {
             if ( words[i].charAt(k) === vowels[j] ) {

               var newString = words[i].substring(words[i].indexOf(words[i].charAt(k))) + words[i].substring( 0, words[i].indexOf(words[i].charAt(k)) ) + "-ay";

               pigLatin.push( newString );
        }
        }
      }
    }
  }
     return pigLatin.join(' ');
 }
 translator(eggs);