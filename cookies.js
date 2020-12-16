const analyticsHelper = require('./analytics-helper')

export default {
    necessary: [
        {
            name: {
                de: 'Funktionale cookies'
            },
            description: {
                de: 'Speichern Ihre Datenschutzeinstellungen.'
            },
            cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
        }
    ],
    optional: [
        {
            name: {
                de: 'Google Analytics'
            },
            description: {
                de: 'Google Analytics hilft uns zu erkennen wie viele Nutzer unsere Seite besuchen.'
            },
            initialState: true,
            src: `https://www.googletagmanager.com/gtag/js?id=${analyticsHelper.gaId}`,
            async: true,
            cookies: ['_ga', '_gat', '_gid'],
            accepted: analyticsHelper.acceptGa
        },
        {
            name: {
                de: 'Hotjar'
            },
            description: {
                de: 'Hotjar hilft uns die korrekte Funktionsweise unserer Seite sicherzustellen.'
            },
            initialState: true,
            src: `https://static.hotjar.com/c/hotjar-${analyticsHelper.hjId}.js?sv=6`,
            async: true,
            cookies: ['_hjid', '_hjFirstSeen', '_hjIncludedInPageviewSample', '_hjAbsoluteSessionInProgress'],
            accepted: analyticsHelper.acceptHj
        }
    ]
}
