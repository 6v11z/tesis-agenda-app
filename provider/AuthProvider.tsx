import {
  useState,
  useEffect,
  createContext,
  PropsWithChildren,
  useContext,
} from "react"
import { Session, User } from "@supabase/supabase-js"
import { supabase } from "@/uitls/supabase"

type AuthProps = {
  user: User | null
  session: Session | null
  initialized?: boolean
  signOut?: () => void
}

export const AuthContext = createContext<Partial<AuthProps>>({})

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>()
  const [session, setSession] = useState<Session | null>(null)
  const [initialized, setInitialized] = useState<boolean>(false)

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session)
      setUser(session ? session.user : null)
      setInitialized(true)
    })
    return () => {
      data.subscription.unsubscribe()
    }
  }, [])

  // Log out the user
  const signOut = async () => {
    await supabase.auth.signOut()
  }

  const value = {
    user,
    session,
    initialized,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
