import React, { useEffect, useState } from "react";
import Comments from "../Comments/Comments";
import styles from "./Details.module.css";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const _id = localStorage.getItem("_id");
  const history = useNavigate();

  const [blog, setBlog] = useState(null);

  const DeleteBlog = async () => {
    alert("Deleting the blog");
  };

  return (
    <>
      {blog === null ? (
        <div className={styles.Details}>
          <div className={styles.MetaData}>
            <p>Author</p>
            <p>Date</p>
          </div>
          <div className={styles.Details_FirstContainer}>
            <div className={styles.Details_InnerDiv}>
              <h1 className={styles.title}>This is the title</h1>
              <p className={styles.Description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                laudantium delectus nobis sapiente corporis sunt fugiat, culpa
                quod ipsam iste!
              </p>
            </div>
            <div className={styles.ImageContainer}>
              <img
                src={`https://media.newyorker.com/photos/5ba177da9eb2f7420aadeb98/master/w_2560%2Cc_limit/Cohen-Linus-Torvalds.jpg`}
                alt="adfadf"
              />
            </div>
          </div>
          <div className={styles.InfoContainer}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique veniam aut sequi asperiores incidunt error labore
              dignissimos tenetur, sapiente necessitatibus praesentium corporis,
              doloremque distinctio vitae omnis laborum dolore, tempore
              quibusdam? Similique corrupti pariatur error minus voluptas, eius
              nobis excepturi quidem.
            </p>
          </div>
          <Comments _id={id} name="Author" comments={[]} />
          <button id={styles.delete} onClick={DeleteBlog}>
            Delete Blog
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Details;
