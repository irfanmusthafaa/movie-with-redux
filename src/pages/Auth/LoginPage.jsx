import React from "react";
import bg2 from "../../assets/img/bg2.jpg";

export const LoginPage = () => {
  return (
    <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div class="max-w-screen-xl m-0 sm:m-10 bg-gray-700 shadow sm:rounded-lg flex justify-center flex-1">
        <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <img src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png" class="w-32 mx-auto" />
          </div>
          <div class="mt-12 flex flex-col items-center">
            <h1 class="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
            <div class="w-full flex-1 mt-8">
              <div class="flex flex-col items-center">
                <button class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div class="bg-white p-2 rounded-full">
                    <svg class="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04" />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span class="ml-4">Sign Up with Google</span>
                </button>

                <button class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                  <div class="bg-white p-1 rounded-full">
                    <svg class="w-6" viewBox="0 0 32 32">
                      <path
                        fill-rule="evenodd"
                        d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                      />
                    </svg>
                  </div>
                  <span class="ml-4">Sign Up with GitHub</span>
                </button>
              </div>

              <div class="my-12 border-b text-center">
                <div class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign up with e-mail
                </div>
              </div>

              <div class="mx-auto max-w-xs">
                <input
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                />
                <input
                  class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                />
                <button class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg class="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span class="ml-3">Sign Up</span>
                </button>
                <p class="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by templatana's
                  <a href="#" class="border-b border-gray-500 border-dotted">
                    Terms of Service
                  </a>
                  and its
                  <a href="#" class="border-b border-gray-500 border-dotted">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex-1 bg-indigo-100 text-center hidden lg:flex"
          style={{
            backgroundImage: `url( ${bg2})`,
          }}
        >
          <div
            class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")`,
            }}
          ></div>
        </div>
      </div>
    </div>
    // <div class="flex items-center min-h-screen bg-gray-50">
    //   <div class="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
    //     <div class="flex flex-col md:flex-row">
    //       <div class="h-32 md:h-auto md:w-1/2">
    //         {/* <img class="object-cover w-full h-full" src="https://source.unsplash.com/user/erondu/1600x900" alt="img" /> */}
    //         <img class="object-cover w-full h-full" src={bg2} alt="img" />
    //       </div>
    //       <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
    //         <div class="w-full">
    //           <div class="flex justify-center">
    //             <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //               <path d="M12 14l9-5-9-5-9 5 9 5z" />
    //               <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
    //               />
    //             </svg>
    //           </div>
    //           <h1 class="mb-4 text-2xl font-bold text-center text-gray-700">Login to Your Account</h1>
    //           <div>
    //             <label class="block text-sm">Email</label>
    //             <input
    //               type="email"
    //               class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
    //               placeholder=""
    //             />
    //           </div>
    //           <div>
    //             <label class="block mt-4 text-sm">Password</label>
    //             <input
    //               class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
    //               placeholder=""
    //               type="password"
    //             />
    //           </div>
    //           <p class="mt-4">
    //             <a class="text-sm text-blue-600 hover:underline" href="./forgot-password.html">
    //               Forgot your password?
    //             </a>
    //           </p>

    //           <button
    //             class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
    //             href="#"
    //           >
    //             Log in
    //           </button>

    //           <hr class="my-8" />

    //           <div class="flex items-center justify-center gap-4">
    //             <button class="flex items-center justify-center w-full px-4 py-2 text-sm text-white text-gray-700 border border-gray-300 rounded-lg hover:border-gray-500 focus:border-gray-500">
    //               <svg class="w-4 h-4 mr-2" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
    //                 <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    //               </svg>
    //               Github
    //             </button>
    //             <button class="flex items-center justify-center w-full px-4 py-2 text-sm text-white text-gray-700 border border-gray-300 rounded-lg hover:border-gray-500 focus:border-gray-500">
    //               <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" viewBox="0 0 48 48">
    //                 <defs>
    //                   <path
    //                     id="a"
    //                     d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
    //                   />
    //                 </defs>
    //                 <clipPath id="b">
    //                   <use href="#a" overflow="visible" />
    //                 </clipPath>
    //                 <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
    //                 <path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
    //                 <path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
    //                 <path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
    //               </svg>
    //               Google
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
