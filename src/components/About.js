import React from "react";

export default function About(props) {
  return (
    <>
      <h1
        className={`container text-center my-4 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div
          className={`accordion-item bg-${props.mode} text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <h2 className="accordion-header">
            <button
              className={`accordion-button bg-${props.mode} text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Our Mission
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              At [EditWaveApp], our mission is to empower individuals to
              express their ideas, thoughts, and creativity effortlessly through
              an innovative and user-friendly text editor. We believe that
              writing should be a joyful and seamless experience, free from
              distractions and limitations. Our goal is to provide writers of
              all levels, whether professionals, students, or hobbyists, with a
              versatile tool that enhances productivity and boosts inspiration.{" "}
              <br />
              We strive to create a collaborative environment where users can
              work together in real-time, breaking down barriers and fostering a
              sense of community. Our team is dedicated to continually improving
              and refining the app, adding new features, and incorporating user
              feedback to ensure that [EditWaveApp] remains a cutting-edge
              solution for all writing needs.
            </div>
          </div>
        </div>
        <div
          className={`accordion-item bg-${props.mode} text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed bg-${props.mode} text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Key Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Real-Time Collaboration: [EditWaveApp] enables multiple users to
              collaborate simultaneously on the same document. Whether it's
              co-writing a novel, editing a research paper, or brainstorming
              ideas for a project, our platform facilitates seamless teamwork
              and enhances productivity. <br />
              Distraction-Free Writing: We understand the importance of focus
              when it comes to writing. With [EditWaveApp]'s distraction-free
              mode, users can immerse themselves in their work, eliminating
              clutter and maintaining their creative flow. <br />
              Smart Editing Tools: Our text editor comes equipped with powerful
              editing tools such as spellcheck, grammar assistance, word count
              tracking, and version history. These features ensure that your
              writing is error-free, organized, and easy to manage throughout
              the writing process.
            </div>
          </div>
        </div>
        <div
          className={`accordion-item bg-${props.mode} text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed bg-${props.mode} text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Our Vision
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Looking ahead, we envision [EditWaveApp] becoming a central
              platform for writers, students, and professionals worldwide. Our
              commitment to constant improvement means that users can expect
              regular updates and exciting new features that cater to evolving
              writing trends and preferences. <br />
              We aspire to foster a thriving community of passionate writers who
              can connect, learn from each other, and collaborate on various
              projects. By facilitating seamless sharing and feedback, we hope
              to inspire and nurture creativity across the globe. <br />
              Ultimately, our vision is to redefine the way people approach
              writing. We want [EditWaveApp] to be synonymous with innovation,
              efficiency, and creative expression—a reliable companion that
              writers can trust to bring their ideas to life in the most
              delightful and effective way possible. Together, let's build a
              brighter future for writing with [EditWaveApp].
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
