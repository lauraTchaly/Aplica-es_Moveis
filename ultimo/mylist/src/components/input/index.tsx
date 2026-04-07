import React, { forwardRef, Fragment} from "react";
import { View,Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import { themas } from "../../global/themes";
import { style } from "./styles";
import { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";

type IconComponent =
  | typeof MaterialIcons
  | typeof FontAwesome
  | typeof Octicons;

type Props = TextInputProps & {
    IconLeft?:IconComponent,
    IconRigth?: IconComponent,
    iconLeftName?: string,
    iconRightName?: String,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRigthPress?: () => void
}

export const Input = forwardRef<TextInput, Props>((props, ref) => {
    const {IconLeft,IconRigth,iconLeftName,iconRightName,title,onIconLeftPress,onIconRigthPress, ...rest} = props
    return(
<Fragment>
    <Text style={style.titleInput}>{title}</Text>
       <View style={style.boxInput}>
         <TouchableOpacity>
             {IconLeft && iconLeftName && (
             <IconLeft
              name={iconLeftName as any}
              size={20}
              color={themas.colors.gray}
          />
  )}
        </TouchableOpacity>
            <TextInput
                style ={style.input}
            />
            <MaterialIcons
                name='email'
                size={20}
                color={themas.colors.gray}
            />    

        </View>
</Fragment>
    )
}
)