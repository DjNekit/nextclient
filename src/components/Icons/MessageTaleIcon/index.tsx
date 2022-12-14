import { Icon } from "@chakra-ui/icons"
import { Box } from "@chakra-ui/react"

export const MessageTaleIcon = () => {
  return (
    <Icon width="9" height="20">
      <g fill="none" fillRule="evenodd">
        <Box 
          as='path' 
          d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z" 
          fill="white" 
          _dark={{ fill: 'blackAlpha.700' }} 
        />
      </g>
    </Icon>
  )
}