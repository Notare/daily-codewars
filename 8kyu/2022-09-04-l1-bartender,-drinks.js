// Complete the function that receives as input a string, and produces outputs according to the following table:
// Input 	Output
// "Jabroni" 	"Patron Tequila"
// "School Counselor" 	"Anything with Alcohol"
// "Programmer" 	"Hipster Craft Beer"
// "Bike Gang Member" 	"Moonshine"
// "Politician" 	"Your tax dollars"
// "Rapper" 	"Cristal"
// anything else 	"Beer"

// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

function getDrinkByProfession(param) {
    const correctParam = param.toLowerCase();

    if (correctParam === "jabroni") {
        return "Patron Tequila";
    } else if (correctParam === "school counselor") {
        return "Anything with Alcohol";
    } else if (correctParam === "programmer") {
        return "Hipster Craft Beer";
    } else if (correctParam === "bike gang member") {
        return "Moonshine";
    } else if (correctParam === "politician") {
        return "Your tax dollars";
    } else if (correctParam === "rapper") {
        return "Cristal";
    } else {
        return "Beer";
    }
}