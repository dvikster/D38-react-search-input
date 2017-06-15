import React, {Component} from 'react';
import axios from 'axios';

export default class FilmsList extends Component{
    state ={
        films: [],
        loading: true,
        error:  null
    }

    componentDidMount(){
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=2cdce3bbe05c745f380ca0af5874a2d8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
            .then(result =>{
                this.setState({
                    films: result.data.results,
                    loading: false,
                    error:  null
                });
            })
            .catch(errormes =>{
                this.setState({
                    loading: false,
                    error:  errormes
                });
            })
    }

    renderLoading(){
        return(
            <div>Loading....</div>
        )
    }

    renderError(){
        return(
            <div>Error....{this.state.error.message}</div>
        )
    }

    renderFilms(){
        const {error, films} = this.state;
        if(error){
            return this.renderError;
        }
        return(
            <div className="films-container">
                {films.map(films =>
                    <div className="item" key={films.id} >
                        <div className="img-container" ><img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${films.poster_path}`}/></div>
                        <div><span className="desc">Language:</span>{films.original_language}</div>
                        <div><span className="desc">Title:</span>{films.title}</div>
                        <div><span className="desc">Description:</span>{films.overview}</div>
                        <div><span className="desc">Raiting:</span>{films.vote_count}</div>
                    </div>
                )}
            </div>
        );
    }


    render(){

        const {loading} = this.state;

        return(
            <div>
                <h1>Super Movies</h1>
                { loading ? this.renderLoading() : this.renderFilms()}
            </div>
        );
    }

}
