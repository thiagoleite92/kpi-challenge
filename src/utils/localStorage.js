function saveUserInfo ({ name, email }) {
  const user = { name, email }
  localStorage.setItem('user', JSON.stringify(user))
}

function fetchUserInfo () {
  const user = JSON.parse(localStorage.getItem('user'))
  return user
}

function clearUserInfo () {
  localStorage.clear()
}

export {
  saveUserInfo,
  fetchUserInfo,
  clearUserInfo
}
