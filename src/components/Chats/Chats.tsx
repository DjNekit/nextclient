import { memo } from "react"
import { Center, Flex, Spinner, Text } from "@chakra-ui/react"
import { useAppSelector } from "@/hooks/useAppSelector"
import { useAppDispatch } from "@/hooks/useAppDispatch"

import { ChatItem } from "../ChatItem/ChatItem"
import { chatActions } from "@/redux/slices/chat.slice"
import { useChatsQuery } from "@/redux/api/chat"
import { IChat } from "@/types"


export const Chats = memo(() => {
  const dispatch = useAppDispatch()
  const { isLoading } = useChatsQuery('')
  const { activeChat, chats } = useAppSelector(state => state.chat)

  if (isLoading) {
    return (
      <Center h='100%'>
        <Spinner />
      </Center>
    )
  }

  if (!chats.length && !isLoading) {
    return (
      <Center h='100%'>
        <Text>You don't have any active chats yet</Text>
      </Center>
    )
  }

  return (
    <Flex
      pt={5}
      flexDirection='column' 
    >
      {chats.map((chat: IChat) => {
        const isPrivate = chat.isPrivate
        const name = isPrivate 
          ? chat.members[0].name 
          : ''

        const email = isPrivate 
          ? chat.members[0].email 
          : undefined

        return (
          <ChatItem
            key={chat.id}
            name={name}
            email={email}
            isActive={activeChat?.id === chat.id}
            onClick={() => dispatch(chatActions.setChat(chat))}
          />
        )
      })}
    </Flex>
  )
})