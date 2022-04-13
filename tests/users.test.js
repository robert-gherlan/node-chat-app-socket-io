const {
  addUser,
  getUser,
  getUsersInRoom,
  removeUser
} = require('../src/utils/users')

const userOne = { id: 1, username: 'username', room: 'room' }
const userTwo = { id: 2, username: 'username1', room: 'room' }
const userThree = { id: 3, username: 'username2', room: 'room1' }

beforeEach(() => {
  addUser(userOne)
  addUser(userTwo)
  addUser(userThree)
})

test('Should add user', () => {
  const user = { id: 4, username: 'username', room: 'room' }
  const addedUser = addUser(user)

  expect(addedUser).not.toBeNull()
})

test('Should get user', () => {
  const user = getUser(userOne.id)
  expect(user).not.toBeNull()
})

test('Should remove user', () => {
  const user = removeUser(userOne.id)
  expect(user).not.toBeNull()
})

test('Should get all users from room', () => {
  const users = getUsersInRoom('room')
  expect(users.length).toBe(2)
})
