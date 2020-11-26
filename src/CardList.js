import React from 'react';
import Cards from './Cards';

const CardList = ({robots}) => {
const CardsArray = robots.map((user, i) =>{
	return (
		<Cards
		key = {i}
		name = {robots[i].name}
		id = {robots[i].id}
		email = {robots[i].email}
		/>



		)



})
return (

		<div>
			{CardsArray}
		</div>



	);




}

export default CardList;