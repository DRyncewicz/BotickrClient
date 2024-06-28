"use client";
import 'bootstrap/dist/css/bootstrap.css';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import eventDtos from '@/app/temp/EventDtoDataSeed';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../../styles/layout-content/SearchEventListComponent.module.css';

const SearchEventListComponent = ({searchString}) => {
    const router = useRouter();

    const eventDto = eventDtos.filter(item =>
        item?.Name?.toLowerCase()?.includes(searchString?.toLowerCase() ?? ''));

    const handleClick = () => {
        router.push(`/event/${eventDto.Id}`);
    };
    
    return (
        <>
        {eventDto.map(element => (
            <div onClick={handleClick}
            key={element.Id}
                className={`w-100 d-flex justify-content-start p-3 ${styles['btr-search-list']}`}>
                <div className='col-2'>
                    <img src={element.ImagePath} width={100} height={50} />
                </div>
                <div className='col-10 d-col mx-2'>
                    <span className='row'>
                        <b>{element.Name}</b>
                    </span>
                    <span className='row mx-1'>
                        {element.StartDate} | {element.City}
                    </span>
                </div>
            </div>
        ))}
        </>
    )
}

export default SearchEventListComponent;
