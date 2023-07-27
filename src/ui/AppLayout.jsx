import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation(); // the useNvigation hook knows which componenet is in an idle state or loading state , in our case Since the menu component fetches data from an api , the menu component will go to a loading sate , using that we can create a loading animation
  const isLoading = navigation.state === 'loading'; // so if the state of the navidation is loading we set an isLoading variable to it

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scrool">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
