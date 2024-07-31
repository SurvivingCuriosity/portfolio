import { Skill, getSkills } from "@db/Skills";
import nmi_img from "@img/empresas/nmi.webp";
import xoborg_img from "@img/empresas/xoborg.webp";
import nttdata_img from "@img/empresas/nttdata.webp";

export interface ExperienciaLaboral {
  fechaInicio: Date;
  fechaFin?: Date;
  nombreEmpresa: string;
  lugar: string;
  remote?: boolean;
  logoEmpresa: string;
  nombrePuesto: string;
  descripcion: string[];
  aptitudes: Skill[];
}

export const ExperienciasLaborales: ExperienciaLaboral[] = [
  {
    fechaInicio: new Date(2023, 5),
    nombreEmpresa: "Xoborg Technologies SL",
    descripcion: [
      `Working at this development company has been an extremely rewarding experience as a frontend developer. The collaborative environment and access to the latest technologies have allowed me to grow professionally and stay updated.`,
      `The work culture is inclusive and flexible, facilitating a healthy balance between personal and professional life. Additionally, the opportunity to work with a talented and motivated team has made every project exciting and full of learning.`,
      `Overall, being part of this company has given me the opportunity to continuously improve my skills while enjoying a positive and motivating work environment.`
    ],
    logoEmpresa: xoborg_img,
    lugar: "Salamanca, Castilla y León, Spain",
    nombrePuesto: "Frontend Developer",
    aptitudes: getSkills(["react", "redux", "electron", "storybook"]),
  },
  {
    fechaInicio: new Date(2022, 9),
    fechaFin: new Date(2023, 5),
    nombreEmpresa: "NTT Data Europe & Latam",
    descripcion: ["a"],
    logoEmpresa: nttdata_img,
    lugar: "Salamanca, Castilla y León, Spain",
    nombrePuesto: "Junior QA Tester",
    remote: true,
    aptitudes: [],
  },
  {
    fechaInicio: new Date(2023, 2),
    fechaFin: new Date(2023, 5),
    nombreEmpresa: "NMI ERP",
    descripcion: ["a"],
    logoEmpresa: nmi_img,
    lugar: "Rzeszow, Subcarpatia, Poland",
    nombrePuesto: "Intern",
    aptitudes: [],
  },
];

export const getCadenaFechas = (fInicio: Date, fFin?: Date): string => {
  const meses = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getFormattedDate = (date: Date): string => {
    return `${meses[date.getMonth()]} ${date.getFullYear()}`;
  };

  const fechaInicioStr = getFormattedDate(fInicio);
  const fechaFinStr = fFin ? getFormattedDate(fFin) : "Present";

  const diffYears =
    (fFin ? fFin.getFullYear() : new Date().getFullYear()) -
    fInicio.getFullYear();
  const diffMonths =
    (fFin ? fFin.getMonth() : new Date().getMonth()) - fInicio.getMonth() + 1;
  const totalMonths = diffYears * 12 + diffMonths;

  if (totalMonths < 12) {
    return `${fechaInicioStr} - ${fechaFinStr} (${totalMonths} month${
      totalMonths !== 1 ? "s" : ""
    })`;
  } else {
    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;
    if (remainingMonths === 0) {
      return `${fechaInicioStr} - ${fechaFinStr} (${years} year${
        years !== 1 ? "s" : ""
      })`;
    } else {
      return `${fechaInicioStr} - ${fechaFinStr} (${years} year${
        years !== 1 ? "s" : ""
      } and ${remainingMonths} month${remainingMonths !== 1 ? "s" : ""})`;
    }
  }
};
