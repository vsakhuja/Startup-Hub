import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import FAQ from "components/faqs/SingleCol.js";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <FeatureWithSteps
        subheading={<Subheading>STEPS</Subheading>}
        heading={
          <>
            Easy to <HighlightedText>Get Started.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc="https://img.freepik.com/free-vector/customer-support-flat-illustration_23-2148892786.jpg?t=st=1656153975~exp=1656154575~hmac=274b61cc84b6cd70cdfc72d5ace9633bca70e4379b515ef9bb720ec1a41188a3&w=900"
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <MainFeature2
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            Some notable features of <HighlightedText>GUSEC</HighlightedText>
          </>
        }
        imageSrc="https://img.freepik.com/free-vector/programmer-graphic-designer-characters-create-website-man-with-laptop-woman-with-tablet-deve_107791-7443.jpg?t=st=1656154053~exp=1656154653~hmac=66a320e97d889929e397f3c63d924db1b4fd1f5231489b9f0f5aea3b82346f32&w=740"
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: "Endless Support",
            description:
              "You get a wide variety of support 24x7 across various domains. You get an endless support of our services",
            iconContainerCss: tw`bg-green-300 text-green-800`,
          },
          {
            Icon: BriefcaseIcon,
            title: "Professional Help",
            description:
              "We assure you that our reviews are created by professionals in that specific domain in which you apply.",
            iconContainerCss: tw`bg-red-300 text-red-800`,
          },
        ]}
      />

      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            You have <HighlightedText>Questions?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "Why Us?",
            answer:
              "The key objective of the Gujarat Industrial Policy 2020 is to encourage R&D, start innovation and entrepreneurship. Hence, the new scheme is being introduced in order to support startups and innovation at different levels of a startup cycle.",
          },
          {
            question: "Who are our partners?",
            answer:
              "Gujrat CSR Authority, The entepreneur's organization, Motwani Jadeja Foundation, tIE Ahemdabad, Center for Enterprenuership Development, Launch Academy, UNICEF, Meity Startup Hub",
          },
          {
            question: "Recognition of GUSEC ?",
            answer:
              "Atal Innovation Mission, SSIP, Startup India, Gujrat University, Industries Commissionerate, Department Of Science and Technology",
          },

          {
            question: "Are there any job positions available in GUSEC ?",
            answer:
              "There are currently no job positions available at GUSEC. However, you may check out the job openings available with our startups.",
          },
          {
            question: "What is FabLab ?",
            answer:
              "Set up in 2019, the FabLab at GUSEC consists of 2,000 square feet of working space, which will be scaled up to 10,000 square feet. It is being used for educational events like training, events, workshops, collaboration among diverse stakeholders and consultations. It is equipped with state-of-the-art 3D printers, vinyl cutters, IoT & electronics kits, soldering station & soldering rework station, Do-It-Yourself (DIY) kits and other prototyping equipment.",
          },
        ]}
      />
    </AnimationRevealPage>
  );
};
