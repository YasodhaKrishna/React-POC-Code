export const GetStyle = theme => {
    return {
        wrapper: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            background: theme.palette.primary.main,
            flex: '1 1 100%',
            width: '100vw',
            minWidth: '100vw',
            // height: '100vh',
            minHeight: '100vh',
            overflowX: 'hidden'
        },
        mainWrapper: {
            display: 'flex',
            flexDirection: 'column',
            flex: '0 0 100%',
            width: '100vw',
            minWidth: '100vw',
            minHeight: '100vh',
            overflowY: 'hidden',
            backgroundColor: theme.palette.primary.main
        },
        slimScroll: {
            height: 'calc(100vh - 0px) !important'
        },
        thumbVertical: {
            backgroundColor: theme.palette.secondary.main + '!important',
            right: '2px',
            bottom: '2px',
            left: '2px',
            borderRadius: '3px'
        }
    };
};
