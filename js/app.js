const users = [
	{
		name: 'Jesse Clark',
		email: 'j.clark@example.com',
		pemLevel: 'Standard',
		img: './assets/ Avatar / mini2.svg',
	},
	{
		name: 'Javier King',
		email: 'j.clark@example.com',
		pemLevel: 'Standard',
		img: './assets/ Avatar / mini2.svg',
	},
	{
		name: 'Bernice Johnston',
		email: 'b.johnston@example.com',
		pemLevel: 'Standard',
		img: './assets/ Avatar / mini2.svg',
	},
	{
		name: 'Taylor Bennett',
		email: 't.bennett@example.com',
		pemLevel: 'Standard',
		img: './assets/ Avatar / mini2.svg',
	},
	{
		name: 'Nevaeh Evans',
		email: 'n.evans@example.com',
		pemLevel: 'Standard',
		img: './assets/ Avatar / mini2.svg',
	},
	{
		name: 'Walter Hughes',
		email: 'w.hughes@example.com',
		pemLevel: 'Standard',
		img: './assets/ Avatar / mini2.svg',
	},
	{
		name: 'Lee Gordon',
		email: 'l.gordon@example.com',
		pemLevel: 'Standard',
		img: './assets/ Avatar / mini2.svg',
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
