export const GetStyle = theme => {
    return {
        error: {
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            flexDirection: 'column',
            color: theme.palette.colorList.text.textFormats.valueText,
            fontSize: '18px',
            '& path:last-child': {
                fill: theme.palette.colorList.text.textFormats.descriptionText
            }
        },
        errorSVG: {
            width: '3rem',
            height: '3rem'
        },
        loadData: {
            color: theme.palette.colorList.text.textFormats.descriptionText,
            fontSize: '1.5rem',
            marginTop: '0.25rem'
        },
        content: {
            color: theme.palette.colorList.text.textFormats.descriptionText,
            fontSize: '0.75rem',
            marginTop: '0.25rem'
        }
    };
};
