import { useState, useEffect, Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Layout from '../components/Layout';

export default class About extends Component {
	static async getInitialProps() {
		const res = await fetch('https://api.github.com/users/trblackw');
      const data = await res.json();
      
      return { user: data }
	}

	render() {
		return (
			<Layout title="About">
				<Link href="/">
					<h1 style={{ color: 'black' }}>{JSON.stringify(this.props.user)}</h1>
				</Link>
				<img src="../static/React.js_logo.png" alt="" />
			</Layout>
		);
	}
}
