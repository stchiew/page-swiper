import { IPageService } from "../services/IPageService";
import { IPageSwiperWebPartProps } from "../PageSwiperWebPart";

export interface IPageSwiperProps {
  pageProvider: IPageService;
  swiperOptions: IPageSwiperWebPartProps;
  sitePagesName: string;
}
