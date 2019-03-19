import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
	<Layout title="About">
		<Link href="/">
			<h1>Home</h1>
		</Link>
		<img src="../static/React.js_logo.png" alt="" />
	</Layout>
);
