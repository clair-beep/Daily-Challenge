function breakChocolate(n, m) {
	console.log(n, m);
	if ((n === 1 && m === 1) || n < 1 || m < 1) {
		return 0;
	} else {
		let area = n * m;
		return area - 1;
	}
}
