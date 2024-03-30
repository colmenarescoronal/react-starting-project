import PostList from "../components/PostList";
import MainHeader from "../components/MainHeader";
import { useState } from "react";
import {Outlet} from "react-router-dom";

function Posts() {

  return (
    <>
    <Outlet/>
      <main>
        <PostList/>
      </main>
    </>
  );
}

export default Posts;

export async function loader(){
  const response = await fetch('http://localhost:8080/posts')
  const resData = await response.json();
  return resData.posts;
}
