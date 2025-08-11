import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <h1>About This Project</h1>

        <section className={styles.section}>
          <h2>Purpose</h2>
          <p>
            This is a portfolio project demonstrating modern React development
            practices, including component composition, state management, and
            responsive design. It simulates a complete e-commerce interface by
            consuming data from an external Supabase API, showcasing how to
            integrate with third-party services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Tech Stack</h2>
          <h3>Frontend</h3>
          <ul>
            <li>React 18</li>
            <li>Vite</li>
            <li>Context API for state management</li>
            <li>React Router for navigation</li>
            <li>CSS Modules for styling</li>
            <li>SweetAlert2 for notifications</li>
            <li>React Icons</li>
          </ul>
          <h3>Backend Simulation</h3>
          <ul>
            <li>External Supabase API (not installed locally)</li>
            <li>Custom API services simulating external data fetching</li>
            <li>Fetch API for HTTP requests</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Features</h2>
          <ul>
            <li>Product catalog with filtering</li>
            <li>Shopping cart functionality</li>
            <li>Product detail pages</li>
            <li>Responsive design</li>
            <li>Local storage persistence</li>
            <li>Size selection</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Media Credits</h2>
          <p>
            <strong>Background Images</strong> - All background images are from{" "}
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash
            </a>
            :
          </p>
          <ul>
            <li>Mike Von - Background images</li>
            <li>Shanna Camilleri - Hero and menu images</li>
            <li>Sven Mieke - Menu link images</li>
            <li>Bui Hoang Long - Social section</li>
            <li>Eric Rai - Social section</li>
            <li>Ceyda Çiftci - Menu link images</li>
          </ul>
          <p>
            <strong>Product Images</strong> - Product catalog images are sourced
            from Pull & Bear for educational and demonstration purposes only,
            with no commercial intent.
          </p>
          <p>
            <strong>Hero Video</strong> - Hero section features a fragment from
            aespa's "Whiplash" music video, used for demonstration purposes
            only.
          </p>
        </section>
      </div>
    </div>
  );
};
