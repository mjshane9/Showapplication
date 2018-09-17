import React from 'react';
// var createClass=require('create-react-class');

class Title extends React.Component{
    render(){
        return(
            <h1>Title: {this.props.showtitle}</h1>
        );
    }
}
class Image extends React.Component{
    render(){
        return(
            <img src={this.props.showPoster} alt="Show Poster"  style={{height:400,width:400}}></img>
        );
    }
}
class ShowInfo extends React.Component{
    render(){
        return(
            <div>
            <p> plot: {this.props.showPlot}</p>
            <h5>imdbRating: {this.props.showRating}</h5>
            </div>
        );
    }
}
class Show extends React.Component{

    render(){
        var show=this.props.show;
        return(
            <div className="text-center">
            <Title showtitle={show.title}/>
            <Image showPoster={show.poster}/>
            <ShowInfo showPlot={show.plot} showRating={show.imdbRating}/>
            </div>
        );
    }
}

export default Show;
