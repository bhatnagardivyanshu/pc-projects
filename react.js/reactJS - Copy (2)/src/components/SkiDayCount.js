import React from 'react'
import propTypes from 'prop-types'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calender from 'react-icons/lib/fa/calendar'
import '../css/ui.scss'

const percentToDecimal = (decimal) => {
	console.log(decimal);
	return ((decimal * 100) + "%")
}

const calcGoalProgress = (total, goal) => {
	console.log(total);
	console.log(goal);
	return percentToDecimal(total/goal)
}


// creating component
// export const SkiDayCount = createReactClass({
// as per ES6
export const SkiDayCount = ({total, powder, backcountry, goal}) => (
	<div className = "ski-day-count">
		<div className = "total-days">
			<span>{total}</span>
			<Calender />
			<span>days</span>
		</div>
		<div className = "powder-days">
			<span>{powder}</span>
			<SnowFlake />
			<span>days</span>
		</div>
		<div className = "backcountry-days">
			<span>{backcountry}</span>
			<Terrain />
			<span>days</span>
		</div>
		<div className = "backcountry-days">
			<span>
				{calcGoalProgress(
					total,
				 	goal
				 )}
			</span>
		</div>
	</div>	
)

// setting default properties
SkiDayCount.defaultProps = {
	total: 50,
	powder: 80,
	backcountry: 25,
	goal:25
}

// specifying types allowed for properties usin PropType
SkiDayCount.propTypes = {
	total: propTypes.number.isRequired,
	powder: propTypes.number,
	backcountry: propTypes.number,
	goal: propTypes.number
}
