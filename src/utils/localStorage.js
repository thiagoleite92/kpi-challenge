function saveUserInfo ({ name, email }) {
  console.log('oi')
  const user = { name, email }
  localStorage.setItem('user', JSON.stringify(user))
}

export {
  saveUserInfo
}
