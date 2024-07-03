"use client"
import { useSession } from "next-auth/react";
import styles from '../styles/collaboration/OrganizerRoleComponent.module.css';
export default function OrganizerRoleComponent() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (session?.user.user_type === 'organizer') {
        return(
            <div className='d-flex justify-content-around mt-5'>
            <div className={styles['organizer-card']}>
                <div className="d-flex flex-column align-items-center mx-5 mt-5">
                    <h3>Create Event</h3>
                </div>
                <div className={styles['organizer-card-content']}>
                    LOREM IPSUM  LOREM IPSUM  LOREM IPSUM  LOREM IPSUM
                </div>
            </div>
            <div className={styles['organizer-card']}>
            <div className="d-flex flex-column align-items-center mx-5 mt-5">
                    <h3>Register your tickets</h3>
                </div>
                <div className={styles['organizer-card-content']}>
                    LOREM IPSUM  LOREM IPSUM  LOREM IPSUM  LOREM IPSUM
                </div>
            </div>
            <div className={styles['organizer-card']}>
            <div className="d-flex flex-column align-items-center mx-5 mt-5">
                    <h3>Organizer panel</h3>
                </div>
                <div className={styles['organizer-card-content']}>
                    LOREM IPSUM  LOREM IPSUM  LOREM IPSUM  LOREM IPSUM
                </div>
            </div>
        </div>
        )
    }
}
