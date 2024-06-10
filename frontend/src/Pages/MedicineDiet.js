import React from "react";
import { Layout } from "../components/Layout";
import { Diet } from "../components/Diet";
import { Medicine } from "../components/Medicine";
import { Routine } from "../components/Routine";
import { useSession } from "../helpers/useSession";
import { useSelector } from "react-redux";
import { SignIn } from "./SignIn";

export const MedicineDiet = () => {
  useSession();
  const { isLoggedIn } = useSelector((state) => state?.users);

  return (
    <>
      {!isLoggedIn && <SignIn />}
      {isLoggedIn && (
        <Layout>
          <div className="grid grid-cols-2 gap-5">
            <Diet />
            <Medicine />
            <Routine />
          </div>
        </Layout>
      )}
    </>
  );
};
