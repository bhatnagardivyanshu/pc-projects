import React from 'react'
import propTypes from 'prop-types'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calender from 'react-icons/lib/fa/calendar'
import {SkiDayRow} from './SkiDayRow'

export const SkiDayList = ({days}) => (
	<table>
		<thead>
			<tr>
				<td>Date</td>
				<td>Resort</td>
				<td>Powder</td>
				<td>Backcountry</td>
			</tr>
		</thead>

		<tbody>
			{days.map((day, i) => <SkiDayRow 
				key={i}
				{...day}
			 />)}
		</tbody>

	</table>

)

//

SkiDayList.propTypes = {
	days: propTypes.array
}

SkiDayList.propTypes = {
	days: function(props){
		if(!Array.isArray(props.days)){
			return new Error("SkiDayList should be an array!");
		}else if(!props.days.length){
			return new Error("SkiDayList must have at least one record");
		}else{
			return null;
		}
	}
}
















