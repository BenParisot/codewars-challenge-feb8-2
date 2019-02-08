// Friend or Foe?
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

const names = ['ben', 'peter', 'megan', 'erin', 'matt', 'bennet', 'john'];
const friends = [];
friendOrFoe();

function friendOrFoe() {
    for(let index = 0; index < names.length; index++) {
        const nameLength = names[index].length;
        if(nameLength === 4) {
            friends.push(names[index]);
        }   
        return friends;     
    }

    console.log('Your real friends are: ' + friends);

}