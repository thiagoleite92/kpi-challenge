const validateName = (name) => {
  const NAME_MIN_LENGTH = 12
  const NAME_MAX_LENGTH = 25
  if (name.length < NAME_MIN_LENGTH && name.length < NAME_MAX_LENGTH) {
    return false
  }

  return true
}

const validateEmail = (email) => {
  const emailTester = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i

  if (!emailTester.test(email)) return false

  return true
}

export {
  validateName,
  validateEmail
}
