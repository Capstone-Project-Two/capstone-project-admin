import React from "react";

import { auth } from "../../../auth";
import SignIn from "./auth-components";
type Props = {};

export default async function UserButton() {
  const session = await auth();
  if (!session?.user) return <SignIn />;
}
