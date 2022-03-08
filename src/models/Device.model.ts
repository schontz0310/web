export interface Device {
  id: string,
  code: string,
  model: string,
  status: DeviceStauts,
  variant: DeviceVariant,
}

export enum DeviceStauts {
  PENDING = 'pending',
  INACTIVE = 'inactive',
  ACTIVE = 'active',
  BLOCKED = 'blocked',
}

export enum DeviceVariant {
  SIMPLE = 'simples',
  DOUBLE = 'dupla'
}