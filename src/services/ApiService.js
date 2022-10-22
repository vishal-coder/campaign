export default async function getUserData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    //  console.log(response);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("error");
  }
}
