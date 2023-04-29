/**
 *    STEPS
 * ----------------
 * 1. 
 * 2. 
 * 3.
 * 4.
 * 
 * 
 * * */

import React, { Children, useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';

const PrivetRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation();
  console.log(location)
  // handle loading show hare
  if (loading) {
    return (
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    );
  }
  
  if (user) {
    return children;
  }
  return <Navigate state={{from: location }} to="/login" replace></Navigate>
};

export default PrivetRoute;