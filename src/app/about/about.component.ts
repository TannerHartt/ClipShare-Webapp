import { Component, OnInit } from '@angular/core';

interface Tool {
  name: string;
  iconClass: string;
  category: string;
  description: string;
  link?: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: []
})
export class AboutComponent implements OnInit {

  tools: Tool[] = [
    {
      name: 'Angular',
      iconClass: 'ri-angularjs-fill',
      category: 'Frontend Framework',
      description: 'The framework used to build this application in HTML and TypeScript. ',
      link: 'https://angular.io/'
    },
    {
      name: 'Video JS',
      iconClass: 'ri-video-line',
      category: 'HTML Video Player Library',
      description: 'The open source library used to create a customizable and responsive video player for playback of the uploaded videos.',
      link: 'https://videojs.com/'
    },
    {
      name: 'Tailwind CSS',
      iconClass: 'ri-tailwind-css-fill',
      category: 'Styling / UI Framework',
      description: 'A utility first CSS framework used for rapid UI development and custom styling.',
      link: 'https://tailwindcss.com/'
    },
    {
      name: 'Vercel',
      iconClass: 'ri-vercel-fill',
      category: 'Hosting / Deployment',
      description: 'The platform used to deploy this application, providing fast global CDN and easy integration with GitHub.',
    },
    {
      name: 'TypeScript',
      iconClass: 'ri-javascript-fill',
      category: 'Programming Language',
      description: 'All application logic, components, and services were written in TypeScript. Including services, models, components, and more.',
      link: 'https://www.typescriptlang.org/'
    },
    {
      name: 'CSS',
      iconClass: 'ri-css3-fill',
      category: 'Styling',
      description: 'Additional custom CSS was written to theme and refine visual details across the app.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
      name: 'Remix Icons',
      iconClass: 'ri-remixicon-fill',
      category: 'Icon Library',
      description: 'Supplied clean, modern icons used throughout the interface and tool cards.',
      link: 'https://remixicon.com/'
    },
    {
      name: 'Streamline Icons',
      iconClass: 'ri-streamline-fill',
      category: 'Icon Library',
      description: 'Another powerful icon set used for various icons in the application.',
      link: 'https://www.streamlinehq.com/'
    },
    {
      name: 'PrimeNG',
      iconClass: '',
      category: 'UI Component Library',
      description: 'Provided additional UI components such as video player, inputs, and interactive widgets. Very easy to use.',
      link: 'https://primeng.org/'
    },
    {
      name: 'Firebase',
      iconClass: 'ri-firebase-line',
      category: 'Database / Backend',
      description: 'Served as the backend database where user data, video information, and app metadata are stored with strict rules enforeced.',
      link: 'https://firebase.google.com/'
    },
    {
      name: 'NPM',
      iconClass: 'ri-npmjs-line',
      category: 'Package Manager',
      description: 'The package manager used to manage all project dependencies and libraries, scripts, and build tools.',
      link: 'https://www.npmjs.com/'
    },
    {
      name: 'GitHub',
      iconClass: 'ri-github-fill',
      category: 'Version Control',
      description: 'Used for source control, project management, and the deployments of this application.',
      link: 'https://github.com/'
    },
    {
      name: 'VS Code',
      iconClass: 'ri-code-box-line',
      category: 'Code Editor',
      description: 'The primary editor used to write, manage, and debug all project files. My favorite tool used.',
      link: 'https://code.visualstudio.com/'
    },
    {
      name: 'ChatGPT',
      iconClass: 'ri-openai-fill',
      category: 'AI Assistant',
      description: 'Assisted with debugging, architectural questions, and development support. The written documentation for this project was also assisted by ChatGPT (README.md).',
      link: 'https://chat.openai.com/'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
