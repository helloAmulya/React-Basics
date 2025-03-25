import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.allPost().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  //   empty dependency array means useEffect will run once ,
  /* if  this ->  appwriteService.allPost().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
    this will run on every render, bad for performance
 */

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4 ">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
