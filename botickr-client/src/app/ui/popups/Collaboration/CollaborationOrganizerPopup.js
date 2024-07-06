"use client"
import React, { useState } from 'react';
import styles from '../../../styles/popups/CollaborationOrganizerPopup.module.css'
import CreateNewEvent from './CreateNewEvent'

export default function CollaborationOrganizerPopup() {
    const [activeTab, setActiveTab] = useState('manage');

    const tabs = [
        { id: 'create', label: 'Create new event' },
        { id: 'assign', label: 'Assign tickets' },
        { id: 'manage', label: 'Manage' }
    ];

    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`${styles.navItem} ${activeTab === tab.id ? styles.active : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </nav>
            <div className={styles.content}>
                {activeTab === 'create' && <CreateNewEvent />}
                {/* Dodaj inne komponenty dla pozostałych zakładek */}
            </div>
        </div>
    )
}