import React from 'react'
import {Link} from 'react-router-dom'
import propTypes from 'prop-types'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calender from 'react-icons/lib/fa/calendar'
import {SkiDayRow} from './SkiDayRow'

export const SkiDayList = ({days, filter}) => {
	const filteredDays = (!filter || !filter.match(/powder||backcoutry/))?
		days:
		days.filter(day => day[filter])
	return (
		<div>
			<table>
				<thead>
					<tr>
						<td>Date</td>
						<td>Resort</td>
						<td>Powder</td>
						<td>Backcountry</td>
					</tr>
					<tr>
						<td colSpan={4}>
							<Link to="/list-days">
								All Days
							</Link>
							<Link to="/list-days/powder">
								Powder
							</Link>
							<Link to="/list-days/backcountry">
								Backcountry
							</Link>
						</td>
					</tr>
				</thead>
				<tbody>
					{filteredDays.map((day, i) => <SkiDayRow 
						key={i}
						{...day}
					 />)}
				</tbody>
			</table>
		</div>
	)
}

//

SkiDayList.propTypes = {
	days: propTypes.array
}

// authentication
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
















