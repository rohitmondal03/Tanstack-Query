export default function Card({ completed, title, userId, id }: todos) {
  return (
    <div className="card" key={id}>
      <h2>{id + ". "}{title}</h2>
      <p>UserId: {userId}</p>
      <p>Completed: {completed}</p>
    </div>
  )
}
