import * as React from 'react';
import styles from './PageSwiper.module.scss';
import { IPageSwiperProps } from './IPageSwiperProps';
import PageCard from './PageCard/PageCard';

export default function PageSwiper(props: IPageSwiperProps): JSX.Element {

  const {
    description,
    environmentMessage,
    userDisplayName
  } = props;

  const InitialMessgae:string = "Using federated auth.";

  return (
    
    <div className={styles.pageSwiper}>
      <h2>Well done, {userDisplayName}!</h2>
      <div>{environmentMessage}</div>
      <div>Web part property value: <strong>{escape(description)}</strong></div>
      <PageCard message={InitialMessgae}/>
    </div>
  );

}
