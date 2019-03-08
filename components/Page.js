import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Meta from './Meta';

export default ({ children }) => (
	<ThemeProvider theme={theme}>
		<StyledPage>
			<Meta />
			{children}
		</StyledPage>
	</ThemeProvider>
);

const theme = {
	red: '#FF0000',
	black: '#393939',
	grey: '#3A3A3A',
	lightgrey: '#E1E1E1',
	offWhite: '#EDEDED',
	maxWidth: '1000px',
	bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};

const StyledPage = styled('div')`
	background: white;
	color: ${({ theme }) => theme.black};
`;

createGlobalStyle`
   @font-face {
      font-family: 'Lato', sans-serif;
      src: url('https://fonts.googleapis.com/css?family=Lato');
      font-weight: normal;
      font-style: normal;
   }
   html {
      box-sizing: border-box;
      font-size: 10px;
      margin: 0;
      padding: 0;
   }
   *, *:before, *:after {
      box-sizing: inherit;
   }
   body {
      padding: 0;
      margin: 0;
      font-size: 1.5rem;
      line-height: 2;
      font-family: 'Lato';
   }
   a {
      text-decoration: none;
      color: ${theme.black};
   }
`;
