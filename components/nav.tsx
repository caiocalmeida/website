import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Nav.module.css';

export default function Nav() {
  return (
    <nav id="nav" className={styles.nav}>
      <div className={styles.imgcontainer}>
        <Image className={styles.roundimage} src='/profile.png' alt='profile picture' layout='fill' objectFit='contain' priority/>
      </div>
      <h2>Caio</h2>
      <h3>Software&nbsp;Engineer</h3>
      <ul className={styles.navlist}>
        <li><Link href='/#'>About</Link></li>
        <li><Link href='/#Projects'>Projects</Link></li>
        <li><Link href='/resume'>Resume</Link></li>
        <li><a href='/resume.pdf' target='_blank'>Resume (.pdf)</a></li>
      </ul>
      <ul className={styles.contactlist}>
        <a href='https://github.com/caiocalmeida' target='_blank' rel='noreferrer'>
          <li className={styles.github}>
              <Image src='/github.svg' alt='GitHub Icon' layout='fill' priority/>
          </li>
        </a>
        <a href='https://www.linkedin.com/in/caio-almeida-433019198' target='_blank' rel='noreferrer'>
          <li className={styles.in}>
            <Image src='/in.svg' alt='GitHub Icon' layout='fill' priority/>
          </li>
        </a>
      </ul>
    </nav>
  )
}