export default (content) => {
  return `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Chess Vault</title>
		<link rel="stylesheet" href="./css/home.css" />
		<link
			href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
			rel="stylesheet"
		/>

		<link
			href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined"
			rel="stylesheet"
		/>
	</head>
	<body>
	${content}
	</body>
	<script src="./js/templateAnimation.js"></script>
	<script src="./headerAnimation.js"></script>
</html>`;
};
