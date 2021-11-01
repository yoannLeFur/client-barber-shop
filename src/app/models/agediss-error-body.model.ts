import {Deserializable} from './interfaces/deserializable.interface';

export class AgedissErrorBody implements Deserializable{
  public erreur : any;
  public date?: Date;

  deserialize(input: any): this {
    return Object.assign(this,input);
  }
}
