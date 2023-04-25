import ListGroup from './components/ListGroup.tsx';
import { useState } from 'react';



function App() {
	const [selectedCity, setSelectedCity] = useState("");
	const [backgroundImage, setBackgroundImage] = useState("https://executivestep.com.au/wp-content/uploads/2016/03/shutterstock_179894774-Australia-by-satellite.jpg");
	
const handleOnSelect = (item: string) => { console.log(item+" was selected!"); setBackgroundImage(image_urls[item]);};
	let containerStyle= {
		width: '100vw',
		height: '100vh',
		backgroundImage: `url(${backgroundImage})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	}
	let items = ["sydney", "melbourne", "brisbane", "perth", "adelaide", "darwin", "hobart"];
	let image_urls = {
		"sydney": "https://www.australia.com/content/australia/en/places/sydney-and-surrounds/guide-to-sydney/_jcr_content/image.adapt.710.medium.jpg",
		"melbourne": "https://www.australia.com/content/australia/en/places/melbourne-and-surrounds/guide-to-melbourne/_jcr_content/image.adapt.710.medium.jpg",
		"brisbane": "https://www.australia.com/content/australia/en/places/brisbane-and-surrounds/guide-to-brisbane/_jcr_content/image.adapt.710.medium.jpg",
		"perth": "https://www.australia.com/content/australia/en/places/perth-and-surrounds/guide-to-perth/_jcr_content/image.adapt.710.medium.jpg",
		"adelaide": "https://www.australia.com/content/australia/en/places/adelaide-and-surrounds/guide-to-adelaide/_jcr_content/image.adapt.710.medium.jpg",
		"darwin": "https://www.australia.com/content/australia/en/places/darwin-and-surrounds/guide-to-darwin/_jcr_content/image.adapt.710.medium.jpg",
		"hobart": "https://www.australia.com/content/australia/en/places/hobart-and-surrounds/guide-to-hobart/_jcr_content/image.adapt.710.medium.jpg"
	};

	return <div style={containerStyle}><ListGroup items={items} heading="The Cities of Australia" onSelectItem={handleOnSelect}/></div>;
}

export default App;
