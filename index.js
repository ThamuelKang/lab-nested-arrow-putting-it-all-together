function createLoginTracker(userInfo) {
  userInfo.name
  userInfo.password

  let attemptCount = 0

  passwordCheck = (passwordAttempt) => {
    attemptCount++

    if (passwordAttempt === userInfo.password && attemptCount <= 3) {
      return console.log('Login successful')
    } else if (attemptCount < 3) {
      return console.log(`Attempt ${attemptCount}: Login failed `)
    } else {
      return console.log(`Account locked due to too many failed login attempts`)
    }
  }
}





module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};