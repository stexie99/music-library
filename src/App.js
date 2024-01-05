import {useState, useEffect, Suspense, useRef } from 'react'
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import Spinner from './components/Spinner';
import { createResource as fetchData } from './helper'
import { DataContext } from './context/DataContext'
import { SearchContext } from './context/SearchContext'


function App() {
    let [message, setMessage] = useState('Seach for music')
    let [search, setSearch] = useState('')
    let [data, setData] = useState(null)
    let searchInput = useRef('')

    const API_URL = 'https://itunes.apple.com/search?term='
    
    useEffect(() => {
        if (search) {
            setData(fetchData(search))
        }
    }, [search])

    const handleSearch = (e, term) => {
        e.preventDefault();
        setData(fetchData(term))
    }

    const renderGallery = () => {
        if(data){
            return (
                <Suspense fallback={<Spinner />}>
                  <Gallery/>
                </Suspense>
            )
        }
    }
    
    return (
        <div className="App">
            <SearchContext.Provider value={{term: searchInput, handleSearch: handleSearch}}>
              <SearchBar />
            </SearchContext.Provider>
            {message}
            <DataContext.Provider value={data}>
              {renderGallery()}
            </DataContext.Provider>
            
        </div>
    )
    
}
export default App;




