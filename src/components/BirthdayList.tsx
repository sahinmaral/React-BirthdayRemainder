import React, { useEffect, useState } from "react";
import User from "../models/User";
import UsersData from "../services/users.json";
import PersonArea from "./PersonArea";

interface IUserDataContainer {
  firstName: string;
  lastName: string;
  birthDate: string;
  thumbnail: string;
}

function BirthdayList() {
  const [users, setUsers] = useState<User[]>([]);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (
    event: React.MouseEvent
  ) => {
    setUsers([]);
  };

  useEffect(() => {
    const mappedUsers: User[] = [];

    UsersData.forEach((userData: IUserDataContainer) => {
      mappedUsers.push(
        new User(
          userData.firstName,
          userData.lastName,
          new Date(userData.birthDate),
          userData.thumbnail
        )
      );
    });

    setUsers(mappedUsers);
  }, []);

  const getCountOfPersonThatHaveBirthDateToday = (): number => {

    return users.filter((user) => {
      return (
        user.getBirthDate.getDate() === new Date(Date.now()).getDate() &&
        user.getBirthDate.getMonth() === new Date(Date.now()).getMonth()
      );
    }).length;
  };

  return (
    <>
      <h3>{getCountOfPersonThatHaveBirthDateToday()} birthdays today</h3>
      {users.map((user) => {
        return <PersonArea user={user} />;
      })}
      <button onClick={handleClick}>Clear All</button>
    </>
  );
}

export default BirthdayList;
