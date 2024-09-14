import { useState } from "react";

const Profile = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2> This is Profile Page</h2>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(1)}>Click me</button>
    </div>
  );
};
export default Profile;
