import {AgedissErrorBody} from './agediss-error-body.model';
import {Deserializable} from './interfaces/deserializable.interface';

export class AgedissError implements Deserializable, Error {
  public body?: AgedissErrorBody | null;
  // @ts-ignore
  public message?: string;
  // @ts-ignore
  public name?: string;

  deserialize(input: any): this {
    Object.assign(this,input);
    this.body = (input.body) ? new AgedissErrorBody().deserialize(input.body) : null;
    return this;

  }
}

