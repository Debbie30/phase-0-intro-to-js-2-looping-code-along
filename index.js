// Code your solutions in this file
function writeCards(names, eventName) {

    const messages = [];

    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
      }
      
      return messages;

}

const names = ["Guadalupe", "Ollie", "Aki"];
const eventName = "birthday";

const thankYouMessages = writeCards(names, eventName);
console.log(thankYouMessages);

function countDown(){
    for (let countDown = 10; countDown >= 0; countDown--){
        console.log(countDown);
    }


}