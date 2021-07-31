import { useState } from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function NavBar() {
  const [session, loading] = useSession();
  // TODO: add next-auth login
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // TODO: check if all the tailwind classes are necessary
    <nav className="inset-x-0 top-0 p-4 sm:px-8 h-16 bg-gray-900 shadow-lg fixed z-10">
      <div className="flex">
        {/* logo */}
        <div className="flex space-x-2">
          <div className="w-6">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 282 318"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>WatchTime</title>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Logo"
                  transform="translate(-121.000000, -97.000000)"
                  stroke="currentColor"
                  strokeWidth="25"
                >
                  <path
                    d="M366,245.5131 L366,387 L164.56489,387 L164.56489,245.5131 L366,245.5131 Z M335.031699,125 L353.378875,175.634546 L164.347176,244.74505 L146,194.110504 L335.031699,125 Z"
                    id="WatchTime"
                    transform="translate(256.000000, 256.000000) rotate(-12.000000) translate(-256.000000, -256.000000) "
                  ></path>
                </g>
              </g>
            </svg>
          </div>

          <div className="flex text-xl">
            <span className="font-light">watch</span>
            <span className="font-bold">time</span>
          </div>
        </div>

        {/* navigation menu options */}
        <div className="hidden sm:flex px-4 space-x-4">
          <div className="flex items-end">
            <Link href="/questions">home</Link>
          </div>
          <div className="flex items-end">
            <Link href="/search">search</Link>
          </div>
          <div className="flex items-end">
            <Link href="/about">about</Link>
          </div>
        </div>

        {/* spacing */}
        <div className="flex-grow"></div>

        {/* mobile navigation button */}
        <button
          className="sm:hidden flex items-end"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {!menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>

        {/* login button */}
        <div className="hidden sm:flex items-end cursor-pointer">
          {!session && (
            <a
              href="/api/auth/signin"
              onClick={(event) => {
                event.preventDefault();
                signIn();
              }}
            >
              log in
            </a>
          )}
          {session?.user && (
            // TODO: add another menu to add sign out and other options (profile, watchlist, ...)
            <a
              href="/api/auth/signout"
              onClick={(event) => {
                event.preventDefault;
                signOut();
              }}
            >
              <span className="pr-1">hi,</span>
              <span className="font-bold">
                {session.user.name?.split(' ')[0]}
              </span>
            </a>
          )}
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={
          (menuOpen ? 'flex flex-col' : 'hidden') +
          ' sm:hidden text-center p-4 px-6 -m-4 mt-5 space-y-4 bg-gray-800'
        }
      >
        <div>
          <Link href="/questions">home</Link>
        </div>
        <div>
          <Link href="/search">search</Link>
        </div>
        <div>
          <Link href="/about">about</Link>
        </div>
        <div>
          {!session && (
            <a
              href="/api/auth/signin"
              className="inline"
              onClick={() => signIn()}
            >
              log in
            </a>
          )}
          {session?.user && (
            // TODO: add extra menu options for sign out, profile, watchlist, ...
            <a
              href="/api/auth/signout"
              className="inline"
              onClick={() => signOut()}
            >
              <span className="pr-1">hi,</span>
              <span className="font-bold">
                {session.user.name?.split(' ')[0]}
              </span>
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
