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

<h2>✨ Highlights of this Project </h2>

<ul>
  <li>🔒 <b>Enterprise-Level Authentication</b>: Multi-strategy Passport.js (Google OAuth 2.0 + Local) with serialized sessions stored securely in MongoDB Atlas.</li>
  <li>🗺️ <b>Geospatial Intelligence</b>: Integrated Google Maps API & geocoding to automatically plot property listings on maps with accurate coordinates.</li>
  <li>☁️ <b>Cloud-Native Architecture</b>: Leveraged Cloudinary + Multer for scalable image hosting and optimized delivery (lazy-loading, caching).</li>
  <li>🧩 <b>Scalable MVC Design</b>: Fully modular MVC architecture, ensuring maintainability and future feature expansion.</li>
  <li>🗂️ <b>Robust Data Integrity</b>: Applied Joi schemas for request validation, eliminating malformed data before it reaches the database.</li>
  <li>⚡ <b>Performance & UX</b>: Hosted on Render with MongoDB Atlas, delivering fast response times, reliable uptime, and smooth user flows.</li>
  <li>📊 <b>Real-World Security Practices</b>: Encrypted sessions, cookie management, flash messages for user feedback, and middleware-driven authorization.</li>
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




