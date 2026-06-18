const USER_API_URL = "https://randomuser.me/api/?results=7";

export async function getUsers() {
  try {
    const userResponse = await fetch(USER_API_URL);
    if (!userResponse.ok) {
      throw new Error("User not found");
    }

    const users = await userResponse.json();
    console.log(users);

    const mainUser = getMainUser(users);
    console.log(mainUser);

    const friends = getFriends(users);
    console.log(friends);

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
  const picture = users.results[0].picture.large;

  const mainUser = { firstName, lastName, city, state, picture };
  return mainUser;
}

function getFriends(users) {
  const friends = [];
  for (let i = 1; i < users.results.length; i++) {
    const result = users.results[i];

    const firstName = result.name.first;
    const lastName = result.name.last;
    const picture = result.picture.large;

    const friend = { firstName, lastName, picture };
    friends.push(friend);
  }
  return friends;
}
