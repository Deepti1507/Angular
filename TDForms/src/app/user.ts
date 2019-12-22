export class User {
  constructor(
    public name: string,
    public email: string,
    public mobile: number,
    public empNumber: number,
    public topic: string,
    public timePreference: string,
    public subscribe: boolean
  ) {}
}
