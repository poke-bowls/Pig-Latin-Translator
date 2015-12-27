var eggs = 'I like steak and eggs for breakfast';

function translator( string ) {
   var vowels = [ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' ];
   var pigLatin = [];
   //split string into an array of substrings (each word is a string)
   var words = string.split( ' ' );

   console.log(words);

   for ( var i = 0; i < words.length; i++ ) {
      //walk through the vowels and the string to find the first vowel
      outerloop:
      for ( var k = 0; k < words[i].length; k++) {
        var firstLetter = words[i].charAt( 0 ).toLowerCase();
        for ( var j = 0; j < vowels.length; j++ ) {
          if( firstLetter === vowels[j] && words[i].length > 1 ){
            pigLatin.push( words[i] += '-ay' );
            break outerloop;
          } else if ( firstLetter === vowels[j] && words[i].length === 1 ) {
            pigLatin.push( words[i] += '-ay' );
            break outerloop;
          } else if ( words[i].charAt(k) === vowels[j] ) {
              console.log(words[i].charAt(k));
              var newString = words[i].substring(words[i].indexOf(words[i].charAt(k))) + "-" + words[i].substring( 0, words[i].indexOf(words[i].charAt(k)) ) + "ay";
              pigLatin.push( newString );
              break outerloop;
          } else if ( words[i].charAt( 0 ) === vowels[j] ){
            pigLatin.push(words[0] += 'ay');
            break outerloop;
          }
        }
      }
    }
   return pigLatin.join(' ');
}
translator(eggs);