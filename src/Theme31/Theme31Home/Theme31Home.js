import React from "react";
import Theme31Hero from "./Theme31Hero";
import Theme31About from "./Theme31About";
import Theme31MediaCareer from "./Theme31MediaCareer";
import Theme31Speaking from "./Theme31Speaking";
import Theme31Books from "./Theme31Books";
import Theme31SocialImpact from "./Theme31SocialImpact";
import Theme31Contact from "./Theme31Contact";

const Theme31Home = () => {
  return (
    <main>
      <section id="hero">
        <Theme31Hero />
      </section>
      <section id="about">
        <Theme31About />
      </section>
      <section id="media">
        <Theme31MediaCareer />
      </section>
      <section id="speaking">
        <Theme31Speaking />
      </section>
      <section id="books">
        <Theme31Books />
      </section>
      <section id="impact">
        <Theme31SocialImpact />
      </section>
      <section id="contact">
        <Theme31Contact />
      </section>
    </main>
  );
};

export default Theme31Home;
