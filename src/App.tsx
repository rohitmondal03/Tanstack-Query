import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios';

import Card from './components/Card'
import './App.css'


function App() {
  const [value, setValue] = useState<string>();

  const { data, error, isLoading } = useQuery({
    queryKey: ["test"],
    staleTime: 2000,
    refetchOnWindowFocus: false,
    queryFn: () => fetch("https://dummyjson.com/products")
      .then((resp) => resp.json()),
  })

  const mutation = useMutation({
    mutationFn: (product) => {
      return axios.post(`https://dummyjson.com/products/1`, product)
    }
  })



  if (error) {
    return <h1>{error.message}</h1>
  }
  else if (isLoading) {
    return <h3>Loading...</h3>
  }

  return (
    <>
      <form onSubmit={() => {
        // @ts-ignore
        mutation.mutate({title: 'Updated Product'})
      }}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <div className='container'>
        {data.products?.map((items: todos) => (
          <Card key={items.id} {...items} />
        ))}
      </div>
    </>
  )
}

export default App
