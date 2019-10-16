import { Injectable } from '@angular/core';
import { JSONSchema, StorageMap } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';
import { AES, enc, MD5 } from 'crypto-js';
import { map } from 'rxjs/operators';

const ENCRYPTION_KEY = MD5(["T", "Q", "G", "k", "F", "x", "5", "E", "%", "X", "2", "L", "z", "r", "0", "4"].join('')).toString();
const schema: JSONSchema = {
  type: 'object',
  properties: {
    full_name: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
  },
  required: ['full_name', 'email']
}

@Injectable({
  providedIn: 'root'
})


export class StorageService extends StorageMap {
  /**
   * Gets an item from storage
   * @param key
   * @param schema
   */
  getItem<T = any>(key: string): Observable<T | null> {

    return super.get<T>(key, schema).pipe(map((data) => {
      if (!data) {
        return null;
      }

      return <T>JSON.parse(this.decode(String(data)));
    }));
  }

  /**
   * Sets an item in storage
   * @param key The item's key
   * @param data The item's value, must NOT be null or undefined
   * @returns An RxJS Observable to wait the end of the operation
   */
  setItem<T = any>(key: string, data: T): Observable<boolean> {
    return super.set(key, this.encode(data));
  }

  private encode(data: any): string {
    return AES.encrypt(JSON.stringify(data), ENCRYPTION_KEY).toString();
  }

  private decode(data: string): string {
    return AES.decrypt(data, ENCRYPTION_KEY).toString(enc.Utf8);
  }
}
