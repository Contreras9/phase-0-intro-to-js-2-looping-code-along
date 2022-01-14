// Code your solutions in this file

function writeCards(names, event) {
    const nameList = []

    for(let i = 0; i < names.length; i++) {
        nameList.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return nameList
}

function countDown() {
    let counter = 10
    while(counter >= 0) {
        console.log(counter--)
    }
    return counter
}