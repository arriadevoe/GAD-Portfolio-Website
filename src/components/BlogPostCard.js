import React from "react"
import { Link } from "gatsby"

import { IconContext } from "react-icons"
import { FaReact, FaChevronRight } from "react-icons/fa"

import cardStyles from "./BlogPostCard.module.scss"

const BlogPostCard = props => {
  return (
    // <li className={cardStyles.postCard}>
    //   <div className={cardStyles.postPreviewContainer}>
    //     <div className={cardStyles.postPreviewImageContainer}>
    //       <Link to={`/blog/${props.slug}`}>
    //         <img
    //           src={props.previewImage.fluid.src}
    //           alt={props.previewImage.title}
    //         />
    //       </Link>
    //     </div>
    //     <h2 className={cardStyles.postTitle}>
    //       <Link to={`/blog/${props.slug}`}>{props.title}</Link>
    //     </h2>
    //     <div className={cardStyles.postTags}>
    //       {props.tags.map((tag, i) => (
    //         <span key={i}>{tag}</span>
    //       ))}
    //     </div>
    //     <div className={cardStyles.postExpand}>
    //       <Link to={`/blog/${props.slug}`}>&#x27f6; Read more </Link>
    //       <p className={cardStyles.postDate}>{props.publishedDate}</p>
    //     </div>
    //   </div>
    // </li>
    <li className={cardStyles.postCard}>
      <div className={cardStyles.postIcon}>
        <IconContext.Provider value={{ size: "2em" }}>
          <FaReact />
        </IconContext.Provider>
      </div>
      <div>{"Blog Post"}</div>
      <div className={cardStyles.postChevron}>
        <IconContext.Provider value={{ size: "1em" }}>
          <FaChevronRight />
        </IconContext.Provider>
      </div>
    </li>
  )
}

export default BlogPostCard
