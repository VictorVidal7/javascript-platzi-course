/* En este desafío vas a recibir un array de objetos. Cada objeto representa a un usuario. Debes encontrar al usuario con cierto ID y retornar su nombre. En caso de no existir, debes retornar false.

Input

const users = [];
users.push({ id: 123, name: 'Juanito Alcachofa' });
users.push({ id: 456, name: 'Juanita Alcaparra' });

solution(users, 456);
solution(users, 999);

Output

Juanita Alcaparra
false */

function solution(users, id) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            return users[i].name;
        }
    }
    return false;
}