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

  <li>☁️ <b>Cloud-Native Architecture</b>: All images are uploaded and served through Cloudinary with Multer, allowing for scalable storage and optimized delivery (lazy-loading, caching, and automatic resizing). This keeps the app fast while supporting high-quality visuals.</li>

  <li>🧩 <b>Scalable MVC Design</b>: I built WanderLust around a modular MVC architecture, making the codebase clean, maintainable, and ready for future expansion. This design choice reflects how I approach building production-ready systems.</li>

  <li>🗂️ <b>Robust Data Integrity</b>: I used Joi schemas to validate user input before it ever reaches the database, reducing errors and preventing malformed data. This ensures reliability and consistency across all operations.</li>

  <li>⚡ <b>Performance & UX</b>: By hosting the application on Render with MongoDB Atlas, I achieved fast response times and reliable uptime. Combined with Bootstrap and responsive EJS templates, the platform offers a smooth, mobile-friendly user experience.</li>

  <li>📊 <b>Real-World Security Practices</b>: I applied industry-standard techniques such as encrypted sessions, cookie management, CSRF protection, and middleware-based authorization checks. Flash messages provide real-time feedback, improving usability and transparency.</li>

  <li>🎨 <b>User-Centered Design</b>: I focused on building an intuitive, responsive interface with clear navigation and helpful prompts. This makes the platform approachable for both tech-savvy users and casual travelers.</li>

  <li>⭐ <b>Community Features</b>: I added user reviews and ratings so guests can share feedback and hosts can build credibility, making the platform more engaging and trustworthy.</li>
</ul>


<hr/>

<h2>🛠️ Tech Stack</h2>

<ul>
  <li><b>Frontend</b>: HTML, CSS, JavaScript, Bootstrap, EJS (with EJS-Mate layouts)</li>
  <li><b>Backend</b>: Node.js, Express.js (REST API with modular routing)</li>
  <li><b>Database</b>: MongoDB Atlas + Mongoose ODM</li>
  <li><b>Authentication</b>: Passport.js (Google OAuth 2.0 + Local Strategy)</li>
  <li><b>Cloud Services</b>: Cloudinary (image hosting), Multer (file uploads)</li>
  <li><b>Security & Utilities</b>: Joi validation, Express-Session, Connect-Mongo, Dotenv, Cookie-Parser, Method-Override</li>
  <li><b>Hosting</b>: Render (app), MongoDB Atlas (database)</li>
</ul>

<hr/>

<h2>🔍 Why This Project Stands Out for Employers</h2>

<ul>
  <li>✅ <b>Scalable</b>: Modularized with MVC architecture and REST APIs.</li>
  <li>✅ <b>Secure</b>: Robust validation and multi-strategy authentication.</li>
  <li>✅ <b>Cloud-Ready</b>: Uses cloud services (MongoDB Atlas, Cloudinary, Render) to mirror professional deployment pipelines.</li>
  <li>✅ <b>User-Centered</b>: Smooth UX with responsive design, flash messages, and real-time maps.</li>
</ul>




