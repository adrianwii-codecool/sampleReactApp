import './Card.css'

// normal way: Card(props)
// with destructurization: Card({student, city})
function Card({student, city}) {
    //jsx
    return (
        <div className="profile-card">
        <h3>{ student.name }</h3>
        <p>Front-end Developer</p>
        <p>Location: { city }</p>
        <p>Email: { student.email }</p>
      </div>
    )
}

export default Card