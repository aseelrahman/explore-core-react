import './App.css'

export default function({singer}){
    return(
        <div>
            <h3>Name: {singer.name}</h3>
            <p>Age: {singer.age}</p>
        </div>
    )
}