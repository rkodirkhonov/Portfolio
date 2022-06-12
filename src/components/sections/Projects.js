import React from "react";
import ArticleCard from "src/components/ArticleCard";
import styles from "src/styles/Grid.module.css";
import CareerData from "src/data/blog.json";

export default function Articles() {
  const blog = CareerData.map((item) => {
    return (
      <ArticleCard 
        key={item.id}
        title={item.title}
        text={item.text}
        image={item.image}
        author={item.author}
      />
    );
  });

  return (
    <div className={styles.container} id='projects'>
      <h1 className={styles.title}>My Recent Works</h1>
      <div>
        <div className={styles.blog}>{blog}</div>
      </div>
    </div>
  );
}