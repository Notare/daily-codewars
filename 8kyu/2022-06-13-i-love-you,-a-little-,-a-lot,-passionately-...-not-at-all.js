// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

//     I love you
//     a little
//     a lot
//     passionately
//     madly
//     not at all

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

function howMuchILoveYou(nbPetals) {
    const phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    for (let i = 0; i < phrases.length; i++) {
        if (nbPetals % 6 === 1) {
            return phrases[0];
        } else if (nbPetals % 6 === 2) {
            return phrases[1];
        } else if (nbPetals % 6 === 3) {
            return phrases[2];
        } else if (nbPetals % 6 === 4) {
            return phrases[3];
        } else if (nbPetals % 6 === 5) {
            return phrases[4];
        } else {
            return phrases[5];
        }
    }
}