export default async (req,res,next) => {
	try {
		res.cookie('uid',null, {maxAge: -1})
		return res.json({success:true, status:204})
	}catch(e){
		return next(e)
	}
}