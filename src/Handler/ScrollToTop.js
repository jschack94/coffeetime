import { useEffect } from 'react';
import { withRouter } from 'react-router';

const ScrollToTop = ({ children, location: { pathname } }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return children;
};

export default withRouter(ScrollToTop);