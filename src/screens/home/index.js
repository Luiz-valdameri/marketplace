import React from 'react'
import { Button } from '../../components/button';
import { Flex } from '../../components/flex';
import { IconButton } from '../../components/iconButton';
import { Paper } from '../../components/paper';

export default function Home() {
  return (
    <div>
      <Flex flexDirection='column'>
        <Paper>
          teste de paper
        </Paper>
        <Button color='secondary'> Logout </Button>
        <IconButton color='primary'> A </IconButton>
      </Flex>
    </div>
  )
}
