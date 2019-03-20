import { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const About = ({ username }) => {
	const [user, setUser] = useState(username);

   About.getInitialProps = async () => {
      const res = await fetch('https://api.github.com/users/trblackw');
      const { login: username } = await res.json();
      return { username }
	};
	return (
		<Layout title="About">
			{user}
			<Link href="/">
				<h1>{username}</h1>
			</Link>
			<img src="../static/React.js_logo.png" alt="" />
		</Layout>
	);
};

export default About;
