import React from "react";
import Image from 'next/image'
import styles from '../styles/Project.module.css'

export default function Project(props: ProjectProps) {
  return (
    <article className={`${styles.projectCard} ${getCardClass(props.type)}`}>
      <h3>{props.title}</h3>
      <a href={props.link} target='_blank' rel="noreferrer" className={styles.projectLink}>
        <div className={styles.githubProject}>
          <Image src='/github.svg' alt='GitHub Icon' layout='fill' />
        </div>
        <p>Source</p>
        <div className={styles.link}>
          <Image src='/link.svg' alt='' layout='fill' />
        </div>
      </a>
      <ul className={styles.techList}>
        { props.tags.map((tag, i) => 
          <li className={getTagClass(props.type)} key={i}>{tag}</li>
        )}
      </ul>
      <Image className={getBackgroundImageClass(props.type)} src={getBackgroundImagePath(props.type)} alt='' layout='fill' objectFit='contain' />
    </article>
  );
}

export enum ProjectType {
  Go,
  Dotnet,
  React
}

interface ProjectProps {
  title: string
  tags: string[]
  type: ProjectType
  link: string
}

function getBackgroundImageClass(type: ProjectType) {
  switch (type) {
    case ProjectType.Go:
      return styles.golangBg;
    case ProjectType.Dotnet:
      return styles.dotnetBg;
    case ProjectType.React:
      return styles.reactBg;
    default:
      return '';
  }
}

function getCardClass(type: ProjectType) {
  switch (type) {
    case ProjectType.Go:
      return styles.golangCard;
    case ProjectType.Dotnet:
      return styles.dotnetCard;
    case ProjectType.React:
      return styles.reactCard;
    default:
      return '';
  }
}

function getTagClass(type: ProjectType) {
  switch (type) {
    case ProjectType.Go:
      return styles.golangTag;
    case ProjectType.Dotnet:
      return styles.dotnetTag;
    case ProjectType.React:
      return styles.reactTag;
    default:
      return '';
  }
}

function getBackgroundImagePath(type: ProjectType) {
  switch (type) {
    case ProjectType.Go:
      return '/golang-gopher.svg';
      case ProjectType.Dotnet:
      return '/app-service.svg';
    case ProjectType.React:
      return '/react.svg';
    default:
      return '';
  }
}