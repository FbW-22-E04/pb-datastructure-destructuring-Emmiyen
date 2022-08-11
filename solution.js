// * Declare the variables `fruit`, `vegetable`, `food`. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`). Use array destructuring assignment to complete this task.

const [fruit, vegetable, ...food] = [
    "Banana",
    "cucumber",
    "bread",
    "cakes",
    "pizza",
    ];
    console.log(fruit, vegetable, food);
    
    console.log(`--------------`);
    
    const dress = {
    fran: "witch",
    alan: "doctor",
    antonio: "pilot",
    };
    
    const { fran, alan, antonio } = dress;
    
    console.log(fran, alan, antonio);
    
    console.log(`--------------`);
    
    const band = {
    name: "Roxen",
    hit: "To phir aao",
    nationality: "Pakistani",
    genre: "Pop",
    };
    
    function data({ name, hit, nationality, genre }) {
    console.log(
    `${name} is a ${nationality} singer/songwriter and pianist. The musician sings ${genre} and their greatest hit is "${hit}"`
    );
    }
    
    data(band); 