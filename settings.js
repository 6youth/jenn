const fs = require('fs');
const chalk = require('chalk');

/*
	* Create By Naze
	* Follow https://github.com/nazedev
	* Whatsapp : https://whatsapp.com/channel/0029VaWOkNm7DAWtkvkJBK43
*/

//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\

global.owner = ['628138176829'] //['628','628'] 2 owner atau lebih
global.author = 'reyy'
global.botname = 'JENN 82+'
global.packname = 'jennierubyjane'
global.listprefix = ['j','!','.']

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json' // Taruh url mongodb di sini jika menggunakan mongodb. Format : 'mongodb+srv://...'
global.tempatStore = 'baileys_store.json' // Taruh url mongodb di sini jika menggunakan mongodb. Format : 'mongodb+srv://...'
global.pairing_code = true
global.number_bot = '6283165995953' // Kalo pake panel bisa masukin nomer di sini, jika belum ambil session. Format : '628xx'

global.fake = {
	anonim: 'https://telegra.ph/file/95670d63378f7f4210f03.png',
	thumbnailUrl: 'https://telegra.ph/file/fe4843a1261fc414542c4.jpg',
	thumbnail: fs.readFileSync('./src/media/naze.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.my = {
	yt: 'https://youtube.com/c/jennierubyjane',
	gh: 'https://github.com/6youth',
	gc: '',
	ch: '',
}

global.limit = {
	free: 20,
	premium: 999,
	vip: 9999
}

global.money = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	key: 'ummm anuu',
	owner: 'fitur khusus owner!',
	admin: 'fitur khusus admin!',
	botAdmin: 'bot bukan admin!',
	group: 'gunakan di group!',
	private: 'gunakan di privat chat!',
	limit: 'limit anda telah habis!',
	prem: 'khusus user premium!',
	wait: 'loading...',
	error: 'error!',
	done: 'done ngab :v'
}

global.APIs = {
	naze: 'https://api.naze.biz.id',
}
global.APIKeys = {
	'https://api.naze.biz.id': 'YOUR_API_KEY',
}

// Lainnya

global.badWords = ['dongo','kontol','memek','yatim'] // input kata-kata toxic yg lain. ex: ['dongo','dongonya']
global.chatLength = 500

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)

});

