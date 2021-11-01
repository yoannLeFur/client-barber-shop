import {Deserializable} from "./interfaces/deserializable.interface";

export class Check implements Deserializable {

  public id?: number;
  public libelle?: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this
  }

}
