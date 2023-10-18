module.exports = {
    mode: 'jit',
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],
    important: true,
    theme: {
        extend: {
            screens: {
                '2xl': '1640px'
            },
            colors: {
                gmail: '#d93025',
                twitter: '#1da1f2',
                patreon: '#f96854',
                github: '#6a737d',
                linkedin: '#0077B5',

                success: '#82CA9D',
                fail: '#F7977A',

                primary: {
                    '100': '#FFFFFF',
                    '200': '#F8FCFC',
                    '300': '#D3EEED',
                    '400': '#AEE0DF',
                    '500': '#89D1D0',
                    '600': '#65C3C1',
                    '700': '#45B0AE',
                    '800': '#368C8A',
                    '900': '#286766'
                },
                accent: {
                    '100': '#FFFFFF',
                    '200': '#FFFFFF',
                    '300': '#FAE5EF',
                    '400': '#F3BAD5',
                    '500': '#EB8EBB',
                    '600': '#E363A1',
                    '700': '#DC3887',
                    '800': '#BF226E',
                    '900': '#931A55'
                },
                warn: {
                    '100': '#FEF3E1',
                    '200': '#FDDFAF',
                    '300': '#FCCC7D',
                    '400': '#FBB84B',
                    '500': '#FAA419',
                    '600': '#DC8904',
                    '700': '#AA6A03',
                    '800': '#784B02',
                    '900': '#462C01'
                },

            },
            flex: {
                5: '1 1 5%',
                10: '1 1 10%',
                15: '1 1 15%',
                25: '1 1 25%',
                50: '1 1 50%',
                75: '1 1 75%',
                85: '1 1 85%',
                90: '1 1 90%',
                95: '1 1 95%',
                100: '1 1 100%',
                2: '2 2 0%',
                3: '3 3 0%',
            },
            scale: {
                200: '2',
                250: '2.5',
                300: '3',
                500: '5',
            },
            fontSize: {
                '7xl': '5rem',
                '8xl': '6rem',
                '9xl': '7rem',
            },
            backgroundOpacity: {
                10: '0.1',
            },
            opacity: {
                10: '0.1',
                20: '0.2',
                40: '0.4',
                60: '0.6',
                80: '0.8',
                90: '0.9',
            },
            transitionProperty: {
                'opacity-transform': 'opacity, transform',
                position: 'left, top, bottom, right',
                spacing: 'margin, padding',
            },
            transitionDuration: {
                250: '250ms',
            },
            zIndex: {
                '-100': '-100',
                '-10': '-10',
                60: '60',
                70: '70',
                80: '80',
                90: '90',
                100: '100',
                200: '200',
                300: '300',
                400: '400',
                500: '500',
            },
            inset: {
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '4/3': '133.333333%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '2/6': '33.333333%',
                '3/6': '50%',
                '4/6': '66.666667%',
                '5/6': '83.333333%',
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%',
                100: '100%',
                '-4': '-1rem',
                '-3': '-0.75rem',
                '-2': '-0.5rem',
                '-1': '-0.25rem',
                0: '0',
                1: '0.25rem',
                2: '0.5rem',
                3: '0.75rem',
                4: '1rem',
                5: '1.25rem',
                6: '1.5rem',
                8: '2rem',
                10: '2.5rem',
                12: '3rem',
                16: '4rem',
                18: '4.5rem',
                20: '5rem',
                24: '6rem',
                32: '8rem',
                40: '10rem',
                48: '12rem',
                56: '14rem',
                64: '16rem',
                full: '100%',
            },
            spacing: {
                '1/2': '50%',
                '3/2': '150%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '4/3': '133.333333%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '5/4': '125%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '6/5': '120%',
                '1/6': '16.666667%',
                '2/6': '33.333333%',
                '3/6': '50%',
                '4/6': '66.666667%',
                '5/6': '83.333333%',
                '7/6': '116.66666667%',
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%',
                '13/12': '108.333333%',
                72: '18rem',
                80: '20rem',
                120: '30rem',
                max: '1180px',
            },
            height: {
                '17vh': '17vh',
                '25vh': '25vh',
                '33vh': '33vh',
                '50vh': '50vh',
                '67vh': '67vh',
                '75vh': '75vh',
                '83vh': '83vh',
            },
            minWidth: {
                0: '0',
                1: '0.25rem',
                2: '0.5rem',
                3: '0.75rem',
                4: '1rem',
                5: '1.25rem',
                6: '1.5rem',
                8: '2rem',
                10: '2.5rem',
                12: '3rem',
                16: '4rem',
                20: '5rem',
                24: '6rem',
                32: '8rem',
                40: '10rem',
                48: '12rem',
                56: '14rem',
                64: '16rem',
                120: '30rem',
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '2/6': '33.333333%',
                '3/6': '50%',
                '4/6': '66.666667%',
                '5/6': '83.333333%',
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%',
                max: '1180px',
            },
            maxWidth: {
                '32': '8rem',
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '2/6': '33.333333%',
                '3/6': '50%',
                '4/6': '66.666667%',
                '5/6': '83.333333%',
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%',
                max: '1180px',
            },
            minHeight: {
                0: '0',
                1: '0.25rem',
                2: '0.5rem',
                3: '0.75rem',
                4: '1rem',
                5: '1.25rem',
                6: '1.5rem',
                8: '2rem',
                10: '2.5rem',
                12: '3rem',
                16: '4rem',
                20: '5rem',
                24: '6rem',
                32: '8rem',
                40: '10rem',
                48: '12rem',
                56: '14rem',
                64: '16rem',
                '17vh': '17vh',
                '25vh': '25vh',
                '33vh': '33vh',
                '50vh': '50vh',
                '67vh': '67vh',
                '75vh': '75vh',
                '83vh': '83vh',
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '2/6': '33.333333%',
                '3/6': '50%',
                '4/6': '66.666667%',
                '5/6': '83.333333%',
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%',
            },
            maxHeight: {
                0: '0',
                '17vh': '17vh',
                '25vh': '25vh',
                '33vh': '33vh',
                '50vh': '50vh',
                '67vh': '67vh',
                '75vh': '75vh',
                '83vh': '83vh',
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '2/6': '33.333333%',
                '3/6': '50%',
                '4/6': '66.666667%',
                '5/6': '83.333333%',
                '1/12': '8.333333%',
                '2/12': '16.666667%',
                '3/12': '25%',
                '4/12': '33.333333%',
                '5/12': '41.666667%',
                '6/12': '50%',
                '7/12': '58.333333%',
                '8/12': '66.666667%',
                '9/12': '75%',
                '10/12': '83.333333%',
                '11/12': '91.666667%',
            },
        },
        fontFamily: {
            serif: ['Source Serif Pro'],
            sans: ['Montserrat'],
        },
        container: {
            padding: {
                default: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
            },
        },
    },
    variants: {
        opacity: ['responsive', 'hover', 'focus', 'group-hover'],
        textOpacity: ['responsive', 'hover', 'focus', 'group-hover'],
        scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
        backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
        display: ['responsive', 'hover', 'focus', 'group-hover'],
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
    corePlugins: {
        container: false,
        clear: false,
        visibility: false,
        backgroundAttachment: false,
        backgroundRepeat: false,
    },
}