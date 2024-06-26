"use client";
import Carousel from 'react-bootstrap/Carousel';
import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../../styles/layout-content/RecommendedContentComponent.module.css';
import RecommendedContentCardComponent from './RecommendedContentCardComponent';
import eventDtos from '@/app/temp/EventDtoDataSeed';

const RecommendedContentComponent = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    //TODO: Add fetch data from backend
    const eventDto = eventDtos;

    const SeedCarouselItems = () => {
        const carouselPages = Math.ceil(eventDto.length / 5);
        const items = [];

        for (let i = 0; i < carouselPages; i++) {
            const slidedEventDto = eventDto.slice(i * 5, i * 5 + 5);
            items.push(
                <Carousel.Item key={i}>
                    <div className='d-flex justify-content-center'>
                        {slidedEventDto.map((element, index) => (
                            <RecommendedContentCardComponent key={index} eventDto={element} />
                        ))}
                    </div>
                </Carousel.Item>
            );
        }

        return items;
    };

    return (
        <div className={`col-10 mx-5 ${styles['carousel']}`}>
            <Carousel activeIndex={index} onSelect={handleSelect} variant='dark' wrap={false} indicators={true} interval={null}>
                {SeedCarouselItems()}
            </Carousel>
        </div>
    );
}

export default RecommendedContentComponent;