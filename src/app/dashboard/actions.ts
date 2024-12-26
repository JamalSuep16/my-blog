"use server";

import { verifySession } from "../_lib/session";

export async function myAction() {
  // 1. Verify user
  const session = await verifySession();
  const role = session?.role;

  if (role !== "admin") {
    return { error: "Unauthorized" };
  }

  // 2. Perform action
}
