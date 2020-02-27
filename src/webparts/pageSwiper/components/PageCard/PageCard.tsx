import * as React from 'react';
import IPageCardProps from './IPageCardProps';


const PageCard = (item: IPageCardProps) => <h3>{item.pageItem.Title}</h3>;

export default PageCard;