import {cinflix,c,cplus,react,typescript,gcp,mysql,python,instagram,linkedin,githubsocial,algorithmvisual,magiccards,quiz,mongo} from "./assests"
export const HEADER_NAV = ["#hero","#about","#w-experience","#projects"]

export const PROGRAMMING_SKILLS = [c,cplus,react,typescript,python,mysql,githubsocial,gcp,mongo]
export const SOCIAL_LINKS = [{img:githubsocial,link:'https://github.com/Batty-sk'},{img:linkedin,link:'https://www.linkedin.com/in/saurav-kumar-5225a2292/'},{img:instagram, link:''}]

export const WORK_EXPERIENCE = [{role:'Full Stack Intern',company:'Hoping Minds',duration:'6 months'},
    {role:'Frontend Developer',company:'Texium Solutions',duration:'working'}
]

export const PROJECTS = [{
    name:'Movie Companion App',
    image:cinflix,
    github:"https://github.com/Batty-sk/CineFlix",
    link:'https://cineflixhub.netlify.app'
},{
    name:'Quiz App',
    image:quiz,
    github:'https://github.com/Batty-sk/Quiz-App',
    link:'https://quiz-app-sigma-nine.vercel.app/'

},{
    name:'Algorithm Visualizer',
    image:algorithmvisual,
    github:'https://github.com/Batty-sk/A.L.G.O-',
    link:'https://a-l-g-o.vercel.app/'



},{
    name:'2d Magic Cards',
    image:magiccards,
    github:'https://github.com/Batty-sk/Magic-Cards-2D',
    link:'https://batty-sk.github.io/Magic-Cards-2D/'


}]