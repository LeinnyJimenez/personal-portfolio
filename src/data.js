import autodidacta from './assets/autodidacta.jpg';
import diligente from './assets/diligente.jpg';
import versatilidad from './assets/versatilidad.jpg'

import nicolasCurso from './assets/nicolas-curso.jpg';
import anyelaCurso from './assets/anyela-curso.jpg';
import maximilianCurso from './assets/maximilian-curso.jpg'

import nicolas from './assets/nicolas.jpg';
import angela from './assets/angela.jpg';
import maximilian from './assets/maximilian.png';
import john from './assets/John.png';
import fernando from './assets/fernando.jpg'


export const links = [

    { id: '1', link: 'Personal Skills', to: 'skills' },
    { id: '2', link: 'Courses', to: 'courses' },
    { id: '3', link: 'Projects', to: 'projects' }
]

export const skills = [
    {
        id: '1',
        img: autodidacta,
        title: 'self-taught person',
        description: 'I have learned everything by myself using courses, tutorials and google researches, spending hundreds of hours proving my discipline and how much I love coding'
    },
    {
        id: '2',
        img: diligente,
        title: 'diligent',
        description: 'Every teacher from every course/tutorial has a different way of making the same functionality and most of them tell you what to do first and then they show you how. It has helped me to understand what they ask and trying to making by myself.'
    },
    {
        id: '3',
        img: versatilidad,
        title: 'versatile',
        description: 'Also, working with different courses and tutorials has taught how to work wiht different tecnologies and versions, name conventions, file and css structure, etc.'
    }
];

export const courses = [
    {
        id: 1,
        link: 'https://www.udemy.com/course/aprende-javascript-es9-html-css3-y-nodejs-desde-cero/',
        img: nicolasCurso,
        title: 'Aprende Javascript ES9, HTML, CSS3 y NodeJS desde cero',
        instructor: { name: 'Nicolas Shurmann', img: nicolas },
        completed: true,
        technologies: ['HTML', 'CSS', 'JavaScript', 'React JS', 'Node JS', 'APIs Rest', 'Serverless', 'Mongo DB']
    },
    {
        id: 2,
        link: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/',
        img: anyelaCurso,
        title: 'The Complete 2023 Web Development Bootcamp',
        instructor: { name: 'Dr. Angela Yu', img: angela },
        completed: true,
        technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React JS', 'Node JS', 'APIs Rest', 'Git and GitHub']
    },
    {
        id: 3,
        link: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
        img: maximilianCurso,
        title: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
        instructor: { name: 'Maximilian Schwarzmuller', img: maximilian },
        completed: true,
        technologies: ['React', 'React Hooks', 'Styled Components', 'Context API', 'Http Request', 'TypeScript', 'Custom Hooks', 'React Router']
    },
    {
        id: 4,
        link: 'https://www.udemy.com/course/react-tutorial-and-projects-course/',
        img: '',
        title: 'React 18 Tutorial and Projects Course (2023)',
        instructor: { name: 'John Smilga', img: john },
        completed: false,
        technologies: ['React', 'React Hooks', 'Styled Components', 'Context API', 'Http Request', 'Axios', 'Custom Hooks', 'React Router']
    },
    {
        id: 5,
        link: 'https://www.udemy.com/course/react-pro/',
        img: '',
        title: 'React PRO: Lleva tus bases al siguiente nivel',
        instructor: { name: 'Fernando Herrera', img: fernando },
        completed: false,
        technologies: ['React', 'React Hooks', 'Context API', 'Http Request', 'GitHub actions', 'component patterns', 'TypeScript 100 %', 'Formik', 'Dynamic Forms', 'Lazy Load', 'npm Deply']
    },
]