// import db from '../firebase';

import axios from 'axios';

export async function createUser(user) {
  fetch(`${import.meta.env.VITE_APP_DATABASE_URL}/users.json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  // db.ref('/users').push({ user: 'max' });
}

export async function getUsers() {
  const users = [];
  const { data } = await axios.get(
    `${import.meta.env.VITE_APP_DATABASE_URL}/users.json`
  );

  for (const id in data) {
    users.push({
      id,
      userName: data[id].userName,
      userAge: data[id].userAge,
      rating: data[id].rating,
      how: data[id].how,
      referrer: data[id].referrer,
    });
  }

  return users;
}
