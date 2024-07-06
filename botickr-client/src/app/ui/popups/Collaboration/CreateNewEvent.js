import styles from '../../../styles/popups/CreateNewEvent.module.css'
export default function CreateNewEvent() {

    return (
        <>
            <div className="col-12 d-flex flex-row">
                <div className={`col-6 ${styles.subTab}`}>
                    Event
                </div>
                <div className={`col-6 ${styles.subTab}`}>
                    Tickets
                </div>
            </div>
            <div className='d-fixed bottom-0 col-12'>
                TEST
            </div>
        </>
    )
}