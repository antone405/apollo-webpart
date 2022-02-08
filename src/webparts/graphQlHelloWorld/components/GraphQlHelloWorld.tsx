import * as React from 'react';
import styles from './GraphQlHelloWorld.module.scss';
import { IGraphQlHelloWorldProps } from './IGraphQlHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class GraphQlHelloWorld extends React.Component<IGraphQlHelloWorldProps, {}> {
  public render(): React.ReactElement<IGraphQlHelloWorldProps> {
    return (
      <div className={ styles.graphQlHelloWorld }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Please view the browser console for results from Apollo GraphQL.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}