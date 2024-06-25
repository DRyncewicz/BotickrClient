"use client";
import Carousel from 'react-bootstrap/Carousel';
import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../../styles/layout-content/RecommendedContentComponent.module.css';
import RecommendedContentCardComponent from './RecommendedContentCardComponent';

const RecommendedContentComponent = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    //TODO: Add fetch data from backend
    const eventDto = [{
        Id: 1,
        Name: "Young leosia BAMBI IRL 2024",
        StartDate: "2024-12-12",
        City: "Koszalin",
        ImagePath: "https://4fun.tv/uploads/media/cache/news_big/uploads/media/news/0001/25/dccad396432e386e9e58123eca1c551843a326b1.png"
    },
    {
        Id: 2,
        Name: "KLUSKA PSIA BANDA 2024",
        StartDate: "2024-12-12",
        City: "WARSZAWA",
        ImagePath: "https://zooart.com.pl/blog/wp-content/uploads/2022/04/FOTO-SZPIC-NIEMIECKI-OKULARY-1000x667-1.jpg"
    }];

    return (
        <div className={`col-12 mx-5 ${styles['carousel']}`}>

            <Carousel activeIndex={index} onSelect={handleSelect} variant='dark' wrap={false} indicators={true}>
                <Carousel.Item>
                    <div className='d-flex justify-content-center'>
                        {eventDto.map((element, index) => (
                            <RecommendedContentCardComponent key={index} eventDto={element} />
                        ))}
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                <div className='d-flex justify-content-center'>
                        {eventDto.map((element, index) => (
                            <RecommendedContentCardComponent key={index} eventDto={element} />
                        ))}
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className='d-flex justify-content-center'>
                        {eventDto.map((element, index) => (
                            <RecommendedContentCardComponent key={index} eventDto={element} />
                        ))}
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default RecommendedContentComponent;