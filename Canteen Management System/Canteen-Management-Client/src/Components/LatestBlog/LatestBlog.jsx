import { IoShareSocialOutline } from "react-icons/io5";
import { RiMessage2Line } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import UseBlogs from "../../AxiosFetch/UseBlogs";
import { useState } from "react";

const LatestBlog = () => {
  const [blogs] = UseBlogs();
  const [showFullContent, setShowFullContent] = useState({});

  const toggleContent = (blogId) => {
    setShowFullContent((prevState) => ({
      ...prevState,
      [blogId]: !prevState[blogId],
    }));
  };

  const renderContent = (content, blogId) => {
    const maxLength = 150;
    if (showFullContent[blogId]) {
      return content;
    }
    return content.length > maxLength
      ? content.substring(0, maxLength) + "..."
      : content;
  };

  return (
    <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100 mx-auto">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-5xl font-bold">
            <span className="text-[#FF9F0D]">La</span>test News & Blog
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 ">
          {blogs
            .slice()
            .reverse()
            .slice(0, 3)
            .map((blog) => (
              <article
                className="flex flex-col dark:bg-gray-900 border-2"
                key={blog._id}
              >
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <img
                    alt=""
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src={blog.photo}
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  ></a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className=""
                    style={{
                      fontFamily: "inter, sans-serif",
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                  >
                    <span className="text-[#FF9F0D]">{blog.date}</span>
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                    {renderContent(blog.description, blog._id)}
                  </h3>
                </div>
                <div className="flex justify-between p-4">
                  <button onClick={() => toggleContent(blog._id)}>
                    {showFullContent[blog._id] ? "Read Less" : "Read More"}
                  </button>
                  <div className="flex gap-1">
                    <span className="text-xl">
                      <AiOutlineLike />
                    </span>
                    <span className="text-xl text-[#FF9F0D]">
                      <RiMessage2Line />
                    </span>
                    <span className="text-xl">
                      <IoShareSocialOutline />
                    </span>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
