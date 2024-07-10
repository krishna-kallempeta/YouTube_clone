import '../SearchBar/SearchBar.css'
import {FaSearch} from 'react-icons/fa'
import {BsMicFill} from 'react-icons/bs'
import SearchList from './SearchList'
import { useState } from 'react'

function SearchBar(){
    const [searchQuery,setSearchQuery] = useState();

    const [searchListA,setSearchListA]=useState(false);

    const TitleArray = ["video1", "cid2","animation","sljf","appl"].filter(q=>q.includes(searchQuery))
    return(
        <>
        <div className="SearchBar_Container">
            <div className='SearchBar_Container2'>
                <div className='Search_div'>
                    <input type="text" className="iBox_SearchBar" placeholder='Search'
                    onChange={e=>setSearchQuery(e.target.value)}
                    value={searchQuery}
                    onClick={e=>setSearchListA(true)}/>
                    <FaSearch className='searchIcon_SearchBar'
                    onClick={e=>setSearchListA(false)}/>
                    <BsMicFill className='Mic_SearchBar'/>
                    {
                       searchQuery&& 
                       searchListA &&
                       <SearchList 
                       setSearchQuery={setSearchQuery}
                       TitleArray={TitleArray}/>

                    }
                     
                </div>
            </div>
        </div>
        
        </>
    )
}
export default SearchBar