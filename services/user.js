const USER_API_URL = "https://randomuser.me/api/?results=7";

async function getUsers() {
  try {
    const userResponse = await fetch(USER_API_URL);
    if (!userResponse.ok) {
      throw new Error("User not found");
    }

    const users = await userResponse.json();
    console.log(users);

    const mainUser = getMainUser(users);
    console.log(mainUser);

    return users;
  } catch (error) {
    console.error("Error fetching users:", error.message);
    return null;
  }
}

function getMainUser(users) {
  const firstName = users.results[0].name.first;
  const lastName = users.results[0].name.last;
  const city = users.results[0].location.city;
  const state = users.results[0].location.state;

  const mainUser = { firstName, lastName, city, state };
  return mainUser;
}
