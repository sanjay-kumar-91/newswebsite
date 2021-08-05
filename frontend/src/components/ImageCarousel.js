import React from 'react'
import { Carousel, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ImageCarousel = () => {

    const images = [
        {
            _id: 1,
            name: 'Function pic 1',
            image: 'p1.JPG'
        },
        {
            _id: 2,
            name: 'Function pic 2',
            image: 'p2.JPG'
        },
        {
            _id: 3,
            name: 'Function pic3',
            image: 'p3.JPG'
        },
        {
            _id: 4,
            name: 'Function pic 4',
            image: 'p3.JPG'
        },
        {
            _id: 5,
            name: 'Function pic 5',
            image: 'p3.JPG'
        },
        {
            _id: 6,
            name: 'Function pic 6',
            image: 'p3.JPG'
        },
        {
            _id: 7,
            name: 'Function pic 7',
            image: 'p3.JPG'
        },
        {
            _id: 8,
            name: 'Function pic 8',
            image: 'p3.JPG'
        },
        {
            _id: 9,
            name: 'Function pic 9',
            image: 'p3.JPG'
        }
    ]
    return (
        <div>
            <Carousel pause='hover' className='bg-dark'>
                {images.map((pic) => (
                    <Carousel.Item key={pic._id}>
                        <Link to={`/`}>
                            <Image src={`Images/${pic.image}`} alt={pic.name} fluid />
                            <Carousel.Caption className='carousel-caption'>
                                <h2>
                                    {pic.name}
                                </h2>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default ImageCarousel
