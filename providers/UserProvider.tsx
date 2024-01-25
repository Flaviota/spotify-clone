"use client";

import { MyUserContextProvider } from "@/hooks/useUsex";

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  return <MyUserContextProvider></MyUserContextProvider>;
};

export default UserProvider;
