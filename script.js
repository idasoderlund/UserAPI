document.addEventListener("DOMContentLoaded", function () {
  const usersContainer = document.getElementById("users");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      users.forEach((user) => {
        let content = `
      <div class="userCard">
      <h3>${user.name}</h3>
        <h4>${user.username}</h4>
        <h3>${user.email}</h3>
        </div>`;
        usersContainer.innerHTML += content;
      });
    })
    .catch((error) => console.error("Error fetching data", error));
  initToggleInfo();
});

//toggle city, phone & company name
function initToggleInfo() {
  const toggleButton = document.getElementById("toggleInformation");
  const informationList = document.getElementById("informationList");
  if (toggleButton) {
    toggleButton.addEventListener("click", function () {
      const userCards = document.querySelectorAll(".userCard"); // Ändrat till querySelectorAll för att hämta alla kort

      userCards.forEach((userCard) => {
        userCard.addEventListener("click", function () {
          const userId = this.getAttribute("data-id");
          fetchUserInfo(userId, informationList);
        });
      });

      informationList.style.display =
        informationList.style.display === "none" ? "block" : "none";
    }); // Här stänger vi if-satsen
  } else {
    console.warn("Toggle button is not found, skipping toggle initialization.");
  }
}

function fetchUserInfo(userId, informationList) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((user) => {
      const userInfo = `
    <h4>City: ${user.address.city}</h4>
        <h4>Phone: ${user.phone}</h4>
        <h4>Company Name: ${user.company.name}</h4>
      `;
      informationList.innerHTML = userInfo;
    })
    .catch((error) => console.error("Error fetching user info", error));
}
