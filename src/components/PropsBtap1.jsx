import React from 'react'


const Alert = (props) => {
  return (
    <div className='alert alert-warning' role="alert"> 
        {props.text}
    </div>
  )
}

export default Alert;

// render o ben file index.js
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//     <Alert
//        text= "Cảnh báo ! Tài nguyên của bạn vừa truy cập không tồn tại"/>
//  )
 