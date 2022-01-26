import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import Subscribe from '../components/Subscribe';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col">
            <h1 className="uppercase text-xl mb-3 text-gray-600 dark:text-gray-400">
              Diego Peralta
            </h1>
            <p className="font-serif font-bold text-2xl text-black dark:text-white mb-16">
              Software Engineer with over 15 years of industry experience delivering mission-critical projects
            </p>
          </div>
          <div className="w-[100px] h-[100px] sm:w-[350px] sm:h-[155px] relative mb-8 sm:mb-0 mr-auto bg-cover bg-avatar-normal hover:bg-avatar-glitched rounded-lg shadow-lg">
          </div>
        </div>
        <h3 className="uppercase text-xl mb-6 text-black dark:text-white">
          Featured Posts
        </h3>
        <div className="flex gap-6 flex-col md:flex-row">
          <BlogPostCard
            title="The books I read in 2021"
            slug="the-books-i-read-in-2021"
            gradient="from-[#7950e8] via-[#ae2ba5]  to-[#ac255f]"
          />
          <BlogPostCard
            title="How a side project lead me to my current job"
            slug="how-a-side-project-lead-me-to-my-new-job"
            gradient="from-[#342963] via-[#89557a] to-[#cfa3a4]"
          />
          <BlogPostCard
            title="Goodbye 20s: A decade in review"
            slug="a-decade-in-review"
            gradient="from-[#9fa147] via-[#ef8e8a] to-[#acb6ef]"
          />
        </div>
        <Link href="/blog">
          <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            Read all posts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>
        <span className="h-16" />
        <Subscribe />
      </div>
    </Container>
  );
}
