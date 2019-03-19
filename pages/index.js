import Layout from '../components/Layout';
import Link from 'next/link';

export default () => (
	<Layout title="Home">
		<Link href="/about">
			<a>Go to about</a>
		</Link>
		<p>Welcome to the homepage</p>
	</Layout>
);

