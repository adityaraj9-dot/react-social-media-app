import Layout from "../components/Layout";
import Card from "../components/Card";
import Link from "next/link";
import { useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function LoginPage() {
  const supabase = useSupabaseClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
  };

  return (
    <Layout hideNavigation={true}>
      <div className="h-screen flex items-center">
        <div className="max-w-xs mx-auto grow -mt-24">
          <h1 className="text-6xl mb-4 text-gray-300 text-center">Login</h1>
          <Card noPadding={true}>
            <form onSubmit={handleEmailLogin}>
              <div className="rounded-md">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full p-4 border-b border-b-gray-100 focus:outline-none focus:border-b-socialBlue"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full p-4 border-b border-b-gray-100 focus:outline-none focus:border-b-socialBlue"
                />
                <button
                  type="submit"
                  className="w-full p-4 border-b border-b-gray-100 bg-socialBlue text-white rounded-md shadow-md hover:shadow-gray-300 transition-all hover:scale-110"
                >
                  Login with Email
                </button>
              </div>
            </form>
            <div className="mt-4 text-center">
              <span className="text-gray-500">Or login with:</span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <button
               
                className="flex items-center justify-center p-4 border-b border-b-gray-100 bg-white rounded-md shadow-md hover:shadow-gray-300 transition-all hover:scale-110"
              >
                <svg
                  className="h-8 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  {/* ... */}
                </svg>
                Login with Google
              </button>
              {/* ... (other login options) */}
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
