export enum Settings {
  SIDER_COLLAPSED = 'Site/SIDER_COLLAPSED',
  SIDER_FORCE_COLLAPSED = 'Site/SIDER_FORCE_COLLAPSED',
  ORIENTATION_CHANGE = 'Site/ORIENTATION_CHANGE',
}

export interface SettingsState {
  orientation: 'portrait' | 'landscape' | undefined;
  collapsed: boolean;
  forcedCollapsed: boolean;
}

export interface SIDER_COLLAPSED {
  type: typeof Settings.SIDER_COLLAPSED;
  payload?: SettingsState['collapsed'];
}

export interface SIDER_FORCE_COLLAPSED {
  type: typeof Settings.SIDER_FORCE_COLLAPSED;
  payload: SettingsState['forcedCollapsed'];
}

export interface ORIENTATION_CHANGE {
  type: typeof Settings.ORIENTATION_CHANGE;
  payload: SettingsState['orientation'];
}

export type SettingsActionTypes = SIDER_COLLAPSED | SIDER_FORCE_COLLAPSED | ORIENTATION_CHANGE;
