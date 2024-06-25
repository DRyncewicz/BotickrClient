"use client";

import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../../styles/layout-content/SearchEventComponent.module.css';
import SearchEventListComponent from './SearchEventListComponent';

const SearchEventComponent = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const containerRef = useRef(null);

    const handleFocus = () => {
        setIsExpanded(true);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsExpanded(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    //Add fetch data from backend
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

    console.log("Is expanded:", isExpanded);
    return (
        <section className='search mx-5'>
            <div className='container align-items-center'>
                <div className='d-col justify-content-center align-items-center'>
                    <form className='d-flex justify-content-center'>
                    <div className='col-2'>
                            <input
                                className='btn btn-light form-select-lg w-100 h-100'
                                onFocus={handleFocus}
                            />
                        </div>
                        <div className='col-2'>
                            <input
                                className='btn btn-light form-select-lg w-100 h-100'
                                type='button'>
                            </input>
                        </div>
                        <div className='col-2'>
                            <input
                                className='btn btn-light form-select-lg w-100 h-100'
                                type='button'>
                            </input>
                        </div>
                        <div className='col-2'>
                            <button className='btn btn-dark btn-lg justify-content-center w-100'>
                                <i className="bi bi-search-heart-fill"></i>
                                SEARCH
                            </button>
                        </div>
                    </form>
                    <div className='d-flex justify-content-center'>
                        {isExpanded && (
                            <div className={`col-8 ${styles.eventselect}`} ref={containerRef}>
                                <div className='w-100'>
                                    {eventDto.map((element, index) => (
                                        <SearchEventListComponent key={index} eventDto={element} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchEventComponent;