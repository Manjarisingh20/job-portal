import React from "react";

const posts = [
  {
    tag: "Career",
    title: "Workplace Morale: Tactics for Boosting Employee Engagement in 2024",
    img: "/Images/blog1.jpg"
  },
  {
    tag: "Hiring",
    title: "Top 10 Most Common Job Interview Mistakes",
    img: "/Images/blog2.jpg"
  }
];

const NewsBlog = () => (
  <section className="px-4 py-16 md:px-20">
    <h2 className="text-center text-4xl font-bold mb-6">News and Blog</h2>
    <p className="text-center text-sm text-gray-600 mb-10 max-w-xl mx-auto">
      Valuable tips and tricks to help you land your dream job faster and easier.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post, idx) => (
        <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm">
          <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <span className="text-xs text-white bg-button-bg px-2 py-1 rounded-full">{post.tag}</span>
            <h3 className="mt-3 font-semibold text-gray-800 text-sm">{post.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default NewsBlog;
