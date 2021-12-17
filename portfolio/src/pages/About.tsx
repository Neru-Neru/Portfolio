import type { NextPage } from "next";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const About: NextPage = () => {
  return (
    <div>
      <h1>
        Hi, I am <span>Yuma.</span>
      </h1>

      <h2>An Engeneer.</h2>
      <p></p>

      <div>
        <a href="">Resume</a>
        <div>
          <a
            href="https://github.com/Neru-Neru"
            aria-label="github"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>

          <a
            href="https://twitter.com/falconneer"
            aria-label="linkedin"
            className="link link--icon"
          >
            <TwitterIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
