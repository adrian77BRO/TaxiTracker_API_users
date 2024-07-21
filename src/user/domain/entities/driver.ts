export class Driver {
    constructor(
        readonly id: string,
        readonly kit_id: string,
        readonly name: string,
        readonly last_name: string,
        readonly pin: number,
        readonly image: string
    ) { }
}