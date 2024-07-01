import Header from './Header';
import SearchEventComponent from '../layout-content/SearchEventComponent';
import RecommendedContentComponent from '../layout-content/RecommendedContentComponent';

const MainLayout = () => {
  return (
<>
    <div className='z-1 p-5 w-100'>
      <SearchEventComponent/>
    </div>
    <div className='d-flex flex-column align-items-center justify-content-center w-100 p-5'>
            <h1>Recommended for you</h1>
            <RecommendedContentComponent />
        </div>
        <div className='d-flex flex-column align-items-center justify-content-center w-100 p-5'>
            <h1>Popular in your country</h1>
            <RecommendedContentComponent />
        </div>
        <div className='d-flex flex-column align-items-center justify-content-center w-100 p-5'>
            <h1>Last minute</h1>
            <RecommendedContentComponent />
        </div>
</>
  );
};

export default MainLayout;
