import { useEffect, useState } from 'react'

const Quotes = () => {
  const [data, setData] = useState([])
  const [queryTerm, setQueryTerm] = useState('')
  useEffect(() => {
    console.log('Buscando al author', queryTerm)
    const url =
      'https://gist.githubusercontent.com/carmandomx/3d7ac5f15af87a587e1d25f5ba96de61/raw/e2d848b87c730a580077de221666343c15b1a243/gistfile1.txt'

    fetch(url)
      .then(res => res.json())
      .then(actualData => {
        console.log(actualData)
        setData(actualData.quotes)
      })
  }, [queryTerm])

  useEffect(() => {
    if (data.length > 0) {
      console.log(data)
    }
  }, [data])

  return (
    <div>
      <input value={queryTerm} onInput={e => setQueryTerm(e.target.value)} />
    </div>
  )
}

export default Quotes
