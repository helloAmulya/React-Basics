/* type -> rfce for the snippet below

import React from 'react'

function card() {
  return (
    <div>card</div>
  )
}

export default card
 */

import React from "react";

// function Card(props) {
function Card({ username, btntxt = "Read More" }) {
  // inplace of props in the card , directly pass {username} and use props.username everywhere

  //   console.log("props", props);
  //   console.log(props.username);
  console.log(username);

  return (
    <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
      <img
        src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          {/* <h2 className="text-3xl font-semibold tracking-wide">
            {props.username}
          </h2> */}
          <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            tempora ipsum soluta amet corporis accusantium aliquid consectetur
            eaque!
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
        >
          {/* Read more */}
          {btntxt}
          {/* {btntxt || "Read more"}  we can also use this to give default value , but readability not that good */}
        </button>
      </div>
    </div>
  );
}

export default Card;
