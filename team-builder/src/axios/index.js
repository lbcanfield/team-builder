import { v4 as uuid } from 'uuid'

const initialMembersList = [
    {
        id: uuid(), // generates a random unique identifier
        memberName: 'Luke Skywalker',
        email: 'luke.skywalker@rebel-alliance.com',
        role: 'Frontend Developer',
    },
    {
        id: uuid(),
        memberName: 'Darth Vader',
        email: 'vader@dark-lord.gov',
        role: 'Backend Developer',
    },
]

//Simulating axios for [GET] and [POST]
export default {
    get() {
        return Promise.resolve({ status: 200, success: true, data: initialMembersList })
    },
    post(url, { memberName, email, role }) {
        const newMember = { id: uuid(), memberName, email, role }
        return Promise.resolve({ status: 200, success: true, data: newMember })
    }
}