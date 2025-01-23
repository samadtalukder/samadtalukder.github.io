import React from "react";

const Blog = ({blogInfo}) => {
    let blogData;
    blogData = blogInfo.map((blog) => (
        <div
            key={blog}
            className="bg-[#eaf1f8] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
        >
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-[#5383eb] mb-2">
                    {blog.title}
                </h3>
                <p className="text-gray-600">
                    {blog.description}
                </p>
            </div>
        </div>
    ));

    return (
        <section id="blog" className="flex flex-col pt-60 lg:pt-65">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Blogs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogData}
                </div>

            </div>

        </section>
    );

}

export default Blog;