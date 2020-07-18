let users = [
	{
		name: 'Erica Badu',
		email: 'e.badu@example.com',
		pemLevel: 'Owner',
		img: '/assets/ Avatar / mini.svg',
	},
	{
		name: 'Pat Nelsson',
		email: 'p.nelsson@example.com',
		pemLevel: 'Admin',
		img: './assets/ Avatar / mini2.svg',
	},
	{
		name: 'Pedding acceptance',
		email: 'j.dog@example.com',
		pemLevel: 'Standard',
		img: './assets/ Avatar / mini2.svg',
	},
	{
		name: 'Amy Namy',
		email: 'a.namy@example.com',
		pemLevel: 'Standard',
		img: './assets/ Avatar / mini.svg',
	},
	{
		name: 'Victor D.',
		email: 'v.d@example.com',
		pemLevel: 'Standard',
		img: './assets/ Avatar / mini2.svg',
	},
	{
		name: 'Olly',
		email: 'o.hunter@example.com',
		pemLevel: 'Standard',
		img: './assets/ Avatar / mini3.svg',
	},
]

let table = document.querySelector('#table')

table.addEventListener('click', (e) => {
	if (e.target && e.target.matches('.trash')) {
		const item = e.target.parentElement.parentElement
		item.remove()
	}
})

document.querySelectorAll('.add-btn').forEach((btn) =>
	btn.addEventListener('click', () => {
		let randomUser = users[Math.floor(Math.random() * users.length)]
		let newUser = document.createElement('div')
		newUser.setAttribute('id', 'table-row')

		newUser.innerHTML = `
            <div class="table-cell" data-title="Team Member">
                <img id="user-img" src="${randomUser.img}" alt="Team Member">
                ${randomUser.name}
            </div>
            <div class="table-cell" data-title="Email">${randomUser.email}</div>
            <div class="table-cell" data-title="Permison Level">${randomUser.pemLevel}</div>
            <div class="table-cell trash-img">
            <img class="trash" data-id="Trash" src="../assets/Group.svg" />
        </div>
        `
		table.append(newUser)
	})
)
