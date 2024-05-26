import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate , Route } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  const navigate = useNavigate();


  return (
    <Fragment>
      {loading && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuthenticated === false) {
              return <useNavigate  to="/login" />;
            }

            return <Component {...props} />;
          }}
        />
      )}
    </Fragment>
  );
};

export default ProtectedRoute;