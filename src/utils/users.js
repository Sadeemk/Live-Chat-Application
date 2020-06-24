const users = [];

const addUser = ({ id, username, room }) => {
	// Clean the data
	username = username.trim().toLowerCase();
	room = room.trim().toLowerCase();

	// Validate the data
	if (!username || !room) {
		return {
			error: 'Username and room are required!'
		};
	}

	// Check for existing user in room
	const existingUser = users.find((user) => {
		return user.room === room && user.username === username;
	});

	// Validate username
	if (existingUser) {
		return {
			error: 'Username is taken'
		};
	}

	// Store user
	const user = { id, username, room };
	users.push(user);
	return { user };
};

const removeUser = (id) => {
	const index = users.findIndex((user) => {
		return user.id === id;
	});

	if (index != -1) {
		return users.splice(index, 1)[0];
	}
};

const getUser = (id) => {
	return users.find((user) => {
		return user.id === id;
	});
};

const getUsersInRoom = (room) => {
	room = room.trim().toLowerCase();
	// return users.filter((user) => {
	// 	return user.room === room;
	// });

	const foundUsers = [];
	const usersInRoom = users.find((user) => {
		if (user.room === room) {
			foundUsers.push(user);
		}
	});
	return foundUsers;
};

module.exports = {
	addUser,
	removeUser,
	getUser,
	getUsersInRoom
};
