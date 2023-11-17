export default function Card({ price, title, description, id }: todos) {
  return (
    <div className="card" key={id}>
      <h2>{id + ". "}{title}</h2>
      <p>Id: {id}</p>
      <p>Description: {description}</p>
      <p>Price: Rs.{price}</p>
    </div>
  )
}
