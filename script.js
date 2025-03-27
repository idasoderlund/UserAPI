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

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("togglefunction");

  toggleButton.addEventListener("click", function () {
    if (toggleButton.textContent === "Hide information") {
      toggleButton.textContent = "Show information";
      toggleButton.style.backgroundColor = "#C1D8C3";
    } else {
      toggleButton.textContent = "Hide information";
      toggleButton.style.backgroundColor = "#E50046";
    }
  });
});
