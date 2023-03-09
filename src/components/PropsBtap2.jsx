import React from "react";
import '../css/PropsBtap2.css';
const students = [




    {
        id: "1",
        name: "Nguyễn Văn A",
        age: "30",
        address: "Hà Nội",
    },
    {
        id: "2",
        name: "Long",
        age: "30",
        address: "nha trang"
    }
]

// const StudentInfor = () => {
//     return (
//         <div>
//             {students.map(student => (
//                 <tr>
//                     <td>{student.id}</td>
//                     <td>{student.name}</td>
//                     <td>{student.age}</td>
//                     <td>{student.address}</td>
//                 </tr>
//             ))}
//         </div>
//     )
// }

// export default StudentInfor;

const StudentInfor = ({student}) => {
    return (

            <tr>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.address}</td>
            </tr>

    );
}

const App1 = () => {
    return (


    <table>
      <thead>
        <tr>
          <td>id</td>
          <td>name</td>
          <td>age</td>
          <td>address</td>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <StudentInfor student={student} />
        ))}
      </tbody>
    </table>
    );
}

export default App1
