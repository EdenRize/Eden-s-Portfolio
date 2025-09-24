import { InteractiveAvatar } from "./InteractiveAvatar";
import { SocialLink } from "./SocialLink";

export function Hero() {
  const socials = [
    {
      name: "gmail",
      link: "mailto:edenrize@gmail.com",
    },
    {
      name: "github",
      link: "https://github.com/EdenRize",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/eden-rize-9476541b7/",
    },
  ];

  return (
    <div className="hero full-section">
      <InteractiveAvatar />

      {/* Mobile layout - grouped together */}
      <div className="mobile-layout">
        <div className="text-content">
          <div className="header-container">
            <h1 className="font-Gilmer-Outline">
              <span className="span-1">Hello!</span>{" "}
              <span className="span-2">I'm</span>{" "}
              <span className="span-3">Eden</span>
            </h1>
            <h2 className="font-Gilmer-Bold">
              <span className="span-4">I</span>{" "}
              <span className="span-5">develope</span>{" "}
              <span className="span-6">Creative</span>{" "}
              <span className="span-7">&</span>{" "}
              <span className="span-8">Interactive</span>{" "}
              <span className="span-9">webapps</span>{" "}
              <span className="span-10">🚀</span>
            </h2>
          </div>

          <p className="font-Gilmer-Light pre-line">
            I'm a Full-Stack Developer and Tech Lead with hands-on experience since October 2023, specializing in building seamless and intuitive user experiences.
            <br />I leverage modern technologies — including <span className="font-Gilmer-Bold">ReactJS, Vue, React Native and NodeJS</span> — to develop high-quality, dynamic web applications.
            <br />My focus is on delivering clean, efficient, and scalable solutions, and I take pride in leading development efforts to drive impactful results.
          </p>
        </div>

        <div className="flex align-center justify-center img-container">
          <img src="/img/girl-code.png" />
        </div>
      </div>

      {/* Desktop layout - separated like before */}
      <div className="desktop-layout">
        <div className="header-container">
          <h1 className="font-Gilmer-Outline">
            <span className="span-1">Hello!</span>{" "}
            <span className="span-2">I'm</span>{" "}
            <span className="span-3">Eden</span>
          </h1>
          <h2 className="font-Gilmer-Bold">
            <span className="span-4">I</span>{" "}
            <span className="span-5">develope</span>{" "}
            <span className="span-6">Creative</span>{" "}
            <span className="span-7">&</span>{" "}
            <span className="span-8">Interactive</span>{" "}
            <span className="span-9">webapps</span>{" "}
            <span className="span-10">🚀</span>
          </h2>
        </div>

        <div className="flex space-between content-container">
          <p className="font-Gilmer-Light pre-line">
            I'm a Full-Stack Developer and Tech Lead with hands-on experience since October 2023, specializing in building seamless and intuitive user experiences.
            <br />I leverage modern technologies — including <span className="font-Gilmer-Bold">ReactJS, Vue, React Native and NodeJS</span> — to develop high-quality, dynamic web applications.
            <br />My focus is on delivering clean, efficient, and scalable solutions, and I take pride in leading development efforts to drive impactful results.
          </p>

          <div className="flex align-center justify-center img-container">
            <img src="/img/girl-code.png" />
          </div>
        </div>
      </div>

      <div className="flex space-between align-center socials-container">
        {socials.map((social) => {
          return (
            <SocialLink
              key={social.name}
              name={social.name}
              imgUrl={`/img/${social.name}.svg`}
              link={social.link}
            />
          );
        })}
      </div>
    </div>
  );
}
