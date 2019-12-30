import fetch from 'node-fetch'

export default async (req,res,next) => {
	const maxAge = +process.env.COOKIE_EXPIRE * 1000
	try {
		const {email,password} = req.body
		const url = new URL('/users',process.env.USERS_API_DOMAIN)
		const users = await fetch(url).then(r => r.json())
		const user = users.find(user => user.email === email)
		if(!user) throw new Error('User not found')
		if(user.website !== password) throw new Error('Invalid password')
		// sets a cookie after the user logins
		res.cookie('uid', user.id, {maxAge,signed: true, path: '/', secure: false, httpOnly: false})
		return res.json({success: true, status: 200, data: user})
	} catch(e){
		return next(e)
	}
}