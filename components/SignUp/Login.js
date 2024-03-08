import React, { useEffect } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useRouter } from "next/router";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase";
import { push } from "firebase/database";
import { useRef } from "react";

function Login() {
  const router = useRouter();

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // Handle successful sign-in
        push(useRef, user)
          .then(() => {
            console.log("Data pushed successfully");
          })
          .then(() => {
            router.push("/home");
          });

        // console.log(uid);
      })
      .catch((error) => {
        // Handle sign-in errors
        console.error("Error signing in:", error.message);
        // You can show an error message to the user
      });
  };

  return (
    <div className="flex flex-col justify-center bg-white h-screen">
      <div className="flex flex-col justify-center bg-white max-md:max-w-full">
        <div className="flex overflow-hidden relative flex-col justify-center items-center py-56  w-full max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dc7bb93d59a01acdfaf84d9959e62ad932ae9d315ea38562c93d0de95722eaf1?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc7bb93d59a01acdfaf84d9959e62ad932ae9d315ea38562c93d0de95722eaf1?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc7bb93d59a01acdfaf84d9959e62ad932ae9d315ea38562c93d0de95722eaf1?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc7bb93d59a01acdfaf84d9959e62ad932ae9d315ea38562c93d0de95722eaf1?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc7bb93d59a01acdfaf84d9959e62ad932ae9d315ea38562c93d0de95722eaf1?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc7bb93d59a01acdfaf84d9959e62ad932ae9d315ea38562c93d0de95722eaf1?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc7bb93d59a01acdfaf84d9959e62ad932ae9d315ea38562c93d0de95722eaf1?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc7bb93d59a01acdfaf84d9959e62ad932ae9d315ea38562c93d0de95722eaf1?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
            className="object-cover absolute inset-0 size-full"
            alt="Background"
          />
          <div className="py-2 relative">
            <div className="py-2 bg-white rounded-lg">
              <div className="px-2">
                <div>
                  <h1 className="flex text-3xl justify-center">Login</h1>
                  <h1 className="flex items-center justify-center">
                    Don’t have an account? Sign up
                  </h1>
                </div>
                <div>
                  {/* <button className="flex items-center justify-center w-full bg-gray-300 rounded-md py-2 px-4 mt-4 gap-2">
                    <FaFacebook /> Login with Facebook
                  </button> */}
                  <button
                    className="flex items-center w-full justify-center bg-gray-300 rounded-md py-2 px-4 mt-2 gap-2"
                    onClick={googleSignIn}
                  >
                    <FaGoogle /> Login with Google
                  </button>
                </div>
                {/* <div className="flex items-center justify-center gap-2 mt-2">
                  <div class="h-0.5 w-24 border-t-2 border-gray-300"></div>
                  <h1 className="flex items-center justify-center">or</h1>
                  <div className="h-0.5 w-24 border-t-2 border-gray-300"></div>
                </div> */}
                {/* <div>
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full p-2 border-2 rounded-md"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border-2 rounded-md mt-2"
                  />
                  <h1 className="flex justify-end">Forgot password</h1>
                </div> */}
                {/* <div className="flex items-center justify-center bg-gray-300 rounded-md py-2 px-4 mt-4 hover:bg-blue-700">
                  <button className="flex text-center ">Login</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
