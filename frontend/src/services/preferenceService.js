import axios from 'axios'

const baseurl = 'http://localhost:5000/api'

const updatePreference = async (user, newPreference) => {
    const res = await axios.put(`${baseurl}/preferences/${user}`, newPreference)

    return res.data
}

const getPreferences = async () => {
    const res = await axios.get(`${baseurl}/preferences`)

    return res.data
}

const preferenceService = {
    updatePreference,
    getPreferences
}

export default preferenceService