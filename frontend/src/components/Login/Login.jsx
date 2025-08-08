import { useState } from "react"

const AuthModal = ({ closeModal, isLogin, toggleMode, onSuccess }) => {
    const [form, setForm] = useState({ email: "", password: "", username: "" })
    const [loading, setLoading] = useState(false)

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000"

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const endpoint = isLogin ? "/api/v1/user/login" : "/api/v1/user/register"
        const payload = isLogin
            ? { email: form.email, password: form.password }
            : form

        try {
            const res = await fetch(`${API_BASE_URL}${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include", 
                body: JSON.stringify(payload),
                
            })

            const data = await res.json()
            if (res.ok) {
                localStorage.setItem("user", JSON.stringify(data.user || { email: form.email }))
                onSuccess(data.user || { email: form.email })
                closeModal()
            } else {
                alert(data.message || "Something went wrong.")
            }
        } catch (error) {
            alert("Network error. Try again.",error)
            
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl   lg:w-6/12 max-w-md relative">
                <button className="absolute top-2 right-3 text-gray-500" onClick={closeModal}>
                    &times;
                </button>
                <h2 className="text-xl font-bold mb-4">
                    {isLogin ? "Login" : "Register"}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full border p-2 rounded"
                            value={form.username}
                            onChange={(e) => setForm({ ...form, username: e.target.value })}
                            required
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border p-2 rounded"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border p-2 rounded"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        required
                    />
                    <button
                        type="submit"
                        className="bg-[#3A643B] text-white py-2 px-4 rounded w-full"
                        disabled={loading}
                    >
                        {loading ? "Please wait..." : isLogin ? "Login" : "Register"}
                    </button>
                </form>
                <p className="text-sm text-center mt-4">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button
                        onClick={toggleMode}
                        className="text-[#3A643B] font-semibold ml-1"
                    >
                        {isLogin ? "Register" : "Login"}
                    </button>
                </p>
            </div>
        </div>
    )
}

export default AuthModal
