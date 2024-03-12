import { Skill, getSkills } from "@db/SkillsInfinteScroll";
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
    descripcion: ["a"],
    logoEmpresa: xoborg_img,
    lugar: "Salamanca, Castilla y León, España",
    nombrePuesto: "Desarrollador Frontend",
    aptitudes: getSkills(["react", "redux", "electron", "storybook"]),
  },
  {
    fechaInicio: new Date(2022, 9),
    fechaFin: new Date(2023, 5),
    nombreEmpresa: "NTT Data Europe & Latam",
    descripcion: ["a"],
    logoEmpresa: nttdata_img,
    lugar: "Salamanca, Castilla y León, España",
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
    lugar: "Rzeszow, Subcarpatia, Polonia",
    nombrePuesto: "Intern",
    aptitudes: [],
  },
];

export const getCadenaFechas = (fInicio: Date, fFin?: Date): string => {
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const getFormattedDate = (date: Date): string => {
    return `${meses[date.getMonth()]} ${date.getFullYear()}`;
  };

  const fechaInicioStr = getFormattedDate(fInicio);
  const fechaFinStr = fFin ? getFormattedDate(fFin) : "Actualidad";

  const diffYears =
    (fFin ? fFin.getFullYear() : new Date().getFullYear()) -
    fInicio.getFullYear();
  const diffMonths =
    (fFin ? fFin.getMonth() : new Date().getMonth()) - fInicio.getMonth() + 1;
  const totalMonths = diffYears * 12 + diffMonths;

  if (totalMonths < 12) {
    return `${fechaInicioStr} - ${fechaFinStr} (${totalMonths} mes${
      totalMonths !== 1 ? "es" : ""
    })`;
  } else {
    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;
    if (remainingMonths === 0) {
      return `${fechaInicioStr} - ${fechaFinStr} (${years} año${
        years !== 1 ? "s" : ""
      })`;
    } else {
      return `${fechaInicioStr} - ${fechaFinStr} (${years} año${
        years !== 1 ? "s" : ""
      } y ${remainingMonths} mes${remainingMonths !== 1 ? "es" : ""})`;
    }
  }
};
