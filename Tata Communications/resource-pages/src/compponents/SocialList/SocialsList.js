import React from "react";
import "./SocialList.css";
import socials from "../../const/SocialImages";

const SocialsList = (props) => {
  return (
    <div className={`${props.classNameProp}`}>
      <ul className="social-parent">
        {socials.map((social, key) => {
          return (
            <li key={key} className="social-item">
              <img src={social.url} alt="social-icon" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialsList;
