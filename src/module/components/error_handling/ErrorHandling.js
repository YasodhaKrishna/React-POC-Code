import React from 'react';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import ErrorIcon from '../../../media/img/error_handling.svg';
import { GetStyle } from './ErrorHandlingStyle';



const ErrorComponent = ({ error, classes, id }) => (
    <div className={classes.error} id={id}>
        <ErrorIcon className={classes.errorSVG} />
        {/* <div>{`${error}`}</div> */}
        <div className={classes.loadData}> Unable to load the Data </div>
        <div className={classes.content}>
            This can happen if you are not connected to the internet or
        </div>
        <div className={classes.content}>
            If an underlying system or component is not available.
        </div>
    </div>
);

export default compose(withStyles(GetStyle, { useTheme: true }))(
    ErrorComponent
);
