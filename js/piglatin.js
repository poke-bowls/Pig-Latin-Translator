var random = 'Feel the rhythm of the yucky yellow xylophone brah';

function translator( input ) {
   var vowels = [ 'a', 'e', 'i', 'o', 'u', 'y' ];
   var pigLatin = [];
   //split string into an array of substrings (each word is a string)

   console.log(words);
   if ( typeof input !== 'string' ) {
    throw new TypeError( "Input must be a string!" );

   }
   var words = input.split( ' ' );

   for ( var i = 0; i < words.length; i++ ) {
      //walk through the vowels and the string to find the first vowel
      outerloop:
      for ( var k = 0; k < words[i].length; k++) {
        var firstLetter = words[i].charAt( 0 ).toLowerCase();
        for ( var j = 0; j < vowels.length; j++ ) {
          if( firstLetter === vowels[j] ){
            pigLatin.push( words[i] += '-ay' );
            break outerloop;
          } else if ( words[i].charAt(k) === vowels[j] ) {
            var newString = words[i].substring(words[i].indexOf(words[i].charAt(k))) + "-" + words[i].substring( 0, words[i].indexOf(words[i].charAt(k)) ) + "ay";
            pigLatin.push( newString );
            break outerloop;
          } else if ( words[i].charAt( 0 ) === 'y' ) {
              vowels = [ 'a', 'e', 'i', 'o', 'u' ];
              var special = words[i].substring(words[i].indexOf(words[i].charAt(k + 1))) + "-" + words[i].substring( 0, words[i].indexOf(words[i].charAt(k)) ) + "yay";
              pigLatin.push( special );
              break outerloop;
          }
        }
      }
    }
   return pigLatin.join(' ');
}
translator( random );