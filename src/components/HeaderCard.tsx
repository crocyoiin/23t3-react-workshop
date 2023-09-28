import pic from '../assets/link.gif';
import '../pages/ExamplePage/ExamplePage.css';

const HeaderCard = () => {
	return(
		<div id="header-card">
			<h1>Link's cookbook!</h1>
			<p>Can't cook? Skill issue ZAMNNNNNN</p>
			<img src={pic} alt="not cooking :("/>
		</div>
	)
}

export default HeaderCard;