const properties = {
	serverHost: 'http://3.94.8.20:3000/', //'http://localhost:3000/',
	inventory: 'http://3.94.8.20:3000/inventories',
	bookInventory: 'http://3.94.8.20:3000/inventories',
	users: 'http://3.94.8.20:3000/users',
	monthOptions : [
		{ value: 'January', label: 'January'},
		{ value: 'February', label: 'February'},
		{ value: 'March', label: 'March'},
		{ value: 'April', label: 'April'},
		{ value: 'May', label: 'May'},
		{ value: 'June', label: 'June'},
		{ value: 'July', label: 'July'},
		{ value: 'August', label: 'August'},
		{ value: 'September', label: 'September'},
		{ value: 'October', label: 'October'},
		{ value: 'November', label: 'November'},
		{ value: 'December', label: 'December'}
	],
	genderOptions : [
		{ value: 'Female', label: 'Female'},
		{ value: 'Male', label: 'Male'},
		{ value: 'Other', label: 'Other'}
	],
	locationOptions : [
		{ value: 'India', label: 'India'},
		{ value: 'United Kingdom', label: 'United Kingdom'},
		{ value: 'United States', label: 'United States'},
		{ value: 'Singapore', label: 'Singapore'},
		{ value: 'Brazil', label: 'Brazil'},
		{ value: 'Australia', label: 'Australia'},
	]
}

export default properties;