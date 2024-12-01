import React from "react";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  date: string;
  loged: boolean;
}

export type PostResponse = Post[];

export interface logedInProps {
  setIsLogedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface isLogedInProps {
  isLogedIn: boolean;
  setIsLogedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface UserData {
  email: string;
  password: string;
  name: string;
  lastName: string;
}
