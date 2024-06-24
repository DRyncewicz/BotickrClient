import Header from './Header';
import SearchEventComponent from '../layout-content/SearchEventComponent';

const MainLayout = () => {
  return (
<>
    <div className='header'>
        <Header />
    </div>

    <div className='z-1 p-5 w-100'>
      <SearchEventComponent/>
    </div>
</>
  );
};

export default MainLayout;
