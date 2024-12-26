import { verifySession } from "../_lib/session";
import { db } from "@/drizzle/db";
import { users } from "@/drizzle/schema";
import { taintUniqueValue } from "next/dist/server/app-render/rsc/taint";
import { cache } from "react";

export const getUser = cache(async () => {
  // 1. Verify user's session
  const session = await verifySession();

  // 2. Fetch user data
  const data = await db.query.users.findMany({
    where: eq(users.id, session.userId),
    columns: { name: true, email: true },
  });
  const user = data[0];

  // 3. Filter user data
  const filteredUser = userDTO(user);

  return filteredUser;
});

function userDTO(user) {
  taintUniqueValue(
    "Do not pass a user session token to the client. ",
    user,
    user.session.token
  );
  return {
    name: user.name,
    email: user.email,
    session: user.session,
  };
}

function canViewAudit(auditTrail, role) {
  return role === "admin" ? auditTrail : null;
}
