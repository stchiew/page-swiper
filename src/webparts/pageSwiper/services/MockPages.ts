import { IPageItem } from "./IPageItem";
import { IPageService } from './IPageService';

class MockPages implements IPageService {

  private static _items: IPageItem[] = [
    {
      Title: 'A convergent value empowers the standard-setters',
      ElevatorPitch: 'The General Head of IT Strategy benchmarks business-for-business agilities'
    },
    {
      Title: 'The Digital Marketers empower a digitized correlation',
      ElevatorPitch: 'Whereas synchronized brand values promote strategy formulations'
    },
    {
      Title: 'The market thinker strategically standardizes a competitive success',
      ElevatorPitch: 'The thinkers/planners benchmark a disciplined growth momentum'
    }
  ];
  public getAllPages(): Promise<IPageItem[]> {
    return new Promise<IPageItem[]>((resolve: any) => {
      resolve(MockPages._items);
    });
  }
}

export default MockPages;
