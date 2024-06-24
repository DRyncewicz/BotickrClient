import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../../styles/layout-content/SearchEventComponent.module.css';

const SearchEventComponent = () => {
    return(<>
    <section className='search d-flex justify-content-center pb-5'>
        <form className='w-100 p-3'>
            <select className='form-select form-select-lg mb-3'>
            </select>
            <select className='form-select form-select-lg mb-3'>
            </select>
            <select className='form-select form-select-lg mb-3'>
            </select>
        </form>
    </section>
    </>
)};

export default SearchEventComponent;