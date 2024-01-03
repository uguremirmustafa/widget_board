export type User = {
  id: string;
  created_at: string;
  updated_at: string;
  username: string;
};

type SettingValueTypes = {
  // NUMBER: number;
  STRING: string;
  LIST_SINGLE: string[];
  LIST_MULTI: string[];
  LIST_ORDERED: string[];
  BOOLEAN: boolean;
};

export const SettingTypes = [
  // 'NUMBER',
  'STRING',
  'LIST_SINGLE',
  'LIST_MULTI',
  'LIST_ORDERED',
  'BOOLEAN',
] as const;

export type SettingType = (typeof SettingTypes)[number];

export type SettingGroup = {
  groupId: string;
  groupName: string;
  settings: Setting[];
};

export type Setting = {
  id: string;
  name: string;
  code: string;
  typeCode: SettingType;
  value: unknown;
  options: string[];
  groupId: string;
  groupName: string;
};

export type TypedSetting<T extends SettingType> = Setting & {
  typeCode: T;
  value: SettingValueTypes[T];
};

export type SettingList = TypedSetting<SettingType>[];

export type PageLink = {
  name: string;
  path: string;
  icon: string;
};

export type Widget = {
  id: string;
  name: string;
  description: string;
  icon: string;
  path: string;
};
