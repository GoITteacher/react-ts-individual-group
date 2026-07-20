import { string } from "yup";
import css from "./ArticlesForm.module.css";

/* 
title: string;
  summary: string;
  source: string;
  category: string;
  publishedAt: string;
  url: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
*/

const ArticlesForm = () => {
  const handleSubmit = (formData: FormData) => {
    const articleData = {
      title: formData.get("title") as string,
      summary: formData.get("summary") as string,
      source: formData.get("source") as string,
      category: formData.get("category") as string,
      publishedAt: formData.get("publishedAt") as string,
      url: formData.get("url") as string,
      tags: formData.getAll("tags") as string[],
      createdAt: formData.get("createdAt") as string,
      updatedAt: formData.get("updatedAt") as string,
    };
  };
  return (
    <div className={css["articlesForm"]}>
      <form action={handleSubmit}>
        <input type="text" name="title" />
        <input type="textarea" name="summary" />
        <input type="text" name="source" />
        <input type="text" name="category" />
        <input type="date" name="publishedAt" />
        <input type="url" name="url" />
        <input type="checkbox" name="tags" value={"str1"} />
        <input type="checkbox" name="tags" value={"str2"} />
        <input type="checkbox" name="tags" value={"str3"} />
        <input type="date" name="createdAt" />
        <input type="date" name="updatedAt" />
      </form>
    </div>
  );
};

export default ArticlesForm;
