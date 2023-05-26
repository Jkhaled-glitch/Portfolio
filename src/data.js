//Apps&websites Icons
import Location from './assets/location.png'
import LocationAdmin from './assets/location-admin.png'
import Communiteam from './assets/communiteam.png'
import Weather from './assets/weather.png'
import Hyngry from './assets/hyngry.png'
import TicTacToe from './assets/tictactoe.png'
import TimeTable from './assets/timetable.png'


import User1 from './assets/user1.jfif'
import User2 from './assets/user2.jfif'
import User3 from './assets/user3.jfif'

//icons
import Experience from '@mui/icons-material/WorkspacePremiumOutlined';
import Group from '@mui/icons-material/GroupOutlined';
import Project from '@mui/icons-material/WorkOutlined';

import UserFace from "./assets/me.jpg"



export const data = 
    {
      userName: "khaled",
      lastName: "Jouablia",
      email: "khaledjb584@gmail.com",
      profil:"Web & Mobile Developer",
      userFace:UserFace,
      profilDescription:
      "My name is Khaled Jouablia, a 24-year-old Tunisian student specializing in Business Intelligence . I completed my high school education with honors at Ghardimaou Secondary School in 2018 and went on to obtain a Bachelor's degree in Management Informatics, focusing on Business Intelligence, from FSEGJ in 2022. During my studies, I developed a website for an online retail platform as my final year project. Currently, I am pursuing a Professional Master's degree in Mobile Application Development at Iset de Rades. With a passion for programming and a drive for innovation, I am enthusiastic about utilizing my skills to create cutting-edge mobile applications. I thrive in collaborative environments, possess strong problem-solving abilities, and continuously strive to enhance my expertise in web and mobile app development."
      ,
      
      cards:[
        {
            icon:Experience,
            title: "Experience",
            content:"Since 2016"
 
         },
        {
            icon:Group,
            title: "Teams",
            content:"Iset rades Teams"
 
         },
         {
            icon:Project,
            title: "Projects",
            content:"+10 projects"
 
         },
      ],
      experiences :[
        {
            title:"Frontend Developer",
            elements:[
                {
                    title:"JavaScript",
                    level:"Experienced"
                },
                {
                    title:"React JS",
                    level:"Experienced"
                },
                {
                    title:"HTML 5 ",
                    level:"Experienced"
                },
                {
                    title:"CSS 3",
                    level:"Experienced"
                },  
            ]

        },
        {
            title:"Backend Developer",
            elements:[
                {
                    title:"Node JS",
                    level:"Experienced"
                },
                {
                    title:"PHP",
                    level:"Experienced"
                },
                {
                    title:"JAVA",
                    level:"Experienced"
                },
                {
                    title:"MySQL",
                    level:"Experienced"
                },
               
                
            ]

        },
        {
            title:"Mobile Developer",
            elements:[
               {
                    title:"Java",
                    level:"Experienced"
                },
                {
                    title:"Kotlin",
                    level:"Meduim"
                },
                {
                    title:"Dart",
                    level:"Experienced"
                },
                {
                    title:"Swift",
                    level:"Meduim"
                },
               
                
            ]

        },
        {
            title:"Frameworks",
            elements:[
               {
                    title:"Node JS",
                    level:"Experienced"
                },
                {
                    title:"React JS",
                    level:"Experienced "
                },
                {
                    title:"Flutter",
                    level:"Meduim"
                },
                {
                    title:"Bootstrap",
                    level:"Experienced"
                },
                {
                    title:"Material UI",
                    level:"Experienced"
                },
               
                
            ]

        },
        
      ],
      services: [
        {
            title: "Business Intelligence Consulting",
            elements: [
            "Data analysis and visualization",
            "Dashboard and report development",
            "Data modeling and database design",
            "Data integration and ETL processes",
            "Performance monitoring and optimization",
            "Business analytics and insights",
            "Data-driven decision making",
            "Data quality management",
            "BI tool selection and implementation",
            "Training and support for BI solutions"
            ]
            },   
        {
            title: "Mobile App Development",
            elements: [
            "Creation of native mobile applications for iOS and Android",
            "Development of cross-platform applications using frameworks such as Flutter",
            "Integration of advanced features such as geolocation, push notifications,chat, online payments, etc.",
            "Optimization of application performance for a smooth and responsive user experience",
            "Close collaboration with clients to understand their needs and provide customized solutions",
            "Testing and debugging to ensure the quality and reliability of the applications",
            "Regular updates and maintenance of applications to ensure compatibility with new versions of mobile operating systems"
            ]
        },
        {
            title: "Web Design and Development",
            elements: [
            "Creation of responsive and user-friendly websites",
            "Development of custom web applications using modern technologies",
            "Integration of interactive features and functionalities into websites",
            "Design and implementation of intuitive user interfaces",
            "Optimization of website performance for faster loading times",
            "Collaboration with clients to understand their specific requirements and goals",
            "Testing and debugging to ensure the functionality and compatibility of the websites",
            "Regular updates and maintenance of websites to keep them secure and up-to-date"
            ]
            }
        ],
      projects:[
        {
                image:Location,
                title:'Location',
                description:"Native Android app for house rentals (publish, search,notifications and chat)",
                code:'https://github.com/samar3-web/location',
                demo:'http://github.com/Alien_pixels'
            },
            {
                image:LocationAdmin,
                title:'Location Admin',
                description:"Website: admin dashboard using React JS for the ` Location ` application.",
                code:'https://github.com/Jkhaled-glitch/location-admin',
                demo:'http://github.com/Alien_pixels'
            },
            {   
                image:Communiteam,
                title:'CommuniTeam',
                description:"Flutter App: Collaborative learning platform designed to connect students",
                code:'https://github.com/MariemAbdi/CommuniTeam',
                demo:'http://github.com/Alien_pixels2'
            },
            {   
                image:Weather,
                title:'Weather',
                description:"App for Android(with widget) that displays current weather and a 5-day forecast for any city using the OpenWeatherMap API",
                code:'https://github.com/Jkhaled-glitch/weather',
                demo:'http://github.com/Alien_pixels2'
            },
            {   
                image:Hyngry,
                title:'Hyngry',
                description:"Hyngry is an Android app that allows users to search for nearby restaurants using Bing Maps",
                code:'https://github.com/Jkhaled-glitch/Hungry',
                demo:'http://github.com/Alien_pixels2'
            },
            {   
                image:TicTacToe,
                title:'TicTacToe',
                description:"Android app featuring a Tic Tac Toe game with Canvas, animations.",
                code:'https://github.com/Jkhaled-glitch/Tictactoe',
                demo:'http://github.com/Alien_pixels2'
            },
            {   
                image:TimeTable,
                title:'TimeTable',
                description:"A MERN stack web application designed for creating and managing schedules or timetables. With a drag-and-drop interface",
                code:'https://github.com/Jkhaled-glitch/TimeTable',
                demo:'http://github.com/Alien_pixels2'
            },
      ],
      testimonials:[
        {
            avtr:User1,
            name:'John',
            review:'Excellent',   
        },
        {
            avtr:User2,
            name:'Mariem',
            review:'Passable',   
        },
        {
            avtr:User3,
            name:'Mohamed',
            review:'Great',   
        },
            
            
      ],
      messenger:
      {
            label:"Khaled Jouablia",
            link: "http://m.me/khaled.jouablia"
      },
      whatsApp:
      {
            tel:"+216 53 076 588",
            link: "https://api.whatsapp.com/send?phone+21653076588"
      },

      
    };
  