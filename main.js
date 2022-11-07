function createGame(player1, hour, player2) {
    return `
      <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}"/>
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}"/>
      </li>
    `
  }
  let delay = -0.4
  function createCard(date, day, games) {
    delay = delay + 0.4
    return `
      <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
      </div>
    `
  }
  
  document.querySelector("#cards").innerHTML =
    createCard(
      "21/11",
      "segunda",
      createGame("england", "10:00", "iran") +
        createGame("senegal", "13:00", "netherlands") +
        createGame("usa", "16:00", "wales")
    ) + 
    createCard(
        "22/11",
         "terça", 
      createGame("argentina", "07:00", "saudiArabia") + 
        createGame("denmark", "10:00", "tunisia") + 
        createGame("mexico", "13:00", "poland")) + 
    createCard(
        "23/11",
        "quarta", 
    createGame("morocco", "07:00", "croatia") + 
        createGame("germany", "10:00", "japan") + 
        createGame("spain", "13:00", "costaRica") 
    ) +
    createCard(
      "24/11",
      "quinta",
      createGame("switzerland", "07:00", "cameroon") +
        createGame("portugal", "13:00", "ghana") +
        createGame("brazil", "16:00", "serbia")
    ) +
    createCard(
      "28/11",
      "segunda",
      createGame("south-korea", "10:00", "ghana") +
        createGame("brazil", "13:00", "switzerland") +
        createGame("portugal", "13:00", "uruguay")
    ) +
    createCard(
      "25/12", 
      "sexta", 
      createGame("wales", "07:00", "iran") + 
        createGame("qatar", "10:00", "senegal") + 
        createGame("netherlands", "13:00", "ecuador"))