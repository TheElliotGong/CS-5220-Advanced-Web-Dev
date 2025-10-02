const User = {
    users: [{_id: 1,
        username: 'dude',
        password: 'password',
        libraries: [1,2],
        platforms: 'playstation'
    }],
    find(key, value)
    {

    },
    add(user){
        const addUser = {...user, _id, this.users.lentgh + 1};
        this.users.push(addUser);
        return addUser;
    }
    
};


