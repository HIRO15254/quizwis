'use client';

import {
  Button,
  Group,
  Modal,
  Stack,
  TextInput,
  Title,
  Textarea,
} from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import React from 'react';

export interface UpdateQuizListFormType {
  name: string;
  description?: string | null | undefined;
}

interface UpdateQuizListModalProps {
  opened: boolean;
  onClose: () => void;
  form: UseFormReturnType<UpdateQuizListFormType>;
  onSubmit: () => void;
}

/**
 * クイズリストを新たに作成するためのモーダル
 */
export const UpdateQuizListModal: React.FC<UpdateQuizListModalProps> = (props) => {
  const {
    opened,
    onClose,
    form,
    onSubmit,
  } = props;

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={<Title order={3}>問題リスト編集</Title>}
    >
      <form onSubmit={onSubmit}>
        <Stack>
          <TextInput
            withAsterisk
            label="問題リスト名"
            {...form.getInputProps('name')}
          />
          <Textarea
            label="問題リストの説明"
            autosize
            minRows={2}
            {...form.getInputProps('description')}
          />
          <Group position="right">
            <Button type="submit">
              更新
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
};
