const { extendTheme } = require('@chakra-ui/react');

const theme = extendTheme({
	colors: {
		bruntSienna: {
			50: '#D58936',
			100: '#fcd4cb',
			200: '#f0b8a8',
			300: '#ea9b86',
			400: '#e37f63',
			500: '#e07152',
			500: '#da542f',
			600: '#bf4422',
			700: '#9c371c',
			800: '#682512',
			900: '#230c06',
		},
		sunglow: {
			50: '#fff5d6',
			100: '#ffebad',
			200: '#ffe085',
			300: '#ffd65c',
			400: '#ffcc33',
			500: '#ffc20a',
			600: '#e0a800',
			700: '#b88a00',
			800: '#8f6b00',
			900: '#523d00',
		},
		indigoDye: {
			50: '#eff5fa',
			100: '#c0d6ec',
			200: '#a0c2e3',
			300: '#81adda',
			400: '#6199d1',
			500: '#4185c8',
			600: '#3270ae',
			700: '#295c8e',
			800: '#20476f',
			900: '#17334f',
		},
	},
	fonts: {
		body: '"Jost", sans-serif',
		heading: '"Jost", sans-serif',
	},
});

export default theme;
