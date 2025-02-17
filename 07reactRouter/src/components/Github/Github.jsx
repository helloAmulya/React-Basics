import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https:api.github.com/users/helloAmulya")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  const data = useLoaderData();

  return (
    <div className="text-3xl text-center m-4 bg-gray-600 text-white p-4">
      Github Followers :{data.followers}
      <img
        className="flex justify-center items-center rounded-full"
        src={data.avatar_url}
        alt="Git picture"
        width={300}
      />
    </div>
  );
}

export default Github;

// it is preferred to make this in a new file
export const githubInfoLoader = async () => {
  const response = await fetch("https:api.github.com/users/helloAmulya");
  //   this is actually a promise which we can return
  return response.json();
};
