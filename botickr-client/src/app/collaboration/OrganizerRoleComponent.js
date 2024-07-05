"use client"
import { useSession } from "next-auth/react";
import Link from 'next/link';
import styles from '../styles/collaboration/OrganizerRoleComponent.module.css';
export default function OrganizerRoleComponent() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div>Loading...</div>;
    }
    if (session?.user?.user_type === 'organizer') {
        return (
            <div className="mx-5">
                <div className="d-flex flex-column justify-content-start align-items-start mt-5">
                    <h2>
                        List of events registered by the user. Here you will find information about the status and other
                        information about the events.
                    </h2>
                    <Link href='collaboration/new-event'>
                        <button>Create new event</button>
                    </Link>
                </div>

                <div className='d-flex flex-column align-items-center justify-content-center mt-5'>
                    <div className={`col-8 d-flex flex-row ${styles['user-event-box']}`}>
                        <div className="col-3">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD89azNHCdiTnU6JQs5NdXQIg8K8Wfv6ww2g&s"
                                className="container-fluid"></img>
                        </div>
                        <div className="col-6">
                            <p>Event type: </p>
                            <p>Registered tickets: </p>
                            <p>Status: </p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
