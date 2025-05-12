function createLoginTracker(userInfo) {

  let attemptCount = 0

  return function (passwordAttempt) {
    attemptCount++

    if (passwordAttempt === userInfo.password && attemptCount <= 3) {
      return 'Login successful'
    } else if (attemptCount < 3) {
      return `Attempt ${attemptCount}: Login failed`
    } else if (attemptCount === 3) {
      return `Account locked due to too many failed login attempts`
    }
  }
}

// const user = {
//   name: 'Samuel',
//   password: 'Ducks'
// }

// const login = createLoginTracker(user)
// console.log(login("ducks"))
// console.log(login("12321321"))
// console.log(login("Dducks"))



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};