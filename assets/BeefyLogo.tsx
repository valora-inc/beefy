import * as React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import Svg, { ClipPath, Defs, G, Mask, Path, Rect } from 'react-native-svg'

interface Props {
  size?: number
  color?: string
  style?: ViewStyle
  testID?: string
}

export default function Logo({
  style,
  size = 32,
  color = '#ffffff',
  testID,
}: Props) {
  return (
    <View testID={testID} style={[styles.container, style]}>
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <G clipPath="url(#clip0_2622_51492)">
          <Mask
            id="mask0_2622_51492"
            style={{
              maskType: 'luminance',
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={24}
            height={24}
          >
            <Path d="M0 0H24V24H0V0Z" fill="white" />
          </Mask>
          <G mask="url(#mask0_2622_51492)">
            <Mask
              id="mask1_2622_51492"
              style={{
                maskType: 'luminance',
              }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={24}
              height={24}
            >
              <Path d="M24 0H0V24H24V0Z" fill="white" />
            </Mask>
            <G mask="url(#mask1_2622_51492)">
              <Path
                d="M12 1.28063C13.4477 1.28063 14.8514 1.56393 16.1722 2.12257C16.8072 2.39108 17.4196 2.72362 17.9927 3.11065C18.5606 3.49428 19.0947 3.93494 19.5801 4.42029C20.0655 4.90568 20.5061 5.43983 20.8898 6.00759C21.2769 6.5806 21.6094 7.19303 21.8778 7.82791C22.4364 9.14867 22.7196 10.5522 22.7196 11.9999C22.7196 13.4476 22.4364 14.8512 21.8778 16.1719C21.6092 16.8068 21.2769 17.4193 20.8898 17.9923C20.5061 18.5602 20.0655 19.0942 19.5801 19.5795C19.0947 20.0649 18.5606 20.5056 17.9927 20.8892C17.4196 21.2764 16.8072 21.6088 16.1722 21.8773C14.8514 22.4359 13.4477 22.7192 12 22.7192C10.5523 22.7192 9.14857 22.4359 7.82778 21.8773C7.19282 21.6088 6.58036 21.2763 6.00731 20.8892C5.43942 20.5056 4.90534 20.0649 4.41991 19.5795C3.93452 19.0942 3.49391 18.56 3.11022 17.9923C2.72311 17.4193 2.39064 16.8068 2.12218 16.1719C1.56365 14.8512 1.28039 13.4476 1.28039 11.9999C1.28039 10.5522 1.56365 9.14867 2.12218 7.82791C2.39078 7.19303 2.72311 6.5806 3.11022 6.00759C3.49391 5.43969 3.93452 4.90568 4.41991 4.42029C4.90534 3.93494 5.43942 3.49428 6.00731 3.11065C6.58036 2.72347 7.19282 2.39108 7.82778 2.12257C9.14857 1.56393 10.5523 1.28063 12 1.28063ZM12 0C5.37253 0 0 5.37253 0 12.0001C0 18.6276 5.37253 24.0001 12 24.0001C18.6275 24.0001 24 18.6276 24 12.0001C24 5.37253 18.6275 0 12 0Z"
                fill={color}
              />
              <Path
                d="M8.35856 7.40194V6.51717C8.35856 5.80146 8.82689 5.21976 9.53226 5.09527C10.0653 5.00122 10.558 5.10083 10.9502 5.50876C11.2073 5.77599 11.3399 6.09884 11.345 6.46996C11.3494 6.77774 11.346 7.08565 11.346 7.39769H12.9647C12.9658 7.37849 12.9678 7.35813 12.9678 7.33764V6.49812C12.97 5.70313 13.5981 5.07522 14.3928 5.06794C14.6668 5.06509 14.9334 5.09228 15.1774 5.22447C15.678 5.49609 15.9399 5.91885 15.954 6.4883C15.9614 6.78897 15.9553 7.09005 15.9553 7.40095H18.0591C18.4525 7.40095 18.7124 7.66279 18.7481 8.05437C18.7787 8.38948 18.6925 8.69468 18.5817 9.00133C18.4676 9.31865 18.303 9.6153 18.0943 9.88013C17.9294 10.0897 17.7437 10.2848 17.5537 10.4718C17.3067 10.7137 17.047 10.9429 16.79 11.1743C16.6494 11.3006 16.5229 11.4369 16.4423 11.6093C16.4191 11.6588 16.3996 11.7157 16.3996 11.7693C16.3972 13.0586 16.4024 14.3481 16.396 15.6374C16.3885 17.1868 15.2424 18.5686 13.7214 18.8628C13.4864 18.907 13.248 18.9303 13.0088 18.9326C12.3402 18.9417 11.6715 18.9359 11.0029 18.9357C9.37092 18.9357 8.00347 17.8229 7.68409 16.2249C7.64196 16.0039 7.62119 15.7794 7.62205 15.5545C7.61621 14.2983 7.61951 13.0422 7.6182 11.786C7.61735 11.7467 7.60883 11.7081 7.59317 11.6722C7.49117 11.4351 7.31122 11.2612 7.12368 11.0919C6.8706 10.8631 6.62023 10.6314 6.37254 10.3969C6.08358 10.1239 5.82438 9.82364 5.63657 9.47202C5.42504 9.07659 5.2455 8.66622 5.24564 8.20435C5.24492 8.10018 5.25645 7.99631 5.2798 7.89485C5.35091 7.60201 5.61041 7.40339 5.91458 7.40294C6.70174 7.40194 7.48904 7.40194 8.2762 7.40294L8.35856 7.40194ZM10.6841 8.82402H8.1106C7.94514 8.82402 7.80303 8.93516 7.78167 9.09722C7.76787 9.19099 7.76917 9.28648 7.78565 9.37983C7.84258 9.66783 7.96763 9.92864 8.16821 10.1426C8.3688 10.3567 8.58703 10.547 8.79077 10.7545C8.94469 10.911 9.04244 11.0973 9.04217 11.3268C9.04073 12.7345 9.04073 14.1422 9.04217 15.5499C9.041 15.6495 9.04729 15.749 9.06064 15.8476C9.20293 16.814 10.0138 17.5124 10.9905 17.5124C11.6614 17.5124 12.3323 17.5121 13.0033 17.5117C13.1028 17.5127 13.2023 17.507 13.3012 17.4946C14.2588 17.363 14.9725 16.5451 14.9738 15.5784C14.9738 15.3437 14.9718 15.1088 14.9754 14.8744C14.9754 14.8199 14.96 14.7976 14.9079 14.7815C14.4133 14.63 13.9404 14.4151 13.5006 14.1425C12.4905 13.515 11.7167 12.6743 11.2151 11.5911C10.9746 11.0714 10.8095 10.5283 10.7516 9.95851C10.7137 9.58516 10.7058 9.20823 10.6841 8.82402ZM14.8759 12.5979C14.8802 12.2456 14.5981 11.9566 14.2458 11.9525C13.8936 11.9482 13.6046 12.2304 13.6005 12.5827C13.5962 12.935 13.8784 13.224 14.2306 13.2281H14.2322C14.583 13.2328 14.8712 12.9522 14.8759 12.6015V12.5979Z"
                fill={color}
              />
              <Path
                d="M10.935 12.5927C10.9338 12.945 10.6471 13.2298 10.2949 13.2285C9.94258 13.2272 9.65791 12.9405 9.65918 12.5881C9.66049 12.2358 9.94715 11.9511 10.2994 11.9524H10.3017C10.6525 11.9535 10.9362 12.2388 10.935 12.5899V12.5927Z"
                fill={color}
              />
            </G>
          </G>
        </G>
        <Defs>
          <ClipPath id="clip0_2622_51492">
            <Rect width={24} height={24} fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowColor: 'rgba(46, 51, 56, 0.15)',
  },
})
