
import { useState } from 'react';
import SearchForm from './components/form/SearchForm';
import UserProfile from './components/user/UserProfile';
const App = () => {
  const [userName, setUserName] = useState<string>('Amunet Byak')
  return (
    <main className='mx-auto max-w-6xl py-20 px-8'>
      <SearchForm userName={userName} setUserName={setUserName} />
      <UserProfile userName={userName} />
    </main>
  );
};

export default App