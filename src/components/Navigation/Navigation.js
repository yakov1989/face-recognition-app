import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  return isSignedIn ? (
    <nav className="flex justify-end ma1">
      <p
        onClick={() => onRouteChange("signout")}
        className="f3 link dim black underline pa3 pointer"
      >
        SignOut
      </p>
    </nav>
  ) : (
    <nav className="flex justify-end ma1">
      <p
        onClick={() => onRouteChange("signin")}
        className="f3 link dim black underline pa3 pointer"
      >
        SignIn
      </p>
      <p
        onClick={() => onRouteChange("register")}
        className="f3 link dim black underline pa3 pointer"
      >
        Register
      </p>
    </nav>
  );
};

export default Navigation;
