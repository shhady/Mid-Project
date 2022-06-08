import React from "react";
import App1 from "./questions";
import { useAuth } from "../context/AuthContext";
export default function QuestionsBridge() {
  const { currentUser } = useAuth();
  return (
    <>
      <App1 currentUser={currentUser} />
    </>
  );
}
