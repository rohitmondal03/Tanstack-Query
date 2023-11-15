import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query'

import Card from './components/Card'
import './App.css'


function App() {
  const [value, setValue] = useState<string>();

  const { data, error, isLoading } = useQuery({
    queryFn: () => fetch("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => resp.json()),
    queryKey: ["test"],
  })

  // const { mutateAsync: addToDoMutataion } = useMutation({
  //   mutationFn: async (title) => {
  //     data.push({
  //       title: title,
  //       userId: uuid(),
  //       id: uuid(),
  //       completed: true,
  //     })
  //   }
  // });


  if (isLoading) {
    return <h3>Loading...</h3>
  }
  else if(error) {
    return <h1>{error.message}</h1>
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button>
          Add to do
        </button>
      </div>

      <div className='container'>
        {data?.map((items: todos) => (
          <Card key={items.id} {...items} />
        ))}
      </div>
    </>
  )
}

export default App
