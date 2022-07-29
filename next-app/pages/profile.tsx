// pages/profile.js

import useUser from '../src/lib/useUser';

// Authenticating Statically Generated Pages
const Profile = () => {
  // Fetch the user client-side
  const { user } = useUser({ redirectTo: '/login' });

  // Server-render loading state
  if (!user || user?.isLoggedIn === false) {
    return <div>Loading...</div>;
  }

  // Once the user request finishes, show the user
  return (
    <div>
      <h1>Your Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default Profile;
