import { useState, useEffect } from 'react'


function App() {
  const [starwars, setStarwars] = useState(null)
  useEffect(() => {
    getStarwars()
  },[])

  const getStarwars = async (searchTerm) => {
    const response = await fetch(
      `http swapi.dev/api/people/1/`
    );

    const data = await response.json();

    setStarwars(data);
  }
  console.log(starwars)
  return (
    <>
     {/* <StarwarsDisplay data ={data} /> */}
    </>
  )
}

export default App
