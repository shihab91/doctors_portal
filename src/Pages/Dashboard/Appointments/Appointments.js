import React, { useEffect, useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
const Appointments = ({ date }) => {
	const { user, token } = useAuth()
	const [appointments, setAppointments] = useState([])
	useEffect(() => {
		const url = `https://doctors-portal-server-kohl-eta.vercel.app/appointments?email=${user.email}&&date=${date.toLocaleDateString()}`
		fetch(url, {
			headers: {
				authorization: `Bearer ${token}`,
			},
		})
			.then(res => res.json())
			.then(data => setAppointments(data))
	}, [date, user.email, token])
	return (
		<div>
			<h2>Appointments {appointments.length} </h2>
			<TableContainer component={Paper}>
				<Table aria-label='Appointments table'>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align='left'>Schedule</TableCell>
							<TableCell align='left'>Service</TableCell>
							<TableCell align='right'>Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{appointments.map(appointment => (
							<TableRow key={appointment._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component='th' scope='row'>
									{' '}
									{appointment.patientName}{' '}
								</TableCell>
								<TableCell align='left'>{appointment.time}</TableCell>
								<TableCell align='left'>{appointment.serviceName}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
}

export default Appointments
