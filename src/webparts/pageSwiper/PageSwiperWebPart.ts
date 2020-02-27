import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version, Environment, EnvironmentType } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'PageSwiperWebPartStrings';
import PageSwiper from './components/PageSwiper';
import { IPageSwiperProps } from './components/IPageSwiperProps';
import { IPageService } from './services/IPageService';
import MockPages from './services/MockPages';

export interface IPageSwiperWebPartProps {
  enableNavigation: boolean;
  enablePagination: boolean;
  enableAutoplay: boolean;
  delayAutoplay: number;
  disableAutoplayOnInteraction: boolean;
  slidesPerView: string;
  slidesPerGroup: string;
  spaceBetweenSlides: string;
  enableGrabCursor: boolean;
  enableLoop: boolean;
  sitePagesName: string;
}

export default class PageSwiperWebPart extends BaseClientSideWebPart<IPageSwiperWebPartProps> {
  protected async onInit(): Promise<void> {

    await super.onInit();

    // other init code may be present

    //sp.setup(this.context);
  }
  public render(): void {
    var pageProvider: IPageService;

    //use the mock service if running locally, otherwise use the SharePoint List Service
    if (DEBUG && Environment.type === EnvironmentType.Local) {
      pageProvider = new MockPages();
    }
    else if (Environment.type == EnvironmentType.SharePoint) {
      //pageProvider = this.context.serviceScope.consume(ListSharePoint.serviceKey);
    }
    const element: React.ReactElement<IPageSwiperProps> = React.createElement(
      PageSwiper,
      {
        pageProvider: pageProvider,
        swiperOptions: this.properties,
        sitePagesName: this.properties.sitePagesName
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
