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
  const user = { id: 4, username: ' username1 ', room: 'room ' }
  const addedUser = addUser(user)

  expect(addedUser.user).not.toBeNull()
})

test('Should not add invalid user', () => {
  const user = { id: 4, username: ' ', room: ' ' }
  const addedUser = addUser(user)

  expect(addedUser.error).not.toBeNull()
})

test('Should not add duplicate username in same room', () => {
  const user = { id: 4, username: 'username', room: 'room' }
  const addedUser = addUser(user)

  expect(addedUser.error).not.toBeNull()
})

test('Should get user existing user', () => {
  const user = getUser(userOne.id)
  expect(user).not.toBeNull()
})

test('Should not get non existing user', () => {
  const user = getUser(1234567)
  expect(user).toBeUndefined()
})

test('Should remove existing user', () => {
  const user = removeUser(userOne.id)
  expect(user).not.toBeNull()
})

test('Should not remove non existing user', () => {
  const user = removeUser(1234567)
  expect(user).toBeUndefined()
})

test('Should get two users from room "room"', () => {
  const users = getUsersInRoom('room')
  expect(users).toHaveLength(2)
})

test('Should get one user from room "room1"', () => {
  const users = getUsersInRoom('room1')
  expect(users).toHaveLength(1)
})

test('Should return no users for non existing room', () => {
  const users = getUsersInRoom('non-existing-room')
  expect(users).toHaveLength(0)
})
