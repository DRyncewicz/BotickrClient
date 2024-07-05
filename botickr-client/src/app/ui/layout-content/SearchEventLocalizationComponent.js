"use client";
import React, { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../../styles/layout-content/SearchEventLocalizationComponent.module.css';

const SearchEventLocalizationComponent = ({ searchString, onLocationSelect }) => {
    const [locationData, setLocationData] = useState(null);
    const { data: session, status } = useSession();

    useEffect(() => {
        fetch('https://localhost:7008/api/Location', {
            method: "GET",
            headers: {
                "FutureHeaders": "FutureHeaderContent"
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setLocationData(data);
            })
            .catch(error => console.error('Fetch error:', error));

    }, [session, status]);

    const filteredLocations = locationData?.filter(location =>
        location?.city?.toLowerCase().includes(searchString?.toLowerCase() ?? '')
    );

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (status === "unauthenticated") {
        return <div>Access Denied</div>;
    }

    return (
        <>
            {filteredLocations && filteredLocations.map(element => (
                <div className={`w-100 d-flex justify-content-start p-3 ${styles['btr-localization-list']}`} key={element.locationId}
                    onClick={() => onLocationSelect(element.city)}>
                    <div className='col-10 d-col mx-2'>
                        <span className='row'>
                            <b>{element.city}</b>
                        </span>
                    </div>
                </div>
            ))}
        </>
    );
}

export default SearchEventLocalizationComponent;
