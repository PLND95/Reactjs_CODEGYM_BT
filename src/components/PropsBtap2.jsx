import React from "react";
import '../css/PropsBtap2.css';
const students = [

    {
        id: 'id',
        name: 'name',
        age: 'age',
        address: 'address'

    },


    {
        id: "1",
        name: "Nguyễn Văn A",
        age: "30",
        address: "Hà Nội",
    }
]

const StudentInfor = () => {
    return (
        <div>
            {students.map(student => (
                <tr>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.address}</td>
                </tr>
            ))}
        </div>
    )
}

export default StudentInfor;

// const StudentInfor = ({student}) => {
//     return (
//         <div>
//             <tr>
//                     <td>{student.id}</td>
//                     <td>{student.name}</td>
//                     <td>{student.age}</td>
//                     <td>{student.address}</td>
//             </tr>
//         </div>
//     )
// }

// const App1 = () => {
//     return (
//         <div>

//                         {(students.map(student=> (
//                             <StudentInfor
//                             student = {student}
//                             />

//                         )))}


//         </div>
//     )
// }

// export default App1
