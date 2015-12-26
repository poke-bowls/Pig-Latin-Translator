//Strings: split => slice
//split = split input into an array of substrings (each word), return new array
//slice = extract part to append 'ay' to, push to array
//Array:

 var eggs = 'I like steak and eggs for breakfast';

 function translator( string ) {
     var vowels = [ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' ];
     var pigLatin = [];
     //split string into an array of substrings (each word is a string)
     var words = string.split( ' ' );

     console.log(words);

     for ( var i = 0; i < words.length; i++ ) {
        //if the string at index i of array words is longer than 1
         if( words[i].length > 1 ){
            //walk through the vowels and the string to find the first vowel
            outerloop:
            for ( var k = 0; k < words[i].length; k++) {
                for ( var j = 0; j < vowels.length; j++ ) {
                    if ( words[i].charAt(k) === vowels[j] ) {
                        console.log(words[i].charAt(k));
                        var newString = words[i].substring(words[i].indexOf(words[i].charAt(k))) + words[i].substring( 0, words[i].indexOf(words[i].charAt(k)) ) + "ay";
                        pigLatin.push( newString );
                        break outerloop;
                    } else if ( words[i].charAt( 0 ) === vowels[j] ){
                      pigLatin.push(words[0] += 'ay');
                      break outerloop;
                    }
                }
            }
         }
     }
     return pigLatin.join(' ');
 }
 translator(eggs);