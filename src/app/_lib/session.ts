import 'server-only'
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const key = new TextEncoder().encode(process.env.SECRET);

const cookies = {
    name: 'session',
    option: { httpOnly: true, secure: true, sameSite: 'lax', path: '/' },
    duration: 24 * 60 * 60 * 1000,
}

export async function encrypt(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1day")
    .sign(key);
}

export async function decrypt(session) {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    return null;
  }
}

export async function createSession(userId) {
    const expires = new Date(Date.now() + cookie.duration)
    const session = await encrypt({ userId, expires})

    cookies().set(cookies.name, session. { ...cookies.option, expires })
    redirect('/dashboard')
}

export async function verifySession() {
    const cookie = cookies().get(cookie.name)?.value
    const session = await decrypt(cookie)
    if (!session?.userId) {
        redirect('/login')
    }

    return { userId: session.userId }
}

export async function deleteSession() {
    cookies().delete(cookie.name)
    redirect('/login')
}
