import React from 'react';
import compose from 'recompose/compose';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { GetStyle } from './loaderComponentStyle';
import loading from '../../../media/img/loading.gif';

const LoaderComponent = ({ classes, id, cellChange }) => (
    <div
        className={classNames(classes.loadingClass, {
            cellChangeLoader: cellChange
        })}
    >
        <div>
            <img
                className={classes.loadingGIF}
                src={loading}
                alt="loading..."
                id={id}
            />
        </div>
        <div>Please wait...</div>
    </div>
);

export default compose(withStyles(GetStyle, { useTheme: true }))(
    LoaderComponent
);
