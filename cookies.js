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
            src: 'https://www.googletagmanager.com/gtag/js?id=UA-53838435-1',
            async: true,
            cookies: ['_ga', '_gat_gtag_UA_53838435_1', '_gid'],
            accepted: () => {


                window.dataLayer = window.dataLayer || [];

                function gtag() {
                    dataLayer.push(arguments);
                }

                gtag('js', new Date());
                gtag('config', 'UA-53838435-1', {anonymize_ip: true});
            }
        }
    ]
}
