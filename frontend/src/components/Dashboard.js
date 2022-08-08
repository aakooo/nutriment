import React, { useState, useEffect } from "react"
import {useLocation} from 'react-router-dom';
import preferenceService from "../services/preferenceService";

import HeaderLayout from "./commons/HeaderLayout"

const Dashboard = () => {
    const location = useLocation()
    const [breakfast, setBreakfast] = useState(false)
    const [lunch, setLunch] = useState(false)
    const [user, setUser] = useState(null)
    const [breakfastCount, setBreakfastCount] = useState(0)
    const [lunchCount, setLunchCount] = useState(0)

    useEffect(() => {
        setUser(location.state.user)
        preferenceService.getPreferences()
            .then(data => {
                console.log('effect', data)

                const breakfastList = data.map(d => d.breakfast)
                const lunchList = data.map(d => d.lunch)

                setBreakfast(breakfastList.filter(d => d === true).length)
                setLunch(lunchList.filter(d => d === true).length)
            })
    }, [location])

    const onBreakfastChange = () => {
        setBreakfast(!breakfast)

        if (breakfast) {
            setBreakfastCount(breakfastCount+1)
        } else {
            setBreakfastCount(breakfastCount-1)
        }
    }

    const onLunchChange = () => {
        setLunch(!lunch)

        if (lunch) {
            setBreakfastCount(lunchCount+1)
        } else {
            setBreakfastCount(lunchCount-1)
        }
    }

    const onSubmit = event => {
        event.preventDefault()

        console.log()
        preferenceService.updatePreference(user.id, { breakfast, lunch })
            .then(data => {
                console.log(data)
            })
    }

    console.log(location.state)
    return (
        <HeaderLayout title={location.state.user.firstName}>
            <form onSubmit={onSubmit} style={{ width: '100%' }}>
                <div className="breakfast">
                    <input
                        type="checkbox"
                        id="breakfast"
                        name="breakfast"
                        value="Breakfast"
                        checked={breakfast}
                        onChange={onBreakfastChange} />
                    
                    Breakfast
                </div>

                <div className="lunch">
                    <input
                        type="checkbox"
                        id="lunch"
                        name="lunch"
                        value="Lunch"
                        checked={lunch}
                        onChange={onLunchChange} />
                    
                    Lunch
                </div>

                <button type="submit">Submit</button>
            </form>

            <div>
                <p>Breakfast count: {breakfast}</p>
                <p>Lunch count: {lunch}</p>
            </div>
        </HeaderLayout>
    )
}

export default Dashboard