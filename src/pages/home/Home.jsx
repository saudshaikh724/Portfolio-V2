import { Canvas } from "@react-three/fiber";
import React, { useContext, useEffect, useState} from "react";
import { useInView } from "react-intersection-observer";
import { NavbarContext } from "../../context";
import Dog from "./Dog";
import { Grid, PageHeader } from "../../components/ui";
import { Educations, Paragraph, SkillsWrapper, Text } from "../About/About.styled";
import Skills from "../About/SkillBall";

import {
  AnimatedSpan,
  DogContainer,
  HomeWrapper,
  Name,
  Position,
  TextContainer,
} from "./Home.styled";

export const Home = () => {
  // const { ref, inView } = useInView({
  //   threshold: 1,
  // });
  const { ref, inView } = useInView({});
  const [show, setShow] = useState(inView);
  useEffect(() => {
    setShow(inView);
  }, [inView]);

  const setPage = useContext(NavbarContext);

  useEffect(() => {
    if (inView) {
      setPage("home");
    }
  }, [inView]);

  const produceSpans = (name) => {
    return name.split("").map((letter, index) => (
      <AnimatedSpan
        index={index}
        letter={letter}
        aria-hidden="true"
        key={index}
      >
        {letter}
      </AnimatedSpan>
    ));
  };
  return (
    
    <HomeWrapper ref={ref} id="home-page">
      <TextContainer>
        <Name>Saud Shaikh</Name>
        <Position>
          <div className="text first" aria-label="Full Stack Developer">
            {produceSpans("Full Stack Developer")}
          </div>
          <div className="text second" aria-label="UI/UX Enthusiast">
            {produceSpans("Backend Enthusiast")}
          </div>
        </Position>
      </TextContainer>
      {/* <DogContainer>
        <Canvas camera={{ position: [0, 2, 5] }}>
          <Dog />
        </Canvas>
      </DogContainer> */}
      <DogContainer>
            <Canvas camera={{ position: [0, 0, 18] }}>
              <Skills />
            </Canvas>
        </DogContainer>
    </HomeWrapper>
  );
};
