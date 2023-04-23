import autodidacta from './assets/autodidacta.jpg';
import diligente from './assets/diligente.jpg';
import versatilidad from './assets/versatilidad.jpg'

import nicolasCurso from './assets/nicolas-curso.jpg';
import anyelaCurso from './assets/anyela-curso.jpg'


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
        title: 'versatility',
        description: 'Also, working with different courses and tutorials has taught how to work wiht different tecnologies and versions, name conventions, file and css structure, etc.'
    }
];

export const courses = [
    {
        id: 1,
        img: nicolasCurso,
        title: 'Aprende Javascript ES9, HTML, CSS3 y NodeJS desde cero',
        instructor: { name: 'Nicolas Shurmann', img: '' },
        completed: true,
        technologies: ['HTML', 'CSS', 'JavaScript', 'React JS', 'Node JS', 'APIs Rest', 'Serverless', 'Mongo DB']
    },
    {
        id: 2,
        img: anyelaCurso,
        title: 'The Complete 2023 Web Development Bootcamp',
        instructor: { name: 'Dr. Angela Yu', img: '' },
        completed: true,
        technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React JS', 'Node JS', 'APIs Rest', 'Git and GitHub']
    },
]