import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Search.css';

const Search = ({ search, setSearch }) => {

    const onChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <form className='search'>
            <input 
                type='text'
                className='controlled-search'
                placeholder='Search vegan products'
                value={search}
                onChange={onChange}
            >
            </input>
        </form>
    ) 
}

export default Search;

Search.propTypes = {
    setSearch: PropTypes.func
}
