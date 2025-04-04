import Input from "@/components/input";
import { useCallback, useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [variant, setVariant] = useState("login");

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === "login" ? "register" : "login")
    }, [])

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="w-full h-full bg-black/50 lg:bg-black/50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Logo" className="h-12" />
                </nav>

                <div className="flex justify-center">
                    <div className="bg-black/70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === "login" ? "Sign in" : "Register"}</h2>
                        <div className="flex flex-col gap-4">

                            {variant === "register" && (

                                <Input
                                    label="UserName"
                                    onChange={(ev: any) => setName(ev.target.value)}
                                    value={name}
                                    id="name"
                                />
                            )}
                            <Input
                                label="Email"
                                onChange={(ev: any) => setEmail(ev.target.value)}
                                value={email}
                                id="email"
                                type="email"
                            />
                            <Input
                                label="Password"
                                onChange={(ev: any) => setPassword(ev.target.value)}
                                value={password}
                                id="password"
                                type="password"
                            />
                        </div>
                        <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-200 hover:text-black transition duration-600 ease-in-out cursor-pointer">
                            {variant === "login" ? "Login" : "Sign up"}
                        </button>
                        <p className="text-neutral-500 mt-12">
                            {variant === "login" ? "First Time using Netflix?" : "Already have an account?"}
                            <span onClick={toggleVariant} className="text-white ml-1  hover:underline cursor-pointer transition duration-600 ease-in-out">
                                {variant === "login" ? "Create an account" : "Login"}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Auth;
