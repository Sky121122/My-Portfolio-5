import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    // { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });

    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>

        {/* Logo */}
        <button
          className={styles.logo}
          onClick={() => scrollToSection('home')}
        >
          <span className={styles.logoIcon}>SKY</span>

          <span className={styles.logoName}>
            Software Engineer
          </span>
        </button>

     

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={styles.navLink}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Right Side */}
        <div className={styles.navRight}>

          <div className={styles.availability}>
            <span></span>
            Available for work
          </div>

          <button
            className={styles.contactButton}
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </nav>

      {/* Mobile Navigation */}
      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ''
        }`}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
          >
            {item.name}
          </button>
        ))}

        <button
          className={styles.mobileContact}
          onClick={() => scrollToSection('contact')}
        >
          Contact Me
        </button>
      </div>
    </header>
  );
}

export default Navbar;