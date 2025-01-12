import { ViewStyle } from 'react-native';
import { Theme } from 'store/theme';

export interface DatePickerProps {
  containerStyle?: ViewStyle;
  theme?: Theme;
  label: string;
  defaultLabel?: string;
  startDate: Date | null;
  setStartDate: (date: Date | null) => void;
  endDate?: Date | null;
  setEndDate?: (date: Date | null) => void;
  hideActionButton?: boolean;
}
