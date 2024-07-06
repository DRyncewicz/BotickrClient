import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../../styles/buttons/BtrButtonPrimary.module.css'
export default function BtrButtonPrimary({text, onClick}) {
    return (
        <button className={`mx-auto mb-2 d-flex align-items-center justify-content-center ${styles.btrButton}`}
            onClick={onClick}>
            <i className="bi bi-ticket-perforated-fill"></i>
            {text}
        </button>
    )
}
