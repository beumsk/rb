const projects = [
  {
    slug: 'tripser-blog',
    title: 'Tripser Blog',
    link: '/projects/tripser-blog',
    current: 'https://tripser.blog/',
    past: 'https://web.archive.org/web/20240403175710/https://tripser.blog/',
    img: '/images/projects/tripser-blog.jpg',
    screen: '/images/projects/tripser-blog-screen.jpg',
    modified: '2024-07-15',
    intro: 'Tripser blog built with Next.js, Sass, i18n and MDX.',
    tech: ['react', 'next.js', 'mdx', 'sass', 'i18n'],
    chall: [
      'Ensure great SEO practice in the code',
      'Handle translation in the blog with i18n',
      'Develop a rich text editor to create markdown content',
      'Set up and develop MDX components',
    ],
    homepage: true,
    type: 'pro',
  },
  {
    slug: 'padel',
    title: 'Padel',
    link: '/projects/padel',
    current: 'https://www.parispadelmajor.com/',
    past: 'https://web.archive.org/web/20220714150729/https://www.parispadelmajor.com/',
    img: '/images/projects/padel.jpg',
    screen: '/images/projects/padel-screen.png',
    modified: '2023-11-27',
    intro:
      'Paris Premier Padel Major website built with React. PPPM official website giving access to the latest news, pictures and videos as well as live scoring and ticketing system.',
    tech: ['react', 'html', 'css', 'javascript'],
    chall: [
      'Front-end development from Figma design using React and CSS-in-JS',
      'Use Styled-system and Emotion for styling',
      'Used advanced CSS grid developed for the layout of the blog, image and video items',
      'Ensured responsiveness of the different components of the site',
      'Special outlined style on titles',
    ],
    homepage: true,
    type: 'pro',
  },
  {
    slug: 'omega',
    title: 'Omega',
    link: '/projects/omega',
    current: 'https://www.parcomega.ca/',
    past: 'https://web.archive.org/web/20211213130150/https://app.staging.parcomega.ca/en/',
    img: '/images/projects/omega.jpg',
    screen: '/images/projects/omega-screen.png',
    modified: '2023-11-27',
    intro:
      'Omega zoo booking website with React. Information about the park and its animals as well as ability to book your stay, table or entrance via ticketing system.',
    tech: ['react', 'html', 'css', 'javascript'],
    chall: [
      'Integration and front-end development from Figma designs to React and CSS-in-JS coding',
      'Use Styled-system and Emotion for styling',
      'Complex components in the likes of a Swiper, a Carousel, Deep navigation bar and Filtering',
      'Used recent CSS features in the names of Image clip-path and CSS grids',
    ],
    homepage: false,
    type: 'pro',
  },
  {
    slug: 'onomo',
    title: 'Onomo',
    link: '/projects/onomo',
    current: 'https://www.onomohotels.com/',
    past: 'https://web.archive.org/web/20211213130244/https://app.staging.onomohotels.com/',
    img: '/images/projects/onomo.jpg',
    screen: '/images/projects/onomo-screen.png',
    modified: '2023-11-27',
    intro:
      'Onomo hotels booking website with React. Possibility to search and book hotels through a complete booking journey.',
    tech: ['react', 'html', 'css', 'javascript'],
    chall: [
      'Integration and front-end development from Figma designs to React and CSS-in-JS coding',
      'Use Styled-system and Emotion for styling',
      'Complete booking process with advanced forms such as a Date picker, phone numbers (regex) and custom select',
    ],
    homepage: false,
    type: 'pro',
  },
  {
    slug: 'eli-paris',
    title: 'Eli Paris',
    link: '/projects/eli-paris',
    current: 'https://www.eliparis.com/',
    past: 'http://web.archive.org/web/20220120123422/https://www.eliparis.com/accueil',
    img: '/images/projects/eli-paris.jpg',
    screen: '/images/projects/eli-paris-screen.png',
    modified: '2023-04-27',
    intro:
      'Eli Paris jewelry store website built with Angular, Node and Strapi. Complete back office to manage the content of the site. Cart, payment and invoice processes.',
    tech: ['angular', 'html', 'css', 'javascript', 'sass'],
    chall: [
      'Integration development from InVision designs to Angular and Sass',
      'Used some Prime NG components from the library',
      'CSS from scratch with Sass leveraging Grids and Multi-columns layouts',
    ],
    homepage: false,
    type: 'pro',
  },
  {
    slug: 'kpmg-careers',
    title: 'KPMG Careers',
    link: '/projects/kpmg-careers',
    current: 'https://careers.kpmg.be/',
    past: 'https://web.archive.org/web/20200803122755/https://careers.kpmg.be/',
    img: '/images/projects/kpmg-careers.jpg',
    screen: '/images/projects/kpmg-careers-screen.png',
    modified: '2022-04-25',
    intro: 'KPMG Belgium recruitment website built with Umbraco CMS.',
    tech: ['umbraco', 'c#', 'html', 'css', 'javascript', 'sass'],
    chall: [
      'Create a custom Google maps toolkit',
      'Implement an Instagram feed with Curator.io',
      'Fetch JSON events',
      'Fetch JSON job',
      'Slick responsive carousel',
    ],
    homepage: false,
    type: 'pro',
  },
  {
    slug: 'kpmg-law',
    title: 'KPMG Law',
    link: '/projects/kpmg-law',
    current: 'https://www.kpmglaw.be/',
    past: 'https://web.archive.org/web/20200812114928/https://www.klaw.be/',
    img: '/images/projects/kpmg-law.jpg',
    screen: '/images/projects/kpmg-law-screen.png',
    modified: '2022-04-25',
    intro: 'KPMG Law (previously Klaw) website built with Umbraco CMS.',
    tech: ['umbraco', 'c#', 'html', 'css', 'javascript', 'sass'],
    chall: [
      'Discover Umbraco and C#',
      'Use Uskinned theme and improve it',
      'SEO improvements',
      'Meta tags adjustments for social sharing',
    ],
    homepage: false,
    type: 'pro',
  },
  // {
  //   slug: 'kine-clarinval',
  //   title: 'Kine Clarinval',
  //   link: '/projects/kine-clarinval',
  //   current: 'https://kine-clarinval.be/',
  //   past: '',
  //   img: '/images/projects/kine-clarinval.jpg',
  //   screen: '/images/projects/kine-clarinval-screen.png',
  //   modified: '2024-07-27',
  //   intro: '',
  //   tech: ['react', 'firebase', 'mdx', 'sass'],
  //   chall: [''],
  //   homepage: true,
  //   type: 'pro',
  // },
  {
    slug: 'shop',
    title: 'Shop',
    link: '/projects/shop',
    img: '/images/projects/shop.jpg',
    sandbox: 'react-shop-client-csvvwz',
    modified: '2023-04-27',
    intro: 'Shop app built with React, Redux, Styled-components, Node and MongoDB.',
    tech: ['react', 'redux', 'styled-components', 'jest', 'node.js', 'mongo-db'],
    chall: [
      'Backend server with Node.js, Express and MongoDB',
      'Fetch data from the backend with Axios',
      'Redux & Redux persist to handle states accross the app',
      'Payment handling with Stripe Checkout',
      'Use Styled-components to design components',
      'Testing with Jest and React Testing Library',
    ],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'memory',
    title: 'Memory',
    link: '/projects/memory',
    img: '/images/projects/memory.jpg',
    pen: 'xdoKjX',
    modified: '2021-11-01',
    intro: 'Find pairs as fast as possible in this Memory!',
    tech: ['html', 'css', 'javascript'],
    chall: [
      'Array.splice to remove a certain array element',
      'setInterval & clearInterval for the timer of the game',
      'Click event listener on parent to handle children clicks',
      'CSS user-select to remove mouse selection',
    ],
    homepage: true,
    type: 'perso',
  },
  {
    slug: 'black-jack',
    title: 'Black Jack',
    link: '/projects/black-jack',
    img: '/images/projects/black-jack.jpg',
    pen: 'abRagpO',
    modified: '2024-12-18',
    intro: 'Beat the bank in Black Jack!',
    tech: ['react', 'typescript', 'sass'],
    chall: [
      'While loop to ensure unique card draws',
      'Local storage to save the player score',
      'Complex logic to handle win-lose logic',
    ],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'movies',
    title: 'Movies',
    link: '/projects/movies',
    img: '/images/projects/movies.jpg',
    sandbox: 'github/beumsk/React-Movies',
    modified: '2022-03-11',
    intro: 'Search or scroll for movies and series. Get general info and learn about their actors.',
    tech: ['react', 'redux', 'material-ui'],
    chall: [
      'React router dom to handle the navigation',
      'Redux to handle states accross the app',
      'Redux thunk for async requests',
      'Fetch data The Movie DataBase API',
      'Use Material UI for components of the app',
    ],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'recipes',
    title: 'Recipes',
    link: '/projects/recipes',
    img: '/images/projects/recipes.jpg',
    sandbox: 'github/beumsk/Recipes',
    modified: '2022-06-30',
    intro: 'Create your recipes or find some from a wide API.',
    tech: ['react', 'firebase', 'chakra-ui'],
    chall: [
      'React router dom to handle the navigation',
      'Firebase as a backend service',
      'Fetch data from Edamam API',
      'i18n to handle translations',
      'Use Chakra UI components in the app',
      'Use Emotion to custom style components',
    ],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'quiz',
    title: 'Quiz',
    link: '/projects/quiz',
    img: '/images/projects/quiz.jpg',
    sandbox: 'github/beumsk/Quiz',
    modified: '2022-03-11',
    intro:
      'Try a set of 10 random questions fetched from Open Trivia DB in this Quiz built with React and score as much points as you can. You win 1 point per good answer but make 5 points when picking the good answer from the start!',
    tech: ['react', 'typescript', 'sass'],
    chall: [
      'React hooks: useState and useEffect',
      'Use Typescript for React components',
      'Fetch questions from Opentdb API',
      'Convert JSON data',
    ],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'snake',
    title: 'Snake',
    link: '/projects/snake',
    img: '/images/projects/snake.jpg',
    pen: 'PmPxEo',
    modified: '2021-11-01',
    intro: 'Get as long as possible in this version of Snake!',
    tech: ['html', 'css', 'javascript', 'jquery'],
    chall: [
      'Keydown event to manage the snake',
      'setInterval & clearInterval for the snake and the timer',
      'Array.shift to handle the snake array changes',
      'jQuery mobile swipe to handle snake on mobile',
    ],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'star-match',
    title: 'Star Match',
    link: '/projects/star-match',
    img: '/images/projects/star-match.jpg',
    pen: 'YzEyVYp',
    modified: '2022-04-25',
    intro: 'Play by picking 1 or more numbers that sum to the number of stars',
    tech: ['react', 'javascript', 'css'],
    chall: [
      'Build one of my first React project',
      'Use the useState and useEffect hooks',
      'Map through components with JSX to render a list of elements',
      'JSX conditional rendering to apply some UI logic',
    ],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'minesweeper',
    title: 'Minesweeper',
    link: '/projects/minesweeper',
    img: '/images/projects/minesweeper.jpg',
    pen: 'JJYqop',
    modified: '2021-11-01',
    intro: 'Play Minesweeper in this 9x9 grid!',
    tech: ['html', 'css', 'javascript'],
    chall: [
      'Use setInterval & clearInterval to manage the timer',
      'Table to handle adjacent cells checks',
      'Check if the user is on the page with hasFocus',
    ],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'whack-a-donkey-kong',
    title: 'Whack a Donkey Kong',
    link: '/projects/whack-a-donkey-kong',
    img: '/images/projects/whack-a-donkey-kong.jpg',
    pen: 'YabyJJ',
    modified: '2021-11-01',
    intro: 'Crush these Donkey Kongs in this whack a mole!',
    tech: ['html', 'css', 'javascript'],
    chall: [
      'setInterval & clearInterval to handle the timer',
      'setTimeout to animate the Kongs on click',
      'Handle element classList: add and remove',
    ],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'hangman',
    title: 'Hangman',
    link: '/projects/hangman',
    img: '/images/projects/hangman.jpg',
    pen: 'ZEzvEdz',
    modified: '2021-11-01',
    intro: 'The Hangman game as in your childhood!',
    tech: ['html', 'css', 'javascript'],
    chall: [
      'Organise collaboration with open sourcers',
      'Array.concat to combine the different arrays into one',
      'String.split to transform the word into an array of letters',
    ],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'dad-jokes',
    title: 'Dad jokes',
    link: '/projects/dad-jokes',
    img: '/images/projects/dad-jokes.jpg',
    pen: 'LKXvrq',
    modified: '2021-11-01',
    intro: 'Go and get a random dad joke!',
    tech: ['html', 'css', 'javascript', 'jquery'],
    chall: ['AJAX call with jQuery', 'JSON parse and stringify methods'],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'giphy-search',
    title: 'Giphy search',
    link: '/projects/giphy-search',
    img: '/images/projects/giphy-search.jpg',
    pen: 'EExyvQ',
    modified: '2021-11-01',
    intro: 'Find the gif you need with Giphy Search!',
    tech: ['html', 'css', 'javascript', 'jquery'],
    chall: [
      'jQuery for JavaScript: form data, events, select elements, animations',
      'AJAX call with jQuery',
      'JSON parse and stringify methods',
      'Fix order of animations with setTimeout',
    ],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'tetris',
    title: 'Tetris',
    link: '/projects/tetris',
    img: '/images/projects/tetris.jpg',
    pen: 'eYpxowj',
    modified: '2021-11-01',
    intro: 'Break lines and stay alive for as long as you can in this Tetris!',
    tech: ['html', 'css', 'javascript'],
    chall: [
      'Babel to translate newer JavaScript to work with older browsers',
      'Array.forEach to loop over an array',
      'Array.some to check array values',
      'SetInterval & clearInterval to make the game running',
      'Keyup event to move the Tetris',
    ],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'simon-game',
    title: 'Simon game',
    link: '/projects/simon-game',
    img: '/images/projects/simon-game.jpg',
    pen: 'LWqpGM',
    modified: '2021-11-01',
    intro: 'Train your brain with the famous Simon game!',
    tech: ['html', 'css', 'javascript'],
    chall: [
      'Use childNodes to point to the right elements',
      'Math.random to pick a random element',
      'Audio to play sounds',
      'setInterval and setTimeout to handle the sounds loop',
    ],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'drum-machine',
    title: 'Drum machine',
    link: '/projects/drum-machine',
    img: '/images/projects/drum-machine.jpg',
    pen: 'dwmoyE',
    modified: '2021-11-01',
    intro: 'Smash this Drum Machine!',
    tech: ['html', 'css', 'javascript'],
    chall: ['Audio to play the music sounds', 'Target elements with getElementById', 'Click on tiles with keyup event'],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'clock',
    title: 'Clock',
    link: '/projects/clock',
    img: '/images/projects/clock.jpg',
    pen: 'YQoBJK',
    modified: '2021-11-01',
    intro: 'Check the clock and get the time!',
    tech: ['html', 'css', 'javascript'],
    chall: [
      'Work with Date and its methods getHours and getMinutes',
      'Use CSS transform to rotate the clock hands',
      'Define the transform-origin to rotate as a real clock',
    ],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'etch-a-sketch',
    title: 'Etch a Sketch',
    link: '/projects/etch-a-sketch',
    img: '/images/projects/etch-a-sketch.jpg',
    pen: 'dVWPOW',
    modified: '2021-11-01',
    intro: 'Try to sketch something in this!',
    tech: ['html', 'css', 'javascript'],
    chall: [
      'Input event to listen to every input modification',
      'Turn string into number with parseFloat',
      'Translate number into string with toString',
      'Calculate the width of an element with offsetWidth',
    ],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'calculator',
    title: 'Calculator',
    link: '/projects/calculator',
    img: '/images/projects/calculator.jpg',
    pen: 'dvdZjx',
    modified: '2021-11-01',
    intro: 'Fully functional Calculator!',
    tech: ['html', 'css', 'javascript'],
    chall: [
      'Math.round to round numbers',
      'Use eval to process calculation',
      'Create an element in the right location with insertAdjacentHTML',
      'Create shadows on an element with box-shadow',
    ],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'higher-or-lower',
    title: 'Higher or Lower',
    link: '/projects/higher-or-lower',
    img: '/images/projects/higher-or-lower.jpg',
    pen: 'bGbLzzE',
    modified: '2021-11-01',
    intro: 'Guess if the next card will be Higher or Lower!',
    tech: ['html', 'css', 'javascript'],
    chall: [
      'Select elements with querySelector',
      'Find index with Array.indexOf',
      'Math.random to get a random number',
    ],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    link: '/projects/tic-tac-toe',
    img: '/images/projects/tic-tac-toe.jpg',
    pen: 'ZevLbx',
    modified: '2021-11-01',
    intro: 'Play Tic Tac Toe or OXO against a dumb AI!',
    tech: ['html', 'css', 'javascript'],
    chall: [
      'Use classList methods to act on element classes',
      'Delay functions with setTimeout',
      'Check the completion of the game and state the winner',
    ],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'sliding-puzzle',
    title: 'Sliding Puzzle',
    link: '/projects/sliding-puzzle',
    img: '/images/projects/sliding-puzzle.jpg',
    pen: 'RjzGBO',
    modified: '2021-11-01',
    intro: 'Try to solve this sliding puzzle!',
    tech: ['html', 'css', 'javascript', 'sass'],
    chall: [
      'Swap the position of elements',
      'Use before and after methods to insert elements',
      'Array.splice to delete a certain array element',
    ],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'pokemon',
    title: 'Pokemon',
    link: '/projects/pokemon',
    img: '/images/projects/pokemon.jpg',
    pen: 'rjBWWR',
    modified: '2021-11-01',
    intro: 'Find out what Pokemon you are!',
    tech: ['html', 'css', 'javascript', 'jquery'],
    chall: [
      'Manage jQuery fading animations',
      '@keyframes to handle rotation animations',
      'Handle classes with jQuery methods',
    ],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'color-game',
    title: 'Color game',
    link: '/projects/color-game',
    img: '/images/projects/color-game.jpg',
    pen: 'poyXqWZ',
    modified: '2021-11-01',
    intro: 'Sharpen your RGB knowledge by playing this little Color game!',
    tech: ['html', 'css', 'javascript'],
    chall: ['Define the display with CSS grids', 'Use BEM to name elements classes', 'Create HTML elements with JS'],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'brick-breaker',
    title: 'Brick breaker',
    link: '/projects/brick-breaker',
    img: '/images/projects/brick-breaker.jpg',
    pen: 'GEgjEb',
    modified: '2021-11-01',
    intro: 'Break all the bricks in this first level!',
    tech: ['html', 'css', 'javascript'],
    chall: [
      'Create blocks, bar and ball with Canvas',
      'Mousemove event to handle the bar of the game',
      'Detect collisions between the ball and the bricks, bar or walls',
    ],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'connect-4',
    title: 'Connect 4',
    link: '/projects/connect-4',
    img: '/images/projects/connect-4.jpg',
    pen: 'bqWqGV',
    modified: '2021-11-01',
    intro: 'Play Connect 4 with a friend and align 4 of yours!',
    tech: ['html', 'css', 'javascript'],
    chall: [
      'Create all elements with JavaScript',
      'Use the :not() CSS selector',
      'Use the :nth-of-type() CSS selector',
      'Array.slice to copy an array of elements',
    ],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'date-counter',
    title: 'Date counter',
    link: '/projects/date-counter',
    img: '/images/projects/date-counter.jpg',
    pen: 'oWYVYj',
    modified: '2021-11-01',
    intro:
      'Find out how many days passed since a certain date, or between two dates, or what date will ti be in x days.',
    tech: ['html', 'css', 'javascript'],
    chall: [
      'Listen to input changes with Input event',
      'Date methods to get the right info',
      'Convert dates to the desired formats',
      'Calculate the difference between two dates',
    ],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'quotes',
    title: 'Quotes',
    link: '/projects/quotes',
    img: '/images/projects/quotes.jpg',
    pen: 'xgGzdJ',
    modified: '2021-11-01',
    intro: 'Click and get a random quote from Forismatic!',
    tech: ['html', 'css', 'javascript', 'bootstrap', 'jquery'],
    chall: ['Get quotes through an AJAX call', 'Parse and Stringify JSON data'],
    homepage: false,
    type: 'perso',
  },
  {
    slug: 'timer',
    title: 'Timer',
    link: '/projects/timer',
    img: '/images/projects/timer.jpg',
    pen: 'WpKWgG',
    modified: '2021-11-01',
    intro: 'Set a timer for anything!',
    tech: ['html', 'css', 'javascript'],
    chall: [
      'Handle the time with setInterval & clearInterval',
      'Delay functions with setTimeout',
      'Enable and disable input fields',
    ],
    homepage: false,
    type: 'perso',
  },
];

module.exports = projects;
