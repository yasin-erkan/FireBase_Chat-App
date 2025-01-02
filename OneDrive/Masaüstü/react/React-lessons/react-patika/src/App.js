import getData from "./getData";

async function fetchUserData() {
  const userId = 1;
  const data = await getData(userId);
  console.log(data);
}

fetchUserData();
