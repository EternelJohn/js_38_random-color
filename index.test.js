const getRandomRGB = require('./index');

test('Функция должна вернуть строку', () => {
	const res = getRandomRGB([]);

	expect(typeof res).toBe('string');
});

test('Функция должна вернуть чёткий паттерн: rgb(число,число,число)', () => {
	const res = getRandomRGB([]);

	expect(res).toMatch(/rgb\(\d+,\d+,\d+\)/gm);
});

test('Тест. 30 итераций', () => {
	const colors = [];

	for (let i = 0; i < 30; i++) {
		const res = getRandomRGB(colors);

		expect(colors.includes(res)).toBeFalsy();
		colors.push(res);
	}
});

test('Тест. 500 итераций', () => {
	const colors = [];

	for (let i = 0; i < 30; i++) {
		const res = getRandomRGB(colors);

		expect(colors.includes(res)).toBeFalsy();
		colors.push(res);
	}
});