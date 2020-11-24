const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise(resolve => {
    const arr = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
    resolve(arr);
  });
};

const logger = arr => console.table(arr);

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
