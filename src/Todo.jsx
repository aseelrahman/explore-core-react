// export default function ToDO({task, isDone}){
//     return(
//         <>
//             <li>Task: {task}</li>
//         </>
//     )
// }

// export default function ToDo({task, isDone}){
//     if(isDone === true){
//         return <li>Done: {task}</li>
//     }
//     else{
//         return <li>Pending: {task}</li>
//     }
// }

// export default function ToDo({task, isDone, time = 0}){
//     if(isDone === true){
//         return <li>Done: {task} Duration: {time}</li>
//     }
//     else{
//         return <li>To be done: {task}</li>
//     }
// }

// conditional rendering: 3 ternary
// condition ? true : false

// export default function ToDo({task, isDone, time = 0}){
//     return isDone ?
//      <li>Done: {task} Time: {time}</li> 
//      : <li>Not Done: {task}</li> 
// }

// // conditional rendering : 4 &&

// export default function ToDo({task, isDone, time = 0}){
//     return isDone && <li>Done Task: {task} time: {time}</li>
// }


// conditional rendering : 5 ||

// export default function ToDo({task, isDone, time = 0}){
//     return isDone || <li>Not Done Task: {task} time: {time}</li>
// }

// conditional rendering: 6 use variable

export default function ToDo({task, isDone}){
    let listItem;

    if(isDone === true){
        listItem = <li>Done: {task}</li>
    }
    else{
        listItem = <li>Pending: {task}</li>
    }

    return listItem
}