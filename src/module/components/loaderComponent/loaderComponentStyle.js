export const GetStyle = theme => {
    const sm = 600;
    const md = 960;
    const xl = 1920;

    return {
        loadingClass: {
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            flexDirection: 'column',
            color: window.theme
                ? window.theme.palette.colorList.text.textFormats.valueText
                : 'black',
            [`@media( max-width: ${sm}px )`]: {
                fontSize: window.theme
                    ? window.theme.typographyVariations.typography20
                          .SMBreakPoint.fontSize
                    : 18
            },
            [`@media( min-width: ${sm + 1}px) and (max-width: ${md}px )`]: {
                fontSize: window.theme
                    ? window.theme.typographyVariations.typography20
                          .SMMDBreakPoint.fontSize
                    : 18
            },
            [`@media( min-width: ${md + 1}px) and (max-width: ${xl - 1}px )`]: {
                fontSize: window.theme
                    ? window.theme.typographyVariations.typography20
                          .MDXLBreakPoint.fontSize
                    : 14
            },
            [`@media( min-width: ${xl}px )`]: {
                fontSize: window.theme
                    ? window.theme.typographyVariations.typography20
                          .XLBreakPoint.fontSize
                    : 20
            },
            '&.cellChangeLoader': {
                backgroundColor: 'grey',
                opacity: '0.6'
            }
        },
        loadingGIF: {
            width: '3rem',
            height: '3rem'
        }
    };
};
