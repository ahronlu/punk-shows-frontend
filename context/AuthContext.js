import {createContext, useState, useEffect} from "react"
import {useRouter} from "next/router"
import {API_URL} from "@/config/index"

const AuthContext = createContext()

export const AuthProvider = ({chlidren}) => {
    const [User, setUser] = useState(null)
}