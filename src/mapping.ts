import {
  Transfer as TransferEvent,
  Approval as ApprovalEvent,
  SuperOperator as SuperOperatorEvent,
  AdminChanged as AdminChangedEvent,
  ExecutionAdminAdminChanged as ExecutionAdminAdminChangedEvent,
  ExecutionOperator as ExecutionOperatorEvent
} from "../generated/theSandBox/theSandBox"
import {
  Transfer,
  Approval,
  SuperOperator,
  AdminChanged,
  ExecutionAdminAdminChanged,
  ExecutionOperator
} from "../generated/schema"

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}

export function handleSuperOperator(event: SuperOperatorEvent): void {
  let entity = new SuperOperator(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.superOperator = event.params.superOperator
  entity.enabled = event.params.enabled
  entity.save()
}

export function handleAdminChanged(event: AdminChangedEvent): void {
  let entity = new AdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleExecutionAdminAdminChanged(
  event: ExecutionAdminAdminChangedEvent
): void {
  let entity = new ExecutionAdminAdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleExecutionOperator(event: ExecutionOperatorEvent): void {
  let entity = new ExecutionOperator(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.executionOperator = event.params.executionOperator
  entity.enabled = event.params.enabled
  entity.save()
}
