import { Settings, SettingsActionTypes, SettingsState } from './types';

export const setCollapsed = (collapsed?: SettingsState['collapsed']) => (dispatch: (arg: SettingsActionTypes) => SettingsActionTypes) => {
  dispatch(success());

  function success(): SettingsActionTypes {
    return { type: Settings.SIDER_COLLAPSED, payload: collapsed };
  }
};

export const setForcedCollapsed = (forcedCollapsed: SettingsState['forcedCollapsed']) => (
  dispatch: (arg: SettingsActionTypes) => SettingsActionTypes,
) => {
  dispatch(success());

  function success(): SettingsActionTypes {
    return { type: Settings.SIDER_FORCE_COLLAPSED, payload: forcedCollapsed };
  }
};

export const setOrientation = (orientation: SettingsState['orientation']) => (
  dispatch: (arg: SettingsActionTypes) => SettingsActionTypes,
) => {
  dispatch({ type: Settings.ORIENTATION_CHANGE, payload: orientation });
};
