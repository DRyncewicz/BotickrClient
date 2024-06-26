"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../../styles/layout-content/RecommendedContentCardComponent.module.css';

const RecommendedContentCardComponent = ({ eventDto }) => {
    const [likeBootstrapStyle, setLikeBootstrapStyle] = useState('bi bi-heart')
    const router = useRouter();

    const handleLikeClick = () => {
        if (likeBootstrapStyle === 'bi bi-heart') {
            setLikeBootstrapStyle('bi bi-heart-fill');
        }
        else {
            setLikeBootstrapStyle('bi bi-heart');
        }
    }

    const handleClick = () => {
        router.push(`/event/${eventDto.Id}`);
    };

    return (
        <>
            <div className={styles['btr-carousel-container']}>
                <div className={`${styles['btr-carousel-item']} ${styles['image-container']}`}>
                    <img src={eventDto.ImagePath} alt={eventDto.Name} className={styles['carousel-image']} />
                    <div className={styles['carousel-image-box']}>
                        <div className='d-flex align-items-start flex-column h-100'>
                            <div className='mb-auto mt-4 w-100 d-flex justify-content-end p-2'>
                                <i className={`${likeBootstrapStyle} ${styles['carousel-item-like']}`}
                                    onClick={handleLikeClick}></i>
                            </div>
                            <span className='p-2'>{eventDto.Description}</span>
                            <button className={`mx-auto mb-2 d-flex align-items-center justify-content-center ${styles['carousel-item-button']}`}
                                onClick={handleClick}>
                                <i className="bi bi-ticket-perforated-fill"></i>
                                Check tickets
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-100 d-col justify-content-start mx-3'>
                    <span><b>{eventDto.Name}</b></span><br></br>
                    <span>{eventDto.City} | {eventDto.StartDate}</span>
                </div>
            </div>
        </>


    )
}

export default RecommendedContentCardComponent