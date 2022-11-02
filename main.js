


function createGame(player1, hour, player2){
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Logo Suiça">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Logo Camarões">
    </li>
    `
}

function createCard(date, day, games) {
   return  `
   <div class="card">
        <h2>${date} <span>${day}</span></h2>
            <ul>
            ${games}
            </ul>
    </div>
   `
}

document.querySelector('#app').innerHTML = `
    <header>
    <img src="./assets/logo.svg" alt="logo pagina">
    </header>
    <main id="cards">
        ${createCard('24/11', 'quinta', createGame('switzerland', '16:00', 'cameroon') + createGame('portugal', '16:00', 'ghana') + createGame('brazil', '16:00', 'serbia'))}
        ${createCard('28/11', 'segunda', createGame('southkorea', '13:00', 'ghana') + createGame('brazil', '16:00', 'switzerland') + createGame('portugal', '16:00', 'urugay'))}
    </main>
    `