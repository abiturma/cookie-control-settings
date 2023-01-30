const analyticsHelper = require('./analytics-helper')

export default function (ids = {}) {


    var optional = [];

    if (ids.gaId) {
        optional.push({
            name: {
                de: 'Google Analytics'
            },
            description: {
                de: 'Google Analytics hilft uns zu erkennen wie viele Nutzer unsere Seite besuchen.'
            },
            initialState: true,
            src: `https://load.home.abiturma.de/ekbxmllt.js?id=${ids.gaId}`,
            async: true,
            cookies: ['_ga', '_gat', '_gid'],
            accepted: analyticsHelper.acceptGa
        })
    }

    if (ids.hjId) {
        optional.push({
            name: {
                de: 'Hotjar'
            },
            description: {
                de: 'Hotjar hilft uns die korrekte Funktionsweise unserer Seite sicherzustellen.'
            },
            initialState: true,
            src: `https://static.hotjar.com/c/hotjar-${ids.hjId}.js?sv=6`,
            async: true,
            cookies: ['_hjid', '_hjFirstSeen', '_hjIncludedInPageviewSample', '_hjAbsoluteSessionInProgress'],
            accepted: analyticsHelper.acceptHj
        })
    }


    return {
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
        optional: optional
    }
}
