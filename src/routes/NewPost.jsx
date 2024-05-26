import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";
import posts from "../database";

function NewPost() {
  
  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            name="body"
            required
            rows={3}
          ></textarea>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="author"
            required
          />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button" style={{textDecoration:'none', color: '#e5d5f7'}}>
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action ({request}){
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  //--------Commented to bypass back-end--------
  // await fetch('http://localhost:8080/posts',{
  //     method: 'POST',
  //     body: JSON.stringify(postData),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
    posts.push({...postData, id: Math.random().toString()});
    return redirect('/');
}