import React from "react";
import {
  AiFillGithub,
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

function Footer() {
  return (
    <div>
      <footer className=" bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="/" className="hover:underline">
            The Charlotte Benefit™
          </a>
          . All Rights Reserved.
        </span>
        <div className="social-links">
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <p className="icons">
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  className="mr-4 hover:underline md:mr-6"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  className="mr-4 hover:underline md:mr-6"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  className="hover:underline"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  className="hover:underline"
                >
                  <AiFillLinkedin />
                </a>
              </li>
            </p>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
