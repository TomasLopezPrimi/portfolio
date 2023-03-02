// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithubSquare,
  FaLink,
} from "react-icons/fa";
import { SiChakraui, SiJavascript, SiStyledcomponents, SiFirebase } from "react-icons/si";

// Projects Images (add your images to the images directory and import below)
//import LogoReact from "./images/logo.svg";
import Ecommerce from "./images/ecommerce.png"
import ListadoPeliculas from "./images/listado-peliculas.png"
import JuegoDados from "./images/juego-dados.png"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "TomasLopezPrimi";

// Blog link icon (imported above)
export const Blog = <FaLink />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Desde el 2021 estudiando y haciendo proyectos de Web, recientemente consiguiendo aprobar el curso de 'React Js' de CoderHouse.. buscando trabajar como Desarrollador de React";
export const certificado = "https://www.coderhouse.com/certificados/63fec936e1d22b000e169ba0"

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <SiChakraui className="display-4" />,
    name: "Chakra",
  },
  {
    id: 5,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <SiStyledcomponents className="display-4" />,
    name: "Styled Components",
  },
  {
    id: 7,
    skill: <SiFirebase className="display-4" />,
    name: "Firebase",
  },
  {
    id: 8,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const curriculum = "https://drive.google.com/file/d/1fMhDAjlhn6o3UGB9JupV5YpuhCI5ZfLl/view?usp=sharing";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["CoderHouse", "listado-peliculas", "proyecto-juego-dados"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: "CoderHouse",
    image: Ecommerce,
  }, 
  {
    name: "listado-peliculas",
    image: ListadoPeliculas
  },
  {
    name: "juego-dados",
    image: JuegoDados
  }
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/moqzdpnd";
