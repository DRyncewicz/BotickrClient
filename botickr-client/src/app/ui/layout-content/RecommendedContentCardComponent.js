"use client";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../../styles/layout-content/RecommendedContentCardComponent.module.css';

const RecommendedContentCardComponent = ({ eventDto }) => {
    return (
        <div className={`${styles['btr-carousel-item']} ${styles['image-container']}`}>
            <img src={eventDto.ImagePath} alt={eventDto.Name} className={styles['carousel-image']} />
            <div className={styles['carousel-image-box']}>
                <div className='d-flex align-items-start flex-column'>
                    <div className='mb-5 w-100 d-flex justify-content-end p-2'>
                        <i className="bi bi-heart"></i>
                    </div>
                    <span className='p-2'>This is example description of event This is example description of eventThis is example description of event</span>
                    <button className='mx-auto mb-1'>
                        Check tickets
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RecommendedContentCardComponent; 