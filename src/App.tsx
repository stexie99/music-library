import {useState, useEffect} from 'react'
import Gallery from './components/Gallery.tsx';
import SearchBar from './components/SearchBar.tsx';
function App() {
  let [message, setMessage] = useState('Seach for music')
  let [search, setSearch] = useState('')
  let [data, setData] = useState([])
  const API_URL = 'https://itunes.apple.com/search?term='
  useEffect(()=>{
    if(search){
    const fetchData = async () => {
      document.title = `${search} music`
      const response = await fetch(API_URL + search)
      const resData = await response.json()
      if(resData.results.length > 0){
        setData(resData.results)
      }else{
        setMessage('Not Found')
      }
    }
    fetchData()
    }
  }, [search])
  const handleSearch = (e: any, term: string) => {
    e.preventDefault();
    setSearch(term)
  }
  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch}/>
      {message}
      <Gallery data={data}/>
    </div>
  );
}
export default App;




