import { Alert, Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import useAuth from '../../../hooks/useAuth'

const MakeAdmin = () => {
	const [email, setEmail] = useState('')
	const [success, setSuccess] = useState(false)
	const { token } = useAuth()
	const handleOnBlur = e => {
		setEmail(e.target.value)
	}
	const handleAdminSubmit = e => {
		const user = { email }
		fetch('https://doctors-portal-server-kohl-eta.vercel.app/users/admin', {
			method: 'PUT',
			headers: {
				authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then(res => res.json())
			.then(data => {
				if (data.modifiedCount) {
					setEmail('')
					setSuccess(true)
				}
			})
		e.preventDefault()
	}
	return (
		<div>
			<h2>Make Admin</h2>
			<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 20 }}>
				<form style={{ display: 'flex', flexDirection: 'column', width: '25%' }} action='' onSubmit={handleAdminSubmit}>
					<TextField onBlur={handleOnBlur} type='email' label='Admin Email' variant='standard' />
					<Button className='btnStyle' variant='contained' type='submit' sx={{ mt: 3 }}>
						Make Admin
					</Button>
					{success && (
						<Alert severity='success' sx={{ mt: 4 }}>
							Made Admin Successfully
						</Alert>
					)}
				</form>
			</Box>
		</div>
	)
}

export default MakeAdmin
