import "./Footer.css";

export default function Footer() {
    return (
      <div className="footer"><b>
        🔥This weather app project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/susanne-van-oosterom-96a6991b2/"
          target="_blank"
          rel="noopener noreferrer"
          title="link to Susanne's LinkedIn page"
        >
          Susanne van Oosterom
        </a>{" "}
        and is open sourced on{" "}
        <a
          href="https://github.com/Santje777/dictionary-project"
          target="_blank"
          rel="noopener noreferrer"
          title="link to the github page of this site"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://susannesdictionary.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          title="link to netlify page"
        >
          Netlify 
        </a>🔥</b>
      </div>
    );
  }