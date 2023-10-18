import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
//import Test from './Test';

import './app.scss';

const App = () => {
	return <div>
		<section id='Homepage'>
			<Navbar />
			<Hero />
		</section>
		<section id='Services'>Parallax</section>
		<section id='Portfolio'>Services</section>
		<section>Parallax</section>
		<section>Portfolio1</section>
		<section>Portfolio2</section>
		<section>Portfolio3</section>
		<section id='Contacts'>Contact</section>

		{/* <Test />
		<Test /> */}
	</div>;
};

export default App;
