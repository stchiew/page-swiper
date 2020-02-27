import { IPageItem } from "./IPageItem";

export interface IPageService {
  getAllPages(): Promise<IPageItem[]>;
}
