import html_img from "../assets/img/skills/html-logo.svg";
import css_img from "../assets/img/skills/css-logo.svg";
import tailwind_img from "../assets/img/skills/tailwind-logo.svg";
import js_img from "../assets/img/skills/javascript-logo.svg";
import ts_img from "../assets/img/skills/typescript-logo.svg";
import react_img from "../assets/img/skills/react-logo.svg";
import redux_img from "../assets/img/skills/redux-logo.svg";
import git_img from "../assets/img/skills/git-logo.svg";
import github_img from "../assets/img/skills/github-logo.svg";

export interface Skill {
  id: string;
  label: string;
  img: string;
  imgAlt: string;
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
    color: 'hsl(17, 100%, 60%)', // Naranja
    colorOscuro: 'hsl(17, 100%, 60%)', // Naranja
    fondo: 'hsla(17, 100%, 50%, 0.2)' // Naranja semitransparente
  },
  {
    id: "logo_css",
    label: "CSS",
    img: css_img,
    imgAlt: "Icono CSS",
    color: 'hsl(226, 100%, 70%)', // Azul
    colorOscuro: 'hsl(226, 100%, 70%)', // Azul
    fondo: 'hsla(226, 100%, 50%, 0.2)' // Azul semitransparente
  },
  {
    id: "logo_tailwind",
    label: "Tailwind",
    img: tailwind_img,
    imgAlt: "Icono Tailwind",
    color: 'hsl(198, 100%, 50%)', // Azul
    colorOscuro: 'hsl(198, 100%, 40%)', // Azul
    fondo: 'hsla(198, 100%, 50%, 0.2)' // Azul semitransparente
  },
  {
    id: "logo_js",
    label: "JavaScript",
    img: js_img,
    imgAlt: "Icono JavaScript",
    color: 'hsl(60, 100%, 50%)', // Amarillo
    colorOscuro: 'hsl(60, 100%, 20%)', // Amarillo
    fondo: 'hsla(60, 100%, 50%, 0.2)' // Amarillo semitransparente
  },
  {
    id: "logo_ts",
    label: "TypeScript",
    img: ts_img,
    imgAlt: "Icono TypeScript",
    color: 'hsl(211, 100%, 70%)', // Azul oscuro
    colorOscuro: 'hsl(211, 100%, 40%)', // Azul oscuro
    fondo: 'hsla(211, 100%, 30%, 0.2)' // Azul oscuro semitransparente
  },
  {
    id: "logo_react",
    label: "React",
    img: react_img,
    imgAlt: "Icono React",
    color: 'hsl(189, 100%, 70%)', // Azul claro
    colorOscuro: 'hsl(189, 100%, 40%)', // Azul claro
    fondo: 'hsla(189, 100%, 80%, 0.2)' // Azul claro semitransparente
  },
  {
    id: "logo_redux",
    label: "Redux",
    img: redux_img,
    imgAlt: "Icono Redux",
    color: 'hsl(263, 100%, 70%)', // Morado
    colorOscuro: 'hsl(263, 100%, 40%)', // Morado
    fondo: 'hsla(263, 100%, 50%, 0.2)' // Morado semitransparente
  },
  {
    id: "logo_git",
    label: "Git",
    img: git_img,
    imgAlt: "Icono Git",
    color: 'hsl(10, 100%, 70%)', // Morado
    colorOscuro: 'hsl(10, 100%, 40%)', // Morado
    fondo: 'hsla(10, 100%, 50%, 0.2)' // Morado semitransparente
  },
  {
    id: "logo_github",
    label: "Github",
    img: github_img,
    imgAlt: "Icono Github",
    color: 'hsl(270, 0%, 70%)', // Morado
    colorOscuro: 'hsl(270, 0%, 40%)', // Morado
    fondo: 'hsla(270, 0%, 50%, 0.2)' // Morado semitransparente
  },
];

export const getSkills = (nombres: string[]): Skill[] => {
  return Skills.filter(skill => nombres.includes(skill.label.toLowerCase()));
};
