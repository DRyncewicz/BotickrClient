"use client";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../../styles/layout/Header.module.css';
import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import BtrPopup from '../popups/BtrPopup';
import TicketForm from '@/app/collaboration/new-event/ticketForm';
import CollaborationOrganizerPopup from '../popups/Collaboration/CollaborationOrganizerPopup';


const Header = () => {
  const { data: session, status } = useSession();
  const [isPopupVisible, setPopupVisibility] = useState(false);

  const handleChangePopupVisibility = (e) => {
    setPopupVisibility(e);
  }
  const [userInfoExpanded, setUserInfoExpanded] = useState(false);
  const handleUserClick = () => {
    setUserInfoExpanded(!userInfoExpanded);
  };
  const userInfoRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userInfoRef.current && !userInfoRef.current.contains(event.target)) {
        setUserInfoExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };

  }, []);

  const handleLogout = async () => {
    if (session?.idToken) {
      try {
        const response = await fetch(`/api/logout?idToken=${encodeURIComponent(session.idToken)}`);
        if (response.ok) {
          await signOut({ callbackUrl: '/' });
        } else {
          console.error('Logout failed');
        }
      } catch (error) {
        console.error('Logout error:', error);
      }
    } else {
      await signOut({ callbackUrl: '' });
    }
  };

  return (
    <>
      <div className={styles['header-content']}>
        <Link href="/">
          <div className="mr-5">BOTICK-R@</div>
        </Link>
        <button className={`${styles['content-button']} ${styles['content-button-category']}`}>
          <i className="bi bi-list"></i>
          Categories
        </button>
        <button className={styles['content-button']}> Future functions</button>
          <button className={styles['content-button']}
            onClick={() => handleChangePopupVisibility(true)}>
            Collaboration
          </button>
          <BtrPopup isOpen={isPopupVisible}
            onClose={() => handleChangePopupVisibility(false)}>
              <CollaborationOrganizerPopup/>
              </BtrPopup>
        <button className={styles['content-button']}> Newsletter</button>
        <button className={`${styles['content-button']} ${styles['content-lang-button']}`}> EN
          <i className="bi bi-arrow-down"></i>

        </button>
        <button className={styles['content-button']}
          onClick={handleUserClick}> User</button>
        {userInfoExpanded &&
          <div className={`d-flex justify-content-center flex-column align-items-center ${styles.userInfo}`}
            ref={userInfoRef}>
            {session ? (
              <div className={`d-flex justify-content-center flex-column align-items-center ${styles.loggedIn}`}>
                <div className={styles.avatar}>
                  <i className="bi bi-person-circle"></i>
                </div>
                <span className={styles.name}>{session.user.email}</span>
                <div className={styles.actions}>
                  <a href='/settings' className={styles.settings}>
                    <i className="bi bi-gear"></i> Settings
                  </a>
                  <button onClick={() => handleLogout()} className={styles.logoutBtn}>
                    <i className="bi bi-box-arrow-right"></i> Log out
                  </button>
                </div>
              </div>
            ) : (
              <div className={styles.loggedOut}>
                <i className="bi bi-person-x"></i>
                <span>Not logged in</span>
                <button onClick={() => signIn('duende-identity-server6')} className={styles.loginBtn}>
                  Log in
                </button>
              </div>
            )}
          </div>
        }
      </div>
    </>
  );
};

export default Header;