import './Card.css'

function Card(props) {
    //jsx
    return (
        <div class="profile-card">
        <h3>{ props.student.name }</h3>
        <p>Front-end Developer</p>
        <p>Location: { props.city }</p>
        <p>Email: { props.student.email }</p>
      </div>
    )
}

export default Card