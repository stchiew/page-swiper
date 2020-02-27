import * as React from 'react';
import styles from './PageSwiper.module.scss';
import { IPageSwiperProps } from './IPageSwiperProps';
import { IPageItem } from '../services/IPageItem';
import PageCard from './PageCard/PageCard';

export default function PageSwiper(props: IPageSwiperProps) {
  const initialPages: IPageItem[] = null;
  const [pages, setPages] = React.useState(initialPages);
  var content: any = null;
  React.useEffect(
    () => {
      props.pageProvider.getAllPages().then(
        pageList => { setPages(pageList); }
      );
    }, []
  );

  if (pages == null) {
    content = (<div></div>);
  } else {
    content = (<div>{pages.map((page, i) => <div> <PageCard pageItem={page} key={i} /></div>)}</div>);
  }
  return (
    <div className={styles.pageSwiper}>
      <div className={styles.container}>
        <div className={styles.row}>
          {content}
        </div>
      </div>
    </div>
  );

}
