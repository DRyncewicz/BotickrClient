'use client'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { SessionProvider } from "next-auth/react"

export function Providers({ children }) {
  return <SessionProvider>{children}</SessionProvider>
}