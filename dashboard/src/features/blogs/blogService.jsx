import axios from "axios";
import { config } from "../../utils/Axiosconfig";

import { Base_url } from "../../utils/Base_url";

const getBlogs = async () => {
  const response = await axios.get(`${Base_url}blog/`);

  return response.data;
};

const createBlog = async (blog) => {
  const response = await axios.post(`${Base_url}blog/`, blog, config);

  return response.data;
};
const updateBlog = async (blog) => {
  const response = await axios.put(
    `${Base_url}blog/${blog.id}`,
    {
      title: blog.blogData.title,
      description: blog.blogData.description,
      category: blog.blogData.category,
      images: blog.blogData.images,
    },
    config
  );

  return response.data;
};
const getBlog = async (id) => {
  const response = await axios.get(`${Base_url}blog/${id}`, config);

  return response.data;
};

const deleteBlog = async (id) => {
  const response = await axios.delete(`${Base_url}blog/${id}`, config);

  return response.data;
};

const blogService = {
  getBlogs,
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
};

export default blogService;
