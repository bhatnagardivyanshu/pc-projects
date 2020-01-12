import React from 'react'
import { Component }  from 'react'
import { SkiDayList } from './SkiDayList'
import { SkiDayCount } from './SkiDayCount'

export class App extends Component{

	constructor(props) {
		super(props)
		this.state = {
			allSkiDays: [
				{
					resort: "Resort 1",
					date: new Date("1/2/2017"),
					powder: true,
					backcountry: false
				},
				{
					resort: "Resort 2",
					date: new Date("11/3/2017"),
					powder: false,
					backcountry: true
				},
				{
					resort: "Resort 3",
					date: new Date("2/15/2017"),
					powder: false,
					backcountry: false
				},
				{
					resort: "Resort 4",
					date: new Date("05/07/2017"),
					powder: true,
					backcountry: false
				}
			]
		}	
	}

	countDays(filter) {
		const { allSkiDays } = this.state
		return allSkiDays.filter(
			(day) => (filter) ? day[filter] : day ).length
	}

	render(){
		return (
			<div className='app'>
				<SkiDayList days={this.state.allSkiDays}/>
				<SkiDayCount 
					total={this.countDays()}
					powder={this.countDays("powder")}
					backcountry={this.countDays("backcountry")}
				/>
			</div>
		)
	}
}