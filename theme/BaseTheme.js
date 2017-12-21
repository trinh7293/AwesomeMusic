/**
 * Created by Thanh on 6/7/2017.
 */

import {StyleSheet, Platform} from "react-native";

export const statusBarMargin = Platform.OS == 'ios' ? 20 : 0;
export const statusBarHeight = Platform.OS == 'ios' ? 20 : 24;
export const appBarHeight = Platform.OS == 'ios' ? 56 : 56
export const appBarButtonSize = Platform.OS == 'ios' ? 40 : 52
export const textInputHeight = Platform.OS == 'ios' ? 35 : 40
export const buttonHeight = Platform.OS == 'ios' ? 35 : 42
export const buttonUnderlayColor = "#00000020";//'#E6E6FA60'
export const inverseButtonUnderlayColor = '#E6E6FA60'

export const STATUS_BAR_LIGHT_BG = '#9E9E9E';
export const SECONDARY_TEXT_COLOR_LIGHT = '#58585880';
export const APP_COLOR = '#3A2B24';
// export const APP_COLOR = '#FFFFFF';
export const APP_COLOR_DARK = '#2a1f1a';
export const APP_COLOR_LIGHT = '#4f3e35';
export const SECONDARY_APP_COLOR = '#DD7401';
export const THIRD_APP_COLOR = '#20BE12';
export const SECONDARY_APP_COLOR_UNDERLAY = '#E9A35C';
export const BUTTON_GREEN = '#20BE12';
export const BUTTON_CANCEL = '#DD0D0B';
export const APP_TEXT_COLOR = '#FFFFFF';
export const CAPTCHA_CONTAINER = '#FFFFFF';
export const CAPTCHA_TEXT = '#000000';
export const HEADER_TINT_COLOR = '#FFFFFF';
export const SECONDARY_TEXT_COLOR = '#585858';
export const TEXT_COLOR = '#000000';
export const TEXT_WHITE = '#FFFFFF';
export const TEXT_BROWN = '#82471E';
export const BORDER_COLOR = '#47362e';
export const APP_GOLD_COLOR = '#F8D300';
export const APP_COLOR_INVERSE = 'white';
export const APP_ACTION_COLOR = '#0084FF';
export const BACKGROUND_COLOR = '#FFFFFF';
export const INVERSE_BACKGROUND_COLOR = '#000000';
export const ACTIVE_TINT_COLOR = '#F8D300';
export const INACTIVE_TINT_COLOR = '#FFFFFF';
export const CLOSE_ICON_VIEW = '#594338';
export const FONT_SIZE = 15;

export const APP_BAR_STYLE = {
    backgroundColor: APP_COLOR,
    shadowColor: 'transparent',
    shadowOpacity: 0,
    height: appBarHeight + statusBarHeight,
    paddingTop: statusBarHeight,
    elevation: 0,
}

export const APP_BAR_TITLE_STYLE = {
    color: TEXT_WHITE,
    fontWeight: '500',
}

export const TAB_BAR_STYLE = {
    backgroundColor: APP_COLOR,
    // shadowColor: 'black',
    // shadowOpacity: 1,
    // elevation: 4,
}

export const TAB_BAR_LABEL_STYLE = {
    color: TEXT_WHITE,
    fontWeight: '500'
}

export const inputTextStyle = {
    paddingLeft: 20,
    width: 280,
    height: textInputHeight,
    borderRadius: textInputHeight/2,
    borderWidth: 0.5,
    alignSelf: 'center',
    borderColor: APP_COLOR,
    borderBottomWidth: 0.5,
    borderBottomColor: APP_COLOR,
    fontSize: 15,
    color: APP_COLOR
}

export const buttonSubmitFormStyle = {
    borderRadius: 10,
    marginHorizontal: 5,
    // paddingVertical: 15,
}
export const buttonTextSubmitFormStyle = {
    fontWeight: 'bold',
    fontSize: 18,
}

export const buttonBackStyle = {
    width: 50,
    height: 50,
    marginTop: Platform.OS == 'ios' ? statusBarHeight : 0,
    alignItems:'center',
    justifyContent:'center',
    position: 'absolute'
}


// picker custom modal
export const pickerContainer = {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    backgroundColor: BUTTON_GREEN,
    // marginTop: 20,
    marginHorizontal: Platform.OS == 'ios' ? 20: 15,
    paddingHorizontal: 10,
    borderRadius: 7,
}
export const pickerModal = {
    position: 'absolute',
    backgroundColor: APP_COLOR,
    flexShrink: 1,
    // marginTop: -50,
    height: 280,
    width: 259,
    // borderRadius: 10,
}
export const modalHeaderView = {
    flexGrow: 3,
    position: 'relative',
    justifyContent: 'center',
    maxHeight: 55,
    // flexDirection: 'row',
    backgroundColor: SECONDARY_APP_COLOR
}
export const modalHeadertTextView = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
}
export const modalHeadertText = {
    color: APP_TEXT_COLOR,
    fontSize: 15,
    fontWeight: 'bold',
}
export const modalHeadertIconView = {
    backgroundColor: CLOSE_ICON_VIEW,
    // flex: 1,
    position: 'absolute',
    right: 0,
    marginRight: 5,
    width: 20,
    height: 20,
    borderRadius: 3,
    // fontSize: 15,
    // fontWeight: 'bold',
}
// export const flatListPickerModal = {
//     flexGrow: 1,
//     backgroundColor:'green',
// }
export const touchablePickerModal = {
    flexDirection: 'row',
    flex: 4,
    // borderWidth: 0.5,
    borderColor: BORDER_COLOR
    // backgroundColor:'green',
}
export const iconPickerModalContainer = {
    // flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
}
export const iconPickerModal = {
    // color: BUTTON_GREEN
}
export const textPickerModalContainer = {
    // flexGrow: 9,
    justifyContent: 'center',
    alignItems: 'flex-start',
}
export const textPickerModal = {
    color: APP_TEXT_COLOR
}

export const initValueTextContainer = {
    flexGrow: 1
}

export const initValueText = {
    color: APP_TEXT_COLOR,
    fontSize: 17
}


