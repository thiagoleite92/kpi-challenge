import React from 'react'

// eslint-disable-next-line react/prop-types
function Logo ({ home }) {
  return (
    <svg width='36' height='36' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg' className={home ? 'main-logo' : null}>
      <path fillRule='evenodd' clipRule='evenodd' d='M23.3565 0.365261L34.4108 11.6429L22.3974 23.899L22.3986 23.9003L22.2898 24.0113L28.8085 30.6618L23.8731 35.6969L12.0065 24.2546L24.7298 11.2743L23.3894 9.90676L10.6283 22.9257L5.29386 17.782L23.3565 0.365261ZM30.149 29.2942L35.0269 24.3177L35.0269 13.7508L24.9701 24.0108L30.149 29.2942ZM2.65332 17.7806L21.0933 0L10.2592 4.59422e-08L0 10.4664L7.01901e-07 25.2681L10.2592 35.7346L21.2701 35.7345L2.65989 17.7898L2.66135 17.7884L2.65332 17.7806Z' fill='#0067AC' />
    </svg>
  )
}

export default Logo
