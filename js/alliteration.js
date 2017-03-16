/**
 * Alliteration is defined as "the occurrence of the same letter or sound at the beginning of
 * adjacent or closely connected words." It's a stylistic literary device identified by the
 * repeated sound of the first consonant in a series of multiple words, or the repetition of
 * the same sounds or of the same kinds of sounds at the beginning of words or in stressed
 * syllables of a phrase. The first known use of the word to refer to a literary device occurred
 * around 1624. A simple example is "Peter Piper Picked a Peck of Pickled Peppers".
 *
 * Your program should emit the words from each sentence that form the group of alliteration.
 *
 * Example 1:
 * Peter Piper Picked Peck Pickled Peppers
 *
 * Example 2: Bugs Bunny likes to dance the slow and simple shuffle
 * should return: Bugs Bunny slow simple shuffle
 *
 * Example 3: You'll never put a better bit of butter on your knife
 * should return: better bit butter
 *
 * @param  {string} string Sentence to check for alliteration
 * @return {string}        The alliteration
 */

function checkAlliteration(string) {
  if (typeof string === 'string' || string instanceof String) {
    // Stop words that are common in English
    const stopWords = [
      'I',
      'a',
      'about',
      'an',
      'and',
      'are',
      'as',
      'at',
      'be',
      'by',
      'com',
      'for',
      'from',
      'how',
      'in',
      'is',
      'it',
      'of',
      'on',
      'or',
      'that',
      'the',
      'this',
      'to',
      'was',
      'what',
      'when',
      'where',
      'who',
      'will',
      'with',
      'the'
    ];
    let alliteration = [];
    let firstLetters = new Map();
    let alliterationVersion = [];

    // split the string
    alliteration = string.split(' ');
    // [Peter, Piper...]


    for (let value of alliteration) {
      let firstLetter = value.charAt(0);

      if (firstLetters.get(firstLetter)) {
        firstLetters.get(firstLetter).push(value);
      }
      else {
        firstLetters.set(firstLetter, [value]);
      }
    }

    firstLetters.forEach(function(value, key) {
      // Remove any stop words from map
      let checkSW = value.filter(val => !stopWords.includes(val));

      // Check the array is greater than 1
      if (checkSW.length > 1) {

        // loop through the values and add to a single array
        checkSW.forEach(function(value, key) {
          alliterationVersion.push(value)
        });
      }
    });

    if (alliterationVersion.length > 1) {
      return alert(alliterationVersion.join(' '));
    }
    else {
      return alert('No alliteration found');
    }
  }
  else {
   return alert('Sorry ' + string + ' is not a string');
  }
}

// excute each string

let ex1 = 'Peter Piper Picked a Peck of Pickled Peppers';
let ex2 = 'Bugs Bunny likes to dance the slow and simple shuffle';
let ex3 = 'You\'ll never put a better bit of butter on your knife';
let ex4 = ['1', '2']; // not a string ;)
let ex5 = 'I am who I say'; // not an alliteration ;)

checkAlliteration(ex1);
checkAlliteration(ex2);
checkAlliteration(ex3);
checkAlliteration(ex4);
checkAlliteration(ex5);
