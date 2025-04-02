document.addEventListener("DOMContentLoaded", function () {
  const usersContainer = document.getElementById("users");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      users.forEach((user) => {
        let content = `
      <div class="userCard" data-id=${user.id}>
      <h3>${user.name}</h3>
        <h4>${user.username}</h4>
        <h3>${user.email}</h3>
        <button class="toggleInformation">View User Information"</button>
        <div class="informationList" style="display: none"></div>
        </div>`;
        usersContainer.innerHTML += content;
      });
      initToggleInfo();
    })
    .catch((error) => console.error("Error fetching data", error));
});

//toggle city, phone & company name
function initToggleInfo() {
  const userCards = document.querySelectorAll(".userCard");

  userCards.forEach((userCard) => {
    const toggleButton = userCard.querySelector(".toggleInformation");
    const informationList = userCard.querySelector(".informationList");

    toggleButton.addEventListener("click", function () {
      const userId = userCard.getAttribute("data-id");
      fetchUserInfo(userId, informationList);
      informationList.style.display =
        informationList.style.display === "none" ? "block" : "none";
    });
  });
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
