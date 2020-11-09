export interface ConsentEntry {
  name: string;
  email: string;
  consents: string[];
}

export interface StateObject {
  consents: ConsentEntry[]
}
