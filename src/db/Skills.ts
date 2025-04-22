import html_img from "../assets/img/skills/html-logo.svg";
import cucumber_img from "../assets/img/skills/cucumber.webp";
import css_img from "../assets/img/skills/css-logo.svg";
import tailwind_img from "../assets/img/skills/tailwind-logo.svg";
import js_img from "../assets/img/skills/javascript-logo.svg";
import ts_img from "../assets/img/skills/typescript-logo.svg";
import react_img from "../assets/img/skills/react-logo.svg";
import redux_img from "../assets/img/skills/redux-logo.svg";
import git_img from "../assets/img/skills/git-logo.svg";
import github_img from "../assets/img/skills/github-logo.svg";
import cypress_img from "../assets/img/skills/cypress-logo.svg";
import storybook_img from "../assets/img/skills/storybook-logo.webp";
import nextjs_img from "../assets/img/skills/nextjs-logo.svg";
import mongodb_img from "../assets/img/skills/mongodb-logo.svg";

export interface Skill {
  id: string;
  label: string;
  img?: string;
  imgAlt?: string;
  color: string;
  colorOscuro: string;
  fondo: string;
}

export const Skills: Skill[] = [
  {
    id: "logo_html",
    label: "HTML",
    img: html_img,
    imgAlt: "Icono HTML",
    color: "hsl(17, 100%, 60%)",
    colorOscuro: "hsl(17, 100%, 60%)",
    fondo: "hsla(17, 100%, 50%, 0.2)",
  },
  {
    id: "logo_css",
    label: "CSS",
    img: css_img,
    imgAlt: "Icono CSS",
    color: "hsl(226, 100%, 70%)",
    colorOscuro: "hsl(226, 100%, 70%)",
    fondo: "hsla(226, 100%, 50%, 0.2)",
  },
  {
    id: "logo_tailwind",
    label: "Tailwind",
    img: tailwind_img,
    imgAlt: "Icono Tailwind",
    color: "hsl(198, 100%, 50%)",
    colorOscuro: "hsl(198, 100%, 40%)",
    fondo: "hsla(198, 100%, 50%, 0.2)",
  },
  {
    id: "logo_js",
    label: "JavaScript",
    img: js_img,
    imgAlt: "Icono JavaScript",
    color: "hsl(60, 100%, 50%)",
    colorOscuro: "hsl(60, 100%, 20%)",
    fondo: "hsla(60, 100%, 50%, 0.2)",
  },
  {
    id: "logo_ts",
    label: "TypeScript",
    img: ts_img,
    imgAlt: "Icono TypeScript",
    color: "hsl(211, 100%, 70%)",
    colorOscuro: "hsl(211, 100%, 40%)",
    fondo: "hsla(211, 100%, 30%, 0.2)",
  },
  {
    id: "logo_react",
    label: "React",
    img: react_img,
    imgAlt: "Icono React",
    color: "hsl(189, 100%, 70%)",
    colorOscuro: "hsl(189, 100%, 30%)",
    fondo: "hsla(189, 100%, 80%, 0.2)",
  },
  {
    id: "logo_redux",
    label: "Redux",
    img: redux_img,
    imgAlt: "Icono Redux",
    color: "hsl(263, 100%, 70%)",
    colorOscuro: "hsl(263, 100%, 40%)",
    fondo: "hsla(263, 100%, 50%, 0.2)",
  },
  {
    id: "logo_git",
    label: "Git",
    img: git_img,
    imgAlt: "Icono Git",
    color: "hsl(10, 100%, 70%)",
    colorOscuro: "hsl(10, 100%, 40%)",
    fondo: "hsla(10, 100%, 50%, 0.2)",
  },
  {
    id: "logo_github",
    label: "Github",
    img: github_img,
    imgAlt: "Icono Github",
    color: "hsl(270, 0%, 70%)",
    colorOscuro: "hsl(270, 0%, 100%)",
    fondo: "hsla(270, 0%, 20%, 0.7)",
  },
  {
    id: "logo_cypress",
    label: "Cypress",
    img: cypress_img,
    imgAlt: "Icono cypress",
    color: "hsl(270, 0%, 70%)",
    colorOscuro: "hsl(270, 0%, 40%)",
    fondo: "hsla(270, 0%, 50%, 0.2)",
  },
  {
    id: "logo_nextjs",
    label: "Next.js",
    img: nextjs_img,
    imgAlt: "Icono nextjs",
    color: "hsl(270, 0%, 10%)",
    colorOscuro: "hsla(270, 0%, 0%, 1)",
    fondo: "hsla(270, 0%, 100%, 0.6)",
  },
  {
    id: "logo_mongodb",
    label: "MongoDB",
    img: mongodb_img,
    imgAlt: "Icono nextjs",
    color: "hsl(490, 100%, 70%)",
    colorOscuro: "hsl(490, 100%, 30%)",
    fondo: "hsla(490, 100%, 70%, 10%)", 
  },
];


// Colores para skills que no son una tecnologia, por ejemplo ContextApi, Custom Hooks, etc.
const DEFAULT_COLOR = "hsl(270, 0%, 70%)";
const DEFAULT_COLOR_OSCURO = "hsl(270, 0%, 20%)";
const DEFAULT_FONDO = "hsla(270, 0%, 40%, 0.2)";

const AllSkills: Skill[] = [
  ...Skills,
  {
    id: "Context API",
    label: "Context API",
    color: DEFAULT_COLOR,
    colorOscuro: DEFAULT_COLOR_OSCURO,
    fondo: DEFAULT_FONDO,
  },
  {
    id: "Custom Hooks",
    label: "Custom Hooks",
    color: DEFAULT_COLOR,
    colorOscuro: DEFAULT_COLOR_OSCURO,
    fondo: DEFAULT_FONDO,
  },
  {
    id: "Microsoft Power Platform",
    label: "Microsoft Power Platform",
    color: DEFAULT_COLOR,
    colorOscuro: DEFAULT_COLOR_OSCURO,
    fondo: DEFAULT_FONDO,
  },
  {
    id: "Gherkin",
    label: "Gherkin",
    color: DEFAULT_COLOR,
    colorOscuro: DEFAULT_COLOR_OSCURO,
    fondo: DEFAULT_FONDO,
  },
  {
    id: "Selenium",
    label: "Selenium",
    color: DEFAULT_COLOR,
    colorOscuro: DEFAULT_COLOR_OSCURO,
    fondo: DEFAULT_FONDO,
  },{
    id: "Cucumber",
    label: "Cucumber",
    img: cucumber_img,
    imgAlt: "Icono Cucumber",
    color: "hsl(140, 100%, 60%)",
    colorOscuro: "hsl(140, 100%, 30%)",
    fondo: "hsla(140, 100%, 50%, 0.2)",
  },
  {
    id: "Storybook",
    label: "Storybook",
    img: storybook_img,
    imgAlt: "Icono Storybook",
    color: "hsl(330, 100%, 60%)",
    colorOscuro: "hsl(330, 100%, 30%)",
    fondo: "hsla(330, 100%, 50%, 0.2)",
  },
];

export const getSkills = (nombres: string[]): Skill[] => {
  return AllSkills.filter((skill) =>
    nombres.map((n) => n.toLowerCase()).includes(skill.label.toLowerCase())
  );
};
