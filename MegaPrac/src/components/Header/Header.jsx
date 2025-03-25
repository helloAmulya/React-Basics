import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// useNavigation is used to track navigation state

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  // from this we are taking the status which is inside the authSlice in store
  const navigate = useNavigate();

  // we will make an array and in that describe the naigation bar components

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
    {
      name: "All Post",
      slug: "/all-posts",
      active: authStatus,
    },
  ];

  return (
    <header className="shadow py-3 bg-gray-800">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="ml-auto flex">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-3 rounded-full duration-200 hover:scale-105 bg-gradient-to-r from-blue-400 via-white to-pink-400 bg-clip-text text-transparent text-xl"
                  >
                    {item.name}{" "}
                  </button>
                </li>
              ) : null
            )}

            {/* here we used map to display different buttons, and onclick they navigate us to the route/path */}
          </ul>

          {/* the below code states that if we are authenticated then only the logoutbtn appears  */}
          {authStatus && (
            <li className="list-none">
              <LogoutBtn />
            </li>
          )}
        </nav>
      </Container>
    </header>
  );
}

export default Header;

/********************** */
// import React from "react";
// import { Container, Logo, LogoutBtn } from "../index";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// function Header() {
//   const authStatus = useSelector((state) => state.auth.status);
//   const navigate = useNavigate();

//   const navItems = [
//     {
//       name: "Home",
//       slug: "/",
//       active: true,
//     },
//     {
//       name: "Login",
//       slug: "/login",
//       active: !authStatus,
//     },
//     {
//       name: "Signup",
//       slug: "/signup",
//       active: !authStatus,
//     },
//     {
//       name: "Add Post",
//       slug: "/add-post",
//       active: authStatus,
//     },
//     {
//       name: "All Post",
//       slug: "/all-posts",
//       active: authStatus,
//     },
//   ];

//   return (
//     <header className="py-3 bg-white/10 backdrop-blur-lg shadow-lg border-b border-white/20">
//       <Container>
//         <nav className="flex items-center">
//           <div className="mr-4">
//             <Link to="/">
//               <Logo width="50px" />
//             </Link>
//           </div>
//           <ul className="ml-auto flex space-x-6">
//             {navItems.map((item) =>
//               item.active ? (
//                 <li key={item.name}>
//                   <button
//                     onClick={() => navigate(item.slug)}
//                     className="px-5 py-2 rounded-lg duration-200 hover:scale-105 bg-gradient-to-r from-blue-400 to-pink-400 text-white shadow-md backdrop-blur-md"
//                   >
//                     {item.name}
//                   </button>
//                 </li>
//               ) : null
//             )}
//           </ul>

//           {authStatus && (
//             <li className="ml-4">
//               <LogoutBtn />
//             </li>
//           )}
//         </nav>
//       </Container>
//     </header>
//   );
// }

// export default Header;
