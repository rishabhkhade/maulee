import React from 'react'
import "./Error.scss"
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <>
      <div class="error_parent parent">
        <div class="error_cont cont">
          <h1>404</h1>
          <h1>Page Not Found</h1>
          <Link to="/" class="btn2">
            <div class="btn_text">
            Back to Home
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Error
