// get select button

document.getElementById('select-messi').addEventListener('click', function () {

    getPlayerName('player-name-1');

    // DisableSelectedButton('select-messi');


})
document.getElementById('select-neymar').addEventListener('click', function () {

    getPlayerName('player-name-2');

})
document.getElementById('slect-mbappe').addEventListener('click', function () {

    getPlayerName('player-name-3');
})
document.getElementById('select-machado').addEventListener('click', function () {

    getPlayerName('player-name-4');
})
document.getElementById('select-ramos').addEventListener('click', function () {

    getPlayerName('player-name-5');
})
document.getElementById('select-sanches').addEventListener('click', function () {

    getPlayerName('player-name-6');
})

// create function to get player name

function getPlayerName(nameID) {
    const playerName = document.getElementById(nameID);
    const playerNameText = playerName.innerText;

    const playerList = document.querySelectorAll('#inputPlayer li');
    const playerListLength = playerList.length;
    
    if (playerListLength >= 5) {
        alert('dont select more than 5');
        return;
    }



    const orderList = document.getElementById('inputPlayer');
    const li = document.createElement('li');
    li.innerText = playerNameText;
    orderList.appendChild(li);

}

// // disable button function\\
// function DisableSelectedButton(btnId) {
//     const disableBtn = document.getElementById(btnId);
//     disableBtn.setAttribute('disabled', 'disabled')
// }


// budget  section

document.getElementById('calculate').addEventListener('click', function () {
    const inputField = document.getElementById('per-player-input');
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);

    const perPlayerExpense = inputValue;


    


})






function myFunction() {
    document.getElementById("inputPlayer").innerText;
    
  }

const myLi = myFunction();
console.log(myLi);