import React, { PropTypes } from 'react';

const getStaticPath = (fileName) => {
    return `${fileName}`;
};

const renderPreloadedState = (state) => {
    return `window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}`;
};

const renderStaticFiles = (files, type = 'script') => {
    if (type === 'scripts') {
        return files.map((file, index) => <script src={getStaticPath(file)} key={index}/>);
    }

    if (type === 'styles') {
        return files.map((file, index) => <link rel="stylesheet" href={getStaticPath(file)} key={index}/>);
    }

    return null;
}

const Html = ({ scripts, styles, content, title, state }) => {
    const preloadedState = (
        <script dangerouslySetInnerHTML={{ __html: renderPreloadedState(state) }} />
    );

    return (
        <html className="no-js" lang="">
            <head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                <title>{title}</title>
                {renderStaticFiles(styles, 'styles')}
            </head>
            <body>
                <div id="app" dangerouslySetInnerHTML={{ __html: content }}/>
                {preloadedState}
                {renderStaticFiles(scripts, 'scripts')}
            </body>
        </html>
    )
};

Html.defaultProps = {
    title: 'Cart Page',
    state: {}
};

Html.propTypes = {
    title: PropTypes.string,
    content: PropTypes.node,
    styles: PropTypes.array,
    scripts: PropTypes.array,
    state: PropTypes.object
};

export default Html;
