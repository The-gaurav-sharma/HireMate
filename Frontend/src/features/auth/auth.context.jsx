import { createContext, useEffect, useState } from "react";
import { getMe } from "../services/auth.api.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const checkUser = async () => {
            try {
                const data = await getMe();

                if (data) {
                    setUser(data.user);
                } else {
                    setUser(null);
                }

            } catch (error) {
                console.error("Failed to get current user:", error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        checkUser();

    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                loading,
                setLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};