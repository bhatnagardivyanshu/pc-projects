import React from 'react'
import propTypes from 'prop-types'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calender from 'react-icons/lib/fa/calendar'

export const SkiDayRow = ({resort, date, powder, backcountry}) => (

	<tr>
		<td>
			{date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}
		</td>
		<td>
			{resort}
		</td>
		<td>
			{ (powder) ? <SnowFlake/> : null }
		</td>
		<td>
			{ (backcountry) ? <Terrain/> : null }
		</td>
	</tr>

)

SkiDayRow.propTypes = {
	resort: propTypes.string.isRequired,
	date: propTypes.instanceOf(Date).isRequired,
	powder: propTypes.bool,
	backcountry: propTypes.bool
}

