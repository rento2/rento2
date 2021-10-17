import React from "react";

import styles from "./index.module.scss";

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <a
        href="https://github.com/pankod"
        target="_blank"
        data-testid="pankod-logo"
      >
        <img
          src="/icons/pankod-icon.svg"
          alt="pankod"
          width="140"
          height="28"
        />
      </a>
      <div className={styles.icons} data-testid="icons-container">
        <a href="https://github.com/pankod" target="_blank">
          <img
            src="/icons/github-icon.svg"
            alt="github"
            width="28"
            height="29"
          />
        </a>
        <a href="https://twitter.com/PankodDev" target="_blank">
          <img
            src="/icons/twitter-icon.svg"
            alt="twitter"
            width="28"
            height="28"
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCBGOeQkv1XW3ptryLWlQbAQ"
          target="_blank"
        >
          <img
            src="/icons/youtube-icon.svg"
            alt="youtube"
            width="28"
            height="29"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/pankod-yazilim-ve-danismanlik/"
          target="_blank"
        >
          <img
            src="/icons/linkedin-icon.svg"
            alt="linkedin"
            width="28"
            height="32"
          />
        </a>
      </div>
    </div>
  );
};
