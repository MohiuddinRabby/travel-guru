import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../assets/hooks/useAuth";

const UnauthorizedView = () => {
  const auth = useAuth();
  let goToBookignPage = useHistory();
  const handleAuhtUserToBookignPage = () => {
    goToBookignPage.push("/booking");
  };
  return (
    <div className="py -5">
      <div className="container py-5 text-center">
        {auth.singInUser ? (
          <h1 className="text-success">
            Please, choose a travel destination first
            <br />
            <button
              className="btn btn-warning"
              onClick={handleAuhtUserToBookignPage}
            >
              Go to bookign page
            </button>
          </h1>
        ) : (
          <h1 className="text-danger">You need to login to view the page</h1>
        )}
      </div>
    </div>
  );
};

export default UnauthorizedView;
