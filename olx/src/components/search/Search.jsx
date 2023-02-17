import React from 'react';
import { FiSearch } from 'react-icons/fi';
import Container from '../../utils/Container';
import './Search.scss'

const Search = () => {
    return (
        <section className='search'>
            <Container>
                <form>
                    <div className="search-wrapper">
                        <div>
                            <FiSearch/>
                            <input   className='search-imput' type="text" placeholder="1 038 505 e‘lonlar yoningizda" />
                        </div>
                    <button className='search-btn'><FiSearch/>Qiqiruv</button>
                    </div>
                </form>
            </Container>
        </section>
    );
};

export default Search;