"use client";
import 'bootstrap/dist/css/bootstrap.css';
import { useRouter } from 'next/navigation';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../../styles/layout-content/SearchEventListComponent.module.css';
const SearchEventListComponent = ({ eventDto }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/event/${eventDto.Id}`);

    };
    return (
        <>
            <div onClick={handleClick}
                className={`w-100 d-flex justify-content-start p-3 btr-search-list ${styles['btr-search-list']}`}>
                <div className='col-2'>
                    <img src={eventDto.ImagePath} width={100} height={50} />
                </div>
                <div className='col-10 d-col mx-2'>
                    <span className='row'>
                        <b>{eventDto.Name}</b>
                    </span>
                    <span className='row mx-1'>
                        {eventDto.StartDate} | {eventDto.City}
                    </span>
                </div>
            </div>
        </>
    )
}

export default SearchEventListComponent;
