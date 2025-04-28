import * as React from 'react';
import IPageCardProps from './IPageCardProps';
import styles from './PageCard.module.scss';

const PageCard:React.FC<IPageCardProps> = (props) => {
  return (<div className={styles.container}>{props.message}</div>);
};

export default PageCard;