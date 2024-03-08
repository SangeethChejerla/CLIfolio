interface Command {
  name: string;
  description: string;
}
export const HelpCommands:Command[] = [
  { name: 'about', description: 'If your only goal is to stalk me, go ahead with this one :)' },
  { name: 'socials', description: 'If I seem interesting enough to you' },
  { name: 'skills', description: 'I guess, I am good at certain things' },
  { name: 'projects', description: 'I have made some cool stuff too ;)' },
  { name: 'resume', description: 'Checkout my Resume' },
  { name: 'clear', description: 'Clear the terminal' },
  { name: 'experience', description: 'Checkout my professional experience' },
  { name: 'goals', description: 'My future plans' },
  {name:'opinion',description:'rate the project'},
  {name:'exit',description:'exit the terminal'},
  {name:'joke',description:'how about a joke?'},
  {name:'date',description:'you wannna see date'},
];


{/* about */}

interface InfoItem {
  text: string;
  className?: string;
}
export const newInfoItems: InfoItem[] = [
  { text: 'Yo Thanks for inspecting me, xD!' },
  { text: 'I am ', className: 'text-teal-400' },
  { text: 'Sangeeth Reddy' },
  { text: ', a graduate student at - thinking. ' },
  { text: 'not important I guess', className: 'text-purple-400' },
  { text: ' pursued my B.Tech in Computer Science Engineering. Although, I learned everything on my own thanks to the' },
  { text: '-Internet,', className: 'text-teal-400' },
  { text: 'I love being in solitude. ' },
  { text: 'Yo, there are way better things to focus on than this, right?!' },
  { text: '-Wierd Fact', className: 'text-teal-400' },
  { text: ' - I have a nickname - ', },
  { text: "that you really don't need to know", className: 'text-teal-400' },
  { text: '-Coming to my interests, I love to edit stuff.' },
  { text: "I've seen more than 500 anime series, dawg.", className: 'text-teal-400' },
  { text: 'I am the best!! 🗿' }
];

{/* socials */}
interface SocialItem {
  text: string;
  className?: string;
  href?: string;
}
export const socialLinks: SocialItem[] = [
  { text: 'First of all, thanks for showing interest in me!' },
  { text: 'Here are my internet coordinates -' },
  { text: 'Github', className: 'text-purple-400', href: 'https://github.com/sangeeth-Chejerla' },
  { text: ' - Here you can find all my projects and contributions.' },
  { text: 'LinkedIn', className: 'text-purple-400', href: 'https://www.linkedin.com/in/sangeeth-reddy-chejerla-323587254/', },
  { text: ' - Here you can find my professional profile. (DMs preferred here)' },
  { text: 'Mail', className: 'text-purple-400', href: 'mailto:sangeethreddychejerla@gmail.com' },
  { text: ' -sangeethreddychejerla@gmail.com' },
  { text: "I guess, that's all :/, I am not very active on other platforms." }
];

{/* Goals*/}

interface GoalItem {
  text: string;
  className?: string;
}

export const interestItems: GoalItem[] = [
  { text: 'My interests are:' },
  { text: '1. Learn Artificial Intelligence' },
  { text: '2. Claim rightful place' },
  { text: '3. Complete my stories and add a few interesting ones' }
];

{/* options */}

export const MESSAGES = {
  likeProject: "you really like the project, thanks a bunch",
  giveStar: "Thanks for giving a star on GitHub!",
  no: "Then why are you still here, backing off, stupid?",
  thanksNoStar: "No need for a star then!",
};

export const ACTIONS = {
  yes: "yes",
  no: "no",
};