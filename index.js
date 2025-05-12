function createLoginTracker(userInfo) {
  
  let attemptCount = 0

  return function (passwordAttempt) {
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