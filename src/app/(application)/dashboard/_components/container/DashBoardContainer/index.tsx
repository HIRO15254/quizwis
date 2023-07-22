'use client';

import { Group, Paper, Title } from '@mantine/core';
import React from 'react';

import { DashBoard } from '../../presenter';

/**
 * 説明
 */
export const DashBoardContainer: React.FC = () => (
  <Group position="center" pb="sm">
    <Paper w="100%" maw={1200} p="xl" shadow="xs">
      <Title order={1} mb="md">ダッシュボード</Title>
      <DashBoard />
    </Paper>
  </Group>
);
