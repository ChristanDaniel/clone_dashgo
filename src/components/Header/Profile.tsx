import { Flex, Text, Box, Avatar } from '@chakra-ui/react'


export function Profile() {
    return(
        <Flex align="center">
                  <Box mr="4" textAlign="right">
                      <Text>Christian Daniel</Text>
                      <Text color="gray.300" fontSize="small">
                          christian_daniel04@hotmail.com
                      </Text>
                  </Box>

                      <Avatar size="md" name="Christian Daniel" src="http://github.com/ChristanDaniel.png"/>
              </Flex>
    )
}