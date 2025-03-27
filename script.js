function getAllUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response is out of function");
      }
      return response.json();
    })
    .then((users) => {
      const usersContainer = document.getElementById("users");
      usersContainer.innerHTML = "";

      users.forEach((users) => {
        let content = `<div id = "userCard">
        <h3>${user.name}</h3>
        <h4>${user.username}</h4>
        <h3>${user.email}</h3>
        </div>`;
        usersContainer.innerHTML += content;
      });
    })
    .catch((e) => {
      alert("error" + e);
    });
}

getAllUsers();
