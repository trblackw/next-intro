import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
   NProgress.start();
 };
 Router.onRouteChangeComplete = () => {
   NProgress.done();
 };
 
 Router.onRouteChangeError = () => {
   NProgress.done();
 };
 
const Layout = ({ children, title }) => (
	<HeaderContainer>
		<StyledHeader>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			<Link href="/hireme">
				<a>Hire Me</a>
			</Link>
		</StyledHeader>
		<h1>{title}</h1>
		{children}
		<footer>&copy; {new Date().getFullYear()}</footer>
	</HeaderContainer>
);

export default Layout;

const StyledHeader = styled('header')`
	width: 100%;
	display: flex;
	justify-content: space-around;
   padding: 1em;
   margin: 0;
	font-size: 1.2rem;
   background: ${({ theme }) => theme.offWhite};

	a:hover {
		font-weight: bold;
		color: lightgray;
	}
`;

const HeaderContainer = styled('div')`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
