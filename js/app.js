// get select button

document.getElementById('select-messi').addEventListener('click', function () {

    getPlayerName('player-name-1');

    // disable button
    document.getElementById('select-messi').disabled = 'true';
})
document.getElementById('select-neymar').addEventListener('click', function () {

    getPlayerName('player-name-2');

    // disable button
    document.getElementById('select-neymar').disabled = 'true';
})
document.getElementById('slect-mbappe').addEventListener('click', function () {

    getPlayerName('player-name-3');

    // disable button
    document.getElementById('select-mbappe').disabled = 'true';
})
document.getElementById('select-machado').addEventListener('click', function () {

    getPlayerName('player-name-4');
    // disable button
    document.getElementById('select-machado').disabled = 'true';
})
document.getElementById('select-ramos').addEventListener('click', function () {

    getPlayerName('player-name-5');

    // disable button
    document.getElementById('select-ramos').disabled = 'true';
})
document.getElementById('select-sanches').addEventListener('click', function () {

    getPlayerName('player-name-6');

    // disable button
    document.getElementById('select-sanches').disabled = 'true';
})
document.getElementById('select-ronaldo').addEventListener('click', function () {

    getPlayerName('player-name-9');

    // disable button
    document.getElementById('select-ronaldo').disabled = 'true';
})
document.getElementById('select-salah').addEventListener('click', function () {

    getPlayerName('player-name-10');

    // disable button
    document.getElementById('select-salah').disabled = 'true';
})
document.getElementById('select-villa').addEventListener('click', function () {

    getPlayerName('player-name-11');

    // disable button
    document.getElementById('select-villa').disabled = 'true';
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


// budget  section

document.getElementById('calculate').addEventListener('click', function () {

    const elements = document.querySelectorAll('#inputPlayer li');
    
    for (let element of elements) {
        const value = elements.length;

        const inputField = document.getElementById('per-player-input');
        const inputValueString = inputField.value;
        const inputValue = parseFloat(inputValueString);

        // selected player total expense

        const playerTotalCost = value * inputValue;
        
        //  set total expense

        const totalCost = document.getElementById('total-cost');
        totalCost.innerText = playerTotalCost;

    }

})


document.getElementById('calculate-total').addEventListener('click', function(){

    // selected player cost 
    const allPlayerExpense = document.getElementById('total-cost');
    const totalExpenseString = allPlayerExpense.innerText;
    const totalExpenseFloat = parseFloat(totalExpenseString);

    // manager cost
    const managerCost = document.getElementById('manager-cost');
    const managerCostString = managerCost.value;
    const managerCostFloat = parseFloat(managerCostString);

    // coach cost

    const coachCost = document.getElementById('coach-cost');
    const coachCostString = coachCost.value;
    const coachCostsFloat = parseFloat(coachCostString)


    // all cost addition section 

    const allCost = totalExpenseFloat + managerCostFloat + coachCostsFloat;

    console.log(allCost);

    const total = document.getElementById('total');

     total.innerText = allCost;

})

