import * as React from "react";
import { IState } from "../ducks";
export interface ILoaderProps extends IState {
}
declare class LoaderContainer extends React.Component<ILoaderProps> {
    state: {
        adminDashboardTabs: {
            data: any;
            error: any;
        };
        error: any;
        serviceMetadata: {
            data: any;
            error: any;
        };
    };
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponentClass<typeof LoaderContainer, Pick<ILoaderProps, never>>;
export default _default;
