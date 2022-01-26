import Link from 'next/link';

import NowPlaying from 'components/NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <NowPlaying />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/guestbook">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Guestbook
            </a>
          </Link>
          <Link href="/newsletter">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Newsletter
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Dashboard
            </a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-600 transition">
              About
            </a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Blog
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/principles">
            <a className="text-gray-500 hover:text-gray-600 transition">Principles</a>
          </Link>
          <Link href="/now">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Now
            </a>
          </Link>
          <Link href="/continuity">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Continuity
            </a>
          </Link>
          <Link href="/office-hours">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Office Hours
            </a>
          </Link>
          <Link href="/talks">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Talks
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://0xff.cafe/@d">
            Mastodon
          </ExternalLink>
          <ExternalLink href="https://github.com/spacecowb0y">GitHub</ExternalLink>
          <ExternalLink href="https://last.fm/user/diego_ar">
            Last.fm
          </ExternalLink>
          <ExternalLink href="https://www.goodreads.com/user/show/46795449-diego-peralta">
            Goodreads
          </ExternalLink>
          <ExternalLink href="https://ar.linkedin.com/in/dperalta">
            LinkedIn
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
