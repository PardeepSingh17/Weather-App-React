import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Alert from '@mui/material/Alert';
import "./SearchBox.css"
import { useState } from 'react';


export default function SearchBox({handleSearch , error , loading}) {
    let [city , setCity] = useState("")

    let handleChange = (event) => {
        setCity(event.target.value)
    }

    let handleSubmit = async (event) => {
        event.preventDefault()
        
        handleSearch(city.trim())

        setCity("")
    }

    

    return <div className='SearchBox'>
        <form action="" onSubmit={handleSubmit}>
            <h3>Search City for Weather</h3>
            <TextField id="city" label="City name" variant="outlined" required value={city} onChange={handleChange}/> <br /><br />
            <Button variant="contained" endIcon={<SearchIcon />} type='submit' disabled={loading}>
                {loading? "Loading..." : "Search"}
            </Button>
        </form>
        <div className='ErrorDiv'>
            {error? <Alert severity="error" sx={{width: "fit-content"}}>{error}</Alert> : null}
        </div>
        
    </div>
}