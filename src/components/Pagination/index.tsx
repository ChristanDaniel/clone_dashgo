import { Flex, Stack, Button, Box, theme, DarkMode } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'


interface PaginationProps {
    totalCountOfRigister: number;
    registerPerPage?: number;
    currentPage?: number;
    OnPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
    return [... new Array(to - from)]
    .map((_, index) => {
        return from + index + 1;
    })
    .filter(page => page > 0)
}

export function Pagination({
    totalCountOfRigister,
    registerPerPage = 10,
    currentPage = 1,
    OnPageChange
}: PaginationProps) {
    const lastPage = Math.floor(totalCountOfRigister / registerPerPage)

    return(
        <Stack
        direction= {["column","row"]}
        spacing= "6"
        mt= "8"
        justify= "space-between"
        align= "center"
        >
            <Box> 
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">
                <PaginationItem number={1} isCurrent />
                <PaginationItem number={2}  />
                <PaginationItem number={3}  />
                <PaginationItem number={4}  />
                <PaginationItem number={5}  />
                <PaginationItem number={6}  />
            </Stack>
        </Stack>
    );
}