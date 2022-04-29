// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Equip extends ethereum.Event {
  get params(): Equip__Params {
    return new Equip__Params(this);
  }
}

export class Equip__Params {
  _event: Equip;

  constructor(event: Equip) {
    this._event = event;
  }

  get _apo_id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _slot(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _equip_token(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _equip_id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get preferExtra(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Divest extends ethereum.Event {
  get params(): Divest__Params {
    return new Divest__Params(this);
  }
}

export class Divest__Params {
  _event: Divest;

  constructor(event: Divest) {
    this._event = event;
  }

  get _apo_id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _slot(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _equip_token(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _equip_id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get preferExtra(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Birth extends ethereum.Event {
  get params(): Birth__Params {
    return new Birth__Params(this);
  }
}

export class Birth__Params {
  _event: Birth;

  constructor(event: Birth) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get apostleTokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get matronId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get sireId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get genes(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get talents(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get coolDownIndex(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get generation(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get birthTime(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }
}

export class apostle extends ethereum.SmartContract {
  static bind(address: Address): apostle {
    return new apostle("apostle", address);
  }
}
