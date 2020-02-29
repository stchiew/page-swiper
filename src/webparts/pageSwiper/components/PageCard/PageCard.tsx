import * as React from 'react';
import IPageCardProps from './IPageCardProps';
import styles from './PageCard.module.scss';

const PageCard = (item: IPageCardProps) => {
  return (<div className={styles.container}>{item.pageItem.Title}</div>);
};

export default PageCard;