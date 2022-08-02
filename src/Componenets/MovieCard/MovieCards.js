import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MovieCard.css'
import reactStars from 'react-rating-stars-component';
import ReactStars from 'react-rating-stars-component';
import star from 'react-rating-stars-component/dist/star';

const MovieCards = ({movie}) => {
  const ratechange =()=>{
    movie.rate=star
  }
  return (
    <div >
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl}/>
      <Card.Body className='cards'>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
         {movie.description}
        </Card.Text>
        <Card.Text>
          this movie rate is {movie.rate}
        </Card.Text>
      </Card.Body>
      < ReactStars classNames='star'onChange={ratechange}/>
    </Card>
    </div>
  )
}

export default MovieCards ;
