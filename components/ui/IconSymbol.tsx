import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {SymbolWeight} from 'expo-symbols';
import React from 'react';
import {OpaqueColorValue, StyleProp, ViewStyle} from 'react-native';

// Add your SFSymbol to MaterialIcons mappings here.
const MAPPING = {
    'house.fill': 'home',
    'paperplane.fill': 'send',
    'chevron.left.forwardslash.chevron.right': 'code',
    'chevron.right': 'chevron-right',
} as Partial<
    Record<
        import('expo-symbols').SymbolViewProps['name'],
        React.ComponentProps<typeof MaterialIcons>['name']
    >
>;

export type IconSymbolName = keyof typeof MAPPING;

export function IconSymbol({
                               name,
                               size = 24,
                               color,
                               style,
                           }: {
    name: IconSymbolName;
    size?: number;
    color: string | OpaqueColorValue;
    style?: StyleProp<ViewStyle>;
    weight?: SymbolWeight;
}) {
    // @ts-ignore
    return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style}/>;
}
