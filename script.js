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
});
