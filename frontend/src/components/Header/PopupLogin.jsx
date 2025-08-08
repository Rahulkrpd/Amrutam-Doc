import { useState, useEffect } from "react"
import AuthModal from "../Login/Login"

const PopupLogin = () => {
    const [showModal, setShowModal] = useState(false)
    const [isLoginMode, setIsLoginMode] = useState(true)
    const [user, setUser] = useState(null)


    const handleLogout = () => {
        setUser(null)
        localStorage.removeItem("user")
    }



    useEffect(() => {
        const savedUser = localStorage.getItem("user")

        if (savedUser) setUser(JSON.parse(savedUser))

    }, [])





    return (
        <div className="sticky top-0 bg-[#373636] w-full h-20 flex justify-around items-center px-4 z-50 gap-4 shadow-lg">

            <div className="relative lg:left-32 flex w-3/4 sm:w-1/2 justify-between items-center">

                <div className="text-[#D9D9D9] font-sans text-center lg:text-2xl">
                    Register Yourself As An Amrutam Doctor
                </div>

                {user ? (
                    <div className="relative left-10">
                        {/* Avatar */}
                        <div className="flex items-center justify-center w-10 h-10 bg-[#3A643B] text-white rounded-full font-semibold text-sm cursor-pointer" onClick={() => handleLogout()}>
                            {user?.name?.charAt(0).toUpperCase() || user?.username?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase() || "U"}
                        </div>

                        <button
                            onClick={() => handleLogout()}
                            className="absolute top-11 left-1/2 -translate-x-1/2 bg-black border border-gray-300 px-3 py-1 text-sm text-red-500 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div
                        onClick={() => setShowModal(true)}
                        className="w-26 p-3 lg:w-48 lg:h-12 bg-[#3A643B] text-white rounded-xl flex justify-center items-center gap-2 cursor-pointer"
                    >
                        <img src="./doctor-01-solid-standard 1.svg" alt="doc" className="w-6 h-6" />
                        <button className="text-sm font-medium">Join Now</button>
                    </div>
                )}

            </div>

            {showModal && (
                <AuthModal
                    closeModal={() => setShowModal(false)}
                    isLogin={isLoginMode}
                    toggleMode={() => setIsLoginMode(!isLoginMode)}
                    onSuccess={(user) => {
                        setUser(user)
                        localStorage.setItem("user", JSON.stringify(user))
                        setShowModal(false)
                    }}
                />
            )}
        </div>
    )
}

export default PopupLogin
