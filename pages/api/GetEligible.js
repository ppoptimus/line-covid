export default function handler(req, res) {
	const pid = req.body.citizenId
	const phone = req.body.phoneNumber
	const data = {
		firstName: "John",
		lastName: "Doe",
		citizenId: pid,
		phoneNumber: phone,
	}

	res.status(200).json(data)
}
