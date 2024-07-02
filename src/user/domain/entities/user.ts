export class User {
    constructor(
        readonly id: string,
        readonly name: string,
        readonly last_name: string,
        readonly email: string,
        readonly password: string,
    ) { }
}