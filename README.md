<h1>🌍 WanderLust – Full Stack Travel Suite</h1>

<p>
I built WanderLust as a full stack web application that allows users to discover, share, and manage vacation rentals in a way that feels modern, secure, and reliable. My goal was to create a platform that balances scalability, security, and user experience, ensuring consistent performance as the application grows.

From an architectural standpoint, I structured the project using the MVC pattern and enforced data integrity with Joi validation schemas to prevent malformed inputs. For authentication, I implemented multi-strategy Passport.js, supporting both Local and Google OAuth logins to give users secure and flexible access. The application is deployed on Render, backed by MongoDB Atlas for cloud database management, and integrates Cloudinary for scalable, optimized image hosting and delivery.

To enhance usability, I incorporated real-time geolocation with Google Maps API and geocoding, allowing listings to be displayed with precise coordinates. Combined with an intuitive interface, these features make WanderLust not just technically robust but also user-centered — a project that demonstrates both engineering depth and thoughtful design.
</p>


<hr/>
<h2>📸 Live Demo </h2>

<ul>
  <li>🌐 <b>Live Site</b>: <a href="https://wanderlust-project-8v8k.onrender.com/listings">WanderLust on Render</a></li>
  <li>💻 <b>GitHub Repository</b>: <a href="https://github.com/TharunGit220/Wanderlust-Project/">View Repo</a></li>
</ul>
<hr/>

<h2>✨ Highlights of My Project </h2>

<ul>
  <li>🔒 <b>Enterprise-Level Authentication</b>: I implemented multi-strategy authentication with Passport.js, supporting both Google OAuth 2.0 and Local strategies. User sessions are serialized and securely stored in MongoDB Atlas, giving users flexible yet secure login options.</li>

  <li>🗺️ <b>Geospatial Intelligence</b>: I integrated the Google Maps API and geocoding to dynamically plot property listings with accurate coordinates. This ensures that every listing is tied to a real-world location and provides a more immersive user experience.</li>
<br>
  <li>☁️ <b>Cloud-Native Architecture</b>: All images are uploaded and served through Cloudinary with Multer, allowing for scalable storage and optimized delivery (lazy-loading, caching, and automatic resizing). This keeps the app fast while supporting high-quality visuals.</li>
<br>
  <li>🧩 <b>Scalable MVC Design</b>: I built WanderLust around a modular MVC architecture, making the codebase clean, maintainable, and ready for future expansion. This design choice reflects how I approach building production-ready systems.</li>
<br>
  <li>🗂️ <b>Robust Data Integrity</b>: I used Joi schemas to validate user input before it ever reaches the database, reducing errors and preventing malformed data. This ensures reliability and consistency across all operations.</li>
<br>
  <li>⚡ <b>Performance & UX</b>: By hosting the application on Render with MongoDB Atlas, I achieved fast response times and reliable uptime. Combined with Bootstrap and responsive EJS templates, the platform offers a smooth, mobile-friendly user experience.</li>
<br>
  <li>📊 <b>Real-World Security Practices</b>: I applied industry-standard techniques such as encrypted sessions, cookie management, CSRF protection, and middleware-based authorization checks. Flash messages provide real-time feedback, improving usability and transparency.</li>
<br>
  <li>🎨 <b>User-Centered Design</b>: I focused on building an intuitive, responsive interface with clear navigation and helpful prompts. This makes the platform approachable for both tech-savvy users and casual travelers.</li>
<br>
  <li>⭐ <b>Community Features</b>: I added user reviews and ratings so guests can share feedback and hosts can build credibility, making the platform more engaging and trustworthy.</li>
</ul>


<hr/>

<h2>🛠️ Tech Stack</h2>

<h3>Front-End 🌐</h3>
<ul>
  <li><b>Technologies:</b> HTML, CSS, JavaScript, Bootstrap, EJS with EJS-Mate for layouts</li>
  <li><b>Responsive Design:</b> Fully mobile-friendly layouts, optimized for multiple screen sizes</li>
  <li><b>User Interface:</b> Clean navigation and intuitive forms for browsing, creating, and managing listings</li>
  <li><b>Maps Integration:</b> Google Maps API with geocoding to plot property locations dynamically</li>
</ul>

<h3>Back-End 🛠️</h3>
<ul>
  <li><b>Technologies:</b> Node.js, Express.js</li>
  <li><b>RESTful API:</b> Organized routes for handling listings, reviews, authentication, and sessions</li>
  <li><b>Authentication:</b> Multi-strategy Passport.js (Local + Google OAuth 2.0) with secure sessions</li>
  <li><b>Validation:</b> Joi schemas to ensure all incoming data is clean and secure</li>
</ul>

<h3>Database 🗄️</h3>
<ul>
  <li><b>Database:</b> MongoDB Atlas with Mongoose ODM</li>
  <li><b>Schema Design:</b> Structured models for users, listings, and reviews</li>
  <li><b>Queries:</b> Efficient querying and population for related data (e.g., listings with owners & reviews)</li>
</ul>

<h3>Cloud & Storage ☁️</h3>
<ul>
  <li><b>Image Hosting:</b> Cloudinary with Multer for uploads, ensuring reliable storage and optimized delivery</li>
  <li><b>Deployment:</b> Application hosted on Render, database managed on MongoDB Atlas</li>
</ul>


<h2>🌟 Additional Features</h2>

<ul>
  <li>⭐ <b>User Reviews & Ratings</b>: Integrated a review system where users can leave feedback and ratings, connected to listing models via <code>Mongoose</code> population.</li>
  
  <li>🔐 <b>Secure Authentication & Sessions</b>: Implemented multi-strategy <code>Passport.js</code> (Local & Google OAuth 2.0) with persistent sessions using <code>express-session</code> and <code>connect-mongo</code>. Password management handled with <code>passport-local-mongoose</code>.</li>
  
  <li>🗺️ <b>Geolocation & Mapping</b>: Integrated Google Maps API with geocoding for accurate property mapping and location-based features.</li>
  
  <li>📊 <b>Robust Validation</b>: Enforced client- and server-side validation with <code>Joi</code>, preventing malformed or insecure data from entering the system.</li>
  
  <li>🎨 <b>Dynamic Templating</b>: Used <code>EJS</code> with <code>ejs-mate</code> layouts for modular, reusable, and scalable views.</li>
  
  <li>🍪 <b>Cookie & Flash Messaging</b>: Improved UX with <code>cookie-parser</code> and <code>connect-flash</code> to deliver secure cookies, notifications, and error/success messages.</li>
  
  <li>💾 <b>File Uploads & Cloud Hosting</b>: Managed file uploads with <code>multer</code> and <code>@fluidjs/multer-cloudinary</code>, storing images in <code>Cloudinary</code> for optimized, CDN-backed delivery.</li>
  
  <li>🛡️ <b>Security Enhancements</b>: Used <code>dotenv</code> for environment management, encrypted sessions, cookie signing, and middleware-driven authorization.</li>
  
  <li>🏗️ <b>MVC Architecture</b>: Structured using a modular MVC pattern, ensuring maintainability, scalability, and clear separation of concerns.</li>
  
  <li>⚡ <b>Production-Ready Middleware</b>: Integrated <code>method-override</code> for HTTP verbs support, <code>axios</code> for server-side API requests, and <code>body-parser</code> for efficient request handling.</li>
</ul>

<h2>🛠️ Technologies & Packages Used</h2>

<h3>⚙️ Core Stack</h3>
<ul>
  <li><b>Node.js</b> – Backend runtime powering the server.</li>
  <li><b>Express.js</b> – Fast, minimalist framework for building RESTful APIs and middleware-driven routes.</li>
  <li><b>MongoDB Atlas</b> – Cloud-hosted NoSQL database for storing users, sessions, and listings.</li>
  <li><b>Mongoose</b> – ODM used for schema definitions, model relationships, and database queries.</li>
</ul>

<h3>🔐 Authentication & Security</h3>
<ul>
  <li><b>Passport.js</b> – Multi-strategy authentication (Local + Google OAuth 2.0).</li>
  <li><b>Passport-Local & Passport-Local-Mongoose</b> – Simplifies username/password storage and session handling.</li>
  <li><b>Connect-Mongo</b> – Stores session data securely inside MongoDB Atlas.</li>
  <li><b>Express-Session</b> – Session middleware with encrypted, signed cookies.</li>
  <li><b>Cookie-Parser</b> – Parses and secures cookies for authentication flows.</li>
  <li><b>Dotenv</b> – Manages environment variables securely across dev/production.</li>
  <li><b>Joi</b> – Robust schema validation to enforce request integrity and prevent malformed data.</li>
</ul>

<h3>📦 File Uploads & Cloud</h3>
<ul>
  <li><b>Multer</b> – Middleware for handling file uploads.</li>
  <li><b>@fluidjs/multer-cloudinary</b> – Direct integration between Multer and Cloudinary for scalable hosting.</li>
  <li><b>Cloudinary</b> – CDN-backed image storage, optimization, and delivery.</li>
</ul>

<h3>🎨 Frontend & Templating</h3>
<ul>
  <li><b>EJS</b> – Server-side templating engine for dynamic content rendering.</li>
  <li><b>EJS-Mate</b> – Layout & partial support for modular, DRY templating.</li>
  <li><b>Bootstrap</b> – Responsive UI components (styling & layout).</li>
</ul>

<h3>📡 Utilities & Middleware</h3>
<ul>
  <li><b>Method-Override</b> – Enables PUT/DELETE support in forms for RESTful compliance.</li>
  <li><b>Connect-Flash</b> – Flash messaging system for user feedback (success, error, info).</li>
  <li><b>Axios</b> – For server-side API calls and integration with third-party services.</li>
  <li><b>Body-Parser</b> – Parses incoming request bodies efficiently (integrated via Express 5).</li>
</ul>




