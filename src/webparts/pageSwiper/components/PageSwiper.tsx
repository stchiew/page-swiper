import * as React from 'react';
import styles from './PageSwiper.module.scss';
import { IPageSwiperProps } from './IPageSwiperProps';
import { IPageItem } from '../services/IPageItem';
import PageCard from './PageCard/PageCard';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';

export default function PageSwiper(props: IPageSwiperProps) {
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  };
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
    content = null;
  } else {
    content = (<Swiper {...params}>{pages.map((page, i) => <div> <PageCard pageItem={page} key={i} /></div>)}</Swiper>);
  }
  return (
    <div className={styles.pageSwiper}>
      {content}
    </div>
  );

}
