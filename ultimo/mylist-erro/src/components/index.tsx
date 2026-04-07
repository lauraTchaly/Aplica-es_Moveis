import React, { forwardRef, Fragment } from "react";

import {View,Text,TextInput,TextInputProps, TouchableOpacity} from 'react-native';

import { style } from './styles';
import {MaterialIcons,FontAwesome,Octicons} from '@expo/vector-icons';
import { themas } from "../global/themes";
type IconComponentType = typeof MaterialIcons | typeof FontAwesome | typeof Octicons;

type Props = TextInputProps & {
  IconLeft?: IconComponentType;
  IconRight?: IconComponentType;
  iconLeftName?: string;
  iconRightName?: string;
  title: string;
  onIconLeftPress?: () => void;
  onIconRightPress?: () => void;
};
// type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
//                      React.ComponentType<React.ComponentProps<typeof FontAwesome>>
//                      React.ComponentType<React.ComponentProps<typeof Octicons>>;

// type Props = TextInputProps & {
//     Iconleft?:IconComponent,
//     IconRigth?:IconComponent,
//     iconLeftName?:string,
//     iconRigthName?:string,
//     title?:string,
//     onIconLeftPress?: () => void,
//     onIconRigthPress?: () => void,


// }


export const Input = forwardRef<TextInput, Props>((props, ref) => {
    const{IconLeft, IconRight,iconLeftName,iconRightName,title,onIconLeftPress,onIconRightPress,...rest} = props
    const calculateSizeWidth = () =>{
        if(IconLeft && IconRight){
            return '80%'
        }else if(IconLeft || IconRight){
            return '90%'
        }else{
            return '100%'
        }
    }
    const calculatePaddingLeft = () =>{
        if(IconLeft && IconRight){
            return 15
        }else if(IconLeft || IconRight){
            return 10
        }else{
            return 20
        }
    }
    return(
        <Fragment>
          {title&&<Text style={style.titleInput}>{title}</Text>}

          <View style={[style.boxInput,{paddingLeft: calculatePaddingLeft()}]}>
            
            <TouchableOpacity onPress={onIconLeftPress}>
            {IconLeft && iconLeftName && (
                <IconLeft
                    name={iconLeftName as any} size={20} color={themas.colors.gray} style={style.Icon}
                />)}
            </TouchableOpacity>
                    <TextInput
                      style={[
                        style.input,
                        { width: calculateSizeWidth()}
                      ]}
                      {...rest}
                />
               <TouchableOpacity onPress={onIconRightPress}>
            {IconRight && iconRightName && (
                <IconRight
                    name={iconRightName as any} size={20} color={themas.colors.gray} style={style.Icon}
                />)}
            </TouchableOpacity>
                </View>
        </Fragment>
    )

})