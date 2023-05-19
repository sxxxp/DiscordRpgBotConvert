const dump = [{ id: "1234", password: "1234" }];

interface Iinfo {
  uid: string;
  stat: Istat | {};
}
interface Istat {
  str: number;
  power: number;
  hp: number;
  crit: number;
  crit_damage: number;
  crit_percent: number;
}

class Authorize {
  static instance: Authorize | undefined;
  constructor(private info?: Iinfo) {
    if (Authorize.instance) return Authorize.instance;
    Authorize.instance = this;
  }
  Signin(id: string, password: string) {
    if (!this.info) this.info = { uid: "", stat: {} };
    const user = dump.find(
      (user) => user.id === id && user.password === password
    );
    if (!user) throw new Error();
    this.info.uid = user.id;
  }
  GetId() {
    return this.info?.uid;
  }
}

export { Authorize };
export type { Iinfo };
