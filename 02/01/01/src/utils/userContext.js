/**
 * It is not related to any component like states
 * they are common to all (Basically type of central store)
 */
import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "dummyName",
    email: "dummy@gmail.com",
  },
});
UserContext.displayName = "Usercontext"; // giving name for debugging-> react dev tools

export default UserContext;
