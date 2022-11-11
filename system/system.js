const { createServer } = require('http');
const getRandomRGB = require('../index');

const createHTML = () => {
	let res = `
		<style>
			* {
				margin: 0;
				box-sizing: border-box;
			}
		
			.wrapper {
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				gap: 2vw;
				padding: 2vw;
				background-color: #282C34;
			}
			
			.el {
				width: calc((100% - 2vw * 9) / 10);
				padding-top: calc((100% - 2vw * 9) / 10);
				position: relative;
			}
			
			.el div {
				position: absolute;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
				border-radius: 50%;
				border: solid 2px white;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			
			.el span {
				font-size: 20px;
				color: #fff;
				font-weight: 700;
			}
		</style>
	`;

	res += '<div class="wrapper">';

	for (let i = 0; i < 80; i++) {
		res += `
		<div class="el">
			<div style="background-color: ${getRandomRGB()};"><span>${i + 1}</span></div>
		</div>`;
	}

	res += '</div>';

	return res;
};

const server = createServer((req, res) => {
	res.write(createHTML());

	return res.end();
});

server.listen(3000, 'localhost', (err) => {
	if (err) {
		console.log('something went wrong');
	} else {
		console.log('server is listening on port 3000');
	}
});

