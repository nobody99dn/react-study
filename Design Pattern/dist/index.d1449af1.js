const createUser = ({ firstName , lastName , email  })=>({
        firstName,
        lastName,
        email,
        fullName () {
            return [
                firstName,
                lastName
            ].filter((n)=>n
            ).join(' ');
        }
    })
;
const user1 = createUser({
    firstName: 'Tran',
    lastName: 'Van',
    email: 'van.tran@asnet.com.vn'
});
const user2 = createUser({
    firstName: 'Lyy',
    lastName: 'Emi',
    email: 'lyyemiu@gmail.com'
});
console.log(user1, user2.fullName());
//create new objects that contain the custom keys and values
const createObjectFromArray = ([key, value])=>({
        [key]: value
    })
;
const beo = createObjectFromArray([
    'name',
    'BEO'
]);
console.log(beo);

//# sourceMappingURL=index.d1449af1.js.map
