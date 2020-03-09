import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import Home from "../../components/Home";
import {GetMovies} from '../../actions/moviesAction';

const HomeContainer = (props) => {
    const {movies, getMovies} = props;
    const [filter, setFilter] = useState({
        page: 1,
        title: null,
        sortBy: null,
        category: null,
    });
    useEffect(() => {
        getMovies(filter);
        setFilter({...filter, page: filter.page + 1});
    }, []);
    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            if(movies.status === 'success'){
                getMovies(filter);
                setFilter({...filter, page: filter.page + 1});
            }
        }
    };
    const handleChangeSearch = (e) => {
        setFilter({
            page: filter.page,
            title: e.target.value,
            sortBy: null,
            category: null,
        })
    }
    const handleSubmitSearch = (e) => {
        filter.title && console.log(filter);
        //search
    }
    const handleChangeCategory = (newValue) => {
        setFilter({
            page: 1,
            title: null,
            sortBy: filter.sortBy,
            category: newValue.value,
        })
        console.log({
            page: 1,
            title: null,
            sortBy: filter.sortBy,
            category: newValue.value,
        });
        //getMovies({...filter, page: 1});
    }
    const handleChangeSort = (newValue) => {
        setFilter({
            page: 1,
            title: null,
            sortBy: newValue.value,
            category: filter.category,
        })
        console.log(filter);
        //getMovies({...filter, page: 1});
    }
    return (
        <div>
            <Home  
                    movies={movies}
                    handleChangeSearch={handleChangeSearch}
                    handleSubmitSearch={handleSubmitSearch}
                    handleChangeCategory={handleChangeCategory}
                    handleChangeSort={handleChangeSort}
            />
        </div>
    )
}
const mapStateToProps = (state) => (
{
    "user": state.user,
    "movies": state.movies,
});
const mapDispatchToProps = {
    "getMovies" : GetMovies,
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);