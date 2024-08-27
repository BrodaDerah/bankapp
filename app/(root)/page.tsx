import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
<<<<<<< HEAD
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async () => {
  const loggedIn = await getLoggedInUser();

=======
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Chidera', lastName: 'Nnamani', email: 'contact@brodaderah.com'};

>>>>>>> c9e8cf8aaa033d58c055d64e9093caeea0157902
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
<<<<<<< HEAD
            user={loggedIn?.name || 'Guest'}
=======
            user={loggedIn?.firstName || 'Guest'}
>>>>>>> c9e8cf8aaa033d58c055d64e9093caeea0157902
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
<<<<<<< HEAD

        RECENT TRANSACTIONS
=======
        recent transactions
>>>>>>> c9e8cf8aaa033d58c055d64e9093caeea0157902
      </div>

      <RightSidebar 
        user={loggedIn}
<<<<<<< HEAD
        transactions={[]}
        banks={[{ currentBalance: 123.50 }, { currentBalance: 500.50}]}
      />
=======
        transaction={[]}
        banks={[{currentBalance: 123.45}, {currentBalance: 50.7}]}
      />
    
>>>>>>> c9e8cf8aaa033d58c055d64e9093caeea0157902
    </section>
  )
}

export default Home