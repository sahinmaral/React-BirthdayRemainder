import React from "react";
import User from "../models/User";

function PersonArea({ user }: { user: User }) {
  return (
    <div className="person-area container">
      <div className="row">
        <div className="col-3">
            <img src={user.getThumbnail} alt="thumbnail"/>
        </div>
        <div className="col-9">
          <p className="person-area-fullname">
            {user.getFirstName} {user.getLastName}
          </p>
          <p className="person-area-age">
            {user.getAge} years
          </p>
          {/* <p>{user.getBirthDate.getDate()}-{new Date(Date.now()).getDate()}</p>
          <p>{user.getBirthDate.getMonth()}-{new Date(Date.now()).getMonth()}</p> */}
        </div>
      </div>
    </div>
  );
}

export default PersonArea;
