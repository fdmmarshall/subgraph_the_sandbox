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

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class SuperOperator extends ethereum.Event {
  get params(): SuperOperator__Params {
    return new SuperOperator__Params(this);
  }
}

export class SuperOperator__Params {
  _event: SuperOperator;

  constructor(event: SuperOperator) {
    this._event = event;
  }

  get superOperator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get enabled(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class AdminChanged extends ethereum.Event {
  get params(): AdminChanged__Params {
    return new AdminChanged__Params(this);
  }
}

export class AdminChanged__Params {
  _event: AdminChanged;

  constructor(event: AdminChanged) {
    this._event = event;
  }

  get oldAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ExecutionAdminAdminChanged extends ethereum.Event {
  get params(): ExecutionAdminAdminChanged__Params {
    return new ExecutionAdminAdminChanged__Params(this);
  }
}

export class ExecutionAdminAdminChanged__Params {
  _event: ExecutionAdminAdminChanged;

  constructor(event: ExecutionAdminAdminChanged) {
    this._event = event;
  }

  get oldAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ExecutionOperator extends ethereum.Event {
  get params(): ExecutionOperator__Params {
    return new ExecutionOperator__Params(this);
  }
}

export class ExecutionOperator__Params {
  _event: ExecutionOperator;

  constructor(event: ExecutionOperator) {
    this._event = event;
  }

  get executionOperator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get enabled(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class theSandBox__approveAndExecuteWithSpecificGasResult {
  value0: boolean;
  value1: Bytes;

  constructor(value0: boolean, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromBytes(this.value1));
    return map;
  }
}

export class theSandBox__approveAndExecuteWithSpecificGasAndChargeForItResult {
  value0: boolean;
  value1: Bytes;

  constructor(value0: boolean, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromBytes(this.value1));
    return map;
  }
}

export class theSandBox__executeWithSpecificGasResult {
  value0: boolean;
  value1: Bytes;

  constructor(value0: boolean, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromBytes(this.value1));
    return map;
  }
}

export class theSandBox extends ethereum.SmartContract {
  static bind(address: Address): theSandBox {
    return new theSandBox("theSandBox", address);
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  approve(spender: Address, amount: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_approve(spender: Address, amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  burnFor(owner: Address, amount: BigInt): boolean {
    let result = super.call("burnFor", "burnFor(address,uint256):(bool)", [
      ethereum.Value.fromAddress(owner),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_burnFor(owner: Address, amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("burnFor", "burnFor(address,uint256):(bool)", [
      ethereum.Value.fromAddress(owner),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(from: Address, to: Address, amount: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    from: Address,
    to: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  approveFor(owner: Address, spender: Address, amount: BigInt): boolean {
    let result = super.call(
      "approveFor",
      "approveFor(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_approveFor(
    owner: Address,
    spender: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "approveFor",
      "approveFor(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  addAllowanceIfNeeded(
    owner: Address,
    spender: Address,
    amountNeeded: BigInt
  ): boolean {
    let result = super.call(
      "addAllowanceIfNeeded",
      "addAllowanceIfNeeded(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(amountNeeded)
      ]
    );

    return result[0].toBoolean();
  }

  try_addAllowanceIfNeeded(
    owner: Address,
    spender: Address,
    amountNeeded: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "addAllowanceIfNeeded",
      "addAllowanceIfNeeded(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(amountNeeded)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  burn(amount: BigInt): boolean {
    let result = super.call("burn", "burn(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_burn(amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("burn", "burn(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isExecutionOperator(who: Address): boolean {
    let result = super.call(
      "isExecutionOperator",
      "isExecutionOperator(address):(bool)",
      [ethereum.Value.fromAddress(who)]
    );

    return result[0].toBoolean();
  }

  try_isExecutionOperator(who: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isExecutionOperator",
      "isExecutionOperator(address):(bool)",
      [ethereum.Value.fromAddress(who)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isSuperOperator(who: Address): boolean {
    let result = super.call(
      "isSuperOperator",
      "isSuperOperator(address):(bool)",
      [ethereum.Value.fromAddress(who)]
    );

    return result[0].toBoolean();
  }

  try_isSuperOperator(who: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isSuperOperator",
      "isSuperOperator(address):(bool)",
      [ethereum.Value.fromAddress(who)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getAdmin(): Address {
    let result = super.call("getAdmin", "getAdmin():(address)", []);

    return result[0].toAddress();
  }

  try_getAdmin(): ethereum.CallResult<Address> {
    let result = super.tryCall("getAdmin", "getAdmin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  approveAndExecuteWithSpecificGas(
    from: Address,
    to: Address,
    amount: BigInt,
    gasLimit: BigInt,
    data: Bytes
  ): theSandBox__approveAndExecuteWithSpecificGasResult {
    let result = super.call(
      "approveAndExecuteWithSpecificGas",
      "approveAndExecuteWithSpecificGas(address,address,uint256,uint256,bytes):(bool,bytes)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromUnsignedBigInt(gasLimit),
        ethereum.Value.fromBytes(data)
      ]
    );

    return new theSandBox__approveAndExecuteWithSpecificGasResult(
      result[0].toBoolean(),
      result[1].toBytes()
    );
  }

  try_approveAndExecuteWithSpecificGas(
    from: Address,
    to: Address,
    amount: BigInt,
    gasLimit: BigInt,
    data: Bytes
  ): ethereum.CallResult<theSandBox__approveAndExecuteWithSpecificGasResult> {
    let result = super.tryCall(
      "approveAndExecuteWithSpecificGas",
      "approveAndExecuteWithSpecificGas(address,address,uint256,uint256,bytes):(bool,bytes)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromUnsignedBigInt(gasLimit),
        ethereum.Value.fromBytes(data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new theSandBox__approveAndExecuteWithSpecificGasResult(
        value[0].toBoolean(),
        value[1].toBytes()
      )
    );
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  transfer(to: Address, amount: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(to),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(to: Address, amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(to),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getExecutionAdmin(): Address {
    let result = super.call(
      "getExecutionAdmin",
      "getExecutionAdmin():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getExecutionAdmin(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getExecutionAdmin",
      "getExecutionAdmin():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  approveAndExecuteWithSpecificGasAndChargeForIt(
    from: Address,
    to: Address,
    amount: BigInt,
    gasLimit: BigInt,
    tokenGasPrice: BigInt,
    baseGasCharge: BigInt,
    tokenReceiver: Address,
    data: Bytes
  ): theSandBox__approveAndExecuteWithSpecificGasAndChargeForItResult {
    let result = super.call(
      "approveAndExecuteWithSpecificGasAndChargeForIt",
      "approveAndExecuteWithSpecificGasAndChargeForIt(address,address,uint256,uint256,uint256,uint256,address,bytes):(bool,bytes)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromUnsignedBigInt(gasLimit),
        ethereum.Value.fromUnsignedBigInt(tokenGasPrice),
        ethereum.Value.fromUnsignedBigInt(baseGasCharge),
        ethereum.Value.fromAddress(tokenReceiver),
        ethereum.Value.fromBytes(data)
      ]
    );

    return new theSandBox__approveAndExecuteWithSpecificGasAndChargeForItResult(
      result[0].toBoolean(),
      result[1].toBytes()
    );
  }

  try_approveAndExecuteWithSpecificGasAndChargeForIt(
    from: Address,
    to: Address,
    amount: BigInt,
    gasLimit: BigInt,
    tokenGasPrice: BigInt,
    baseGasCharge: BigInt,
    tokenReceiver: Address,
    data: Bytes
  ): ethereum.CallResult<
    theSandBox__approveAndExecuteWithSpecificGasAndChargeForItResult
  > {
    let result = super.tryCall(
      "approveAndExecuteWithSpecificGasAndChargeForIt",
      "approveAndExecuteWithSpecificGasAndChargeForIt(address,address,uint256,uint256,uint256,uint256,address,bytes):(bool,bytes)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromUnsignedBigInt(gasLimit),
        ethereum.Value.fromUnsignedBigInt(tokenGasPrice),
        ethereum.Value.fromUnsignedBigInt(baseGasCharge),
        ethereum.Value.fromAddress(tokenReceiver),
        ethereum.Value.fromBytes(data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new theSandBox__approveAndExecuteWithSpecificGasAndChargeForItResult(
        value[0].toBoolean(),
        value[1].toBytes()
      )
    );
  }

  executeWithSpecificGas(
    to: Address,
    gasLimit: BigInt,
    data: Bytes
  ): theSandBox__executeWithSpecificGasResult {
    let result = super.call(
      "executeWithSpecificGas",
      "executeWithSpecificGas(address,uint256,bytes):(bool,bytes)",
      [
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(gasLimit),
        ethereum.Value.fromBytes(data)
      ]
    );

    return new theSandBox__executeWithSpecificGasResult(
      result[0].toBoolean(),
      result[1].toBytes()
    );
  }

  try_executeWithSpecificGas(
    to: Address,
    gasLimit: BigInt,
    data: Bytes
  ): ethereum.CallResult<theSandBox__executeWithSpecificGasResult> {
    let result = super.tryCall(
      "executeWithSpecificGas",
      "executeWithSpecificGas(address,uint256,bytes):(bool,bytes)",
      [
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(gasLimit),
        ethereum.Value.fromBytes(data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new theSandBox__executeWithSpecificGasResult(
        value[0].toBoolean(),
        value[1].toBytes()
      )
    );
  }

  allowance(owner: Address, spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );

    return result[0].toBigInt();
  }

  try_allowance(owner: Address, spender: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transferAndChargeForGas(
    from: Address,
    to: Address,
    amount: BigInt,
    gasLimit: BigInt,
    tokenGasPrice: BigInt,
    baseGasCharge: BigInt,
    tokenReceiver: Address
  ): boolean {
    let result = super.call(
      "transferAndChargeForGas",
      "transferAndChargeForGas(address,address,uint256,uint256,uint256,uint256,address):(bool)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromUnsignedBigInt(gasLimit),
        ethereum.Value.fromUnsignedBigInt(tokenGasPrice),
        ethereum.Value.fromUnsignedBigInt(baseGasCharge),
        ethereum.Value.fromAddress(tokenReceiver)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferAndChargeForGas(
    from: Address,
    to: Address,
    amount: BigInt,
    gasLimit: BigInt,
    tokenGasPrice: BigInt,
    baseGasCharge: BigInt,
    tokenReceiver: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferAndChargeForGas",
      "transferAndChargeForGas(address,address,uint256,uint256,uint256,uint256,address):(bool)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromUnsignedBigInt(gasLimit),
        ethereum.Value.fromUnsignedBigInt(tokenGasPrice),
        ethereum.Value.fromUnsignedBigInt(baseGasCharge),
        ethereum.Value.fromAddress(tokenReceiver)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ChangeExecutionAdminCall extends ethereum.Call {
  get inputs(): ChangeExecutionAdminCall__Inputs {
    return new ChangeExecutionAdminCall__Inputs(this);
  }

  get outputs(): ChangeExecutionAdminCall__Outputs {
    return new ChangeExecutionAdminCall__Outputs(this);
  }
}

export class ChangeExecutionAdminCall__Inputs {
  _call: ChangeExecutionAdminCall;

  constructor(call: ChangeExecutionAdminCall) {
    this._call = call;
  }

  get newAdmin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeExecutionAdminCall__Outputs {
  _call: ChangeExecutionAdminCall;

  constructor(call: ChangeExecutionAdminCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class BurnForCall extends ethereum.Call {
  get inputs(): BurnForCall__Inputs {
    return new BurnForCall__Inputs(this);
  }

  get outputs(): BurnForCall__Outputs {
    return new BurnForCall__Outputs(this);
  }
}

export class BurnForCall__Inputs {
  _call: BurnForCall;

  constructor(call: BurnForCall) {
    this._call = call;
  }

  get owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class BurnForCall__Outputs {
  _call: BurnForCall;

  constructor(call: BurnForCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ApproveForCall extends ethereum.Call {
  get inputs(): ApproveForCall__Inputs {
    return new ApproveForCall__Inputs(this);
  }

  get outputs(): ApproveForCall__Outputs {
    return new ApproveForCall__Outputs(this);
  }
}

export class ApproveForCall__Inputs {
  _call: ApproveForCall;

  constructor(call: ApproveForCall) {
    this._call = call;
  }

  get owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get spender(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ApproveForCall__Outputs {
  _call: ApproveForCall;

  constructor(call: ApproveForCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class AddAllowanceIfNeededCall extends ethereum.Call {
  get inputs(): AddAllowanceIfNeededCall__Inputs {
    return new AddAllowanceIfNeededCall__Inputs(this);
  }

  get outputs(): AddAllowanceIfNeededCall__Outputs {
    return new AddAllowanceIfNeededCall__Outputs(this);
  }
}

export class AddAllowanceIfNeededCall__Inputs {
  _call: AddAllowanceIfNeededCall;

  constructor(call: AddAllowanceIfNeededCall) {
    this._call = call;
  }

  get owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get spender(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amountNeeded(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class AddAllowanceIfNeededCall__Outputs {
  _call: AddAllowanceIfNeededCall;

  constructor(call: AddAllowanceIfNeededCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SetExecutionOperatorCall extends ethereum.Call {
  get inputs(): SetExecutionOperatorCall__Inputs {
    return new SetExecutionOperatorCall__Inputs(this);
  }

  get outputs(): SetExecutionOperatorCall__Outputs {
    return new SetExecutionOperatorCall__Outputs(this);
  }
}

export class SetExecutionOperatorCall__Inputs {
  _call: SetExecutionOperatorCall;

  constructor(call: SetExecutionOperatorCall) {
    this._call = call;
  }

  get executionOperator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get enabled(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetExecutionOperatorCall__Outputs {
  _call: SetExecutionOperatorCall;

  constructor(call: SetExecutionOperatorCall) {
    this._call = call;
  }
}

export class ApproveAndExecuteWithSpecificGasCall extends ethereum.Call {
  get inputs(): ApproveAndExecuteWithSpecificGasCall__Inputs {
    return new ApproveAndExecuteWithSpecificGasCall__Inputs(this);
  }

  get outputs(): ApproveAndExecuteWithSpecificGasCall__Outputs {
    return new ApproveAndExecuteWithSpecificGasCall__Outputs(this);
  }
}

export class ApproveAndExecuteWithSpecificGasCall__Inputs {
  _call: ApproveAndExecuteWithSpecificGasCall;

  constructor(call: ApproveAndExecuteWithSpecificGasCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get gasLimit(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class ApproveAndExecuteWithSpecificGasCall__Outputs {
  _call: ApproveAndExecuteWithSpecificGasCall;

  constructor(call: ApproveAndExecuteWithSpecificGasCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }

  get returnData(): Bytes {
    return this._call.outputValues[1].value.toBytes();
  }
}

export class ChangeAdminCall extends ethereum.Call {
  get inputs(): ChangeAdminCall__Inputs {
    return new ChangeAdminCall__Inputs(this);
  }

  get outputs(): ChangeAdminCall__Outputs {
    return new ChangeAdminCall__Outputs(this);
  }
}

export class ChangeAdminCall__Inputs {
  _call: ChangeAdminCall;

  constructor(call: ChangeAdminCall) {
    this._call = call;
  }

  get newAdmin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeAdminCall__Outputs {
  _call: ChangeAdminCall;

  constructor(call: ChangeAdminCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SetSuperOperatorCall extends ethereum.Call {
  get inputs(): SetSuperOperatorCall__Inputs {
    return new SetSuperOperatorCall__Inputs(this);
  }

  get outputs(): SetSuperOperatorCall__Outputs {
    return new SetSuperOperatorCall__Outputs(this);
  }
}

export class SetSuperOperatorCall__Inputs {
  _call: SetSuperOperatorCall;

  constructor(call: SetSuperOperatorCall) {
    this._call = call;
  }

  get superOperator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get enabled(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetSuperOperatorCall__Outputs {
  _call: SetSuperOperatorCall;

  constructor(call: SetSuperOperatorCall) {
    this._call = call;
  }
}

export class PaidCallCall extends ethereum.Call {
  get inputs(): PaidCallCall__Inputs {
    return new PaidCallCall__Inputs(this);
  }

  get outputs(): PaidCallCall__Outputs {
    return new PaidCallCall__Outputs(this);
  }
}

export class PaidCallCall__Inputs {
  _call: PaidCallCall;

  constructor(call: PaidCallCall) {
    this._call = call;
  }

  get target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class PaidCallCall__Outputs {
  _call: PaidCallCall;

  constructor(call: PaidCallCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class ApproveAndCallCall extends ethereum.Call {
  get inputs(): ApproveAndCallCall__Inputs {
    return new ApproveAndCallCall__Inputs(this);
  }

  get outputs(): ApproveAndCallCall__Outputs {
    return new ApproveAndCallCall__Outputs(this);
  }
}

export class ApproveAndCallCall__Inputs {
  _call: ApproveAndCallCall;

  constructor(call: ApproveAndCallCall) {
    this._call = call;
  }

  get target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class ApproveAndCallCall__Outputs {
  _call: ApproveAndCallCall;

  constructor(call: ApproveAndCallCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class ApproveAndExecuteWithSpecificGasAndChargeForItCall extends ethereum.Call {
  get inputs(): ApproveAndExecuteWithSpecificGasAndChargeForItCall__Inputs {
    return new ApproveAndExecuteWithSpecificGasAndChargeForItCall__Inputs(this);
  }

  get outputs(): ApproveAndExecuteWithSpecificGasAndChargeForItCall__Outputs {
    return new ApproveAndExecuteWithSpecificGasAndChargeForItCall__Outputs(
      this
    );
  }
}

export class ApproveAndExecuteWithSpecificGasAndChargeForItCall__Inputs {
  _call: ApproveAndExecuteWithSpecificGasAndChargeForItCall;

  constructor(call: ApproveAndExecuteWithSpecificGasAndChargeForItCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get gasLimit(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get tokenGasPrice(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get baseGasCharge(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get tokenReceiver(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[7].value.toBytes();
  }
}

export class ApproveAndExecuteWithSpecificGasAndChargeForItCall__Outputs {
  _call: ApproveAndExecuteWithSpecificGasAndChargeForItCall;

  constructor(call: ApproveAndExecuteWithSpecificGasAndChargeForItCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }

  get returnData(): Bytes {
    return this._call.outputValues[1].value.toBytes();
  }
}

export class ExecuteWithSpecificGasCall extends ethereum.Call {
  get inputs(): ExecuteWithSpecificGasCall__Inputs {
    return new ExecuteWithSpecificGasCall__Inputs(this);
  }

  get outputs(): ExecuteWithSpecificGasCall__Outputs {
    return new ExecuteWithSpecificGasCall__Outputs(this);
  }
}

export class ExecuteWithSpecificGasCall__Inputs {
  _call: ExecuteWithSpecificGasCall;

  constructor(call: ExecuteWithSpecificGasCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get gasLimit(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class ExecuteWithSpecificGasCall__Outputs {
  _call: ExecuteWithSpecificGasCall;

  constructor(call: ExecuteWithSpecificGasCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }

  get returnData(): Bytes {
    return this._call.outputValues[1].value.toBytes();
  }
}

export class TransferAndChargeForGasCall extends ethereum.Call {
  get inputs(): TransferAndChargeForGasCall__Inputs {
    return new TransferAndChargeForGasCall__Inputs(this);
  }

  get outputs(): TransferAndChargeForGasCall__Outputs {
    return new TransferAndChargeForGasCall__Outputs(this);
  }
}

export class TransferAndChargeForGasCall__Inputs {
  _call: TransferAndChargeForGasCall;

  constructor(call: TransferAndChargeForGasCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get gasLimit(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get tokenGasPrice(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get baseGasCharge(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get tokenReceiver(): Address {
    return this._call.inputValues[6].value.toAddress();
  }
}

export class TransferAndChargeForGasCall__Outputs {
  _call: TransferAndChargeForGasCall;

  constructor(call: TransferAndChargeForGasCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get sandAdmin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get executionAdmin(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get beneficiary(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
