import { Fragment } from 'react';
import { MouseEvent } from 'react';
import { useState } from 'react';

interface Props {
	items: string[];
	heading: string;
	onSelectItem: (item: string) => void;
}

//const handleClick = (event: MouseEvent) => { console.log(JSON.stringify(event)+" was clicked!") };
function ListGroup ({items, heading, onSelectItem}: Props) {
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const compiledHeading = <h1 className="text-light bg-dark container-fluid-nav text-center">{heading}</h1>;
	return <Fragment>
		{compiledHeading}
		<ul className="list-group" style={{width:"min-content"}}>
			{items.map((item, index) => <li key={item+index} className={index === selectedIndex ? "list-group-item active" : "list-group-item bg-dark text-light"} onClick={() => {setSelectedIndex(index); onSelectItem(item)}}>{item}</li>)}	
		</ul>
	</Fragment>;	
}

export default ListGroup;
